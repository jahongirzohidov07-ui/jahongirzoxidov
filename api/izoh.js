'use strict';
/* Insho izohlari.
   GET  /api/izoh?f=7                       -> { items }  faqat chiqarilgan izohlar
        (x-admin-pin bilan)                 -> { items, author:true }  kutayotganlari ham (ok:false)
   GET  /api/izoh?kutish=1  (x-admin-pin)   -> { counts: { '7': 2 }, total }
   POST /api/izoh {f, name, text, title, website}   -> yangi izoh (muallif ko'rib chiqquncha yashirin)
   POST /api/izoh {a:'ok'|'del'|'javob', f, id, text} (x-admin-pin) -> moderatsiya -> { items } */

const { configured, redis } = require('./_lib/redis');
const { clientIp, readJson, send, checkPin } = require('./_lib/util');
const IZ = require('./_lib/izoh');

const FOLIO_RE = /^\d{1,4}$/;
const ID_RE = /^[a-z0-9]{6,20}$/;
const LIMIT = 5;          /* bitta IP dan ... */
const WINDOW = 600;       /* ... 10 daqiqada */

function clean(s, max) {
  return String(s || '')
    .replace(/\r\n?/g, '\n')
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F​-‏‪-‮⁦-⁩]/g, '')
    .replace(/[ \t]+/g, ' ')
    .replace(/ *\n */g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
    .slice(0, max);
}

function publicView(c) {
  const o = { id: c.id, name: c.name, text: c.text, at: c.at };
  if (c.reply) { o.reply = c.reply; o.replyAt = c.replyAt; }
  return o;
}

function authorView(c) {
  return Object.assign(publicView(c), { ok: !!c.ok });
}

module.exports = async (req, res) => {
  if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });
  const hasPin = Boolean(req.headers['x-admin-pin']);

  if (req.method === 'GET') {
    const q = req.query || {};
    if (q.kutish) {
      const auth = await checkPin(req);
      if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
      try {
        const counts = await IZ.pendingCounts();
        return send(res, 200, { counts, total: Object.values(counts).reduce((s, n) => s + n, 0) });
      } catch (e) { return send(res, 500, { error: 'redis' }); }
    }
    const f = String(q.f || '');
    if (!FOLIO_RE.test(f)) return send(res, 400, { error: 'f' });
    let author = false;
    if (hasPin) {
      const auth = await checkPin(req);
      if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
      author = true;
    }
    try {
      const all = await IZ.list(f);
      return author
        ? send(res, 200, { items: all.map(authorView), author: true })
        : send(res, 200, { items: all.filter(c => c.ok).map(publicView) });
    } catch (e) { return send(res, 500, { error: 'redis' }); }
  }

  if (req.method === 'POST') {
    const b = await readJson(req);
    const f = String(b.f || '');
    if (!FOLIO_RE.test(f)) return send(res, 400, { error: 'f' });

    /* --- muallif: moderatsiya --- */
    if (b.a) {
      const auth = await checkPin(req);
      if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
      const id = String(b.id || '');
      if (!ID_RE.test(id)) return send(res, 400, { error: 'id' });
      try {
        let c;
        if (b.a === 'ok') c = await IZ.approve(f, id);
        else if (b.a === 'del') c = await IZ.remove(f, id);
        else if (b.a === 'javob') c = await IZ.reply(f, id, clean(b.text, 1500));
        else return send(res, 400, { error: 'a' });
        if (!c) return send(res, 404, { error: 'Izoh topilmadi' });
        return send(res, 200, { ok: true, items: (await IZ.list(f)).map(authorView), author: true });
      } catch (e) { return send(res, 500, { error: 'redis' }); }
    }

    /* --- o'quvchi: yangi izoh --- */
    if (b.website) return send(res, 200, { ok: true, pending: true }); /* bot to'ldirgan yashirin maydon */
    const name = clean(b.name, 40).replace(/\n/g, ' ');
    const text = clean(b.text, 1500);
    if (name.length < 2) return send(res, 400, { error: 'Ismingizni yozing' });
    if (text.length < 3) return send(res, 400, { error: 'Izoh juda qisqa' });

    try {
      const rl = 'izohrl:' + clientIp(req);
      const n = Number(await redis('INCR', rl)) || 0;
      if (n === 1) await redis('EXPIRE', rl, WINDOW);
      if (n > LIMIT) return send(res, 429, { error: 'Juda ko\'p izoh yuborildi. Birozdan keyin qayta urinib ko\'ring' });

      const c = await IZ.add({ f, name, text });
      /* Telegram xabari javobni sekinlashtirmasin: ko'pi bilan 3 soniya kutamiz */
      await Promise.race([
        IZ.notify(c, clean(b.title, 120)).catch(() => null),
        new Promise(r => setTimeout(r, 3000))
      ]);
      return send(res, 200, { ok: true, pending: true });
    } catch (e) { return send(res, 500, { error: 'redis' }); }
  }

  res.setHeader('Allow', 'GET, POST');
  return send(res, 405, { error: 'method' });
};

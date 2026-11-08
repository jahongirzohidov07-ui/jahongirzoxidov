'use strict';
/* Murojaat va arizalar (Dasturlar, kitob buyurtmasi, hamkorlik).
   POST /api/murojaat {turi, ism, aloqa, yosh, shahar, xabar, website}  -> { ok: true }
        Bazaga yoziladi (murojaat:list) va muallifga Telegram'da xabar boradi (bot ulangan bo'lsa).
   GET  /api/murojaat  (x-admin-pin)  -> { items: [...] }  oxirgi 300 ta, yangisi tepada */

const crypto = require('crypto');
const { configured, redis } = require('./_lib/redis');
const { clientIp, readJson, send, checkPin } = require('./_lib/util');

const TURLAR = {
  shogirdlik: 'Shogirdlik dasturi',
  ttp: 'TTP: Ustozlik Psixologiyasi',
  kitob: 'Kitob buyurtmasi',
  hamkorlik: "Hamkorlik yoki ma'ruzaga taklif",
  boshqa: 'Boshqa'
};
const KEY = 'murojaat:list';
const LIMIT = 3;      /* bitta IP dan ... */
const WINDOW = 600;   /* ... 10 daqiqada */

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

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

async function notify(m) {
  if (!process.env.TELEGRAM_BOT_TOKEN) return { skipped: 'token' };
  const owner = process.env.TG_OWNER_ID || (await redis('GET', 'mgr:owner'));
  if (!owner) return { skipped: 'owner' };
  const tg = require('./_bot/tg');
  const lines = [
    '📩 <b>Yangi murojaat</b> — ' + esc(TURLAR[m.turi] || m.turi),
    '',
    '<b>Ism:</b> ' + esc(m.ism),
    '<b>Aloqa:</b> ' + esc(m.aloqa)
  ];
  if (m.yosh) lines.push('<b>Yosh:</b> ' + esc(m.yosh));
  if (m.shahar) lines.push('<b>Shahar:</b> ' + esc(m.shahar));
  if (m.xabar) lines.push('', esc(m.xabar.slice(0, 1500)));
  await tg.send(owner, lines.join('\n'), { parse_mode: 'HTML' });
  return { sent: true };
}

module.exports = async (req, res) => {
  if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });

  if (req.method === 'GET') {
    const auth = await checkPin(req);
    if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
    try {
      const raw = (await redis('LRANGE', KEY, 0, 299)) || [];
      const items = raw.map(s => { try { return JSON.parse(s); } catch (e) { return null; } }).filter(Boolean);
      return send(res, 200, { items, turlar: TURLAR });
    } catch (e) { return send(res, 500, { error: 'redis' }); }
  }

  if (req.method === 'POST') {
    const b = await readJson(req);
    if (b.website) return send(res, 200, { ok: true });   /* bot to'ldirgan yashirin maydon */
    const turi = String(b.turi || '');
    if (!TURLAR[turi]) return send(res, 400, { error: 'Murojaat turini tanlang' });
    const ism = clean(b.ism, 60).replace(/\n/g, ' ');
    const aloqa = clean(b.aloqa, 60).replace(/\n/g, ' ');
    const shahar = clean(b.shahar, 60).replace(/\n/g, ' ');
    const xabar = clean(b.xabar, 1500);
    let yosh = String(b.yosh || '').replace(/\D/g, '').slice(0, 2);
    if (yosh && (Number(yosh) < 10 || Number(yosh) > 90)) yosh = '';
    if (ism.length < 2) return send(res, 400, { error: 'Ismingizni yozing' });
    if (aloqa.length < 5) return send(res, 400, { error: 'Telefon raqamingiz yoki Telegram manzilingizni yozing' });

    try {
      const rl = 'murojaatrl:' + clientIp(req);
      const n = Number(await redis('INCR', rl)) || 0;
      if (n === 1) await redis('EXPIRE', rl, WINDOW);
      if (n > LIMIT) return send(res, 429, { error: "Juda ko'p murojaat yuborildi. Birozdan keyin qayta urinib ko'ring" });

      const m = { id: crypto.randomBytes(6).toString('hex'), at: new Date().toISOString(), turi, ism, aloqa, yosh, shahar, xabar };
      await redis('LPUSH', KEY, JSON.stringify(m));
      await redis('LTRIM', KEY, 0, 999);
      /* Telegram xabari javobni sekinlashtirmasin: ko'pi bilan 3 soniya kutamiz */
      await Promise.race([
        notify(m).catch(() => null),
        new Promise(r => setTimeout(r, 3000))
      ]);
      return send(res, 200, { ok: true });
    } catch (e) { return send(res, 500, { error: 'redis' }); }
  }

  res.setHeader('Allow', 'GET, POST');
  return send(res, 405, { error: 'method' });
};

'use strict';
/* Dasturlar, slaydlar va skriptlar. Faqat PIN bilan (x-admin-pin sarlavhasi).
   GET  /api/dastur              -> dasturlar ro'yxati (darslar, slaydlar soni, skript holati)
   GET  /api/dastur?d=ttp&n=3    -> bitta darsning slaydlari (+ skript va ko'rib chiqish belgilari, agar bo'lsa)
   POST /api/dastur {d, n, i, s, c} -> skript ko'rib chiqish belgisi: s = 'ok' | 'izoh' | '' (o'chirish), c = izoh matni
                                       i = slayd raqami (1 dan) */

const { send, checkPin, readJson } = require('./_lib/util');
const { configured, redis, pipeline } = require('./_lib/redis');
const { programs } = require('./_decks/index');

function reviewKey(d, n) { return 'skript:' + d + ':' + n; }

function parseReview(flat) {
  const o = {};
  if (!Array.isArray(flat)) return o;
  for (let i = 0; i < flat.length; i += 2) {
    try { o[flat[i]] = JSON.parse(flat[i + 1]); } catch (e) { /* e'tiborsiz */ }
  }
  return o;
}

async function getReview(d, n) {
  if (!configured()) return {};
  try { return parseReview(await redis('HGETALL', reviewKey(d, n))); } catch (e) { return {}; }
}

function findLesson(d, n) {
  const p = programs.find(x => x.id === d);
  if (!p) return { err: 'Dastur topilmadi' };
  const l = p.lessons.find(x => x.n === n);
  if (!l) return { err: 'Dars topilmadi' };
  return { p, l };
}

module.exports = async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'POST') return send(res, 405, { error: 'method' });
  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });

  if (req.method === 'POST') {
    const b = await readJson(req);
    const d = String(b.d || '');
    const n = parseInt(b.n, 10);
    const i = parseInt(b.i, 10);
    const f = findLesson(d, n);
    if (f.err) return send(res, 404, { error: f.err });
    const total = f.l.script ? f.l.script.length : 0;
    if (!(i >= 1 && i <= total)) return send(res, 400, { error: 'Slayd raqami noto\'g\'ri' });
    if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });
    const s = String(b.s || '');
    const c = String(b.c || '').slice(0, 2000);
    try {
      if (!s && !c) await redis('HDEL', reviewKey(d, n), String(i));
      else {
        if (s !== 'ok' && s !== 'izoh') return send(res, 400, { error: 'holat' });
        await redis('HSET', reviewKey(d, n), String(i), JSON.stringify({ s, c, at: Date.now() }));
      }
      return send(res, 200, { ok: true, review: await getReview(d, n) });
    } catch (e) {
      return send(res, 500, { error: 'redis' });
    }
  }

  const q = req.query || {};
  const d = String(q.d || '');
  const n = parseInt(q.n, 10);

  if (!d) {
    const withScript = [];
    programs.forEach(p => p.lessons.forEach(l => { if (l.script) withScript.push([p.id, l.n]); }));
    let counts = {};
    if (configured() && withScript.length) {
      try {
        const r = await pipeline(withScript.map(([pid, ln]) => ['HGETALL', reviewKey(pid, ln)]));
        withScript.forEach(([pid, ln], k) => {
          const rv = parseReview(r[k]);
          const vals = Object.values(rv);
          counts[pid + ':' + ln] = { ok: vals.filter(v => v.s === 'ok').length, izoh: vals.filter(v => v.s === 'izoh').length };
        });
      } catch (e) { counts = {}; }
    }
    return send(res, 200, {
      programs: programs.map(p => ({
        id: p.id, title: p.title, subtitle: p.subtitle || '', note: p.note || '',
        lessons: p.lessons.map(l => ({
          n: l.n, title: l.title,
          slides: l.deck && l.deck.slides ? l.deck.slides.length : 0,
          ready: Boolean(l.deck && l.deck.slides && l.deck.slides.length),
          hint: l.hint || '',
          script: l.script ? Object.assign({ total: l.script.length }, counts[p.id + ':' + l.n] || { ok: 0, izoh: 0 }) : null
        }))
      }))
    });
  }

  const f = findLesson(d, n);
  if (f.err) return send(res, 404, { error: f.err });
  const { p, l } = f;
  if (!l.deck || !l.deck.slides || !l.deck.slides.length) return send(res, 404, { error: 'Bu dars uchun slaydlar hali tayyorlanmagan' });

  const out = {
    program: { id: p.id, title: p.title },
    lesson: { n: l.n, title: l.title },
    slides: l.deck.slides
  };
  if (l.script) {
    out.script = l.script;
    out.review = await getReview(d, n);
  }
  return send(res, 200, out);
};

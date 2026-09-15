'use strict';
/* Dasturlar va slaydlar. Faqat PIN bilan (x-admin-pin sarlavhasi).
   GET /api/dastur              -> dasturlar ro'yxati (darslar, slaydlar soni)
   GET /api/dastur?d=ttp&n=3    -> bitta darsning slaydlari */

const { send, checkPin } = require('./_lib/util');
const { programs } = require('./_decks/index');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { error: 'method' });
  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });

  const q = req.query || {};
  const d = String(q.d || '');
  const n = parseInt(q.n, 10);

  if (!d) {
    return send(res, 200, {
      programs: programs.map(p => ({
        id: p.id, title: p.title, subtitle: p.subtitle || '', note: p.note || '',
        lessons: p.lessons.map(l => ({
          n: l.n, title: l.title,
          slides: l.deck && l.deck.slides ? l.deck.slides.length : 0,
          ready: Boolean(l.deck && l.deck.slides && l.deck.slides.length),
          hint: l.hint || ''
        }))
      }))
    });
  }

  const p = programs.find(x => x.id === d);
  if (!p) return send(res, 404, { error: 'Dastur topilmadi' });
  const l = p.lessons.find(x => x.n === n);
  if (!l) return send(res, 404, { error: 'Dars topilmadi' });
  if (!l.deck || !l.deck.slides || !l.deck.slides.length) return send(res, 404, { error: 'Bu dars uchun slaydlar hali tayyorlanmagan' });

  res.setHeader('Cache-Control', 'no-store');
  return send(res, 200, {
    program: { id: p.id, title: p.title },
    lesson: { n: l.n, title: l.title },
    slides: l.deck.slides
  });
};

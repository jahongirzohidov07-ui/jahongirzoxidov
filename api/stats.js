'use strict';
/* Boshqaruv paneli uchun statistika. Faqat PIN bilan (x-admin-pin sarlavhasi).
   GET /api/stats -> { views: {folio: n}, daily: {YYYY-MM-DD: n}, total, today,
                       manba: { tashrif: {jami, d30}, oqish: {jami, d30}, nomlar } } */

const { configured, pipeline, hashToObj } = require('./_lib/redis');
const { today, send, checkPin } = require('./_lib/util');
const { NOMLAR } = require('./_lib/manba');

/* Oxirgi 30 kun (Toshkent vaqti), bugun ham kiradi */
function kunlar() {
  const out = [];
  for (let i = 0; i < 30; i++) out.push(new Date(Date.now() + 5 * 3600 * 1000 - i * 86400000).toISOString().slice(0, 10));
  return out;
}
function qosh(a, b) { Object.keys(b).forEach(k => { a[k] = (a[k] || 0) + b[k]; }); return a; }

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { error: 'method' });
  if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });

  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });

  try {
    const days = kunlar();
    const cmds = [['HGETALL', 'views'], ['HGETALL', 'daily'], ['HGETALL', 'src:tashrif'], ['HGETALL', 'src:oqish']];
    days.forEach(d => { cmds.push(['HGETALL', 'src:tashrif:' + d]); cmds.push(['HGETALL', 'src:oqish:' + d]); });
    const r = await pipeline(cmds);
    const views = hashToObj(r[0]);
    const daily = hashToObj(r[1]);
    const total = Object.values(views).reduce((a, b) => a + b, 0);
    const t30 = {}, o30 = {};
    days.forEach((d, i) => { qosh(t30, hashToObj(r[4 + i * 2])); qosh(o30, hashToObj(r[5 + i * 2])); });
    const manba = {
      tashrif: { jami: hashToObj(r[2]), d30: t30 },
      oqish: { jami: hashToObj(r[3]), d30: o30 },
      nomlar: NOMLAR
    };
    return send(res, 200, { views, daily, total, today: daily[today()] || 0, date: today(), manba });
  } catch (e) {
    return send(res, 500, { error: 'redis' });
  }
};

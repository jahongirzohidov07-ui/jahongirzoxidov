'use strict';
/* Boshqaruv paneli uchun statistika. Faqat PIN bilan (x-admin-pin sarlavhasi).
   GET /api/stats -> { views: {folio: n}, daily: {YYYY-MM-DD: n}, total, today } */

const { configured, pipeline, hashToObj } = require('./_lib/redis');
const { today, send, checkPin } = require('./_lib/util');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { error: 'method' });
  if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });

  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });

  try {
    const [viewsFlat, dailyFlat] = await pipeline([['HGETALL', 'views'], ['HGETALL', 'daily']]);
    const views = hashToObj(viewsFlat);
    const daily = hashToObj(dailyFlat);
    const total = Object.values(views).reduce((a, b) => a + b, 0);
    return send(res, 200, { views, daily, total, today: daily[today()] || 0, date: today() });
  } catch (e) {
    return send(res, 500, { error: 'redis' });
  }
};

'use strict';
/* Insho o'qilganlar hisobi.
   GET  /api/view?folio=6            -> { views: 12 }
   POST /api/view {folio, vid}       -> hisoblaydi (bir o'quvchi kuniga 1 marta) -> { views: 13 } */

const crypto = require('crypto');
const { configured, redis, pipeline } = require('./_lib/redis');
const { clientIp, today, readJson, send } = require('./_lib/util');

const FOLIO_RE = /^[A-Za-z0-9_-]{1,24}$/;

module.exports = async (req, res) => {
  if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });

  if (req.method === 'GET') {
    const folio = String((req.query && req.query.folio) || '');
    if (!FOLIO_RE.test(folio)) return send(res, 400, { error: 'folio' });
    try {
      const n = Number(await redis('HGET', 'views', folio)) || 0;
      return send(res, 200, { views: n });
    } catch (e) {
      return send(res, 500, { error: 'redis' });
    }
  }

  if (req.method === 'POST') {
    const body = await readJson(req);
    const folio = String(body.folio || '');
    if (!FOLIO_RE.test(folio)) return send(res, 400, { error: 'folio' });
    const vid = String(body.vid || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 40)
      || crypto.createHash('sha256').update(clientIp(req)).digest('hex').slice(0, 16);
    const day = today();
    try {
      const fresh = await redis('SET', 'seen:' + folio + ':' + vid, day, 'NX', 'EX', 86400);
      if (fresh === 'OK') {
        const [n] = await pipeline([
          ['HINCRBY', 'views', folio, 1],
          ['HINCRBY', 'daily', day, 1],
          ['HINCRBY', 'daily:' + folio, day, 1]
        ]);
        return send(res, 200, { views: Number(n) || 0, counted: true });
      }
      const n = Number(await redis('HGET', 'views', folio)) || 0;
      return send(res, 200, { views: n, counted: false });
    } catch (e) {
      return send(res, 500, { error: 'redis' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  return send(res, 405, { error: 'method' });
};

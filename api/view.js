'use strict';
/* Insho o'qilganlar hisobi.
   GET  /api/view?folio=6            -> { views: 12 }
   POST /api/view {folio, vid, src}  -> hisoblaydi (bir o'quvchi kuniga 1 marta) -> { views: 13 }
   POST /api/view {tashrif: 1, vid, src} -> saytga kirish manbai (bir kishi kuniga 1 marta)
   POST /api/view {chuq: 1, folio, ver, max, bits, sec, vid, src} -> o'qish chuqurligi (_lib/chuqur.js) */

const crypto = require('crypto');
const { configured, redis, pipeline } = require('./_lib/redis');
const { clientIp, today, readJson, send } = require('./_lib/util');
const { manba, isBot } = require('./_lib/manba');
const { birInsho } = require('./_lib/chuqur');

const KUN40 = 40 * 86400;

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
    const src = manba(body.src);

    /* O'qish chuqurligi: {chuq:1, folio, ver, max, bits, sec, vid, src}.
       Brauzer o'quvchining shu inshodagi butun holatini yuboradi (avvalgi kirishlari bilan
       birlashtirilgan), shuning uchun bitta HSET yetadi: qayta yuborilsa ustidan yoziladi.
       sinov:1 bo'lsa hamma tekshiruvlardan o'tkaziladi, lekin bazaga yozilmaydi. */
    if (body.chuq) {
      if (isBot(req)) return send(res, 200, { ok: true });
      const folio = String(body.folio || '');
      if (!FOLIO_RE.test(folio)) return send(res, 400, { error: 'folio' });
      const e = birInsho(folio);
      if (!e) return send(res, 200, { ok: false, sabab: 'insho' });
      if (String(body.ver || '') !== e.ver) return send(res, 200, { ok: false, sabab: 'versiya' });
      const n = e.units.length;
      const max = Number(body.max);
      const bits = String(body.bits || '');
      if (!Number.isInteger(max) || max < 0 || max >= n || bits.length !== n || !/^[01]+$/.test(bits)) {
        return send(res, 400, { error: 'chuq', n });
      }
      const sec = Math.min(7200, Math.max(0, Math.floor(Number(body.sec) || 0)));
      const cvid = String(body.vid || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 40)
        || crypto.createHash('sha256').update(clientIp(req)).digest('hex').slice(0, 16);
      const val = [max, bits, sec, src, today()].join('|');
      if (body.sinov) return send(res, 200, { ok: true, sinov: true, n, ver: e.ver, val });
      try {
        await pipeline([
          ['HSET', 'chuq:' + folio + ':' + e.ver, cvid, val],
          ['HSETNX', 'chuqv:' + folio, e.ver, JSON.stringify({ d: today(), t: e.title, u: e.units.map(u => [u.t, u.w, u.s]) })]
        ]);
        return send(res, 200, { ok: true });
      } catch (err) {
        return send(res, 500, { error: 'redis' });
      }
    }

    /* Saytga kirish (istalgan sahifa): manbalar statistikasi uchun */
    if (body.tashrif) {
      if (isBot(req)) return send(res, 200, { ok: true });
      const tvid = String(body.vid || '').replace(/[^A-Za-z0-9]/g, '').slice(0, 40)
        || crypto.createHash('sha256').update(clientIp(req)).digest('hex').slice(0, 16);
      const tday = today();
      try {
        const fresh = await redis('SET', 'tseen:' + tvid, tday, 'NX', 'EX', 86400);
        if (fresh === 'OK') {
          await pipeline([
            ['HINCRBY', 'src:tashrif', src, 1],
            ['HINCRBY', 'src:tashrif:' + tday, src, 1],
            ['EXPIRE', 'src:tashrif:' + tday, KUN40]
          ]);
        }
        return send(res, 200, { ok: true });
      } catch (e) {
        return send(res, 500, { error: 'redis' });
      }
    }

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
          ['HINCRBY', 'daily:' + folio, day, 1],
          ['HINCRBY', 'src:oqish', src, 1],
          ['HINCRBY', 'src:oqish:' + day, src, 1],
          ['EXPIRE', 'src:oqish:' + day, KUN40]
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

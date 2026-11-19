'use strict';
/* Boshqaruv paneli uchun statistika. Faqat PIN bilan (x-admin-pin sarlavhasi).
   GET /api/stats -> { views: {folio: n}, daily: {YYYY-MM-DD: n}, total, today,
                       manba: { tashrif: {jami, d30}, oqish: {jami, d30}, nomlar } }
   GET /api/stats?chuq=hammasi     -> har insho bo'yicha o'qish chuqurligi xulosasi
   GET /api/stats?chuq=14[&ver=..] -> bitta insho, har bo'lak: yetdi / o'qidi / to'xtadi */

const { configured, pipeline, hashToObj } = require('./_lib/redis');
const { today, send, checkPin } = require('./_lib/util');
const { NOMLAR } = require('./_lib/manba');
const { insholar, birInsho, yigindi } = require('./_lib/chuqur');

/* Oxirgi 30 kun (Toshkent vaqti), bugun ham kiradi */
function kunlar() {
  const out = [];
  for (let i = 0; i < 30; i++) out.push(new Date(Date.now() + 5 * 3600 * 1000 - i * 86400000).toISOString().slice(0, 10));
  return out;
}
function qosh(a, b) { Object.keys(b).forEach(k => { a[k] = (a[k] || 0) + b[k]; }); return a; }

/* ---------- O'qish chuqurligi (_lib/chuqur.js) ---------- */

/* Eng ko'p o'quvchi to'xtagan bo'lak */
function engKopToxtash(toxtadi) {
  let at = -1, soni = 0;
  toxtadi.forEach((v, j) => { if (v > soni) { soni = v; at = j; } });
  return { at, soni };
}

/* Har insho joriy versiyasi bo'yicha qisqa xulosa */
async function chuqUmumiy() {
  const list = Object.keys(insholar()).map(f => birInsho(f));
  const r = list.length ? await pipeline(list.map(e => ['HGETALL', 'chuq:' + e.folio + ':' + e.ver])) : [];
  return {
    insholar: list.map((e, i) => {
      const y = yigindi(r[i], e.units.length);
      const t = engKopToxtash(y.toxtadi);
      return {
        folio: e.folio, raqam: e.raqam, title: e.title, date: e.date, n: e.units.length,
        R: y.R, chuqur: y.chuqur, oxirigaYetdi: y.oxirigaYetdi, oxiriniOqidi: y.oxiriniOqidi,
        secMed: y.secMed, toxtash: t.at, toxtashSoni: t.soni
      };
    })
  };
}

/* Bitta insho: har bo'lak bo'yicha. ver berilmasa joriy versiya. */
async function chuqBatafsil(folio, verQ) {
  const e = birInsho(folio);
  if (!e) return null;
  const [metaFlat] = await pipeline([['HGETALL', 'chuqv:' + folio]]);
  const meta = {};
  if (Array.isArray(metaFlat)) {
    for (let i = 0; i < metaFlat.length; i += 2) {
      try { meta[metaFlat[i]] = JSON.parse(metaFlat[i + 1]); } catch (err) { /* buzuq yozuv */ }
    }
  }
  const vers = Object.keys(meta);
  if (vers.indexOf(e.ver) < 0) vers.push(e.ver);
  const ver = verQ && vers.indexOf(verQ) >= 0 ? verQ : e.ver;
  const units = ver === e.ver ? e.units : ((meta[ver] && meta[ver].u) || []).map(([t, w, s]) => ({ t, w, s }));
  const r = await pipeline([['HGETALL', 'chuq:' + folio + ':' + ver]].concat(vers.map(v => ['HLEN', 'chuq:' + folio + ':' + v])));
  const y = yigindi(r[0], units.length);
  const versiyalar = vers.map((v, i) => ({ ver: v, d: (meta[v] && meta[v].d) || null, R: Number(r[1 + i]) || 0, joriy: v === e.ver }))
    .sort((a, b) => (b.joriy - a.joriy) || String(b.d || '').localeCompare(String(a.d || '')));
  return Object.assign({ folio, raqam: e.raqam, title: e.title, ver, joriy: ver === e.ver, n: units.length, units, versiyalar, nomlar: NOMLAR }, y);
}

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { error: 'method' });
  if (!configured()) return send(res, 503, { error: 'Baza ulanmagan' });

  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });

  const q = req.query || {};
  if (q.chuq !== undefined) {
    try {
      const folio = String(q.chuq);
      if (folio === 'hammasi') return send(res, 200, await chuqUmumiy());
      const d = await chuqBatafsil(folio, String(q.ver || ''));
      return send(res, d ? 200 : 404, d || { error: 'insho' });
    } catch (e) {
      return send(res, 500, { error: 'redis' });
    }
  }

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

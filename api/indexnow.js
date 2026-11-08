'use strict';
/* IndexNow: Yandex va Bing'ga saytdagi sahifalarni darhol xabar qilish (Webmaster hisobisiz ham ishlaydi).
   POST /api/indexnow  (x-admin-pin)  {urls?: ["https://www.jahongirzoxidov.uz/insho/12"]}
   urls berilmasa, sitemap'dagi barcha sahifalar yuboriladi.
   Kalit fayli saytning ildizida: /96a20fc27d47e1b9ca746ee727407273.txt */

const { send, checkPin, readJson } = require('./_lib/util');
const sitemap = require('./sitemap');

const HOST = 'www.jahongirzoxidov.uz';
const KEY = '96a20fc27d47e1b9ca746ee727407273';
const ENDPOINTS = ['https://yandex.com/indexnow', 'https://api.indexnow.org/indexnow'];

module.exports = async (req, res) => {
  if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return send(res, 405, { error: 'method' }); }
  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
  const b = await readJson(req);
  let urlList = Array.isArray(b.urls) && b.urls.length ? b.urls : sitemap.urls().map(u => u.loc);
  urlList = urlList.filter(u => typeof u === 'string' && u.startsWith('https://' + HOST + '/')).slice(0, 1000);
  if (!urlList.length) return send(res, 400, { error: 'urls' });
  const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: 'https://' + HOST + '/' + KEY + '.txt', urlList });
  const natija = await Promise.all(ENDPOINTS.map(async url => {
    try {
      const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' }, body });
      return { url, status: r.status, text: (await r.text()).slice(0, 200) };
    } catch (e) { return { url, error: String(e.message || e) }; }
  }));
  return send(res, 200, { yuborildi: urlList.length, natija });
};

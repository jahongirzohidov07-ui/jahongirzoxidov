'use strict';
/* /sitemap.xml — Google uchun sahifalar ro'yxati (vercel.json rewrites orqali). */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const SITE = 'https://www.jahongirzoxidov.uz';

function essays() {
  const tries = [path.join(process.cwd(), 'essays.js'), path.join(__dirname, '..', 'essays.js')];
  const p = tries.find(x => fs.existsSync(x));
  if (!p) return [];
  const ctx = { window: {} };
  vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx); } catch (e) { return []; }
  return Array.isArray(ctx.window.ESSAYS) ? ctx.window.ESSAYS : [];
}

/* "06.11.2026" -> "2026-11-06" */
function iso(d) {
  const m = String(d || '').match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? m[3] + '-' + m[2] + '-' + m[1] : '';
}

module.exports = (req, res) => {
  const urls = [
    { loc: SITE + '/', pri: '1.0' },
    { loc: SITE + '/kitoblar', pri: '0.7' },
    { loc: SITE + '/yozgan-kitoblarim', pri: '0.6' },
    { loc: SITE + '/dasturlar', pri: '0.7' },
    { loc: SITE + '/chiqishlar', pri: '0.6' },
    { loc: SITE + '/men-haqimda', pri: '0.6' },
    { loc: SITE + '/murojaat', pri: '0.4' }
  ];
  essays().forEach(e => urls.push({ loc: SITE + '/insho/' + encodeURIComponent(String(e.folio)), pri: '0.8', mod: iso(e.date) }));
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    urls.map(u => '  <url><loc>' + u.loc + '</loc>' + (u.mod ? '<lastmod>' + u.mod + '</lastmod>' : '') + '<priority>' + u.pri + '</priority></url>').join('\n') +
    '\n</urlset>\n';
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, s-maxage=3600');
  res.end(xml);
};

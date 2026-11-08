'use strict';
/* Har bir sahifaning o'z havolasi va ulashish ko'rinishi.
   /insho/11, /kitoblar, /yozgan-kitoblarim, /dasturlar, /murojaat, /men-haqimda
   (vercel.json rewrites orqali shu yerga keladi).
   index.html ning o'zi qaytariladi, faqat <head> dagi sarlavha, tavsif va rasm
   (og:title, og:description, og:image) shu sahifaga moslanadi. Shunda Telegram,
   Instagram va WhatsApp havola ostida insho sarlavhasi va muqovasini ko'rsatadi,
   Google esa har inshoni alohida sahifa sifatida topadi. Sahifani brauzerdagi
   index.html skripti manzilga qarab ochadi. */

const fs = require('fs');
const path = require('path');
const vm = require('vm');
const LD = require('./_lib/ld');

const SITE = 'https://www.jahongirzoxidov.uz';

function find(rel) {
  const tries = [path.join(process.cwd(), rel), path.join(__dirname, '..', rel)];
  for (const p of tries) { if (fs.existsSync(p)) return p; }
  return null;
}

let cache = null;
function load() {
  if (cache) return cache;
  const html = fs.readFileSync(find('index.html'), 'utf8');
  const ctx = { window: {} };
  vm.createContext(ctx);
  try { vm.runInContext(fs.readFileSync(find('essays.js'), 'utf8'), ctx); } catch (e) { /* e'tiborsiz */ }
  try { vm.runInContext(fs.readFileSync(find('kitoblar.js'), 'utf8'), ctx); } catch (e) { /* e'tiborsiz */ }
  const essays = Array.isArray(ctx.window.ESSAYS) ? ctx.window.ESSAYS : [];
  const kitoblar = Array.isArray(ctx.window.KITOBLAR) ? ctx.window.KITOBLAR : [];
  cache = { html, essays, kitobSoni: kitoblar.reduce((n, y) => n + ((y && y.kitoblar) || []).length, 0) };
  return cache;
}

function attr(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function text(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Inshoning birinchi oddiy xatboshisidan qisqa tavsif */
function summary(body) {
  const paras = String(body || '').split(/\n{2,}/);
  for (const p of paras) {
    const t = p.trim();
    if (!t || /^(##|!\[|-\s|>)/.test(t)) continue;
    let s = t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*?|__/g, '').replace(/\s+/g, ' ').trim();
    if (s.length > 190) s = s.slice(0, 190).replace(/\s+\S*$/, '') + '…';
    return s;
  }
  return '';
}

function ogImage(name) {
  return find(path.join('assets', 'og', name + '.png')) ? SITE + '/assets/og/' + name + '.png' : SITE + '/assets/og/sayt.png';
}

const SAHIFALAR = {
  'kitoblar': n => ({
    title: "O'qigan kitoblarim — Jahongir Zoxidov",
    desc: '2010-yildan beri o\'qigan ' + n + ' ta kitobim: har biriga qo\'ygan bahom va o\'qib bo\'lgach yozgan taqrizlarim.',
    img: 'kitoblar'
  }),
  'yozgan-kitoblarim': () => ({
    title: 'Yozgan kitoblarim — Jahongir Zoxidov',
    desc: "Ingliz tilini o'rganish va IELTS'ga tayyorlanish bo'yicha yozgan kitoblarim.",
    img: 'yozgan-kitoblarim'
  }),
  'dasturlar': () => ({
    title: 'Dasturlar — Jahongir Zoxidov',
    desc: "Shogirdlik dasturi va TTP: Ustozlik Psixologiyasi kursi. Bilim va tajribamni ulashadigan dasturlarim, ariza qoldirish.",
    img: 'dasturlar'
  }),
  'murojaat': () => ({
    title: 'Murojaat — Jahongir Zoxidov',
    desc: "Dasturlarga ariza, kitob buyurtmasi, hamkorlik yoki ma'ruzaga taklif uchun murojaat qoldiring.",
    img: 'sayt'
  }),
  'chiqishlar': () => ({
    title: 'Chiqishlarim — Jahongir Zoxidov',
    desc: "Podkast va suhbatlardagi chiqishlarim: Zed Avlod podkasti va Jony Academy videolari.",
    img: 'chiqishlar'
  }),
  'men-haqimda': () => ({
    title: 'Men haqimda — Jahongir Zoxidov',
    desc: "Pedagog, tadbirkor, mentor va muallif. Jony Academy va Jony School asoschisi.",
    img: 'sayt'
  })
};

function setMeta(html, m) {
  const r = (re, val) => { html = html.replace(re, val); };
  r(/<title>[\s\S]*?<\/title>/, '<title>' + text(m.title) + '</title>');
  r(/<meta name="description" content="[^"]*">/, '<meta name="description" content="' + attr(m.desc) + '">');
  r(/<link rel="canonical" href="[^"]*">/, '<link rel="canonical" href="' + attr(m.url) + '">');
  r(/<meta property="og:type" content="[^"]*">/, '<meta property="og:type" content="' + (m.type || 'website') + '">');
  r(/<meta property="og:title" content="[^"]*">/, '<meta property="og:title" content="' + attr(m.ogTitle || m.title) + '">');
  r(/<meta property="og:description" content="[^"]*">/, '<meta property="og:description" content="' + attr(m.desc) + '">');
  r(/<meta property="og:url" content="[^"]*">/, '<meta property="og:url" content="' + attr(m.url) + '">');
  r(/<meta property="og:image" content="[^"]*">/, '<meta property="og:image" content="' + attr(m.img) + '">');
  r(/<meta name="twitter:image" content="[^"]*">/, '<meta name="twitter:image" content="' + attr(m.img) + '">');
  if (m.ld) r(/<script type="application\/ld\+json" id="ld">[\s\S]*?<\/script>/, () => '<script type="application/ld+json" id="ld">' + LD.json(m.ld) + '</script>');
  return html;
}

module.exports = (req, res) => {
  let data;
  try { data = load(); } catch (e) {
    res.statusCode = 500; res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    return res.end('index.html topilmadi');
  }
  const q = req.query || {};
  let m = null;
  let status = 200;

  if (q.insho != null) {
    const folio = String(q.insho).replace(/[^0-9A-Za-z_-]/g, '').slice(0, 10);
    const e = data.essays.find(x => String(x.folio) === folio);
    if (e) {
      m = {
        title: e.title + ' — Jahongir Zoxidov',
        ogTitle: e.title,
        desc: summary(e.body) || "Jahongir Zoxidovning inshosi.",
        url: SITE + '/insho/' + folio,
        img: ogImage('insho-' + folio),
        type: 'article'
      };
      m.ld = LD.insho(e, m);
    } else {
      /* Qoralama yoki mavjud bo'lmagan insho: sahifa ochiladi (muallif PIN bilan ko'radi), lekin umumiy ko'rinish bilan */
      m = { title: 'Jahongir Zoxidov — Insholar', desc: "Ta'lim, oila, moliya, o'z-o'zini anglash va din haqida tajribadan kelib chiqqan uzun insholar.", url: SITE + '/insho/' + folio, img: SITE + '/assets/og/sayt.png' };
    }
  } else {
    const s = String(q.s || '');
    const f = SAHIFALAR[s];
    if (f) {
      const p = f(data.kitobSoni);
      m = { title: p.title, desc: p.desc, url: SITE + '/' + s, img: ogImage(p.img) };
      m.ld = LD.sahifa(s, m);
    } else {
      status = 404;
      m = { title: 'Jahongir Zoxidov — Insholar', desc: "Ta'lim, oila, moliya, o'z-o'zini anglash va din haqida tajribadan kelib chiqqan uzun insholar.", url: SITE + '/', img: SITE + '/assets/og/sayt.png' };
    }
  }

  res.statusCode = status;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=600, stale-while-revalidate=86400');
  return res.end(setMeta(data.html, m));
};

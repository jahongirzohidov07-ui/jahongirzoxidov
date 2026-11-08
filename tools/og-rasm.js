const fs = require('fs'); const path = require('path'); const vm = require('vm');
/* Ulashish rasmlari (og:image) — assets/og/*.png, 1200x630.
   Telegram, Instagram, WhatsApp havola ostida shu rasmni ko'rsatadi.
   Yangi insho qo'shilganda qayta ishga tushiring:
     cd tools && npm i --no-save @fontsource/fraunces@5 @fontsource/literata@5 && node og-rasm.js
   (playwright o'rnatilgan bo'lishi kerak; python3 + Pillow bo'lsa rasmlar siqiladi)
   Bu papka saytga chiqmaydi (.vercelignore). */
const { chromium } = require('playwright');
const { execFileSync } = require('child_process');
const REPO = path.join(__dirname, '..');
const OUT = process.argv[2] || path.join(REPO, 'assets/og');
fs.mkdirSync(OUT, { recursive: true });
const ctx = { window: {} }; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(REPO + '/essays.js', 'utf8'), ctx);
vm.runInContext(fs.readFileSync(REPO + '/kitoblar.js', 'utf8'), ctx);
const essays = ctx.window.ESSAYS;
const kitobSoni = ctx.window.KITOBLAR.reduce((n, y) => n + y.kitoblar.length, 0);
const F = __dirname + '/node_modules/@fontsource';
const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');

function html(o) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Fraunces;font-weight:600;src:url(file://${F}/fraunces/files/fraunces-latin-600-normal.woff2)}
@font-face{font-family:Fraunces;font-weight:500;src:url(file://${F}/fraunces/files/fraunces-latin-500-normal.woff2)}
@font-face{font-family:Literata;font-style:italic;font-weight:400;src:url(file://${F}/literata/files/literata-latin-400-italic.woff2)}
*{box-sizing:border-box;margin:0}
html,body{width:1200px;height:630px;overflow:hidden}
body{background:#EDE7D9;color:#262019;font-family:Inter,sans-serif;position:relative;
 background-image:radial-gradient(ellipse 900px 520px at 8% -15%,rgba(156,122,60,.16),transparent),radial-gradient(ellipse 760px 480px at 105% 115%,rgba(59,74,107,.14),transparent)}
.frame{position:absolute;inset:34px;border:1.5px solid #C9BFA8;border-radius:6px}
.bar{position:absolute;left:34px;top:34px;bottom:34px;width:10px;background:#3B4A6B;border-radius:6px 0 0 6px}
.wrap{position:absolute;left:104px;right:96px;top:86px;bottom:80px;display:flex;flex-direction:column}
.kicker{font-size:21px;font-weight:600;letter-spacing:.16em;text-transform:uppercase;color:#9C7A3C}
.kicker span{color:#55503F;font-weight:500}
.title{font-family:Fraunces,Georgia,serif;font-weight:600;color:#262019;letter-spacing:-.015em;line-height:1.1;margin-top:34px}
.sub{font-family:Literata,Georgia,serif;font-style:italic;font-size:31px;line-height:1.4;color:#55503F;margin-top:22px}
.foot{margin-top:auto;display:flex;align-items:center;justify-content:space-between;font-size:22px;color:#55503F}
.foot b{font-family:Fraunces,Georgia,serif;font-weight:600;font-size:27px;color:#3B4A6B}
.rule{height:1px;background:#C9BFA8;margin:0 0 24px}
.num{position:absolute;right:86px;top:40px;font-family:Fraunces,Georgia,serif;font-weight:500;font-size:300px;line-height:1;color:rgba(59,74,107,.07);letter-spacing:-.04em}
</style></head><body>
<div class="frame"></div><div class="bar"></div>
${o.num ? `<div class="num">${esc(o.num)}</div>` : ''}
<div class="wrap">
  <div class="kicker">${o.kicker}</div>
  <div class="title" id="t">${esc(o.title)}</div>
  ${o.sub ? `<div class="sub">${esc(o.sub)}</div>` : ''}
  <div class="foot-sp" style="flex:1"></div>
  <div class="rule"></div>
  <div class="foot"><b>Jahongir Zoxidov</b><span>jahongirzoxidov.uz</span></div>
</div></body></html>`;
}

const jobs = [
  { name: 'sayt', kicker: 'Insholar', title: 'Jahongir Zoxidov', sub: "Tajribadan, ilmdan kelib chiqqan insholar: ta'lim, oila, moliya, o'z-o'zini anglash va din haqida", size: 96 },
  { name: 'kitoblar', kicker: "Kitoblar", title: "O'qigan kitoblarim", sub: `2010-yildan beri ${kitobSoni} ta kitob: har biriga qo'ygan bahom va taqrizlarim`, size: 92 },
  { name: 'yozgan-kitoblarim', kicker: 'Muallif', title: 'Yozgan kitoblarim', sub: "Ingliz tilini o'rganish va IELTS'ga tayyorlanish bo'yicha kitoblar", size: 92 },
  { name: 'dasturlar', kicker: 'Dasturlar', title: 'Shogirdlik dasturi va TTP: Ustozlik Psixologiyasi', sub: 'Bilim va tajribamni ulashadigan dasturlar. Ariza qoldirish', size: 74 }
];
essays.filter(e => !e.draft).forEach(e => {
  const n = String(e.raqam || e.folio);
  jobs.push({ name: 'insho-' + e.folio, kicker: `Insho № ${esc(n)} <span>· ${esc(e.date || '')}</span>`, title: e.title, num: n, size: 84, essay: true });
});

(async () => {
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  for (const j of jobs) {
    const f = path.join(__dirname, 'tmp-' + j.name + '.html');
    fs.writeFileSync(f, html(j));
    await p.goto('file://' + f);
    await p.evaluate(() => document.fonts.ready);
    /* sarlavha 3 qatorga sig'sin */
    await p.evaluate(start => {
      const t = document.getElementById('t'); let s = start;
      t.style.fontSize = s + 'px';
      const maxLines = 3;
      while (s > 44 && t.getBoundingClientRect().height > s * 1.1 * maxLines + 2) { s -= 2; t.style.fontSize = s + 'px'; }
    }, j.size);
    await p.screenshot({ path: path.join(OUT, j.name + '.png') });
    fs.unlinkSync(f);
    try {
      execFileSync('python3', ['-c', "import sys;from PIL import Image;im=Image.open(sys.argv[1]).convert('RGB');im.quantize(colors=256,method=Image.Quantize.MEDIANCUT,dither=Image.Dither.FLOYDSTEINBERG).save(sys.argv[1],optimize=True)", path.join(OUT, j.name + '.png')]);
    } catch (e) { /* siqilmasa ham rasm ishlaydi */ }
    console.log('ok', j.name);
  }
  await b.close();
})();

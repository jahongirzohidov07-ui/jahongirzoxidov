/* =====================================================================
   YOZUV ALMASHTIRGICH — Lotin · Кирилл · Yangi alifbo · English

   - Lotin: asl matn (essays.js).
   - Кирилл: sahifadagi butun matn avtomatik kirill yozuviga o'giriladi.
   - Yangi alifbo: 2026-yil 21-oktabrdagi qonun bo'yicha yangilangan lotin
     alifbosi (2027-yil 22-apreldan kuchga kiradi): Sh→Ş, Ch→Ç, O'→Ö, G'→Ğ.
   - English: essays-en.js dagi tarjima (kerak bo'lganda yuklanadi).

   Tanlov brauzerda eslab qolinadi; ?yozuv=kirill kabi havola bilan
   ulashish ham mumkin (lotin | kirill | yangi | en).
   O'girilmasligi kerak bo'lgan joyga data-notr belgisi qo'yiladi.
   ===================================================================== */
(function () {
  const MODES = ['lotin', 'kirill', 'yangi', 'en'];
  const AP = /[ʻʼ‘’`]/g;

  /* ---------- Lotin → Kirill ---------- */
  const CYR = { a: 'а', b: 'б', c: 'с', d: 'д', f: 'ф', g: 'г', h: 'ҳ', i: 'и', j: 'ж', k: 'к', l: 'л', m: 'м', n: 'н', o: 'о', p: 'п', q: 'қ', r: 'р', s: 'с', t: 'т', u: 'у', v: 'в', w: 'в', x: 'х', y: 'й', z: 'з' };
  /* Ruschadan kirgan, lotinda yumshatish belgisi yo'qolgan so'zlar */
  const CYR_WORD = {
    yanvar: 'январь', fevral: 'февраль', aprel: 'апрель', iyun: 'июнь', iyul: 'июль',
    sentyabr: 'сентябрь', oktyabr: 'октябрь', noyabr: 'ноябрь', dekabr: 'декабрь',
    kompyuter: 'компьютер', kompyuterda: 'компьютерда', aksiya: 'акция', aksiyalar: 'акциялар',
    litsey: 'лицей', litseyda: 'лицейда', sirk: 'цирк'
  };
  /* Lotin harfida qoladigan nomlar va qisqartmalar */
  const KEEP_UP = new Set(['IELTS', 'CEFR', 'TOEFL', 'PUBG', 'GPT', 'SAT', 'BYD', 'USGS', 'WNA', 'PISA', 'OECD', 'IT', 'AI', 'IQ', 'CEO', 'SMM', 'CRM', 'LMS', 'PDF', 'TED']);
  const KEEP_CI = new Set(['youtube', 'chatgpt', 'facebook', 'google', 'iphone', 'whatsapp', 'linkedin', 'netflix', 'food', 'screen', 'podcast', 'openai', 'claude', 'gemini']);

  function isForeign(w) {
    return KEEP_UP.has(w) || KEEP_CI.has(w.toLowerCase()) || /w|c(?!h)/i.test(w);
  }

  function withCase(src, tok, allUp) {
    if (allUp) return tok.toUpperCase();
    if (src[0] !== src[0].toLowerCase()) return tok.charAt(0).toUpperCase() + tok.slice(1);
    return tok;
  }

  function cyrWord(w) {
    const lw = w.toLowerCase().replace(AP, "'");
    const allUp = /[A-Z].*[A-Z]/.test(w) && w === w.toUpperCase();
    if (CYR_WORD[lw]) return withCase(w, CYR_WORD[lw], allUp);
    let out = '', i = 0, prevV = false;
    while (i < lw.length) {
      const r = lw.slice(i);
      let tok, len = 1, v = false;
      if (r.startsWith("yo'")) { tok = 'йў'; len = 3; v = true; }
      else if (r.startsWith("s'h")) { tok = 'сҳ'; len = 3; }
      else if (r.startsWith("o'")) { tok = 'ў'; len = 2; v = true; }
      else if (r.startsWith("g'")) { tok = 'ғ'; len = 2; }
      else if (r.startsWith('sh')) { tok = 'ш'; len = 2; }
      else if (r.startsWith('ch')) { tok = 'ч'; len = 2; }
      else if (/^ts(iya|ion)/.test(r)) { tok = 'ц'; len = 2; }
      else if (r.startsWith('yo')) { tok = 'ё'; len = 2; v = true; }
      else if (r.startsWith('yu')) { tok = 'ю'; len = 2; v = true; }
      else if (r.startsWith('ya')) { tok = 'я'; len = 2; v = true; }
      else if (r.startsWith('ye')) { tok = (i === 0 || prevV) ? 'е' : 'ъе'; len = 2; v = true; }
      else if (r[0] === 'e') { tok = (i === 0 || (prevV && lw[i - 1] !== 'i')) ? 'э' : 'е'; v = true; }
      else if (r[0] === "'") { tok = 'ъ'; }
      else { tok = CYR[r[0]] !== undefined ? CYR[r[0]] : r[0]; v = 'aiou'.indexOf(r[0]) !== -1; }
      out += withCase(w.slice(i, i + len), tok, allUp);
      i += len; prevV = v;
    }
    return out;
  }

  /* ---------- Lotin → Yangi alifbo ---------- */
  function yangiWord(w) {
    const lw = w.toLowerCase().replace(AP, "'");
    const allUp = /[A-Z].*[A-Z]/.test(w) && w === w.toUpperCase();
    let out = '', i = 0;
    while (i < lw.length) {
      const r = lw.slice(i);
      let tok, len = 1;
      if (r.startsWith("s'h")) { out += w[i] + w[i + 2]; i += 3; continue; } /* Is'hoq → Ishoq */
      if (r.startsWith("o'")) { tok = 'ö'; len = 2; }
      else if (r.startsWith("g'")) { tok = 'ğ'; len = 2; }
      else if (r.startsWith('sh')) { tok = 'ş'; len = 2; }
      else if (r.startsWith('ch')) { tok = 'ç'; len = 2; }
      else if (r[0] === "'") { tok = 'ʼ'; }
      else { out += w[i]; i++; continue; }
      out += withCase(w.slice(i, i + len), tok, allUp);
      i += len;
    }
    return out;
  }

  const URL_RE = /(https?:\/\/\S+|www\.\S+|\S+@\S+\.\w+)/;
  const WORD_RE = /@?[A-Za-z0-9_][A-Za-z0-9_'ʻʼ‘’`]*/g;

  function convText(s, fn) {
    return String(s).split(URL_RE).map((part, idx) => idx % 2 ? part : part.replace(WORD_RE, w => {
      if (w[0] === '@' || !/[A-Za-z]/.test(w)) return w;
      const m = w.match(/^([A-Za-z0-9_]+)(['ʻʼ‘’`].*)?$/);
      if (m && isForeign(m[1])) return m[2] ? m[1] + m[2][0] + fn(m[2].slice(1)) : m[1];
      return fn(w);
    })).join('');
  }

  const toCyr = s => convText(s, cyrWord);
  const toYangi = s => convText(s, yangiWord);

  /* ---------- English: sayt qismlari tarjimasi ---------- */
  const EN = {
    "Tajribadan, ilmdan kelib chiqqan insholar": "Essays drawn from experience and knowledge",
    "Men haqimda": "About me",
    "Insholar orasidan izlash...": "Search the essays...",
    "Hech narsa topilmadi.": "Nothing found.",
    "← Insholar ro'yxatiga": "← Back to all essays",
    "Yozuv:": "Read in:",
    "Izohlar": "Comments",
    "Fikringizni yozing": "Share your thoughts",
    "Siz ham fikringizni yozing": "Share your thoughts too",
    "Insho sizda qanday fikr uyg'otdi?": "What did this essay make you think about?",
    "Ismingiz": "Your name",
    "Yuborish": "Send",
    "Yuborilmoqda…": "Sending…",
    "Izohingiz muallif ko'rib chiqqach saytda chiqadi.": "Your comment will appear after the author reviews it.",
    "Rahmat! Izohingiz qabul qilindi — muallif ko'rib chiqqach saytda chiqadi.": "Thank you! Your comment was received and will appear after the author reviews it.",
    "Izoh matnini yozing.": "Please write your comment.",
    "Ismingizni yozing.": "Please enter your name.",
    "Yuborib bo'lmadi. Qayta urinib ko'ring.": "Couldn't send. Please try again.",
    "Internet bilan bog'lanib bo'lmadi. Qayta urinib ko'ring.": "No internet connection. Please try again.",
    "Oldingi insho": "Previous essay",
    "Keyingi insho": "Next essay",
    "Havolani ulashish": "Share link",
    "Havola nusxalandi.": "Link copied.",
    "Havolani nusxalash imkoni bo'lmadi.": "Couldn't copy the link.",
    "Insho matnini nusxalab bo'lmaydi. Havolani ulashing.": "The essay text can't be copied. Please share the link instead.",
    "Jahongir Zoxidov — Insholar": "Jahongir Zoxidov — Essays",
    "Men haqimda — Jahongir Zoxidov": "About me — Jahongir Zoxidov"
  };
  const EN_RE = [
    [/(\d+) daqiqa o'qish/, '$1 min read'],
    [/(\d+) marta o'qilgan/, 'read $1 times']
  ];
  function toEn(s) {
    const t = s.trim();
    if (!t) return s;
    if (EN[t]) return s.replace(t, EN[t]);
    let r = s;
    EN_RE.forEach(([re, to]) => { r = r.replace(re, to); });
    return r;
  }

  /* ---------- Holat ---------- */
  function readMode() {
    let m = '';
    try { m = (new URLSearchParams(location.search).get('yozuv') || '').toLowerCase(); } catch (err) {}
    if (MODES.indexOf(m) === -1) { try { m = localStorage.getItem('jz_yozuv') || ''; } catch (err) { m = ''; } }
    return MODES.indexOf(m) === -1 ? 'lotin' : m;
  }
  let mode = readMode();
  const listeners = [];

  function conv(s) {
    if (mode === 'kirill') return toCyr(s);
    if (mode === 'yangi') return toYangi(s);
    if (mode === 'en') return toEn(s);
    return s;
  }

  /* ---------- Sahifaga qo'llash ---------- */
  const ORIG = new WeakMap(), SHOWN = new WeakMap();
  const SKIP = /^(SCRIPT|STYLE|TEXTAREA|INPUT|SELECT|CODE|PRE|NOSCRIPT)$/;
  const ATTRS = ['placeholder', 'title', 'aria-label', 'alt'];

  function skipped(el) {
    for (; el && el.nodeType === 1; el = el.parentNode) {
      if (SKIP.test(el.nodeName) || el.hasAttribute('data-notr')) return true;
    }
    return false;
  }

  function doText(n) {
    const v = n.nodeValue;
    const o = (SHOWN.has(n) && SHOWN.get(n) === v) ? ORIG.get(n) : v;
    if (!/[A-Za-z]/.test(o)) return;
    const nv = mode === 'lotin' ? o : conv(o);
    ORIG.set(n, o); SHOWN.set(n, nv);
    if (nv !== v) n.nodeValue = nv;
  }

  function doAttrs(el) {
    if (el.nodeType !== 1 || SKIP.test(el.nodeName) && el.nodeName !== 'INPUT' && el.nodeName !== 'TEXTAREA') return;
    if (el.hasAttribute('data-notr')) return;
    const store = el.__yz || (el.__yz = {});
    ATTRS.forEach(a => {
      if (!el.hasAttribute(a)) return;
      const v = el.getAttribute(a);
      const rec = store[a];
      const o = (rec && rec.s === v) ? rec.o : v;
      if (!/[A-Za-z]/.test(o)) return;
      const nv = mode === 'lotin' ? o : conv(o);
      store[a] = { o: o, s: nv };
      if (nv !== v) el.setAttribute(a, nv);
    });
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === 3) { if (!skipped(root.parentNode)) doText(root); return; }
    if (root.nodeType !== 1 || skipped(root.parentNode)) return;
    if (root.hasAttribute('data-notr')) return;
    doAttrs(root);
    root.querySelectorAll('[placeholder],[title],[aria-label],[alt]').forEach(el => { if (!skipped(el.parentNode)) doAttrs(el); });
    if (SKIP.test(root.nodeName)) return;
    const tw = document.createTreeWalker(root, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT, {
      acceptNode: n => n.nodeType === 1
        ? ((SKIP.test(n.nodeName) || n.hasAttribute('data-notr')) ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_SKIP)
        : NodeFilter.FILTER_ACCEPT
    });
    let n;
    while ((n = tw.nextNode())) doText(n);
  }

  let titleOrig = document.title, titleShown = document.title;
  function doTitle() {
    if (document.title !== titleShown) titleOrig = document.title;
    titleShown = mode === 'lotin' ? titleOrig : conv(titleOrig);
    if (document.title !== titleShown) document.title = titleShown;
  }

  function applyAll() { walk(document.body); doTitle(); }

  const mo = new MutationObserver(muts => {
    muts.forEach(m => {
      if (m.type === 'characterData') {
        const n = m.target;
        if (!(SHOWN.has(n) && SHOWN.get(n) === n.nodeValue) && !skipped(n.parentNode)) doText(n);
      } else if (m.type === 'attributes') {
        doAttrs(m.target);
      } else {
        m.addedNodes.forEach(walk);
      }
    });
  });
  const titleEl = document.querySelector('title');
  const tmo = new MutationObserver(doTitle);

  /* ---------- Inglizcha tarjimani yuklash ---------- */
  let enPromise = null;
  function loadEn() {
    if (window.ESSAYS_EN) return Promise.resolve();
    if (!enPromise) {
      enPromise = new Promise((resolve, reject) => {
        const s = document.createElement('script');
        s.src = 'essays-en.js?v=1';
        s.onload = () => resolve();
        s.onerror = () => { enPromise = null; reject(new Error('essays-en.js')); };
        document.head.appendChild(s);
      });
    }
    return enPromise;
  }

  /* ---------- Tugmalar ---------- */
  function paintButtons() {
    document.querySelectorAll('.yozuv button[data-yz]').forEach(b => {
      b.setAttribute('aria-pressed', b.getAttribute('data-yz') === mode ? 'true' : 'false');
    });
    const html = document.documentElement;
    html.setAttribute('data-yozuv', mode);
    html.setAttribute('lang', mode === 'en' ? 'en' : mode === 'kirill' ? 'uz-Cyrl' : 'uz');
  }

  function saveMode(updateUrl) {
    try { localStorage.setItem('jz_yozuv', mode); } catch (err) {}
    if (!updateUrl) return;
    try {
      const u = new URL(location.href);
      if (mode === 'lotin') u.searchParams.delete('yozuv'); else u.searchParams.set('yozuv', mode);
      history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    } catch (err) {}
  }

  async function setMode(m, byUser) {
    if (MODES.indexOf(m) === -1 || m === mode) return;
    if (m === 'en') {
      try { await loadEn(); } catch (err) { /* tarjima yuklanmasa ham sayt qismlari inglizcha bo'ladi */ }
    }
    const old = mode;
    mode = 'lotin';
    applyAll();            /* avval asl lotin matnga qaytaramiz */
    mode = m;
    paintButtons();
    if (old === 'en' || m === 'en') listeners.forEach(fn => { try { fn(m); } catch (err) {} });
    applyAll();
    saveMode(byUser);
  }

  document.addEventListener('click', e => {
    const b = e.target.closest && e.target.closest('.yozuv button[data-yz]');
    if (b) setMode(b.getAttribute('data-yz'), true);
  });

  window.Yozuv = {
    get mode() { return mode; },
    set: m => setMode(m, true),
    onChange: fn => { listeners.push(fn); },
    toCyr: toCyr,
    toYangi: toYangi
  };

  /* ---------- Ishga tushirish ---------- */
  paintButtons();
  if (mode !== 'lotin') saveMode(false);
  applyAll();
  mo.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ATTRS });
  if (titleEl) tmo.observe(titleEl, { childList: true, characterData: true, subtree: true });

  if (mode === 'en') {
    document.documentElement.classList.add('yz-wait');
    const done = () => {
      listeners.forEach(fn => { try { fn('en'); } catch (err) {} });
      applyAll();
      document.documentElement.classList.remove('yz-wait');
    };
    loadEn().then(() => setTimeout(done, 0), () => setTimeout(done, 0));
    setTimeout(() => document.documentElement.classList.remove('yz-wait'), 3000);
  }
})();

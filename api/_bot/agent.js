'use strict';
/* «Manager» — Jahongirning shaxsiy menejeri (Telegram).
   Shogirdlik dasturi bilimi + kun rejasi, 10 odat, hisobot, xarajat, eslatmalar. */

const S = require('./store');
const tg = require('./tg');
const llm = require('./llm');
const { ODATLAR, DARSLAR, BILIM } = require('./bilim');

/* ---------- vaqt (Toshkent, UTC+5) ---------- */
const TZ = 5 * 3600 * 1000;
const KUNLAR = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const OYLAR = ['yanvar', 'fevral', 'mart', 'aprel', 'may', 'iyun', 'iyul', 'avgust', 'sentabr', 'oktabr', 'noyabr', 'dekabr'];
function tnow() { return new Date(Date.now() + TZ); }
function ds(d) { return d.toISOString().slice(0, 10); }
function hm(d) { return d.toISOString().slice(11, 16); }
function addDays(d, n) { return new Date(d.getTime() + n * 86400000); }
function fromDs(s) { return new Date(s + 'T00:00:00Z'); }
function fmtDate(d) { return d.getUTCDate() + '-' + OYLAR[d.getUTCMonth()] + ', ' + KUNLAR[d.getUTCDay()]; }
function shortDate(s) { return s.slice(8, 10) + '.' + s.slice(5, 7); }
function num(n) { return Math.round(Number(n) || 0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' '); }
function esc(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function monday(d) { const k = (d.getUTCDay() + 6) % 7; return addDays(d, -k); }

/* ---------- kalitlar ---------- */
const K = {
  owner: 'mgr:owner', hist: 'mgr:hist', notes: 'mgr:notes', pending: 'mgr:pending',
  day: d => 'mgr:day:' + d, month: m => 'mgr:xarajat:' + m, upd: id => 'mgr:upd:' + id
};
const YEAR = 400 * 86400;
function emptyDay() { return { reja: [], odat: {}, hisobot: '', kayfiyat: '' }; }
async function getDay(d) { const o = await S.getJson(K.day(d), null); return Object.assign(emptyDay(), o || {}); }
async function setDay(d, obj) { return S.setJson(K.day(d), obj, YEAR); }
async function getDays(list) { return (await S.mgetJson(list.map(K.day), null)).map(o => Object.assign(emptyDay(), o || {})); }
async function getMonth(m) { return S.getJson(K.month(m), []); }
async function setMonth(m, arr) { return S.setJson(K.month(m), arr, YEAR); }
async function getNotes() { return S.getJson(K.notes, []); }
async function setNotes(a) { return S.setJson(K.notes, a); }
async function getHist() { return S.getJson(K.hist, []); }
async function pushHist(items) {
  const h = (await getHist()).concat(items).slice(-30);
  await S.setJson(K.hist, h, 30 * 86400);
}
async function getPending() { return (await S.get(K.pending)) || ''; }
async function setPending(v) { return v ? S.set(K.pending, v, 14 * 3600) : S.del(K.pending); }
async function owner() { return process.env.TG_OWNER_ID || (await S.get(K.owner)) || ''; }

/* ---------- statistika ---------- */
function odatCount(day) { return ODATLAR.filter(o => day.odat && day.odat[o.id]).length; }
function rejaStat(day) { const r = day.reja || []; return { n: r.length, done: r.filter(x => x.done).length }; }

async function weekStats(endDate, nDays) {
  const dates = [];
  for (let i = nDays - 1; i >= 0; i--) dates.push(ds(addDays(fromDs(endDate), -i)));
  const days = await getDays(dates);
  const per = {};
  ODATLAR.forEach(o => { per[o.id] = 0; });
  let total = 0, rejaN = 0, rejaDone = 0, hisobotlar = [];
  days.forEach((d, i) => {
    ODATLAR.forEach(o => { if (d.odat[o.id]) { per[o.id]++; total++; } });
    const r = rejaStat(d); rejaN += r.n; rejaDone += r.done;
    if (d.hisobot) hisobotlar.push(shortDate(dates[i]) + ': ' + d.hisobot);
  });
  return { dates, days, per, total, max: nDays * ODATLAR.length, rejaN, rejaDone, hisobotlar };
}

function monthSummary(arr) {
  let chiqim = 0, kirim = 0;
  arr.forEach(x => { if (x.kirim) kirim += x.sum; else chiqim += x.sum; });
  return { chiqim, kirim, n: arr.length };
}

/* ---------- holat matni (LLM uchun va /holat uchun) ---------- */
async function buildState(now) {
  const today = ds(now), yday = ds(addDays(now, -1)), month = today.slice(0, 7);
  const [d0, d1] = await getDays([today, yday]);
  const wk = await weekStats(today, 7);
  const mon = await getMonth(month);
  const ms = monthSummary(mon);
  const notes = await getNotes();
  const pending = await getPending();

  const L = [];
  L.push('Bugun: ' + fmtDate(now) + ' ' + now.getUTCFullYear() + ', soat ' + hm(now) + ' (Toshkent).');
  if (d0.reja.length) L.push('Bugungi reja: ' + d0.reja.map((x, i) => (i + 1) + ') ' + (x.done ? '[bajarildi] ' : '[ ] ') + x.t).join('; '));
  else L.push('Bugungi reja: hali yozilmagan.');
  const done = ODATLAR.filter(o => d0.odat[o.id]).map(o => o.qisqa);
  const notDone = ODATLAR.filter(o => !d0.odat[o.id]).map(o => o.qisqa);
  L.push('Bugungi odatlar (' + done.length + '/10): bajarilgan — ' + (done.join(', ') || 'yo\'q') + '; qolgan — ' + (notDone.join(', ') || 'yo\'q') + '.');
  if (d0.hisobot) L.push('Bugungi hisobot: ' + d0.hisobot);
  const r1 = rejaStat(d1);
  L.push('Kecha (' + shortDate(yday) + '): odatlar ' + odatCount(d1) + '/10' + (r1.n ? ', reja ' + r1.done + '/' + r1.n : '') + (d1.hisobot ? '; hisobot: ' + d1.hisobot : '; hisobot yozilmagan') + '.');
  L.push('So\'nggi 7 kun: odatlar ' + wk.total + '/' + wk.max + ' (' + Math.round(100 * wk.total / wk.max) + '%): ' +
    ODATLAR.map(o => o.qisqa + ' ' + wk.per[o.id] + '/7').join(', ') + (wk.rejaN ? '; reja bandlari ' + wk.rejaDone + '/' + wk.rejaN : '') + '.');
  L.push('Shu oy moliya (' + OYLAR[now.getUTCMonth()] + '): chiqim ' + num(ms.chiqim) + ' so\'m, kirim ' + num(ms.kirim) + ' so\'m, ' + ms.n + ' ta yozuv' +
    (mon.length ? '; oxirgilari: ' + mon.slice(-5).map(x => shortDate(x.d) + ' ' + (x.kirim ? '+' : '-') + num(x.sum) + ' ' + x.note).join(', ') : '') + '.');
  L.push('Eslatmalar/maqsadlar: ' + (notes.length ? notes.map((x, i) => (i + 1) + ') ' + x.t).join('; ') : 'yo\'q') + '.');
  if (pending === 'reja') L.push('KUTILMOQDA: ertalab bugungi reja so\'ralgan edi — foydalanuvchi rejani yozsa, "plan" action bilan saqla.');
  else if (pending === 'hisobot') L.push('KUTILMOQDA: kechqurun kun hisoboti so\'ralgan edi — foydalanuvchi kunini aytsa, "hisobot" action bilan saqla va Sinbook uslubida 1 xulosa ber.');
  return L.join('\n');
}

/* ---------- LLM tizim ko'rsatmasi ---------- */
function systemPrompt(state) {
  return [
    'Sen — «Manager», Jahongir Zoxidovning shaxsiy menejeri va intizom murabbiyi. Jahongir — Bekobod (Zafar)dagi Jony Academy o\'quv markazlari va Jony School maktabining egasi, tadbirkor-pedagog, «Shogirdlik dasturi» va «Ustozlik kursi» muallifi. U seni o\'z dasturi tamoyillari bo\'yicha O\'ZINI boshqarish uchun yaratgan: kun rejasi, 10 odat, vaqt, moliya, ilm, sog\'liq, fikrlash.',
    '',
    'USLUB: faqat o\'zbek tili (lotin). «Siz» deb murojaat qil. Telegram uchun qisqa yoz: 2–6 jumla, kerak bo\'lsa qisqa ro\'yxat. Talabchan, aniq, samimiy — bahonani qabul qilma, lekin hurmat bilan. Maqtovni tejab ishlat, natijaga qara. Har javobda dasturdan ko\'pi bilan bitta tamoyilga tayan — ma\'ruza qilma, savol ber. Javobni odatda bitta aniq savol yoki keyingi qadam bilan tugat. Markdown belgilarini (yulduzcha, #, ```) ishlatma — oddiy matn, ozgina emoji mumkin. Sanani va raqamlarni HOLAT bo\'limidan ol, o\'ylab topma.',
    '',
    'VAZIFALARING: ertalab kun rejasini (3 asosiy vazifa) olish; kun davomida qisqa maslahat; kechqurun hisobot va Sinbook (nima xato? nega? ertaga qanday?); odatlarni kuzatish va o\'tkazib yuborilganini eslatish; xarajat/kirimni yozib borish (so\'mda); u aytgan maqsad va qarorlarni eslab qolish; haftalik xulosa. Foydalanuvchi shunchaki suhbatlashsa yoki savol bersa — dastur bilimidan foydalanib javob ber.',
    '',
    'JAVOB FORMATI: faqat JSON obyekt, boshqa hech narsa: {"reply": "matn", "actions": [ ... ]}',
    'actions (faqat foydalanuvchi ANIQ aytgan narsani saqla, taxmin qilma; kerak bo\'lmasa bo\'sh massiv):',
    '- {"type":"plan","items":["vazifa 1","vazifa 2"]} — bugungi reja (agar u ertangi kun uchun aytsa "date":"YYYY-MM-DD" qo\'sh). Yangi reja eskisini almashtiradi; qo\'shimcha band uchun "add":true.',
    '- {"type":"plan_done","index":[1,3]} — reja bandlari bajarildi (1 dan boshlab).',
    '- {"type":"odat","id":"qadam","done":true} — odat bajarildi/bajarilmadi. id lar: ' + ODATLAR.map(o => o.id + ' (' + o.qisqa + ')').join(', ') + '.',
    '- {"type":"xarajat","sum":50000,"note":"taksi","kirim":false} — pul yozuvi so\'mda ("ming" = 000; kirim bo\'lsa kirim:true).',
    '- {"type":"hisobot","text":"..."} — kun hisoboti: u aytganlarning 1–3 jumlalik xulosasi (kechki hisobot yoki kunni yakunlab aytganda).',
    '- {"type":"eslatma","text":"..."} — uzoq muddat eslab qolish kerak bo\'lgan maqsad/qaror/fakt (u "eslab qol" desa yoki muhim qaror aytsa).',
    '- {"type":"eslatma_ochir","index":2} — eslatmani o\'chirish.',
    '',
    '=== HOLAT ===',
    state,
    '',
    '=== SHOGIRDLIK DASTURI (bilim bazasi) ===',
    BILIM
  ].join('\n');
}

function parseReply(raw) {
  let s = String(raw || '').trim();
  s = s.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/, '').trim();
  try { const j = JSON.parse(s); if (j && typeof j === 'object') return j; } catch (e) { /* davom */ }
  const m = s.match(/\{[\s\S]*\}/);
  if (m) { try { const j = JSON.parse(m[0]); if (j && typeof j === 'object') return j; } catch (e) { /* davom */ } }
  return { reply: s, actions: [] };
}

/* ---------- actions ---------- */
async function applyActions(actions, now) {
  const out = [];
  if (!Array.isArray(actions)) return out;
  const today = ds(now);
  for (const a of actions) {
    if (!a || typeof a !== 'object') continue;
    try {
      if (a.type === 'plan' && Array.isArray(a.items)) {
        const date = /^\d{4}-\d{2}-\d{2}$/.test(a.date || '') ? a.date : today;
        const d = await getDay(date);
        const items = a.items.map(x => String(x).trim()).filter(Boolean).slice(0, 10).map(t => ({ t, done: false }));
        if (!items.length) continue;
        d.reja = a.add ? d.reja.concat(items).slice(0, 12) : items;
        await setDay(date, d);
        if (date === today) await setPending('');
        out.push('reja ' + (date === today ? 'bugun' : shortDate(date)) + ' — ' + d.reja.length + ' band');
      } else if (a.type === 'plan_done' && Array.isArray(a.index)) {
        const d = await getDay(today);
        let c = 0;
        a.index.forEach(i => { const x = d.reja[Number(i) - 1]; if (x && !x.done) { x.done = true; c++; } });
        if (c) { await setDay(today, d); out.push('bajarildi: ' + c + ' band'); }
      } else if (a.type === 'odat' && a.id) {
        const o = ODATLAR.find(x => x.id === a.id);
        if (!o) continue;
        const date = /^\d{4}-\d{2}-\d{2}$/.test(a.date || '') ? a.date : today;
        const d = await getDay(date);
        d.odat[o.id] = a.done !== false;
        await setDay(date, d);
        out.push((d.odat[o.id] ? '✅ ' : '⬜ ') + o.qisqa);
      } else if (a.type === 'xarajat' && Number(a.sum) > 0) {
        const month = today.slice(0, 7);
        const arr = await getMonth(month);
        const row = { d: today, sum: Math.round(Number(a.sum)), note: String(a.note || '').slice(0, 60), kirim: Boolean(a.kirim) };
        arr.push(row);
        await setMonth(month, arr.slice(-500));
        out.push((row.kirim ? '+' : '-') + num(row.sum) + ' so\'m' + (row.note ? ' (' + row.note + ')' : ''));
      } else if (a.type === 'hisobot' && a.text) {
        const d = await getDay(today);
        d.hisobot = String(a.text).slice(0, 600);
        await setDay(today, d);
        await setPending('');
        out.push('kun hisoboti saqlandi');
      } else if (a.type === 'eslatma' && a.text) {
        const n = await getNotes();
        n.push({ t: String(a.text).slice(0, 300), d: today });
        await setNotes(n.slice(-40));
        out.push('eslatma saqlandi');
      } else if (a.type === 'eslatma_ochir' && Number(a.index) > 0) {
        const n = await getNotes();
        if (n[Number(a.index) - 1]) { n.splice(Number(a.index) - 1, 1); await setNotes(n); out.push('eslatma o\'chirildi'); }
      }
    } catch (e) {
      console.error('action', a.type, e.message);
    }
  }
  return out;
}

/* ---------- LLM bilan suhbat ---------- */
async function converse(chatId, userText, opts) {
  const now = tnow();
  const state = await buildState(now);
  const hist = await getHist();
  const messages = hist.map(h => ({ role: h.r === 'a' ? 'assistant' : 'user', content: h.r === 'a' ? h.t : '[' + h.d + '] ' + h.t }));
  const stamp = shortDate(ds(now)) + ' ' + hm(now);
  messages.push({ role: 'user', content: '[' + stamp + '] ' + userText });
  let raw;
  try {
    raw = await llm.chat({ system: systemPrompt(state), messages, maxTokens: 900, json: true });
  } catch (e) {
    console.error('llm', e.message);
    await tg.send(chatId, '⚠️ AI javob bera olmadi: ' + e.message.slice(0, 200) + '\n\nBuyruqlar (LLMsiz ham ishlaydi): /reja /odatlar /xarajat /holat');
    return;
  }
  const j = parseReply(raw);
  const reply = String(j.reply || '').trim() || '…';
  const saved = await applyActions(j.actions, now);
  const footer = saved.length ? '\n\n— saqlandi: ' + saved.join('; ') : '';
  await pushHist([{ r: 'u', t: userText.slice(0, 1500), d: stamp }, { r: 'a', t: reply.slice(0, 1500), d: stamp }]);
  await tg.send(chatId, reply + footer);
  if (opts && opts.after) await opts.after();
}

/* Cron/xizmat xabari: LLM matn yozadi, actions kutilmaydi */
async function composeMessage(instruction, fallback) {
  try {
    const state = await buildState(tnow());
    const raw = await llm.chat({ system: systemPrompt(state), messages: [{ role: 'user', content: instruction }], maxTokens: 700, json: true });
    const j = parseReply(raw);
    const t = String(j.reply || '').trim();
    return t || fallback;
  } catch (e) {
    console.error('compose', e.message);
    return fallback;
  }
}

/* ---------- klaviaturalar ---------- */
function odatKeyboard(day, date) {
  const rows = [];
  for (let i = 0; i < ODATLAR.length; i += 2) {
    rows.push(ODATLAR.slice(i, i + 2).map(o => ({
      text: (day.odat[o.id] ? '✅ ' : '⬜ ') + o.qisqa,
      callback_data: 'h:' + o.id + ':' + date
    })));
  }
  rows.push([{ text: '💾 Yakunlash (' + odatCount(day) + '/10)', callback_data: 'hs:' + date }]);
  return { inline_keyboard: rows };
}

function rejaText(day, date) {
  if (!day.reja.length) return '📋 <b>' + esc(shortDate(date)) + ' rejasi</b>\nHali reja yo\'q. Bugungi 3 asosiy vazifangizni yozing — saqlab qo\'yaman.';
  const r = rejaStat(day);
  return '📋 <b>' + esc(shortDate(date)) + ' rejasi</b> — ' + r.done + '/' + r.n + '\n' +
    day.reja.map((x, i) => (x.done ? '✅ ' : '▫️ ') + (i + 1) + '. ' + esc(x.t)).join('\n') +
    '\n\nBajarilganini bosing:';
}

function rejaKeyboard(day, date) {
  if (!day.reja.length) return undefined;
  const rows = [];
  day.reja.forEach((x, i) => rows.push([{ text: (x.done ? '✅ ' : '▫️ ') + (i + 1) + '. ' + x.t.slice(0, 40), callback_data: 'p:' + i + ':' + date }]));
  return { inline_keyboard: rows };
}

/* ---------- buyruqlar ---------- */
const COMMANDS = [
  { command: 'reja', description: 'Bugungi reja (ko\'rish / belgilash)' },
  { command: 'odatlar', description: '10 odat — bugungi checklist' },
  { command: 'hisobot', description: 'Kun hisobotini yozish' },
  { command: 'holat', description: 'Bugungi holat: reja, odatlar, moliya' },
  { command: 'hafta', description: 'Haftalik xulosa' },
  { command: 'moliya', description: 'Shu oy kirim-chiqim' },
  { command: 'xarajat', description: 'Xarajat yozish: /xarajat 50000 taksi' },
  { command: 'kirim', description: 'Kirim yozish: /kirim 1000000 izoh' },
  { command: 'eslab', description: 'Eslatma saqlash: /eslab matn' },
  { command: 'eslatmalar', description: 'Saqlangan eslatmalar' },
  { command: 'dars', description: 'Dars mohiyati: /dars 4' },
  { command: 'tozala', description: 'Suhbat tarixini tozalash' },
  { command: 'yordam', description: 'Yordam' }
];

const YORDAM = [
  '🧭 <b>Manager</b> — Shogirdlik dasturi bo\'yicha shaxsiy menejeringiz.',
  '',
  'Har kuni 07:00 da kun rejangizni, 21:00 da hisobot va odatlar checklistini so\'rayman; yakshanba kechqurun — haftalik xulosa.',
  'Oddiy yozib gaplashing: «bugun 3 ta ish: …», «45 ming taksi», «10 ming qadam yurdim», «eslab qol: …», yoki savol bering — dastur bilimidan javob beraman.',
  '',
  COMMANDS.map(c => '/' + c.command + ' — ' + esc(c.description)).join('\n')
].join('\n');

async function cmdHolat(chatId) {
  const now = tnow();
  const state = await buildState(now);
  await tg.send(chatId, '📊 <b>Holat</b>\n' + esc(state).split('\n').filter(l => !l.startsWith('KUTILMOQDA')).join('\n'), { parse_mode: 'HTML' });
}

async function cmdMoliya(chatId) {
  const now = tnow();
  const month = ds(now).slice(0, 7);
  const arr = await getMonth(month);
  const ms = monthSummary(arr);
  const cats = {};
  arr.filter(x => !x.kirim).forEach(x => { const k = (x.note || 'boshqa').toLowerCase().split(/[\s,]+/)[0]; cats[k] = (cats[k] || 0) + x.sum; });
  const top = Object.entries(cats).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const lines = [
    '💰 <b>' + OYLAR[now.getUTCMonth()] + ' — moliya</b>',
    'Chiqim: <b>' + num(ms.chiqim) + '</b> so\'m · Kirim: <b>' + num(ms.kirim) + '</b> so\'m · ' + ms.n + ' ta yozuv'
  ];
  if (top.length) lines.push('', 'Chiqim bo\'yicha:', top.map(([k, v]) => '• ' + esc(k) + ' — ' + num(v)).join('\n'));
  if (arr.length) lines.push('', 'Oxirgi yozuvlar:', arr.slice(-8).map(x => shortDate(x.d) + ' ' + (x.kirim ? '➕' : '➖') + ' ' + num(x.sum) + ' ' + esc(x.note)).join('\n'));
  else lines.push('', 'Yozuv yo\'q. Masalan: /xarajat 50000 taksi');
  await tg.send(chatId, lines.join('\n'), { parse_mode: 'HTML' });
}

async function logMoney(chatId, arg, kirim) {
  const m = String(arg || '').trim().match(/^(\d[\d\s.,]*)\s*(ming|mln|million)?\s*(.*)$/i);
  if (!m) return tg.send(chatId, 'Format: ' + (kirim ? '/kirim 1000000 izoh' : '/xarajat 50000 taksi'));
  let sum = Number(m[1].replace(/[\s,]/g, '').replace(/\.(?=\d{3}\b)/g, ''));
  if (/ming/i.test(m[2] || '')) sum *= 1000;
  if (/mln|million/i.test(m[2] || '')) sum *= 1000000;
  if (!(sum > 0)) return tg.send(chatId, 'Summani tushunmadim.');
  const saved = await applyActions([{ type: 'xarajat', sum, note: m[3] || '', kirim }], tnow());
  const month = ds(tnow()).slice(0, 7);
  const ms = monthSummary(await getMonth(month));
  await tg.send(chatId, '✔ ' + saved.join('') + '\nShu oy: chiqim ' + num(ms.chiqim) + ', kirim ' + num(ms.kirim) + ' so\'m');
}

async function cmdHafta(chatId) {
  const now = tnow();
  const today = ds(now);
  const mon = ds(monday(now));
  const n = Math.round((fromDs(today) - fromDs(mon)) / 86400000) + 1;
  const wk = await weekStats(today, n);
  const text = await weeklyText(wk, mon, today, false);
  await tg.send(chatId, text);
}

async function weeklyText(wk, from, to, isFinal) {
  const data = [
    'Hafta: ' + shortDate(from) + ' – ' + shortDate(to) + ' (' + wk.dates.length + ' kun)' + (isFinal ? ', hafta yakunlandi' : ', hafta davom etmoqda'),
    'Odatlar: ' + wk.total + '/' + wk.max + ' (' + Math.round(100 * wk.total / wk.max) + '%)',
    ODATLAR.map(o => '- ' + o.qisqa + ': ' + wk.per[o.id] + '/' + wk.dates.length).join('\n'),
    'Reja bandlari: ' + wk.rejaDone + '/' + wk.rejaN,
    'Kunlik hisobotlar:\n' + (wk.hisobotlar.join('\n') || '(yozilmagan)')
  ].join('\n');
  const fallback = '📅 Haftalik xulosa\n' + data;
  return composeMessage(
    'Quyidagi ma\'lumotlar asosida HAFTALIK XULOSA yoz (8–12 qator, oddiy matn): 1) umumiy baho bir jumla, 2) eng kuchli va eng zaif odat (raqamlar bilan), 3) hisobotlardan ko\'ringan asosiy muammo yoki yutuq, 4) Shogirdlik dasturidan shu holatga mos BITTA tamoyil, 5) keyingi hafta uchun bitta aniq fokus va uni qanday o\'lchash. Oxirida bitta savol. actions bo\'sh.\n\n' + data,
    fallback
  );
}

async function cmdDars(chatId, arg) {
  const n = parseInt(arg, 10);
  const d = DARSLAR.find(x => x.n === n);
  if (!d) return tg.send(chatId, 'Darslar:\n' + DARSLAR.map(x => x.n + '. ' + x.nom + ' — ' + x.odat.emoji + ' ' + x.odat.qisqa).join('\n') + '\n\nMasalan: /dars 4');
  await tg.send(chatId, '📖 <b>' + d.n + '-dars. ' + esc(d.nom) + '</b>\n\n' + esc(d.mohiyat) + '\n\n' + d.odat.emoji + ' <b>Odat:</b> ' + esc(d.odat.nom), { parse_mode: 'HTML' });
}

async function handleCommand(chatId, cmd, arg) {
  const now = tnow();
  const today = ds(now);
  switch (cmd) {
    case 'start':
    case 'yordam':
    case 'help':
      return tg.send(chatId, YORDAM, { parse_mode: 'HTML' });
    case 'reja': {
      const d = await getDay(today);
      if (!d.reja.length) await setPending('reja');
      return tg.send(chatId, rejaText(d, today), { parse_mode: 'HTML', reply_markup: rejaKeyboard(d, today) });
    }
    case 'odatlar': {
      const d = await getDay(today);
      return tg.send(chatId, '☑️ <b>Bugungi odatlar</b> — ' + esc(shortDate(today)) + '\nBajarilganini bosing:', { parse_mode: 'HTML', reply_markup: odatKeyboard(d, today) });
    }
    case 'hisobot':
      await setPending('hisobot');
      return tg.send(chatId, '📝 Kun qanday o\'tdi? 2–4 jumla: reja bo\'yicha nima bajarildi, nima qoldi, bitta xulosa (nima xato? nega? ertaga qanday?).');
    case 'holat':
      return cmdHolat(chatId);
    case 'hafta':
      await tg.typing(chatId);
      return cmdHafta(chatId);
    case 'moliya':
      return cmdMoliya(chatId);
    case 'xarajat':
      return logMoney(chatId, arg, false);
    case 'kirim':
      return logMoney(chatId, arg, true);
    case 'eslab': {
      if (!arg) return tg.send(chatId, 'Format: /eslab matn');
      await applyActions([{ type: 'eslatma', text: arg }], now);
      return tg.send(chatId, '✔ Eslab qoldim: ' + arg);
    }
    case 'eslatmalar': {
      const n = await getNotes();
      return tg.send(chatId, n.length ? '🗒 <b>Eslatmalar</b>\n' + n.map((x, i) => (i + 1) + '. ' + esc(x.t) + ' <i>(' + shortDate(x.d) + ')</i>').join('\n') + '\n\nO\'chirish: /unut 2' : 'Eslatmalar yo\'q. /eslab matn', { parse_mode: 'HTML' });
    }
    case 'unut': {
      const r = await applyActions([{ type: 'eslatma_ochir', index: parseInt(arg, 10) }], now);
      return tg.send(chatId, r.length ? '✔ O\'chirildi' : 'Bunday raqam yo\'q. /eslatmalar');
    }
    case 'dars':
      return cmdDars(chatId, arg);
    case 'tozala':
      await S.del(K.hist);
      return tg.send(chatId, '🧹 Suhbat tarixi tozalandi (reja, odatlar va moliya saqlanib qoldi).');
    default:
      return null; /* noma'lum buyruq -> LLM ga */
  }
}

/* ---------- callback tugmalar ---------- */
async function handleCallback(cq) {
  const chatId = cq.message && cq.message.chat && cq.message.chat.id;
  const mid = cq.message && cq.message.message_id;
  const data = String(cq.data || '');
  const [kind, a, b] = data.split(':');
  if (kind === 'h' && a && b) {
    const o = ODATLAR.find(x => x.id === a);
    if (!o) return tg.answerCallback(cq.id);
    const d = await getDay(b);
    d.odat[o.id] = !d.odat[o.id];
    await setDay(b, d);
    await tg.editMarkup(chatId, mid, odatKeyboard(d, b));
    return tg.answerCallback(cq.id, (d.odat[o.id] ? '✅ ' : '⬜ ') + o.qisqa);
  }
  if (kind === 'hs' && a) {
    const d = await getDay(a);
    const c = odatCount(d);
    const missing = ODATLAR.filter(o => !d.odat[o.id]).map(o => o.qisqa);
    await tg.editText(chatId, mid, '☑️ <b>' + esc(shortDate(a)) + ' odatlar: ' + c + '/10</b>' + (missing.length ? '\nQolgan: ' + esc(missing.join(', ')) : '\nHammasi bajarildi 💪'), { parse_mode: 'HTML' });
    return tg.answerCallback(cq.id, 'Saqlandi: ' + c + '/10');
  }
  if (kind === 'p' && a != null && b) {
    const d = await getDay(b);
    const i = Number(a);
    if (!d.reja[i]) return tg.answerCallback(cq.id);
    d.reja[i].done = !d.reja[i].done;
    await setDay(b, d);
    await tg.editText(chatId, mid, rejaText(d, b), { parse_mode: 'HTML', reply_markup: rejaKeyboard(d, b) });
    return tg.answerCallback(cq.id, d.reja[i].done ? '✅ Bajarildi' : '▫️ Qaytarildi');
  }
  return tg.answerCallback(cq.id);
}

/* ---------- asosiy kirish ---------- */
async function handleUpdate(update) {
  if (!update || typeof update !== 'object') return;
  if (update.update_id != null) {
    const fresh = await S.setnx(K.upd(update.update_id), '1', 3600);
    if (fresh !== 'OK') return; /* takroriy yetkazilgan update */
  }
  if (update.callback_query) {
    const cq = update.callback_query;
    const from = String(cq.from && cq.from.id);
    if (from !== String(await owner())) return tg.answerCallback(cq.id, 'Bu shaxsiy bot');
    return handleCallback(cq);
  }
  const msg = update.message || update.edited_message;
  if (!msg || !msg.chat) return;
  const chatId = msg.chat.id;
  const fromId = String((msg.from && msg.from.id) || chatId);
  const text = String(msg.text || msg.caption || '').trim();
  const own = await owner();

  /* egasi hali yo'q: /start PIN bilan egalik qilinadi */
  if (!own) {
    const m = text.match(/^\/start(?:@\w+)?\s+(\S+)/);
    const pin = process.env.ADMIN_PIN || '';
    if (m && pin && m[1] === pin) {
      await S.set(K.owner, fromId);
      await tg.send(chatId, '✅ Manager sizga biriktirildi.\n\n' + YORDAM, { parse_mode: 'HTML' });
      return;
    }
    return tg.send(chatId, 'Bu shaxsiy bot. Egasi bo\'lsangiz: /start PIN');
  }
  if (fromId !== String(own)) return tg.send(chatId, 'Bu shaxsiy bot.');

  if (!text) return tg.send(chatId, 'Hozircha faqat matn tushunaman — yozib yuboring.');

  const cm = text.match(/^\/([a-zA-Z_]+)(?:@\w+)?\s*([\s\S]*)$/);
  if (cm) {
    const r = await handleCommand(chatId, cm[1].toLowerCase(), cm[2].trim());
    if (r !== null) return;
  }
  await tg.typing(chatId);
  return converse(chatId, text);
}

/* ---------- cron ---------- */
async function morning() {
  const chatId = await owner();
  if (!chatId) return { skipped: 'owner yo\'q' };
  const now = tnow();
  const yday = ds(addDays(now, -1));
  const d1 = await getDay(yday);
  const r1 = rejaStat(d1);
  const fallback = '🌅 Xayrli tong! Bugun ' + fmtDate(now) + '.\nKecha: odatlar ' + odatCount(d1) + '/10' + (r1.n ? ', reja ' + r1.done + '/' + r1.n : '') + '.\nBugungi 3 asosiy vazifangiz nima? Yozing — saqlab, kechqurun so\'rayman.';
  const text = await composeMessage(
    'ERTALABKI XABAR yoz (4–6 jumla, oddiy matn): qisqa salom va bugungi sana; kechagi natija (odatlar, reja, hisobot) haqida bitta halol fikr — maqtov yoki tanbeh; agar kecha hisobot yozilmagan bo\'lsa, buni ayt; oxirida bugungi 3 asosiy vazifani so\'ra. actions bo\'sh.',
    fallback
  );
  await setPending('reja');
  await pushHist([{ r: 'a', t: text.slice(0, 1200), d: shortDate(ds(now)) + ' ' + hm(now) }]);
  await tg.send(chatId, text);
  return { ok: true };
}

async function evening(opts) {
  const chatId = await owner();
  if (!chatId) return { skipped: 'owner yo\'q' };
  const now = tnow();
  const today = ds(now);
  const d0 = await getDay(today);
  const r0 = rejaStat(d0);
  const fallback = '🌙 Kun yakuni. ' + (r0.n ? 'Reja: ' + r0.done + '/' + r0.n + ' bajarildi. ' : 'Bugun reja yozilmagan edi. ') + 'Kun qanday o\'tdi? 2–4 jumla: nima bajarildi, nima qoldi, bitta xulosa (nima xato? nega? ertaga qanday?).';
  const text = await composeMessage(
    'KECHKI XABAR yoz (3–5 jumla, oddiy matn): bugungi reja va odatlar holatiga qarab qisqa fikr (bajarilmagan band bo\'lsa, nomini ayt); so\'ng kun hisobotini so\'ra — nima bajarildi, nima qoldi va Sinbook: nima xato? nega? ertaga qanday? Odatlar checklisti alohida yuboriladi, uni eslat. actions bo\'sh.',
    fallback
  );
  await setPending('hisobot');
  await pushHist([{ r: 'a', t: text.slice(0, 1200), d: shortDate(today) + ' ' + hm(now) }]);
  await tg.send(chatId, text);
  await tg.send(chatId, '☑️ <b>Bugungi odatlar</b> — ' + esc(shortDate(today)) + '\nBajarilganini bosing:', { parse_mode: 'HTML', reply_markup: odatKeyboard(d0, today) });
  const weekly = (opts && opts.weekly) || now.getUTCDay() === 0;
  if (weekly) {
    const mon = ds(monday(now));
    const wk = await weekStats(today, 7);
    const wt = await weeklyText(wk, mon, today, true);
    await tg.send(chatId, wt);
  }
  return { ok: true, weekly };
}

module.exports = { handleUpdate, morning, evening, COMMANDS, buildState, systemPrompt, parseReply, applyActions, tnow, ds, _keys: K };

'use strict';
/* O'qish chuqurligi: o'quvchi inshoning qayerigacha o'qiganini o'lchash uchun umumiy qism.
   Insho matni saytdagi renderBody (index.html) bilan AYNAN bir xil bo'laklarga ajratiladi:
   har paragraf, sarlavha, iqtibos, rasm va ro'yxatning har bir bandi alohida bo'lak.
   Brauzer har bo'lakka data-b raqamini qo'yadi, server shu raqamlarni shu ro'yxat bilan tekshiradi.

   Redis kalitlari:
     chuq:{folio}:{ver}  HASH  vid -> "max|bits|sec|manba|kun"
                               max  — ekranga chiqqan eng oxirgi bo'lak (0 dan)
                               bits — har bo'lak uchun 1/0: o'qishga yetarli vaqt ekranda turdimi
                               sec  — faol o'qish vaqti, soniya
     chuqv:{folio}       HASH  ver -> JSON {d: birinchi kun, t: sarlavha, u: [[tur, so'z, parcha]...]}
                               insho tahrir qilinsa, eski versiya matni shu yerda saqlanib qoladi */

const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* FNV-1a (32 bit). Brauzerdagi versiya() bilan bir xil: matnning bitta harfi o'zgarsa ham
   versiya o'zgaradi, eski va yangi matn ma'lumoti aralashmaydi. */
function versiya(s) {
  s = String(s || '');
  let h = 0x811c9dc5;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(36);
}

function tozala(t) {
  return String(t || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

/* index.html dagi renderBody bilan bir xil tartib: ro'yxat, sarlavha, rasm, iqtibos, paragraf */
function bloklar(body) {
  const out = [];
  String(body || '').split('\n\n').forEach(raw => {
    const block = (raw || '').trim();
    if (!block) return;
    const lines = block.split('\n').map(l => l.trim()).filter(Boolean);
    if (lines.length > 0 && lines.every(l => l.indexOf('- ') === 0)) {
      lines.forEach(l => out.push(['li', tozala(l.slice(2))]));
      return;
    }
    if (block.indexOf('## ') === 0) { out.push(['h', tozala(block.slice(3))]); return; }
    const rasm = block.match(/^!\[([^\]]*)\]\((\S+?)\)$/);
    if (rasm) { out.push(['img', tozala(rasm[1]) || 'Rasm']); return; }
    if (block.indexOf('> ') === 0) { out.push(['q', tozala(block.replace(/^>\s?/gm, ''))]); return; }
    out.push(['p', tozala(block)]);
  });
  return out.map(([t, s]) => ({
    t,
    w: s.split(' ').filter(Boolean).length,
    s: s.length > 120 ? s.slice(0, 117).replace(/\s+\S*$/, '') + '…' : s
  }));
}

let CACHE = null;
/* Chop etilgan insholar (essays.js). Qoralamalar bu yerda yo'q, ular hisoblanmaydi. */
function insholar() {
  if (CACHE) return CACHE;
  const tries = [path.join(process.cwd(), 'essays.js'), path.join(__dirname, '..', '..', 'essays.js')];
  const p = tries.find(x => fs.existsSync(x));
  const map = {};
  if (p) {
    const ctx = { window: {} };
    vm.createContext(ctx);
    try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx); } catch (e) { /* bo'sh qoladi */ }
    (Array.isArray(ctx.window.ESSAYS) ? ctx.window.ESSAYS : []).forEach(e => {
      const folio = String(e.folio);
      map[folio] = { folio, raqam: String(e.raqam || folio), title: e.title || '', date: e.date || '', body: e.body || '', ver: versiya(e.body || '') };
    });
  }
  CACHE = map;
  return map;
}

function birInsho(folio) {
  const e = insholar()[folio];
  if (!e) return null;
  if (!e.units) e.units = bloklar(e.body);
  return e;
}

/* "max|bits|sec|manba|kun" qatorlarini yig'ib, har bo'lak bo'yicha sonlarni chiqaradi.
   toxtadi[i] — oxirgi o'qigan bo'lagi i-1 bo'lganlar, ya'ni aynan i-bo'lakka kelib
   o'qishni to'xtatganlar (i = 0: birinchi bo'lakni ham o'qimaganlar). */
function yigindi(flat, n) {
  const yetdi = new Array(n).fill(0);
  const oqidi = new Array(n).fill(0);
  const toxtadi = new Array(n).fill(0);
  const secs = [];
  const manba = {};
  let R = 0, oxirigaYetdi = 0, oxiriniOqidi = 0, chuqSum = 0;
  if (Array.isArray(flat)) {
    for (let i = 0; i < flat.length; i += 2) {
      const p = String(flat[i + 1] || '').split('|');
      const max = Number(p[0]);
      const bits = p[1] || '';
      if (!(max >= 0 && max < n) || bits.length !== n) continue;
      const sec = Number(p[2]) || 0;
      const src = p[3] || 'togridan';
      R++;
      for (let j = 0; j <= max; j++) yetdi[j]++;
      let last = -1;
      for (let j = 0; j < n; j++) if (bits.charCodeAt(j) === 49) { oqidi[j]++; last = j; }
      if (last < n - 1) toxtadi[last + 1]++;
      if (max === n - 1) oxirigaYetdi++;
      if (last === n - 1) oxiriniOqidi++;
      chuqSum += (max + 1) / n;
      secs.push(sec);
      const m = manba[src] || (manba[src] = { R: 0, oxirigaYetdi: 0, chuqSum: 0 });
      m.R++;
      if (max === n - 1) m.oxirigaYetdi++;
      m.chuqSum += (max + 1) / n;
    }
  }
  secs.sort((a, b) => a - b);
  Object.keys(manba).forEach(k => { const m = manba[k]; m.chuqur = m.R ? Math.round(m.chuqSum / m.R * 100) : 0; delete m.chuqSum; });
  return {
    R, yetdi, oqidi, toxtadi, oxirigaYetdi, oxiriniOqidi,
    chuqur: R ? Math.round(chuqSum / R * 100) : 0,
    secMed: secs.length ? secs[secs.length >> 1] : 0,
    manba
  };
}

module.exports = { versiya, bloklar, insholar, birInsho, yigindi };

'use strict';
/* Insho izohlari — saqlash va moderatsiya (api/izoh.js va Manager bot ishlatadi).

   Redis tuzilishi:
     izoh:<folio>   hash  id -> JSON { id, f, name, text, at, ok, reply?, replyAt? }
     izoh:kutish    hash  "<folio>:<id>" -> at      (muallif hali ko'rmagan izohlar)
     izmsg:<msgId>  str   "<folio>:<id>"            (Telegram xabari -> izoh; reply bilan javob yozish uchun)

   Yangi izoh ok:false bo'lib tushadi va faqat muallif ma'qullagach (ok:true) saytda chiqadi. */

const { redis, pipeline } = require('./redis');

const SITE = 'https://www.jahongirzoxidov.uz';
const PENDING = 'izoh:kutish';
const key = f => 'izoh:' + f;

function parse(v) {
  try { return JSON.parse(v); } catch (e) { return null; }
}

function fromHash(flat) {
  const out = [];
  if (!Array.isArray(flat)) return out;
  for (let i = 1; i < flat.length; i += 2) {
    const c = parse(flat[i]);
    if (c && c.id) out.push(c);
  }
  return out.sort((a, b) => a.at - b.at);
}

async function list(f) {
  return fromHash(await redis('HGETALL', key(f)));
}

async function get(f, id) {
  return parse(await redis('HGET', key(f), String(id)));
}

async function save(c) {
  await redis('HSET', key(c.f), c.id, JSON.stringify(c));
}

async function add({ f, name, text }) {
  const at = Date.now();
  const id = at.toString(36) + Math.random().toString(36).slice(2, 6);
  const c = { id, f: String(f), name, text, at, ok: false };
  await pipeline([
    ['HSET', key(c.f), id, JSON.stringify(c)],
    ['HSET', PENDING, c.f + ':' + id, String(at)]
  ]);
  return c;
}

async function approve(f, id) {
  const c = await get(f, id);
  if (!c) return null;
  c.ok = true;
  await pipeline([
    ['HSET', key(c.f), c.id, JSON.stringify(c)],
    ['HDEL', PENDING, c.f + ':' + c.id]
  ]);
  return c;
}

async function remove(f, id) {
  const c = await get(f, id);
  await pipeline([
    ['HDEL', key(f), String(id)],
    ['HDEL', PENDING, f + ':' + id]
  ]);
  return c;
}

/* Muallif javobi. Javob yozilgan izoh avtomatik saytga chiqariladi. Bo'sh matn — javobni o'chiradi. */
async function reply(f, id, text) {
  const c = await get(f, id);
  if (!c) return null;
  if (text) { c.reply = text; c.replyAt = Date.now(); c.ok = true; }
  else { delete c.reply; delete c.replyAt; }
  await pipeline([
    ['HSET', key(c.f), c.id, JSON.stringify(c)],
    ['HDEL', PENDING, c.f + ':' + c.id]
  ]);
  return c;
}

/* { '7': 2, '5': 1 } — har bir insho bo'yicha ko'rilmagan izohlar soni */
async function pendingCounts() {
  const flat = await redis('HGETALL', PENDING);
  const counts = {};
  if (Array.isArray(flat)) {
    for (let i = 0; i < flat.length; i += 2) {
      const f = String(flat[i]).split(':')[0];
      counts[f] = (counts[f] || 0) + 1;
    }
  }
  return counts;
}

function esc(s) {
  return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* Manager bot ulangan bo'lsa — muallifga Telegram'da xabar (tugmalar bilan). Ulanmagan bo'lsa jim o'tadi. */
async function notify(c, title) {
  if (!process.env.TELEGRAM_BOT_TOKEN) return { skipped: 'token' };
  const owner = process.env.TG_OWNER_ID || (await redis('GET', 'mgr:owner'));
  if (!owner) return { skipped: 'owner' };
  const tg = require('../_bot/tg');
  const head = '💬 <b>Yangi izoh</b> — №' + esc(c.f) + (title ? ' «' + esc(String(title).slice(0, 90)) + '»' : '');
  const body = '<b>' + esc(c.name) + ':</b>\n' + esc(String(c.text).slice(0, 1200));
  const foot = '<i>Javob yozish uchun shu xabarga reply qiling.</i>\n' + SITE + '/#insho-' + esc(c.f);
  const m = await tg.send(owner, head + '\n\n' + body + '\n\n' + foot, {
    parse_mode: 'HTML',
    reply_markup: { inline_keyboard: [[
      { text: '✅ Chiqarish', callback_data: 'iz:ok:' + c.f + ':' + c.id },
      { text: '🗑 O\'chirish', callback_data: 'iz:del:' + c.f + ':' + c.id }
    ]] }
  });
  if (m && m.message_id) await redis('SET', 'izmsg:' + m.message_id, c.f + ':' + c.id, 'EX', 60 * 86400);
  return { sent: true };
}

module.exports = { list, get, add, approve, remove, reply, pendingCounts, notify, PENDING };

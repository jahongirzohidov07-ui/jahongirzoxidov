'use strict';
/* Manager bot uchun kichik saqlash qatlami: Upstash Redis (REST) yoki
   test/lokal rejimda xotira (MGR_MEMSTORE=1 yoki baza ulanmagan bo'lsa). */

const R = require('../_lib/redis');

const mem = new Map();
function useMem() { return process.env.MGR_MEMSTORE === '1' || !R.configured(); }

async function get(key) {
  if (useMem()) return mem.has(key) ? mem.get(key) : null;
  return R.redis('GET', key);
}

async function mget(keys) {
  if (!keys.length) return [];
  if (useMem()) return keys.map(k => (mem.has(k) ? mem.get(k) : null));
  return R.redis('MGET', ...keys);
}

async function set(key, val, exSec) {
  if (useMem()) { mem.set(key, val); return 'OK'; }
  return exSec ? R.redis('SET', key, val, 'EX', exSec) : R.redis('SET', key, val);
}

/* faqat yo'q bo'lsa yozadi -> 'OK' yoki null */
async function setnx(key, val, exSec) {
  if (useMem()) { if (mem.has(key)) return null; mem.set(key, val); return 'OK'; }
  return R.redis('SET', key, val, 'NX', 'EX', exSec);
}

async function del(key) {
  if (useMem()) { mem.delete(key); return 1; }
  return R.redis('DEL', key);
}

function parse(v, dflt) {
  if (v == null) return dflt;
  if (typeof v !== 'string') return v;
  try { return JSON.parse(v); } catch (e) { return dflt; }
}

async function getJson(key, dflt) { return parse(await get(key), dflt); }
async function mgetJson(keys, dflt) { return (await mget(keys)).map(v => parse(v, dflt)); }
async function setJson(key, obj, exSec) { return set(key, JSON.stringify(obj), exSec); }

function _reset() { mem.clear(); }

module.exports = { get, mget, set, setnx, del, getJson, mgetJson, setJson, useMem, _reset };

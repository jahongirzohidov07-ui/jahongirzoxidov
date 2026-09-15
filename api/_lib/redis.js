'use strict';
/* Upstash Redis REST mijozi (kutubxonasiz). Vercel Marketplace o'rnatgan
   KV_REST_API_* yoki UPSTASH_REDIS_REST_* o'zgaruvchilaridan foydalanadi. */

const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL || '';
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN || '';

function configured() {
  return Boolean(URL_ && TOKEN);
}

async function call(path, body) {
  const r = await fetch(URL_.replace(/\/$/, '') + path, {
    method: 'POST',
    headers: { Authorization: 'Bearer ' + TOKEN, 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });
  if (!r.ok) throw new Error('redis http ' + r.status);
  return r.json();
}

/* redis('HINCRBY', 'views', '6', 1) */
async function redis(...cmd) {
  const j = await call('', cmd);
  if (j && j.error) throw new Error(j.error);
  return j.result;
}

/* pipeline([['HGETALL','views'], ['HGETALL','daily']]) -> [result, result] */
async function pipeline(cmds) {
  const arr = await call('/pipeline', cmds);
  return arr.map(x => (x && x.error ? null : x.result));
}

function hashToObj(flat) {
  const o = {};
  if (!Array.isArray(flat)) return o;
  for (let i = 0; i < flat.length; i += 2) o[flat[i]] = Number(flat[i + 1]) || 0;
  return o;
}

module.exports = { configured, redis, pipeline, hashToObj };

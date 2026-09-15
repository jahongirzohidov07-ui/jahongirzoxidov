'use strict';
const crypto = require('crypto');
const { redis } = require('./redis');

function clientIp(req) {
  const xf = req.headers['x-forwarded-for'];
  if (xf) return String(xf).split(',')[0].trim();
  return req.headers['x-real-ip'] || (req.socket && req.socket.remoteAddress) || '0.0.0.0';
}

function today() {
  /* Toshkent vaqti bo'yicha kun (UTC+5) */
  return new Date(Date.now() + 5 * 3600 * 1000).toISOString().slice(0, 10);
}

function readJson(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (typeof req.body === 'string') {
    try { return Promise.resolve(JSON.parse(req.body)); } catch (e) { return Promise.resolve({}); }
  }
  return new Promise(resolve => {
    let data = '';
    req.on('data', c => { data += c; if (data.length > 4096) req.destroy(); });
    req.on('end', () => { try { resolve(JSON.parse(data || '{}')); } catch (e) { resolve({}); } });
    req.on('error', () => resolve({}));
  });
}

function send(res, status, obj) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(obj));
}

function safeEqual(a, b) {
  const x = Buffer.from(String(a || ''));
  const y = Buffer.from(String(b || ''));
  if (x.length !== y.length || x.length === 0) return false;
  return crypto.timingSafeEqual(x, y);
}

/* PIN tekshiruvi + IP bo'yicha urinishlar cheklovi (15 daqiqada 8 ta xato). */
async function checkPin(req) {
  const expected = process.env.ADMIN_PIN || '';
  if (!expected) return { ok: false, reason: 'ADMIN_PIN sozlanmagan' };
  const given = req.headers['x-admin-pin'] || '';
  const key = 'pinfail:' + clientIp(req);
  let fails = 0;
  try { fails = Number(await redis('GET', key)) || 0; } catch (e) { fails = 0; }
  if (fails >= 8) return { ok: false, reason: 'Juda ko\'p urinish. 15 daqiqadan keyin qayta urinib ko\'ring', locked: true };
  if (safeEqual(given, expected)) return { ok: true };
  try { await redis('INCR', key); await redis('EXPIRE', key, 900); } catch (e) { /* e'tiborsiz */ }
  return { ok: false, reason: 'PIN noto\'g\'ri' };
}

module.exports = { clientIp, today, readJson, send, checkPin };

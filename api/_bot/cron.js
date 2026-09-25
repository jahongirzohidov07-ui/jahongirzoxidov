'use strict';
/* Cron kirish nazorati: Vercel Cron (Authorization: Bearer CRON_SECRET) yoki x-admin-pin.
   CRON_SECRET sozlanmagan bo'lsa, vercel-cron user-agent qabul qilinadi. */
const { send, checkPin } = require('../_lib/util');

async function authorized(req) {
  const sec = process.env.CRON_SECRET || '';
  const auth = String(req.headers.authorization || '');
  if (sec && auth === 'Bearer ' + sec) return true;
  if (req.headers['x-admin-pin']) { const a = await checkPin(req); if (a.ok) return true; }
  if (!sec && /^vercel-cron\//i.test(String(req.headers['user-agent'] || ''))) return true;
  return false;
}

function handler(job) {
  return async (req, res) => {
    if (!(await authorized(req))) return send(res, 401, { error: 'auth' });
    try {
      const r = await job(req.query || {});
      return send(res, 200, r || { ok: true });
    } catch (e) {
      console.error('cron', e && e.stack || e);
      return send(res, 500, { error: e.message });
    }
  };
}

module.exports = { handler };

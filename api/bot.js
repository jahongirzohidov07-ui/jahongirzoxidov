'use strict';
/* «Manager» Telegram bot — webhook.
   POST /api/bot                 <- Telegram (X-Telegram-Bot-Api-Secret-Token = ADMIN_PIN)
   GET  /api/bot?setup=1         -> webhook + buyruqlarni ro'yxatga oladi (x-admin-pin kerak)
   GET  /api/bot                 -> holat (x-admin-pin kerak)
   Kerakli env: TELEGRAM_BOT_TOKEN, ADMIN_PIN, GEMINI_API_KEY (yoki ANTHROPIC_API_KEY), KV_REST_API_* */

const { send, checkPin } = require('./_lib/util');
const S = require('./_bot/store');
const tg = require('./_bot/tg');
const llm = require('./_bot/llm');
const agent = require('./_bot/agent');

function readBody(req) {
  if (req.body && typeof req.body === 'object') return Promise.resolve(req.body);
  if (typeof req.body === 'string') { try { return Promise.resolve(JSON.parse(req.body)); } catch (e) { return Promise.resolve({}); } }
  return new Promise(resolve => {
    let data = '';
    req.on('data', c => { data += c; if (data.length > 1e6) req.destroy(); });
    req.on('end', () => { try { resolve(JSON.parse(data || '{}')); } catch (e) { resolve({}); } });
    req.on('error', () => resolve({}));
  });
}

module.exports = async (req, res) => {
  if (req.method === 'GET') {
    const auth = await checkPin(req);
    if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
    const q = req.query || {};
    if (!process.env.TELEGRAM_BOT_TOKEN) return send(res, 500, { error: 'TELEGRAM_BOT_TOKEN sozlanmagan' });
    try {
      if (q.setup) {
        const host = process.env.MGR_HOST || req.headers.host;
        const url = 'https://' + host + '/api/bot';
        const hook = await tg.api('setWebhook', {
          url, secret_token: process.env.ADMIN_PIN, drop_pending_updates: true,
          allowed_updates: ['message', 'edited_message', 'callback_query']
        });
        await tg.api('setMyCommands', { commands: agent.COMMANDS });
        await tg.api('setMyDescription', { description: 'Manager — Shogirdlik dasturi bo\'yicha shaxsiy menejer: kun rejasi, 10 odat, hisobot, moliya.' });
        const info = await tg.api('getWebhookInfo');
        const me = await tg.api('getMe');
        return send(res, 200, { ok: true, hook, url, bot: me.username, info, llm: llm.provider() });
      }
      const info = await tg.api('getWebhookInfo');
      return send(res, 200, { ok: true, owner: Boolean(await S.get(agent._keys.owner) || process.env.TG_OWNER_ID), llm: llm.provider(), redis: !S.useMem(), webhook: info.url || '', pending_updates: info.pending_update_count, last_error: info.last_error_message || '' });
    } catch (e) {
      return send(res, 500, { error: e.message });
    }
  }

  if (req.method !== 'POST') { res.setHeader('Allow', 'GET, POST'); return send(res, 405, { error: 'method' }); }

  const secret = process.env.ADMIN_PIN || '';
  const given = String(req.headers['x-telegram-bot-api-secret-token'] || '');
  if (!secret || given !== secret) return send(res, 401, { error: 'secret' });

  const update = await readBody(req);
  try {
    await agent.handleUpdate(update);
  } catch (e) {
    console.error('bot', e && e.stack || e);
    try {
      const chatId = (update.message && update.message.chat && update.message.chat.id) || (update.callback_query && update.callback_query.message && update.callback_query.message.chat.id);
      if (chatId) await tg.send(chatId, '⚠️ Xatolik: ' + String(e.message || e).slice(0, 200));
    } catch (e2) { /* e'tiborsiz */ }
  }
  return send(res, 200, { ok: true });
};

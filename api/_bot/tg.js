'use strict';
/* Telegram Bot API — kutubxonasiz, fetch bilan. */

function token() { return process.env.TELEGRAM_BOT_TOKEN || ''; }

let _fetch = null; /* testlarda almashtirish uchun */
function setFetch(f) { _fetch = f; }

async function api(method, body) {
  const f = _fetch || fetch;
  const r = await f('https://api.telegram.org/bot' + token() + '/' + method, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body || {})
  });
  let j = null;
  try { j = await r.json(); } catch (e) { j = null; }
  if (!j || !j.ok) {
    const err = new Error('tg ' + method + ': ' + ((j && j.description) || ('http ' + r.status)));
    err.code = j && j.error_code;
    throw err;
  }
  return j.result;
}

function chunks(text, size) {
  const out = [];
  let s = String(text || '');
  while (s.length > size) {
    let cut = s.lastIndexOf('\n', size);
    if (cut < size * 0.5) cut = size;
    out.push(s.slice(0, cut));
    s = s.slice(cut);
  }
  if (s.length || !out.length) out.push(s);
  return out;
}

/* Xabar yuborish. extra: { parse_mode, reply_markup, ... }
   HTML xato bersa — oddiy matn sifatida qayta yuboradi. */
async function send(chatId, text, extra) {
  const parts = chunks(text, 3900);
  let last = null;
  for (let i = 0; i < parts.length; i++) {
    const base = { chat_id: chatId, text: parts[i], disable_web_page_preview: true };
    const body = Object.assign(base, extra || {});
    if (i < parts.length - 1) delete body.reply_markup;
    try {
      last = await api('sendMessage', body);
    } catch (e) {
      if (body.parse_mode) {
        delete body.parse_mode;
        last = await api('sendMessage', body);
      } else throw e;
    }
  }
  return last;
}

async function editText(chatId, messageId, text, extra) {
  const body = Object.assign({ chat_id: chatId, message_id: messageId, text, disable_web_page_preview: true }, extra || {});
  try { return await api('editMessageText', body); } catch (e) {
    if (/message is not modified/i.test(e.message)) return null;
    if (body.parse_mode) { delete body.parse_mode; return api('editMessageText', body); }
    throw e;
  }
}

async function editMarkup(chatId, messageId, replyMarkup) {
  try { return await api('editMessageReplyMarkup', { chat_id: chatId, message_id: messageId, reply_markup: replyMarkup }); } catch (e) {
    if (/message is not modified/i.test(e.message)) return null;
    throw e;
  }
}

async function answerCallback(id, text) {
  try { return await api('answerCallbackQuery', text ? { callback_query_id: id, text } : { callback_query_id: id }); } catch (e) { return null; }
}

async function typing(chatId) {
  try { await api('sendChatAction', { chat_id: chatId, action: 'typing' }); } catch (e) { /* e'tiborsiz */ }
}

module.exports = { api, send, editText, editMarkup, answerCallback, typing, setFetch, chunks };

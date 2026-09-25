'use strict';
/* LLM qatlami. Qaysi kalit bo'lsa — o'sha ishlaydi (ustuvorlik tartibida):
     ANTHROPIC_API_KEY  -> Claude   (ANTHROPIC_MODEL, default claude-sonnet-4-5)
     GEMINI_API_KEY     -> Gemini   (GEMINI_MODEL, default gemini-2.5-flash; bepul tarif)
     GROQ_API_KEY       -> Groq     (GROQ_MODEL, default llama-3.3-70b-versatile; bepul tarif)
     OPENAI_API_KEY     -> OpenAI   (OPENAI_MODEL, default gpt-4o-mini)
   chat({ system, messages:[{role:'user'|'assistant', content}], json, maxTokens }) -> string */

let _fetch = null;
function setFetch(f) { _fetch = f; }
function F() { return _fetch || fetch; }

function provider() {
  const e = process.env;
  if (e.MGR_LLM) return e.MGR_LLM;
  if (e.ANTHROPIC_API_KEY) return 'anthropic';
  if (e.GEMINI_API_KEY) return 'gemini';
  if (e.GROQ_API_KEY) return 'groq';
  if (e.OPENAI_API_KEY) return 'openai';
  return '';
}

/* Ketma-ket bir xil rollarni birlashtiradi, birinchisi 'user' bo'lishini ta'minlaydi */
function normalize(messages) {
  const out = [];
  for (const m of messages) {
    if (!m || !m.content) continue;
    const role = m.role === 'assistant' ? 'assistant' : 'user';
    if (out.length && out[out.length - 1].role === role) out[out.length - 1].content += '\n\n' + m.content;
    else out.push({ role, content: String(m.content) });
  }
  if (!out.length || out[0].role !== 'user') out.unshift({ role: 'user', content: '(boshlash)' });
  return out;
}

async function readJson(r) {
  const t = await r.text();
  try { return JSON.parse(t); } catch (e) { return { _raw: t.slice(0, 500) }; }
}

/* ---------- Gemini ---------- */
async function gemini({ system, messages, maxTokens, json }) {
  const key = process.env.GEMINI_API_KEY;
  const primary = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const models = [primary, 'gemini-2.5-flash-lite', 'gemini-2.0-flash'].filter((m, i, a) => a.indexOf(m) === i);
  let lastErr = null;
  for (const model of models) {
    const genCfg = { temperature: 0.7, maxOutputTokens: maxTokens };
    if (json) genCfg.responseMimeType = 'application/json';
    if (/2\.5/.test(model)) genCfg.thinkingConfig = { thinkingBudget: 0 };
    const body = {
      system_instruction: { parts: [{ text: system }] },
      contents: messages.map(m => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      generationConfig: genCfg,
      safetySettings: ['HARM_CATEGORY_HARASSMENT', 'HARM_CATEGORY_HATE_SPEECH', 'HARM_CATEGORY_SEXUALLY_EXPLICIT', 'HARM_CATEGORY_DANGEROUS_CONTENT']
        .map(c => ({ category: c, threshold: 'BLOCK_ONLY_HIGH' }))
    };
    const r = await F()('https://generativelanguage.googleapis.com/v1beta/models/' + model + ':generateContent?key=' + encodeURIComponent(key), {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body)
    });
    const j = await readJson(r);
    if (r.status === 429 || r.status === 503 || r.status === 404) {
      lastErr = new Error('gemini ' + model + ' http ' + r.status + ' ' + ((j.error && j.error.message) || ''));
      continue; /* keyingi modelga o'tamiz (limit tugagan bo'lishi mumkin) */
    }
    if (!r.ok) throw new Error('gemini ' + model + ' http ' + r.status + ' ' + ((j.error && j.error.message) || j._raw || ''));
    const cand = j.candidates && j.candidates[0];
    const text = cand && cand.content && cand.content.parts ? cand.content.parts.map(p => p.text || '').join('') : '';
    if (!text) {
      const why = (j.promptFeedback && j.promptFeedback.blockReason) || (cand && cand.finishReason) || 'bo\'sh javob';
      throw new Error('gemini: ' + why);
    }
    return text;
  }
  throw lastErr || new Error('gemini: model topilmadi');
}

/* ---------- Anthropic ---------- */
async function anthropic({ system, messages, maxTokens }) {
  const r = await F()('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-api-key': process.env.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
    body: JSON.stringify({ model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-5', max_tokens: maxTokens, system, messages, temperature: 0.7 })
  });
  const j = await readJson(r);
  if (!r.ok) throw new Error('anthropic http ' + r.status + ' ' + ((j.error && j.error.message) || j._raw || ''));
  return (j.content || []).filter(c => c.type === 'text').map(c => c.text).join('');
}

/* ---------- OpenAI-mos (Groq / OpenAI) ---------- */
async function openaiLike({ system, messages, maxTokens, json }, url, key, model) {
  const body = { model, max_tokens: maxTokens, temperature: 0.7, messages: [{ role: 'system', content: system }].concat(messages) };
  if (json) body.response_format = { type: 'json_object' };
  const r = await F()(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + key }, body: JSON.stringify(body) });
  const j = await readJson(r);
  if (!r.ok) throw new Error('llm http ' + r.status + ' ' + ((j.error && j.error.message) || j._raw || ''));
  return (j.choices && j.choices[0] && j.choices[0].message && j.choices[0].message.content) || '';
}

async function chat(opts) {
  const o = { maxTokens: 900, json: true, ...opts, messages: normalize(opts.messages || []) };
  const p = provider();
  if (p === 'anthropic') return anthropic(o);
  if (p === 'gemini') return gemini(o);
  if (p === 'groq') return openaiLike(o, 'https://api.groq.com/openai/v1/chat/completions', process.env.GROQ_API_KEY, process.env.GROQ_MODEL || 'llama-3.3-70b-versatile');
  if (p === 'openai') return openaiLike(o, 'https://api.openai.com/v1/chat/completions', process.env.OPENAI_API_KEY, process.env.OPENAI_MODEL || 'gpt-4o-mini');
  throw new Error('LLM kaliti sozlanmagan (GEMINI_API_KEY yoki ANTHROPIC_API_KEY)');
}

module.exports = { chat, provider, setFetch, normalize };

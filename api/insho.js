'use strict';
/* Qoralama insholar — faqat muallif (PIN) ko'radi.
   GET /api/insho  (x-admin-pin)  -> { drafts: [{ folio, title, date, body }] }
   Ma'qullangach insho api/_drafts/insholar.js dan essays.js ga ko'chiriladi. */

const { send, checkPin } = require('./_lib/util');
const drafts = require('./_drafts/insholar');

module.exports = async (req, res) => {
  if (req.method !== 'GET') return send(res, 405, { error: 'method' });
  const auth = await checkPin(req);
  if (!auth.ok) return send(res, auth.locked ? 429 : 401, { error: auth.reason });
  return send(res, 200, { drafts: drafts.map(e => ({ folio: String(e.folio), title: e.title, date: e.date || '', body: e.body || '' })) });
};

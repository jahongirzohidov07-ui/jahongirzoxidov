'use strict';
/* Manager: kechki xabar + odatlar checklisti (16:00 UTC = 21:00 Toshkent); yakshanba — haftalik xulosa */
const { handler } = require('./_bot/cron');
const agent = require('./_bot/agent');
module.exports = handler(q => agent.evening({ weekly: q.weekly === '1' }));

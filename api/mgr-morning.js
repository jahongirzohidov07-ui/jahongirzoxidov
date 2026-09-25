'use strict';
/* Manager: ertalabki xabar (Vercel Cron 02:00 UTC = 07:00 Toshkent) */
const { handler } = require('./_bot/cron');
const agent = require('./_bot/agent');
module.exports = handler(() => agent.morning());

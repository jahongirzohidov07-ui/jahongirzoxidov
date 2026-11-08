'use strict';
/* Tashrif manbai (o'quvchi saytga qayerdan keldi). Brauzer aniqlab yuboradi,
   bu yerda faqat ruxsat etilgan qiymatlar qabul qilinadi. Shaxsiy ma'lumot saqlanmaydi,
   faqat umumiy son (Telegram'dan 12, Instagram'dan 5 ...). */

const NOMLAR = {
  telegram: 'Telegram',
  instagram: 'Instagram',
  facebook: 'Facebook',
  google: 'Google',
  yandex: 'Yandex',
  qidiruv: 'Boshqa qidiruv tizimi',
  togridan: "To'g'ridan yoki noma'lum"
};

function manba(s) {
  const v = String(s || '').toLowerCase().slice(0, 70);
  if (NOMLAR[v]) return v;
  if (/^sayt:[a-z0-9][a-z0-9.-]{1,60}\.[a-z]{2,}$/.test(v)) return v;
  return 'togridan';
}

/* Qidiruv va ulashish botlari hisobga kirmaydi */
function isBot(req) {
  const ua = String((req.headers && req.headers['user-agent']) || '');
  return !ua || /bot|crawl|spider|slurp|preview|headless|lighthouse|facebookexternalhit|whatsapp|vercel/i.test(ua);
}

module.exports = { NOMLAR, manba, isBot };

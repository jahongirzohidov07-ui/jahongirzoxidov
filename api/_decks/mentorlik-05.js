'use strict';
/* Mentorlik (Shogirdlik) dasturi · 5-dars: Munosabatlar
   Eslatma: asl PPTX'ning ko'p slaydlari rasmlardan iborat — matni kelganda to'ldiriladi. */
module.exports = {
  slides: [
    { t: 'title', icon: '🤝', k: 'Mentorship program · Shogirdlik dasturi · 5-dars', h: 'Munosabatlar', s: 'Qiyin paytda kim yoningizda qoladi?', meta: 'Jahongir Zoxidov' },

    { t: 'ask', icon: '🌧️', k: 'Savol', h: 'Qiyin payt nima?' },

    { t: 'vs', icon: '⚖️', k: 'Javob', h: 'Qiyin payt — yaxshi davrda birga bo\'lish emas', a: { icon: '☕', h: 'Bu emas', tone: 'bad', items: ['Yaxshilikni bo\'lishish emas', 'Birga choyxonada o\'tiradigan emas', 'Birga kontrga boradigan emas', 'Birga vaqt o\'tkazish emas'] }, b: { icon: '🛡️', h: 'Bu', tone: 'good', items: ['Zararni bo\'lishish', 'Zararni o\'ziga ola olish', 'Unga umuman foyda bo\'lmay, nimadir kesish: hech bo\'lmasa vaqti'] } },

    { t: 'big', icon: '🧲', h: 'Talpa qilinganda yo\'q, talpa qilganda bor.' },

    { t: 'stats', icon: '🎲', k: 'O\'yin nazariyasi · o\'g\'rilik', h: 'Ikki sherik, bitta qaror', items: [
      { v: '$10 000', l: 'o\'lja' },
      { v: '1', l: 'qamoq · birinchi' },
      { v: '2', l: 'qamoq · ikkinchi' }
    ], note: 'Sherigingiz sizni sotadimi? Siz uni sotasizmi? *Munosabat sinovdan o\'tadigan payt.*' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '5-dars yakunlandi' }
  ]
};

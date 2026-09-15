'use strict';
/* Dizayn namunalari — tasdiqlash uchun: 1-richak bo'limi (11–16) */
module.exports = {
  slides: [
    /* 11: bo'lim kirish — foto + katta raqam */
    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/olmos-r1.jpg', focus: 'center', k: 'Birinchi richak', h: 'Unique knowledge', s: 'Noyob bilim', num: '1', credit: 'Foto: Unsplash' },

    /* 12: What — olmos → brilliant */
    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/olmos-brilliant.jpg', focus: 'center', k: 'What · nima?', h: 'Olmos → *Brilliant*', items: [
      '*Olmos* — xom bilim. Yer ostida ko\'p, hammada bor.',
      '*Brilliant* — sayqallangan bilim. Kam kishida bor, qimmat.',
      'Noyob bilim = bir nechta sohani birlashtirib, o\'zingizni *sayqallash*.'
    ], all: true },

    /* 13: How — skill stacking */
    { t: 'stack', color: 'green', k: 'How · qanday?', h: '*Skill stacking* — ko\'nikmalarni ustma-ust yig\'ish', s: 'Bitta ko\'nikmada dunyoning eng zo\'ri bo\'lish shart emas. Bir nechta ko\'nikma birlashsa — noyob bilim paydo bo\'ladi.', axis: 'Karyera muvaffaqiyati ehtimoli',
      books: ['Samaradorlik', 'Ishontirish', 'Yozish', 'Psixologiya', 'Shaxsiy moliya'], top: 'Noyob mutaxassis' },

    /* 14: misol — Elon Musk */
    { t: 'stack', color: 'orange', k: 'Misol · skill stacking', person: { img: '/assets/musk.jpg', name: 'Elon Musk', role: 'Tesla, SpaceX, xAI' }, h: '9 ta ko\'nikma = *1 ta noyob odam*', s: 'Har biri alohida — oddiy. Birga — dunyoda takrorlanmas.', axis: 'Noyoblik',
      books: ['Fizik fikrlash', 'Muhandislik', 'Biznes management', 'Risk management', 'Work ethics', 'Leadership', 'Learning', 'Programming', 'Multi-industrial system thinking'] },

    /* 15: misol — Jahongir */
    { t: 'stack', color: 'red', k: 'Misol · skill stacking', person: { img: '/assets/jahongir-2.jpg', name: 'Jahongir Zoxidov', role: 'Jony Academy, Jony School' }, h: '8 ta ko\'nikma — *mening to\'plamim*', s: 'Ingliz tili o\'qituvchisi ko\'p. Ingliz tili + biznes + marketing + psixologiya — kam.', axis: 'Noyoblik',
      books: ['Ingliz tili', 'Teaching', 'Learning', 'Business management', 'Marketing', 'Leadership', 'Strategy', 'Psychology'] },

    /* 16: Why */
    { t: 'photo', layout: 'full', color: 'red', img: '/assets/noyob.jpg', focus: 'center', k: 'Why · nega?', h: 'Siz bilan *raqobat qilish qiyin* bo\'lib qoladi', s: 'Noyob bilim sizni olomon ichida yagona qiladi: o\'rningizga boshqa odamni qo\'yib bo\'lmaydi.', credit: 'Foto: Unsplash' }
  ]
};

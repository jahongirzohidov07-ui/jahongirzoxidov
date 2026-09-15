'use strict';
/* Dasturlar ro'yxati. Har bir dars: { n, title, deck } — deck bo'lmasa "tayyorlanmoqda". */

const programs = [
  {
    id: 'mentorlik',
    title: 'Mentorlik dasturi',
    subtitle: 'Shogirdlik dasturi',
    lessons: [
      { n: 1, title: 'Leverages — richaglar', deck: require('./mentorlik-01') },
      { n: 2, title: 'Shaxsiyat (Personality)', deck: require('./mentorlik-02') },
      { n: 3, title: 'Karyera', deck: require('./mentorlik-03') },
      { n: 4, title: 'Moliya', deck: require('./mentorlik-04') },
      { n: 5, title: 'Munosabatlar', deck: require('./mentorlik-05') },
      { n: 6, title: 'Sog\'liq', deck: require('./mentorlik-06') },
      { n: 7, title: 'Ilm', deck: require('./mentorlik-07') },
      { n: 8, title: 'Fikrlash', deck: require('./mentorlik-08') },
      { n: 9, title: 'Vaqt', deck: require('./mentorlik-09') },
      { n: 10, title: 'Blog', deck: require('./mentorlik-10') }
    ]
  },
  {
    id: 'ttp',
    title: 'Ustozlik kursi',
    subtitle: 'TTP: Ustozlik psixologiyasi',
    lessons: [
      { n: 1, title: 'Ustozning ro\'li va pedagoglikning muhimligi', deck: require('./ttp-01') },
      { n: 2, title: 'Birinchi darsni o\'tish metodikasi', deck: require('./ttp-02') },
      { n: 3, title: 'Asosiy darsni o\'tish mezonlari', deck: require('./ttp-03') },
      { n: 4, title: 'Sinf boshqaruvi (Classroom management)', deck: require('./ttp-04') },
      { n: 5, title: 'Ichki ta\'sir psixologiyasi', deck: require('./ttp-05') },
      { n: 6, title: 'Ustozning muloqot psixologiyasi', deck: require('./ttp-06') },
      { n: 7, title: 'O\'quvchilarda intizomni shakllantirish', deck: require('./ttp-07') },
      { n: 8, title: 'Ustozlik charchog\'idan chiqish', deck: require('./ttp-08') },
      { n: 9, title: 'Ustozlikdan tadbirkorlikka', deck: require('./ttp-09') },
      { n: 10, title: 'Ustozning shaxsiy rivojlanishi', deck: require('./ttp-10') }
    ]
  }
];

programs.push({ id: 'preview', title: 'Dizayn namunalari', subtitle: 'tasdiqlash uchun', lessons: [{ n: 1, title: 'Muqova variantlari', deck: require('./preview') }] });

module.exports = { programs };

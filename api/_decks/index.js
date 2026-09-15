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
      { n: 4, title: '4-dars', hint: 'PPTX faqat rasmlardan iborat — matn kerak' },
      { n: 5, title: 'Munosabatlar', deck: require('./mentorlik-05') },
      { n: 6, title: '6-dars' },
      { n: 7, title: '7-dars' },
      { n: 8, title: '8-dars' },
      { n: 9, title: '9-dars' },
      { n: 10, title: '10-dars' }
    ]
  },
  {
    id: 'ttp',
    title: 'Ustozlik kursi · 1-yo\'nalish',
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
  },
  {
    id: 'ustozlik2',
    title: 'Ustozlik kursi · 2-yo\'nalish',
    subtitle: 'nomi va mavzulari kiritilmagan',
    note: 'Bu yo\'nalishning nomi va 10 ta dars mavzusini yozib bersangiz, slaydlarini tayyorlab qo\'yaman.',
    lessons: Array.from({ length: 10 }, (_, i) => ({ n: i + 1, title: (i + 1) + '-dars' }))
  }
];

module.exports = { programs };

'use strict';
/* Mentorlik (Shogirdlik) dasturi · 3-dars: Karyera
   Eslatma: asl PPTX'ning ko'p slaydlari rasmlardan iborat — matni kelganda to'ldiriladi. */
module.exports = {
  slides: [
    { t: 'title', k: 'Mentorship program · Shogirdlik dasturi · 3-dars', h: 'Karyera', s: 'Kasb tanlash: zero sum va non-zero sum o\'yinlar', meta: 'Jahongir Zoxidov' },

    { t: 'table', k: 'Taqqoslash', h: 'Aktyor va buxgalter: yillik daromad', head: ['', 'Actor', 'Accountant'], rows: [
      ['Average salary', '$75 924', '$81 680'],
      ['Minimum salary', '$5 000', '$50 000'],
      ['Maximum salary', '$20 000 000', '$192 000'],
      ['Gap', '*4000X*', '4X'],
      ['Fail probability', '65%+', '10%+'],
      ['O\'yin turi', 'Zero sum game', 'Non-zero sum game']
    ] },

    { t: 'ask', k: 'Savol', h: 'Siz qaysi o\'yinni o\'ynayapsiz?', s: 'Kasbingiz zero sum o\'yinmi yoki non-zero sum?' },

    { t: 'vs', k: 'Ikki yondashuv', h: 'Nimani o\'rganish kerak?', a: { h: 'Faraz + qiziqish', tone: 'neutral', q: 'Agar gigiyenik omillar hali yopilmagan bo\'lsa', items: ['Bozorni tahlil qiling: kim nimaga qancha to\'laydi', 'Yoqadigan va qiziqtiradigan sohani tanlang', 'Ikkalasining kombinatsiyasidan o\'sing'] }, b: { h: 'Qiziqish + imkoniyatlar', tone: 'gold', q: 'Agar gigiyenik omillar yopilgan bo\'lsa', items: ['Maoshga e\'tibor bermang', 'Bozorga e\'tibor bermang', 'Ko\'proq bilishga ichki xohishga ergashing', 'Kasb o\'zgarishlarini yaratadigan o\'rganish imkoniyatlariga qarab tanlang'] } },

    { t: 'bullets', k: 'Manba', h: 'O\'qish uchun', items: ['«Who» kitobi: whothebook.com'] },

    { t: 'end', h: 'Rahmat', s: '3-dars yakunlandi' }
  ]
};

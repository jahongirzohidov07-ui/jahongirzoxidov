'use strict';
/* Mentorlik (Shogirdlik) dasturi · 6-dars: Sog'liq
   Manba: Notion "6-Dars - Sog'liq" (PPTX yo'q): Stress, Uyqu, Ovqatlanish, Jismoniy mashqlar, Emotion, Magnetic rays */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*6-dars* · Sog\'liq', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'green', img: '/assets/d6-tabiat.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Sog\'liq — barcha richaklarning *poydevori*', s: 'Sog\'liq yo\'q joyda karyera ham, pul ham, munosabat ham ishlamaydi.' },

    { t: 'grid', color: 'green', icon: '🫀', k: 'Bugungi 6 mavzu', h: 'Sog\'liqning *6 ustuni*', cols: 3, items: [
      { icon: '🌊', h: 'Stress', p: 'Signalmi yoki dushman?' },
      { icon: '😴', h: 'Uyqu', p: 'Eng arzon dori.' },
      { icon: '🥗', h: 'Ovqatlanish', p: 'Siz — yegan narsangizsiz.' },
      { icon: '🏃', h: 'Jismoniy mashqlar', p: 'Harakat — miyaga ham dori.' },
      { icon: '💛', h: 'Emotion', p: 'His-tuyg\'ularni boshqarish.' },
      { icon: '📵', h: 'Magnetic rays', p: 'Ekran va nurlanish.' }
    ] },

    /* ---- 1. Stress ---- */
    { t: 'section', color: 'blue', icon: '🌊', n: '1', h: 'Stress', s: 'Dushman emas — signal' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d6-meditatsiya.jpg', focus: 'center', k: '1 · Stress', h: 'Stress — *dushman emas*, signal', items: [
      'Qisqa stress — harakatga undaydi. Uzoq, surunkali stress — buzadi.',
      'Manbasini toping: ish, qarz, munosabat, uyqusizlik.',
      'Vosita: yurish, chuqur nafas, tabiat, yozib chiqish, ishongan odam bilan gaplashish.'
    ], all: true },

    { t: 'vs', color: 'blue', icon: '🌊', k: 'Ikki xil stress', h: 'Qisqa stress *foyda*, uzoq stress *zarar*', a: { icon: '⚡', h: 'Qisqa (o\'tkir) stress', tone: 'good', q: 'Imtihon, muhim uchrashuv, muddat', items: ['Diqqatni jamlaydi', 'Harakatga undaydi', 'Tugaydi — tana tiklanadi'] }, b: { icon: '🌫️', h: 'Uzoq (surunkali) stress', tone: 'bad', q: 'Oylab davom etadigan tashvish', items: ['Uyquni buzadi', 'Immunitetni tushiradi', 'Qaror sifatini pasaytiradi'] }, note: 'Stressni yo\'q qilib bo\'lmaydi — lekin *uzoq stress*ga aylanishiga yo\'l qo\'ymang.' },

    /* ---- 2. Uyqu ---- */
    { t: 'section', color: 'orange', icon: '😴', n: '2', h: 'Uyqu', s: 'Eng arzon va eng kuchli dori' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d6-uyqu.jpg', focus: 'center', k: '2 · Uyqu', h: 'Uyqu — *eng arzon* dori', items: [
      '7–8 soat. Har kuni *bir xil vaqtda* yotish va turish.',
      'Uyqudan 1 soat oldin — ekransiz.',
      'Uyqusiz odam yomon qaror qiladi va sekin o\'rganadi.'
    ], all: true },

    { t: 'bars', color: 'orange', icon: '🌙', k: 'Uyqu tartibi', h: 'Kechqurun *soat 22:00* — uyqu vaqti', rows: [
      { h: 'Ekransiz', p: 'Uyqudan 1 soat oldin', w: '35%', v: '21:00', color: 'blue' },
      { h: 'Yotish', p: 'Har kuni bir xil vaqt', w: '55%', v: '22:00', color: 'orange' },
      { h: 'Uyqu', p: '7–8 soat', w: '100%', v: '22:00 → 06:00', ticks: 8, color: 'green' }
    ], big: '8', bigText: 'soat — miya kun davomida o\'rganganini shu vaqtda *saqlaydi*. Uyquni qisqartirsangiz — o\'rganganingizni o\'chirasiz.' },

    /* ---- 3. Ovqatlanish ---- */
    { t: 'section', color: 'green', icon: '🥗', n: '3', h: 'Ovqatlanish', s: 'Siz — yegan narsangizsiz' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d6-ovqat.jpg', focus: 'center', k: '3 · Ovqatlanish', h: 'Siz — *yegan narsangizsiz*', items: [
      'Ko\'proq: sabzavot, meva, oqsil, suv.',
      'Kamroq: shakar, oq un, qovurilgan, gazli ichimlik.',
      'Oddiy qoida: 80% to\'ysangiz — to\'xtang.'
    ], all: true },

    { t: 'vs', color: 'green', icon: '🍽️', k: 'Tanlov', h: 'Har ovqat — *qaror*', a: { icon: '🍩', h: 'Kamaytiring', tone: 'bad', items: ['Shakar va shirinliklar', 'Oq un, fastfud', 'Qovurilgan ovqat', 'Gazli va shirin ichimliklar', 'Kech tungi ovqat'] }, b: { icon: '🥑', h: 'Ko\'paytiring', tone: 'good', items: ['Sabzavot va ko\'katlar', 'Meva', 'Oqsil: tuxum, baliq, go\'sht, dukkaklilar', 'Suv — kuniga 1.5–2 litr', 'Bir xil vaqtda ovqatlanish'] } },

    /* ---- 4. Jismoniy mashqlar ---- */
    { t: 'section', color: 'red', icon: '🏃', n: '4', h: 'Jismoniy mashqlar', s: 'Harakat — miyaga ham dori' },

    { t: 'photo', layout: 'split', color: 'red', img: '/assets/running.jpg', focus: 'center', k: '4 · Jismoniy mashqlar', h: 'Harakat — *miyaga* ham dori', items: [
      'Kuniga 30 daqiqa yurish — minimal.',
      'Haftada 2–3 marta kuch mashqi.',
      'Sport — kayfiyat, uyqu va fikrlashni yaxshilaydi.'
    ], all: true },

    { t: 'grid', color: 'red', icon: '🏋️', k: 'Haftalik reja', h: 'Oddiy, lekin *doimiy*', cols: 3, items: [
      { icon: '🚶', h: 'Har kuni', p: '30 daqiqa yurish. Zinadan chiqing, bir bekat oldin tushing.' },
      { icon: '🏋️', h: 'Haftada 2–3', p: 'Kuch mashqi: tortilish, o\'tirib-turish, gantel.' },
      { icon: '🧘', h: 'Har kuni 5 daqiqa', p: 'Cho\'zilish va nafas — ertalab yoki uyqudan oldin.' }
    ], note: 'Eng yaxshi sport — siz *davom ettiradigan* sport.' },

    /* ---- 5. Emotion ---- */
    { t: 'section', color: 'orange', icon: '💛', n: '5', h: 'Emotion', s: 'His-tuyg\'ularni boshqarish' },

    { t: 'flow', color: 'orange', icon: '💛', k: '5 · Emotion', h: 'Reaksiya emas — *javob*', items: ['😶 Nomlang: nima his qilyapman?', '🔍 Sababini toping', '⏸️ To\'xtang — nafas oling', '🎯 Javobni tanlang'], all: true, note: 'His-tuyg\'u — ma\'lumot. Uni bostirmang, lekin unga *bo\'ysunmang*. His va harakat orasida — pauza.' },

    /* ---- 6. Magnetic rays ---- */
    { t: 'section', color: 'blue', icon: '📵', n: '6', h: 'Magnetic rays', s: 'Ekran, telefon va nurlanish' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d6-telefon.jpg', focus: 'center', k: '6 · Magnetic rays', h: 'Telefon — *yotoqxonadan* tashqarida', items: [
      'Telefonni yostiq ostiga qo\'ymang — yotoqxonadan chiqaring.',
      'Uxlashdan oldin — parvoz rejimi.',
      'Kun davomida ham ekranni kamaytiring: ko\'z, uyqu va diqqat uchun.'
    ], all: true },

    { t: 'checklist', color: 'green', icon: '✅', k: 'Kunlik sog\'liq checklisti', h: 'Har kuni *tekshiring*', items: [
      { n: '1', h: '7–8 soat uyqu, bir xil vaqtda' },
      { n: '2', h: '30 daqiqa harakat' },
      { n: '3', h: '1.5–2 litr suv' },
      { n: '4', h: 'Sabzavot va meva' },
      { n: '5', h: 'Uyqudan 1 soat oldin ekransiz' },
      { n: '6', h: 'Telefon yotoqxonadan tashqarida' },
      { n: '7', h: 'Tabiatda / toza havoda yurish' },
      { n: '8', h: '5 daqiqa sukut yoki nafas' },
      { n: '9', h: 'His-tuyg\'uni nomlash: bugun nima his qildim?', star: true }
    ] },

    { t: 'steps', color: 'blue', icon: '📝', k: 'Uyga vazifa', h: 'Bir hafta *sinab ko\'ring*', all: true, items: [
      { n: '1', h: 'Uyqu', p: '7 kun davomida bir xil vaqtda yoting va turing. Natijani yozing.' },
      { n: '2', h: 'Harakat', p: 'Har kuni 30 daqiqa yurish — qadamlarni hisoblang.' },
      { n: '3', h: 'Telefon', p: 'Telefon yotoqxonadan tashqarida uxlaydi. Ertalab birinchi 30 daqiqa — ekransiz.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '6-dars yakunlandi · Keyingi dars: 7-dars — Ilm' }
  ]
};

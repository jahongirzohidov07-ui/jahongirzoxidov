'use strict';
/* Mentorlik (Shogirdlik) dasturi · 7-dars: Ilm
   Manba: Notion "7-Dars - Ilm" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*7-dars* · Ilm', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d7-kutubxona.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Ilm — *eng katta* richak', s: 'Ma\'lumotdan ilmgacha: qanday o\'rganish, kimdan o\'rganish, nimani o\'rganish.' },

    { t: 'pyramid', color: 'blue', k: 'Ma\'lumot → Bilim → Ko\'nikma → Ilm', h: 'Ilmning *4 bosqichi*', s: 'Misol: ingliz tilidagi zamonlar.', levels: [
      { icon: '📄', label: 'Ma\'lumot', h: 'Information', p: 'Eshitdingiz, o\'qidingiz: «Present Perfect degan zamon bor».' },
      { icon: '💡', label: 'Bilim', h: 'Knowledge', p: 'Tushundingiz: «Present Perfect qachon va nima uchun ishlatiladi — bilaman».' },
      { icon: '🛠️', label: 'Ko\'nikma', h: 'Skill', p: 'Mashq qildingiz: gapirganda avtomatik to\'g\'ri ishlataman.' },
      { icon: '🎓', label: 'Ilm', h: 'Wisdom', p: 'Chuqurlashdingiz: boshqaga o\'rgata olasiz, yangi holatda qo\'llaysiz.' }
    ], note: 'Ma\'lumot *tushunilsa* — bilim, *mashq qilinsa* — ko\'nikma, *chuqurlashsa* — ilm bo\'ladi.' },

    { t: 'flow', color: 'green', icon: '🔁', k: 'Learning framework', h: 'O\'rganish *tizimi*', items: ['📄 Ma\'lumot ol', '💡 Tushun', '🛠️ Mashq qil', '🎓 Chuqurlash', '📤 O\'rgat'], all: true, note: 'Oxirgi qadam eng muhimi: *o\'rgatgan* odam ilmni o\'ziniki qiladi.' },

    { t: 'stack', color: 'orange', k: 'Skill stack', h: 'Ko\'nikmalar *ustma-ust*', s: 'Bitta ko\'nikma — oddiy mutaxassis. Bir nechta ko\'nikma birga — noyob mutaxassis. Har qavat sizni kamyob qiladi.', axis: 'Noyoblik', books: ['Ingliz tili', 'Pedagogika', 'Psixologiya', 'Marketing', 'Boshqaruv', 'Yozish'], top: 'Noyob mutaxassis' },

    { t: 'photo', layout: 'split', color: 'red', img: '/assets/d7-ustoz.jpg', focus: 'center', k: 'Choosing a mentor', h: '*Ustoz* qanday tanlanadi?', items: [
      'Siz bormoqchi bo\'lgan joyda *allaqachon turgan* odam.',
      'Gapiradigan emas — qiladigan.',
      'Sizga vaqt ajrata oladigan va rostini aytadigan.',
      'Bitta ustoz emas — har soha uchun bittadan.'
    ], all: true },

    { t: 'big', color: 'green', icon: '🕰️', k: 'Ilmu hol', h: '*Hozirgi holingiz* uchun kerak bo\'lgan ilm', s: 'Avval hozir kerak bo\'lganini o\'rganing — hamma narsani emas. Talabaga talaba ilmi, rahbarga rahbar ilmi.' },

    { t: 'brain', color: 'blue', k: 'Knowledge management', h: 'Bilimni *saqlash* tizimi', s: 'Miya — saqlash uchun emas, fikrlash uchun. Saqlashni tizimga bering.', title: 'Notion · Obsidian · daftar', center: 'Ikkinchi miya', nodes: [['📚', 'Kitob'], ['🎓', 'Dars'], ['💬', 'Suhbat'], ['🎧', 'Podkast'], ['💡', 'G\'oya'], ['❓', 'Savol'], ['🎯', 'Loyiha'], ['📝', 'Xulosa']], steps: [
      { icon: '📥', h: 'Yig\'ing', p: 'Kitob, dars, suhbat — hammasini bir joyga.' },
      { icon: '🔗', h: 'Bog\'lang', p: 'Yangi fikrni eskisiga ulang.' },
      { icon: '📤', h: 'Qo\'llang', p: 'Yozing, gapiring, o\'rgating.' }
    ] },

    { t: 'grid', color: 'orange', icon: '🧹', k: 'Filtr qilish', h: 'Hamma ma\'lumot *kerak emas*', cols: 3, items: [
      { icon: '🎯', h: 'Maqsadga tegishlimi?', p: 'Hozirgi maqsadimga xizmat qiladimi? Yo\'q bo\'lsa — keyinga.' },
      { icon: '🧑‍🔬', h: 'Manba ishonchlimi?', p: 'Kim aytyapti? U buni qilganmi yoki faqat gapiryaptimi?' },
      { icon: '⏳', h: '10 yildan keyin ham kerakmi?', p: 'Yangilik — 1 kun. Prinsip — umr bo\'yi.' }
    ], note: 'Ko\'p o\'qish emas — *to\'g\'ri* o\'qish.' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d2-kitob.jpg', focus: 'center', k: 'Autodidactism', h: 'O\'zi o\'rganuvchi — *autodidakt*', items: [
      'Hech kim sizga o\'rgatishga majbur emas. O\'zingiz o\'rganing.',
      'Kitob, kurs, video, odam — manba ko\'p, bahona yo\'q.',
      'Har kuni 30 daqiqa — yiliga *180 soat* ilm.'
    ], all: true },

    /* ---- Multidisciplinarity ---- */
    { t: 'vs', color: 'red', icon: '👓', k: 'Multidisciplinarity', h: 'Bitta ko\'zoynak vs *5 ta ko\'zoynak*', a: { icon: '👓', h: 'Oddiy rahbar', tone: 'bad', q: 'Talaba kamaydi?', items: ['«Reklamani ko\'paytir!»', 'Bitta sabab — bitta yechim', 'Muammo qaytib keladi'] }, b: { icon: '🔭', h: 'Ko\'p sohali rahbar', tone: 'good', q: 'Talaba kamaydi?', items: ['Marketing: reklama ishlayaptimi?', 'Psixologiya: talaba nega ketdi?', 'HR: ustozning holati qanday?', 'Mahsulot: dars sifati qanday?', 'Savdo: taklif to\'g\'rimi?'] }, all: true, note: 'Bir muammoga *5 ta fan* ko\'zi bilan qaragan odam — 5 ta yechim ko\'radi.' },

    /* ---- Dimensionality ---- */
    { t: 'domino', color: 'red', k: 'Dimensionality · 1–4-o\'lcham', h: 'Bir qaror — *zanjir* reaksiya', items: [
      { tag: '1-o\'lcham', h: 'Talaba kamaydi', p: 'Sabab so\'ralmaydi' },
      { tag: '1-o\'lcham', h: 'Chegirma, arzon ustoz', p: 'Tez va oson yechim' },
      { tag: '2-o\'lcham', h: 'Natija yo\'q', p: 'Arzon ustoz — sifat past' },
      { tag: '2-o\'lcham', h: 'Ota-ona norozi', p: 'Pul to\'lagan, natija yo\'q' },
      { tag: '3-o\'lcham', h: '5 talaba ketadi', p: 'Bittasi emas — beshtasi' },
      { tag: '3-o\'lcham', h: '10 kishiga yomon gapiradi', p: 'Har biri o\'z davrasiga' },
      { tag: '4-o\'lcham', h: 'Brend zarar ko\'radi', p: 'Ishonch tiklanmaydi' },
      { tag: '4-o\'lcham', h: 'Keyingi mavsum bo\'sh', p: 'Yangi talaba kelmaydi' }
    ], note: '«Bugun tejagan 1 so\'m — ertaga 10 so\'m zarar.» *4-o\'lchamda* fikrlang: bu qaror qarorning qaroriga nima qiladi?' },

    { t: 'steps', color: 'blue', icon: '🧭', k: 'Dimensionality · to\'g\'ri yo\'l', h: 'Chegirma emas — *sababini so\'rang*', all: true, items: [
      { n: '1', h: 'Sababini so\'rang', p: 'Talaba nega kamaydi? Qaysi guruh? Qaysi ustoz? Qaysi 2 oy?' },
      { n: '2', h: 'Ildizini toping', p: 'Belgi (kam talaba) emas — sabab (dars sifati, ustoz, muloqot) bilan ishlang.' },
      { n: '3', h: '4 qadam oldinga qarang', p: 'Bu qaror 6 oydan keyin nimaga olib keladi? Kimga ta\'sir qiladi?' }
    ] },

    /* ---- Qomusiy ilmlar ---- */
    { t: 'grid', color: 'green', icon: '🌍', k: 'Qomusiy ilmlar', h: 'Har kim bilishi kerak bo\'lgan *asoslar*', cols: 4, items: [
      { icon: '🧠', h: 'Psixologiya', p: 'Odam nega shunday qiladi?' },
      { icon: '💰', h: 'Iqtisod va moliya', p: 'Pul qanday ishlaydi?' },
      { icon: '📜', h: 'Tarix', p: 'Nima takrorlanadi?' },
      { icon: '🧬', h: 'Biologiya, tibbiyot', p: 'Tana qanday ishlaydi?' },
      { icon: '📐', h: 'Matematika, statistika', p: 'Raqamlar nima deydi?' },
      { icon: '🗣️', h: 'Til va yozish', p: 'Fikrni yetkazish.' },
      { icon: '⚖️', h: 'Mantiq va falsafa', p: 'To\'g\'ri fikrlash.' },
      { icon: '💻', h: 'Texnologiya', p: 'Asboblar qanday ishlaydi?' }
    ], note: 'Munger kabi: *qomusiy* odam har muammoga bir nechta fan ko\'zi bilan qaraydi.' },

    { t: 'steps', color: 'orange', icon: '🌱', k: 'Ilmni chuqurlashtirish', h: 'Qiziqish, qo\'shni ilmlar, *yodlash*', all: true, items: [
      { n: '🌱', h: 'Qiziqishni rivojlantiring', p: 'Qiziqish tug\'ilmaydi — o\'stiriladi: savol bering, sinab ko\'ring, chuqurlashing.' },
      { n: '🧩', h: 'Komplementar ilmlar', p: 'Asosiy sohangizga qo\'shni ilmlar: pedagog uchun psixologiya, marketing, boshqaruv.' },
      { n: '🧠', h: 'Memorization', p: 'Yodlash — takror va qo\'llash orqali. Yozing, gapiring, o\'rgating — esda qoladi.' }
    ] },

    { t: 'grid', color: 'blue', icon: '📤', k: 'Knowledge transfer', h: 'Bilim odamlarga *turlicha* ta\'sir qiladi', cols: 3, items: [
      { icon: '📤', h: 'Knowledge transfer', p: 'Bilganingizni oddiy so\'z bilan o\'rgata olsangiz — bilasiz. Olmasangiz — hali ma\'lumot.' },
      { icon: '🎭', h: 'Turlicha ta\'sir', p: 'Bir kitob birini o\'zgartiradi, ikkinchisiga hech narsa bermaydi. Tayyorlik farq qiladi.' },
      { icon: '🫵', h: 'Bilimni o\'zingizniki qiling', p: 'O\'z so\'zingiz, o\'z misolingiz, o\'z hayotingizda qo\'llash.' }
    ] },

    { t: 'vs', color: 'red', icon: '☠️', k: 'Ogohlik', h: 'Ko\'p bilim — *ko\'p muammo*?', a: { icon: '☠️', h: 'Toksik bilim', tone: 'bad', items: ['Yangiliklar, g\'iybat, salbiy kontent', 'Bilgan sari xavotir oshadi', 'Amal qilinmagan bilim — yuk'] }, b: { icon: '🌿', h: 'Foydali bilim', tone: 'good', items: ['Hayotingizda qo\'llanadigan', 'Sizni xotirjam va kuchli qiladigan', 'O\'zgalarga bera oladigan'] }, note: 'More knowledge — more problems. *Toksik* ma\'lumotdan qoching: nimani o\'qiyotganingizni tanlang.' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/daftar.jpg', focus: 'center', k: 'Writing to learn', h: 'O\'rganish uchun *yozing*', items: [
      'Yoza olmagan narsangizni bilmaysiz.',
      'Har dars, kitob, suhbatdan keyin — 5 qator xulosa.',
      'Yozish — fikrni tartibga soladi va ilmni o\'zingizniki qiladi.'
    ], all: true },

    { t: 'steps', color: 'blue', icon: '📝', k: 'Uyga vazifa', h: 'Ilm *tizimini* boshlang', all: true, items: [
      { n: '1', h: 'Skill stack', p: 'O\'zingizdagi 5 ta ko\'nikmani yozing. Qaysi birini qo\'shsangiz noyob bo\'lasiz?' },
      { n: '2', h: 'Ustoz va manba', p: 'Har soha uchun bitta ustoz va bitta manba (kitob, kurs) tanlang.' },
      { n: '3', h: 'Ikkinchi miya', p: 'Qaydlar tizimini boshlang: Notion, Obsidian yoki daftar. Bu haftadan.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '7-dars yakunlandi · Keyingi dars: 8-dars — Fikrlash' }
  ]
};

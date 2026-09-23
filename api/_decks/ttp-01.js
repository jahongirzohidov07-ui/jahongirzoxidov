'use strict';
/* TTP · 1-modul: Ustozning ro'li va pedagoglikning muhimligi */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*1-modul* · Ustozning ro\'li va pedagoglikning muhimligi', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'stats', color: 'blue', icon: '👋', k: 'Tanishuv', h: 'Men — *Jahongir Zoxidov*', items: [
      { v: '10', l: 'yillik tajriba', s: 'pedagogik faoliyat' },
      { v: '1000+', l: 'o\'quvchi', s: 'shaxsan o\'qitilgan' },
      { v: '1000+', l: 'ustoz', s: 'ustozlarning ustozi' },
      { v: '10', l: 'kitob', s: 'muallif va qo\'llanmalar' }
    ], note: 'Jony Academy · Jony School · Stech · University of Sunderland bitiruvchisi' },

    { t: 'table', color: 'green', icon: '💎', k: 'Kursning qiymati', h: 'Siz oladigan bilim — *≈ $20 000* lik tajriba', head: ['Ta\'lim / trening', 'Qiymati'], rows: [
      ['Universitet — 4 yillik ta\'lim', '*$10 000+*'],
      ['Alisher Isayev kursi', '$2 500'],
      ['Aziz Rahimov — mentorlik darslari', '$1 500'],
      ['O\'quv markazni tizimlashtirish — 2 ta kurs', '$1 200 + $1 000'],
      ['Pedagogik mahorat kursi', '$800'],
      ['Ustozlik kursi', '$200'],
      ['Boshqa treninglar', '$500'],
      ['*Jami*', '*≈ $20 000*']
    ], note: 'Universitetning o\'ziga 10 000$ dan ortiq ketgan. Bu modulga jamlangan g\'oyalar — shu 20 000$ ga yaqin mablag\' sarflab olingan ilmlarning mohiyati.' },

    { t: 'steps', color: 'orange', icon: '🤝', k: 'Kelishib olaylik', h: 'Boshlashdan oldin *uchta narsani* ochiq aytib qo\'yay', all: true, items: [
      { n: '🌉', h: 'Vositachi', p: 'Men bilim sohibi emas, balki vositachiman.' },
      { n: '🙋', h: 'Xatokor', p: 'Men ideal emasman. O\'zim ham xato qilaman, o\'zim ham o\'rganaman.' },
      { n: '🧪', h: 'Pedagogika — aniq fan emas', p: 'Bu yerda formulalar yo\'q. Har bir ustoz, har bir o\'quvchi alohida olam. Tamoyillar bor, lekin retsept yo\'q.' }
    ] },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-sinf.jpg', focus: 'center', k: 'Ochilish savoli · suhbat 3–5 daqiqa', h: 'Ustozlikka *qanday* kelib qolgansiz?', s: 'Bir-ikki jumlada ayting: o\'zingizning hikoyangiz nimadan boshlangan?' },

    { t: 'ask', icon: '🫀', k: 'Chuqur savol', h: 'Qaysi birimizda *haqiqiy* ustozlik sababi bor?', s: 'To\'xtab, o\'zimizdan so\'raylik.' },

    { t: 'big', color: 'red', icon: '💔', k: 'Ustozning yuragi', h: 'Haqiqiy ustozda *dard* bo\'ladi. Og\'riq bo\'ladi.', s: 'Yuragining bir joyi tilingan bo\'lishi kerak, toki shogirdining og\'rig\'ini his qila olsin.' },

    { t: 'steps', color: 'red', icon: '🩹', k: 'Mendagi og\'riq', h: 'Mendagi dard — *to\'rt hikoya*', all: true, items: [
      { n: '🏫', h: 'Maktab davri', p: 'Rus tili ustozim' },
      { n: '📐', h: 'Kollej davri', p: 'Matematika ustozim' },
      { n: '🎓', h: 'Universitet davri', p: 'Jismoniy tarbiya ustozi' },
      { n: '🕯️', h: 'Mening shogirdim', p: '1 kishining o\'limiga sababchi bo\'lgan o\'quvchim', tag: 'Eng og\'ir yara' }
    ], note: 'Bu yaralar meni ustoz qilgan. *Har bir yara meni boshqacha ustoz qilgan.*' },

    { t: 'steps', color: 'blue', icon: '🤔', k: 'Mushohada savoli', h: 'Bir lahza *to\'xtaylik…*', all: true, items: [
      { n: '👩‍🏫', h: 'O\'qituvchi kim?' }, { n: '🧭', h: 'Ustoz kim?' }, { n: '🧒', h: 'Pedagog kim?' }
    ] },

    { t: 'big', color: 'blue', icon: '👩‍🏫', k: 'O\'qituvchi kim?', h: 'O\'z fanidan dars beradigan va o\'z fanini o\'quvchilarga *o\'rgatadigan* shaxs.' },

    { t: 'big', color: 'green', icon: '🧭', k: 'Ustoz kim?', h: 'Nafaqat bilim beradi, balki *tarbiya* berib o\'quvchini hayotga tayyorlaydi.', s: 'Har bir ustoz — o\'qituvchi, lekin har bir o\'qituvchi ustoz darajasiga chiqavermaydi.' },

    { t: 'steps', color: 'orange', icon: '🏛️', k: 'Pedagog kim? · yunoncha etimologiya', h: '*paidagogos*', all: true, items: [
      { n: 'paidos', h: 'bola', p: '(pais)' },
      { n: 'agogos', h: 'yetaklovchi, yo\'l ko\'rsatuvchi' }
    ], note: 'Lug\'aviy ma\'nosi: *«Bolani yetaklovchi», «bolaga yo\'l ko\'rsatuvchi»*' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/t-doska.jpg', focus: 'center', k: 'Ustoz ro\'lining o\'zgarishi', h: 'Biz ustozlik ro\'lini *almashtirib* qo\'ydik', items: [
      '*XX asrgacha* — pedagog yo\'l ko\'rsatuvchi, hayotga yetaklovchi edi.',
      '*XX asr* — ma\'lumot beruvchiga aylanib, propaganda quroliga aylandi.',
      '*XXI asr* — yana yetaklovchi va yo\'l ko\'rsatuvchi rolga qaytishi kerak.'
    ], all: true },

    { t: 'vs', color: 'red', icon: '👑', k: 'Ustozning xatosi', h: '«Eng kuchli *kibr* ustozda bo\'ladi»', a: { icon: '🗣️', h: 'Xato 01 · Diktator ustoz', tone: 'bad', items: ['O\'quvchini eshitmaydi', 'Faqat o\'zining haqligini singdirishga harakat qiladi'] }, b: { icon: '⛓️', h: 'Xato 02 · Avtoritarlik', tone: 'bad', items: ['Bilim — bosim vositasiga aylanadi', 'O\'quvchining erki va fikri so\'nadi'] }, all: true, note: 'Bilim va hokimiyat birga kelganda kibr qattiq o\'sadi.' },

    { t: 'steps', color: 'red', icon: '🪞', k: 'Ustozning eng katta xatosi', h: '«Natijani *meniki*, mag\'lubiyatni *o\'quvchiniki* deyish»', all: true, items: [
      { n: '🏆', h: 'Natija → Meniki', p: 'Men erishdim.' },
      { n: '❌', h: 'Mag\'lubiyat → Sening aybing', p: 'Sen yaxshi emas ekansan.' },
      { n: '🙉', h: 'Sababi → Men hammaga bir xil o\'tdim', p: 'Qulog\'ingni yopiq qo\'ymadim.' }
    ] },

    { t: 'big', color: 'red', icon: '🚪', k: 'Ustozning eng haqoratli gapi', h: '«Shu o\'quvchini *haydaymiz*.»', s: 'Ustoz mas\'uliyatdan voz kechadi. O\'quvchining kelajagi yopiladi. Bilim emas, hukm tarqaladi. *Bir gap — bir taqdir.*' },

    { t: 'steps', color: 'green', icon: '📈', k: 'Karrasiga o\'sish uchun', h: 'Ustozning o\'zi karrasiga o\'sishi uchun *uch yo\'l*', all: true, items: [
      { n: '🔄', h: 'Natijani o\'quvchiniki, mag\'lubiyatni meniki deyish', p: 'O\'zining xatosini o\'zlashtirib oladigan ustoz o\'sadi.' },
      { n: '🌳', h: 'O\'rgatganlikka da\'vo qilmaslik', p: 'Bilim bermay, yo\'l ko\'rsatish — soyada qolib mevasiga shod bo\'lish.' },
      { n: '🌉', h: 'Vositachi ekanini tan olish', p: 'Siz bilim egasi emas, bilim manbai bilan o\'quvchi orasidagi ko\'priksiz.' }
    ] },

    { t: 'flow', color: 'green', icon: '💬', k: 'Yechim', h: 'Dialogga asoslangan *ta\'lim*', items: ['💬 Muloqot = Munosabat', '🤝 Munosabat = O\'rganish', '🎓 O\'rganish = O\'rgatish'], all: true, note: 'Ustoz va o\'quvchi orasidagi haqiqiy zanjir uch bo\'g\'inli. *Dialog yo\'q joyda ta\'lim ham yo\'q.*' },

    { t: 'grid', color: 'blue', icon: '🗂️', k: 'O\'quvchi kartasi', h: 'Har bir o\'quvchi haqida ustozning *ichki yozuvi*', cols: 4, items: [
      { icon: '🎭', h: 'Xarakter', p: 'Lidermi, tortinchoqmi?' },
      { icon: '⚽', h: 'Motivatsiyasi', p: 'Real Madrid muxlisi' },
      { icon: '😰', h: 'Qo\'rquvlari', p: 'Statusi tushishdan qo\'rqadi' },
      { icon: '🎵', h: 'Qiziqishlari', p: 'BTS, F1 — o\'z dunyosi' },
      { icon: '🏠', h: 'Oilaviy fon', p: 'Oilasidan norozi qiz' },
      { icon: '✍️', h: 'Javob uslubi', p: 'Yozma javob beradigan qiz' },
      { icon: '👫', h: 'Yaxshi juftlik', p: 'Muhammadrizo bilan ishlaydi' },
      { icon: '🛡️', h: 'Tanqidga reaksiya', p: 'Yopiladi yoki kuchayadi?' }
    ], note: '*Ustoz fanni o\'rgatmaydi — avval u insonni tushunadi.*' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/t-bolalar2.jpg', focus: 'center', k: 'Savol', h: 'Siz *qaysi turdagi* insonni ko\'paytiryapsiz?', items: ['Buyruqqa o\'rgangan?', 'Fikrlay oladigan?', 'Qo\'rqadigan?', 'Yolg\'onchi?', 'Mas\'uliyatli va erkin?'], all: true },

    { t: 'big', color: 'orange', icon: '🏗️', k: 'Eslab qoling', h: 'Ustoz — kelajakning *ruhiy arxitektori.*' },

    { t: 'vs', color: 'red', icon: '🎭', k: 'Ustoz bosimi', h: 'Bunday bola *nimaga* aylanadi?', a: { icon: '👀', h: 'Tashqaridan ko\'rinadi', tone: 'neutral', items: ['Tashqi itoat', 'Ichki passivlik', 'Yashirin agressiya', 'Mustaqil fikr so\'nishi'] }, b: { icon: '🫥', h: 'Ichida esa shunday deydi', tone: 'bad', items: ['To\'g\'ri javob muhim, haqiqat emas', 'Xato qilmaslik muhim, o\'rganish emas', 'O\'ylash xavfli, moslashish xavfli'] }, all: true, note: 'Bunday bola yaxshi baho olishi mumkin, lekin ichida boshqacha yashaydi.' },

    { t: 'table', color: 'blue', icon: '🪞', k: 'Ustoz — inson modeli', h: 'Bola ustozdan *nimani* o\'rganadi?', head: ['Ustoz…', 'Bola…'], rows: [
      ['baland gapirsa', 'kuchni normal deb o\'rganadi'],
      ['xatoni masxara qilsa', 'xato qilishdan qo\'rqadi'],
      ['savolga ochiq bo\'lsa', '*fikrlashni* o\'rganadi']
    ], note: 'Xulosa: *ustoz insoniy inson tarbiyalashi kerak.*' },

    { t: 'steps', color: 'green', icon: '🕊️', k: 'Insonparvar sinf muhiti', h: 'Uchta *tamoyil*', all: true, items: [
      { n: '✕→✓', h: 'Xato: jinoyat → resurs', p: 'Xato qilgan bola jazolanmaydi, xato birgalikda tahlil qilinadi.' },
      { n: '?', h: 'Savol: xavf → fikr', p: 'Savol bergan bola ayblanmaydi, savol fikrlashning belgisi.' },
      { n: '→', h: 'Baho: hukm → yo\'nalish', p: 'Baho yorliq emas, bola qayerda turganini va qayoqqa borishini ko\'rsatadi.' }
    ], note: '*Sinf — xavfsiz fikrlash maydoni bo\'lishi kerak.*' },

    { t: 'circles', color: 'green', k: 'Ustozning uch qatlami', h: 'Ustoz — *yashirin* tarbiyachi', s: 'Fan — tashqi qatlam. Ustoz va inson chuqurroq ta\'sir qiladi.', rings: [
      { label: 'INSON', short: '3', h: 'Chuqur qatlam', p: 'Qadriyat, e\'tiqod, niyat. Bolaning shaxsiyatiga ko\'chadi.' },
      { label: 'USTOZ', short: '2', h: 'Munosabat qatlami', p: 'Ishonch, hurmat, namuna. Bola sezadi, ammo aytmaydi.' },
      { label: 'FAN', short: '1', h: 'Rasmiy qatlam', p: 'Ingliz tili, matematika, dars mavzulari. Ko\'rinadigan, o\'lchanadigan qism.' }
    ] },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-bola-ustoz.jpg', focus: 'center', k: 'Xulosa', h: 'Ustoz — bu *kuchli shaxsiyat.*', s: 'Bola sizning so\'zlaringizdan emas, sizning shaxsiyatingizdan o\'rganadi. Yaxshi ustoz — yaxshi inson.' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '1-modul yakunlandi · Keyingi: 2-modul — Birinchi darsni o\'tish metodikasi' }
  ]
};

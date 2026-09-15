'use strict';
/* TTP · 1-modul: Ustozning ro'li va pedagoglikning muhimligi */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 1-modul', h: 'Ustozning ro\'li va pedagoglikning muhimligi', s: 'O\'qituvchilikdan ustozlikka o\'tish kursi', meta: 'Jahongir Zoxidov · 2026' },

    { t: 'stats', k: 'Tanishuv', h: 'Men — Jahongir Zoxidov', items: [
      { v: '10', l: 'yillik tajriba', s: 'pedagogik faoliyat' },
      { v: '1000+', l: 'o\'quvchi', s: 'shaxsan o\'qitilgan' },
      { v: '1000+', l: 'ustoz', s: 'ustozlarning ustozi' },
      { v: '10', l: 'kitob', s: 'muallif va qo\'llanmalar' }
    ], note: 'Jony Academy · Jony School · Stech · University of Sunderland bitiruvchisi' },

    { t: 'table', k: 'Kursning qiymati', h: 'Siz oladigan bilim — *$7 000* lik tajriba', head: ['Trening', 'Muallif', 'Qiymati'], rows: [
      ['O\'quv markazlarni tizimlashtirish ×2', 'Axrolxo\'ja Rahmatxo\'jayev', '$2 000'],
      ['Ustozlik mahorati', 'Axrolxo\'ja Rahmatxo\'jayev', '$400'],
      ['Shogirdlik dasturi', 'Aziz Rahimov', '$1 500'],
      ['Biznesni davolash', 'Alisher Isayev', '$3 000'],
      ['Pedagog konsepsiyasi', 'Javohir Quvvatov', '$800'],
      ['Qo\'shimcha kurslar va seminarlar', 'Boshqa treninglar', '$300'],
      ['*Jami qiymati*', '', '*$7 000*']
    ], note: 'Bu modulga jamlangan g\'oyalar yetakchi ustozlar treninglarining mohiyatidan olingan' },

    { t: 'steps', k: 'Kelishib olaylik', h: 'Boshlashdan oldin uchta narsani ochiq aytib qo\'yay', items: [
      { h: 'Vositachi', p: 'Men bilim sohibi emas, balki vositachiman.' },
      { h: 'Xatokor', p: 'Men ideal emasman. O\'zim ham xato qilaman, o\'zim ham o\'rganaman.' },
      { h: 'Pedagogika — aniq fan emas', p: 'Bu yerda formulalar yo\'q. Har bir ustoz, har bir o\'quvchi alohida olam. Tamoyillar bor, lekin retsept yo\'q.' }
    ] },

    { t: 'ask', k: 'Ochilish savoli · suhbat 3–5 daqiqa', h: 'Ustozlikka qanday kelib qolgansiz?', s: 'Bir-ikki jumlada ayting: o\'zingizning hikoyangiz nimadan boshlangan?' },

    { t: 'ask', k: 'Chuqur savol', h: 'Qaysi birimizda haqiqiy ustozlik sababi bor?', s: 'To\'xtab, o\'zimizdan so\'raylik.' },

    { t: 'big', k: 'Ustozning yuragi', h: 'Haqiqiy ustozda *dard* bo\'ladi. Og\'riq bo\'ladi.', s: 'Yuragining bir joyi tilingan bo\'lishi kerak, toki shogirdining og\'rig\'ini his qila olsin.' },

    { t: 'steps', k: 'Mendagi og\'riq', h: 'Mendagi dard — to\'rt hikoya', items: [
      { h: 'Maktab davri', p: 'Rus tili ustozim' },
      { h: 'Kollej davri', p: 'Matematika ustozim' },
      { h: 'Universitet davri', p: 'Jismoniy tarbiya ustozi' },
      { h: 'Mening shogirdim', p: '1 kishining o\'limiga sababchi bo\'lgan o\'quvchim', tag: 'Eng og\'ir yara' }
    ], note: 'Bu yaralar meni ustoz qilgan. *Har bir yara meni boshqacha ustoz qilgan.*' },

    { t: 'steps', k: 'Mushohada savoli', h: 'Bir lahza to\'xtaylik…', all: true, items: [
      { h: 'O\'qituvchi kim?' }, { h: 'Ustoz kim?' }, { h: 'Pedagog kim?' }
    ] },

    { t: 'big', k: 'O\'qituvchi kim?', h: 'O\'z fanidan dars beradigan va o\'z fanini o\'quvchilarga o\'rgatadigan shaxs.' },

    { t: 'big', k: 'Ustoz kim?', h: 'Nafaqat bilim beradi, balki *tarbiya* berib o\'quvchini hayotga tayyorlaydi.', s: 'Har bir ustoz — o\'qituvchi, lekin har bir o\'qituvchi ustoz darajasiga chiqavermaydi.' },

    { t: 'steps', k: 'Pedagog kim? · yunoncha etimologiya', h: 'paidagogos', all: true, items: [
      { n: 'paidos', h: 'bola', p: '(pais)' },
      { n: 'agogos', h: 'yetaklovchi, yo\'l ko\'rsatuvchi' }
    ], note: 'Lug\'aviy ma\'nosi: *«Bolani yetaklovchi», «bolaga yo\'l ko\'rsatuvchi»*' },

    { t: 'steps', k: 'Ustoz ro\'lining o\'zgarishi', h: 'Biz ustozlik ro\'lini almashtirib qo\'ydik', items: [
      { n: 'XX asrgacha', h: 'Yo\'l ko\'rsatuvchi', p: 'Pedagog — yo\'l ko\'rsatuvchi, hayotga yetaklovchi edi.' },
      { n: 'XX asr', h: 'Ma\'lumot beruvchi', p: 'Ma\'lumot beruvchiga aylanib, propaganda quroliga aylandi.' },
      { n: 'XXI asr', h: 'Yana yetaklovchi', p: 'Yana yetaklovchi va yo\'l ko\'rsatuvchi rolga qaytishi kerak.' }
    ] },

    { t: 'vs', k: 'Ustozning xatosi', h: '«Eng kuchli kibr ustozda bo\'ladi»', a: { h: 'Xato 01 · Diktator ustoz', tone: 'bad', items: ['O\'quvchini eshitmaydi', 'Faqat o\'zining haqligini singdirishga harakat qiladi'] }, b: { h: 'Xato 02 · Avtoritarlik', tone: 'bad', items: ['Bilim — bosim vositasiga aylanadi', 'O\'quvchining erki va fikri so\'nadi'] }, note: 'Bilim va hokimiyat birga kelganda kibr qattiq o\'sadi.' },

    { t: 'steps', k: 'Ustozning eng katta xatosi', h: '«Natijani meniki, mag\'lubiyatni o\'quvchiniki deyish»', items: [
      { n: 'Natija', h: 'Meniki', p: 'Men erishdim.' },
      { n: 'Mag\'lubiyat', h: 'Sening aybing', p: 'Sen yaxshi emas ekansan.' },
      { n: 'Sababi', h: 'Men hammaga bir xil o\'tdim', p: 'Qulog\'ingni yopiq qo\'ymadim.' }
    ] },

    { t: 'big', k: 'Ustozning eng haqoratli gapi', h: '«Shu o\'quvchini haydaymiz.»', s: 'Ustoz mas\'uliyatdan voz kechadi. O\'quvchining kelajagi yopiladi. Bilim emas, hukm tarqaladi.\n*Bir gap — bir taqdir.*' },

    { t: 'steps', k: 'Karrasiga o\'sish uchun', h: 'Ustozning o\'zi karrasiga o\'sishi uchun uch yo\'l', items: [
      { h: 'Natijani o\'quvchiniki, mag\'lubiyatni meniki deyish', p: 'O\'zining xatosini o\'zlashtirib oladigan ustoz o\'sadi.' },
      { h: 'O\'rgatganlikka da\'vo qilmaslik', p: 'Bilim bermay, yo\'l ko\'rsatish — soyada qolib mevasiga shod bo\'lish.' },
      { h: 'Vositachi ekanini tan olish', p: 'Siz bilim egasi emas, bilim manbai bilan o\'quvchi orasidagi ko\'priksiz.' }
    ] },

    { t: 'flow', k: 'Yechim', h: 'Dialogga asoslangan ta\'lim', items: ['Muloqot = Munosabat', 'Munosabat = O\'rganish', 'O\'rganish = O\'rgatish'], note: 'Ustoz va o\'quvchi orasidagi haqiqiy zanjir uch bo\'g\'inli. *Dialog yo\'q joyda ta\'lim ham yo\'q.*' },

    { t: 'grid', k: 'O\'quvchi kartasi', h: 'Har bir o\'quvchi haqida ustozning ichki yozuvi', cols: 4, items: [
      { h: 'Xarakter', p: 'Lidermi, tortinchoqmi?' },
      { h: 'Motivatsiyasi', p: 'Real Madrid muxlisi' },
      { h: 'Qo\'rquvlari', p: 'Statusi tushishdan qo\'rqadi' },
      { h: 'Qiziqishlari', p: 'BTS, F1 — o\'z dunyosi' },
      { h: 'Oilaviy fon', p: 'Oilasidan norozi qiz' },
      { h: 'Javob uslubi', p: 'Yozma javob beradigan qiz' },
      { h: 'Yaxshi juftlik', p: 'Muhammadrizo bilan ishlaydi' },
      { h: 'Tanqidga reaksiya', p: 'Yopiladi yoki kuchayadi?' }
    ], note: '*Ustoz fanni o\'rgatmaydi — avval u insonni tushunadi.*' },

    { t: 'bullets', k: 'Savol', h: 'Siz qaysi turdagi insonni ko\'paytiryapsiz?', items: ['Buyruqqa o\'rgangan?', 'Fikrlay oladigan?', 'Qo\'rqadigan?', 'Yolg\'onchi?', 'Mas\'uliyatli va erkin?'], note: '*Ustoz — kelajakning ruhiy arxitektori.*' },

    { t: 'vs', k: 'Ustoz bosimi', h: 'Bunday bola nimaga aylanadi?', a: { h: 'Tashqaridan ko\'rinadi', tone: 'neutral', items: ['Tashqi itoat', 'Ichki passivlik', 'Yashirin agressiya', 'Mustaqil fikr so\'nishi'] }, b: { h: 'Ichida esa shunday deydi', tone: 'bad', items: ['To\'g\'ri javob muhim, haqiqat emas', 'Xato qilmaslik muhim, o\'rganish emas', 'O\'ylash xavfli, moslashish xavfli'] }, note: 'Bunday bola yaxshi baho olishi mumkin, lekin ichida boshqacha yashaydi.' },

    { t: 'table', k: 'Ustoz — inson modeli', h: 'Bola ustozdan nimani o\'rganadi?', head: ['Ustoz…', 'Bola…'], rows: [
      ['baland gapirsa', 'kuchni normal deb o\'rganadi'],
      ['xatoni masxara qilsa', 'xato qilishdan qo\'rqadi'],
      ['savolga ochiq bo\'lsa', 'fikrlashni o\'rganadi']
    ], note: 'Xulosa: *ustoz insoniy inson tarbiyalashi kerak.*' },

    { t: 'steps', k: 'Insonparvar sinf muhiti', h: 'Uchta tamoyil', items: [
      { n: '✕', h: 'Xato: jinoyat → resurs', p: 'Xato qilgan bola jazolanmaydi, xato birgalikda tahlil qilinadi.' },
      { n: '?', h: 'Savol: xavf → fikr', p: 'Savol bergan bola ayblanmaydi, savol fikrlashning belgisi.' },
      { n: '→', h: 'Baho: hukm → yo\'nalish', p: 'Baho yorliq emas, bola qayerda turganini va qayoqqa borishini ko\'rsatadi.' }
    ], note: '*Sinf — xavfsiz fikrlash maydoni bo\'lishi kerak.*' },

    { t: 'steps', k: 'Ustozning uch qatlami', h: 'Ustoz — yashirin tarbiyachi', items: [
      { n: '01', h: 'Rasmiy qatlam · FAN', p: 'Ingliz tili, matematika, dars mavzulari. Ko\'rinadigan, o\'lchanadigan qism.' },
      { n: '02', h: 'Munosabat qatlami · USTOZ', p: 'Ishonch, hurmat, namuna. Bola sezadi, ammo aytmaydi.' },
      { n: '03', h: 'Chuqur qatlam · INSON', p: 'Qadriyat, e\'tiqod, niyat. Bolaning shaxsiyatiga ko\'chadi.' }
    ], note: 'Fan — tashqi qatlam. *Ustoz va inson chuqurroq ta\'sir qiladi.*' },

    { t: 'big', k: 'Xulosa', h: 'Ustoz — bu *kuchli shaxsiyat.*', s: 'Bola sizning so\'zlaringizdan emas, sizning shaxsiyatingizdan o\'rganadi.\nYaxshi ustoz — yaxshi inson.' },

    { t: 'end', h: 'Rahmat', s: '1-modul yakunlandi' }
  ]
};

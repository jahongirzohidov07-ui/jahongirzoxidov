'use strict';
/* Mentorlik (Shogirdlik) dasturi · 1-dars: Leverages — richaglar */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir.png', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*1-dars* · Leverages — richaglar', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/velosiped.jpg', zoom: '135%', focus: 'left 30%', k: 'Dasturning shiori', h: 'Before walking, *not falling* are learnt', s: 'Yurishdan oldin yiqilmaslik o\'rganiladi.', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/qol-berish.jpg', focus: 'center', k: 'Important disclaimer', h: 'Kelishib olaylik', items: [
      'Yutqizmaslik qoidalari o\'rgatiladi',
      'Maqsad yo\'lida katta yo\'qotishlar qilinadi',
      'Har bir mavzudan fundamental bilimlar o\'rgatiladi',
      'Aksariyat mavzulardan ekspert emasman',
      'Chuqurroq ilm uchun mutaxassis bilan uchrashing'
    ], credit: 'Foto: Unsplash' },

    { t: 'topic', color: 'green', k: 'Birinchi mavzu', h: 'Leverages', s: 'Richaglar: kichik kuch bilan katta natija' },

    { t: 'stop', icon: '✋', h: 'To\'xtang!', s: 'Keyingi slaydga shoshilmang.' },

    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/daftar.jpg', zoom: '120%', focus: 'right center', k: 'Savol', h: 'Daftarga yozganlaringiz *yo\'qolib ketsa,* nima qilasiz?', s: 'Biz yutqizmaslikni o\'rganamiz.', credit: 'Foto: Unsplash' },

    { t: 'curve', color: 'blue', icon: '🧠', k: 'Knowledge management · qaydlarni yig\'ib borish', h: 'Eshitganingizdan qanchasi esda qoladi?', points: [{ x: 'Hozir', v: 100 }, { x: '1 soatdan keyin', v: 44 }, { x: '1 kundan keyin', v: 33 }, { x: '2 kundan keyin', v: 28 }], big: '72%', bigLabel: 'ikki kunda unutiladi', side: 'Shuning uchun bilimni yig\'ib borish tizimi kerak. Vosita: *Obsidian.*' },

    { t: 'brain', color: 'green', k: 'Knowledge management · qaydlarni yig\'ib borish', h: 'Building your *second brain*', s: 'Ikkinchi miyangizni quring: bilim boshda emas, tizimda saqlanadi.', title: 'Obsidian · bog\'langan qaydlar',
      steps: [
        { icon: '📒', h: 'Daftar yo\'qoladi, esdan chiqadi', p: 'Qog\'oz ham, xotira ham ishonchsiz', c: '#FFE4E6' },
        { icon: '🗂️', h: 'Knowledge management', p: 'Bilimni tizimli yig\'ib borish kerak', c: '#FFEDD5' },
        { icon: '🧠', h: 'Second brain — ikkinchi miya', p: 'Hamma qaydlar bir joyda va o\'zaro bog\'langan', c: '#DCFCE7' },
        { icon: '💻', h: 'Obsidian dasturi', p: 'Biz ikkinchi miyani shu yerda quramiz', tool: true }
      ] },

    { t: 'circles', color: 'blue', k: 'Har bir mavzuda 3 ta savol', h: 'What\'s our *Why?*', s: 'Har bir o\'rgangan narsamizga doim shu uchta savolga javob beramiz.',
      rings: [
        { label: 'WHY', short: '?', h: 'Nega?', p: 'Maqsadimiz: nima uchun buni qilamiz' },
        { label: 'HOW', short: '⚙', h: 'Qanday?', p: 'Buni qanday qilamiz' },
        { label: 'WHAT', short: '✓', h: 'Nima?', p: 'Nima qilamiz va qanday natija olamiz' }
      ] },

    { t: 'pulley', color: 'orange', k: 'Leverage — richak nima?', h: 'Richak qancha *ko\'p* bo\'lsa, hayot yuki shuncha *yengil*', load: 'HAYOT YUKI',
      cap: 'Biz shu dasturda *9 ta richakni* o\'rganamiz. Har biri qo\'shilgani sari hayot yuki yengillashib boraveradi.' },

    /* ---- 1-richak: Noyob bilim ---- */
    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/olmos-r1.jpg', focus: 'center', k: 'Birinchi richak', h: 'Unique knowledge', s: 'Noyob bilim', num: '1', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/olmos-brilliant.jpg', focus: 'center', k: 'What · nima?', h: 'Olmos → *Brilliant*', items: [
      '*Olmos* — xom bilim. Yer ostida ko\'p, hammada bor.',
      '*Brilliant* — sayqallangan bilim. Kam kishida bor, qimmat.',
      'Noyob bilim = bir nechta sohani birlashtirib, o\'zingizni *sayqallash*.'
    ], all: true },

    { t: 'stack', color: 'green', k: 'How · qanday?', h: '*Skill stacking* — ko\'nikmalarni ustma-ust yig\'ish', s: 'Bitta ko\'nikmada dunyoning eng zo\'ri bo\'lish shart emas. Bir nechta ko\'nikma birlashsa — noyob bilim paydo bo\'ladi.', axis: 'Karyera muvaffaqiyati ehtimoli',
      books: ['Samaradorlik', 'Ishontirish', 'Yozish', 'Psixologiya', 'Shaxsiy moliya'], top: 'Noyob mutaxassis' },

    { t: 'stack', color: 'orange', k: 'Misol · skill stacking', person: { img: '/assets/musk.jpg', name: 'Elon Musk', role: 'Tesla, SpaceX, xAI' }, h: '9 ta ko\'nikma = *1 ta noyob odam*', s: 'Har biri alohida — oddiy. Birga — dunyoda takrorlanmas.', axis: 'Noyoblik',
      books: ['Fizik fikrlash', 'Muhandislik', 'Biznes management', 'Risk management', 'Work ethics', 'Leadership', 'Learning', 'Programming', 'Multi-industrial system thinking'] },

    { t: 'stack', color: 'red', k: 'Misol · skill stacking', person: { img: '/assets/jahongir-2.jpg', name: 'Jahongir Zoxidov', role: 'Jony Academy, Jony School' }, h: '8 ta ko\'nikma — *mening to\'plamim*', s: 'Ingliz tili o\'qituvchisi ko\'p. Ingliz tili + biznes + marketing + psixologiya — kam.', axis: 'Noyoblik',
      books: ['Ingliz tili', 'Teaching', 'Learning', 'Business management', 'Marketing', 'Leadership', 'Strategy', 'Psychology'] },

    { t: 'photo', layout: 'full', color: 'red', img: '/assets/noyob.jpg', focus: 'center', k: 'Why · nega?', h: 'Siz bilan *raqobat qilish qiyin* bo\'lib qoladi', s: 'Noyob bilim sizni olomon ichida yagona qiladi: o\'rningizga boshqa odamni qo\'yib bo\'lmaydi.', credit: 'Foto: Unsplash' },

    /* ---- 2-richak: Noyob aloqalar ---- */
    { t: 'photo', layout: 'full', color: 'green', img: '/assets/aloqa-r2.jpg', focus: 'center 30%', k: 'Ikkinchi richak', h: 'Unique links', s: 'Noyob aloqalar', num: '2', credit: 'Foto: Unsplash' },

    /* 18: What — tarmoq grafigi */
    { t: 'brain', color: 'green', plain: true, k: 'What · nima?', h: 'Kontaktni olish *qiyin* bo\'lgan odamlar bilan aloqa', s: 'Hamma bilan tanishish emas — eshigi hammaga ochiq bo\'lmagan odamlar bilan aloqa.', title: 'Noyob aloqalar tarmog\'i', center: 'Siz', centerIcon: '🙂',
      nodes: [['🏛️', 'Hokimiyat'], ['💼', 'Investor'], ['🏢', 'Kompaniya rahbari'], ['🎓', 'Professor'], ['📰', 'Jurnalist'], ['⚖️', 'Advokat'], ['🏦', 'Bank'], ['🌍', 'Xorijiy sherik']],
      steps: [
        { icon: '🔒', h: 'Oddiy yo\'l bilan yetib bo\'lmaydi', p: 'Telefon raqami, qabuli, vaqti yopiq', c: '#FFE4E6' },
        { icon: '🔑', h: 'Bitta tanish — eshik ochiladi', p: 'Aloqa orqali bir qadamda yetasiz', c: '#DCFCE7' },
        { icon: '🕸️', h: 'Aloqalar bir-birini ochadi', p: 'Bir kuchli aloqa — o\'nlab yangi aloqa', c: '#DBEAFE' }
      ] },

    /* 19: Misol — Michael Griffin */
    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/griffin-musk.jpg', fit: 'contain', focus: 'center', caption: '*Michael Griffin* (chapda) va *Elon Musk* (o\'ngda), 2000-yillar boshi', k: 'Misol · NASA va SpaceX', h: 'Michael *Griffin*', items: [
      '2002-yil: Elon Musk bilan birga Rossiyaga raketa sotib olishga borgan.',
      '2005-yil: NASA rahbari bo\'ldi.',
      '2006-yil: NASA SpaceX bilan birinchi yirik shartnomani tuzdi. *Bitta aloqa — kompaniyani saqlab qoldi.*'
    ], all: true },

    /* 20: Misol — AWS vs IBM */
    { t: 'duel', color: 'orange', k: 'Misol · federal razvedka (CIA), 2013', h: 'Bulut shartnomasi kimga ketdi?', prize: '600 mln $', prizeLabel: 'bulut xizmatlari',
      a: { icon: '🏢', h: 'IBM', p: 'Yuz yillik gigant. Texnik jihatdan kuchli, taklifi arzonroq.' },
      b: { img: '/assets/bezos.jpg', logo: '/assets/aws.jpg', h: 'Jeff Bezos · Amazon', p: 'To\'g\'ri odamlar bilan to\'g\'ri aloqa — shartnoma va bulut bozorida liderlik.' },
      note: 'Bilim va narx teng bo\'lganda — *aloqa hal qiladi.*' },

    /* 21: How — 4 ta yo'l */
    { t: 'gallery', color: 'green', k: 'How · qanday?', h: 'Noyob aloqalar qayerda paydo bo\'ladi?', items: [
      { img: '/assets/ekspert.jpg', icon: '🎤', h: 'Foydali odam bo\'ling', p: 'Ekspert bo\'ling — kuchli odamlar sizga o\'zi keladi.' },
      { img: '/assets/serendipity.jpg', icon: '🎲', h: 'Serendipity', p: 'Tasodifiy uchrashuvlarga ochiq bo\'ling: choy, safar, tadbir.' },
      { img: '/assets/treking.jpg', icon: '🥾', h: 'Treking', p: 'Tog\'da lavozim yo\'q — hamma teng, gaplashish oson.' },
      { img: '/assets/running.jpg', icon: '🏃', h: 'Running', p: 'Yugurish klublari: intizomli, kuchli odamlar shu yerda.' }
    ] },

    /* 22: Why — vaqt tejaydi */
    { t: 'bars', color: 'blue', icon: '⏱️', k: 'Why · nega?', h: 'Vaqt tejaydi: *1 yil → 1 oy*', rows: [
      { h: 'Tanishsiz', p: 'Xat, navbat, rad javoblar', w: '100%', v: '12 oy', ticks: 12, color: 'red' },
      { h: 'Tanish bilan', p: 'Bitta qo\'ng\'iroq', w: '9%', v: '1 oy', color: 'green' }
    ], big: '12×', bigText: 'tezroq. Bir yillik yo\'l — *bir oyda.*' },

    /* 23: Xulosa */
    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/eshik.jpg', focus: 'right center', k: 'Xulosa', h: 'Ba\'zi eshiklar bilim va mehnat bilan emas — *tanishlar* bilan ochiladi', credit: 'Foto: Unsplash' },

    { t: 'section', icon: '💰', n: '3', h: 'Capital — kapital', s: 'Eng qadimgi, eng kuchli richak' },

    { t: 'flow', icon: '💸', k: 'How', h: 'Kapital qayerdan keladi?', vertical: true, items: ['Income → Capital', 'Capital → Capital', 'Other People\'s Money → Capital'] },

    { t: 'bullets', icon: '🦾', k: 'Why', h: 'Pul kuchni yaxshi ko\'paytiradi: kapital bo\'lsa, siz…', items: ['odamlarga ish berasiz', 'texnologiya sotib olasiz', 'marketingni kengaytirasiz', 'vaqtni sotib olasiz'], note: 'Ya\'ni pul sizga *«ikkinchi qo\'l»* bo\'ladi.' },

    { t: 'section', icon: '👥', n: '4', h: 'Team — jamoa', s: 'Xodimlar, ishchi kuchi' },

    { t: 'big', icon: '⛓️', k: 'Tarixdan', h: 'Qullar — *4 trillion* dollar.' },

    { t: 'steps', k: 'How · why', h: 'Jamoa qanday yig\'iladi?', all: true, items: [
      { n: '🎯', h: 'Maqsad kerak' },
      { n: '❤️', h: 'Oila a\'zosidek tanlash kerak' }
    ] },

    { t: 'section', icon: '👨‍👩‍👧‍👦', n: '5', h: 'Family — oila', s: 'Beshinchi richak' },

    { t: 'bullets', k: 'Misol · Rotschildlar (Rothschild Family)', h: 'Dunyo bank tizimi egalari', items: [
      'XVIII–XIX asrda Yevropaning eng qudratli bank imperiyasini qurdilar',
      'Oila rahbari Mayer Amschel Rothschild 5 o\'g\'lini Yevropaning 5 davlatiga yuborib, bank tarmog\'ini tashkil qilgan',
      'Ularning kuchi bank tizimi + siyosiy aloqalar + davlatlarga kredit berishdan kelgan',
      'Bugungi kunda sulolaning boyligi aniqlanmaydi: aktivlari juda tarqoq va yashirin'
    ], note: 'Leverage turi: *kapital + siyosiy ta\'sir + transmilliy banklar.*' },

    { t: 'bullets', k: 'Misol · Rokfellerlar (Rockefeller Family)', h: 'Neft imperiyasidan energetika qiroli', items: [
      'John D. Rockefeller — tarixdagi eng boy odam (inflyatsiyani hisobga olganda)',
      'Standard Oil kompaniyasi Amerika neft bozorining 90%ini nazorat qilgan',
      'Keyin ular moliya, farmatsiya, universitetlar, xayriya fondlari, siyosatga kirishgan'
    ], note: 'Leverage turi: *energiya + moliya + fondlar + siyosiy networking.*' },

    { t: 'steps', k: 'O\'zbekistondan misollar', h: 'Oilaviy klanlar', all: true, items: [{ n: '🏛️', h: 'Kamilovlar oilasi' }, { n: '🏛️', h: 'Mamasaidovlar oilasi' }, { n: '🏛️', h: 'Rajabiy' }] },

    { t: 'vs', k: 'How · why', h: 'Oila richagi qanday quriladi?', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['10 ta farzand, 5 ta o\'g\'il', 'Kuchli maktablarda o\'qiting', 'Homeschooling — ona madrasa'] }, b: { icon: '💡', h: 'Why', tone: 'good', items: ['Tasavvur qiling: 10 ta farzandingizdan 10 ta quda bor', 'Qarindoshlar ko\'pligi unique links ehtimolini oshiradi'] } },

    { t: 'section', icon: '📣', n: '6', h: 'Audience — auditoriya', s: 'Eng tez o\'stirsa bo\'ladigan richak' },

    { t: 'vs', k: 'How · why', h: 'Auditoriya', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['O\'zingiz ekspertligingiz bo\'yicha blog', 'Shaxsiy blog', 'Yozma, YouTube, Instagram'] }, b: { icon: '💡', h: 'Why', tone: 'good', items: ['Bittada ko\'p odamga sotish', 'Jamoa yig\'ish', 'Passive leverage', 'Sizni o\'zingizdan kuchli qiladi', 'Eng tez o\'stirsa bo\'ladigan'] } },

    { t: 'stats', icon: '🔥', k: 'Misol', h: 'Bir kunda', items: [
      { v: '2 700 000', l: 'sotildi', s: 'bir kunda' },
      { v: '$20–30', l: 'narx', s: 'bitta mahsulot' },
      { v: '$54–81 mln', l: 'daromad', s: 'bir kunda' }
    ] },

    { t: 'section', icon: '🤝', n: '7', h: 'Partner — sherik', s: '1 + 1 = 11' },

    { t: 'vs', k: 'How · why', h: 'Sherik', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['Sizda yo\'q leverage borlar bilan sherik bo\'ling', 'Misol: Apple — Jobs + Wozniak'] }, b: { icon: '💡', h: 'Why', tone: 'good', items: ['Hamma resurs sizda bo\'lishi ehtimoli kam', 'Yiqilsangiz, birdan jarlikka qulamaysiz', 'Qaror sifati oshadi, risk kamayadi', 'Samaradorlik 4–5 barobarga oshadi'] } },

    { t: 'section', icon: '🏆', n: '8', h: 'Reputation — obro\'', s: 'Bitta xat — milliardlab investitsiya' },

    { t: 'vs', k: 'How · why', h: 'Obro\'', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['Halollik', 'Mardlik', 'Va\'daning ustidan chiqish', 'Natija = isbot', 'Chiroyli muomala'] }, b: { icon: '💡', h: 'Why · sizning obro\'yingiz', tone: 'good', items: ['Qarorlarni tezlashtiradi', 'Muzokaralarni osonlashtiradi', 'Shartnomalarni yengillashtiradi', 'Aloqalarni ochadi', 'Auditoriyani ko\'paytiradi', 'Kapitalni jalb qiladi', 'Jamoani birlashtiradi'] } },

    { t: 'stats', icon: '📈', k: 'Obro\'ning karrasi', h: 'Obro\' qanday ko\'payadi', items: [
      { v: '1X', l: 'bir odam', s: 'bir odamning obro\'si' },
      { v: '10X', l: 'jamoa', s: 'jamoaning obro\'si' },
      { v: '30X', l: 'oila', s: 'oilaviy qadriyatlar bilan birlashsa' },
      { v: '100X', l: 'auditoriya', s: 'auditoriya qo\'shilsa' }
    ] },

    { t: 'section', icon: '🌟', n: '9', h: 'Personality — shaxsiyat', s: 'Barcha kuchli insonlarning shaxsiyati kuchli bo\'lgan' },

    { t: 'flow', icon: '⚡', k: 'Formula', h: 'Richak natija bermaydi, richakni ushlagan *shaxsiyat* natija beradi', items: ['Leverage', 'Personality', 'Result'] },

    { t: 'checklist', icon: '🧭', k: 'Xulosa', h: '9 ta leverage', items: [
      { n: '1', h: 'Unique knowledge — noyob bilim' }, { n: '2', h: 'Unique links — noyob aloqalar' }, { n: '3', h: 'Capital — kapital' },
      { n: '4', h: 'Team — jamoa' }, { n: '5', h: 'Family — oila' }, { n: '6', h: 'Audience — auditoriya' },
      { n: '7', h: 'Partner — sherik' }, { n: '8', h: 'Reputation — obro\'' }, { n: '9', h: 'Personality — shaxsiyat', star: true }
    ] },

    { t: 'flow', k: 'Leverage konvertatsiyasi', h: 'Bitta richak ikkinchisiga aylanadi', items: ['Knowledge', 'Audience', 'Reputation'], note: 'Knowledge → Audience, Audience → Reputation.' },

    { t: 'table', k: 'Leverage konvertatsiyasi · misollar', h: 'Kimlar qanday yo\'l bosgan', head: ['Yo\'l', 'Misol'], rows: [
      ['Reputation → Capital → Team', 'Warren Buffett modeli'],
      ['Audience → Capital', 'Alex Hormozi'],
      ['Partner → Team → Reputation', 'Jobs + Wozniak'],
      ['Capital → Team → Unique Links', 'Elon Musk'],
      ['Unique Links → Capital', 'Jeff Bezos']
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '1-dars yakunlandi' }
  ]
};

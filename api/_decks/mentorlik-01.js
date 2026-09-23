'use strict';
/* Mentorlik (Shogirdlik) dasturi · 1-dars: Leverages — richaglar */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir.png', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*1-dars* · Leverages — richaglar', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'table', color: 'green', icon: '💎', k: 'Kursning qiymati', h: 'Siz oladigan bilim — *≈ $20 000* lik tajriba', head: ['Ta\'lim / trening', 'Qiymati'], rows: [
      ['Universitet — 4 yillik ta\'lim', '*$10 000+*'],
      ['Alisher Isayev kursi', '$2 500'],
      ['Aziz Rahimov — mentorlik darslari', '$1 500'],
      ['O\'quv markazni tizimlashtirish — 2 ta kurs', '$1 200 + $1 000'],
      ['Pedagogik mahorat kursi', '$800'],
      ['Ustozlik kursi', '$200'],
      ['Boshqa treninglar', '$500'],
      ['*Jami*', '*≈ $20 000*']
    ], note: 'Universitetning o\'ziga 10 000$ dan ortiq ketgan. Bu dasturga jamlangan ilmlar — shu 20 000$ ga yaqin mablag\' sarflab olingan bilim va tajribaning mohiyati.' },

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

    /* ---- 3-richak: Kapital ---- */
    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/kapital-r3.jpg', focus: 'center', k: 'Uchinchi richak', h: 'Capital', s: 'Kapital', num: '3', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'full', color: 'red', img: '/assets/qadimgi-tangalar.jpg', focus: 'right center', k: 'What · nima?', h: 'Pul — eng *qadimgi*, eng *kuchli*, eng *sof* richak', s: 'Tarixda hukumatlarni ag\'dargan, imperiyalar qurgan kuch. Jiddiy summa 100 000 $ dan boshlanadi.', credit: 'Foto: Unsplash' },

    { t: 'profile', color: 'orange', k: 'Misol · kapital ta\'sirga aylanadi', img: '/assets/soros.jpg', name: 'George Soros va Alex Soros', role: 'Open Society Foundations', h: 'Kapital — *ta\'sir* sotib oladi', s: 'Soros fondlari dunyo bo\'ylab siyosiy va jamoat harakatlariga (jumladan, LGBT tashkilotlariga) millionlab dollar ajratadi.', items: [
      'Kapital avloddan avlodga o\'tadi — ota fondni o\'g\'liga topshirdi, ta\'sir saqlanib qoldi.',
      'Pul bilan odamlar, media, tashkilotlar harakatga keladi — bu richakning kuchi.',
      'Savol: *sizning kapitalingiz nimani harakatga keltiradi?*'
    ] },

    { t: 'grid', color: 'green', icon: '💰', k: 'Why · nega kapital richak?', h: 'Pul — sizning *ikkinchi qo\'lingiz*', cols: 2, items: [
      { icon: '🤲', h: 'Kuchni ko\'paytiradi', p: 'Odamlarga ish berasiz, texnologiya sotib olasiz, marketingni kengaytirasiz, vaqtni sotib olasiz.' },
      { icon: '⏱️', h: 'Vaqtni tebratadi', p: 'Bir kishi 1 oyda qiladigan ishni kapital bilan 3 kunda qilasiz. Bu — vaqtning ko\'payishi.' },
      { icon: '🚀', h: 'Ixtiyoriy tezlik', p: 'Fan, biznes, texnologiya — hammasi kapital bilan tezlashadi. SpaceX ham, Tesla ham kapital topmaguncha yurmagan.' },
      { icon: '⚡', h: 'Super-qurol', p: 'Kapital boshqa richak bilan qo\'shilsa natija uch baravar emas — ko\'p baravar bo\'ladi.' }
    ] },

    { t: 'steps', color: 'blue', icon: '🏗️', k: 'How · qanday?', h: 'Kapital *3 yo\'l* bilan yaratiladi', items: [
      { n: '💼', h: 'Income → Capital', p: 'Daromadni oshirish: qimmatli ko\'nikmalar (AI, sales, leadership, coding), filiallar, to\'g\'ri narx (premium + mass), qo\'shimcha xizmatlar.' },
      { n: '🔁', h: 'Capital → Capital', p: 'Pul pul tug\'adi: daromadning bir qismi aktivga — yangi filial, texnologiya (App, AI, CRM), dividend ETF, ko\'chmas mulk. Tizim: daromad → aktiv → daromad.' },
      { n: '🏦', h: 'OPM — boshqalarning puli', p: 'Investorlar, bank krediti → aktivga, hamkorlar kapitali, franchising, grantlar. Eng muhimi: kredit iste\'molga emas, *aktivga*.' }
    ], note: 'Boylar daromadni oshirib emas, *kapitalni ko\'paytirib* boyiydi.' },

    { t: 'brain', color: 'orange', plain: true, k: 'Super-leverage', h: 'Kapital + *boshqa richak* = ko\'p baravar', s: 'Kapitalni kuchaytiradigan eng kuchli narsa — uni boshqa richakka ulash.', title: 'Kapital nimaga ulanadi?', center: 'Kapital', centerIcon: '💰',
      nodes: [['🔗', 'Aloqalar'], ['📣', 'Media'], ['🤖', 'Texnologiya'], ['⚙️', 'Tizim'], ['🏷️', 'Brend'], ['💡', 'Noyob bilim']], cross: [[0, 1], [2, 3], [4, 5]],
      steps: [
        { icon: '🔗', h: 'Kapital + Aloqalar', p: 'Bir zumda katta loyihaga kirasiz', c: '#DBEAFE' },
        { icon: '📣', h: 'Kapital + Media', p: '1 ta video — 10 000 mijoz', c: '#FFEDD5' },
        { icon: '🤖', h: 'Kapital + Texnologiya', p: '100 kishilik ishni avtomatlashtirasiz', c: '#DCFCE7' },
        { icon: '🏷️', h: 'Kapital + Brend', p: 'Nomning o\'zi pul ishlab chiqaradi', c: '#FFE4E6' }
      ] },

    { t: 'flow', color: 'green', icon: '🧭', k: 'Xulosa', h: 'Musk, Bezos, Jobs kuchni faqat kapitaldan topmagan', all: true, items: ['Bilim', 'Aloqa', 'Texnologiya', 'Tizim'], note: 'Kapital esa ularning kuchini *10 barobar oshirgan qo\'l* bo\'lgan.' },

    /* ---- 4-richak: Jamoa ---- */
    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/jamoa-r4.jpg', focus: 'center', k: 'To\'rtinchi richak', h: 'Team', s: 'Jamoa — xodimlar, ishchi kuchi', num: '4', credit: 'Foto: Unsplash' },

    { t: 'stats', color: 'red', icon: '⛓️', k: 'What · ishchi kuchi', h: 'Tarixdagi eng katta richak — *mehnat*', items: [
      { v: '4 trln $', l: 'Amerika imperiyasi qurilishida qullar tekinga bajargan mehnat qiymati' },
      { v: '0 $', l: 'Ularga to\'langan haq — faqat ovqat' }
    ], note: 'Bugun jamoa — halol usulda o\'sha richak: *siz uchun boshqa qo\'llar ishlaydi.*' },

    { t: 'gallery', color: 'green', k: 'How · qanday?', h: 'Jamoa qanday quriladi?', items: [
      { img: '/assets/maqsad.jpg', icon: '🎯', h: 'Avval maqsad kerak', p: 'Maqsadsiz jamoa — olomon. Odamlar aniq maqsad atrofida yig\'iladi va shu maqsad uchun ishlaydi.' },
      { img: '/assets/oila-dasturxon.jpg', icon: '🏠', h: 'Oila a\'zosidek tanlang', p: 'Har bir xodim oila a\'zosi tanlangandek tanlanishi kerak: qadriyat, ishonch, uzoq muddat.' }
    ] },

    { t: 'bars', color: 'blue', icon: '📦', k: 'Why · nega?', h: 'Yakka o\'zingiz vs *jamoa* bilan', rows: [
      { h: 'Yakka o\'zingiz', p: 'Bir vaqtda 2–3 ta vazifa', w: '25%', v: '2–3 vazifa', ticks: 3, color: 'red' },
      { h: 'Jamoa bilan', p: 'Bir vaqtda o\'nlab vazifa', w: '100%', v: '10+ vazifa', ticks: 12, color: 'green' }
    ], big: '5×', bigText: 'ko\'proq ish — *bir vaqtning o\'zida.* Siz boshqarasiz, jamoa bajaradi.' },

    /* ---- 5-richak: Oila ---- */
    { t: 'photo', layout: 'full', color: 'green', img: '/assets/oila-r5.jpg', focus: 'center', k: 'Beshinchi richak', h: 'Family', s: 'Oila — oilaviy richak', num: '5', credit: 'Foto: Unsplash' },

    { t: 'tree', color: 'orange', k: 'Misol · Rothschild oilasi', h: 'Dunyo bank tizimi *egalari*', s: 'XVIII–XIX asrda Yevropaning eng qudratli bank imperiyasini qurdilar.', items: [
      'Mayer Amschel Rothschild 5 o\'g\'lini 5 davlatga yuborib bank tarmog\'ini tuzgan.',
      'Kuch manbai: bank tizimi + siyosiy aloqalar + davlatlarga kredit.',
      'Bugun sulolaning boyligi aniqlanmaydi — aktivlar tarqoq va yashirin.'
    ], root: { icon: '👴', label: 'Mayer Amschel Rothschild', sub: 'Frankfurt, 1744–1812' }, kids: [{ icon: '👨', label: 'Amschel' }, { icon: '👨', label: 'Salomon' }, { icon: '👨', label: 'Nathan' }, { icon: '👨', label: 'Carl' }, { icon: '👨', label: 'James' }], leaves: ['Frankfurt', 'Vena', 'London', 'Neapol', 'Parij'], leafIcon: '🏦', rowLabel: '5 o\'g\'il', leafLabel: '5 davlat',
      note: 'Leverage turi: *kapital + siyosiy ta\'sir + transmilliy banklar.*' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/rockefeller.jpg', fit: 'contain', bg: '#111827', caption: 'Rockefeller oilasi, XX asr boshi', k: 'Misol · Rockefeller oilasi', h: 'Neft imperiyasidan *energetika qiroli*', items: [
      'John D. Rockefeller — tarixdagi eng boy odam (inflyatsiyani hisobga olganda).',
      'Standard Oil Amerika neft bozorining 90% ini nazorat qilgan.',
      'Keyin moliya, farmatsiya, universitetlar, xayriya fondlari, siyosatga kirishgan.',
      'Leverage turi: *energiya + moliya + fondlar + siyosiy networking.*'
    ], all: true },

    { t: 'grid', color: 'green', icon: '🇺🇿', k: 'Bizda ham bor', h: 'O\'zbekistondagi *sulolalar*', cols: 3, items: [
      { icon: '🏛️', h: 'Kamilovlar oilasi' },
      { icon: '🏛️', h: 'Mamasaidovlar oilasi' },
      { icon: '🏛️', h: 'Rajabiylar' }
    ], note: 'Sulola — bu *bir avlodda emas, uch avlodda* quriladigan richak.' },

    { t: 'tree', color: 'blue', k: 'How · qanday?', h: 'Kamida *10 ta farzand*', s: 'Sulolaviy oila tuzish — bu ham strategiya.', items: [
      '10 ta farzandni mo\'ljal qiling, shundan 5 ta o\'g\'il.',
      'Kuchli maktablarda o\'qiting, hamma kursni olib bering.',
      'Homeschooling — *ona madrasa*: uy ham maktab.'
    ], root: { icon: '👨‍👩‍👧', label: 'Sizning oilangiz' }, kids: [{ icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }], rowLabel: '10 farzand' },

    { t: 'stats', color: 'orange', icon: '🕸️', k: 'Why · nega?', h: 'Tasavvur qiling: 10 ta farzandingizdan *10 ta quda*', items: [
      { v: '10', l: 'farzand' },
      { v: '10', l: 'quda — 10 ta yangi oila' },
      { v: '100+', l: 'qarindosh — tayyor aloqalar tarmog\'i' }
    ], note: 'Qarindoshlar ko\'pligi *noyob aloqalar* ehtimolini oshiradi. Ko\'p masalalar birgalikda hal bo\'ladi.' },

    /* ---- 6-richak: Auditoriya ---- */
    { t: 'photo', layout: 'full', color: 'red', img: '/assets/auditoriya-r6.jpg', focus: 'center', k: 'Oltinchi richak', h: 'Audience', s: 'Auditoriya — hamma mashhurlar shu richak bilan', num: '6', credit: 'Foto: Unsplash' },

    { t: 'gallery', color: 'red', k: 'How · qanday?', h: 'O\'z ekspertligingiz bo\'yicha *blog* yuriting', items: [
      { img: '/assets/blog-yozma.jpg', icon: '✍️', h: 'Yozma', p: 'Telegram kanal, maqola, kitob. Fikringiz — matnda qoladi.' },
      { img: '/assets/blog-video.jpg', icon: '🎥', h: 'YouTube', p: 'Video darslar, intervyular. Bir marta yozasiz — minglab odam ko\'radi.' },
      { img: '/assets/blog-instagram.jpg', icon: '📱', h: 'Instagram', p: 'Kundalik kontent, reels. Odamlar sizni har kuni ko\'radi.' }
    ], note: 'Qiziqqan sohangizda yoki maqsadingizga mos sohada — *shaxsiy blog.*' },

    { t: 'grid', color: 'orange', icon: '📣', k: 'Why · nega?', h: 'Auditoriya nima beradi?', cols: 3, items: [
      { icon: '🛒', h: 'Bittada ko\'p odamga sotish', p: 'Bitta yasaysiz — millionta sotasiz.' },
      { icon: '👥', h: 'Jamoa yig\'ish', p: 'Odam qidirmaysiz — odamlar sizga keladi.' },
      { icon: '🌙', h: 'Passive leverage', p: 'Siz uxlaganda ham kontent ishlaydi.' },
      { icon: '💪', h: 'O\'zingizdan kuchli qiladi', p: 'Ming odam bir odamdan kuchli.' },
      { icon: '🚀', h: 'Eng tez o\'sadigan', p: 'Boshqa richaklardan tezroq o\'stirsa bo\'ladi.' }
    ] },

    { t: 'profile', color: 'green', k: 'Misol · Alex Hormozi', img: '/assets/hormozi.jpg', name: 'Alex Hormozi', role: '«$100M Money Models» muallifi', h: 'Bir kunda *2 700 000* kitob', s: 'Narxi 20–30 $. Bir kunlik savdo — 54–81 million dollar.', items: [
      'Kitob chiqishidan oldin auditoriya tayyor edi — millionlab obunachi.',
      'Bitta mahsulot × katta auditoriya = *bir kunda imperiya daromadi.*',
      'Auditoriya bo\'lmasa — o\'sha kitob 2 700 emas, 27 ta sotilardi.'
    ] },

    /* ---- 7-richak: Sherik ---- */
    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/sherik-r7.jpg', focus: 'center', k: 'Yettinchi richak', h: 'Partner', s: 'Sherik — 1 + 1 = 11', num: '7', credit: 'Foto: Unsplash' },

    { t: 'gallery', color: 'blue', numbered: false, k: 'Misollar', h: 'Yaxshi sherik: *1 + 1 = 11*', items: [
      { img: '/assets/jobs-wozniak.jpg', icon: '🍏', h: 'Steve Jobs + Steve Wozniak', p: 'Apple. Biri — vizyon va sotuv, ikkinchisi — muhandislik. Alohida ikkalasi ham Apple emas edi.' },
      { img: '/assets/buffett-munger-dalio.jpg', icon: '📈', h: 'Buffett · Munger · Dalio', p: 'Berkshire Hathaway, Bridgewater. Dunyodagi eng katta kapitallar — sheriklik asosida.' }
    ] },

    { t: 'vs', color: 'green', icon: '🧩', k: 'How · qanday?', h: 'Sizda yo\'q richak borlar bilan *sherik bo\'ling*', a: { h: 'Sizda bor', tone: 'good', items: ['Noyob bilim', 'Vaqt va mehnat', 'Jamoa'] }, b: { h: 'Sherikda bor', tone: 'gold', items: ['Kapital', 'Aloqalar', 'Auditoriya'] }, note: 'Hamma resurs bitta odamda bo\'lishi ehtimoli *juda kam.*' },

    { t: 'grid', color: 'orange', icon: '🪂', k: 'Why · nega?', h: 'Sherik nima beradi?', cols: 3, items: [
      { icon: '🧩', h: 'To\'liq resurs', p: 'Hamma resurs sizda bo\'lishi ehtimoli kam — sherik to\'ldiradi.' },
      { icon: '🪂', h: 'Jarlikka qulamaysiz', p: 'Yiqilsangiz — birdan pastga emas, sherik ushlab qoladi.' },
      { icon: '🎯', h: 'Qaror sifati oshadi', p: 'Ikki ko\'z bir ko\'zdan ko\'proq ko\'radi.' },
      { icon: '🛡️', h: 'Risk kamayadi', p: 'Zarar ham, yuk ham bo\'linadi.' },
      { icon: '⚡', h: 'Samaradorlik 4–5×', p: 'Ikki odam — ikki emas, to\'rt-besh barobar natija.' }
    ] },

    /* ---- 8-richak: Obro' ---- */
    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/obro-r8.jpg', focus: 'center', k: 'Sakkizinchi richak', h: 'Reputation', s: 'Obro\' — siz yo\'qligingizda siz haqingizdagi gaplar', num: '8', credit: 'Foto: Unsplash' },

    { t: 'profile', color: 'blue', k: 'Misol · Warren Buffett', img: '/assets/buffett.jpg', name: 'Warren Buffett', role: 'Berkshire Hathaway', h: 'Bitta xat — *milliardlab* investitsiya', s: 'Investorlarga bitta xat jo\'natadi → bir kunda bir necha milliard sarmoya oqib keladi.', items: [
      'Nega? Chunki 60 yil davomida *halollik va ehtiyotkorlik* obro\'sini yaratgan.',
      'Obro\' — siz yo\'qligingizda siz haqingizdagi gaplar.',
      'Ishonch bir kunda qurilmaydi, lekin bir kunda yo\'qolishi mumkin.'
    ] },

    { t: 'stack', color: 'green', k: 'How · qanday?', h: 'Obro\' *5 ta g\'ishtdan* quriladi', s: 'Har kuni, har bir ishda. Bittasi tushsa — butun devor qimirlaydi.', axis: 'Ishonch', books: ['Halollik', 'Mardlik', 'Va\'daning ustidan chiqish', 'Natija = isbot', 'Chiroyli muomala'], top: 'Obro\'' },

    { t: 'brain', color: 'orange', plain: true, k: 'Why · nega?', h: 'Sizning obro\'yingiz *nimalarni ochadi?*', s: 'Obro\' — o\'zi ishlaydigan richak: siz gapirmasdan turib odamlar «ha» deydi.', title: 'Obro\' nimalarga ta\'sir qiladi', center: 'Obro\'', centerIcon: '🏅',
      nodes: [['⚡', 'Qarorlar tezlashadi'], ['🤝', 'Muzokaralar osonlashadi'], ['📄', 'Shartnomalar yengillashadi'], ['🔗', 'Aloqalar ochiladi'], ['📣', 'Auditoriya ko\'payadi'], ['💰', 'Kapital keladi'], ['👥', 'Jamoa birlashadi']], cross: [[0, 1], [2, 3], [4, 5]],
      steps: [
        { icon: '🗣️', h: 'Siz yo\'qsiz — obro\' gapiradi', p: 'Odamlar sizni ko\'rmasdan ishonadi', c: '#FFEDD5' },
        { icon: '⏱️', h: 'Vaqt tejaydi', p: 'Isbotlash shart emas — tarix isbotlaydi', c: '#DCFCE7' },
        { icon: '🧲', h: 'O\'zi tortadi', p: 'Kapital, odamlar, imkoniyatlar sizga keladi', c: '#DBEAFE' }
      ] },

    { t: 'bars', color: 'red', icon: '📶', k: 'Obro\' ko\'lami', h: 'Bir odamdan *auditoriyagacha*', rows: [
      { h: 'Bir odamning obro\'si', p: 'Faqat siz', w: '8%', v: '1×', color: 'blue' },
      { h: 'Jamoaning obro\'si', p: 'Siz + jamoangiz', w: '25%', v: '10×', color: 'green' },
      { h: 'Oilaviy qadriyatlar bilan', p: 'Sulola nomi', w: '50%', v: '30×', color: 'orange' },
      { h: 'Auditoriya qo\'shilsa', p: 'Minglab odam sizni biladi', w: '100%', v: '100×', ticks: 10, color: 'red' }
    ] },

    /* ---- 9-richak: Shaxsiyat ---- */
    { t: 'photo', layout: 'full', color: 'green', img: '/assets/shaxsiyat-r9.jpg', focus: 'center', k: 'To\'qqizinchi richak', h: 'Personality', s: 'Shaxsiyat — barcha richaklarning ildizi', num: '9', credit: 'Foto: Unsplash' },

    { t: 'roots', color: 'green', k: 'What · nima?', h: 'Barcha kuchli insonlarning *shaxsiyati kuchli* bo\'lgan', s: 'Shaxsiyat — ildiz. Richaklar — tana. Natija — meva. Ildiz bo\'lmasa, daraxt turmaydi.', items: [
      'Shaxsiyat — sizning o\'zingiz, shaxs sifatida.',
      'Ildiz ko\'rinmaydi, lekin hamma narsani ushlab turadi.',
      'Ildiz qancha chuqur — meva shuncha ko\'p.'
    ] },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/tarozi.jpg', fit: 'contain', bg: '#0B1220', k: 'Ichki va tashqi', h: 'Reputatsiya — *tashqi*. Shaxsiyat — *ichki*.', items: [
      'Ichki kuch bo\'lmasa, tashqi obro\' yiqiladi.',
      'Shaxsiyati mustahkam odamning obro\'si *o\'zi o\'sadi.*',
      'Shaxsiyat — reputatsiya richagining ildizi va *barcha richaklarning fundamenti.*'
    ], all: true },

    /* ---- Xulosa ---- */
    { t: 'grid', color: 'blue', icon: '🧭', k: 'Xulosa', h: '9 ta richak', cols: 3, prog: false, items: [
      { icon: '💡', h: '1 · Unique knowledge', p: 'Noyob bilim' }, { icon: '🔗', h: '2 · Unique links', p: 'Noyob aloqalar' }, { icon: '💰', h: '3 · Capital', p: 'Kapital' },
      { icon: '👥', h: '4 · Team', p: 'Jamoa' }, { icon: '🏠', h: '5 · Family', p: 'Oila' }, { icon: '📣', h: '6 · Audience', p: 'Auditoriya' },
      { icon: '🤝', h: '7 · Partner', p: 'Sherik' }, { icon: '🏅', h: '8 · Reputation', p: 'Obro\'' }, { icon: '🌟', h: '9 · Personality', p: 'Shaxsiyat' }
    ] },

    { t: 'flow', color: 'orange', icon: '🔄', k: 'Leverage konvertatsiyasi', h: 'Bir richak *ikkinchisiga aylanadi*', all: true, items: ['Knowledge · bilim', 'Audience · auditoriya', 'Reputation · obro\''], note: 'Bilim auditoriya yig\'adi, auditoriya obro\' beradi. *Bittadan boshlang — qolgani zanjir bo\'lib keladi.*' },

    { t: 'table', color: 'green', k: 'Leverage konvertatsiyasi · misollar', h: 'Kimlar qanday yo\'l bosgan', head: ['Yo\'l', 'Kim'], rows: [
      ['Reputation → Capital → Team', '*Warren Buffett* modeli'],
      ['Audience → Capital', '*Alex Hormozi*'],
      ['Partner → Team → Reputation', '*Jobs + Wozniak*'],
      ['Capital → Team → Unique Links', '*Elon Musk*'],
      ['Unique Links → Capital', '*Jeff Bezos*']
    ] },

    { t: 'grid', color: 'green', icon: '🌅', k: 'Odatlar ertadan boshlanadi', h: 'Har dars — *bitta odat*. 10 ta dars — 10 ta odat.', cols: 3, items: [
      { icon: '🚶', h: '10 000 qadam', p: 'Ertalab, har kuni. Sport — birinchi odat.' },
      { icon: '📖', h: 'Learning', p: 'Har kuni kitob — bilim richagi shu yerdan o\'sadi.' },
      { icon: '💰', h: 'Shaxsiy pul boshqaruvi', p: 'Daromad va xarajatni yozib boring.' },
      { icon: '📓', h: 'Logbook', p: 'Kun qaydlari — Obsidian, atomic notes.' },
      { icon: '🧘', h: 'Tafakkur', p: 'Har kuni o\'ylash uchun vaqt.' },
      { icon: '🗓️', h: 'Kun rejasi', p: 'Kechqurun yoki ertalab — Notion\'da rejalashtiring.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '1-dars yakunlandi · Keyingi dars: Shaxsiyat (Personality)' }
  ]
};

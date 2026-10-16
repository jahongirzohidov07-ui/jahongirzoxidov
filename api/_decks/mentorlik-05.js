'use strict';
/* Mentorlik (Shogirdlik) dasturi · 5-dars: Munosabatlar
   Manba: 5-dars munosabatlar.pptx (5 prinsip, qiyin payt, o'yin nazariyasi) + «Munosabatlar tahlili» (insholar asosida, 2 ta PDF)
   + Obsidian: «Uylanishga qiz tanlash cheklisti» (20 band), «Qanday yigitga turmushga chiqish kerak» (12 band),
   «Erkak va Ayol. Turmush. Ajrim. Xatolar. Saboqlar», «Turmush qurish».
   Qoida: muallif qaydlaridagi fikr, raqam va iqtiboslar o'zgartirilmaydi.
   Savol pardalari skript faylida: api/_scripts/mentorlik-05.js (S.q). */
module.exports = {
  slides: [
    /* 1 */ { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*5-dars* · Munosabatlar', name: 'Jahongir Zoxidov', role: 'Mentor' },

    /* 2 */ { t: 'ask', icon: '🤝', k: 'Boshlanish uchun savol', h: 'Hayotingizdagi eng muhim *3 ta munosabat* qaysi?', s: 'Ismini emas — kimligini ayting: ota-ona, do\'st, turmush o\'rtoq, ustoz…' },

    /* 3 */ { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d5-dostlar.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Munosabatlar — inson hayotining *eng markaziy ustuni*', s: 'Do\'stlar · Turmush o\'rtoq · Oila · Ustoz · Rahbar · Jamiyat' },

    /* 4 */ { t: 'steps', color: 'green', icon: '🧭', k: 'Bugungi reja', h: 'Bugun *6 ta bo\'lim*', all: true, items: [
      { n: '1', h: 'Prinsiplar', p: 'Hamma munosabatda ishlaydigan 5 qoida' },
      { n: '2', h: 'Do\'stlik', p: 'Qiyin payt, ishonch, status' },
      { n: '3', h: 'Turmush o\'rtoq', p: 'Yigit tanlash va qiz tanlash cheklistlari' },
      { n: '4', h: 'Oila va tarbiya', p: 'Ota-ona va farzand' },
      { n: '5', h: 'Ustoz va rahbar', p: 'Minnatdorchilik va hurmat' },
      { n: '6', h: 'Jamiyat', p: 'Mimesis — biz qanday ta\'sirlanamiz' }
    ] },

    /* ===== 1. Prinsiplar ===== */
    /* 5 */ { t: 'section', color: 'orange', icon: '🧭', n: '1', h: 'Prinsiplar', s: 'Barcha munosabatlarda ishlaydigan 5 ta qoida' },

    /* 6 */ { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d5-p1-gofirst.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '1 · Go first, go positive', h: '*Birinchi* bo\'lib yaxshilik qiling', items: [
      'Kutmang — salomni, yordamni, iliq so\'zni birinchi siz bering.',
      'Ijobiy boshlagan odam munosabatning ohangini belgilaydi.',
      'Berish — olishdan oldin keladi.'
    ], all: true },

    /* 7 */ { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d5-p2-perspective.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '2 · Perspective over perception', h: 'Taassurot emas — *nuqtai nazar*', items: [
      'Ko\'rganimiz — bizning taassurotimiz (*perception*). Boshqa odam boshqacha ko\'radi.',
      'Uning ko\'zi bilan qarang (*perspective*): nima uchun shunday qildi?',
      'Hukm chiqarishdan oldin — tushunishga harakat qiling.'
    ], all: true },

    /* 8 */ { t: 'photo', layout: 'split', color: 'green', img: '/assets/d5-p3-trust.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '3 · Trust comes first, everything else after', h: 'Avval *ishonch* — qolgani keyin', items: [
      'Ishonch yo\'q joyda hech narsa ishlamaydi: na biznes, na oila, na do\'stlik.',
      'Ishonch sekin quriladi — bir zumda buziladi.',
      'Va\'da — kichik bo\'lsa ham bajariladi.'
    ], all: true },

    /* 9 */ { t: 'photo', layout: 'split', color: 'red', img: '/assets/d5-p4-listening.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '4 · Listening well is a superpower', h: 'Yaxshi *tinglash* — superkuch', items: [
      'Odamlar o\'zini tinglagan odamni yaxshi ko\'radi.',
      'Gapirishga shoshilmang — savol bering, oxirigacha eshiting.',
      'Tinglagan odam ko\'proq biladi va ko\'proq ishonch qozonadi.'
    ], all: true },

    /* 10 */ { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d5-p5-relationships.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '5 · Relationships over transactions', h: 'Bitim emas — *munosabat*', items: [
      'Har uchrashuvdan darrov foyda izlamang.',
      'Uzoq muddatli munosabat — yuzta bir martalik bitimdan qimmat.',
      'Hisob-kitobsiz yaxshilik qiling.'
    ], all: true },

    /* ===== 2. Do'stlik ===== */
    /* 11 */ { t: 'section', color: 'blue', icon: '🧑‍🤝‍🧑', n: '2', h: 'Do\'stlik va ijtimoiy muhit', s: 'Do\'st qadri qachon seziladi?' },

    /* 12 */ { t: 'big', color: 'blue', icon: '🌫️', k: 'Via negativa', h: 'Do\'stlik o\'zini *yo\'qligida* his qildiradi', s: 'Uzoqlashganda yoki yaramas odamlarga yo\'liqqanda do\'stning qadri seziladi. Shuning uchun undan har doim rahmat eshitmasligimiz mumkin — lekin ta\'siri beqiyos. Dinimiz ham do\'stni yaxshi ko\'rsak, buni aytib qo\'yishga buyuradi.' },

    /* 13 */ { t: 'quote', color: 'green', k: 'Seneka · do\'st tanlash qoidasi', q: 'Do\'st tanlashdan oldin obdon surishtir va izlan. Tanlab bo\'ldingmi? Endi unga 100% ishon. Ishonch o\'rtacha bo\'lmaydi — 85% ishonch asli 0% ishonchdir.', by: 'Seneka' },

    /* 14 */ { t: 'quote', color: 'orange', k: 'Samimiy do\'stlik sharti', q: 'Do\'stlaring bo\'lishini xohlasang, biliming va pulingni yashirishing kerak. Chunki samimiy va teng suhbatlar faqat tenglar orasida kecha oladi.', by: 'Nassim Taleb' },

    /* 15 */ { t: 'vs', color: 'red', icon: '📏', k: 'Status kurashlari', h: 'Ichki *chizg\'ich* yo\'qolganda', all: true, a: { icon: '📢', h: 'Status kurashi', tone: 'bad', items: ['Suhbat — kim kimni taniydi, nima xarajat qildi', 'Birovning yutug\'iga chin dildan quvona olmaslik', '«U mendan o\'tib ketyapti» xavotiri', 'Soxta networking — manfaat uchun tanishish'] }, b: { icon: '💎', h: 'Haqiqiy do\'stlik', tone: 'good', items: ['O\'z statusini bildirishga urinmaydi', 'Bunday odam uchrasa — mahkam ushlang', 'Daromad do\'stlardan yashiriladi', 'Vaqt va qiyinchilik sinovidan o\'tgan rishta'] }, note: 'Sanoat inqilobi va ijtimoiy tarmoqlar ichki chizg\'ichni yo\'qotdi — *buyum va pul* status o\'lchoviga aylandi.' },

    /* 16 */ { t: 'photo', layout: 'full', color: 'red', img: '/assets/d5-bora.jpg', focus: 'center', k: 'Hard times will always reveal true friends', h: 'Qiyin payt — *haqiqiy do\'stni* ko\'rsatadi', s: 'Yaxshi kunda hamma yoningizda. Bo\'ron kelganda kim qoladi?' },

    /* 17 */ { t: 'vs', color: 'red', icon: '⚖️', k: 'Qiyin payt nima?', h: 'Qiyin payt — yaxshi davrda birga bo\'lish *emas*', a: { icon: '☕', h: 'Bu emas', tone: 'bad', items: ['Yaxshi davrda birga bo\'lish', 'Yaxshilikni bo\'lishish', 'Birga choyxonada o\'tirish', 'Birga kontrga borish', 'Birga vaqt o\'tkazish'] }, b: { icon: '🛡️', h: 'Bu', tone: 'good', items: ['Zararni bo\'lishish', 'Zararni o\'ziga ola olish', 'Unga umuman foyda bo\'lmay, nimadir kesish — hech bo\'lmasa vaqtini'] }, all: true },

    /* 18 */ { t: 'photo', layout: 'split', color: 'green', img: '/assets/d5-quchoq.jpg', focus: 'center', k: 'Haqiqiy do\'st', h: 'Zararni *bo\'lishadi*', items: [
      'Foyda emas — zararni bo\'lishadi.',
      'Kerak bo\'lsa zararni o\'ziga oladi.',
      'Hech qanday foyda kutmay, o\'zidan nimadir kesadi — hech bo\'lmasa vaqtini.'
    ], all: true },

    /* 19 */ { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d5-talpa.jpg', focus: 'center', k: 'Talpa', h: 'Talpa qilinganda *yo\'q*, talpa qilganda *bor*', items: [
      'Sizga talpa qilinganda — yoningizda yo\'q.',
      'Olomon bilan birga talpa qilganda — bor.',
      'Do\'stni olomon emas — *qiyinchilik* aniqlaydi.'
    ], all: true },

    /* 20 */ { t: 'stats', color: 'blue', icon: '🎲', k: 'O\'yin nazariyasi · o\'g\'rilik', h: 'Ikki sherik ushlandi', items: [
      { v: '$10 000', l: 'o\'lja' },
      { v: '1', l: 'qamoq · birinchi sherik' },
      { v: '2', l: 'qamoq · ikkinchi sherik' }
    ], note: 'Ikkovi alohida xonada. Tergovchi har biriga taklif qiladi: *«Sherigingni sot — ozod bo\'lasan.»*' },

    /* 21 */ { t: 'matrix', color: 'blue', k: 'Mahbus dilemmasi', h: 'Sherigingiz sizni *sotadimi*?', who: ['Siz', 'Sherik'], cols: [{ icon: '🤐', h: 'Sherik jim turadi' }, { icon: '🗣️', h: 'Sherik sotadi' }], rows: [{ icon: '🤐', h: 'Siz jim turasiz' }, { icon: '🗣️', h: 'Siz sotasiz' }], cells: [
      [{ a: '1 yil', b: '1 yil', tone: 'good', best: true }, { a: '3 yil', b: 'Ozod', ta: 'bad', tb: 'free' }],
      [{ a: 'Ozod', b: '3 yil', ta: 'free', tb: 'bad' }, { a: '2 yil', b: '2 yil', tone: 'bad' }]
    ], items: [
      'Bir martalik o\'yinda sotish «foydali» ko\'rinadi.',
      'Hayot — *takroriy o\'yin*: sotgan odam bilan ikkinchi marta hech kim o\'ynamaydi.',
      'Ishonch — uzoq o\'yinning yagona strategiyasi.'
    ] },

    /* 22 */ { t: 'grid', color: 'green', icon: '🔗', k: 'Integratsiya', h: 'Uchtasini bir vaqtda mukammal ushlab bo\'lmaydi — *ikkitasini* tanlaysiz', cols: 3, items: [
      { icon: '🚀', h: 'Shiddatli karyera', p: 'Kunning asosiy qismi — ishda.' },
      { icon: '🏡', h: 'Sakinatli oila', p: 'Vaqt va qalb talab qiladi.' },
      { icon: '🧑‍🤝‍🧑', h: 'Do\'stlar davrasi', p: 'Uchrashuv, suhbat, vaqt.' }
    ], note: 'Katta yoshda do\'st orttirishning eng barqaror yo\'li — *do\'stlar bilan ishlash va ishlaganlar bilan do\'stlashish*. Charli Manger ishxona tanlashda rahbar va hamkasblarga *havas qila olishni* birinchi o\'ringa qo\'yadi.' },

    /* 23 */ { t: 'vs', color: 'orange', icon: '📱', k: 'Bugungi muhit', h: 'Tana shu yerda — *xayol* boshqa olamda', all: true, a: { icon: '🏝️', h: 'Epistemik yolg\'izlik', tone: 'neutral', items: ['O\'z jismoniy muhitida (mahalla, kursdoshlar) umumiy mavzu topa olmaslik', 'Bu takabburlik emas — umumiy fikriy kontekstning yo\'qligi', 'Yechim: kitoblar, mutafakkirlar, fikrdoshlar — *parallel muhit*'] }, b: { icon: '🌐', h: 'Raqamli qabila', tone: 'gold', items: ['Inson yonidagi 5 kishining emas — eng ko\'p kuzatadigan *5 ta blogining* o\'rtachasi', 'Muhit asosan onlayn shakllanyapti', 'Dabdaba va oson pul kuzatilsa — status xavotiri ildiz otadi'] } },

    /* ===== 3. Turmush o'rtoq ===== */
    /* 24 */ { t: 'section', color: 'red', icon: '💍', n: '3', h: 'Turmush o\'rtoq', s: 'Hayotdagi eng katta tanlov' },

    /* 25 */ { t: 'stats', color: 'red', icon: '💔', k: 'Ajrashishlar', h: 'Raqamlar *ogohlantiradi*', items: [
      { v: '25 000', l: 'Nikoh rasman bekor', s: '2026-yilning 6 oyida (norasmiysi kamida 2 barobar)' },
      { v: '1/4', l: 'Har 4 nikohdan biri', s: 'ajrashish bilan yakunlanmoqda' },
      { v: '40/100', l: 'Ba\'zi joylarda', s: '100 tadan 40 tasi' }
    ], note: 'Hech kim ajrashaman deb turmush qurmaydi. Hamma *baxtli bo\'laman* deb quradi.' },

    /* 26 */ { t: 'vs', color: 'orange', icon: '📸', k: 'Instagram kutilmalari', h: 'Tasavvur — *begonalarning cho\'qqi lahzalaridan*', all: true, a: { icon: '☕', h: 'Instagram\'dagi oila', tone: 'bad', items: ['Tonggi qahva', 'Sayr', 'O\'yin-kulgi, sovg\'alar', 'Har kuni bayram'] }, b: { icon: '🏠', h: 'Haqiqiy oila', tone: 'good', items: ['Kompromisslar', 'Kasallik', 'Xo\'jalik yumushlari', 'Har kuni mehnat'] }, note: 'Yoshlar oila tasavvurini o\'z uyidan emas, tarmoqdagi begonalardan oladi — va realga *tayyor bo\'lmay* qoladi.' },

    /* 27 */ { t: 'big', color: 'red', icon: '🐄', k: 'Tanlovga ketadigan vaqt', h: '40–50 yil birga yashaydigan insonni tanlashga — bozorda *mol olishdan ham kam* vaqt sarflanadi', s: 'Mashinani tekshirishga ketadigan vaqt ham bo\'lajak turmush o\'rtoqni tekshirishga ketadigan vaqtdan ko\'p bo\'ladi.' },

    /* 28 */ { t: 'quote', color: 'blue', k: 'Turmush qurish', q: 'Turmush qurishdan oldin ko\'zlaringni katta och, keyin yarimini yop.', by: 'Benjamin Franklin' },

    /* 29 */ { t: 'big', color: 'green', icon: '🪞', k: 'Turmush qurish — o\'zini tanish', h: 'Hech kim *mukammal* emas', s: 'Mukammal turmush o\'rtoq xohlaydiganlar — hali o\'zini tanimaydiganlar. Yosh yigitlar chiroyga qaraydi, chunki boshqa mezoni yo\'q; yoshi kattalar xarakterga qaraydi.' },

    /* 30 */ { t: 'vs', color: 'blue', icon: '📝', k: 'Qog\'ozga yozing', h: 'Nimaga *ko\'z yuma olaman*, nimaga — yo\'q?', all: true, a: { icon: '🙂', h: 'Ko\'z yuma olaman', tone: 'good', items: ['Masalan: ovqatni yaxshi qila olmasligi', 'Sekinroq ish qilishi', '…o\'z ro\'yxatingiz'] }, b: { icon: '🚫', h: 'Ko\'z yuma olmayman', tone: 'bad', items: ['Masalan: o\'zinikini o\'tkazishga harakat qilaverishi', '…o\'z ro\'yxatingiz'] }, note: 'Bir marta emas — *butun umr* shunga rozi bo\'la olasizmi? Aniq va dangal yozib oling.' },

    /* 31 */ { t: 'steps', color: 'green', icon: '🔎', k: 'Juft tanlash tartibi', h: 'Avval o\'zingiz — keyin *savollar*', all: true, items: [
      { n: '1', h: 'O\'zingizni taning', p: 'Qanday juft menga mos? — o\'zini tanimagan odam hamma narsani mukammal xohlaydi.' },
      { n: '2', h: 'Ro\'yxat tuzing', p: 'Qaysi hislat bo\'lsin, qaysi kamchilikka ko\'z yumasiz, qaysisiga — yo\'q.' },
      { n: '3', h: 'Savollar tuzing', p: 'Uchrashuvda so\'rang yoki suhbat davomida so\'ramay aniqlang — ikkala tomon ham o\'zini yaxshi ko\'rsatadi.' }
    ] },

    /* 32 */ { t: 'grid', color: 'orange', icon: '🧭', k: 'Birlamchi shart', h: 'Dunyoqarash *bir xilligi*', cols: 3, items: [
      { icon: '🕌', h: 'Din', p: 'Diniy-konservativ va liberal — har kuni ziddiyat.' },
      { icon: '💰', h: 'Pul', p: 'Biri tejamkor, biri xarajatparast — ro\'zg\'orda janjal.' },
      { icon: '🛠️', h: 'Mehnat', p: 'Ishga, mas\'uliyatga qarash.' },
      { icon: '👶', h: 'Farzand tarbiyasi', p: 'Bolani qanday o\'stiramiz?' },
      { icon: '🌍', h: 'Dunyoqarash', p: 'Hayotdan nima kutamiz?' },
      { icon: '🤝', h: 'Fikrdoshlik', p: 'Millatdoshlik va qo\'shnichilikdan ustun turadi.' }
    ] },

    /* 33 */ { t: 'quote', color: 'green', k: 'Deyarli yuz yil yashagan odamning maslahati', q: 'Hayotdan va turmush o\'rtog\'idan kutilmalari kichik bo\'lganlar bilan turmush quring.', by: 'Charli Manger' },

    /* 34 */ { t: 'vs', color: 'red', icon: '⚖️', k: 'Hakam qayerda?', h: 'Hakami *ichkarida* bo\'lgan odamni tanlang', all: true, a: { icon: '🏆', h: 'Hakami tashqarida', tone: 'bad', items: ['Odamlarga yoqish uchun yashaydi', 'Ko\'z-ko\'z qilish uchun yashaydi', 'Turmush o\'rtoqni maqtanish uchun tanlaydi — *Trophy wife / husband*', 'Natija — ulkan fojia'] }, b: { icon: '🧭', h: 'Hakami ichkarida', tone: 'good', items: ['Xudodan qo\'rqadi', 'O\'z prinsiplari bor', 'Odamlar nima deydi — uni boshqarmaydi', 'Natija — barqaror oila'] } },

    /* 35 */ { t: 'duel', color: 'orange', k: 'Monaliza va Qumri', h: 'Chiroyli rasmmi yoki *sinalgan* inson?', a: { icon: '🖼️', h: 'Monaliza', p: 'Rassom chizgandek, faqat chiroyli rasmi ko\'rsatilayotgan nomzod.', tag: 'Bilmaysiz' }, b: { icon: '🕊️', h: 'Qumri', p: 'Qiyin va stress vaziyatlarda kuzatilgan nomzod.', tag: 'Afzalroq' }, prize: '💍', prizeLabel: 'Tanlov', winner: 'b', note: 'Insonni chiroyli paytida emas — *qiyin paytida* ko\'ring.' },

    /* 36 */ { t: 'big', color: 'blue', icon: '🌙', k: 'Hadicha onamiz (r.a.)', h: 'Muhimi — kimligi emas, *sizga qanday munosabatda* bo\'lishi', s: 'Darajalarini baland qilgan narsa — nasllari yoki chiroylari emas, erlariga podshohlardek munosabatlari va birinchilardan bo\'lib qo\'llab-quvvatlaganliklari edi.' },

    /* 37 */ { t: 'big', color: 'green', icon: '🛡️', k: 'Erkak mas\'uliyati', h: 'Erkak oilada ham *homiy*, ham *ustoz* bo\'la olsa — oila uzoqqa boradi', s: 'Ayol kishi har tomonlama — ilmda, axloqda, mas\'uliyatda — o\'zidan ustun bo\'lgan erkakka rozilik berishi xavfsizroq.' },

    /* 38 */ { t: 'stack', color: 'orange', k: 'Oila tayyor berilmaydi — u quriladi', h: 'Har kun — *bitta g\'isht*', s: 'Ajrashishlarning eng ko\'p qismi dastlabki *5 yilda* bo\'ladi — chunki oila binosi hali qurib bitkazilmagan.', axis: 'Yillar', books: ['Har bir suhbat', 'Nizo', 'Kechirish', 'Himmat', 'Yana suhbat', 'Yana kechirish'], top: 'Oila' },

    /* 39 */ { t: 'table', color: 'red', icon: '💞', k: 'Ayol va erkak psixologiyasi · 1', h: 'Ayolni *sev*. Erkakka *ishon*.', head: ['', 'Ayol', 'Erkak'], rows: [
      ['Gapirsa / sukut qilsa', 'Gapirsa — *eshitilishni* xohlaydi', 'Sukut qilganda — *tushunilishni*'],
      ['Sevsa', 'O\'zgaradi — avval qilmagan ishlarni qiladi', 'Yumshaydi — mehribon bo\'lib qoladi'],
      ['Baxti', 'Qadrlansa — *baxtli*', 'Ishonilsa — *xotirjam*'],
      ['Xohlaydi', '*E\'tibor*', '*Hurmat*'],
      ['Qo\'rqadi', 'E\'tiborsiz qolishdan', 'Keraksiz bo\'lib qolishdan'],
      ['Ranjisa', 'Chegarasini ko\'rsatadi', 'Yo\'q bo\'la boshlaydi']
    ] },

    /* 40 */ { t: 'table', color: 'blue', icon: '💞', k: 'Ayol va erkak psixologiyasi · 2', h: 'Qars *ikki qo\'ldan* chiqadi', head: ['', 'Ayol', 'Erkak'], rows: [
      ['Ko\'ngli soviydi', 'Hurmatsizlikdan', 'Noshukrlikdan'],
      ['Ko\'ngli zabt etiladi', '*Mehr* ila', '*Itoat* ila'],
      ['Sevgisini izhor qiladi', 'Itoati bilan', 'Rashki bilan'],
      ['Nizo paytida', 'Xafa bo\'ladi — *gaplashish* kerak', 'Jahli chiqadi — *tinch qo\'yish* kerak'],
      ['Nizoda xohlaydi', 'Gaplashib olishni', 'Tinchlikni — qochadi'],
      ['Tabiiy instinkti', '*Xavfsizlik*: moddiy va jismoniy', '—']
    ], note: 'Ikkala tomon o\'z qismini bajarsa — baxtli bo\'ladi. Biri bajarmasa ham baxtli bo\'lmaydi.' },

    /* 41 */ { t: 'checklist', color: 'blue', icon: '👰', k: 'Qizlar uchun cheklist', h: 'Qanday yigitga *turmushga chiqish* kerak', items: [
      { n: '1', h: 'Yigit emas — *farzandingizga ota* tanlang' },
      { n: '2', h: 'Taklifiga qarang: mashina, iPhone, Toshkent emas — *halol hayot*, dinning yarmi' },
      { n: '3', h: 'Ko\'p va\'da beradigandan ehtiyot bo\'ling' },
      { n: '4', h: 'Sizdan *ilmliroq*: aldamaydigan va aldanmaydigan' },
      { n: '5', h: 'Oilasi siznikidan teng yoki boyroq' },
      { n: '6', h: 'Bo\'yi sizdan baland bo\'lsin' },
      { n: '7', h: '*Mas\'uliyatli* — onasiga yuklamaydigan' },
      { n: '8', h: 'Uyda *ota boshliq* oila — dama-ko\'zir emas' },
      { n: '9', h: 'Farzandiga ona tanlayotgan — onasiga kelin emas' },
      { n: '10', h: '*Kitobxon* — uyida kichik bo\'lsa ham kutubxona' },
      { n: '11', h: '*Taqvodor* — 5 mahal namoz' },
      { n: '12', h: 'Eng muhimi — avval *o\'zingiz mos* bo\'ling' }
    ] },

    /* 42 */ { t: 'checklist', color: 'green', icon: '🤵', k: 'Yigitlar uchun cheklist · 1–10', h: 'Uylanishga *qiz tanlash*', items: [
      { n: '1', h: 'Kutuvlari past bo\'lsin — «halol yashasak bo\'ldi»' },
      { n: '2', h: 'Siz *eng yaxshi taniydigan* qizni tanlang' },
      { n: '3', h: 'Oilasini o\'rganing — akalari farzandingizning tog\'asi' },
      { n: '4', h: 'Oilasida *otaning gapi gap* — onasini ko\'rib qizini ol' },
      { n: '5', h: 'Xafa bo\'lib, o\'yin o\'ynab xohishiga erishmoqchi bo\'lsa — xayrlashing' },
      { n: '6', h: '*Kitob o\'qisin* — nimani o\'qishiga ham qarang' },
      { n: '7', h: 'Bolalarcha savollaringizga *javob bersin*' },
      { n: '8', h: '*Dindor* bo\'lsin — «Bugun bomdodga nechida azon aytdi?»' },
      { n: '9', h: 'Instagramda ko\'p o\'tirmasin — «Eng ko\'p kimni kuzatasiz?»' },
      { n: '10', h: '*Ko\'p farzand* xohlasin — «Nechta farzand xohlaysiz?»' }
    ] },

    /* 43 */ { t: 'checklist', color: 'orange', icon: '🤵', k: 'Yigitlar uchun cheklist · 11–20', h: 'Uylanishga *qiz tanlash*', items: [
      { n: '11', h: 'Bo\'lar-bo\'lmasga *rashk* qilmasin' },
      { n: '12', h: 'Ko\'zga tik qarab gapirmasin — *hayoli* bo\'lsin' },
      { n: '13', h: 'Moda va buyumga *mukkasidan ketmagan*' },
      { n: '14', h: '*Pozitiv* — hamma narsadan yomonlik topmasin' },
      { n: '15', h: '«Ajrashishdan qo\'rqmayman» demasin' },
      { n: '16', h: 'O\'zini sizdan baland yoki teng olmasin — *kibri* kam' },
      { n: '17', h: 'O\'z xohishini o\'tkazavermasin — *murosaga* oson kelsin' },
      { n: '18', h: '*Reaksiyalariga* qarang — ensasi qotmasin' },
      { n: '19', h: 'Mahrga uy, gelik so\'rasa — *uylanmang*' },
      { n: '20', h: '«Nega o\'qidingiz?» — «*Farzandimni tarbiyalash* uchun»' }
    ] },

    /* 44 */ { t: 'big', color: 'red', icon: '🤲', k: 'Eng muhim band', h: 'Loyiq bo\'lsangizgina *zo\'ri* keladi', s: 'Solihalar — solihlar uchun. Avval o\'zingiz shunday inson bo\'ling.' },

    /* ===== 4. Oila va tarbiya ===== */
    /* 45 */ { t: 'section', color: 'green', icon: '🏡', n: '4', h: 'Oila, ota-ona va farzand', s: 'Tarbiya qayerdan boshlanadi?' },

    /* 46 */ { t: 'big', color: 'orange', icon: '👑', k: 'Statusning oiladagi o\'rni', h: 'Uydan hurmat kelsa — ko\'chadan *kamroq* qidiramiz', s: 'Status nisbiy. Eng ko\'p vaqt o\'tkazadigan joyimizda — oilada — statusimiz yuqori bo\'lsa, sog\'lom ruhiyat uchun yetarli. Uydan hurmat to\'xtasa, odam ko\'chada yuzlab odamning hurmatini talab qila boshlaydi.' },

    /* 47 */ { t: 'quote', color: 'green', k: 'Tarbiyaning asosiy tamoyili', q: 'Qush ko\'rganini qiladi, eshitganini emas.', by: 'Farzandni isloh qilishning eng to\'g\'ri yo\'li — o\'zimizni isloh qilish' },

    /* 48 */ { t: 'vs', color: 'red', icon: '🪤', k: 'Al-Maktum tuzog\'i', h: '«Qiyin davrlar *kuchli* insonlarni, yengil davrlar *bo\'shashgan* insonlarni yetishtiradi»', all: true, a: { icon: '🧸', h: 'Al-Maktum tuzog\'i', tone: 'bad', items: ['Boyigan ota-ona bolani erkalatadi', 'Muammo otaning bitta qo\'ng\'irog\'i bilan hal bo\'ladi', 'Bola kelajakda murakkab loyihalarni eplay olmaydi'] }, b: { icon: '🛠️', h: 'To\'g\'ri yo\'l', tone: 'good', items: ['Ota-ona har qancha boy bo\'lsa ham mehnat va intizomni to\'xtatmaydi', 'Bolaga o\'z mehnati bilan natijaga erishishni o\'rgatadi'] } },

    /* 49 */ { t: 'big', color: 'blue', icon: '🌱', k: 'Ota-ona ishonchi', h: 'Bolaga bergan ishonch — uning kelajakdagi *ichki ishonchi*', s: 'Bolasiga ishonmagan ota-onaning farzandlari o\'zlariga ishonmaydigan, ikkilanuvchan bo\'lib ulg\'ayadi.' },

    /* 50 */ { t: 'big', color: 'green', icon: '🕰️', k: 'Ota-onaning konteksti', h: 'Ayblarini emas — *kontekstini* tushuning', s: 'Ota-onalarimiz o\'z davri va bilimi darajasida qo\'lidan kelgancha yaxshilik qilishgan. Qadriga tirikligida yeting, silai rahim qiling, duolarini oling — hayotga baraka olib keladi.' },

    /* 51 */ { t: 'big', color: 'orange', icon: '🙏', k: 'Minnatdorchilik', h: 'Ota-ona — ta\'siriga yarasha *rahmat eshitmaydigan* qatlam', s: 'Shuncha yaxshilik ko\'rib ham yil davomida kamdan-kam rahmat aytamiz. Qalbini og\'ritib ham, uzr so\'rashga botina olmaymiz.' },

    /* ===== 5. Ustoz va rahbar ===== */
    /* 52 */ { t: 'section', color: 'orange', icon: '🎓', n: '5', h: 'Ustoz-shogird va rahbar-xodim', s: 'Ta\'sir va minnatdorchilik' },

    /* 53 */ { t: 'cols', color: 'orange', k: 'Ustozlikdagi minnatdorchilik', h: 'Bir ustoz *20 bolani* o\'zgartirsa…', smallH: true, max: 22, step: 0.5, groups: [
      { x: 'O\'zgargan', sub: 'bolalar', v: 20, c: 'blue', top: '20' },
      { x: 'Sezgani', sub: 'o\'zgarganini', v: 10, c: 'green', top: '10' },
      { x: 'Manbani topgani', sub: 'kimdan ekanini', v: 5, c: 'orange', top: '5' },
      { x: 'Rahmat aytgani', sub: 'borib, yuziga', v: 1, c: 'red', top: '1', hl: true }
    ], side: { big: '2.5%', text: 'Xayoldagi minnatdorchilik — 100%. *Aytilgani — 2.5%*. Minnatdorchilikning aksari ustoz vafotidan keyin keladi.' } },

    /* 54 */ { t: 'vs', color: 'blue', icon: '🎓', k: 'Ustoz va konsultant', h: 'Ustoz javobni emas — *fikrlashni* beradi', all: true, a: { icon: '💼', h: 'Konsultant', tone: 'neutral', items: ['Javobni aytadi', 'Bir martalik maslahat', 'Ma\'lumot uzatadi'] }, b: { icon: '🧭', h: 'Haqiqiy ustoz', tone: 'good', items: ['Javob qayerdan kelib chiqqanini o\'rgatadi', 'Qanday fikrlash kerakligini o\'rgatadi', 'Uzoq muddatli — fikrlash tarzi o\'tadi'] }, note: 'Ustoz fikrlashini egallagan shogird har qanday yangi vaziyatda to\'g\'ri xulosaga kela oladi.' },

    /* 55 */ { t: 'steps', color: 'green', icon: '🔗', k: 'Ustoz tanlash · zanjir usuli', h: 'Ustozni nimaga qarab *tanlaysiz*?', all: true, items: [
      { n: '1', h: 'Rostgo\'yligi', p: 'Gapi bilan ishi bir xilmi?' },
      { n: '2', h: 'Amali', p: 'O\'zi aytganini qiladimi?' },
      { n: '3', h: 'Tavsiya — zanjir', p: 'Boshqa ishonchli ustozlar uni tavsiya qiladimi?' }
    ] },

    /* 56 */ { t: 'circles', color: 'green', k: 'Ustozning vaqti — millatning ilmi', h: 'Mas\'uliyat *halqasi*', s: 'Qadimda — Shekspir davrida ham, musulmon o\'lkalarda ham — ustozlar shogirdning oilasini shaxsan tanishgan.', rings: [
      { label: 'BOLA', h: 'Shogird', p: 'Markazda — bola' },
      { label: 'OTA-ONA', h: 'Oila', p: 'Ustozni taniydi, uning vaqtini asraydi' },
      { label: 'USTOZ', h: 'Ustoz', p: 'Oilani taniydi — mas\'uliyat halqasi yopiladi' }
    ] },

    /* 57 */ { t: 'big', color: 'red', icon: '📣', k: 'Rahbar va xodim', h: 'Rahbarning har bir so\'zi — kamida *10 ta odamga* ta\'sir qiladi', s: 'Odamlar ishga turli sabablar bilan keladi. Lekin ishdan ketishining eng asosiy sababi — rahbar bilan munosabatning yomonligi.' },

    /* 58 */ { t: 'stop', color: 'red', icon: '✋', h: 'Hurmat qilmaydigan rahbar qo\'lida *ishlamang*', s: 'Odamni odam o\'rnida ko\'rmaydigan, xodimiga bosim o\'tkazadigan kimsalar shaxsning qadr-qimmatini sindiradi.' },

    /* ===== 6. Jamiyat ===== */
    /* 59 */ { t: 'section', color: 'blue', icon: '🌐', n: '6', h: 'Jamiyat va ijtimoiy ta\'sir', s: 'Mimesis' },

    /* 60 */ { t: 'grid', color: 'blue', icon: '🦠', k: 'Mimesis', h: 'G\'oya, harakat va xohishlar — *yuqumli*', cols: 3, items: [
      { icon: '🐢', h: 'Sekin gapiradigan yonida', p: 'Biz ham sekinlashamiz.' },
      { icon: '🫡', h: 'Rostgo\'ylar yonida', p: 'Yolg\'on gapirishga qiynalamiz.' },
      { icon: '👶', h: 'Yosh bolalar ham', p: 'Harakatlarimizni bevosita boshqara oladi.' }
    ], note: 'Faqatgina odamlar odamlardan ta\'sirlanadi. Biz atrofimizga qarab *xohishlarimizni shakllantiramiz*.' },

    /* 61 */ { t: 'big', color: 'orange', icon: '🧠', k: 'Ko\'rinmas ta\'sir', h: '«O\'zimning mustaqil qarorim» — aslida *yuzlab insonning* bilvosita ta\'siri', s: 'Biz ko\'pincha ta\'sirlanayotganimizni anglamaymiz.' },

    /* 62 */ { t: 'grid', color: 'green', icon: '🌍', k: 'Jamiyatda munosabat', h: 'Uchta *xulosa*', cols: 3, items: [
      { icon: '✍️', h: 'Ijodkorlar uchun', p: 'Yuzingizga rahmat aytishmasa ham, asarlaringiz kimgadir ta\'sir qilyapti. Minnatdorchilikning aksari yashirin qoladi.' },
      { icon: '🏘️', h: 'Notanishlarga munosabat', p: 'Uzoqda ko\'p odamni bilish, raqamlar bilan yashash mehrni o\'ldiradi. Kichik jamoada uyat va mas\'uliyat saqlanadi.' },
      { icon: '💬', h: 'Oflayn va onlayn axloq', p: 'Yuzma-yuz ayta olmaydigan gapni izohda yozish — munosabatni sun\'iylashtiradi, hurmatni yo\'qotadi.' }
    ] },

    /* ===== Yakun ===== */
    /* 63 */ { t: 'table', color: 'green', icon: '📊', k: 'Qiyosiy tahlil', h: 'Har munosabatning *tuzog\'i* va *oltin qoidasi*', head: ['Munosabat', 'Asosiy xavf', 'Oltin qoida'], rows: [
      ['Do\'stlik', 'Mimetik poyga, ko\'z-ko\'z, soxta networking', 'Seneka va Taleb: bilim va pulni yashirish, *100% ishonish*'],
      ['Turmush o\'rtoq', 'Instagram kutilmalari, maqtanish uchun uylanish', 'Manger: *kutuvlari kichik*, dunyoqarashi bir xil'],
      ['Oila va tarbiya', 'Al-Maktum tuzog\'i (erkalatish)', '*O\'zimizni isloh qilish* — «Qush ko\'rganini qiladi»'],
      ['Ustoz-shogird', 'Ro\'zg\'or tashvishi bilan ustoz vaqtini band qilish', 'Ustoz xotirjamligi, *fikrlash tarzini* egallash']
    ] },

    /* 64 */ { t: 'big', color: 'blue', icon: '💎', k: 'Qurbonlik prizmasi', h: 'Qurbon qilingan joyda — *muhabbat* paydo bo\'ladi', s: 'Resurs, vaqt, diqqat va nafs qurbon qilingan joyda haqiqiy qadriyat paydo bo\'ladi. Do\'st, turmush o\'rtoq, farzand va ustoz uchun vaqtimiz va manfaatimizdan kecha olsak — munosabatlar mustahkamlanadi.' },

    /* 65 */ { t: 'big', color: 'red', icon: '🗝️', k: 'Xulosa o\'rnida', h: '«Odamlar nima deydi» — *tashqi hakamdan* qutuling', s: 'Tashqi hakamlarga qaramlikni to\'xtatib, o\'zimizning munosib inson ekanligimizni his qilsak — oila, do\'stlar va ustozlar bilan munosabatlarimiz shaffoflashadi.' },

    /* 66 */ { t: 'checklist', color: 'green', icon: '✅', k: 'Bugungi 7 xulosa', h: 'Esda qoladigan *7 qoida*', items: [
      { n: '1', h: '*Birinchi* bo\'lib yaxshilik qiling — bitim emas, munosabat' },
      { n: '2', h: 'Do\'stni *qiyin payt* ko\'rsatadi — zararni bo\'lishadi' },
      { n: '3', h: 'Tanladingizmi — *100% ishoning*; bilim va pulni yashiring' },
      { n: '4', h: 'Turmush — *o\'zini tanishdan* boshlanadi; kutuvlari kichikni tanlang' },
      { n: '5', h: '*Farzandga ota / ona* tanlang — avval o\'zingiz loyiq bo\'ling' },
      { n: '6', h: '*Qush ko\'rganini qiladi* — tarbiya o\'zimizdan boshlanadi' },
      { n: '7', h: 'Ustozga, ota-onaga *rahmatni hozir* ayting' }
    ] },

    /* 67 */ { t: 'steps', color: 'orange', icon: '📝', k: 'Uyga vazifa', h: 'Bu hafta *amalda*', all: true, items: [
      { n: '1', h: 'Qiyin payt ro\'yxati', p: 'Qiyin paytimda kim yonimda edi? Kimning yonida men bo\'lganman? Yozing.' },
      { n: '2', h: 'Go first', p: '3 kishiga birinchi bo\'lib yaxshilik qiling — kutmasdan.' },
      { n: '3', h: 'Ko\'z yuma olaman / olmayman', p: 'Bo\'lajak turmush o\'rtog\'ingiz uchun ikki ustunli ro\'yxatni oxiriga yetkazing.' },
      { n: '4', h: 'Rahmat', p: 'Ota-onangizga va bitta ustozingizga — yuzma-yuz yoki qo\'ng\'iroq qilib rahmat ayting.' },
      { n: '5', h: 'Tinglash', p: 'Bitta suhbatda faqat savol bering va tinglang — maslahat bermang.' }
    ] },

    /* 68 */ { t: 'end', icon: '🙌', h: 'Rahmat', s: '5-dars yakunlandi · Keyingi dars: 6-dars — Sog\'liq' }
  ]
};

'use strict';
/* TTP · 5-modul: Ichki ta'sir psixologiyasi */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*5-modul* · Ichki ta\'sir psixologiyasi', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'steps', color: 'orange', icon: '🎒', k: 'Sumka eksperimenti', h: 'Boshlashdan oldin: *kichik tajriba*', all: true, items: [
      { n: '1', h: 'Qog\'ozcha oling', p: 'Har bir kishi bitta so\'z sig\'adigan qog\'ozchadan kamida 2 ta, ko\'pi bilan 5 ta oladi.' },
      { n: '2', h: 'So\'z yozing', p: 'Har bir qog\'ozchaga xohlagan so\'zini yozadi: inglizcha, o\'zbekcha yoki ruscha.' },
      { n: '3', h: 'Takrorlash mumkin', p: 'Xohlasa bir so\'zni 1 marta, xohlasa 5 marta bir xil yozadi.' },
      { n: '4', h: 'Qopchaga soling', p: 'Har qanday so\'z bo\'lishi mumkin. Hammasini qopchaga solamiz.' }
    ] },

    { t: 'stats', color: 'blue', icon: '🔥', k: 'Kirish', h: 'Nega ichki ta\'sir *tashqi bosimdan* kuchli?', items: [
      { v: '90%', l: 'o\'quvchilar', s: 'ustozning so\'ziga emas, holatiga qaraydi' },
      { v: '3x', l: 'samaraliroq', s: 'ichki motivatsiya tashqi majburlashdan' },
      { v: '∞', l: 'davomiylik', s: 'ichki ta\'sirning umri' }
    ], note: 'Tashqi bosim o\'quvchini bir lahzaga harakatga keltiradi. *Ichki ta\'sir esa qalbida iz qoldiradi va umrbod yo\'l ko\'rsatadi.*' },

    { t: 'steps', color: 'green', icon: '🍞', k: 'Insonni harakatga keltiradigan 3 ta hissiyot', h: 'Birlamchi *ehtiyojlar*', all: true, items: [{ n: '🍞', h: 'Yeyish' }, { n: '💧', h: 'Ichish' }, { n: '🔥', h: 'Isinish' }] },

    { t: 'ask', icon: '🐾', k: 'Mulohaza', h: 'Inson va hayvon o\'rtasidagi *eng katta farq* nima?' },

    { t: 'vs', color: 'blue', icon: '🚧', k: 'Javob · chegara', h: '*Chegara* — inson va hayvon farqi', a: { icon: '🐺', h: 'Chegaralanmagan hayvon', tone: 'bad', items: ['Xohishlariga qul bo\'lib qoladi: tanlov, iroda, to\'xtash yo\'q', 'Instinkt buyuradi: och bo\'lsa yeydi, g\'azablansa tashlanadi', 'Tabiatidan chiqa olmaydi: xohishi — qonuni'] }, b: { icon: '🧘', h: 'Chegaralangan inson', tone: 'good', items: ['Ehtiyojlarini boshqara oladi: xohlagan vaqtida «yo\'q» deya oladi', 'Ong buyuradi: och bo\'lsa ham chidaydi, g\'azablansa to\'xtaydi', 'O\'zini o\'zgartira oladi: shaxsiyatini o\'zi quradi'] }, all: true, note: 'Ustozning vazifasi: *o\'quvchida xohishlarini boshqarish irodasini uyg\'otish.*' },

    { t: 'ask', icon: '💭', k: 'Mulohaza', h: 'Xohishlaringiz *nimaning* asosida yotadi?' },
    { t: 'big', color: 'red', icon: '😨', k: 'Javob', h: 'Xohishlaringiz asosida — *qo\'rquv.*', s: 'Har bir xohish ostida bir qo\'rquv yashiringan bo\'ladi. Keyingi savol: qo\'rquv nimaning asosida yotadi?' },
    { t: 'big', color: 'blue', icon: '🌌', k: 'Javob', h: 'Qo\'rquvingiz asosida — *tasavvur.*' },

    { t: 'domino', color: 'orange', k: 'Ustozlik formulasi', h: 'Tasavvurdan *o\'zgarishgacha* — zanjir', items: [
      { tag: '1', h: 'Tasavvur', p: 'Bola nimani tasavvur qiladi?' },
      { tag: '2', h: 'Qo\'rquv', p: 'Tasavvur qo\'rquvni tug\'diradi' },
      { tag: '3', h: 'Xohish', p: 'Qo\'rquv xohishni boshqaradi' },
      { tag: '4', h: 'O\'zgarish', p: 'Xohish harakatga aylanadi' }
    ], note: 'Bolaning tasavvuriga egalik qilsangiz, qo\'rquviga egalik qilasiz. Qo\'rquviga egalik qilsangiz, xohishlariga. Xohishlariga egalik qilganda *bolani o\'zgartira olasiz.*' },

    { t: 'ask', icon: '✋', k: 'Lekin to\'xtang…', h: 'Tasavvurni *uyg\'otadigan* narsa nima?', s: 'Tasavvurning o\'zini ham uyg\'otadigan nimadir bo\'lishi kerak. Ichki ta\'sirning eng chuqur qatlamiga yaqinlashyapmiz.' },

    { t: 'steps', color: 'green', icon: '🗝️', k: 'Javob', h: 'Tasavvurni uyg\'otadigan *3 kalit* — ustozning o\'zida', all: true, items: [
      { n: '🎵', h: 'Ohang', p: 'Ovozingizning balandligi, tezligi va ritmi. Ohang so\'zdan ko\'ra ko\'proq gapiradi.' },
      { n: '💛', h: 'Munosabat', p: 'Sizning emotsional ko\'rinishingiz, reaksiyangiz. U his qiladi.' },
      { n: '🙂', h: 'Mimika', p: 'Yuz ifodangiz, ko\'zingiz, tabassumingiz. Bola gapni emas, yuzingizni o\'qiydi.' }
    ], note: 'Bu uch narsani boshqargan ustoz *bolaning tasavvurini uyg\'ota oladi.*' },

    { t: 'bars', color: 'blue', icon: '🌬️', k: 'Amaliy mashq', h: 'To\'g\'ri nafas — *ustoz qurolining* asosi', rows: [
      { h: 'Nafas oling', p: '4 soniya burun orqali', w: '33%', v: '4 s', color: 'blue' },
      { h: 'Ushlab turing', p: '4 soniya nafasni ushlab', w: '66%', v: '4 s', color: 'green' },
      { h: 'Chiqaring', p: '4 soniya og\'iz orqali', w: '100%', v: '4 s', color: 'orange' }
    ], big: '×3', bigText: 'Har dars oldidan 3 marta takrorlang. Ohangingiz tinchiydi, mimikangiz muloyimlashadi, munosabatingiz chuqurlashadi. *Tinch nafas — tinch ustoz.*' },

    { t: 'vs', color: 'red', icon: '🔀', k: 'Asosiy g\'oya', h: 'Ikki xil yondashuv — *ikki xil natija*', a: { icon: '👊', h: 'An\'anaviy yondashuv', tone: 'bad', q: '«O\'qimasa — majbur qilamiz.»' }, b: { icon: '🔎', h: 'Pedagogik yondashuv', tone: 'good', q: '«O\'qimayapti — demak ichida bir joyda uzilish bor.»', p: 'Ustoz muammoning ildizini qidiradi: tashqi bosim bilan emas, ichki tushunish bilan ishlaydi.' }, all: true },

    { t: 'steps', color: 'orange', icon: '❓', k: 'Muhim savol', h: 'Kim biladi nima yaxshi, nima *yomonligini*?', all: true, items: [
      { n: '🧒', h: 'O\'quvchi o\'ziga nima yaxshi-yomonligini biladimi?', p: '→ Bilmaydi.' },
      { n: '👩‍🏫', h: 'Ustoz o\'quvchiga nima yaxshi-yomonligini biladimi?', p: '→ Bilmaydi.' }
    ] },

    { t: 'vs', color: 'green', icon: '🐼', k: 'Chuqurroq qarasak', h: 'Aslida o\'quvchi *biladi…*', a: { icon: '✅', h: 'Biladi', tone: 'good', items: ['Nima yoqishini', 'Nima qiziqtirishini', 'Nimaga intilayotganini'] }, b: { icon: '🧭', h: 'Bilmaydi', tone: 'neutral', items: ['Qaysi yo\'l bilan borishni', 'Qanday harakat qilishni', 'Nimadan boshlashni'] }, all: true, note: 'Misol: «Kung Fu Panda» multfilmi' },

    { t: 'vs', color: 'red', icon: '⏱️', k: 'Muammo', h: 'Lekin biz *bosim* beramiz', a: { icon: '🙈', h: 'E\'tiborsiz qolgan', tone: 'bad', items: ['Nima yoqishi', 'Nima qiziqishi', 'Ichki intilish'] }, b: { icon: '🏎️', h: 'Hamma narsadan muhimroq', tone: 'neutral', q: 'TEZ NATIJA', items: ['Ball. Reyting. Natija. Hozir.'] }, all: true, note: 'Natijada o\'quvchi o\'rganmaydi, faqat bajaradi. *Ichida qiziqish emas, qo\'rquv o\'sadi.*' },

    { t: 'vs', color: 'blue', icon: '🔥', k: 'Motivatsiya turlari', h: 'Ichki va *tashqi* motivatsiya', a: { icon: '🥕', h: 'Tashqi motivatsiya', tone: 'neutral', items: ['Baholar', 'Ota-onaning bosimi', 'Jazodan qo\'rquv', 'Mukofot'], p: 'Ta\'siri: qisqa muddatli, tez so\'nadi.' }, b: { icon: '🔥', h: 'Ichki motivatsiya', tone: 'good', items: ['Ma\'no his qilish', 'O\'zini qadrli sezish', 'Qiziqish', 'O\'zini sinab ko\'rish ehtiyoji'], p: 'Ta\'siri: uzoq muddatli, shaxsni o\'zi tortadi.' }, all: true, note: 'Ustozning asosiy maqsadi: tashqi bosim emas, *ichki yong\'inni yoqish.*' },

    { t: 'vs', color: 'orange', icon: '🏫', k: 'Vazifalar taqsimoti', h: 'Kim *nima uchun* javobgar?', a: { icon: '🏫', h: 'Maktab · tashqi motivatsiya', tone: 'neutral', items: ['Baholar tizimi', 'Jadval va reyting', 'Qoidalar va nazorat', 'Mukofot va jazo'] }, b: { icon: '👩‍🏫', h: 'Ustoz · ichki motivatsiya', tone: 'gold', items: ['Ma\'no his qildirish', 'Qiziqish uyg\'otish', 'Qadrli ekanligini sezdirish', 'Ichki olovni yoqish'] }, all: true, note: 'Katta xato: *maktablar ichki muammoni tashqi usul bilan hal qilmoqchi bo\'ladi.*' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/t-nihol.jpg', focus: 'center', k: 'Psixologik qurol · Overton tuynugi', h: 'Aytilgan so\'z — miyada *ekilgan urug\'*', items: [
      '*Yo\'q narsa* — inson hayolida bu fikr umuman yo\'q. Miyada hech qanday izi ham yo\'q.',
      '*Aytildi* — siz bu haqida gapirasiz. So\'z miyaga tushadi: urug\' ekildi.',
      '*O\'ylab yuradi* — endi u bu fikrni tez-tez eslaydi. Urug\' unib, dunyoqarashga aylanadi.',
      'Shuning uchun ustoz nima gapirishini bilishi kerak: *har bir so\'z miyada urug\' qoldiradi.*'
    ], all: true },

    { t: 'vs', color: 'red', icon: '👮', k: 'Ustoz roli', h: 'Bir vaqtda *ikki rolni* o\'ynab bo\'lmaydi', a: { icon: '😠', h: 'Yomon cop', tone: 'bad', items: ['Qattiqlik. Bosim. Tanbeh.', 'Qo\'rquvga tayanadi.'] }, b: { icon: '😊', h: 'Yaxshi cop', tone: 'good', items: ['Yumshoqlik. Empatiya. Maqtov.', 'Ishonchga tayanadi.'] }, all: true, note: 'Bittasini tanlang va shu rolni izchil olib boring. *O\'quvchi aralash signalni tushunmaydi.*' },

    { t: 'bars', color: 'blue', icon: '📊', k: 'Maktab amaliyoti · NPS', h: 'Ustozlarni *qanday* baholaymiz?', rows: [
      { h: '0', p: 'Hech qachon tavsiya qilmayman', w: '10%', v: '0', color: 'red' },
      { h: '5', p: 'Bilmadim', w: '55%', v: '5', color: 'orange' },
      { h: '10', p: 'Albatta tavsiya qilaman', w: '100%', v: '10', color: 'green' }
    ], note: 'Savol: *«Ustozingizni do\'stlaringizga tavsiya qilasizmi?»* O\'quvchilar ustozini qanchalik yaxshi ko\'rishi — ustozning asosiy bahosi. Yaxshi ustoz bilim beradi, ajoyib ustoz yuragida iz qoldiradi.' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/t-dars.jpg', focus: 'center', k: 'Fidoyilik belgisi', h: '«Eng yaxshi ustoz — oyog\'ida *varikoz* bor ustozdir»', items: [
      '*Tik turadi* — har bir o\'quvchi ko\'rsin, eshitsin, sezsin.',
      '*Harakatda* — sinf bo\'ylab yuradi, hech kim e\'tibordan chetda qolmaydi.',
      '*Jonli* — ovozi, imo-ishorasi, nigohi bilan o\'quvchini ushlab turadi.',
      'Chunki u dars o\'tayotganda hech qachon o\'tirmaydi. Varikoz jarohat emas, *mehnat belgisi.*'
    ], all: true },

    { t: 'tree', color: 'green', k: 'Amaliy strategiya', h: 'Uy vazifasining sirli kuchi: *uch tomonlama ko\'prik*', s: 'Agar bola va ota-ona o\'rtasida kontaktni ulay olsangiz, siz yutdingiz.', root: { icon: '📚', label: 'Uy vazifasi' }, kids: [{ icon: '🧒', label: 'Mustaqil o\'rganish' }, { icon: '👨‍👩‍👧', label: 'Ota-ona ishtiroki' }, { icon: '🌉', label: 'Bog\'lanish ko\'prigi' }], items: [
      'Bola uyda ishlashga, o\'zini tashkillashtirish ko\'nikmasiga o\'rganadi.',
      'Ota-ona bolaning ta\'lim jarayoniga faol jalb qilinadi: kuzatuvchi emas, hamkor.',
      'Ota-ona va bola birga vaqt o\'tkazadi, vazifa bahonasida yurak-yurakka tutashadi.'
    ] },

    { t: 'section', color: 'red', icon: '🧒', n: '5', h: '«Qiyin bola» ortidagi 5 sabab', s: 'Ustoz bu sabablarni bilsa, jazolash ehtiyoji 70% ga kamayadi' },

    { t: 'grid', color: 'red', icon: '🔍', k: 'Chuqurroq qarash', h: '«Qiyin bola» ortidagi *5 asosiy sabab*', cols: 5, items: [
      { icon: '👀', h: 'E\'tibor ochligi', p: '«Meni ko\'ring» degan baqiriq' },
      { icon: '🥱', h: 'Qobiliyatdan past talab', p: 'Zerikish, qiziqish yo\'qligi' },
      { icon: '🏠', h: 'Uy muammolari', p: 'Oiladagi tang vaziyat sinfga ko\'chadi' },
      { icon: '❓', h: 'Ma\'no yo\'qligi', p: '«Nima uchun o\'qiyman?» — javob yo\'q' },
      { icon: '🪞', h: 'O\'zini shaxs sifatida ko\'rmaslik', p: 'O\'z qadrini bilmaydi, izlaydi' }
    ], note: 'Ustoz bu sabablarni bilsa, jazolash ehtiyoji *70% ga kamayadi.*' },

    { t: 'vs', color: 'orange', icon: '👀', k: '1-sabab · chuqurroq', h: '*E\'tibor* ochligi', a: { icon: '📢', h: 'Biz ko\'ramiz', tone: 'neutral', q: 'Bola darsda bezovta.' }, b: { icon: '🫶', h: 'Aslida u aytmoqchi', tone: 'gold', q: '«Meni ko\'ring.»' }, all: true, note: 'Sinfda shovqin ko\'p qiladigan bola eng ko\'p gapiradigan emas, eng ko\'p *sezilmayotgan* bola bo\'lishi mumkin. Shovqin yomon xulq emas, e\'tibor so\'rash usuli. Javob: baqirish emas, ko\'rish.' },

    { t: 'steps', color: 'blue', icon: '🎤', k: 'Amaliy yechim', h: 'Gapirmaydigan bolalarni nima qilish kerak? *Debat!*', all: true, items: [
      { n: '⚔️', h: 'Mavqe himoyasi', p: 'O\'z fikrini himoya qilish kerak, indamay qololmaydi' },
      { n: '⭐', h: 'Qiziqish uyg\'onadi', p: 'Bahslashish hissiyotni qo\'zg\'aydi, e\'tibor uyg\'onadi' },
      { n: '🗣️', h: 'Ovoz topadi', p: 'Kichik g\'alaba bilan o\'ziga ishonch tug\'iladi' }
    ], note: 'Muammo: bola indamaydi, javob bermaydi, o\'zini chetga tortadi. Yechim: debat tashkil qiling. *Fikrlashga majbur qiling, gap o\'zi keladi.*' },

    { t: 'big', color: 'green', icon: '🌤️', k: 'Ustoz manifesti', h: 'Men bolani o\'zgartirmayman. Men *sharoitni* o\'zgartiraman. Bola o\'zi o\'zgaradi.', s: 'Ichki ta\'sir psixologiyasining mohiyati' },

    { t: 'steps', color: 'orange', icon: '🛡️', k: '2-sabab · chuqurroq', h: 'Qobiliyatdan past talab: *himoya* qanday ko\'rinadi?', all: true, items: [
      { n: '😂', h: 'Masxara', p: 'Hazilga aylantiradi, jiddiy qabul qilmaydi.' },
      { n: '😐', h: 'Befarqlik', p: '«Menga qiziq emas» degandek tutadi.' },
      { n: '⚡', h: 'Tajovuz', p: 'Baqiradi, janjal qiladi, diqqatni chalg\'itadi.' }
    ], note: 'Bola ichida o\'ylaydi: «Baribir eplay olmayman.» Himoya mexanizmi yoqiladi: *«Men harakat qilmayman, shunda yutqazmayman.»*' },

    { t: 'duel', color: 'green', k: 'Izchillik haqida', h: 'Quyon va Toshbaqa — *haqiqatan* to\'g\'ri', a: { icon: '🐇', h: 'Quyon', p: 'O\'rtacha tezlik 5 km/soat · Umri ~3 yil · Bosib o\'tgan yo\'l ~10 000 km', tag: '10 000 km' }, b: { img: '/assets/t-toshbaqa.jpg', h: 'Toshbaqa', p: 'O\'rtacha tezlik 0.3 km/soat · Umri ~100 yil · Bosib o\'tgan yo\'l 50 000+ km', tag: '50 000+ km' }, prize: '50 000 km', prizeLabel: 'Bosib o\'tgan yo\'l', winner: 'b', note: 'Raqamlar hikoyaning ma\'nosini tasdiqlaydi. *Jiyan tog\'asidan o\'tib ketadi, agar o\'zini tezligiga qo\'yib bersa.*' },

    { t: 'vs', color: 'red', icon: '🏠', k: '3-sabab · chuqurroq', h: '*Uy* muammolari', a: { icon: '💔', h: 'Uyda nima bo\'lishi mumkin?', tone: 'bad', items: ['Ajralish: ota-ona orasidagi uzilish', 'Bosim: doimiy tanqid, talab, aybdor qilish', 'Solishtirish: «Falonchi qara, sen-chi…»', 'Kamsitish: so\'z bilan yoki indamay haqorat'] }, b: { icon: '🏫', h: 'Sinfda ko\'rinadi', tone: 'neutral', items: ['Sinfda: agressiya, janjal, urishqoqlik', 'Uyda: yig\'layotgan, qo\'rqayotgan bola'] }, all: true, note: '*Sinfdagi agressiv bola — uyda yig\'lab yurgan boladir.* Muammoning manbai sinfda emas.' },

    { t: 'vs', color: 'blue', icon: '⚖️', k: 'Ustozning kamtarligi', h: 'Xulosa chiqaring, *hukm qilmang*', a: { icon: '🔍', h: 'Xulosa chiqaring', tone: 'good', items: ['Kuzating, tahlil qiling, tushunishga urining', 'Bu sizning haqqingiz va vazifangiz'] }, b: { icon: '🔨', h: 'Hukm qilmang', tone: 'bad', items: ['Hukm siz va mening qo\'limda emas', 'Bolaning taqdirini bugun yopmang'] }, all: true, note: '«Boshini ko\'rmagan va oxirini bilmaydigan odam bugun uchun hukm chiqarmasligi kerak.»' },

    { t: 'vs', color: 'orange', icon: '❓', k: '4-sabab · chuqurroq', h: 'Ma\'no yo\'qligi: *«Bu menga nima beradi?»*', a: { icon: '🙅', h: 'Noto\'g\'ri javob', tone: 'bad', q: '«Shart, chunki men aytyapman.»' }, b: { icon: '🗺️', h: 'To\'g\'ri javob', tone: 'good', q: '«Mana shu narsa sening hayotingda nimaga kerak bo\'lishini ko\'rsataman.»' }, all: true, note: 'Bola o\'ziga savol beradi, javob topilmaydi. Mantiq yo\'q, ma\'no yo\'q.' },

    { t: 'vs', color: 'red', icon: '🪞', k: '5-sabab · chuqurroq', h: 'O\'zini *shaxs* sifatida ko\'rmaslik', a: { icon: '🌟', h: 'Haqiqiy bola', tone: 'gold', items: ['Qiziqishlari, tuyg\'ulari, orzulari', 'Iste\'dodlari, fikrlari, kelajagi', 'Ismi, hayoti, shaxsiyati, qalbi'] }, b: { icon: '2️⃣', h: 'Bola o\'zini ko\'radi', tone: 'bad', q: '«Men faqat… BAHO…dan iboratman.»', p: 'Hamma narsa o\'chiriladi. Past baho «men yomonman» degan tushuncha bo\'lib qoladi.' }, all: true, note: 'Ustozning vazifasi bolaga aytish: *«Sen baho emassan, sen shaxssan.»*' },

    { t: 'vs', color: 'blue', icon: '⚰️', k: 'Metafora', h: 'O\'quvchiga bosim bermaymiz, uni *ko\'tarishga* yordam beramiz', a: { icon: '⚰️', h: 'Bosim', tone: 'bad', q: '«Bosim — bu tobut. Tobutni bir kishi ko\'tara olmaydi.»', p: 'Bola uchun og\'ir yuk. U ostida ezilib qoladi, bir o\'zi ko\'tara olmaydi.' }, b: { icon: '🤝', h: 'Yordam', tone: 'good', q: 'Ustoz yelka tutadi.', p: 'Birga ko\'taramiz va bola olg\'a yuradi.' }, all: true },

    { t: 'flow', color: 'green', icon: '🧩', k: 'Model · 4 bosqichli texnika', h: 'Jazolash o\'rniga — *ta\'sir qilish*', items: ['✋ To\'xtatish, jazolamasdan', '❓ Ochiq savol, sababni bilish', '👂 Tan olish, bolani eshitish', '🎯 Kichik mas\'uliyat'], all: true, note: '«Hozir seni jazolamayman, tushunmoqchiman.» → «Senga qiyin bo\'layaptimi yoki qiziq emasmi?» → «Seni tushundim, demak bu yerda muammo bor.» → «Bugun faqat 1 topshiriqni qil.» Bola ichida: «Meni jazolashmadi → meni odam deb ko\'rishyapti.» *Shu joyda ichki motivatsiya boshlanadi.*' },

    { t: 'grid', color: 'red', icon: '⚠️', k: 'Ehtiyot bo\'ling', h: 'Ustozlar yo\'l qo\'yadigan *5 ta xato*', cols: 5, items: [
      { icon: '🧱', h: 'Hamma bilan bir xil muomala', p: 'Har bir o\'quvchi alohida olam. Umumiy qolip ishlamaydi.' },
      { icon: '🏁', h: 'Faqat natijani ko\'rish', p: 'Jarayondagi kuch va o\'sishni e\'tibordan qochirish motivatsiyani o\'ldiradi.' },
      { icon: '🗣️', h: 'Gapirish eshitishdan ko\'p', p: 'Ustoz 80% vaqtda gapirsa, o\'quvchi 80% vaqtda passiv bo\'ladi.' },
      { icon: '🔨', h: 'Xatoni jazolash', p: 'Xato o\'qish imkoniyati. Jazo bu imkoniyatni yopadi.' },
      { icon: '🎭', h: 'Soxta hayajon va rol', p: 'O\'quvchilar soxtalikni darhol sezadi. Samimiylik asos.' }
    ] },

    { t: 'grid', color: 'green', icon: '🧰', k: 'Amaliyot · pedagogik texnikalar', h: 'Sinfda ishlaydigan *5 ta real texnika*', cols: 5, items: [
      { icon: '🏅', h: 'Mikro g\'alaba usuli', p: 'Kichik yutuq beriladi' },
      { icon: '🎯', h: 'Shaxsiy maqsad savoli', p: 'O\'ziga qarata savol' },
      { icon: '👏', h: 'Ochiq tan olish', p: 'Shaxsiy sifat maqtaladi' },
      { icon: '🔀', h: 'Tanlov berish', p: 'Erkinlik hissi' },
      { icon: '🎖️', h: 'Rol berish', p: 'Keraklilik hissi' }
    ], note: 'Har bir texnika bolaning *ichki motivatsiyasini* uyg\'otish uchun.' },

    { t: 'vs', color: 'orange', icon: '🏅', k: 'Texnika 1 · amaliyot', h: '*Mikro g\'alaba* usuli', a: { icon: '💡', h: 'Mohiyati', tone: 'gold', q: 'Eng sust bolaga ham juda kichik yutuq berish.' }, b: { icon: '✅', h: 'Misollar', tone: 'good', items: ['1 ta to\'g\'ri misol', '1 ta yaxshi savol', 'Toza yozilgan daftar', 'Vaqtida kelgani'] }, all: true, note: 'Bola ichida: *«Men ham uddalay olar ekanman.»* Birinchi ichki ishonch shu yerda tug\'iladi.' },

    { t: 'quote', color: 'blue', k: 'Texnika 2 · shaxsiy maqsad savoli · har oy', q: 'Bu oy o\'zing uchun nimani yaxshilamoqchisan?', by: 'Asosiy qoida: bahoga emas, o\'ziga qarata savol. Bola ichida maqsad tug\'iladi' },

    { t: 'vs', color: 'green', icon: '👏', k: 'Texnika 3 · ochiq tan olish', h: '«Bugun sen juda *yaxshi savol* berding.»', a: { icon: '5️⃣', h: 'Bahoni maqtash', tone: 'bad', q: '«5 olding, barakalla.»' }, b: { icon: '🧠', h: 'Sifatni maqtash', tone: 'good', q: '«Sen yaxshi o\'ylaysan.»' }, all: true, note: 'Bola ichida: «Mendagi sifat ko\'rinyapti.» *Baho emas, shaxsiy sifatni maqtash bolaning qalbiga yetadi.*' },

    { t: 'vs', color: 'orange', icon: '🔀', k: 'Texnika 4 · tanlov berish', h: 'Nazorat ustoz qo\'lida, *erkinlik* bola qo\'lida', a: { icon: '✍️', h: 'Variant A', tone: 'neutral', q: '«Yozma qilaman»' }, b: { icon: '🗣️', h: 'Variant B', tone: 'neutral', q: '«Og\'zaki tushuntiraman»' }, all: true, note: 'Bola ichida: *«Ustoz menga ishonadi, men tanlayman.»* Nazorat qoladi, lekin erkinlik hissi paydo bo\'ladi.' },

    { t: 'steps', color: 'blue', icon: '🎖️', k: 'Texnika 5 · rol berish', h: 'Eng muammoli bolaga *mas\'uliyat* bering', all: true, items: [
      { n: '💻', h: 'Texnik yordamchi' }, { n: '👑', h: 'Guruh sardori' }, { n: '🧹', h: 'Doska nazoratchisi' }
    ], note: 'Ayniqsa «kuchli» bolalarga. *«Yordamchi qilib olib, muammodan qutulasiz.»*' },

    { t: 'vs', color: 'red', icon: '🧭', k: 'Darsning tub mohiyati', h: 'Insonni harakatga keltiradigan kuch — qo\'rquv emas, *ma\'no*', a: { icon: '🔨', h: 'Jazolovchi ustoz', tone: 'bad', items: ['Baho markazli sinf', 'Qo\'rquv → xohish → ehtiyoj'] }, b: { icon: '🧭', h: 'Yo\'lboshchi ustoz', tone: 'good', items: ['Inson markazli muhit', 'Ma\'no → qiziqish → o\'sish'] }, all: true, note: '*Ustoz — bilim beruvchi emas, ma\'no uyg\'otuvchi shaxs.*' },

    { t: 'steps', color: 'green', icon: '🔧', k: 'Ustoz manifesti', h: 'Siz *nimani* o\'zgartirasiz?', all: true, items: [{ n: '🏃', h: 'Harakatni' }, { n: '🌡️', h: 'Holatni' }, { n: '🏠', h: 'Sharoitni' }, { n: '🤝', h: 'Munosabatni' }], note: '*Bolani emas.* Bolani o\'zgartirishga harakat qildingizmi, o\'zgartira olmaysiz. Men sharoitni o\'zgartiraman, bola o\'zi o\'zgaradi.' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-deraza-bola.jpg', focus: 'center', k: 'Qayta qarash', h: 'Muammo — xulq emas, *signal*', s: '+ Ko\'proq savol · − Kamroq hukm · + Ko\'proq tinglash. «Bola qarshilik qilsa, demak ichida og\'riq bor.» «Tartibni sindirayotgan bola o\'zini himoya qilyapti.»' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '5-modul yakunlandi · Keyingi: 6-modul — Ustozning muloqot psixologiyasi' }
  ]
};

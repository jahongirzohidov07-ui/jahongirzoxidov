'use strict';
/* TTP · 5-modul: Ichki ta'sir psixologiyasi */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 5-modul', h: 'Ichki ta\'sir psixologiyasi', s: 'O\'quvchiga ichidan ta\'sir qilish san\'ati', meta: 'Jahongir Zoxidov' },

    { t: 'bullets', k: 'Sumka eksperimenti', h: 'Boshlashdan oldin: kichik tajriba', items: [
      'Har bir kishi bitta so\'z sig\'adigan qog\'ozchadan kamida 2 ta, ko\'pi bilan 5 ta oladi',
      'Har bir qog\'ozchaga xohlagan so\'zini yozadi: inglizcha, o\'zbekcha yoki ruscha',
      'Xohlasa bir so\'zni 1 marta, xohlasa 5 marta bir xil yozadi',
      'Har qanday so\'z bo\'lishi mumkin. Hammasini qopchaga solamiz'
    ] },

    { t: 'stats', k: 'Kirish', h: 'Nega ichki ta\'sir tashqi bosimdan kuchli?', items: [
      { v: '90%', l: 'o\'quvchilar', s: 'ustozning so\'ziga emas, holatiga qaraydi' },
      { v: '3x', l: 'samaraliroq', s: 'ichki motivatsiya tashqi majburlashdan' },
      { v: '∞', l: 'davomiylik', s: 'ichki ta\'sirning umri' }
    ], note: 'Tashqi bosim o\'quvchini bir lahzaga harakatga keltiradi. *Ichki ta\'sir esa qalbida iz qoldiradi va umrbod yo\'l ko\'rsatadi.*' },

    { t: 'steps', k: 'Insonni harakatga keltiradigan 3 ta hissiyot', h: 'Birlamchi ehtiyojlar', all: true, items: [{ h: 'Yeyish' }, { h: 'Ichish' }, { h: 'Isinish' }] },

    { t: 'ask', k: 'Mulohaza', h: 'Inson va hayvon o\'rtasidagi eng katta farq nima?' },

    { t: 'vs', k: 'Javob · chegara', h: 'Chegara — inson va hayvon farqi', a: { h: 'Chegaralanmagan hayvon', tone: 'bad', items: ['Xohishlariga qul bo\'lib qoladi: tanlov, iroda, to\'xtash yo\'q', 'Instinkt buyuradi: och bo\'lsa yeydi, g\'azablansa tashlanadi', 'Tabiatidan chiqa olmaydi: xohishi — qonuni'] }, b: { h: 'Chegaralangan inson', tone: 'good', items: ['Ehtiyojlarini boshqara oladi: xohlagan vaqtida «yo\'q» deya oladi', 'Ong buyuradi: och bo\'lsa ham chidaydi, g\'azablansa to\'xtaydi', 'O\'zini o\'zgartira oladi: shaxsiyatini o\'zi quradi'] }, note: 'Ustozning vazifasi: *o\'quvchida xohishlarini boshqarish irodasini uyg\'otish.*' },

    { t: 'ask', k: 'Mulohaza', h: 'Xohishlaringiz nimaning asosida yotadi?' },
    { t: 'big', k: 'Javob', h: 'Xohishlaringiz asosida — *qo\'rquv.*', s: 'Har bir xohish ostida bir qo\'rquv yashiringan bo\'ladi. Keyingi savol: qo\'rquv nimaning asosida yotadi?' },
    { t: 'big', k: 'Javob', h: 'Qo\'rquvingiz asosida — *tasavvur.*' },

    { t: 'flow', k: 'Ustozlik formulasi', h: 'Tasavvurdan o\'zgarishgacha', items: ['Tasavvur', 'Qo\'rquv', 'Xohish', 'O\'zgarish'], note: 'Bolaning tasavvuriga egalik qilsangiz, qo\'rquviga egalik qilasiz. Qo\'rquviga egalik qilsangiz, xohishlariga. Xohishlariga egalik qilganda *bolani o\'zgartira olasiz.*' },

    { t: 'ask', k: 'Lekin to\'xtang…', h: 'Tasavvurni uyg\'otadigan narsa nima?', s: 'Tasavvurning o\'zini ham uyg\'otadigan nimadir bo\'lishi kerak. Ichki ta\'sirning eng chuqur qatlamiga yaqinlashyapmiz.' },

    { t: 'steps', k: 'Javob', h: 'Tasavvurni uyg\'otadigan 3 kalit — ustozning o\'zida', items: [
      { h: 'Ohang', p: 'Ovozingizning balandligi, tezligi va ritmi. Ohang so\'zdan ko\'ra ko\'proq gapiradi.' },
      { h: 'Munosabat', p: 'Sizning emotsional ko\'rinishingiz, reaksiyangiz. U his qiladi.' },
      { h: 'Mimika', p: 'Yuz ifodangiz, ko\'zingiz, tabassumingiz. Bola gapni emas, yuzingizni o\'qiydi.' }
    ], note: 'Bu uch narsani boshqargan ustoz *bolaning tasavvurini uyg\'ota oladi.*' },

    { t: 'steps', k: 'Amaliy mashq', h: 'To\'g\'ri nafas — ustoz qurolining asosi', all: true, items: [
      { n: '4', h: 'Nafas oling', p: '4 soniya burun orqali' },
      { n: '4', h: 'Ushlab turing', p: '4 soniya nafasni ushlab' },
      { n: '4', h: 'Chiqaring', p: '4 soniya og\'iz orqali' }
    ], note: 'Har dars oldidan 3 marta takrorlang. Ohangingiz tinchiydi, mimikangiz muloyimlashadi, munosabatingiz chuqurlashadi. *Tinch nafas — tinch ustoz.*' },

    { t: 'vs', k: 'Asosiy g\'oya', h: 'Ikki xil yondashuv — ikki xil natija', a: { h: 'An\'anaviy yondashuv', tone: 'bad', q: '«O\'qimasa — majbur qilamiz.»' }, b: { h: 'Pedagogik yondashuv', tone: 'good', q: '«O\'qimayapti — demak ichida bir joyda uzilish bor.»', p: 'Ustoz muammoning ildizini qidiradi: tashqi bosim bilan emas, ichki tushunish bilan ishlaydi.' } },

    { t: 'steps', k: 'Muhim savol', h: 'Kim biladi nima yaxshi, nima yomonligini?', items: [
      { h: 'O\'quvchi o\'ziga nima yaxshi-yomonligini biladimi?', p: '→ Bilmaydi.' },
      { h: 'Ustoz o\'quvchiga nima yaxshi-yomonligini biladimi?', p: '→ Bilmaydi.' }
    ] },

    { t: 'vs', k: 'Chuqurroq qarasak', h: 'Aslida o\'quvchi biladi…', a: { h: 'Biladi', tone: 'good', items: ['Nima yoqishini', 'Nima qiziqtirishini', 'Nimaga intilayotganini'] }, b: { h: 'Bilmaydi', tone: 'neutral', items: ['Qaysi yo\'l bilan borishni', 'Qanday harakat qilishni', 'Nimadan boshlashni'] }, note: 'Misol: «Kung Fu Panda» multfilmi' },

    { t: 'vs', k: 'Muammo', h: 'Lekin biz bosim beramiz', a: { h: 'E\'tiborsiz qolgan', tone: 'bad', items: ['Nima yoqishi', 'Nima qiziqishi', 'Ichki intilish'] }, b: { h: 'Hamma narsadan muhimroq', tone: 'neutral', q: 'TEZ NATIJA', items: ['Ball. Reyting. Natija. Hozir.'] }, note: 'Natijada o\'quvchi o\'rganmaydi, faqat bajaradi. *Ichida qiziqish emas, qo\'rquv o\'sadi.*' },

    { t: 'vs', k: 'Motivatsiya turlari', h: 'Ichki va tashqi motivatsiya', a: { h: 'Tashqi motivatsiya', tone: 'neutral', items: ['Baholar', 'Ota-onaning bosimi', 'Jazodan qo\'rquv', 'Mukofot'], p: 'Ta\'siri: qisqa muddatli, tez so\'nadi.' }, b: { h: 'Ichki motivatsiya', tone: 'good', items: ['Ma\'no his qilish', 'O\'zini qadrli sezish', 'Qiziqish', 'O\'zini sinab ko\'rish ehtiyoji'], p: 'Ta\'siri: uzoq muddatli, shaxsni o\'zi tortadi.' }, note: 'Ustozning asosiy maqsadi: tashqi bosim emas, *ichki yong\'inni yoqish.*' },

    { t: 'vs', k: 'Vazifalar taqsimoti', h: 'Kim nima uchun javobgar?', a: { h: 'Maktab · tashqi motivatsiya', tone: 'neutral', items: ['Baholar tizimi', 'Jadval va reyting', 'Qoidalar va nazorat', 'Mukofot va jazo'] }, b: { h: 'Ustoz · ichki motivatsiya', tone: 'gold', items: ['Ma\'no his qildirish', 'Qiziqish uyg\'otish', 'Qadrli ekanligini sezdirish', 'Ichki olovni yoqish'] }, note: 'Katta xato: *maktablar ichki muammoni tashqi usul bilan hal qilmoqchi bo\'ladi.*' },

    { t: 'steps', k: 'Psixologik qurol', h: 'Overton tuynugi: aytilgan so\'z — miyada ekilgan urug\'', items: [
      { h: 'Yo\'q narsa', p: 'Inson hayolida bu fikr umuman yo\'q. Miyada hech qanday izi ham yo\'q.' },
      { h: 'Aytildi', p: 'Siz bu haqida gapirasiz. So\'z miyaga tushadi: urug\' ekildi.' },
      { h: 'O\'ylab yuradi', p: 'Endi u bu fikrni tez-tez eslaydi. Urug\' unib, dunyoqarashga aylanadi.' }
    ], note: 'Shuning uchun ustoz nima gapirishini bilishi kerak: *har bir so\'z miyada urug\' qoldiradi.*' },

    { t: 'vs', k: 'Ustoz roli', h: 'Bir vaqtda ikki rolni o\'ynab bo\'lmaydi', a: { h: 'Yomon cop', tone: 'bad', items: ['Qattiqlik. Bosim. Tanbeh.', 'Qo\'rquvga tayanadi.'] }, b: { h: 'Yaxshi cop', tone: 'good', items: ['Yumshoqlik. Empatiya. Maqtov.', 'Ishonchga tayanadi.'] }, note: 'Bittasini tanlang va shu rolni izchil olib boring. *O\'quvchi aralash signalni tushunmaydi.*' },

    { t: 'stats', k: 'Maktab amaliyoti', h: 'Ustozlarni qanday baholaymiz? NPS', items: [
      { v: '0', l: 'hech qachon', s: 'tavsiya qilmayman' },
      { v: '10', l: 'albatta', s: 'tavsiya qilaman' }
    ], note: 'Savol: *«Ustozingizni do\'stlaringizga tavsiya qilasizmi?»* O\'quvchilar ustozini qanchalik yaxshi ko\'rishi — ustozning asosiy bahosi. Yaxshi ustoz bilim beradi, ajoyib ustoz yuragida iz qoldiradi.' },

    { t: 'steps', k: 'Fidoyilik belgisi', h: '«Eng yaxshi ustoz — oyog\'ida varikoz bor ustozdir»', items: [
      { n: '↑', h: 'Tik turadi', p: 'Har bir o\'quvchi ko\'rsin, eshitsin, sezsin' },
      { n: '↻', h: 'Harakatda', p: 'Sinf bo\'ylab yuradi, hech kim e\'tibordan chetda qolmaydi' },
      { n: '♥', h: 'Jonli', p: 'Ovozi, imo-ishorasi, nigohi bilan o\'quvchini ushlab turadi' }
    ], note: 'Chunki u dars o\'tayotganda hech qachon o\'tirmaydi. Varikoz jarohat emas, *mehnat belgisi.*' },

    { t: 'steps', k: 'Amaliy strategiya', h: 'Uy vazifasining sirli kuchi: uch tomonlama ko\'prik', items: [
      { h: 'Mustaqil o\'rganish', p: 'Bola uyda ishlashga, o\'zini tashkillashtirish ko\'nikmasiga o\'rganadi.' },
      { h: 'Ota-ona ishtiroki', p: 'Ota-ona bolaning ta\'lim jarayoniga faol jalb qilinadi: kuzatuvchi emas, hamkor.' },
      { h: 'Bog\'lanish ko\'prigi', p: 'Ota-ona va bola birga vaqt o\'tkazadi, vazifa bahonasida yurak-yurakka tutashadi.' }
    ], note: 'Agar bola va ota-ona o\'rtasida kontaktni ulay olsangiz, *siz yutdingiz.*' },

    { t: 'steps', k: 'Chuqurroq qarash', h: '«Qiyin bola» ortidagi 5 asosiy sabab', items: [
      { h: 'E\'tibor ochligi', p: '«Meni ko\'ring» degan baqiriq' },
      { h: 'Qobiliyatdan past talab', p: 'Zerikish, qiziqish yo\'qligi' },
      { h: 'Uy muammolari', p: 'Oiladagi tang vaziyat sinfga ko\'chadi' },
      { h: 'Ma\'no yo\'qligi', p: '«Nima uchun o\'qiyman?» — javob yo\'q' },
      { h: 'O\'zini shaxs sifatida ko\'rmaslik', p: 'O\'z qadrini bilmaydi, izlaydi' }
    ], note: 'Ustoz bu sabablarni bilsa, jazolash ehtiyoji *70% ga kamayadi.*' },

    { t: 'vs', k: '1-sabab · chuqurroq', h: 'E\'tibor ochligi', a: { h: 'Biz ko\'ramiz', tone: 'neutral', q: 'Bola darsda bezovta.' }, b: { h: 'Aslida u aytmoqchi', tone: 'gold', q: '«Meni ko\'ring.»' }, note: 'Sinfda shovqin ko\'p qiladigan bola eng ko\'p gapiradigan emas, eng ko\'p *sezilmayotgan* bola bo\'lishi mumkin. Shovqin yomon xulq emas, e\'tibor so\'rash usuli. Javob: baqirish emas, ko\'rish.' },

    { t: 'steps', k: 'Amaliy yechim', h: 'Gapirmaydigan bolalarni nima qilish kerak? Debat!', items: [
      { n: '⚒', h: 'Mavqe himoyasi', p: 'O\'z fikrini himoya qilish kerak, indamay qololmaydi' },
      { n: '★', h: 'Qiziqish uyg\'onadi', p: 'Bahslashish hissiyotni qo\'zg\'aydi, e\'tibor uyg\'onadi' },
      { n: '♡', h: 'Ovoz topadi', p: 'Kichik g\'alaba bilan o\'ziga ishonch tug\'iladi' }
    ], note: 'Muammo: bola indamaydi, javob bermaydi, o\'zini chetga tortadi. Yechim: debat tashkil qiling. *Fikrlashga majbur qiling, gap o\'zi keladi.*' },

    { t: 'big', k: 'Ustoz manifesti', h: 'Men bolani o\'zgartirmayman. Men *sharoitni* o\'zgartiraman. Bola o\'zi o\'zgaradi.', s: 'Ichki ta\'sir psixologiyasining mohiyati' },

    { t: 'steps', k: '2-sabab · chuqurroq', h: 'Qobiliyatdan past talab: himoya qanday ko\'rinadi?', items: [
      { n: '😂', h: 'Masxara', p: 'Hazilga aylantiradi, jiddiy qabul qilmaydi.' },
      { n: '—', h: 'Befarqlik', p: '«Menga qiziq emas» degandek tutadi.' },
      { n: '⚡', h: 'Tajovuz', p: 'Baqiradi, janjal qiladi, diqqatni chalg\'itadi.' }
    ], note: 'Bola ichida o\'ylaydi: «Baribir eplay olmayman.» Himoya mexanizmi yoqiladi: *«Men harakat qilmayman, shunda yutqazmayman.»*' },

    { t: 'table', k: 'Izchillik haqida', h: 'Quyon va Toshbaqa — haqiqatan to\'g\'ri', head: ['', 'Quyon', 'Toshbaqa'], rows: [
      ['O\'rtacha tezlik', '5 km/soat', '0.3 km/soat'],
      ['Umri', '~3 yil', '~100 yil'],
      ['Bosib o\'tgan yo\'l', '~10 000 km', '*50 000+ km*']
    ], note: 'Raqamlar hikoyaning ma\'nosini tasdiqlaydi. *Jiyan tog\'asidan o\'tib ketadi, agar o\'zini tezligiga qo\'yib bersa.*' },

    { t: 'vs', k: '3-sabab · chuqurroq', h: 'Uy muammolari', a: { h: 'Uyda nima bo\'lishi mumkin?', tone: 'bad', items: ['Ajralish: ota-ona orasidagi uzilish', 'Bosim: doimiy tanqid, talab, aybdor qilish', 'Solishtirish: «Falonchi qara, sen-chi…»', 'Kamsitish: so\'z bilan yoki indamay haqorat'] }, b: { h: 'Sinfda ko\'rinadi', tone: 'neutral', items: ['Sinfda: agressiya, janjal, urishqoqlik', 'Uyda: yig\'layotgan, qo\'rqayotgan bola'] }, note: '*Sinfdagi agressiv bola — uyda yig\'lab yurgan boladir.* Muammoning manbai sinfda emas.' },

    { t: 'vs', k: 'Ustozning kamtarligi', h: 'Xulosa chiqaring, hukm qilmang', a: { h: 'Xulosa chiqaring', tone: 'good', items: ['Kuzating, tahlil qiling, tushunishga urining', 'Bu sizning haqqingiz va vazifangiz'] }, b: { h: 'Hukm qilmang', tone: 'bad', items: ['Hukm siz va mening qo\'limda emas', 'Bolaning taqdirini bugun yopmang'] }, note: '«Boshini ko\'rmagan va oxirini bilmaydigan odam bugun uchun hukm chiqarmasligi kerak.»' },

    { t: 'vs', k: '4-sabab · chuqurroq', h: 'Ma\'no yo\'qligi: «Bu menga nima beradi?»', a: { h: 'Noto\'g\'ri javob', tone: 'bad', q: '«Shart, chunki men aytyapman.»' }, b: { h: 'To\'g\'ri javob', tone: 'good', q: '«Mana shu narsa sening hayotingda nimaga kerak bo\'lishini ko\'rsataman.»' }, note: 'Bola o\'ziga savol beradi, javob topilmaydi. Mantiq yo\'q, ma\'no yo\'q.' },

    { t: 'vs', k: '5-sabab · chuqurroq', h: 'O\'zini shaxs sifatida ko\'rmaslik', a: { h: 'Haqiqiy bola', tone: 'gold', items: ['Qiziqishlari, tuyg\'ulari, orzulari', 'Iste\'dodlari, fikrlari, kelajagi', 'Ismi, hayoti, shaxsiyati, qalbi'] }, b: { h: 'Bola o\'zini ko\'radi', tone: 'bad', q: '«Men faqat… BAHO…dan iboratman.»', p: 'Hamma narsa o\'chiriladi. Past baho «men yomonman» degan tushuncha bo\'lib qoladi.' }, note: 'Ustozning vazifasi bolaga aytish: *«Sen baho emassan, sen shaxssan.»*' },

    { t: 'vs', k: 'Metafora', h: 'O\'quvchiga bosim bermaymiz, uni ko\'tarishga yordam beramiz', a: { h: 'Bosim', tone: 'bad', q: '«Bosim — bu tobut. Tobutni bir kishi ko\'tara olmaydi.»', p: 'Bola uchun og\'ir yuk. U ostida ezilib qoladi, bir o\'zi ko\'tara olmaydi.' }, b: { h: 'Yordam', tone: 'good', q: 'Ustoz yelka tutadi.', p: 'Birga ko\'taramiz va bola olg\'a yuradi.' } },

    { t: 'steps', k: 'Model · 4 bosqichli texnika', h: 'Jazolash o\'rniga — ta\'sir qilish', items: [
      { h: 'To\'xtatish, jazolamasdan', p: '«Hozir seni jazolamayman, tushunmoqchiman.»' },
      { h: 'Ochiq savol, sababni bilish', p: '«Senga qiyin bo\'layaptimi yoki qiziq emasmi?»' },
      { h: 'Tan olish, bolani eshitish', p: '«Seni tushundim, demak bu yerda muammo bor.»' },
      { h: 'Kichik mas\'uliyat', p: '«Bugun faqat 1 topshiriqni qil, qolganini keyin.»' }
    ], note: 'Bola ichida: «Meni jazolashmadi → meni odam deb ko\'rishyapti.» *Shu joyda ichki motivatsiya boshlanadi.*' },

    { t: 'steps', k: 'Ehtiyot bo\'ling', h: 'Ustozlar yo\'l qo\'yadigan 5 ta xato', items: [
      { h: 'Hamma bilan bir xil muomala', p: 'Har bir o\'quvchi alohida olam. Umumiy qolip ishlamaydi.' },
      { h: 'Faqat natijani ko\'rish', p: 'Jarayondagi kuch va o\'sishni e\'tibordan qochirish motivatsiyani o\'ldiradi.' },
      { h: 'Gapirish eshitishdan ko\'p', p: 'Ustoz 80% vaqtda gapirsa, o\'quvchi 80% vaqtda passiv bo\'ladi.' },
      { h: 'Xatoni jazolash, o\'rgatmaslik', p: 'Xato o\'qish imkoniyati. Jazo bu imkoniyatni yopadi.' },
      { h: 'Soxta hayajon va rol', p: 'O\'quvchilar soxtalikni darhol sezadi. Samimiylik asos.' }
    ] },

    { t: 'steps', k: 'Amaliyot · pedagogik texnikalar', h: 'Sinfda ishlaydigan 5 ta real texnika', all: true, items: [
      { h: 'Mikro g\'alaba usuli', p: 'kichik yutuq beriladi' },
      { h: 'Shaxsiy maqsad savoli', p: 'o\'ziga qarata savol' },
      { h: 'Ochiq tan olish', p: 'shaxsiy sifat maqtaladi' },
      { h: 'Tanlov berish', p: 'erkinlik hissi' },
      { h: 'Rol berish', p: 'keraklilik hissi' }
    ], note: 'Har bir texnika bolaning *ichki motivatsiyasini* uyg\'otish uchun.' },

    { t: 'vs', k: 'Texnika 1 · amaliyot', h: 'Mikro g\'alaba usuli', a: { h: 'Mohiyati', tone: 'gold', q: 'Eng sust bolaga ham juda kichik yutuq berish.' }, b: { h: 'Misollar', tone: 'good', items: ['1 ta to\'g\'ri misol', '1 ta yaxshi savol', 'Toza yozilgan daftar', 'Vaqtida kelgani'] }, note: 'Bola ichida: *«Men ham uddalay olar ekanman.»* Birinchi ichki ishonch shu yerda tug\'iladi.' },

    { t: 'quote', k: 'Texnika 2 · shaxsiy maqsad savoli · har oy', q: 'Bu oy o\'zing uchun nimani yaxshilamoqchisan?', by: 'Asosiy qoida: bahoga emas, o\'ziga qarata savol. Bola ichida maqsad tug\'iladi' },

    { t: 'vs', k: 'Texnika 3 · ochiq tan olish', h: '«Bugun sen juda yaxshi savol berding.»', a: { h: 'Bahoni maqtash', tone: 'bad', q: '«5 olding, barakalla.»' }, b: { h: 'Sifatni maqtash', tone: 'good', q: '«Sen yaxshi o\'ylaysan.»' }, note: 'Bola ichida: «Mendagi sifat ko\'rinyapti.» *Baho emas, shaxsiy sifatni maqtash bolaning qalbiga yetadi.*' },

    { t: 'vs', k: 'Texnika 4 · tanlov berish', h: 'Nazorat ustoz qo\'lida, erkinlik bola qo\'lida', a: { h: 'Variant A', tone: 'neutral', q: '«Yozma qilaman»' }, b: { h: 'Variant B', tone: 'neutral', q: '«Og\'zaki tushuntiraman»' }, note: 'Bola ichida: *«Ustoz menga ishonadi, men tanlayman.»* Nazorat qoladi, lekin erkinlik hissi paydo bo\'ladi.' },

    { t: 'bullets', k: 'Texnika 5 · rol berish', h: 'Eng muammoli bolaga mas\'uliyat bering', items: ['Texnik yordamchi', 'Guruh sardori', 'Doska nazoratchisi'], note: 'Ayniqsa «kuchli» bolalarga. *«Yordamchi qilib olib, muammodan qutulasiz.»*' },

    { t: 'vs', k: 'Darsning tub mohiyati', h: 'Insonni harakatga keltiradigan kuch — qo\'rquv emas, *ma\'no*', a: { h: 'Jazolovchi ustoz', tone: 'bad', items: ['Baho markazli sinf', 'Qo\'rquv → xohish → ehtiyoj'] }, b: { h: 'Yo\'lboshchi ustoz', tone: 'good', items: ['Inson markazli muhit', 'Ma\'no → qiziqish → o\'sish'] }, note: '*Ustoz — bilim beruvchi emas, ma\'no uyg\'otuvchi shaxs.*' },

    { t: 'steps', k: 'Ustoz manifesti', h: 'Siz nimani o\'zgartirasiz?', all: true, items: [{ h: 'Harakatni' }, { h: 'Holatni' }, { h: 'Sharoitni' }, { h: 'Munosabatni' }], note: '*Bolani emas.* Bolani o\'zgartirishga harakat qildingizmi, o\'zgartira olmaysiz. Men sharoitni o\'zgartiraman, bola o\'zi o\'zgaradi.' },

    { t: 'steps', k: 'Qayta qarash', h: 'Muammo — xulq emas, *signal*', all: true, items: [
      { n: '+', h: 'Ko\'proq savol' }, { n: '−', h: 'Kamroq hukm' }, { n: '+', h: 'Ko\'proq tinglash' }
    ], note: '«Bola qarshilik qilsa, demak ichida og\'riq bor.» «Tartibni sindirayotgan bola o\'zini himoya qilyapti.»' },

    { t: 'end', h: 'Rahmat', s: '5-modul yakunlandi' }
  ]
};

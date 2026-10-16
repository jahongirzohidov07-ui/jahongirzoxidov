'use strict';
/* Mentorlik (Shogirdlik) dasturi · 4-dars: Moliya
   Manba: 4-dars.pptx + muallifning Notion qaydlari (7 bo'lim: qaramlik va erkinlik, nisbat qoidasi,
   status poygasi, qarz va nasiya, jamg'arma bosqichlari, daromad o'sishi, boylikni yashirish).
   Savol pardalari skript faylida: api/_scripts/mentorlik-04.js (S.q).
   Qoida: muallif qaydlaridagi fikr, raqam va iqtiboslar o'zgartirilmaydi (Aristotel, 47–270%, 5–10 barobar,
   95%, 15–17%, Taleb va Baffet) — qo'shimcha misollar faqat ularni to'ldiradi.
   Qo'shimcha misollar manbasi: Markaziy bank nasiya tahlili (kun.uz, 2025-06), Statistika qo'mitasi (2026 I chorak). */
module.exports = {
  slides: [
    /* 1 */ { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*4-dars* · Moliya', name: 'Jahongir Zoxidov', role: 'Mentor' },

    /* 2 */ { t: 'ask', icon: '💭', k: 'Boshlanish uchun savol', h: 'Siz uchun *pul* nima?', s: 'Bir so\'z bilan ayting. Keyin: pul yetishmagani hayotingizda nimaga to\'sqinlik qilgan?' },

    /* 3 */ { t: 'big', color: 'blue', icon: '⚖️', k: 'Darsning boshlang\'ich nuqtasi', h: 'Pul hayotda eng muhim narsa emas — lekin *muhim narsalarning* hammasiga ta\'sir qiladi', s: 'Sog\'liq, oila, vaqt, tanlov erkinligi — pul hammasiga tegib o\'tadi.' },

    /* 4 */ { t: 'steps', color: 'green', icon: '🧭', k: 'Bugungi reja', h: 'Bugun *7 ta savolga* javob topamiz', all: true, cols: 4, items: [
      { n: '1', h: 'Kim aslida erkin?', p: 'Qaramlik va erkinlik' },
      { n: '2', h: 'Daromad oshsa — nima qilamiz?', p: 'Nisbat qoidasi' },
      { n: '3', h: 'Boy ko\'rinish nega qimmat?', p: 'Status poygasi' },
      { n: '4', h: 'Nasiya qanchaga tushadi?', p: 'Qarz tuzog\'i' },
      { n: '5', h: 'Qaysi tartibda jamg\'aramiz?', p: 'Zaxira va sarmoya' },
      { n: '6', h: 'Daromad qancha o\'sishi kerak?', p: '20–30 yosh strategiyasi' },
      { n: '7', h: 'Boylikni nega yashiramiz?', p: 'Eskirmas bilim' }
    ] },

    /* ===== 1. Qaramlik va erkinlik ===== */
    /* 5 */ { t: 'section', color: 'blue', icon: '🔗', n: '1', h: 'Moliyaviy qaramlik va erkinlik', s: 'Kim aslida erkin?' },

    /* 6 */ { t: 'duel', color: 'blue', k: 'Ikki odam', h: 'Qaysi biri *erkin*?', a: { icon: '💼', h: 'Ali — oyiga 50 mln', p: 'Uch nasiya, mashina krediti. Rahbari baqirsa — jim turadi: oy oxirida to\'lov bor.', tag: 'Qaram' }, b: { icon: '🕊️', h: 'Vali — oyiga 8 mln', p: 'Qarzi yo\'q, 6 oylik zaxirasi bor. Prinsipiga to\'g\'ri kelmasa — «yo\'q» deya oladi.', tag: 'Erkin' }, prize: '🗝️', prizeLabel: 'Erkinlik', winner: 'b', note: 'Erkinlikni *daromad miqdori* emas — *majburiyatlar* belgilaydi.' },

    /* 7 */ { t: 'big', color: 'red', icon: '⛓️', k: 'Moliyaviy qaramlik', h: 'Qaramlik — kam pul topish emas. Bu — pul uchun *prinsipdan kechishga* rozi bo\'lish', s: 'Pul sababli o\'zini tutishi, gapi, xulqi o\'zgaradigan odam — qancha topmasin, qaram.' },

    /* 8 */ { t: 'vs', color: 'green', icon: '🗝️', k: 'Qaram va erkin', h: 'Farq *pulda* emas — *qarorlarda*', all: true, a: { icon: '⛓️', h: 'Qaram odam', tone: 'bad', items: ['Pul uchun xulqini o\'zgartiradi', '«Yo\'q» deya olmaydi', 'Majbur bo\'lgani uchun ishlaydi', 'Vaqt unga qarshi ishlaydi'] }, b: { icon: '🕊️', h: 'Erkin odam', tone: 'good', items: ['Qarorda pulni birinchi o\'ringa qo\'ymaydi', 'Kerak bo\'lsa — «yo\'q» deydi', 'Xohlagani uchun ishlaydi', 'Vaqt uning tarafida'] } },

    /* 9 */ { t: 'big', color: 'green', icon: '🕊️', k: 'Moliyaviy erkinlik', h: 'Erkinlik — millioner bo\'lish emas. Bu — *ishlashga majbur* bo\'lmaslik', s: 'Erkin odam ham ishlaydi. Faqat tirikchilik yoki qarz majburlagani uchun emas — o\'zi xohlagani uchun.' },

    /* 10 */ { t: 'domino', color: 'red', k: 'Qaramlikda vaqt sizga qarshi', h: 'Har bir kun — oy oxiridagi to\'lovga *bir qadam* yaqin', items: [
      { tag: '1-kun', h: 'Ishsiz kun', p: 'Har kun hisobda' },
      { tag: 'Oy oxiri', h: 'To\'lovlar yaqin', p: 'Ijara, nasiya, qarz' },
      { tag: 'Bosim', h: 'Majburiyat', p: 'Har qanday ishga rozi' },
      { tag: 'Ish joyi', h: 'Hurmatsiz muhit', p: 'Qadrlamaydigan rahbar' },
      { tag: 'Natija', h: 'Ma\'naviy ezilish', p: 'O\'zini hurmat qilmay qo\'yadi' }
    ], note: 'Zaxirasi bor odam uchun esa vaqt *ittifoqchi*: shoshilmasdan, o\'ziga munosib joyni tanlaydi.' },

    /* 11 */ { t: 'duel', color: 'orange', k: 'Rich vs Wealthy', h: 'Puldor va *boy* — bir narsa emas', a: { icon: '🕶️', h: '«Rich» — puldor', p: 'Kurtka $800 · Soat $200 · Krossovka $400. Ko\'rinishi qimmat, hisobi bo\'sh.', tag: 'Sof boylik: $15K' }, b: { icon: '🌳', h: 'Wealthy — boy', p: 'Kurtka $25 · Soat $45 · Krossovka $40. Ko\'rinishi oddiy, aktivlari ko\'p.', tag: 'Sof boylik: $1.2M' }, prize: '$1.2M', prizeLabel: 'Sof boylik', winner: 'b', note: 'Boylikni *ko\'rinish* emas — *aktivlar* belgilaydi.' },

    /* 12 */ { t: 'table', color: 'green', icon: '⚖️', k: 'Puldorlik vs Boylik', h: 'Farqi *nimada*?', head: ['', 'Puldorlik', 'Boylik'], rows: [
      ['Asosi', 'Naqd pul', '*Aktivlar*: uy, yer, biznes, sarmoya'],
      ['Davomiylik', 'Vaqtinchalik', '*Uzoq muddatli*'],
      ['Manba', 'Ish haqi, yutuq', '*Passiv daromad*'],
      ['Xavfsizlik', 'Beqaror', '*Barqaror*'],
      ['Misol', 'Qimmat mashina, ijarada yashaydi', 'Uy egasi, doimiy daromad manbai bor'],
      ['Mohiyati', 'Majburiyati ko\'p, vaqti kam', 'Majburiyati kam, *vaqti ko\'p*']
    ] },

    /* 13 */ { t: 'big', color: 'blue', icon: '⏳', k: 'Boy kim?', h: 'Vaqti ko\'p va *xotirjam* odam', s: 'Hisobidagi raqam emas — o\'z vaqtiga o\'zi egalik qilishi.' },

    /* ===== 2. Daromad va xarajat ===== */
    /* 14 */ { t: 'section', color: 'green', icon: '📐', n: '2', h: 'Daromad va xarajat', s: 'Nisbat qoidasi' },

    /* 15 */ { t: 'cols', color: 'green', k: 'Ikki odam · bir xil o\'sish', h: 'Oylik *ikki barobar* oshdi. Qo\'lda nima qoldi?', smallH: true, max: 21, groups: [
      { x: 'Ali', sub: 'hozir', segs: [{ v: 9, c: 'red', l: 'xarajat 9' }, { v: 1, c: 'green' }], top: '10 mln' },
      { x: 'Ali', sub: 'oylik 2×', segs: [{ v: 19, c: 'red', l: 'xarajat 19' }, { v: 1, c: 'green' }], top: '20 mln', dim: true },
      { x: 'Vali', sub: 'hozir', segs: [{ v: 5, c: 'red', l: 'xarajat 5' }, { v: 5, c: 'green', l: 'qoladi 5' }], top: '10 mln' },
      { x: 'Vali', sub: 'oylik 2×', segs: [{ v: 7, c: 'red', l: 'xarajat 7' }, { v: 13, c: 'green', l: 'qoladi 13' }], top: '20 mln', hl: true }
    ], legend: [{ c: 'red', l: 'Xarajat' }, { c: 'green', l: 'Qoladigan pul' }], side: { big: '1 → 13', text: 'Ali\'da qoladigan pul *o\'zgarmadi* — 1 mln. Vali\'da *5 dan 13 mln* ga chiqdi.' } },

    /* 16 */ { t: 'big', color: 'green', icon: '📐', k: 'Nisbat qoidasi', h: 'Daromad oshsa — xarajat *sekinroq* oshsin', s: '100 topganda 50 sarflasangiz — 200 topganda 70 sarflang, 190 emas.' },

    /* 17 */ { t: 'vs', color: 'orange', icon: '🏠', k: 'Imkoniyat va turmush', h: 'Imkoniyatingizdan *kichikroq* yashang', all: true, a: { icon: '🎈', h: 'Imkoniyatidan kengroq', tone: 'bad', q: 'Bugun yaxshi — ertaga qarz', items: ['Kelajakdagi pulini bugun sarflaydi', 'O\'z imkoniyatlarini toraytiradi', 'Farzandlarining imkoniyatini ham'] }, b: { icon: '🌱', h: 'Imkoniyatidan kichikroq', tone: 'good', q: 'Bugun kamtar — ertaga erkin', items: ['Har oy resurs yig\'adi', 'Katta ishlarga kuch to\'playdi', 'Farzandlariga yo\'l ochadi'] } },

    /* 18 */ { t: 'vs', color: 'red', icon: '🧠', k: 'Ikki xil ko\'nikma', h: 'Pul *topish* va pul *sarflash* — ikki xil skill', all: true, a: { icon: '🚀', h: 'Topish uchun', tone: 'gold', items: ['Tavakkal qilish', 'Tez harakat qilish', 'O\'zini ko\'rsatish, sotish', 'Fursatni darrov ushlash', 'Yangi yo\'llarni sinash'] }, b: { icon: '🛡️', h: 'Sarflash uchun', tone: 'good', items: ['Ehtiyotkorlik', 'Sabr, kutish (delayed gratification)', 'Kamtarlik, sokinlik', 'Rejalashtirish, budjet', 'Bitta yo\'lga sodiqlik'] }, note: 'Ko\'p topib, ko\'p sarflagan odam boy bo\'lmaydi. *Ikkala skill* birga kerak.' },

    /* 19 */ { t: 'photo', layout: 'split', color: 'green', img: '/assets/d4-budjet.jpg', focus: 'center', k: 'Personal money management', h: 'Budjetni *yozib* boring', all: true, items: [
      'Kirim va chiqim — har oy yozma (*cashflow*).',
      'Qayerga ketgani noma\'lum pul — yo\'qolgan pul.',
      'Oy oxirida 15 daqiqa: kirdi, chiqdi, qoldi.',
      'Budjet — pulni siz boshqarasiz, pul sizni emas.'
    ] },

    /* 20 */ { t: 'flow', color: 'blue', icon: '💸', k: 'Pul 3 marta sarflanadi', h: 'Har bosqichda *to\'xtab* o\'ylang', items: ['💭 Fikrda', '🤔 Qarorda', '🛒 Xaridda'], all: true, note: 'Pul avval *fikrda*, keyin *qarorda*, oxirida *xaridda* sarflanadi. Uchinchisiga yetib bormasdan to\'xtash — eng arzon tejash.' },

    /* ===== 3. Status poygasi ===== */
    /* 21 */ { t: 'section', color: 'orange', icon: '👑', n: '3', h: 'Status poygasi', s: 'Boy ko\'rinish — boy bo\'lishga to\'siq' },

    /* 22 */ { t: 'big', color: 'orange', icon: '🎭', k: 'Ortiqcha xarajat qayerga ketadi?', h: 'Boy *ko\'rinishga* harakat — boy *bo\'lishga* xalaqit beradi', s: 'Ortiqcha xarajatning ko\'pi ehtiyoj uchun emas — obro\' ko\'rsatish va boshqalardan qolmaslik uchun.' },

    /* 23 */ { t: 'grid', color: 'red', icon: '💎', k: 'Veblen effekti · 1899', h: 'Ba\'zi narsalar *qimmat bo\'lgani uchun* sotiladi', items: [
      { icon: '🏷️', h: 'Narx — maqsadning o\'zi', p: 'Qimmatligi uchun olinadi: hamma narxini bilsin.' },
      { icon: '👀', h: 'Ko\'rsatish uchun', p: 'Kerakligi uchun emas — ko\'rinishi uchun.' },
      { icon: '♾️', h: 'Oxiri yo\'q poyga', p: 'Sizdan qimmatroq narsasi bor odam doim topiladi.' }
    ], note: 'Iqtisodchi Torsteyn Veblen buni *«ko\'z-ko\'z qilish uchun iste\'mol»* deb atagan.' },

    /* 24 */ { t: 'vs', color: 'green', icon: '🌳', k: 'Asl boylar va soxta boylar', h: 'Haqiqiy boylar *oddiy* yashaydi', all: true, a: { icon: '🎭', h: 'Boy ko\'rinadiganlar', tone: 'bad', items: ['Brendlarni ko\'z-ko\'z qiladi', 'Telefon, mashina — nasiyaga', 'Daromadini tarmoqda ko\'rsatadi', 'Ko\'pincha birinchi avlod puli'] }, b: { icon: '🌳', h: 'Haqiqiy boylar', tone: 'good', items: ['Oddiy kiyinadi, maqtanmaydi', 'Mashinani naqd, ko\'pincha b/u oladi', 'Daromadi haqida gapirmaydi', '2–3-avlod boylari — eng kamtari'] }, note: '«Qo\'shni millioner» kitobi (Stenli va Danko, 1996): ko\'p millionerlar *daromadidan ancha past* yashaydi.' },

    /* 25 */ { t: 'flow', color: 'orange', icon: '🔁', k: 'Mimetik xohish · Rene Jirar', h: 'Boshqadan ko\'rib xohlash — *cheksiz*', items: ['👀 Ko\'rdim', '😍 Xohladim', '🛒 Oldim', '😐 Ko\'nikdim', '👀 Yana ko\'rdim…'], all: true, note: 'Mimetik va status qaramligidan qutulmay turib moliyaviy erkinlikka *erishib bo\'lmaydi*.' },

    /* 26 */ { t: 'grid', color: 'red', icon: '🪤', k: 'Sarflash tuzoqlari', h: 'Nima bizni *ortiqcha* sarflatadi?', cols: 3, items: [
      { icon: '😨', h: 'FOMO', p: 'Hamma olyapti — men ham olay. Qolib ketish qo\'rquvi.' },
      { icon: '👨‍👩‍👧', h: 'Qarindoshlar bosimi', p: '«Falonchi oldi, sen ham ol». Boshqalarning kutgani — sizning budjetingiz emas.' },
      { icon: '📸', h: 'Odamlarga ko\'rsatish', p: 'Ko\'rinish uchun xarid — eng qimmat xarid.' }
    ], note: 'Har xarid oldidan bitta savol: *«Bu menga kerakmi yoki hozir xohlayapmanmi?»*' },

    /* 27 */ { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d4-xarid.jpg', focus: 'center top', k: 'Impulsiv xarid', h: '*3 kun* kuting', all: true, items: [
      'Yoqib qolgan narsani 3 kun o\'ylang — ko\'pi kerak bo\'lmay chiqadi.',
      '«Arzonroq yo\'l bilan nima qilsam bo\'ladi?» — deb so\'rang.',
      'Narxga emas — *foydaga* qarab sarflang.'
    ] },

    /* 28 */ { t: 'vs', color: 'blue', icon: '🏷️', k: 'Arzon va tejash', h: 'Arzon va tejash — *ikki xil* narsa', all: true, a: { icon: '🏷️', h: 'Arzon olish', tone: 'bad', q: 'Arzon olgan — ikki karra to\'laydi', items: ['Tez buziladi — qayta olinadi', 'Faqat narxga qaraydi', 'Vaqt va asab ketadi'] }, b: { icon: '💎', h: 'Tejash', tone: 'good', q: 'Kerak narsani — sifatli oladi', items: ['Uzoq xizmat qiladi', 'Foydaga qaraydi', 'Keraksizini umuman olmaydi'] } },

    /* 29 */ { t: 'photo', layout: 'split', color: 'green', img: '/assets/d4-minimalizm.jpg', focus: 'center', k: 'Minimalizm', h: 'Kam narsa — *ko\'p erkinlik*', all: true, items: [
      'Har bir narsa vaqt, joy va e\'tibor talab qiladi.',
      'Kerak bo\'lmagan narsani olmaslik — eng yaxshi tejash.',
      'Kam, lekin sifatli.'
    ] },

    /* ===== 4. Qarz va nasiya ===== */
    /* 30 */ { t: 'section', color: 'red', icon: '⛓️', n: '4', h: 'Qarz va nasiya tuzog\'i', s: 'Bo\'lib to\'lashning yashirin narxi' },

    /* 31 */ { t: 'quote', color: 'red', k: 'Qarz — zamonaviy qullik', q: 'Qarz insonni qullikka yetaklaydi.', by: 'Aristotel' },

    /* 32 */ { t: 'vs', color: 'orange', icon: '📱', k: 'Qarz nimaga olinadi?', h: 'Ilgari — *omon qolish* uchun. Bugun — *xohish* uchun', all: true, a: { icon: '🌾', h: 'Ilgari', tone: 'neutral', items: ['Ovqatga — ochlikdan', 'Soliqqa', 'Urug\'lik, ekin uchun'] }, b: { icon: '📱', h: 'Bugun', tone: 'bad', items: ['Telefon, mashina', 'To\'y, ko\'rinish', 'O\'tkinchi xohishlar'] } },

    /* 33 */ { t: 'cols', color: 'red', k: 'Bitta telefon misolida · taxminiy', h: 'Nasiyaga olingan telefon *qanchaga* tushadi?', smallH: true, max: 37, groups: [
      { x: 'Do\'kon narxi', sub: 'naqd', v: 17.8, c: 'blue', top: '17,8 mln' },
      { x: 'Nasiyada', sub: '12 oy', segs: [{ v: 17.8, c: 'blue', l: 'narx' }, { v: 9.2, c: 'red', l: 'ustama' }], top: '27 mln' },
      { x: 'Telefon', sub: '2 yildan keyin', v: 9, c: 'orange', top: '≈9 mln', dim: true },
      { x: 'O\'sha to\'lovlar', sub: 'depozitda, 2 yil', segs: [{ v: 27, c: 'blue', l: 'to\'lovlar' }, { v: 7.6, c: 'green', l: 'foiz' }], top: '≈35 mln', hl: true }
    ], legend: [{ c: 'blue', l: 'Sizning pulingiz' }, { c: 'red', l: 'Ustama' }, { c: 'green', l: 'Depozit foizi' }], side: { big: '9 vs 35', text: 'Bir yo\'lda qo\'lingizda *eskirgan telefon*. Ikkinchisida — *35 mln so\'m*.' }, note: 'Misol: iPhone, 2024-yil dekabr narxlari (Markaziy bank tahlili); depozit — yillik ~17%; b/u narxi taxminiy.' },

    /* 34 */ { t: 'stats', color: 'red', icon: '🧾', k: 'Muddatli to\'lov va kredit kartalari', h: 'Nasiyaning *yashirin* narxi', items: [
      { v: '47%', l: 'Yashirin xizmat haqi', s: 'eng kami' },
      { v: '270%', l: 'Eng yuqorisi', s: 'ba\'zi takliflarda' },
      { v: '40%', l: 'iPhone misolida', s: 'o\'rtacha ustama, 12 oy (Markaziy bank tahlili)' }
    ], note: 'Bunday takliflar insonni *doimiy to\'lov zanjiriga* bog\'lab qo\'yadi.' },

    /* 35 */ { t: 'domino', color: 'red', k: 'To\'lov zanjiri', h: 'Bitta nasiya qanday qilib *zanjirga* aylanadi', items: [
      { tag: '1', h: 'Birinchi nasiya', p: '«Oyiga atigi 2 mln»' },
      { tag: '2', h: 'Oylik to\'lov', p: 'Maosh kelmasdan ketadi' },
      { tag: '3', h: 'Pul yetmaydi', p: 'Oy oxiriga yetmaydi' },
      { tag: '4', h: 'Ikkinchi nasiya', p: 'Teshikni yopish uchun' },
      { tag: '5', h: 'Qaramlik', p: 'Ish — tanlov emas, majburiyat' }
    ] },

    /* 36 */ { t: 'stop', color: 'red', icon: '✋', h: 'Narxi *tushadigan* narsani qarzga olmang', s: 'iPhone, qimmat avtomobil — narxi yildan-yilga tushadi. Ularni bo\'lib to\'lashga olish — boyish o\'rniga yillar davomida *5–10 barobar* kambag\'allashish formulasi.' },

    /* 37 */ { t: 'steps', color: 'orange', icon: '🧐', k: 'Qarz olishdan oldin', h: 'O\'zingizga *4 ta savol* bering', all: true, cols: 4, items: [
      { n: '1', h: 'Bu narsa pul keltiradimi?', p: 'Asbob, biznes, bilim — ha. Telefon, kiyim — yo\'q.' },
      { n: '2', h: 'Narxi oshadimi yoki tushadimi?', p: 'Tushadigan narsaga qarz — eng yomon qarz.' },
      { n: '3', h: 'Ishsiz qolsam ham to\'lay olamanmi?', p: '6 oylik zaxira bo\'lmasa — javob «yo\'q».' },
      { n: '4', h: 'Jamg\'arib olsam bo\'lmaydimi?', p: 'Ko\'pincha — bo\'ladi. Faqat sabr kerak.' }
    ] },

    /* ===== 5. Jamg'arma va sarmoya ===== */
    /* 38 */ { t: 'section', color: 'green', icon: '🌱', n: '5', h: 'Jamg\'arma va sarmoya', s: 'Bosqichma-bosqich' },

    /* 39 */ { t: 'pyramid', color: 'green', k: 'Moliyaviy erkinlik zinasi', h: 'Pastdan *yuqoriga* — bosqichma-bosqich', s: 'Bitta pog\'onani tashlab o\'tgan odam — pastga qulaydi.', levels: [
      { icon: '🛟', label: '6 oylik zaxira', h: '1-bosqich', p: '6 oylik yashash xarajatiga yetadigan daxlsiz, «yoqilmaydigan» zaxira.' },
      { icon: '🎯', label: 'Ilk $100K', h: '2-bosqich · yo\'lning 95%', p: 'Pul yoki aktivlar shaklida.' },
      { icon: '🌳', label: 'Sarmoya', h: 'murakkab foiz', p: 'Bilim, ko\'nikma, biznes, sarmoya — 5–10 yilda holat keskin oshadi.' }
    ] },

    /* 40 */ { t: 'bars', color: 'orange', icon: '🛟', k: 'Emergency fund · 1-bosqich', h: '*6 oylik* xavfsizlik yostiqchasi', rows: [
      { h: '1 oy', p: 'Boshlang\'ich', w: '17%', v: '1 oy', color: 'red' },
      { h: '3 oy', p: 'Minimal', w: '50%', v: '3 oy', color: 'orange' },
      { h: '6 oy', p: 'Maqsad', w: '100%', v: '6 oy', ticks: 6, color: 'green' }
    ], big: '6', bigText: 'oylik xarajatingizga teng pul — *tegilmaydigan* alohida hisobda. Uni «yoqilmaydigan zaxira» deb biling.' },

    /* 41 */ { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d4-oltin.jpg', focus: 'center', k: 'Nima uchun kerak?', h: 'Xotirjamlik — *eng katta* daromad', all: true, items: [
      'Inqiroz, ish yo\'qotish, kasallik — hayotda bo\'lib turadi.',
      'Zaxirasi bor odam qo\'rqmasdan qaror qiladi.',
      'Zaxirasi yo\'q odam har qarorni qo\'rquvdan qiladi.',
      'Avval zaxira — keyin sarmoya.'
    ] },

    /* 42 */ { t: 'quote', color: 'blue', k: '2-bosqich · Moliyaviy mustaqillik yo\'lining 95% qismi', q: 'Birinchi $100 000 ni qanday bo\'lmasin yig\'ish kerak.', by: 'Charli Manger' },

    /* 43 */ { t: 'cols', color: 'green', k: 'Murakkab foiz · yillik 12% (ehtiyotkor hisob)', h: 'Oyiga *1 mln so\'m* — 20 yilda qancha bo\'ladi?', smallH: true, max: 1000, groups: [
      { x: '5 yil', segs: [{ v: 60, c: 'blue' }, { v: 22, c: 'green' }], top: '82 mln' },
      { x: '10 yil', segs: [{ v: 120, c: 'blue', l: '120' }, { v: 110, c: 'green', l: '+110' }], top: '230 mln' },
      { x: '15 yil', segs: [{ v: 180, c: 'blue', l: '180' }, { v: 320, c: 'green', l: '+320' }], top: '500 mln' },
      { x: '20 yil', segs: [{ v: 240, c: 'blue', l: 'qo\'yilgan 240' }, { v: 750, c: 'green', l: 'foiz +750' }], top: '≈990 mln', hl: true }
    ], legend: [{ c: 'blue', l: 'Siz qo\'ygan pul' }, { c: 'green', l: 'Foizning ishi' }], side: { big: '≈1 mlrd', text: 'Siz qo\'ygani — *240 mln*. Qolgan *750 mln* ni vaqt va foiz qo\'shgan.' }, note: 'Hozir so\'m depozitlari o\'rtacha ~17% beradi, lekin inflyatsiya ham bor — shuning uchun 12% bilan hisobladik.' },

    /* 44 */ { t: 'grid', color: 'blue', icon: '📈', k: 'Ortgan pul qayerga?', h: 'Statusga emas — *o\'sishga* tiking', cols: 2, items: [
      { icon: '📚', h: 'Bilim va kitob', p: 'Eng yuqori foiz beradigan sarmoya — o\'zingizga.' },
      { icon: '🛠️', h: 'Ko\'nikma', p: 'Sotuv, til, kasb — daromadni ko\'paytiradi.' },
      { icon: '🏪', h: 'Biznes', p: 'Pul siz uxlaganda ham ishlaydi.' },
      { icon: '🏦', h: 'Sarmoya', p: 'Doimiy, har oy — 5–10 yilda holatni keskin o\'zgartiradi.' }
    ] },

    /* ===== 6. Daromad o'sishi ===== */
    /* 45 */ { t: 'section', color: 'blue', icon: '🚀', n: '6', h: 'Daromadni o\'stirish', s: '20–30 yosh strategiyasi' },

    /* 46 */ { t: 'steps', color: 'blue', icon: '💪', k: '20–30 yosh', h: 'Bu yoshda *balans* emas — *o\'sish* haqida o\'ylang', all: true, items: [
      { n: '1', h: 'Qattiq mehnat', p: 'Kuch, vaqt va sog\'liq eng ko\'p bo\'lgan davr.' },
      { n: '2', h: 'Mas\'uliyat oling', p: 'Kim mas\'uliyat olsa — o\'sha o\'sadi va ko\'proq topadi.' },
      { n: '3', h: 'Tajriba yig\'ing', p: 'Tajriba — keyingi 30 yilning kapitali.' }
    ] },

    /* 47 */ { t: 'stats', color: 'green', icon: '🎯', k: 'Toshkent sharoitida · 2026', h: 'Asosiy ehtiyojlar yopilguncha — *shiddat* bilan', items: [
      { v: '≈12 mln', l: 'Toshkentda o\'rtacha oylik', s: 'Statistika, 2026-yil I chorak' },
      { v: '×2–4', l: 'Shu darajaga chiqish', s: 'ehtiyojlar yopilguncha' },
      { v: '25–40', l: 'Mln so\'m — oyiga mo\'ljal', s: 'uy, oila, zaxira, o\'qish' }
    ], note: 'Bu bosqichda daromadni *imkon qadar tez* oshirish kerak — keyin tezlik emas, barqarorlik muhim bo\'ladi.' },

    /* 48 */ { t: 'cols', color: 'orange', k: 'Oylik oshdi — boyidingizmi?', h: 'Oylik *har yili* oshyapti. Lekin yetarlimi?', smallH: true, max: 22, step: 0.35, groups: [
      { x: 'Bugun', v: 10, c: 'blue', top: '10 mln' },
      { x: '3 yil', sub: '+8% / yil', v: 12.6, c: 'orange', top: '12,6' },
      { x: '3 yil', sub: '+15% / yil', v: 15.2, c: 'green', top: '15,2' },
      { x: '5 yil', sub: '+8% / yil', v: 14.7, c: 'orange', top: '14,7' },
      { x: '5 yil', sub: '+15% / yil', v: 20.1, c: 'green', top: '20,1', hl: true }
    ], legend: [{ c: 'orange', l: 'Oylik +8% / yil' }, { c: 'green', l: 'Kerakli o\'sish: kamida +15–17% / yil' }], side: { big: '−5,4 mln', text: '5 yildan keyin har oy shuncha *orqada* qolasiz — oyligingiz oshgan bo\'lsa ham.' } },

    /* 49 */ { t: 'big', color: 'green', icon: '📊', k: 'O\'lchov chegarasi', h: 'Daromad o\'sishi ≥ *inflyatsiya + iqtisodiy o\'sish*', s: 'Yig\'indisi ~15–17% yiliga. Undan sekin o\'ssangiz — nominal daromadingiz oshsa ham, real o\'lchovda kambag\'allashib borasiz.' },

    /* ===== 7. Yashirish va bilim ===== */
    /* 50 */ { t: 'section', color: 'orange', icon: '🤫', n: '7', h: 'Boylikni yashirish va eskirmas bilim', s: 'Ko\'rinmaydigan boylik' },

    /* 51 */ { t: 'quote', color: 'orange', k: 'Boylikni yashirish', q: 'Pul va daromadni yashirish lozim.', by: 'Nassim Taleb va Uorren Baffet' },

    /* 52 */ { t: 'grid', color: 'red', icon: '🙊', k: 'Daromadni ko\'rsatish narxi', h: 'Pulingizni ko\'rsatsangiz — *nima* o\'zgaradi?', cols: 2, items: [
      { icon: '👥', h: 'Do\'stlar kamayadi', p: 'Munosabat pul atrofida aylana boshlaydi.' },
      { icon: '😒', h: 'Hasad ko\'payadi', p: 'Yutug\'ingizdan quvonadiganlar kamayadi.' },
      { icon: '💰', h: '«Qop pul» bo\'lib qolasiz', p: 'Sizga inson sifatida emas, hamyon sifatida qarashadi.' },
      { icon: '🙏', h: 'So\'rovchilar ko\'payadi', p: 'Qarz, homiylik, «bir yordam qiling».' }
    ] },

    /* 53 */ { t: 'grid', color: 'blue', icon: '🧠', k: 'Eskirmas bilim', h: 'Har kuni foydasi tegadigan *4 ta bilim*', cols: 2, items: [
      { icon: '📊', h: 'Mikroiqtisodiyot', p: 'Narx, talab, taklif — har kungi qarorlar ortidagi mantiq.' },
      { icon: '🤝', h: 'Sotuv', p: 'Har qanday kasbda — g\'oyani, o\'zini, mahsulotni sotish.' },
      { icon: '📣', h: 'Marketing', p: 'Sizni qanday qilib xarid qildirishlarini ko\'rasiz.' },
      { icon: '🧩', h: 'Mantiq', p: 'Tuzoqni tushmasdan oldin ko\'rish.' }
    ], note: 'Bu bilimlar eskirmaydi — va keraksiz tuzoqlardan qutqarib, *millionlarni* tejaydi.' },

    /* 54 */ { t: 'stack', color: 'orange', k: 'Kitoblar ketma-ketligi', h: 'Moliyaviy savodxonlik *zinasi*', s: 'Pastdan yuqoriga — shu tartibda o\'qing. Har kitob keyingisiga tayyorlaydi.', axis: 'Chuqurlik', books: ['Boy ota, kambag\'al ota', 'Pul alifbosi', 'Pulning onasini bilasizmi?', 'Millioner kabi fikrlang', 'Pul psixologiyasi', 'O\'yla va boy bo\'l', 'Latte omili', 'Fastlane Millionaire'], top: 'Moliyaviy erkinlik' },

    /* ===== Yakun ===== */
    /* 55 */ { t: 'checklist', color: 'green', icon: '✅', k: 'Bugungi 7 xulosa', h: 'Esda qoladigan *7 qoida*', items: [
      { n: '1', h: 'Qaramlik — kam pul emas, pul uchun *prinsipdan kechish*' },
      { n: '2', h: 'Daromad oshsa — xarajat *sekinroq* oshsin' },
      { n: '3', h: 'Boy ko\'rinish — boy bo\'lishga *to\'siq*' },
      { n: '4', h: 'Narxi tushadigan narsani *qarzga olmang*' },
      { n: '5', h: 'Avval *6 oylik zaxira*, keyin ilk $100 000, keyin sarmoya' },
      { n: '6', h: 'Daromad yiliga kamida *~15–17%* o\'ssin' },
      { n: '7', h: 'Boylikni *yashiring*, eskirmas bilimni o\'rganing' }
    ] },

    /* 56 */ { t: 'steps', color: 'green', icon: '📝', k: 'Uyga vazifa', h: 'Bu oy *boshlang*', all: true, items: [
      { n: '1', h: 'Budjet', p: '30 kun davomida har bir kirim va chiqimni yozing.' },
      { n: '2', h: 'Zaxira', p: '6 oylik xarajatingizni hisoblang, alohida hisob oching, birinchi qismini o\'tkazing.' },
      { n: '3', h: 'Qarz auditi', p: 'Barcha nasiya va qarzlarni bitta ro\'yxatga yozing: qancha, qachongacha, ustamasi.' },
      { n: '4', h: 'Nisbat qoidasi', p: 'Keyingi daromad oshishidan qanchasini jamg\'arishingizni hozirdan yozib qo\'ying.' },
      { n: '5', h: 'Birinchi kitob', p: '«Boy ota, kambag\'al ota» — o\'qing va 5 ta xulosa yozing.' }
    ] },

    /* 57 */ { t: 'end', icon: '🙌', h: 'Rahmat', s: '4-dars yakunlandi · Keyingi dars: 5-dars — Munosabatlar' }
  ]
};

'use strict';
/* Mentorlik (Shogirdlik) dasturi · 4-dars: Moliya
   Manba: 4-dars.pptx (8 slayd) + Notion "4-Dars - Moliya" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*4-dars* · Moliya', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'ask', icon: '💭', k: 'Boshlanish uchun savol', h: 'Siz uchun *pul* nima?', s: 'Pul yetishmovchiligi hayotingizda qanday muammolar keltirgan?' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d4-jamgarma.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Pul — *muhim* narsalarga ta\'sir qiladi', items: [
      'Pul hayotda eng muhim narsa emas — lekin *muhim narsalarga ta\'sir qiladi.*',
      'Boy kim? Vaqtimiz ko\'p va xotirjam bo\'lganimizda.',
      'Bugun: puldorlik va boylik, xavfsizlik yostiqchasi, pul topish va sarflash, budjet, kitoblar.'
    ], all: true },

    /* ---- Rich vs Wealthy ---- */
    { t: 'duel', color: 'orange', k: 'Rich vs Wealthy', h: 'Puldor va *boy* — bir narsa emas', a: { icon: '🕶️', h: '«Rich» — puldor', p: 'Kurtka $800 · Soat $200 · Krossovka $400. Ko\'rinishi qimmat, hisobi bo\'sh.', tag: 'Net worth: $15K' }, b: { icon: '🌳', h: 'Wealthy — boy', p: 'Kurtka $25 · Soat $45 · Krossovka $40. Ko\'rinishi oddiy, aktivlari ko\'p.', tag: 'Net worth: $1.2M' }, prize: '$1.2M', prizeLabel: 'Sof boylik', winner: 'b', note: 'Boylikni *ko\'rinish* emas — *aktivlar* belgilaydi.' },

    { t: 'table', color: 'green', icon: '⚖️', k: 'Puldorlik vs Boylik', h: 'Farqi *nimada*?', head: ['', 'Puldorlik', 'Boylik'], rows: [
      ['Asosi', 'Naqd pul', '*Aktivlar*: uy, yer, biznes, sarmoya'],
      ['Davomiylik', 'Vaqtinchalik', '*Uzoq muddatli*'],
      ['Manba', 'Ish haqi, yutuq', '*Passiv daromad*, moliyaviy mustahkamlik'],
      ['Xavfsizlik', 'Beqaror', '*Barqaror*'],
      ['Misol', 'Mashina olgan, ijarada yashaydi', 'Uy egasi, doimiy daromad manbai bor'],
      ['Mohiyati', 'Majburiyati ko\'p, vaqti kam', 'Majburiyati yo\'q, *vaqti ko\'p*']
    ] },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d4-uy.jpg', focus: 'center', k: 'Boylikning asosi', h: 'Naqd pul emas — *aktivlar*', items: [
      'Aktiv — o\'zi daromad keltiradigan narsa: uy, yer, biznes, sarmoya.',
      'Puldor: qimmat mashina olgan, lekin ijarada yashaydi.',
      'Boy: uy egasi, doimiy daromad manbai bor.',
      'Boylik = majburiyat kam, *vaqt ko\'p.*'
    ], all: true },

    { t: 'big', color: 'blue', icon: '⏳', k: 'Boy kim?', h: 'Vaqti ko\'p va *xotirjam* odam', s: 'Pul hayotda eng muhim narsa emas — lekin muhim narsalarga ta\'sir qiladi.' },

    /* ---- 1. Xavfsizlik yostiqchasi ---- */
    { t: 'section', color: 'orange', icon: '🛟', n: '1', h: 'Xavfsizlik yostiqchasi', s: 'Emergency fund · Crisis fund' },

    { t: 'bars', color: 'orange', icon: '🛟', k: 'Emergency fund', h: '*6 oylik* xavfsizlik yostiqchasi', rows: [
      { h: '1 oy', p: 'Boshlang\'ich', w: '17%', v: '1 oy', color: 'red' },
      { h: '3 oy', p: 'Minimal', w: '50%', v: '3 oy', color: 'orange' },
      { h: '6 oy', p: 'Maqsad', w: '100%', v: '6 oy', ticks: 6, color: 'green' }
    ], big: '6', bigText: 'oylik xarajatingizga teng pul — *tegilmaydigan* alohida hisobda. Ish yo\'qolsa, kasallik bo\'lsa, inqiroz kelsa — siz xotirjamsiz.' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d4-oltin.jpg', focus: 'center', k: 'Nima uchun kerak?', h: 'Xotirjamlik — *eng katta* daromad', items: [
      'Inqiroz, ish yo\'qotish, kasallik — hayotda bo\'lib turadi.',
      'Yostiqchasi bor odam qo\'rqmasdan qaror qiladi.',
      'Yostiqchasi yo\'q odam — har qarorni qo\'rquvdan qiladi.',
      'Avval yostiqcha — keyin sarmoya.'
    ], all: true },

    /* ---- 2. Pul topish va sarflash ---- */
    { t: 'section', color: 'red', icon: '⚖️', n: '2', h: 'Pul topish va sarflash', s: 'Ikkalasi — ikki xil ko\'nikma' },

    { t: 'vs', color: 'red', icon: '🧠', k: 'Ikki xil skill · 1', h: 'Pul *topish* va pul *sarflash* — ikki xil narsa', a: { icon: '🚀', h: 'Pul topishdagi skill', tone: 'gold', items: ['Tavakkal qilish (risk olish)', 'Tez harakat qilish', 'O\'zini ko\'rsatish, reklama qilish', 'Fursatni darrov ushlash (opportunity grab)', 'Har xil yo\'llarni sinab ko\'rish'] }, b: { icon: '🛡️', h: 'Pul sarflashdagi skill', tone: 'good', items: ['Ehtiyotkorlik (xatoni oldindan hisoblash)', 'Kutish, sabr qilish (delayed gratification)', 'Kamtarinlik, sokinlik', 'Rejalashtirish, kutib ko\'rish', 'Bitta yo\'lga sodiq qolish'] }, all: true },

    { t: 'vs', color: 'blue', icon: '🧠', k: 'Ikki xil skill · 2', h: 'Topgan odam *sarflashni* ham o\'rganishi kerak', a: { icon: '🚀', h: 'Pul topishdagi skill', tone: 'gold', items: ['Ijodkorlik, yangi g\'oya izlash', 'Ko\'p foyda olishga intilish', 'Tez ishlash, ko\'proq topish', 'Reklama va sotuvga pul tikish', 'Odamlar bilan tanishib imkoniyat yaratish'] }, b: { icon: '🛡️', h: 'Pul sarflashdagi skill', tone: 'good', items: ['Qoidalarga amal qilish', 'Barqarorlik, uzoq muddatli yondashuv', 'Kamroq sarflash, ko\'proq tejash', 'Xarajatni cheklash, budjetga rioya qilish', 'O\'ziga yetarli bo\'lish, moliyaviy mustaqillik'] }, all: true, note: 'Ko\'p topib — ko\'p sarflagan odam boy bo\'lmaydi. *Ikkala skill* birga kerak.' },

    /* ---- 3. Budjet ---- */
    { t: 'section', color: 'green', icon: '📒', n: '3', h: 'Budjet', s: 'Personal Money Management · Cashflow' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d4-budjet.jpg', focus: 'center', k: 'Personal money management', h: 'Shaxsiy va oilaviy *budjet*ni yozib boring', items: [
      'Kirim va chiqim — har oy yozma (*Cashflow*).',
      'Qayerga ketayotganini bilmagan pul — yo\'qolgan pul.',
      'Budjetlash — siz pulni boshqarasiz, pul sizni emas.'
    ], all: true },

    { t: 'grid', color: 'red', icon: '🪤', k: 'Sarflash tuzoqlari', h: 'Nima bizni *ortiqcha* sarflatadi?', cols: 3, items: [
      { icon: '😨', h: 'FOMO', p: 'Hamma olyapti — men ham olay. Imkoniyatni qo\'ldan chiqarish qo\'rquvi.' },
      { icon: '👨‍👩‍👧', h: 'Qarindoshlar bosimi', p: '«Falonchi oldi, sen ham ol». Boshqalarning kutgani — sizning budjetingiz emas.' },
      { icon: '📸', h: 'Odamlarga ko\'rsatish', p: 'Ko\'rinish uchun xarid — eng qimmat xarid.' }
    ], note: 'Har xarid oldidan bitta savol: *«Bu menga kerakmi yoki hozir xohlayapmanmi?»*' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d4-xarid.jpg', focus: 'center top', k: 'Impulsiv xarid', h: '*3 kun* kuting', items: [
      'Impulsiv xarid oldidan 3 kun kuting — ko\'pi kerak bo\'lmay chiqadi.',
      '«Arzonroq variantda nima qilsam bo\'ladi?» — deb so\'rang.',
      'Qiymatga (narxga) emas — *foydaga* qarab sarflang.'
    ], all: true },

    { t: 'vs', color: 'blue', icon: '🏷️', k: 'Arzon va tejash', h: 'Arzon va tejash — *ikki xil* narsa', a: { icon: '🏷️', h: 'Arzon olish', tone: 'bad', q: 'Arzon olgan — ikki karra to\'laydi', items: ['Tez buziladi — qayta olinadi', 'Faqat narxga qaraydi', 'Vaqt va asab ketadi'] }, b: { icon: '💎', h: 'Tejash', tone: 'good', q: 'Kerak narsani — sifatli oladi', items: ['Uzoq xizmat qiladi', 'Foydaga qaraydi', 'Kerak bo\'lmaganini umuman olmaydi'] } },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d4-minimalizm.jpg', focus: 'center', k: 'Minimalizm', h: 'Kam narsa — *ko\'p erkinlik*', items: [
      'Har bir narsa — vaqt, joy va e\'tibor talab qiladi.',
      'Kerak bo\'lmagan narsani olmaslik — eng yaxshi tejash.',
      'Kam, lekin sifatli.'
    ], all: true },

    { t: 'flow', color: 'red', icon: '💸', k: 'Pul 3 marta sarflanadi', h: 'Har bosqichda *ongli* bo\'ling', items: ['💭 Fikrda', '🤔 Qarorda', '🛒 Xaridda'], all: true, note: 'Pul avval *fikrda*, keyin *qarorda*, oxirida *xaridda* sarflanadi. Uchala bosqichda ham to\'xtab o\'ylang — xaridgacha yetib bormasin.' },

    /* ---- 4. Pulni ko'paytirish ---- */
    { t: 'section', color: 'blue', icon: '📈', n: '4', h: 'Pulni ko\'paytirish', s: 'Sarmoya va passiv daromad' },

    { t: 'grid', color: 'blue', icon: '📈', k: 'Sarmoya va passiv daromad', h: 'Pul *siz uchun* ishlasin', cols: 2, items: [
      { icon: '🏦', h: 'Sarmoya', p: 'Pulni ishlatish: biznes, uy, yer, ulush. Pul siz uxlaganda ham ishlaydi.' },
      { icon: '🌊', h: 'Passiv daromad', p: 'Sizning vaqtingizsiz keladigan daromad: ijara, ulush, foiz.' },
      { icon: '🧱', h: 'Avval poydevor', p: 'Yostiqcha → budjet → qarzsiz hayot → sarmoya. Tartib muhim.' },
      { icon: '⏳', h: 'Vaqt — ittifoqchi', p: 'Erta boshlagan yutadi: kichik sarmoya + uzoq vaqt = katta natija.' }
    ] },

    { t: 'stack', color: 'orange', k: 'Kitoblar ketma-ketligi', h: 'Moliyaviy savodxonlik *zinasi*', s: 'Pastdan yuqoriga — shu tartibda o\'qing. Har kitob keyingisiga tayyorlaydi.', axis: 'Chuqurlik', books: ['Boy ota, kambag\'al ota', 'Pul alifbosi', 'Pulning onasini bilasizmi?', 'Millioner kabi fikrlang', 'Pul psixologiyasi', 'O\'yla va boy bo\'l', 'Latte omili', 'Fastlane Millionaire'], top: 'Moliyaviy erkinlik' },

    { t: 'steps', color: 'green', icon: '📝', k: 'Uyga vazifa', h: 'Bu oy *boshlang*', all: true, items: [
      { n: '1', h: 'Budjet yozing', p: 'Bu oyning barcha kirim va chiqimini yozib boring — cashflow jadval.' },
      { n: '2', h: 'Yostiqchani hisoblang', p: '6 oylik xarajatingiz qancha? Alohida hisob oching va birinchi qismini o\'tkazing.' },
      { n: '3', h: 'Birinchi kitob', p: '«Boy ota, kambag\'al ota» — o\'qing va 5 ta xulosani yozing.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '4-dars yakunlandi · Keyingi dars: 5-dars — Munosabatlar' }
  ]
};

'use strict';
/* TTP · 3-modul: Asosiy darsni o'tish mezonlari — 30 mezon, 100 ball */

const POINTS = [
  ['S.M.A.R.T dars reja asosida darsga kirish', 'Darsni S.M.A.R.T (aniq, o\'lchanadigan, erishsa bo\'ladigan, ahamiyatli, vaqtli) maqsadlar asosida rejalashtirib boshlang. O\'quvchi dars oxirida nimaga erishishini aniq bilsin.', 7, null, '🎯'],
  ['BLOOM strategiyasi bilan darsga kirish', 'Darsni Bloom taksonomiyasi bo\'yicha quring: eslab qolishdan tahlil va baholashgacha bosqichma-bosqich fikrlashni rivojlantiring.', 5, null, '🧠'],
  ['Kirish: oldingi mavzularga bog\'lagan holda', 'Yangi mavzuni o\'tilgan mavzular bilan bog\'lab kiring. Bilim uzluksiz zanjir bo\'lib his qilinsin.', 2, null, '🔗'],
  ['Tarqatma materialdan foydalangan holda o\'tish', 'Darsni tarqatma materiallar (handout) yordamida o\'ting. Har bir bosqich ko\'rgazmali va amaliy bo\'lsin.', 2, null, '📄'],
  ['Uy vazifalarini 20 daqiqada tekshirish', '20 daqiqada kombinatsiyalar orqali har bir o\'quvchining uy vazifasini tekshiring (online/offline). Hech kim e\'tibordan chetda qolmasin.', 7, null, '⏱️'],
  ['Yangi mavzu nomini o\'quvchilarning o\'zlariga ayttirish', 'Yangi mavzu nomini o\'quvchilarning o\'zlariga aytdiring. Ular passiv tinglovchi emas, faol ishtirokchi bo\'lsin.', 2, null, '🗣️'],
  ['Yangi mavzuni savol bilan boshlash', 'Yangi mavzuni e\'tiborni tortadigan savol bilan boshlang. Birinchi soniyadanoq qiziqish uyg\'oting.', 2, null, '❓'],
  ['Ustoz 90% savol, 10% darak gapdan foydalanishi', 'Dars davomida 90% savol va 10% darak gap ishlating. O\'quvchini doimo fikrlash va javob izlashga undang.', 8, 'Eng yuqori ball', '💬'],
  ['O\'quvchida fan bo\'yicha dunyoqarashni shakllantirish', 'O\'quvchida fan bo\'yicha to\'g\'ri dunyoqarash: fanga ishonch, qiziqish va ijobiy munosabat shakllantiring.', 2, null, '🌍'],
  ['Ko\'z qarash (eye contact)', 'Ko\'z qarash orqali har bir o\'quvchi bilan aloqa o\'rnating va sinf e\'tiborini ushlab turing.', 1, null, '👁️'],
  ['Qo\'l harakatlari (gestures)', 'Qo\'l harakatlari (jest) orqali tushuntirishni jonli, ifodali va eslab qolinadigan qiling.', 1, null, '🙌'],
  ['Ovoz toni o\'zgaruvchan bo\'lishi', 'Ovoz tonini o\'zgartirib turing. Bir xil monoton ohang diqqatni susaytiradi.', 2, null, '🎚️'],
  ['Tezlik o\'zgaruvchan bo\'lishi', 'Gapirish tezligini o\'zgartiring: muhim joylarda sekinlashing, jonlantirishda tezlashing.', 2, null, '⏩'],
  ['O\'tilgan mavzuga amaliy mashg\'ulotlar', 'O\'tilgan mavzu bo\'yicha amaliy mashqlar bering. Nazariya amaliyot bilan mustahkamlansin.', 3, null, '🛠️'],
  ['O\'quvchilar ustozdan avval yangi detallarni aytishi', 'O\'quvchilarni ustozdan oldin yangi «detallarni» aytishga va yozishga undang. Kashf qilish orqali chuqurroq o\'rgansinlar.', 3, null, '🔍'],
  ['Orqaga o\'girilmaslik', 'Doskaga yozayotganda sinfga orqa o\'girmang. O\'quvchilar bilan aloqa va nazoratni uzmang.', 2, null, '🔄'],
  ['Yangi mavzuni 15 daqiqada tushuntira olish', 'Yangi mavzuni 15 daqiqada aniq va tushunarli qiling. Qisqalik, aniqlik va izchillik muhim.', 8, 'Eng yuqori ball', '⏳'],
  ['Savolga savol bilan javob topdirish', 'O\'quvchi savol berganda tayyor javob bermang. Savollar va tarqatma material orqali javobni o\'zi topib aytsin.', 5, null, '↩️'],
  ['Warm-up, ice-breaker, energizerlardan foydalanish', 'Warm-up, ice-breaker va energizerlardan foydalaning. Dars muhitini jonlantiring va kayfiyat yarating.', 3, null, '🔥'],
  ['Har bir o\'quvchi e\'tiborda, hamma qatnashishi', 'Har bir o\'quvchi e\'tiborda bo\'lsin va darsda hamma faol qatnashsin. Hech kim chetda qolmasin.', 3, null, '👥'],
  ['Mavzuni 5 yoshli bola tushunadigan tilda tushuntirish', 'Mavzuni 5 yoshli bola ham tushunadigan sodda, oddiy tilda tushuntiring.', 3, null, '🧒'],
  ['Har darsda oldingi mavzularni takrorlash', 'Har darsda oldingi mavzularni kombinatsiya shaklida takrorlang. Uzoq muddatli xotira mustahkamlansin.', 7, null, '🔁'],
  ['Tarqatma materiallar har bir o\'quvchida bo\'lishi', 'Tarqatma materiallar har bir o\'quvchida bo\'lishini ta\'minlang. Hamma teng sharoitda ishlasin.', 1, null, '📑'],
  ['Sense of humorni yetarli ishlatish', 'Darsda yengil hazil-mutoyiba ishlating. Muhit erkin, ijobiy va qiziqarli bo\'lsin.', 2, null, '😄'],
  ['Darsni qiziqarli o\'tish', 'Darsni qiziqarli o\'ting va mavzuni jonli, esda qoladigan tarzda tushuntiring.', 5, null, '🎉'],
  ['Uy vazifani tushunganini qayta so\'rash', 'Uy vazifani tushunganini isbotlash uchun o\'quvchidan qayta so\'rang. Tushunmovchilik qolmasin.', 2, null, '✅'],
  ['Jahl chiqarmasdan qattiqqo\'l bo\'lish', 'Jahl chiqarmasdan, xotirjam va izchil qattiqqo\'llik bilan sinf tartibini saqlang.', 1, null, '🧊'],
  ['Gamifikatsiyadan foydalanish', 'Gamifikatsiya: o\'yin elementlari, ballar va musobaqalar orqali motivatsiya va faollikni oshiring.', 5, null, '🎮'],
  ['O\'quvchining kichik yutuqlarini maqtash', 'O\'quvchining kichik yutuqlarini ham maqtang. Ishonch va ichki motivatsiyasini mustahkamlang.', 2, null, '👏'],
  ['Dars yakunida umumlashtirish va xulosalash', 'Dars yakunida asosiy nuqtalarni umumlashtiring va birgalikda xulosa chiqaring.', 2, null, '🧾']
];

const slides = [
  { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*3-modul* · Asosiy darsni o\'tish mezonlari', name: 'Jahongir Zoxidov', role: 'Trener' },
  { t: 'photo', layout: 'full', color: 'green', img: '/assets/t-auditoriya.jpg', focus: 'center', k: 'Kirish', h: 'Birinchi dars ishonch beradi. Asosiy darslar esa *natija* beradi.', s: 'Har bir mezon ball bilan o\'lchanadi. 100 ball — mukammal dars.' },
  { t: 'stats', color: 'blue', icon: '🧮', k: 'Metodika', h: '30 mezon · *100 ball*', items: [
    { v: '30', l: 'mezon', s: 'har asosiy darsda' },
    { v: '100', l: 'ball', s: 'mukammal dars' },
    { v: '8', l: 'eng yuqori ball', s: '90% savol · 15 daqiqada tushuntirish' }
  ], note: 'Ikkita mezon 8 balldan: *ustoz 90% savol bilan gapiradi* va *yangi mavzuni 15 daqiqada tushuntira oladi.*' }
];
POINTS.forEach(([h, p, pts, tag, icon], i) => {
  slides.push({ t: 'score', of: 30, icon, k: 'Dars mezonlari · ' + String(i + 1).padStart(2, '0') + ' / 30', n: String(i + 1).padStart(2, '0'), h, p, pts, tag });
});
slides.push({
  t: 'checklist', k: 'To\'liq cheklist · 100 ball', h: 'Mukammal dars — 30 mezon',
  items: POINTS.map(([h, p, pts], i) => ({ n: String(i + 1).padStart(2, '0'), h, pts, star: pts >= 7 })),
  total: 'Jami: 100 ball'
});
slides.push({ t: 'photo', layout: 'full', color: 'orange', img: '/assets/t-doska.jpg', focus: 'center', k: 'Amaliyot', h: 'O\'zingizning oxirgi darsingizga *ball qo\'ying.*', s: '30 mezon bo\'yicha halol baholang. Qaysi 3 ta mezonda eng ko\'p ball yo\'qotyapsiz?' });
slides.push({ t: 'end', icon: '🙌', h: 'Rahmat', s: '3-modul yakunlandi · Keyingi: 4-modul — Sinf boshqaruvi' });

module.exports = { slides };

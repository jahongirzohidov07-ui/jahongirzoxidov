'use strict';
/* TTP · 2-modul: Birinchi darsni o'tish metodikasi — 29 nuqta, 100 ball */

const POINTS = [
  ['Professional tashqi ko\'rinish', 'Toza, vaziyatga mos va ozoda kiyinish o\'quvchida hurmat va jiddiylik hissini uyg\'otadi. Esda tuting: siz fanning yuzisiz.', 2, null, '👔'],
  ['Sokinlik, samimiylik, ochiqlik', 'Ovozingiz, yuz ifodangiz va tana tilingiz xotirjam bo\'lsin. Samimiy tabassum o\'quvchidagi taranglikni bir lahzada yumshatadi.', 2, null, '😊'],
  ['Tanishuv: ism va familiya', 'O\'zingizni aniq va dadil tanishtiring, ismingiz o\'quvchining xotirasida muhrlanib qolsin.', 2, null, '🪪'],
  ['Tanishuv: faoliyat va malaka', 'Tajriba va yutuqlaringizni qisqa, lekin ta\'sirli aytib o\'ting. Bu sizga avtoritet va ishonch beradi.', 2, null, '🏅'],
  ['Nega ular aynan sizda o\'qishi kerak', 'Raqobat ustunligingizni ochiq ayting: nega aynan sizdan o\'qigan ma\'qul? (competitive advantage)', 2, null, '🥇'],
  ['Munosabat taklif qilish', 'Dars rasmiy imtihon emas, insoniy munosabat taklif qiling. «Keling, birga o\'rganamiz» kayfiyati ochiqlik va ishonch uyg\'otadi.', 2, null, '🤝'],
  ['Har bir o\'quvchi bilan 2–3 daqiqa suhbat', 'Har bir o\'quvchi bilan kamida 2–3 daqiqa shaxsiy suhbatlashing: uning maqsadi, qiziqishi va kayfiyatini his qiling. Shaxsiy e\'tibor sodiqlik yaratadi.', 7, 'Eng muhim', '💬'],
  ['Har bir o\'quvchiga karta ochib to\'ldirish', 'Har bir o\'quvchi uchun alohida karta yuriting (Obsidian\'da): ism, maqsad, daraja, qiziqishlari va eslatmalar. Bu sizning shaxsiy o\'quvchilar bazangiz, ya\'ni CRM\'ingiz.', 7, 'Obsidian', '🗂️'],
  ['Bilim darajalarini aniqlab olish', 'Har bir o\'quvchining boshlang\'ich bilim darajasini aniqlang: kim noldan, kim tajriba bilan kelgan. Darsni shu darajaga moslab boring.', 2, null, '📏'],
  ['Tajribalilarni «Chaos»ga tashlash', 'Avval boshqa joyda o\'qigan, «men bilaman» degan o\'quvchilarni qulay zonadan chiqaring. Yangi standart va sur\'atni his qildiring: toza varaqdan boshlash hammani bir saviyaga keltiradi.', 5, null, '🌪️'],
  ['O\'quvchilarni tez tanishtirib, chiqishtirish', 'O\'quvchilar bir-biri bilan tez tanishib, erkin muloqotga kirishini ta\'minlang. Jamoa hissi guruhga bog\'lanish va motivatsiyaning eng kuchli manbalaridan biri.', 5, null, '🧑‍🤝‍🧑'],
  ['Dars tartib-qoidalarini birga tuzish', 'Dars tartib-qoidalarini o\'quvchilar bilan birgalikda tuzing: o\'zlari ishtirok etgan qoidaga sodiq qoladi. Bu butun jarayonning poydevori, shu sabab eng yuqori ballga ega.', 8, 'Eng yuqori ball', '📜'],
  ['Yangi mavzuni savol bilan boshlash', 'Yangi mavzuni quruq ta\'rif bilan emas, qiziqarli va kutilmagan savol bilan oching. Savol miyani ishga soladi va e\'tiborni darhol o\'ziga tortadi.', 2, null, '❓'],
  ['Ekspertligingizni ko\'rsatib qo\'ying', 'Fan bo\'yicha chuqur va aniq tushuncha berib, o\'zingizni ishonchli ekspert sifatida namoyon qiling. O\'quvchi kuchli ustozdan o\'rganayotganini his qilsin.', 5, null, '🎓'],
  ['Nega aynan bu fanni o\'qish kerak', 'O\'quvchiga bu fanni o\'rganish nega zarurligini real hayotiy foydasi va kelajakdagi imkoniyatlari bilan tushuntiring.', 5, null, '🎯'],
  ['«Commitment letter» yozdirish', 'O\'quvchiga fanni o\'rganishdan maqsadi va kelajakdagi rejalari haqida qisqa «commitment letter» (majburiyat xati) yozdiring. Yozilgan maqsad ichki va\'da; u qiyin kunlarda ushlab turadi.', 5, null, '✍️'],
  ['Eng sodda «atom» narsani o\'rgatish', 'Fanga kirishda eng oddiy, eng «atom» darajadagi narsani o\'rgating. Birinchi qadam oson bo\'lsa, o\'quvchi «men uddalayman» deb ishonadi.', 5, null, '⚛️'],
  ['«O\'rgandim» degan hissini berish', 'O\'quvchi darsdan «men bugun aniq nimadir o\'rgandim» degan his bilan chiqsin. Aynan shu his qaytib kelishga eng kuchli sabab.', 5, null, '💡'],
  ['Telegram guruh ochish', 'Guruh uchun Telegram kanal yoki guruh oching: bu darsdan tashqari aloqa va e\'lonlar markazi bo\'ladi.', 2, null, '📱'],
  ['Kerakli ilovalarni o\'rnatdirish', 'Darsda kerak bo\'ladigan ilovalarni hammaga o\'rnatdiring va har birida ishlayotganini tekshiring. Hech kim ortda qolmasin.', 5, null, '📲'],
  ['Har bir o\'quvchi e\'tiborda bo\'lishi', 'Darsda hamma faol qatnashsin, hech bir o\'quvchi e\'tibordan chetda qolmasin.', 3, null, '👁️'],
  ['Guruhga umumiy nom berish', 'Guruhga umumiy nom tanlang: bu birlik va «biz bir jamoamiz» degan tegishlilik hissini beradi.', 2, null, '🏷️'],
  ['O\'quvchiga ishonch berish', 'Har bir o\'quvchiga «sen albatta uddalaysan» degan ishonchni singdiring. Ishonch harakatga turtki beradi.', 3, null, '💪'],
  ['Darsda hazil-mutoyiba ishlatish', 'Darsda yetarli darajada hazil ishlating: muhitni jonlantiradi va taranglikni yo\'qotadi. Faqat me\'yorida bo\'lsin.', 2, null, '😄'],
  ['Uy vazifasini qayta so\'rash', 'O\'quvchilar uy vazifasini to\'g\'ri tushunganini isbotlashi uchun qayta so\'rang. Tushunmovchilik darhol bartaraf bo\'lsin.', 2, null, '🔁'],
  ['O\'zingiz haqingizda ma\'lumot joylash', 'Darsdan keyin o\'zingiz haqingizdagi to\'liq ma\'lumotni guruhga joylang: o\'quvchi sizni yaxshiroq tanisin va ishonsin.', 2, null, 'ℹ️'],
  ['Shaxsan murojaat qilish', 'Har bir o\'quvchiga dars davomida kamida bir marta ism bilan shaxsan murojaat qiling: «men ko\'rinyapman» hissi.', 2, null, '🗣️'],
  ['Kichik yutuqlarni maqtash', 'O\'quvchining kichik yutug\'ini ham sezing va o\'rinli maqtab turing. Maqtov keyingi qadamga ishtiyoq uyg\'otadi.', 2, null, '👏'],
  ['Dars yakunini umumlashtirish', 'Dars yakunida o\'tilganlarni qisqacha umumlashtiring va aniq xulosa qiling. O\'quvchi nima o\'rganganini ravshan his qilsin.', 2, null, '🧾']
];

const slides = [
  { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*2-modul* · Birinchi darsni o\'tish metodikasi', name: 'Jahongir Zoxidov', role: 'Trener' },
  { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-dars.jpg', focus: 'center', k: 'Kirish', h: 'Birinchi dars — *bir umrlik* taassurot.', s: 'O\'quvchi sizni birinchi darsda tanlaydi yoki tark etadi. Shuning uchun birinchi dars metodikasi alohida fan.' },
  { t: 'stats', color: 'orange', icon: '🧮', k: 'Metodika', h: '29 nuqta · *100 ball*', items: [
    { v: '29', l: 'nuqta', s: 'birinchi darsda bajariladi' },
    { v: '100', l: 'ball', s: 'mukammal birinchi dars' },
    { v: '8', l: 'eng yuqori ball', s: 'dars qoidalarini birga tuzish' }
  ], note: 'Har bir nuqta ball bilan o\'lchanadi. Darsdan keyin o\'zingizga ball qo\'ying: *nechchi ball to\'pladingiz?*' },
  { t: 'ask', icon: '🤔', k: 'Boshlashdan oldin', h: 'Siz o\'z birinchi darsingizni *qanday* o\'tasiz?', s: 'Bir daqiqa o\'ylab ko\'ring: birinchi darsda hozir nimalar qilasiz? Qaysi birini ataylab, qaysi birini odat bo\'yicha?' }
];

POINTS.forEach(([h, p, pts, tag, icon], i) => {
  slides.push({ t: 'score', of: 29, icon, k: 'Birinchi dars metodikasi · ' + String(i + 1).padStart(2, '0') + ' / 29', n: String(i + 1).padStart(2, '0'), h, p, pts, tag });
});

slides.push({
  t: 'checklist', k: 'To\'liq cheklist · 100 ball', h: 'Birinchi dars metodikasi — 29 nuqta',
  items: POINTS.map(([h, p, pts], i) => ({ n: String(i + 1).padStart(2, '0'), h: h.replace('Har bir o\'quvchi bilan 2–3 daqiqa suhbat', '2–3 daqiqa shaxsiy suhbat').replace('Har bir o\'quvchiga karta ochib to\'ldirish', 'Karta ochib to\'ldirish (Obsidian)'), pts, star: pts >= 7 })),
  total: 'Jami: 100 ball'
});
slides.push({ t: 'photo', layout: 'full', color: 'green', img: '/assets/t-qollar.jpg', focus: 'center', k: 'Xulosa', h: 'Birinchi dars — butun kursning *kaliti.*', s: '29 nuqta · 100 ball · bitta mukammal birinchi dars' });
slides.push({ t: 'end', icon: '🙌', h: 'Rahmat', s: '2-modul yakunlandi · Keyingi: 3-modul — Asosiy darsni o\'tish mezonlari' });

module.exports = { slides };

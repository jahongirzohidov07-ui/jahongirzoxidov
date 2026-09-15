'use strict';
/* Mentorlik (Shogirdlik) dasturi · 10-dars: Blog
   Manba: Notion "10-Dars - Blog" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*10-dars* · Blog', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d10-mashinka.jpg', focus: 'center', k: 'Dars mavzusi', h: '*Yozish*ga fokus', s: 'Blog — sizning auditoriyangiz, obro\'yingiz va ikkinchi miyangiz.' },

    { t: 'grid', color: 'blue', icon: '✍️', k: 'Nima uchun yozish?', h: 'Yozishning *9 foydasi*', cols: 3, items: [
      { icon: '🧠', h: 'Fikr aniqligi', p: 'Yoza olmagan narsangizni tushunmagansiz.' },
      { icon: '🔓', h: 'Ruxsatsiz', p: 'Hech kimdan ruxsat kerak emas — bugun boshlaysiz.' },
      { icon: '📈', h: 'Ko\'payadi (compound)', p: 'Bir marta yozasiz — yillar davomida o\'qiladi.' },
      { icon: '⚡', h: 'Tezkor', p: 'Yozdingiz — bir daqiqada dunyoda.' },
      { icon: '🧱', h: 'Boshqa kontentga asos', p: 'Matn → video, podkast, kitob, dars.' },
      { icon: '🎯', h: 'Yuqori zichlik', p: 'O\'quvchi vaqtini tejaydi: 1 daqiqada 1 soatlik fikr.' },
      { icon: '⏳', h: 'Vaqtdan tashqari', p: 'Yaxshi matn 10 yildan keyin ham ishlaydi.' },
      { icon: '👥', h: 'Tanlangan auditoriya', p: 'Matn o\'qiydigan odam — saviyali odam.' },
      { icon: '🏢', h: 'Ishda ham', p: 'Xodim, sherik, investorga — yozma xat.' }
    ] },

    { t: 'bars', color: 'green', icon: '⏱️', k: 'Zichlik', h: '30–60 daqiqa yozish → *1 daqiqa* o\'qish', rows: [
      { h: 'Yozish', p: 'Muallif — bir marta', w: '100%', v: '60 daqiqa', color: 'orange' },
      { h: 'O\'qish', p: 'O\'quvchi — minglab marta', w: '3%', v: '1 daqiqa', color: 'green' }
    ], big: '60×', bigText: 'Siz bir marta 60 daqiqa sarflaysiz — minglab odam har biri *1 daqiqada* oladi. Bu — richak.' },

    { t: 'vs', color: 'orange', icon: '📱', k: 'Chuqurlik vs ko\'rish', h: '1 kishi bilan *2 soat* > 10 sekundlik ko\'rish', a: { icon: '📱', h: 'Instagram', tone: 'bad', items: ['Oyiga 60–100 video kerak', '10 sekundlik ko\'rish', 'Ertaga unutiladi', 'Auditoriya — tasodifiy'] }, b: { icon: '📝', h: 'Matn (va YouTube)', tone: 'good', items: ['YouTube: oyiga 6 video yetadi', 'Matn — 1 kishi bilan 2 soat', 'Bookmark qilinadi, qayta o\'qiladi', 'Auditoriya — saviyali'] }, all: true, note: 'Savol: *podpischik* ko\'pmi yoki *foyda* ko\'pmi? Bookmark qilinadigan matn yozing.' },

    { t: 'grid', color: 'red', icon: '🌟', k: 'Namunalar', h: 'Yozish orqali *dunyoga* chiqqanlar', cols: 4, items: [
      { icon: '🚀', h: 'Elon Musk', p: 'Twitter — qisqa matn.' },
      { icon: '💻', h: 'Paul Graham', p: 'Esselar — startap dunyosi.' },
      { icon: '🎲', h: 'Nassim Taleb', p: '«Incerto» seriyasi.' },
      { icon: '📣', h: 'Seth Godin', p: 'Har kuni bitta post — 20 yil.' },
      { icon: '🧠', h: 'Shane Parrish', p: 'Farnam Street.' },
      { icon: '💰', h: 'Morgan Housel', p: '«Pul psixologiyasi».' },
      { icon: '🔁', h: 'James Clear', p: '«Atomic Habits».' },
      { icon: '🧭', h: 'Naval', p: 'Tvitlar — falsafa.' },
      { icon: '🎸', h: 'Derek Sivers', p: 'Qisqa, aniq esselar.' },
      { icon: '🇺🇿', h: 'Xushnudbek', p: 'O\'zbek blogosferasi.' },
      { icon: '🇺🇿', h: 'Bekzod Hashimov', p: 'Iqtisod, tahlil.' },
      { icon: '📚', h: 'Medvedev', p: 'Uzun matn, chuqur tahlil.' }
    ] },

    { t: 'big', color: 'green', icon: '📨', k: 'Ishdagi kommunikatsiya', h: 'Ishdagi muloqot — *matnda*', s: 'Og\'zaki aytilgan — unutiladi. Yozilgan — qoladi, tekshiriladi, tarqatiladi. Xodimlar, sheriklar va investorlarga xat yozing.' },

    /* ---- Qanday boshlash? ---- */
    { t: 'section', color: 'orange', icon: '🚀', n: 'How', h: 'Qanday boshlash?', s: 'Taqlid → g\'oya → sarlavha → tahrir' },

    { t: 'steps', color: 'orange', icon: '🚀', k: 'How to start', h: 'Uch *qadam*', all: true, items: [
      { n: '1', h: 'Imitate — taqlid qiling', p: 'Yoqqan muallifning uslubini ko\'chiring. Avval taqlid — keyin o\'z ovozingiz.' },
      { n: '2', h: 'Get ideas — g\'oya toping', p: 'Uzoq analogiyalar, kuzatish, hayrat. *Hayratlantira olmasangiz — yozmang.*' },
      { n: '3', h: 'Nvidia CEO misoli', p: 'Jensen Huang idish yuvgan davrini aytib beradi — oddiy tajriba ham kuchli hikoya.' }
    ] },

    { t: 'vs', color: 'blue', icon: '🧩', k: 'Frameworks', h: 'Ikki *ramka*: SPA va PAS', a: { icon: '📖', h: 'SPA', tone: 'gold', q: 'Story · Platitude · Advice', items: ['Story — bo\'lgan voqea', 'Platitude — umumiy haqiqat', 'Advice — aniq maslahat'] }, b: { icon: '🧩', h: 'PAS', tone: 'good', q: 'Problem · Augmentation · Solution', items: ['Problem — o\'qituvchi almashdi', 'Augmentation — ota-onalar norozi, talaba ketyapti', 'Solution — almashtirish tartibi, ota-onaga xabar, kuzatuv'] }, all: true },

    { t: 'grid', color: 'red', icon: '🎯', k: 'Sarlavha va dalil', h: 'Sarlavha — *50%*', cols: 3, items: [
      { icon: '🪝', h: 'Headline = 50%', p: 'Qiziqtiradigan sarlavha, to\'g\'ridan-to\'g\'ri boshlanish. Kirish so\'zsiz — birinchi gapdan mohiyat.' },
      { icon: '⚖️', h: 'Ritorika', p: 'Dalil uch xil: statistika, hikoya, shaxsiy tajriba. Uchtasini aralashtiring.' },
      { icon: '💼', h: 'Yozib sotishni o\'rganing', p: 'Sotish — ishontirish. Yozish — ishontirishning mashqi.' }
    ], note: 'Statistika manbalari: *stats.uz, imrs.uz, statista.com,* GPT (tekshirib).' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d10-yozuv.jpg', focus: 'center', k: 'Edit, edit, edit', h: 'Yozish — *tahrir*', items: [
      'Ovoz chiqarib o\'qing — qoqilgan joy noto\'g\'ri joy.',
      'Og\'zaki so\'zlar bilan yozing — gapirgandek.',
      'Yuk tashimaydigan so\'zni olib tashlang: «juda», «lekin», «aslida».',
      'Qisqartiring. Yana qisqartiring.'
    ], all: true },

    { t: 'stack', color: 'orange', k: 'Kitoblar', h: 'Yozuvchining *javoni*', s: 'Pastdan yuqoriga: avval o\'g\'irlang, keyin ko\'rsating, keyin yozib o\'rganing, keyin jumlani sayqallang.', axis: 'Mahorat', books: ['Steal Like an Artist', 'Show Your Work', 'Writing to Learn', 'Several Short Sentences', 'Ilyahov · Pishi, sokrashchay'], top: 'Yozuvchi' },

    { t: 'grid', color: 'blue', icon: '📏', k: 'Shaxsiy blog qoidalari', h: 'Yozma blogning *qoidalari*', cols: 3, items: [
      { icon: '📅', h: 'Muntazam', p: 'Haftada kamida 1 post. Kayfiyatga qarab emas — jadval bo\'yicha.' },
      { icon: '🔖', h: 'Bookmark qilinadigan', p: 'Podpischik emas — foyda. O\'quvchi saqlab qo\'yadimi?' },
      { icon: '🫵', h: 'O\'z tajribangiz', p: 'Internetdan emas — hayotingizdan. Faqat siz yoza oladigan narsa.' },
      { icon: '✂️', h: 'Qisqa', p: 'Aytish mumkin bo\'lgan eng kam so\'z.' },
      { icon: '🪝', h: 'Sarlavha', p: 'Har postga 10 ta sarlavha — bittasini tanlang.' },
      { icon: '🗣️', h: 'Ovoz chiqarib', p: 'Chop etishdan oldin ovoz chiqarib o\'qing.' }
    ] },

    { t: 'steps', color: 'green', icon: '📝', k: 'Uyga vazifa', h: 'Birinchi *post*', all: true, items: [
      { n: '1', h: 'SPA post', p: 'O\'z tajribangizdan bitta hikoya — Story, Platitude, Advice ramkasida. 300–500 so\'z.' },
      { n: '2', h: '10 ta sarlavha', p: 'Shu postga 10 ta sarlavha yozing, eng kuchlisini tanlang.' },
      { n: '3', h: 'Tahrir va chop', p: 'Ovoz chiqarib o\'qing, 20% so\'zni o\'chiring — va chop eting. Havolani yuboring.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: 'Shogirdlik dasturi yakunlandi · 10 dars · 9 richak · bitta yo\'l' }
  ]
};

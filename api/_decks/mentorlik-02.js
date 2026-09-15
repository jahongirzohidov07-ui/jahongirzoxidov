'use strict';
/* Mentorlik (Shogirdlik) dasturi · 2-dars: Personality — shaxsiyat
   Manba: 2-dars.pptx (18 slayd) + Notion "2-Dars - Shaxsiyat" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*2-dars* · Personality — shaxsiyat', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d2-oyna.jpg', focus: 'center', k: 'Ikkinchi dars', h: 'What is *Personality?*', s: 'Shaxsiyat nima? Bugun o\'zimizga qaraymiz.', credit: 'Foto: Unsplash' },

    { t: 'roots', color: 'green', k: 'Eslatma · 1-darsdan', h: 'Shaxsiyat — daraxtning *ildizi*', s: 'Richaklar — tana, natija — meva. Mevalaringiz (amal va muvaffaqiyatlaringiz) qanday bo\'lishi aynan shu ildizga — shaxsiyatingizga bog\'liq.', items: [
      'Ildiz ko\'rinmaydi, lekin daraxtni ushlab turadi.',
      'Ildiz chuqur bo\'lsa — bo\'ron ham yiqita olmaydi.',
      'Shuning uchun 2-dars — o\'zimiz haqimizda.'
    ] },

    { t: 'brain', color: 'blue', plain: true, k: 'What · shaxsiyat nima?', h: 'Shaxsiyat — *uyg\'un majmua*', s: 'Fikrlash tarzi, his-tuyg\'ular, qadriyatlar, xatti-harakatlar va dunyoni idrok etish uslublarining uyg\'un majmuasi.', title: 'Shaxsiyat nimalardan iborat', center: 'Shaxsiyat', centerIcon: '🧩',
      nodes: [['🧠', 'Fikrlash tarzi'], ['❤️', 'His-tuyg\'ular'], ['🧭', 'Qadriyatlar'], ['🏃', 'Xatti-harakatlar'], ['👁️', 'Dunyoni idrok etish']], cross: [[0, 1], [2, 3]],
      steps: [
        { icon: '🧠', h: 'Qanday o\'ylaysiz', p: 'Fikrlash tarzi va his-tuyg\'ular', c: '#DBEAFE' },
        { icon: '🧭', h: 'Nimani muhim deysiz', p: 'Qadriyatlar — ichki kompas', c: '#DCFCE7' },
        { icon: '🏃', h: 'Qanday harakat qilasiz', p: 'Xatti-harakat va dunyoga qarash', c: '#FFEDD5' }
      ] },

    { t: 'ask', color: 'orange', k: 'Why', h: 'Why is it important?', s: 'Nega bu muhim?' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d2-sokrat.jpg', focus: 'center', k: 'Sokrat', h: '«Know thyself» — *o\'zingni tani*', items: [
      'O\'zini tanish — donolikning boshlanishi.',
      'O\'zini tanimagan — dunyoni hech qachon anglay olmaydi.'
    ], all: true, credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'full', color: 'green', img: '/assets/d2-kol.jpg', focus: 'center', k: 'Lao Tszi', h: 'Boshqalarni bilish — *aqllilik*. O\'zingni bilish — *haqiqiy donolik*.', s: '«Knowing others is wisdom, knowing yourself is enlightenment.»', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d2-kema.jpg', focus: 'center 40%', k: 'O\'xshatish', h: 'O\'zini tanimagan odam — *boshqarilmaydigan kema*', s: 'Qayerga urilishi noma\'lum. Shamol qayoqqa essa — o\'sha yoqqa suzadi.', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'full', color: 'red', img: '/assets/d2-tuman.jpg', focus: 'center', k: 'Xavf', h: 'Eng xavfli odam — *o\'zini tanimagan* odam', s: 'Chunki o\'zi nima xohlashi, nima qilishini bilmaydi.', credit: 'Foto: Unsplash' },

    { t: 'grid', color: 'orange', icon: '🪞', k: 'Why · nega muhim?', h: 'O\'zini tanimagan odam nimalardan *mahrum*?', cols: 2, items: [
      { icon: '💪', h: 'Kuchidan foydalana olmaydi', p: 'O\'z kuchini bilmagan odam kuchidan foydalana olmaydi.' },
      { icon: '🕳️', h: 'Zaifliklarining qurboni bo\'ladi', p: 'O\'z zaifliklarini bilmagan odam har bir to\'siqda yiqiladi.' },
      { icon: '🎯', h: 'Hayotini sovuradi', p: 'O\'z maqsadini bilmagan odam umrini bekorga o\'tkazadi.' },
      { icon: '🤝', h: 'Boshqalarni tushunmaydi', p: 'O\'zini tanigan odam boshqalarni ham to\'g\'ri tushunadi: rahm, sabr, idrok bilan qaraydi.' }
    ], note: '«O\'z qalbini ko\'ra olmagan — *boshqa qalbning nolasini eshitolmaydi.*»' },

    { t: 'grid', color: 'red', icon: '⚠️', k: 'Zaif nuqtalar', h: 'Har bir insonda *zaif nuqtalar* bor', cols: 4, items: [
      { icon: '😡', h: 'G\'azab', p: 'Jahl paytida qaror qilmang.' },
      { icon: '🍽️', h: 'Nafs', p: 'Xohish — ustingizdan hukmron bo\'lmasin.' },
      { icon: '😨', h: 'Qo\'rquv', p: 'Qo\'rquv qarorlaringizni boshqarmasin.' },
      { icon: '🛌', h: 'Dangasalik', p: 'Ertaga — hech qachon kelmaydigan kun.' }
    ], note: 'O\'zini tanimagan — bu zaifliklarni bilmaydi va *har bir to\'siqda yiqiladi.* O\'zini tanigan — ularni oldindan ko\'radi.' },

    { t: 'big', color: 'green', icon: '👑', k: 'Hikmat', h: 'O\'z ustidan *hokim* bo\'lgan kishi — shohdan ham buyukroqdir.', s: 'Birinchi davlat — o\'zingiz. Uni boshqarishni o\'rgangan odam qolganini ham boshqaradi.' },

    { t: 'circles', color: 'blue', k: 'Emotional intelligence', h: 'Hissiy *intellekt*', s: 'O\'z his-tuyg\'ularini tanish, boshqarish va boshqalarnikini tushunish. Shaxsiyatni boshqarishning amaliy quroli.',
      rings: [
        { label: 'MEN', short: '👁️', h: 'O\'zini anglash', p: 'Hozir nimani his qilyapman? Nega?' },
        { label: 'BOSHQARISH', short: '🎛️', h: 'O\'zini boshqarish', p: 'His-tuyg\'u — men emas. Men uni boshqaraman.' },
        { label: 'BOSHQALAR', short: '🤝', h: 'Boshqalarni tushunish', p: 'Odamlarning his-tuyg\'usini o\'qish va munosabat qurish.' }
      ] },

    /* ---- HOW ---- */
    { t: 'section', color: 'orange', icon: '🛠️', n: 'How', h: 'Qanday?', s: 'Shaxsiyat qanday shakllanadi va qanday rivojlantiriladi?' },

    { t: 'gallery', color: 'green', k: 'How · shaxsiyat qanday shakllanadi?', h: 'Shaxsiyatni *4 ta kuch* shakllantiradi', items: [
      { img: '/assets/d2-oila.jpg', icon: '🏠', h: 'Oila muhiti', p: 'Bolalik tajribalari, tarbiya uslubi, e\'tibor va mehr miqdori. Kam gaplashilgan, ko\'p tergalgan bola mehrsiz bo\'lib qoladi.' },
      { img: '/assets/d2-maktab.jpg', icon: '🏫', h: 'Atrof-muhit', p: 'Do\'stlar, ustozlar, jamiyatdagi rollar. Madaniyat, diniy va axloqiy qadriyatlar: «halol bo\'l, haromdan saqlan».' },
      { img: '/assets/d2-kitob.jpg', icon: '📚', h: 'Kitob va o\'z-o\'zini anglash', p: 'Mutolaa fikrlashni kengaytiradi: ertaklar, To\'maris, Zumrad va Qimmat. Hayotiy voqealardan anglash keladi.' },
      { img: '/assets/d2-sinov.jpg', icon: '🌧️', h: 'Hayotiy sinovlar', p: 'Stress, muammo va qarorlar. Qiyinchilikka qanday munosabatda bo\'lish — shaxsiyatni o\'yadi.' }
    ] },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d2-shakllanish.jpg', fit: 'contain', bg: '#0B1220', focus: 'center', k: 'Misol', h: 'Oila → Maktab → *Kitob va tajriba*', items: [
      'Otasi jahli chiqqanda so\'kingan bola — shaxsiyat shu yerdan shakllana boshlaydi.',
      '«Ichma, chekma» deb yoshlikdan tinmay uqtirilgan tarbiya — qadriyat bo\'lib qoladi.',
      'Maktabga chiqdi, muloqotga kirishdi — oilaviy muhitlar to\'qnashadi.',
      'Yoshligida qiyinchilik ko\'rgan sinfdoshlar tez ulg\'ayadi — qiyinchilikni tushunadi.'
    ], all: true },

    { t: 'ask', color: 'green', k: 'Savol', h: 'O\'zimiz qanday shaxsiyatni rivojlantirishimiz mumkin?', s: 'Bu — 5 ta qavatdan iborat bino.' },

    { t: 'circles', color: 'orange', k: 'Shaxsiyat qavatlari', h: 'Ichkaridan *tashqariga*', s: 'Oliy maqsad — markaz. Undan qadriyat, prinsip, xarakter va odat o\'sib chiqadi.',
      rings: [
        { label: 'MAQSAD', short: '🏔️', h: 'Oliy maqsad', p: 'Nima uchun yashayman? — xizmat, ibodat, saodat' },
        { label: 'QADRIYAT', short: '🧭', h: 'Nima muhim?', p: 'Ichki e\'tiqod va kompas' },
        { label: 'PRINSIP', short: '📏', h: 'Qanday yashayman?', p: 'Qadriyatdan kelib chiqqan aniq qoidalar' },
        { label: 'XARAKTER', short: '🪨', h: 'Kimman o\'zi?', p: 'Har kuni ko\'rsatgan fe\'l-atvor' },
        { label: 'ODAT', short: '🔁', h: 'Har kuni qanday yashayman?', p: 'Ongsiz bajariladigan takroriy harakatlar' }
      ] },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d2-oliy-maqsad.jpg', fit: 'contain', bg: '#0B1220', focus: 'center', k: '1 · Missiya, oliy maqsad', h: 'Hayotda *nima uchun* intilyapsiz?', items: [
      '*Xizmat* — odamlarga, jamiyatga foyda.',
      '*Ibodat* — Yaratganga bo\'lgan burch.',
      '*Saodat* — ikki dunyo baxti.',
      'O\'qish, mehnat, uyqu — vosita. Oliy maqsad — *yo\'nalish.*'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d2-qadriyat.jpg', fit: 'contain', bg: '#0B1220', focus: 'center', k: '2 · Qadriyat — «Nima muhim?»', h: 'Qadriyat — *ichki kompas*', items: [
      'Inson hayotida nimani eng muhim va aziz deb bilishi.',
      'Ichki e\'tiqod: halollik, hurmat, o\'sish, Islom, adolat.',
      'Sizni hayotda qaysi yo\'lga buradigan kompas.',
      '«Qaysi narsalar uchun *kurashishga arziydi?*» — degan savolning javobi.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d2-prinsip.jpg', fit: 'contain', bg: '#0B1220', focus: 'center', k: '3 · Prinsip — «Qanday yashayman?»', h: 'Prinsip — *amaliy mezon*', items: [
      'Qadriyatlar asosida qabul qilingan aniq qoidalar va chiziqlar.',
      'Qanday qaror qabul qilaman, qaysi vaziyatda qanday yo\'l tutaman.',
      'Haqiqiy prinsiplarni *«yo\'q»lar* ochib beradi, «ha»lar emas. «Yo\'q» deyishni bilmasangiz — prinsipingiz yo\'q.',
      'Evos boshqa fastfoodlardan prinsipga sodiqligi bilan farq qiladi. Kitob: Ray Dalio — *Principles*.'
    ], all: true },

    { t: 'checklist', color: 'blue', icon: '📏', k: 'Misol · mening prinsiplarim', h: 'Prinsip — qadriyatni hayotga tatbiq etadigan qadam', items: [
      { n: '1', h: 'Hech qachon yolg\'on gapirmayman' },
      { n: '2', h: 'Doim o\'rganishda bo\'laman' },
      { n: '3', h: 'Obro\'yimni doim puldan ustun qo\'yaman', star: true },
      { n: '4', h: 'Teng bo\'lsa — bo\'lsin; mening haqqim unda qolsa ham mayli, birovning haqqi menga o\'tmasin' },
      { n: '5', h: 'Go first, go positive' },
      { n: '6', h: 'Allohdan boshqasidan bir narsani ikki marta so\'ramayman, yalinmayman' },
      { n: '7', h: 'So\'zim — bu va\'dam', star: true },
      { n: '8', h: 'Xursandligimda va\'da bermayman, jahl paytida qaror qilmayman' },
      { n: '9', h: 'Hech qachon hech narsadan nolimayman' },
      { n: '10', h: 'Adolatni hamma narsadan ustun qo\'yaman', star: true },
      { n: '11', h: 'Xato qilsam, nohaqligimni bilsam — tezda tan olaman, uzr so\'rayman' }
    ] },

    { t: 'photo', layout: 'split', color: 'red', img: '/assets/d2-xarakter.jpg', fit: 'contain', bg: '#F5EFE6', k: '4 · Xarakter — «Kimman o\'zi?»', h: 'Xarakter — *hech kim ko\'rmayotganda* qilgan ishlaringiz', items: [
      'Qadriyat va prinsiplar asosida shakllangan real fe\'l-atvoringiz.',
      'Har kuni ko\'rsatgan sabr, jasorat, halollik, irodaning jamlanmasi.',
      'Qiyin vaziyatda halol qolgan odam — kuchli xarakter egasi.',
      'Bosim ostida prinsipidan chekinmaydigan inson — *mustahkam xarakter.*'
    ], all: true },

    { t: 'grid', color: 'orange', icon: '💬', k: 'Xarakter haqida', h: 'Beshta *hikmat*', cols: 3, items: [
      { icon: '🎭', h: 'Obro\' va xarakter', p: 'Sening obro\'ying — boshqalar nimani o\'ylaydi; sening xaraktering — Alloh nima biladi.' },
      { icon: '⏳', h: 'Vaqt', p: 'Vaqt — yuzdagi niqoblarni yechib, xarakterni ochadi.' },
      { icon: '🧱', h: 'Qiyinchilik', p: 'Qiyinchiliklar xarakterni quradi, zaiflik uni yemiradi.' },
      { icon: '🪞', h: 'Javob', p: 'Senga qilingan yomonlik emas, sening unga javobing xarakteringni ko\'rsatadi.' },
      { icon: '🌤️', h: 'Axloq', p: 'Yaxshi axloq yomon qismatni o\'zgartiradi.' }
    ] },

    { t: 'roots', color: 'green', k: 'Bitta daraxt', h: 'Qadriyat — ildiz, prinsip — shox, xarakter — *butun daraxt*', s: 'Qadriyat ildiz bo\'lsa, prinsip uning shoxi, xarakter esa butun daraxtdir.', tags: ['Qadriyat', 'Prinsip', 'Xarakter'], items: [
      'Ildizsiz shox yo\'q, shoxsiz meva yo\'q.',
      'Qadriyatlarini bilmagan odamning prinsipi ham bo\'lmaydi.',
      'Prinsipsiz odamning xarakteri — shamolga qarab o\'zgaradi.'
    ] },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d2-odatlar.jpg', fit: 'contain', bg: '#0B1220', focus: 'center', k: '5 · Odat — «Har kuni qanday yashayman?»', h: 'Odat — *takror* takror takror', items: [
      'Qayta-qayta takrorlangan harakat yoki qaror — oxir-oqibat ongli harakatsiz bajariladigan bo\'lib qoladi.',
      '«Avvalo biz odatlarni yaratamiz, so\'ng odatlar bizni yaratadi.» — *Aristotel*',
      'Biz — qayta-qayta qiladigan narsamizmiz. Mukammallik — harakat emas, odatdir.',
      'Inson — bir martalik g\'alabasi emas, *har kungi odatlari jamlanmasi.*'
    ], all: true },

    { t: 'flow', color: 'green', icon: '🔗', k: 'Stiven Kovi', h: 'Fikrdan *taqdirgacha*', all: true, items: ['Fikr', 'Harakat', 'Odat', 'Xarakter', 'Taqdir'], note: '«Sen maqsadlaring darajasiga ko\'tarilmaysan. Sen o\'z *odat va tizimlaring* darajasiga tushasan.» — James Clear' },

    { t: 'stats', color: 'orange', icon: '📈', k: 'Bokschi misoli', h: 'Har kuni *1%* — yilda *37 barobar*', items: [
      { v: '1%', l: 'har kuni sal yaxshiroq' },
      { v: '365', l: 'kun — har kuni ring, har kuni mashq' },
      { v: '37×', l: 'bir yildan keyin' }
    ], note: 'Bokschi bir kunda chempion bo\'lmaydi — har kuni bir xil mashqni takrorlaydi. *Inson odatlardan tashkil topgan.*' },

    { t: 'grid', color: 'blue', icon: '🌅', k: 'Amaliyot · shu darsning odatlari', h: 'Bugundan boshlaymiz', cols: 3, items: [
      { icon: '🧘', h: 'Tafakkur', p: 'O\'zini taftish qilish — har kuni 5 daqiqa.' },
      { icon: '📓', h: 'Sinbook', p: 'Xatolar va gunohlarni yozish.' },
      { icon: '📒', h: 'Logbook', p: 'Kun qaydlari, atomic notes.' },
      { icon: '🚶', h: '10 000 qadam', p: 'Har kuni, ertalab.' },
      { icon: '🤸', h: '5 daqiqa badantarbiya', p: 'Yengil, lekin har kuni.' },
      { icon: '📖', h: '20 daqiqa kitob', p: 'Kamida 5 bet.' },
      { icon: '📿', h: 'Salovat, istig\'for, zikr', p: 'Ruhiy intizom.' },
      { icon: '⭐', h: 'O\'ziga baho', p: 'Har kuni o\'zini o\'ziga baholash.' },
      { icon: '✍️', h: 'Yozish', p: 'Fikrni qog\'ozga tushirish.' }
    ] },

    { t: 'photo', layout: 'split', color: 'red', img: '/assets/d2-sinbook.jpg', focus: 'center', k: 'Uyga vazifa', h: '*Sinbook* yozishni boshlaymiz', items: [
      'Xatolar va gunohlar daftari — har kuni kechqurun.',
      'Nima xato qildim? Nega? Ertaga qanday qilaman?',
      'Bu — o\'zini tanishning eng halol usuli: *o\'zingga o\'zing hisob berasan.*'
    ], all: true },

    { t: 'steps', color: 'green', icon: '🎯', k: 'Yillik maqsadlar', h: 'Maqsadni *odatga* bo\'lib chiqing', all: true, items: [
      { n: '1', h: 'Yillik maqsad qo\'ying', p: 'Aniq, o\'lchanadigan, muddatli.' },
      { n: '2', h: 'Odatlarga bo\'ling', p: 'Katta maqsad — har kungi kichik odatlar yig\'indisi.' },
      { n: '3', h: 'Sabablarini yozib oling', p: 'Nima uchun? Motivatsiya tushganda shu sabablarni eslaysiz.' }
    ], note: 'Kitoblar: *Atomic Habits* (James Clear), *The Power of Habit* (Charles Duhigg), *Principles* (Ray Dalio).' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '2-dars yakunlandi · Keyingi dars: Karyera' }
  ]
};

'use strict';
/* Mentorlik (Shogirdlik) dasturi · 3-dars: Karyera
   Manba: 3-dars.pptx (16 slayd) + Notion "3-Dars - Karyera" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*3-dars* · Karyera', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d3-yiqilmaslik.jpg', fit: 'contain', bg: '#FFF7ED', focus: 'center', k: 'Dasturning shiori', h: 'Avval *yiqilmaslik* o\'rganiladi', items: [
      'Avval *pol* — keyin *potolok*ka harakat qilinadi.',
      'Barqaror kasb — bu siz uchun pol. Yiqilsangiz ham shu yerga tushasiz.',
      'Karyera — avval xavfsizlik, keyin yutuq.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d3-aktyor.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: 'Misol', h: 'Aktyor vs *Buxgalter*', items: [
      'Ikkalasi ham yaxshi kasb. Lekin *o\'yin qoidalari* boshqa.',
      'Aktyor: 4 000 barobar farq, 65% dan ko\'pi muvaffaqiyatsiz.',
      'Buxgalter: 4 barobar farq, 10% muvaffaqiyatsiz.',
      'Savol: yiqilsangiz — *qayerga tushasiz?*'
    ], all: true },

    { t: 'table', color: 'blue', icon: '📊', k: 'Yillik daromad · AQSh', h: 'Raqamlar nima deydi?', head: ['', 'Aktyor', 'Buxgalter'], rows: [
      ['O\'rtacha maosh', '$75 924', '$81 680'],
      ['Minimal', '$5 000', '$50 000'],
      ['Maksimal', '$20 000 000', '$192 000'],
      ['Farq', '*4 000×*', '4×'],
      ['Muvaffaqiyatsizlik', '*65%+*', '10%+']
    ], note: 'Aktyor — *zero sum game*: birov yutsa, birov yutqazadi. Buxgalter — *non-zero sum game*: hamma yutishi mumkin.' },

    { t: 'vs', color: 'red', icon: '🎲', k: 'Ikki xil o\'yin', h: 'Zero sum vs *Non-zero sum*', a: { icon: '🎭', h: 'Zero sum game', tone: 'bad', q: 'Birov yutadi — birov yutqazadi', items: ['Aktyor, sportchi, blogger', 'Yulduz bo\'lish ehtimoli — 1%', 'Yutqazganda pol yo\'q'] }, b: { icon: '🧮', h: 'Non-zero sum game', tone: 'good', q: 'Hamma yutishi mumkin', items: ['Buxgalter, dasturchi, shifokor', 'Barqaror daromad, past risk', 'Yiqilsangiz ham pol bor'] }, note: 'Biz yulduz bo\'lishga qarshi emasmiz. Avval *pol* quring — keyin sakrang.' },

    { t: 'stack', color: 'orange', k: 'Savol', h: 'Yiqilganda *qayerga* tushasiz?', s: 'Har bir kasb — bir qavat. Sizning polingiz qaysi qavatda? Yiqilganda o\'sha qavatga tushasiz.', axis: 'Xavfsizlik', books: ['Farrosh', 'Kuryer', 'Ofitsiant', 'Taksist', 'Usta', 'Buxgalter', 'Ustoz', 'Advokat', 'Dasturchi', 'Olim'], top: 'Sizning polingiz?' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d3-optionality.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: 'Being independent specialist', h: '*Mustaqil* mutaxassis bo\'lish', items: [
      'Hech kimga bog\'liq bo\'lmagan ko\'nikma — bu sizning erkinligingiz.',
      'Bu nimani anglatadi? *Optionality* — tanlov imkoniyati.',
      'Qancha ko\'p eshik ochiq bo\'lsa — shuncha erkin bo\'lasiz.'
    ], all: true },

    /* ---- HOW ---- */
    { t: 'section', color: 'blue', icon: '🧭', n: 'How', h: 'Qanday?', s: 'Karyerani qanday qurish kerak: 6 ta qoida' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d3-fanlar.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: '1 · Learning unchangeable as major', h: '*O\'zgarmas* fanlarni asos qiling', items: [
      'Inson psixologiyasi, fizika, moliya, algoritmlar.',
      'Fan, tibbiyot, kimyo, muhandislik.',
      'Bu bilimlar 100 yil oldin ham kerak edi, 100 yildan keyin ham kerak bo\'ladi.',
      'Texnologiya o\'zgaradi — *asos qoladi.*'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d3-yollar.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: '2 · Optionality in career choice', h: 'Ko\'proq *eshik ochadigan* yo\'lni tanlang', items: [
      '*High optionality* — bir yo\'l, ko\'p tarmoq: keyin istalgan tomonga burilasiz.',
      '*Moderate* — bir-ikki tarmoq.',
      '*Low optionality* — tor yo\'l: faqat bitta manzil, orqaga qaytish qiyin.',
      'Yoshlikda — keng yo\'l. Ixtisoslashuv — keyin.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d3-matematika.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: 'Misol · Matematika vs Statistika', h: 'Keng asos = *ko\'p eshik*', items: [
      'Matematika → statistik, data scientist, dasturchi, algoritmchi.',
      'Statistika → faqat statistik.',
      'Ikkalasi ham yaxshi. Lekin biri *4 ta eshik*, ikkinchisi — bitta.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'red', img: '/assets/d3-shaxmat.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: '3 · Minimize risks, then focus on winning', h: 'Avval *riskni kamaytiring*, keyin yutishga o\'ting', items: [
      'Shaxmatda avval shohni himoya qilasiz — keyin hujum.',
      'Karyerada avval pol — keyin potolok.',
      'Yutqazmaslikni o\'rgangan odam yutishni ham o\'rganadi.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d3-barbell.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: '4 · Barbell method', h: 'Xavfsiz ish + *imkoniyatli yo\'l*', items: [
      'Bir paytning o\'zida ikkala yo\'lni tutmoq — shtanga kabi: ikki og\'ir uch, o\'rtasi bo\'sh.',
      '*Xavfsiz ishlar* — o\'qituvchi, olim, doktor, dasturchi: barqaror, xavfi kam.',
      '*Imkoniyatli yo\'llar* — manager, SMM, marketolog: eksperimental, yuqori imkoniyat.',
      'O\'rtada emas — *ikkala chetda* turing.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d3-tezlik.jpg', fit: 'contain', bg: '#F8FAFC', focus: 'center', k: '5 · Learning speed = Earning speed', h: 'O\'rganish tezligi = *daromad tezligi*', items: [
      'Qancha tez o\'rgansangiz — shuncha tez topasiz.',
      'Savol-javob — kitobdan *6 barobar tez.*',
      'Manbalar tezligi bo\'yicha: dars → lecture → kitob → podcast.',
      'Qilayotgan ishi haqida kuniga 30 daqiqa ilm olmagan odam — o\'smaydi.'
    ], all: true },

    { t: 'vs', color: 'orange', icon: '📚', k: '6 · Nimani o\'rganish kerak?', h: 'Ikki holat — ikki *strategiya*', a: { icon: '🔍', h: 'Faraz + qiziqish', tone: 'neutral', q: 'Gigiyenik omillar hali yopilmagan bo\'lsa', items: ['Bozorni tahlil qiling: kim nimaga qancha to\'laydi', 'Yoqadigan va qiziqtiradigan sohani tanlang', 'Ikkalasining kombinatsiyasidan o\'sing'] }, b: { icon: '🌱', h: 'Qiziqish + imkoniyatlar', tone: 'gold', q: 'Gigiyenik omillar yopilgan bo\'lsa', items: ['Maoshga e\'tibor bermang', 'Bozorga e\'tibor bermang', 'Ko\'proq bilishga ichki xohishga ergashing', 'O\'rganish imkoniyati yaratadigan kasb o\'zgarishlarini tanlang'] }, note: 'Gigiyenik omillar — uy, ovqat, xavfsizlik. *Avval ular, keyin qiziqish.*' },

    { t: 'vs', color: 'blue', icon: '🚗', k: 'Growth point · daromad turi', h: 'Input-based → *Output-based*', a: { icon: '⏱️', h: 'Input-based', tone: 'bad', q: 'Soat, davomat, stavka', items: ['15 yil bitta joyda — rahbar Matizda', 'Komandadan foydalanib o\'zini tortadi', 'Ko\'proq ishlasang — sal ko\'proq olasan'] }, b: { icon: '🎯', h: 'Output-based', tone: 'good', q: 'Natija, ulush, bonus', items: ['Komandani tortadi — Captivada', 'Natija oshsa — daromad oshadi', 'Xulq-atvor (axloq) — o\'sish nuqtasi'] }, note: 'Bottleneck — o\'sishni to\'xtatib turgan joy. *Uni toping, daromad turini o\'zgartiring.*' },

    { t: 'big', color: 'green', icon: '🧒', k: 'Eslatma', h: 'Yosh bolaning miyasida *chegara yo\'q*', s: 'Uning miyasi uchun «mumkin emas» yo\'q. Chegaralarni keyin biz o\'zimiz qo\'yamiz — karyerada ham.' },

    /* ---- BIZNES ---- */
    { t: 'section', color: 'orange', icon: '🏢', n: '', h: 'Biznes', s: 'Karyeraning oxirgi bosqichi: biznesning to\'liq yoki bir qismiga egalik' },

    { t: 'grid', color: 'orange', icon: '💼', k: 'Biznes haqida 4 ta haqiqat', h: 'Avval *tushunib* oling', cols: 2, items: [
      { icon: '🎲', h: 'Biznesni o\'rgatish qiyin', p: 'Chunki input va output teng bog\'lanmagan: ko\'p ishlab kam olish ham, kam ishlab ko\'p olish ham mumkin.' },
      { icon: '🗝️', h: 'Haqiqiy karyera erkinligi', p: 'Biznesning to\'liq yoki bir qismiga egalik qilishdan keladi.' },
      { icon: '🪂', h: 'Yiqilgan tadbirkor', p: 'Hech qachon urinib ko\'rmagandan yaxshi.' },
      { icon: '⚙️', h: 'Sizsiz ishlamasa — bu biznes emas', p: 'Biznes ishlashi (o\'sishi emas) uchun siz kerak bo\'lsangiz — siz self-employed\'siz.' }
    ] },

    { t: 'grid', color: 'blue', icon: '🧩', k: 'Ichak Adizes · PAEI', h: 'Biznesda *4 ta rol*', cols: 4, items: [
      { icon: 'P', h: 'Producer', p: 'Mahsulot, natija. Ishni bajaradi.' },
      { icon: 'A', h: 'Administrator', p: 'Tizim, tartib, qoidalar.' },
      { icon: 'E', h: 'Entrepreneur', p: 'Vizyon, yangilik, imkoniyat.' },
      { icon: 'I', h: 'Integrator', p: 'Jamoa, munosabat, hamjihatlik.' }
    ], note: 'Hech kimda to\'rttasi birga yo\'q. *Sizda qaysi biri kuchli? Qolganini kim to\'ldiradi?*' },

    { t: 'steps', color: 'green', icon: '🛤️', k: 'Biznesga boradigan yo\'l', h: 'Uchta *tayanch*', all: true, items: [
      { n: '⭐', h: 'USP — noyob taklif', p: 'Building USP over UCA: raqobatchi ustunligi emas, *noyob taklif* quring — sizda bor, boshqada yo\'q.' },
      { n: '👥', h: 'Jamoa', p: 'Spetsnaz kabi: hamma faqat to\'g\'riga qaraydi, e\'tibor bilan. Chapga qaramaydi — chapdagi o\'z tomonini qaraydi. *Ishonch.*' },
      { n: '🧭', h: 'Integrity — vijdon', p: 'Fikri, gapi, amali va reaksiyasi *bitta chiziqda* bo\'lsa — ishonsa bo\'ladi.' }
    ] },

    { t: 'vs', color: 'red', icon: '⚖️', k: 'Biznes', h: 'Yutuqlari va *yuki*', a: { icon: '📈', h: 'Upsides', tone: 'good', items: ['Owning the upside — yutuqqa siz egalik qilasiz', 'Optionality — tanlov erkinligi', 'Erkinlik', 'Kattaroq qiymat yaratish', 'Passiv daromad', 'Doimiy o\'rganish bosimi'] }, b: { icon: '🏋️', h: 'Downsides', tone: 'bad', items: ['Accountability — hamma narsaga siz javobgarsiz', 'Risk', 'Juda band bo\'lish', 'Yolg\'izlik'] }, note: 'Ikkalasini ham *ko\'z ochib* qabul qiling.' },

    { t: 'grid', color: 'green', icon: '📚', k: 'Biznesning asosiy tamoyillari + kitoblar', h: 'Beshta *ustun*', cols: 5, items: [
      { icon: '📦', h: 'Mahsulot', p: 'Odamga kerak narsa.' },
      { icon: '🔭', h: 'Vizyon', p: 'Qayerga boryapmiz?' },
      { icon: '🧭', h: 'Boshqaruv', p: 'Prinsiplar, shaffoflik. Ken Iverson, Andy Grove.' },
      { icon: '📣', h: 'Marketing va sotuv', p: 'Odamlar qanday biladi va sotib oladi.' },
      { icon: '💰', h: 'Moliya', p: 'Pul qayerdan keladi, qayerga ketadi.' }
    ], note: 'Pedagoglar uchun: *Soloveychik, Makarenko* (ko\'chaning bolalarini olib tarbiyalagan). Yollash uchun: *«Who»* — Geoff Smart, Randy Street (whothebook.com).' },

    /* ---- Uyga vazifa ---- */
    { t: 'steps', color: 'blue', icon: '📝', k: 'Uyga vazifa', h: 'Qilayotgan sohangiz bo\'yicha', all: true, items: [
      { n: '1', h: 'Dekompozitsiya', p: 'Kasbingizni, mutaxassisligingizni bo\'limlarga bo\'ling. Masalan: boshqaruv, motivatsiya, training, sotuv.' },
      { n: '2', h: 'Role model va manba', p: 'Har bir bo\'lim uchun bitta role model va bitta manba (kitob, kurs, odam) toping.' },
      { n: '3', h: 'Har kuni 30 daqiqa', p: 'Qilayotgan ishingiz haqida har kuni 30 daqiqa ilm oling.' }
    ] },

    { t: 'grid', color: 'orange', icon: '✍️', k: 'Yozma vazifalar', h: 'Qog\'ozga *tushiring*', cols: 3, items: [
      { icon: '📋', h: '100 ta ish', p: 'Qilayotgan 100 ta ishimizni tahlil qilamiz — yozma. Har biri jarayonmi yoki vazifami?' },
      { icon: '💡', h: 'Karyerangizning ma\'nosi', p: 'O\'z karyerangizda ma\'no topish — yozma.' },
      { icon: '✅', h: 'Ishingizning talablari', p: 'Talabni bajarsangiz — qualified. Bajarmasangiz — unqualified. Ortig\'i bilan — overqualified.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '3-dars yakunlandi · Keyingi dars: 4-dars' }
  ]
};

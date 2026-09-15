'use strict';
/* TTP · 9-modul: Ustozlikdan tadbirkorlikka */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*9-modul* · Ustozlikdan tadbirkorlikka', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'section', color: 'blue', icon: '🚀', n: 'I', h: 'Kirish: nima uchun bu dars?', s: 'Ustozlikni daromad manbai sifatida professional ko\'rishni boshlash' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-jamoa.jpg', focus: 'center', k: 'Savol', h: 'Agar ustoz rivojlanib tadbirkorga aylanib *sizdan chiqib ketsa-chi*?', s: 'Yoki sizga bo\'ysunmay qo\'ysa-chi? Agar rivojlanmay shu yerda qolib ketsa-chi?' },

    { t: 'steps', color: 'orange', icon: '❓', k: 'Savollar', h: 'Tadbirkor kim? *Tadbir* nima?', all: true, items: [
      { n: '👤', h: 'Tadbirkor kim?' },
      { n: '🧩', h: 'Tadbir nima?', p: 'Nega «ish» deyilmaydi? Nega «tadbirkorlik» deyiladi?' }
    ] },

    { t: 'ask', icon: '🔥', k: 'Motivatsiya', h: 'Nimaga *tadbirkor* bo\'lish kerak?', s: 'Qaysi motivatsiya bizni uzoqqa olib boradi? Buni bilish kerak, chunki ba\'zi motivatsiyalar noto\'g\'ri.' },

    { t: 'vs', color: 'red', icon: '🚫', k: 'Noto\'g\'ri motivatsiya', h: 'Bu motivatsiyalar *uzoqqa* olib bormaydi', a: { icon: '👑', h: 'Noto\'g\'ri', tone: 'bad', q: '«Men o\'zimga o\'zim xo\'jayin bo\'laman»' }, b: { icon: '💰', h: 'Noto\'g\'ri', tone: 'bad', q: '«Ko\'p pul topaman»', p: 'Pul — natija, sabab emas.' }, all: true },

    { t: 'big', color: 'green', icon: '🔀', k: 'To\'g\'ri motivatsiya', h: '*Optionality* — variantlilik', s: 'Erkinlik tanlash imkoniyatida: pulda yoki maqomda emas.' },

    { t: 'bars', color: 'orange', icon: '📅', k: 'Yil davomida · 365 kun', h: 'Qancha *ish*, qancha *dam*?', rows: [
      { h: 'Xususiy maktab', p: '200 ish kuni / 165 dam · kuniga 3 soat bo\'sh', w: '55%', v: '200 ish kuni', color: 'green' },
      { h: 'Davlat maktabi', p: '213 ish kuni / 152 dam · kuniga 5 soat bo\'sh', w: '58%', v: '213 ish kuni', color: 'blue' },
      { h: 'O\'quv markaz', p: '275 ish kuni / 90 dam · kuniga 4 soat bo\'sh', w: '75%', v: '275 ish kuni', color: 'red' }
    ], note: 'O\'quv markazda kam dam, ko\'p soat. *Bu nimani anglatadi?*' },

    { t: 'grid', color: 'blue', icon: '🧩', k: 'Ichak Adizes · PAEI modeli', h: 'Inson tabiatining *4 turi*', cols: 4, items: [
      { icon: 'P', h: 'Producer', p: 'Ishlab chiqaruvchi. Natijaga yo\'naltirilgan, mahsulot va ish bajaradi.' },
      { icon: 'A', h: 'Administrator', p: 'Tizim, tartib, qoidalar. Hammasini joyiga qo\'yadi.' },
      { icon: 'E', h: 'Entrepreneur', p: 'Tadbirkor. Vizyon, yangilik, kelajak. Yangi imkoniyat ko\'radi.' },
      { icon: 'I', h: 'Integrator', p: 'Jamoa, munosabatlar, hamjihatlik yaratadi.' }
    ], note: '*Hech kimda bir vaqtda 4 tasi yo\'q.*' },

    { t: 'section', color: 'green', icon: '🛤️', n: 'II', h: 'Ustoz tadbirkor bo\'lishi usullari', s: '4 ta yo\'l, bittadan ko\'rib chiqamiz' },

    { t: 'tree', color: 'green', k: '4 ta yo\'l', h: 'Ustoz tadbirkor bo\'lishi *usullari*', s: 'Har bir yo\'l alohida strategiya. Ko\'pincha 2–3 tasini birlashtirish foydali.', root: { icon: '👩‍🏫', label: 'Ustoz' }, kids: [{ icon: '📘', label: 'Qo\'llanma' }, { icon: '📈', label: 'Qo\'shimcha ko\'lam' }, { icon: '🎓', label: 'Trenerlik' }, { icon: '🏢', label: 'Boshqaruv opsioni' }], items: [
      'Qo\'llanma orqali — bilim va metodikangizni mahsulotga aylantirish: kitob, qo\'llanma, video, test.',
      'Qo\'shimcha ko\'lam orqali — bir xil mehnat, ko\'p o\'quvchi: guruh, oqim, online format.',
      'Trenerlik orqali — boshqa ustozlarni o\'rgatish: ustozlar tayyorlash bo\'yicha xizmat.',
      'Boshqaruv opsioni orqali — ishlab turgan maktab, o\'quv markazda boshqaruvga o\'tish.'
    ] },

    { t: 'grid', color: 'orange', icon: '📘', k: '1-usul · qo\'llanma orqali', h: 'Bilim → mahsulot. *Qaysi formatlar?*', cols: 3, items: [
      { icon: '📚', h: 'Kitob', p: 'Bosma yoki elektron: bilimlarni tizimga solib bayon qilish' },
      { icon: '🎥', h: 'Online kurs', p: 'Video darslar paketi, platforma orqali sotish' },
      { icon: '📱', h: 'Ilova yaratish', p: 'Android/iOS yoki kompyuter uchun dastur' },
      { icon: '🎧', h: 'Audio kurs / podcast', p: 'Quloqdan eshitiladigan format, yo\'l-yo\'lakay o\'rganish' },
      { icon: '📋', h: 'Mini-guide / chek-list', p: 'Qisqa PDF yoki shablon: tezkor mahsulot' },
      { icon: '🤖', h: 'Telegram bot / kanal', p: 'Kontent kanal yoki avtomatlashgan o\'qitish boti' }
    ], note: '*Bittasidan boshlang.* Eng qulayidan, keyingisi.' },

    { t: 'vs', color: 'blue', icon: '📈', k: '2-usul · qo\'shimcha ko\'lam orqali', h: 'Odatdagidan ko\'proq odamga dars o\'tish *(faqat online formatda)*', a: { icon: '🎁', h: 'Birinchi qadam', tone: 'neutral', q: 'Bepul dars(lar) bilan boshlang', p: 'Birinchi 1 ta yoki bir nechta darsni bepul o\'ting: odamlar tanishadi, ishonadi, qiziqadi. Bu sizning vitrinangiz.' }, b: { icon: '💳', h: 'Keyingi bosqich', tone: 'gold', q: 'Pullik kurs(lar)ga olib chiqing', p: 'Bir martalik mehnat, ko\'p martalik daromad. Soatlik formatdan ozod. 100 → 1000 → 10 000 o\'quvchi.' }, all: true, note: 'Bepul ishonch quradi, *pullik daromadni masshtablashtiradi.*' },

    { t: 'pyramid', color: 'green', k: 'Mahsulot liniyasi · «voronka» tamoyili', h: 'Bilimdan mahsulot: *passiv daromad* uchun', s: 'Bepuldan premiumgacha: har o\'quvchi uchun mos taklif.', levels: [
      { icon: '🎁', label: 'Bepul', h: 'Telegram, kontent', p: 'Auditoriya yig\'ish — eng keng qatlam.' },
      { icon: '🏷️', label: 'Arzon', h: 'Mini-kurs, gid', p: '20–100 ming so\'m.' },
      { icon: '📦', label: 'O\'rta', h: 'To\'liq kurs, marafon', p: '300–800 ming so\'m.' },
      { icon: '💎', label: 'Premium', h: 'Mentorlik, intensiv', p: '1–5 mln so\'m va undan yuqori.' }
    ] },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/t-auditoriya.jpg', focus: 'center', k: '3-usul · trenerlik orqali', h: 'Boshqa *ustozlarni* o\'rgatish', items: [
      '*Afzallik:* doim vaqtingiz bo\'lmasa ham ishlaydi. Bir martalik o\'rgatish — ko\'p martalik shogirdlar ishlaydi.',
      '*Shart:* siz sohangizda ekspert yoki top mutaxassis bo\'lishingiz kerak.',
      'Trener — bu «ustozlar ustozi». *Faqat usta bo\'lganlar shogird tayyorlay oladi.*'
    ], all: true },

    { t: 'vs', color: 'blue', icon: '🏢', k: '4-usul · boshqaruv opsioni orqali', h: 'O\'zingiz boshqarasiz: *Administrator* tipdagi odam', a: { icon: '👩‍🏫', h: 'Ustoz', tone: 'neutral', items: ['O\'zingiz dars o\'tasiz', 'Sizning vaqtingiz = sizning daromadingiz'] }, b: { icon: '🧑‍💼', h: 'Boshqaruvchi', tone: 'gold', items: ['Siz resurslarni taqsimlaysiz, ishlarni bo\'lib berasiz', 'Natija = sizning daromadingiz'] }, all: true, note: 'Ustozlikdan boshqaruvga o\'tish — eng katta sakrash. *Endi siz tizim yaratasiz.*' },

    { t: 'duel', color: 'orange', k: 'Savol', h: 'Qaysi birini *xohlaysiz*?', a: { icon: '🥧', h: 'Variant A', p: '$1 000 — biznesning 100% qismi sizda', tag: '$1 000' }, b: { icon: '🏗️', h: 'Variant B', p: '$10 000 — biznesning 10% qismi sizda', tag: '$10 000' }, prize: '10×', prizeLabel: 'katta biznes', winner: 'b', note: '*Tadbirkor ulushini emas, biznes hajmini ko\'paytiradi.*' },

    { t: 'table', color: 'green', icon: '📈', k: 'Amaliy case · opsion qanday ishlaydi', h: '$5 000 sarmoya, yoki *5% ulush*?', head: ['', 'Bugun', '5 yildan so\'ng'], rows: [
      ['Biznes bahosi', '$100 000', '$500 000'],
      ['5% ulush', '$5 000', '*$25 000*'],
      ['Offer', 'Sotib olish huquqi (opsion) eski narxda', '= $5 000 da olish']
    ], note: 'Hozir xodim tanlaydi: $5 000 oladi, yoki 5% ulush = $25 000. *$5 000 ni tanlagan odam sohaning kelajagiga ishonmaydi yoki riskdan qo\'rqadi.*' },

    { t: 'ask', icon: '🤔', k: 'Savol', h: 'Nega bu yerda «o\'quv markaz yoki maktab ochish» variantini *yozmadim*?' },

    { t: 'vs', color: 'red', icon: '⚠️', k: 'Javob', h: 'Majburiyat biznesni *o\'ldiradi*', a: { icon: '0️⃣', h: '1–4 usullar', tone: 'good', q: '0 — eng yomoni, nolga chiqasiz', p: 'Vaqt va energiya ketadi, lekin pul majburiyati yo\'q. 0 da: «Vaqtimga roziman».' }, b: { icon: '➖', h: 'O\'quv markaz / maktab', tone: 'bad', q: '− — eng yomoni, minusga ketasiz', p: 'Ijara, oylik, soliq: pul topsangiz ham, topmasangiz ham. Minusda: «Pul ketishi kerak».' }, all: true, note: 'Bu butunlay boshqa his, butunlay boshqa risk. *Ertaga minusga kirganingizda meni eslamanglar.*' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/tangalar-osish.jpg', focus: 'center', k: 'Bonus · ustozlikdan tashqari', h: 'Qo\'shimcha ishlamasdan *pulni ishlating*', items: [
      '*Tejash* — ortiqcha xarajatdan voz kechish.',
      '*Invest* — pulni ishga qo\'yish: halol investitsiya platformalari, P2P, mahalliy biznes.',
      '*Rivojlanish* — pul pul tug\'adi. Maqsad: to\'plab tilla olish yoki ulush sotib olish.',
      'Daromadning ikkinchi oqimi: *vaqt sarflamasdan ham o\'sadigan oqim.*'
    ], all: true },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '9-modul yakunlandi · Keyingi: 10-modul — Ustozning shaxsiy rivojlanishi' }
  ]
};

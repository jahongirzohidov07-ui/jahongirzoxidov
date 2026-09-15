'use strict';
/* TTP · 9-modul: Ustozlikdan tadbirkorlikka */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 9-modul', h: 'Ustozlikdan tadbirkorlikka', s: 'Daromadni masshtablashtirish', meta: 'Jahongir Zoxidov' },

    { t: 'section', n: 'I', h: 'Kirish: nima uchun bu dars?', s: 'Ustozlikni daromad manbai sifatida professional ko\'rishni boshlash' },

    { t: 'ask', k: 'Savol', h: 'Agar ustoz rivojlanib tadbirkorga aylanib sizdan chiqib ketsa-chi?', s: 'Yoki sizga bo\'ysunmay qo\'ysa-chi? Agar rivojlanmay shu yerda qolib ketsa-chi?' },

    { t: 'steps', k: 'Savollar', h: 'Tadbirkor kim? Tadbir nima?', all: true, items: [
      { h: 'Tadbirkor kim?' },
      { h: 'Tadbir nima?', p: 'Nega «ish» deyilmaydi? Nega «tadbirkorlik» deyiladi?' }
    ] },

    { t: 'steps', k: 'Motivatsiya', h: 'Nimaga tadbirkor bo\'lish kerak?', all: true, items: [
      { h: 'Qaysi motivatsiya bizni uzoqqa olib boradi?', p: 'Buni bilish kerak, chunki ba\'zi motivatsiyalar noto\'g\'ri' }
    ] },

    { t: 'vs', k: 'Noto\'g\'ri motivatsiya', h: 'Bu motivatsiyalar uzoqqa olib bormaydi', a: { h: 'Noto\'g\'ri', tone: 'bad', q: '«Men o\'zimga o\'zim xo\'jayin bo\'laman»' }, b: { h: 'Noto\'g\'ri', tone: 'bad', q: '«Ko\'p pul topaman»', p: 'Pul — natija, sabab emas.' } },

    { t: 'big', k: 'To\'g\'ri motivatsiya', h: '*Optionality* — variantlilik', s: 'Erkinlik tanlash imkoniyatida: pulda yoki maqomda emas.' },

    { t: 'table', k: 'Yil davomida', h: '365 kunda qancha ish, qancha dam?', head: ['', 'Ish kuni / dam kuni', 'Kuniga bo\'sh vaqt'], rows: [
      ['Xususiy maktab', '200 / 165', '3 soat'],
      ['Davlat maktabi', '213 / 152', '5 soat'],
      ['O\'quv markaz', '275 / 90', '4 soat']
    ], note: 'O\'quv markazda kam dam, ko\'p soat. *Bu nimani anglatadi?*' },

    { t: 'grid', k: 'Ichak Adizes · PAEI modeli', h: 'Inson tabiatining 4 turi', cols: 4, items: [
      { icon: 'P', h: 'Producer', p: 'Ishlab chiqaruvchi. Natijaga yo\'naltirilgan, mahsulot va ish bajaradi.' },
      { icon: 'A', h: 'Administrator', p: 'Tizim, tartib, qoidalar. Hammasini joyiga qo\'yadi.' },
      { icon: 'E', h: 'Entrepreneur', p: 'Tadbirkor. Vizyon, yangilik, kelajak. Yangi imkoniyat ko\'radi.' },
      { icon: 'I', h: 'Integrator', p: 'Jamoa, munosabatlar, hamjihatlik yaratadi.' }
    ], note: '*Hech kimda bir vaqtda 4 tasi yo\'q.*' },

    { t: 'section', n: 'II', h: 'Ustoz tadbirkor bo\'lishi usullari', s: '4 ta yo\'l, bittadan ko\'rib chiqamiz' },

    { t: 'steps', k: '4 ta yo\'l', h: 'Ustoz tadbirkor bo\'lishi usullari', items: [
      { h: 'Qo\'llanma orqali', p: 'Bilim va metodikangizni mahsulotga aylantirish: kitob, qo\'llanma, video material, test.' },
      { h: 'Qo\'shimcha ko\'lam orqali', p: 'Bir xil mehnat, ko\'p o\'quvchi. Guruh, oqim, online format.' },
      { h: 'Trenerlik orqali', p: 'Boshqa ustozlarni o\'rgatish: ustozlar tayyorlash bo\'yicha xizmat.' },
      { h: 'Boshqaruv opsioni orqali', p: 'Ishlab turgan maktab, o\'quv markazda boshqaruvga o\'tish orqali.' }
    ], note: 'Har bir yo\'l alohida strategiya. *Ko\'pincha 2–3 tasini birlashtirish foydali.*' },

    { t: 'grid', k: '1-usul · qo\'llanma orqali', h: 'Bilim → mahsulot. Qaysi formatlar?', cols: 3, items: [
      { h: 'Kitob', p: 'Bosma yoki elektron: bilimlarni tizimga solib bayon qilish' },
      { h: 'Online kurs', p: 'Video darslar paketi, platforma orqali sotish' },
      { h: 'Ilova yaratish', p: 'Android/iOS yoki kompyuter uchun dastur' },
      { h: 'Audio kurs / podcast', p: 'Quloqdan eshitiladigan format, yo\'l-yo\'lakay o\'rganish' },
      { h: 'Mini-guide / chek-list', p: 'Qisqa PDF yoki shablon: tezkor mahsulot' },
      { h: 'Telegram bot / kanal', p: 'Kontent kanal yoki avtomatlashgan o\'qitish boti' }
    ], note: '*Bittasidan boshlang.* Eng qulayidan, keyingisi.' },

    { t: 'vs', k: '2-usul · qo\'shimcha ko\'lam orqali', h: 'Odatdagidan ko\'proq odamga dars o\'tish (faqat online formatda)', a: { h: 'Birinchi qadam', tone: 'neutral', q: 'Bepul dars(lar) bilan boshlang', p: 'Birinchi 1 ta yoki bir nechta darsni bepul o\'ting: odamlar tanishadi, ishonadi, qiziqadi. Bu sizning vitrinangiz.' }, b: { h: 'Keyingi bosqich', tone: 'gold', q: 'Pullik kurs(lar)ga olib chiqing', p: 'Bir martalik mehnat, ko\'p martalik daromad. Soatlik formatdan ozod. 100 → 1000 → 10 000 o\'quvchi.' }, note: 'Bepul ishonch quradi, *pullik daromadni masshtablashtiradi.*' },

    { t: 'flow', k: 'Mahsulot liniyasi · «voronka» tamoyili', h: 'Bilimdan mahsulot: passiv daromad uchun', items: ['Bepul: Telegram, kontent (auditoriya yig\'ish)', 'Arzon: mini-kurs, gid (20–100k so\'m)', 'O\'rta: to\'liq kurs, marafon (300–800k so\'m)', 'Premium: mentorlik, intensiv (1–5 mln so\'m+)'], note: 'Bepuldan premiumgacha: har o\'quvchi uchun mos taklif.' },

    { t: 'vs', k: '3-usul · trenerlik orqali', h: 'Boshqa ustozlarni o\'rgatish', a: { h: 'Afzallik', tone: 'good', items: ['Doim vaqtingiz bo\'lmasa ham ishlaydi', 'Bir martalik o\'rgatish, ko\'p martalik shogirdlar ishlaydi'] }, b: { h: 'Shart', tone: 'bad', items: ['Siz sohangizda ekspert yoki top mutaxassis bo\'lishingiz kerak'] }, note: 'Trener — bu «ustozlar ustozi». *Faqat usta bo\'lganlar shogird tayyorlay oladi.*' },

    { t: 'vs', k: '4-usul · boshqaruv opsioni orqali', h: 'O\'zingiz boshqarasiz: Administrator tipdagi odam', a: { h: 'Ustoz', tone: 'neutral', items: ['O\'zingiz dars o\'tasiz', 'Sizning vaqtingiz = sizning daromadingiz'] }, b: { h: 'Boshqaruvchi', tone: 'gold', items: ['Siz resurslarni taqsimlaysiz, ishlarni bo\'lib berasiz', 'Natija = sizning daromadingiz'] }, note: 'Ustozlikdan boshqaruvga o\'tish — eng katta sakrash. *Endi siz tizim yaratasiz.*' },

    { t: 'vs', k: 'Savol', h: 'Qaysi birini xohlaysiz?', a: { h: 'Variant A', tone: 'neutral', q: '$1 000 — biznesning 100% qismi sizda' }, b: { h: 'Variant B', tone: 'gold', q: '$10 000 — biznesning 10% qismi sizda' }, note: '*Tadbirkor ulushini emas, biznes hajmini ko\'paytiradi.*' },

    { t: 'table', k: 'Amaliy case · opsion qanday ishlaydi', h: '$5 000 sarmoya, yoki 5% ulush?', head: ['', 'Bugun', '5 yildan so\'ng'], rows: [
      ['Biznes bahosi', '$100 000', '$500 000'],
      ['5% ulush', '$5 000', '*$25 000*'],
      ['Offer', 'Sotib olish huquqi (opsion) eski narxda', '= $5 000 da olish']
    ], note: 'Hozir xodim tanlaydi: $5 000 oladi, yoki 5% ulush = $25 000. *$5 000 ni tanlagan odam sohaning kelajagiga ishonmaydi yoki riskdan qo\'rqadi.*' },

    { t: 'ask', k: 'Savol', h: 'Nega bu yerda «o\'quv markaz yoki maktab ochish» variantini yozmadim?' },

    { t: 'vs', k: 'Javob', h: 'Majburiyat biznesni o\'ldiradi', a: { h: '1–4 usullar', tone: 'good', q: '0 — eng yomoni, nolga chiqasiz', p: 'Vaqt va energiya ketadi, lekin pul majburiyati yo\'q. 0 da: «Vaqtimga roziman».' }, b: { h: 'O\'quv markaz / maktab', tone: 'bad', q: '− — eng yomoni, minusga ketasiz', p: 'Ijara, oylik, soliq: pul topsangiz ham, topmasangiz ham. Minusda: «Pul ketishi kerak».' }, note: 'Bu butunlay boshqa his, butunlay boshqa risk. *Ertaga minusga kirganingizda meni eslamanglar.*' },

    { t: 'steps', k: 'Bonus · ustozlikdan tashqari', h: 'Qo\'shimcha ishlamasdan pulni ishlating', items: [
      { h: 'Tejash', p: 'Ortiqcha xarajatdan voz kechish' },
      { h: 'Invest', p: 'Pulni ishga qo\'yish: halol investitsiya platformalari, P2P, mahalliy biznes' },
      { h: 'Rivojlanish', p: 'Pul pul tug\'adi. Maqsad: to\'plab tilla olish yoki ulush sotib olish' }
    ], note: 'Daromadning ikkinchi oqimi: *vaqt sarflamasdan ham o\'sadigan oqim.*' },

    { t: 'end', h: 'Rahmat', s: '9-modul yakunlandi' }
  ]
};

'use strict';
/* Dizayn namunalari — 5–9 richaklar, xulosa, konvertatsiya, odatlar, yakun */
module.exports = {
  slides: [
    /* ---- 5-richak: Oila ---- */
    { t: 'photo', layout: 'full', color: 'green', img: '/assets/oila-r5.jpg', focus: 'center', k: 'Beshinchi richak', h: 'Family', s: 'Oila — oilaviy richak', num: '5', credit: 'Foto: Unsplash' },

    { t: 'tree', color: 'orange', k: 'Misol · Rothschild oilasi', h: 'Dunyo bank tizimi *egalari*', s: 'XVIII–XIX asrda Yevropaning eng qudratli bank imperiyasini qurdilar.', items: [
      'Mayer Amschel Rothschild 5 o\'g\'lini 5 davlatga yuborib bank tarmog\'ini tuzgan.',
      'Kuch manbai: bank tizimi + siyosiy aloqalar + davlatlarga kredit.',
      'Bugun sulolaning boyligi aniqlanmaydi — aktivlar tarqoq va yashirin.'
    ], root: { icon: '👴', label: 'Mayer Amschel Rothschild', sub: 'Frankfurt, 1744–1812' }, kids: [{ icon: '👨', label: 'Amschel' }, { icon: '👨', label: 'Salomon' }, { icon: '👨', label: 'Nathan' }, { icon: '👨', label: 'Carl' }, { icon: '👨', label: 'James' }], leaves: ['Frankfurt', 'Vena', 'London', 'Neapol', 'Parij'], leafIcon: '🏦', rowLabel: '5 o\'g\'il', leafLabel: '5 davlat',
      note: 'Leverage turi: *kapital + siyosiy ta\'sir + transmilliy banklar.*' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/rockefeller.jpg', fit: 'contain', bg: '#111827', caption: 'Rockefeller oilasi, XX asr boshi', k: 'Misol · Rockefeller oilasi', h: 'Neft imperiyasidan *energetika qiroli*', items: [
      'John D. Rockefeller — tarixdagi eng boy odam (inflyatsiyani hisobga olganda).',
      'Standard Oil Amerika neft bozorining 90% ini nazorat qilgan.',
      'Keyin moliya, farmatsiya, universitetlar, xayriya fondlari, siyosatga kirishgan.',
      'Leverage turi: *energiya + moliya + fondlar + siyosiy networking.*'
    ], all: true },

    { t: 'grid', color: 'green', icon: '🇺🇿', k: 'Bizda ham bor', h: 'O\'zbekistondagi *sulolalar*', cols: 3, items: [
      { icon: '🏛️', h: 'Kamilovlar oilasi' },
      { icon: '🏛️', h: 'Mamasaidovlar oilasi' },
      { icon: '🏛️', h: 'Rajabiylar' }
    ], note: 'Sulola — bu *bir avlodda emas, uch avlodda* quriladigan richak.' },

    { t: 'tree', color: 'blue', k: 'How · qanday?', h: 'Kamida *10 ta farzand*', s: 'Sulolaviy oila tuzish — bu ham strategiya.', items: [
      '10 ta farzandni mo\'ljal qiling, shundan 5 ta o\'g\'il.',
      'Kuchli maktablarda o\'qiting, hamma kursni olib bering.',
      'Homeschooling — *ona madrasa*: uy ham maktab.'
    ], root: { icon: '👨‍👩‍👧', label: 'Sizning oilangiz' }, kids: [{ icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }, { icon: '👦' }, { icon: '👧' }], rowLabel: '10 farzand' },

    { t: 'stats', color: 'orange', icon: '🕸️', k: 'Why · nega?', h: 'Tasavvur qiling: 10 ta farzandingizdan *10 ta quda*', items: [
      { v: '10', l: 'farzand' },
      { v: '10', l: 'quda — 10 ta yangi oila' },
      { v: '100+', l: 'qarindosh — tayyor aloqalar tarmog\'i' }
    ], note: 'Qarindoshlar ko\'pligi *noyob aloqalar* ehtimolini oshiradi. Ko\'p masalalar birgalikda hal bo\'ladi.' },

    /* ---- 6-richak: Auditoriya ---- */
    { t: 'photo', layout: 'full', color: 'red', img: '/assets/auditoriya-r6.jpg', focus: 'center', k: 'Oltinchi richak', h: 'Audience', s: 'Auditoriya — hamma mashhurlar shu richak bilan', num: '6', credit: 'Foto: Unsplash' },

    { t: 'gallery', color: 'red', k: 'How · qanday?', h: 'O\'z ekspertligingiz bo\'yicha *blog* yuriting', items: [
      { img: '/assets/blog-yozma.jpg', icon: '✍️', h: 'Yozma', p: 'Telegram kanal, maqola, kitob. Fikringiz — matnda qoladi.' },
      { img: '/assets/blog-video.jpg', icon: '🎥', h: 'YouTube', p: 'Video darslar, intervyular. Bir marta yozasiz — minglab odam ko\'radi.' },
      { img: '/assets/blog-instagram.jpg', icon: '📱', h: 'Instagram', p: 'Kundalik kontent, reels. Odamlar sizni har kuni ko\'radi.' }
    ], note: 'Qiziqqan sohangizda yoki maqsadingizga mos sohada — *shaxsiy blog.*' },

    { t: 'grid', color: 'orange', icon: '📣', k: 'Why · nega?', h: 'Auditoriya nima beradi?', cols: 3, items: [
      { icon: '🛒', h: 'Bittada ko\'p odamga sotish', p: 'Bitta yasaysiz — millionta sotasiz.' },
      { icon: '👥', h: 'Jamoa yig\'ish', p: 'Odam qidirmaysiz — odamlar sizga keladi.' },
      { icon: '🌙', h: 'Passive leverage', p: 'Siz uxlaganda ham kontent ishlaydi.' },
      { icon: '💪', h: 'O\'zingizdan kuchli qiladi', p: 'Ming odam bir odamdan kuchli.' },
      { icon: '🚀', h: 'Eng tez o\'sadigan', p: 'Boshqa richaklardan tezroq o\'stirsa bo\'ladi.' }
    ] },

    { t: 'profile', color: 'green', k: 'Misol · Alex Hormozi', img: '/assets/hormozi.jpg', name: 'Alex Hormozi', role: '«$100M Money Models» muallifi', h: 'Bir kunda *2 700 000* kitob', s: 'Narxi 20–30 $. Bir kunlik savdo — 54–81 million dollar.', items: [
      'Kitob chiqishidan oldin auditoriya tayyor edi — millionlab obunachi.',
      'Bitta mahsulot × katta auditoriya = *bir kunda imperiya daromadi.*',
      'Auditoriya bo\'lmasa — o\'sha kitob 2 700 emas, 27 ta sotilardi.'
    ] },

    /* ---- 7-richak: Sherik ---- */
    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/sherik-r7.jpg', focus: 'center', k: 'Yettinchi richak', h: 'Partner', s: 'Sherik — 1 + 1 = 11', num: '7', credit: 'Foto: Unsplash' },

    { t: 'gallery', color: 'blue', numbered: false, k: 'Misollar', h: 'Yaxshi sherik: *1 + 1 = 11*', items: [
      { img: '/assets/jobs-wozniak.jpg', icon: '🍏', h: 'Steve Jobs + Steve Wozniak', p: 'Apple. Biri — vizyon va sotuv, ikkinchisi — muhandislik. Alohida ikkalasi ham Apple emas edi.' },
      { img: '/assets/buffett-munger-dalio.jpg', icon: '📈', h: 'Buffett · Munger · Dalio', p: 'Berkshire Hathaway, Bridgewater. Dunyodagi eng katta kapitallar — sheriklik asosida.' }
    ] },

    { t: 'vs', color: 'green', icon: '🧩', k: 'How · qanday?', h: 'Sizda yo\'q richak borlar bilan *sherik bo\'ling*', a: { h: 'Sizda bor', tone: 'good', items: ['Noyob bilim', 'Vaqt va mehnat', 'Jamoa'] }, b: { h: 'Sherikda bor', tone: 'gold', items: ['Kapital', 'Aloqalar', 'Auditoriya'] }, note: 'Hamma resurs bitta odamda bo\'lishi ehtimoli *juda kam.*' },

    { t: 'grid', color: 'orange', icon: '🪂', k: 'Why · nega?', h: 'Sherik nima beradi?', cols: 3, items: [
      { icon: '🧩', h: 'To\'liq resurs', p: 'Hamma resurs sizda bo\'lishi ehtimoli kam — sherik to\'ldiradi.' },
      { icon: '🪂', h: 'Jarlikka qulamaysiz', p: 'Yiqilsangiz — birdan pastga emas, sherik ushlab qoladi.' },
      { icon: '🎯', h: 'Qaror sifati oshadi', p: 'Ikki ko\'z bir ko\'zdan ko\'proq ko\'radi.' },
      { icon: '🛡️', h: 'Risk kamayadi', p: 'Zarar ham, yuk ham bo\'linadi.' },
      { icon: '⚡', h: 'Samaradorlik 4–5×', p: 'Ikki odam — ikki emas, to\'rt-besh barobar natija.' }
    ] },

    /* ---- 8-richak: Obro' ---- */
    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/obro-r8.jpg', focus: 'center', k: 'Sakkizinchi richak', h: 'Reputation', s: 'Obro\' — siz yo\'qligingizda siz haqingizdagi gaplar', num: '8', credit: 'Foto: Unsplash' },

    { t: 'profile', color: 'blue', k: 'Misol · Warren Buffett', img: '/assets/buffett.jpg', name: 'Warren Buffett', role: 'Berkshire Hathaway', h: 'Bitta xat — *milliardlab* investitsiya', s: 'Investorlarga bitta xat jo\'natadi → bir kunda bir necha milliard sarmoya oqib keladi.', items: [
      'Nega? Chunki 60 yil davomida *halollik va ehtiyotkorlik* obro\'sini yaratgan.',
      'Obro\' — siz yo\'qligingizda siz haqingizdagi gaplar.',
      'Ishonch bir kunda qurilmaydi, lekin bir kunda yo\'qolishi mumkin.'
    ] },

    { t: 'stack', color: 'green', k: 'How · qanday?', h: 'Obro\' *5 ta g\'ishtdan* quriladi', s: 'Har kuni, har bir ishda. Bittasi tushsa — butun devor qimirlaydi.', axis: 'Ishonch', books: ['Halollik', 'Mardlik', 'Va\'daning ustidan chiqish', 'Natija = isbot', 'Chiroyli muomala'], top: 'Obro\'' },

    { t: 'brain', color: 'orange', plain: true, k: 'Why · nega?', h: 'Sizning obro\'yingiz *nimalarni ochadi?*', s: 'Obro\' — o\'zi ishlaydigan richak: siz gapirmasdan turib odamlar «ha» deydi.', title: 'Obro\' nimalarga ta\'sir qiladi', center: 'Obro\'', centerIcon: '🏅',
      nodes: [['⚡', 'Qarorlar tezlashadi'], ['🤝', 'Muzokaralar osonlashadi'], ['📄', 'Shartnomalar yengillashadi'], ['🔗', 'Aloqalar ochiladi'], ['📣', 'Auditoriya ko\'payadi'], ['💰', 'Kapital keladi'], ['👥', 'Jamoa birlashadi']], cross: [[0, 1], [2, 3], [4, 5]],
      steps: [
        { icon: '🗣️', h: 'Siz yo\'qsiz — obro\' gapiradi', p: 'Odamlar sizni ko\'rmasdan ishonadi', c: '#FFEDD5' },
        { icon: '⏱️', h: 'Vaqt tejaydi', p: 'Isbotlash shart emas — tarix isbotlaydi', c: '#DCFCE7' },
        { icon: '🧲', h: 'O\'zi tortadi', p: 'Kapital, odamlar, imkoniyatlar sizga keladi', c: '#DBEAFE' }
      ] },

    { t: 'bars', color: 'red', icon: '📶', k: 'Obro\' ko\'lami', h: 'Bir odamdan *auditoriyagacha*', rows: [
      { h: 'Bir odamning obro\'si', p: 'Faqat siz', w: '8%', v: '1×', color: 'blue' },
      { h: 'Jamoaning obro\'si', p: 'Siz + jamoangiz', w: '25%', v: '10×', color: 'green' },
      { h: 'Oilaviy qadriyatlar bilan', p: 'Sulola nomi', w: '50%', v: '30×', color: 'orange' },
      { h: 'Auditoriya qo\'shilsa', p: 'Minglab odam sizni biladi', w: '100%', v: '100×', ticks: 10, color: 'red' }
    ] },

    /* ---- 9-richak: Shaxsiyat ---- */
    { t: 'photo', layout: 'full', color: 'green', img: '/assets/shaxsiyat-r9.jpg', focus: 'center', k: 'To\'qqizinchi richak', h: 'Personality', s: 'Shaxsiyat — barcha richaklarning ildizi', num: '9', credit: 'Foto: Unsplash' },

    { t: 'roots', color: 'green', k: 'What · nima?', h: 'Barcha kuchli insonlarning *shaxsiyati kuchli* bo\'lgan', s: 'Shaxsiyat — ildiz. Richaklar — tana. Natija — meva. Ildiz bo\'lmasa, daraxt turmaydi.', items: [
      'Shaxsiyat — sizning o\'zingiz, shaxs sifatida.',
      'Ildiz ko\'rinmaydi, lekin hamma narsani ushlab turadi.',
      'Ildiz qancha chuqur — meva shuncha ko\'p.'
    ] },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/tarozi.jpg', fit: 'contain', bg: '#0B1220', k: 'Ichki va tashqi', h: 'Reputatsiya — *tashqi*. Shaxsiyat — *ichki*.', items: [
      'Ichki kuch bo\'lmasa, tashqi obro\' yiqiladi.',
      'Shaxsiyati mustahkam odamning obro\'si *o\'zi o\'sadi.*',
      'Shaxsiyat — reputatsiya richagining ildizi va *barcha richaklarning fundamenti.*'
    ], all: true },

    /* ---- Xulosa ---- */
    { t: 'grid', color: 'blue', icon: '🧭', k: 'Xulosa', h: '9 ta richak', cols: 3, prog: false, items: [
      { icon: '💡', h: '1 · Unique knowledge', p: 'Noyob bilim' }, { icon: '🔗', h: '2 · Unique links', p: 'Noyob aloqalar' }, { icon: '💰', h: '3 · Capital', p: 'Kapital' },
      { icon: '👥', h: '4 · Team', p: 'Jamoa' }, { icon: '🏠', h: '5 · Family', p: 'Oila' }, { icon: '📣', h: '6 · Audience', p: 'Auditoriya' },
      { icon: '🤝', h: '7 · Partner', p: 'Sherik' }, { icon: '🏅', h: '8 · Reputation', p: 'Obro\'' }, { icon: '🌟', h: '9 · Personality', p: 'Shaxsiyat' }
    ] },

    { t: 'flow', color: 'orange', icon: '🔄', k: 'Leverage konvertatsiyasi', h: 'Bir richak *ikkinchisiga aylanadi*', all: true, items: ['Knowledge · bilim', 'Audience · auditoriya', 'Reputation · obro\''], note: 'Bilim auditoriya yig\'adi, auditoriya obro\' beradi. *Bittadan boshlang — qolgani zanjir bo\'lib keladi.*' },

    { t: 'table', color: 'green', k: 'Leverage konvertatsiyasi · misollar', h: 'Kimlar qanday yo\'l bosgan', head: ['Yo\'l', 'Kim'], rows: [
      ['Reputation → Capital → Team', '*Warren Buffett* modeli'],
      ['Audience → Capital', '*Alex Hormozi*'],
      ['Partner → Team → Reputation', '*Jobs + Wozniak*'],
      ['Capital → Team → Unique Links', '*Elon Musk*'],
      ['Unique Links → Capital', '*Jeff Bezos*']
    ] },

    { t: 'grid', color: 'green', icon: '🌅', k: 'Odatlar ertadan boshlanadi', h: 'Har dars — *bitta odat*. 10 ta dars — 10 ta odat.', cols: 3, items: [
      { icon: '🚶', h: '10 000 qadam', p: 'Ertalab, har kuni. Sport — birinchi odat.' },
      { icon: '📖', h: 'Learning', p: 'Har kuni kitob — bilim richagi shu yerdan o\'sadi.' },
      { icon: '💰', h: 'Shaxsiy pul boshqaruvi', p: 'Daromad va xarajatni yozib boring.' },
      { icon: '📓', h: 'Logbook', p: 'Kun qaydlari — Obsidian, atomic notes.' },
      { icon: '🧘', h: 'Tafakkur', p: 'Har kuni o\'ylash uchun vaqt.' },
      { icon: '🗓️', h: 'Kun rejasi', p: 'Kechqurun yoki ertalab — Notion\'da rejalashtiring.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '1-dars yakunlandi · Keyingi dars: Shaxsiyat (Personality)' }
  ]
};

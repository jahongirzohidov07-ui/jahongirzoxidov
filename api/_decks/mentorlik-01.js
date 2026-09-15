'use strict';
/* Mentorlik (Shogirdlik) dasturi · 1-dars: Leverages — richaglar */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir.png', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*1-dars* · Leverages — richaglar', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/velosiped.jpg', zoom: '135%', focus: 'left 30%', k: 'Dasturning shiori', h: 'Before walking, *not falling* are learnt', s: 'Yurishdan oldin yiqilmaslik o\'rganiladi.', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/qol-berish.jpg', focus: 'center', k: 'Important disclaimer', h: 'Kelishib olaylik', items: [
      'Yutqizmaslik qoidalari o\'rgatiladi',
      'Maqsad yo\'lida katta yo\'qotishlar qilinadi',
      'Har bir mavzudan fundamental bilimlar o\'rgatiladi',
      'Aksariyat mavzulardan ekspert emasman',
      'Chuqurroq ilm uchun mutaxassis bilan uchrashing'
    ], credit: 'Foto: Unsplash' },

    { t: 'topic', color: 'green', k: 'Birinchi mavzu', h: 'Leverages', s: 'Richaglar: kichik kuch bilan katta natija' },

    { t: 'stop', icon: '✋', h: 'To\'xtang!', s: 'Keyingi slaydga shoshilmang.' },

    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/daftar.jpg', zoom: '120%', focus: 'right center', k: 'Savol', h: 'Daftarga yozganlaringiz *yo\'qolib ketsa,* nima qilasiz?', s: 'Biz yutqizmaslikni o\'rganamiz.', credit: 'Foto: Unsplash' },

    { t: 'curve', color: 'blue', icon: '🧠', k: 'Knowledge management · qaydlarni yig\'ib borish', h: 'Eshitganingizdan qanchasi esda qoladi?', points: [{ x: 'Hozir', v: 100 }, { x: '1 soatdan keyin', v: 44 }, { x: '1 kundan keyin', v: 33 }, { x: '2 kundan keyin', v: 28 }], big: '72%', bigLabel: 'ikki kunda unutiladi', side: 'Shuning uchun bilimni yig\'ib borish tizimi kerak. Vosita: *Obsidian.*' },

    { t: 'section', icon: '💡', n: '1', h: 'Unique knowledge — noyob bilim', s: 'Birinchi richak' },

    { t: 'vs', k: 'How · noyob bilim qanday yig\'iladi?', h: 'Bir nechta sohani bitta odamda birlashtirish', a: { h: 'Misol: muhandis', tone: 'neutral', items: ['Fizik fikrlash', 'Muhandislik', 'Biznes management', 'Risk management', 'Work ethics', 'Leadership', 'Learning', 'Programming', 'Multi-industrial system thinking'] }, b: { h: 'Misol: men', tone: 'gold', items: ['Ingliz tili', 'Teaching', 'Learning', 'Business management', 'Marketing', 'Leadership', 'Strategy', 'Psychology'] }, note: 'Why: *siz bilan raqobat qilish qiyin bo\'lib qoladi.*' },

    { t: 'section', icon: '🔗', n: '2', h: 'Unique links — noyob aloqalar', s: 'Ikkinchi richak' },

    { t: 'steps', k: 'What · how · why', h: 'Kontaktni olish qiyin bo\'lgan odamlar bilan aloqa', items: [
      { n: '🎯', h: 'What · nima?', p: 'Kontaktni olish qiyin bo\'lgan odamlar bilan aloqa bo\'lishi' },
      { n: '🛠️', h: 'How · qanday?', p: 'Foydali odam bo\'ling: expert, serendipity, treking, running' },
      { n: '⏱️', h: 'Why · nega?', p: 'Vaqt tejaydi: 1 oy ↔ 1 yil' }
    ] },

    { t: 'steps', k: 'Misollar', h: 'Aloqa nimalar qiladi', all: true, items: [
      { n: '🚀', h: 'Michael Griffin', p: 'NASA and SpaceX' },
      { n: '🏢', h: 'IBM', p: 'Federal razvedka bilan 600 mln$ shartnoma: cloud xizmatlari' }
    ] },

    { t: 'big', icon: '🚪', h: 'Ba\'zi eshiklar bilim va mehnat bilan emas, *tanishlar* bilan ochiladi.' },

    { t: 'section', icon: '💰', n: '3', h: 'Capital — kapital', s: 'Eng qadimgi, eng kuchli richak' },

    { t: 'flow', icon: '💸', k: 'How', h: 'Kapital qayerdan keladi?', vertical: true, items: ['Income → Capital', 'Capital → Capital', 'Other People\'s Money → Capital'] },

    { t: 'bullets', icon: '🦾', k: 'Why', h: 'Pul kuchni yaxshi ko\'paytiradi: kapital bo\'lsa, siz…', items: ['odamlarga ish berasiz', 'texnologiya sotib olasiz', 'marketingni kengaytirasiz', 'vaqtni sotib olasiz'], note: 'Ya\'ni pul sizga *«ikkinchi qo\'l»* bo\'ladi.' },

    { t: 'section', icon: '👥', n: '4', h: 'Team — jamoa', s: 'Xodimlar, ishchi kuchi' },

    { t: 'big', icon: '⛓️', k: 'Tarixdan', h: 'Qullar — *4 trillion* dollar.' },

    { t: 'steps', k: 'How · why', h: 'Jamoa qanday yig\'iladi?', all: true, items: [
      { n: '🎯', h: 'Maqsad kerak' },
      { n: '❤️', h: 'Oila a\'zosidek tanlash kerak' }
    ] },

    { t: 'section', icon: '👨‍👩‍👧‍👦', n: '5', h: 'Family — oila', s: 'Beshinchi richak' },

    { t: 'bullets', k: 'Misol · Rotschildlar (Rothschild Family)', h: 'Dunyo bank tizimi egalari', items: [
      'XVIII–XIX asrda Yevropaning eng qudratli bank imperiyasini qurdilar',
      'Oila rahbari Mayer Amschel Rothschild 5 o\'g\'lini Yevropaning 5 davlatiga yuborib, bank tarmog\'ini tashkil qilgan',
      'Ularning kuchi bank tizimi + siyosiy aloqalar + davlatlarga kredit berishdan kelgan',
      'Bugungi kunda sulolaning boyligi aniqlanmaydi: aktivlari juda tarqoq va yashirin'
    ], note: 'Leverage turi: *kapital + siyosiy ta\'sir + transmilliy banklar.*' },

    { t: 'bullets', k: 'Misol · Rokfellerlar (Rockefeller Family)', h: 'Neft imperiyasidan energetika qiroli', items: [
      'John D. Rockefeller — tarixdagi eng boy odam (inflyatsiyani hisobga olganda)',
      'Standard Oil kompaniyasi Amerika neft bozorining 90%ini nazorat qilgan',
      'Keyin ular moliya, farmatsiya, universitetlar, xayriya fondlari, siyosatga kirishgan'
    ], note: 'Leverage turi: *energiya + moliya + fondlar + siyosiy networking.*' },

    { t: 'steps', k: 'O\'zbekistondan misollar', h: 'Oilaviy klanlar', all: true, items: [{ n: '🏛️', h: 'Kamilovlar oilasi' }, { n: '🏛️', h: 'Mamasaidovlar oilasi' }, { n: '🏛️', h: 'Rajabiy' }] },

    { t: 'vs', k: 'How · why', h: 'Oila richagi qanday quriladi?', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['10 ta farzand, 5 ta o\'g\'il', 'Kuchli maktablarda o\'qiting', 'Homeschooling — ona madrasa'] }, b: { icon: '💡', h: 'Why', tone: 'good', items: ['Tasavvur qiling: 10 ta farzandingizdan 10 ta quda bor', 'Qarindoshlar ko\'pligi unique links ehtimolini oshiradi'] } },

    { t: 'section', icon: '📣', n: '6', h: 'Audience — auditoriya', s: 'Eng tez o\'stirsa bo\'ladigan richak' },

    { t: 'vs', k: 'How · why', h: 'Auditoriya', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['O\'zingiz ekspertligingiz bo\'yicha blog', 'Shaxsiy blog', 'Yozma, YouTube, Instagram'] }, b: { icon: '💡', h: 'Why', tone: 'good', items: ['Bittada ko\'p odamga sotish', 'Jamoa yig\'ish', 'Passive leverage', 'Sizni o\'zingizdan kuchli qiladi', 'Eng tez o\'stirsa bo\'ladigan'] } },

    { t: 'stats', icon: '🔥', k: 'Misol', h: 'Bir kunda', items: [
      { v: '2 700 000', l: 'sotildi', s: 'bir kunda' },
      { v: '$20–30', l: 'narx', s: 'bitta mahsulot' },
      { v: '$54–81 mln', l: 'daromad', s: 'bir kunda' }
    ] },

    { t: 'section', icon: '🤝', n: '7', h: 'Partner — sherik', s: '1 + 1 = 11' },

    { t: 'vs', k: 'How · why', h: 'Sherik', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['Sizda yo\'q leverage borlar bilan sherik bo\'ling', 'Misol: Apple — Jobs + Wozniak'] }, b: { icon: '💡', h: 'Why', tone: 'good', items: ['Hamma resurs sizda bo\'lishi ehtimoli kam', 'Yiqilsangiz, birdan jarlikka qulamaysiz', 'Qaror sifati oshadi, risk kamayadi', 'Samaradorlik 4–5 barobarga oshadi'] } },

    { t: 'section', icon: '🏆', n: '8', h: 'Reputation — obro\'', s: 'Bitta xat — milliardlab investitsiya' },

    { t: 'vs', k: 'How · why', h: 'Obro\'', a: { icon: '🛠️', h: 'How', tone: 'gold', items: ['Halollik', 'Mardlik', 'Va\'daning ustidan chiqish', 'Natija = isbot', 'Chiroyli muomala'] }, b: { icon: '💡', h: 'Why · sizning obro\'yingiz', tone: 'good', items: ['Qarorlarni tezlashtiradi', 'Muzokaralarni osonlashtiradi', 'Shartnomalarni yengillashtiradi', 'Aloqalarni ochadi', 'Auditoriyani ko\'paytiradi', 'Kapitalni jalb qiladi', 'Jamoani birlashtiradi'] } },

    { t: 'stats', icon: '📈', k: 'Obro\'ning karrasi', h: 'Obro\' qanday ko\'payadi', items: [
      { v: '1X', l: 'bir odam', s: 'bir odamning obro\'si' },
      { v: '10X', l: 'jamoa', s: 'jamoaning obro\'si' },
      { v: '30X', l: 'oila', s: 'oilaviy qadriyatlar bilan birlashsa' },
      { v: '100X', l: 'auditoriya', s: 'auditoriya qo\'shilsa' }
    ] },

    { t: 'section', icon: '🌟', n: '9', h: 'Personality — shaxsiyat', s: 'Barcha kuchli insonlarning shaxsiyati kuchli bo\'lgan' },

    { t: 'flow', icon: '⚡', k: 'Formula', h: 'Richak natija bermaydi, richakni ushlagan *shaxsiyat* natija beradi', items: ['Leverage', 'Personality', 'Result'] },

    { t: 'checklist', icon: '🧭', k: 'Xulosa', h: '9 ta leverage', items: [
      { n: '1', h: 'Unique knowledge — noyob bilim' }, { n: '2', h: 'Unique links — noyob aloqalar' }, { n: '3', h: 'Capital — kapital' },
      { n: '4', h: 'Team — jamoa' }, { n: '5', h: 'Family — oila' }, { n: '6', h: 'Audience — auditoriya' },
      { n: '7', h: 'Partner — sherik' }, { n: '8', h: 'Reputation — obro\'' }, { n: '9', h: 'Personality — shaxsiyat', star: true }
    ] },

    { t: 'flow', k: 'Leverage konvertatsiyasi', h: 'Bitta richak ikkinchisiga aylanadi', items: ['Knowledge', 'Audience', 'Reputation'], note: 'Knowledge → Audience, Audience → Reputation.' },

    { t: 'table', k: 'Leverage konvertatsiyasi · misollar', h: 'Kimlar qanday yo\'l bosgan', head: ['Yo\'l', 'Misol'], rows: [
      ['Reputation → Capital → Team', 'Warren Buffett modeli'],
      ['Audience → Capital', 'Alex Hormozi'],
      ['Partner → Team → Reputation', 'Jobs + Wozniak'],
      ['Capital → Team → Unique Links', 'Elon Musk'],
      ['Unique Links → Capital', 'Jeff Bezos']
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '1-dars yakunlandi' }
  ]
};

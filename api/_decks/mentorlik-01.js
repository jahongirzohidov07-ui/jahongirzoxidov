'use strict';
/* Mentorlik (Shogirdlik) dasturi · 1-dars: Leverages — richaglar */
module.exports = {
  slides: [
    { t: 'title', k: 'Mentorship program · Shogirdlik dasturi · 1-dars', h: 'Leverages — richaglar', s: 'Before walking, not falling are learnt', meta: 'Jahongir Zoxidov' },

    { t: 'bullets', k: 'Important disclaimer', h: 'Kelishib olaylik', items: [
      'Yutqizmaslik qoidalari o\'rgatiladi',
      'Maqsad yo\'lida katta yo\'qotishlar qilinadi',
      'Har bir mavzudan fundamental bilimlar o\'rgatiladi',
      'Aksariyat mavzulardan ekspert emasman',
      'Mavzu yuzasidan chuqurroq ilm uchun mutaxassis bilan uchrashing'
    ] },

    { t: 'ask', k: 'Savol', h: 'Daftarga yozganlaringiz yo\'qolib ketsa, nima qilasiz?', s: 'Biz yutqizmaslikni o\'rganamiz.' },

    { t: 'stats', k: 'Knowledge management · qaydlarni yig\'ib borish', h: 'Eshitganingizdan qanchasi esda qoladi?', items: [
      { v: '44%', l: '1 soatdan keyin' },
      { v: '33%', l: '1 kundan keyin' },
      { v: '28%', l: '2 kundan keyin' }
    ], note: 'Shuning uchun bilimni yig\'ib borish tizimi kerak. Vosita: *Obsidian.*' },

    { t: 'section', n: '1', h: 'Unique knowledge — noyob bilim', s: 'Birinchi richak' },

    { t: 'vs', k: 'How · noyob bilim qanday yig\'iladi?', h: 'Bir nechta sohani bitta odamda birlashtirish', a: { h: 'Misol: muhandis', tone: 'neutral', items: ['Fizik fikrlash', 'Muhandislik', 'Biznes management', 'Risk management', 'Work ethics', 'Leadership', 'Learning', 'Programming', 'Multi-industrial system thinking'] }, b: { h: 'Misol: men', tone: 'gold', items: ['Ingliz tili', 'Teaching', 'Learning', 'Business management', 'Marketing', 'Leadership', 'Strategy', 'Psychology'] }, note: 'Why: *siz bilan raqobat qilish qiyin bo\'lib qoladi.*' },

    { t: 'section', n: '2', h: 'Unique links — noyob aloqalar', s: 'Ikkinchi richak' },

    { t: 'steps', k: 'What · how · why', h: 'Kontaktni olish qiyin bo\'lgan odamlar bilan aloqa', items: [
      { n: 'What', h: 'Nima?', p: 'Kontaktni olish qiyin bo\'lgan odamlar bilan aloqa bo\'lishi' },
      { n: 'How', h: 'Qanday?', p: 'Foydali odam bo\'ling: expert, serendipity, treking, running' },
      { n: 'Why', h: 'Nega?', p: 'Vaqt tejaydi: 1 oy ↔ 1 yil' }
    ] },

    { t: 'steps', k: 'Misollar', h: 'Aloqa nimalar qiladi', all: true, items: [
      { h: 'Michael Griffin', p: 'NASA and SpaceX' },
      { h: 'IBM', p: 'Federal razvedka bilan 600 mln$ shartnoma: cloud xizmatlari' }
    ] },

    { t: 'big', h: 'Ba\'zi eshiklar bilim va mehnat bilan emas, *tanishlar* bilan ochiladi.' },

    { t: 'section', n: '3', h: 'Capital — kapital', s: 'Eng qadimgi, eng kuchli richak' },

    { t: 'flow', k: 'How', h: 'Kapital qayerdan keladi?', vertical: true, items: ['Income → Capital', 'Capital → Capital', 'Other People\'s Money → Capital'] },

    { t: 'bullets', k: 'Why', h: 'Pul kuchni yaxshi ko\'paytiradi: kapital bo\'lsa, siz…', items: ['odamlarga ish berasiz', 'texnologiya sotib olasiz', 'marketingni kengaytirasiz', 'vaqtni sotib olasiz'], note: 'Ya\'ni pul sizga *«ikkinchi qo\'l»* bo\'ladi.' },

    { t: 'section', n: '4', h: 'Team — jamoa', s: 'Xodimlar, ishchi kuchi' },

    { t: 'big', k: 'Tarixdan', h: 'Qullar — *4 trillion* dollar.' },

    { t: 'steps', k: 'How · why', h: 'Jamoa qanday yig\'iladi?', all: true, items: [
      { h: 'Maqsad kerak' },
      { h: 'Oila a\'zosidek tanlash kerak' }
    ] },

    { t: 'section', n: '5', h: 'Family — oila', s: 'Beshinchi richak' },

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

    { t: 'steps', k: 'O\'zbekistondan misollar', h: 'Oilaviy klanlar', all: true, items: [{ h: 'Kamilovlar oilasi' }, { h: 'Mamasaidovlar oilasi' }, { h: 'Rajabiy' }] },

    { t: 'vs', k: 'How · why', h: 'Oila richagi qanday quriladi?', a: { h: 'How', tone: 'gold', items: ['10 ta farzand, 5 ta o\'g\'il', 'Kuchli maktablarda o\'qiting', 'Homeschooling — ona madrasa'] }, b: { h: 'Why', tone: 'good', items: ['Tasavvur qiling: 10 ta farzandingizdan 10 ta quda bor', 'Qarindoshlar ko\'pligi unique links ehtimolini oshiradi'] } },

    { t: 'section', n: '6', h: 'Audience — auditoriya', s: 'Eng tez o\'stirsa bo\'ladigan richak' },

    { t: 'vs', k: 'How · why', h: 'Auditoriya', a: { h: 'How', tone: 'gold', items: ['O\'zingiz ekspertligingiz bo\'yicha blog', 'Shaxsiy blog', 'Yozma, YouTube, Instagram'] }, b: { h: 'Why', tone: 'good', items: ['Bittada ko\'p odamga sotish', 'Jamoa yig\'ish', 'Passive leverage', 'Sizni o\'zingizdan kuchli qiladi', 'Eng tez o\'stirsa bo\'ladigan'] } },

    { t: 'stats', k: 'Misol', h: 'Bir kunda', items: [
      { v: '2 700 000', l: 'sotildi', s: 'bir kunda' },
      { v: '$20–30', l: 'narx', s: 'bitta mahsulot' },
      { v: '$54–81 mln', l: 'daromad', s: 'bir kunda' }
    ] },

    { t: 'section', n: '7', h: 'Partner — sherik', s: '1 + 1 = 11' },

    { t: 'vs', k: 'How · why', h: 'Sherik', a: { h: 'How', tone: 'gold', items: ['Sizda yo\'q leverage borlar bilan sherik bo\'ling', 'Misol: Apple — Jobs + Wozniak'] }, b: { h: 'Why', tone: 'good', items: ['Hamma resurs sizda bo\'lishi ehtimoli kam', 'Yiqilsangiz, birdan jarlikka qulamaysiz', 'Qaror sifati oshadi, risk kamayadi', 'Samaradorlik 4–5 barobarga oshadi'] } },

    { t: 'section', n: '8', h: 'Reputation — obro\'', s: 'Bitta xat — milliardlab investitsiya' },

    { t: 'vs', k: 'How · why', h: 'Obro\'', a: { h: 'How', tone: 'gold', items: ['Halollik', 'Mardlik', 'Va\'daning ustidan chiqish', 'Natija = isbot', 'Chiroyli muomala'] }, b: { h: 'Why · sizning obro\'yingiz', tone: 'good', items: ['Qarorlarni tezlashtiradi', 'Muzokaralarni osonlashtiradi', 'Shartnomalarni yengillashtiradi', 'Aloqalarni ochadi', 'Auditoriyani ko\'paytiradi', 'Kapitalni jalb qiladi', 'Jamoani birlashtiradi'] } },

    { t: 'stats', k: 'Obro\'ning karrasi', h: 'Obro\' qanday ko\'payadi', items: [
      { v: '1X', l: 'bir odam', s: 'bir odamning obro\'si' },
      { v: '10X', l: 'jamoa', s: 'jamoaning obro\'si' },
      { v: '30X', l: 'oila', s: 'oilaviy qadriyatlar bilan birlashsa' },
      { v: '100X', l: 'auditoriya', s: 'auditoriya qo\'shilsa' }
    ] },

    { t: 'section', n: '9', h: 'Personality — shaxsiyat', s: 'Barcha kuchli insonlarning shaxsiyati kuchli bo\'lgan' },

    { t: 'flow', k: 'Formula', h: 'Richak natija bermaydi, richakni ushlagan *shaxsiyat* natija beradi', items: ['Leverage', 'Personality', 'Result'] },

    { t: 'checklist', k: 'Xulosa', h: '9 ta leverage', items: [
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

    { t: 'end', h: 'Rahmat', s: '1-dars yakunlandi' }
  ]
};

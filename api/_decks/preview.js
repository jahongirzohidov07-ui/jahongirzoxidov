'use strict';
/* Dizayn namunalari — tasdiqlash uchun: 2-richak bo'limi (17–23) */
module.exports = {
  slides: [
    /* 17: bo'lim kirish */
    { t: 'photo', layout: 'full', color: 'green', img: '/assets/aloqa-r2.jpg', focus: 'center 30%', k: 'Ikkinchi richak', h: 'Unique links', s: 'Noyob aloqalar', num: '2', credit: 'Foto: Unsplash' },

    /* 18: What — tarmoq grafigi */
    { t: 'brain', color: 'green', plain: true, k: 'What · nima?', h: 'Kontaktni olish *qiyin* bo\'lgan odamlar bilan aloqa', s: 'Hamma bilan tanishish emas — eshigi hammaga ochiq bo\'lmagan odamlar bilan aloqa.', title: 'Noyob aloqalar tarmog\'i', center: 'Siz', centerIcon: '🙂',
      nodes: [['🏛️', 'Hokimiyat'], ['💼', 'Investor'], ['🏢', 'Kompaniya rahbari'], ['🎓', 'Professor'], ['📰', 'Jurnalist'], ['⚖️', 'Advokat'], ['🏦', 'Bank'], ['🌍', 'Xorijiy sherik']],
      steps: [
        { icon: '🔒', h: 'Oddiy yo\'l bilan yetib bo\'lmaydi', p: 'Telefon raqami, qabuli, vaqti yopiq', c: '#FFE4E6' },
        { icon: '🔑', h: 'Bitta tanish — eshik ochiladi', p: 'Aloqa orqali bir qadamda yetasiz', c: '#DCFCE7' },
        { icon: '🕸️', h: 'Aloqalar bir-birini ochadi', p: 'Bir kuchli aloqa — o\'nlab yangi aloqa', c: '#DBEAFE' }
      ] },

    /* 19: Misol — Michael Griffin */
    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/griffin-musk.jpg', fit: 'contain', focus: 'center', caption: '*Michael Griffin* (chapda) va *Elon Musk* (o\'ngda), 2000-yillar boshi', k: 'Misol · NASA va SpaceX', h: 'Michael *Griffin*', items: [
      '2002-yil: Elon Musk bilan birga Rossiyaga raketa sotib olishga borgan.',
      '2005-yil: NASA rahbari bo\'ldi.',
      '2006-yil: NASA SpaceX bilan birinchi yirik shartnomani tuzdi. *Bitta aloqa — kompaniyani saqlab qoldi.*'
    ], all: true },

    /* 20: Misol — AWS vs IBM */
    { t: 'duel', color: 'orange', k: 'Misol · federal razvedka (CIA), 2013', h: 'Bulut shartnomasi kimga ketdi?', prize: '600 mln $', prizeLabel: 'bulut xizmatlari',
      a: { icon: '🏢', h: 'IBM', p: 'Yuz yillik gigant. Texnik jihatdan kuchli, taklifi arzonroq.' },
      b: { img: '/assets/bezos.jpg', logo: '/assets/aws.jpg', h: 'Jeff Bezos · Amazon', p: 'To\'g\'ri odamlar bilan to\'g\'ri aloqa — shartnoma va bulut bozorida liderlik.' },
      note: 'Bilim va narx teng bo\'lganda — *aloqa hal qiladi.*' },

    /* 21: How — 4 ta yo'l */
    { t: 'gallery', color: 'green', k: 'How · qanday?', h: 'Noyob aloqalar qayerda paydo bo\'ladi?', items: [
      { img: '/assets/ekspert.jpg', icon: '🎤', h: 'Foydali odam bo\'ling', p: 'Ekspert bo\'ling — kuchli odamlar sizga o\'zi keladi.' },
      { img: '/assets/serendipity.jpg', icon: '🎲', h: 'Serendipity', p: 'Tasodifiy uchrashuvlarga ochiq bo\'ling: choy, safar, tadbir.' },
      { img: '/assets/treking.jpg', icon: '🥾', h: 'Treking', p: 'Tog\'da lavozim yo\'q — hamma teng, gaplashish oson.' },
      { img: '/assets/running.jpg', icon: '🏃', h: 'Running', p: 'Yugurish klublari: intizomli, kuchli odamlar shu yerda.' }
    ] },

    /* 22: Why — vaqt tejaydi */
    { t: 'bars', color: 'blue', icon: '⏱️', k: 'Why · nega?', h: 'Vaqt tejaydi: *1 yil → 1 oy*', rows: [
      { h: 'Tanishsiz', p: 'Xat, navbat, rad javoblar', w: '100%', v: '12 oy', ticks: 12, color: 'red' },
      { h: 'Tanish bilan', p: 'Bitta qo\'ng\'iroq', w: '9%', v: '1 oy', color: 'green' }
    ], big: '12×', bigText: 'tezroq. Bir yillik yo\'l — *bir oyda.*' },

    /* 23: Xulosa */
    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/eshik.jpg', focus: 'right center', k: 'Xulosa', h: 'Ba\'zi eshiklar bilim va mehnat bilan emas — *tanishlar* bilan ochiladi', credit: 'Foto: Unsplash' }
  ]
};

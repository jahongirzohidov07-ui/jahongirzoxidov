'use strict';
/* Mentorlik (Shogirdlik) dasturi · 5-dars: Munosabatlar
   Manba: 5-dars munosabatlar.pptx (13 slayd) + Notion "5-Dars - Munosabatlar" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*5-dars* · Munosabatlar', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d5-dostlar.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Munosabatlar — *eng qimmat* aktiv', s: 'Do\'stlar · Oila · Turmush o\'rtoq · Qarindoshlar · Hamkasblar · Networking · Partner' },

    /* ---- Prinsiplar ---- */
    { t: 'section', color: 'orange', icon: '🧭', n: '', h: 'Prinsiplar', s: 'Barcha munosabatlarda ishlaydigan 5 ta qoida' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d5-p1-gofirst.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '1 · Go first, go positive', h: '*Birinchi* bo\'lib yaxshilik qiling', items: [
      'Kutmang — salomni, yordamni, iliq so\'zni birinchi siz bering.',
      'Ijobiy boshlagan odam munosabatning ohangini belgilaydi.',
      'Berish — olishdan oldin keladi.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d5-p2-perspective.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '2 · Perspective over perception', h: 'Taassurot emas — *nuqtai nazar*', items: [
      'Ko\'rganimiz — bizning taassurotimiz (*perception*). Boshqa odam boshqacha ko\'radi.',
      'Uning ko\'zi bilan qarang (*perspective*): nima uchun shunday qildi?',
      'Hukm chiqarishdan oldin — tushunishga harakat qiling.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d5-p3-trust.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '3 · Trust comes first, everything else after', h: 'Avval *ishonch* — qolgani keyin', items: [
      'Ishonch yo\'q joyda hech narsa ishlamaydi: na biznes, na oila, na do\'stlik.',
      'Ishonch sekin quriladi — bir zumda buziladi.',
      'Va\'da — kichik bo\'lsa ham bajariladi.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'red', img: '/assets/d5-p4-listening.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '4 · Listening well is a superpower', h: 'Yaxshi *tinglash* — superkuch', items: [
      'Odamlar o\'zini tinglagan odamni yaxshi ko\'radi.',
      'Gapirishga shoshilmang — savol bering, oxirigacha eshiting.',
      'Tinglagan odam ko\'proq biladi va ko\'proq ishonch qozonadi.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d5-p5-relationships.jpg', fit: 'contain', bg: '#FFE9CA', focus: 'center', k: '5 · Relationships over transactions', h: 'Bitim emas — *munosabat*', items: [
      'Har uchrashuvdan darrov foyda izlamang.',
      'Uzoq muddatli munosabat — yuzta bir martalik bitimdan qimmat.',
      'Hisob-kitobsiz yaxshilik qiling.'
    ], all: true },

    { t: 'grid', color: 'blue', icon: '🧭', k: 'Xulosa', h: '5 ta prinsip — *bir qarashda*', cols: 5, items: [
      { icon: '➕', h: 'Go first, go positive', p: 'Birinchi bo\'lib yaxshilik qiling.' },
      { icon: '👁️', h: 'Perspective over perception', p: 'Uning ko\'zi bilan qarang.' },
      { icon: '🤝', h: 'Trust comes first', p: 'Avval ishonch — qolgani keyin.' },
      { icon: '👂', h: 'Listening is a superpower', p: 'Tinglang — keyin gapiring.' },
      { icon: '♾️', h: 'Relationships over transactions', p: 'Bitim emas — munosabat.' }
    ] },

    /* ---- Qiyin payt ---- */
    { t: 'section', color: 'red', icon: '🌧️', n: '', h: 'Qiyin payt', s: 'Hard times will always reveal true friends' },

    { t: 'photo', layout: 'full', color: 'red', img: '/assets/d5-bora.jpg', focus: 'center', k: 'Hard times will always reveal true friends', h: 'Qiyin payt — *haqiqiy do\'stni* ko\'rsatadi', s: 'Yaxshi kunda hamma yoningizda. Bo\'ron kelganda kim qoladi?' },

    { t: 'ask', icon: '🌧️', k: 'Savol', h: 'Qiyin payt *nima*?', s: 'Do\'stlik sinovdan o\'tadigan payt — aslida qaysi payt?' },

    { t: 'vs', color: 'red', icon: '⚖️', k: 'Javob', h: 'Qiyin payt — yaxshi davrda birga bo\'lish *emas*', a: { icon: '☕', h: 'Bu emas', tone: 'bad', items: ['Yaxshi davrda birga bo\'lish', 'Yaxshilikni bo\'lishish', 'Birga choyxonada o\'tirish', 'Birga kontrga borish', 'Birga vaqt o\'tkazish'] }, b: { icon: '🛡️', h: 'Bu', tone: 'good', items: ['Zararni bo\'lishish', 'Zararni o\'ziga ola olish', 'Unga umuman foyda bo\'lmay, nimadir kesish — hech bo\'lmasa vaqtini'] }, all: true },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d5-quchoq.jpg', focus: 'center', k: 'Haqiqiy do\'st', h: 'Zararni *bo\'lishadi*', items: [
      'Foyda emas — zararni bo\'lishadi.',
      'Kerak bo\'lsa zararni o\'ziga oladi.',
      'Hech qanday foyda kutmay, o\'zidan nimadir kesadi — hech bo\'lmasa vaqtini.'
    ], all: true },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d5-talpa.jpg', focus: 'center', k: 'Talpa', h: 'Talpa qilinganda *yo\'q*, talpa qilganda *bor*', items: [
      'Sizga talpa qilinganda — yoningizda yo\'q.',
      'Olomon bilan birga talpa qilganda — bor.',
      'Do\'stni olomon emas — *qiyinchilik* aniqlaydi.'
    ], all: true },

    /* ---- O'yin nazariyasi ---- */
    { t: 'section', color: 'blue', icon: '🎲', n: '', h: 'O\'yin nazariyasi', s: 'Ikki sherik, bitta qaror' },

    { t: 'stats', color: 'blue', icon: '🎲', k: 'O\'g\'rilik', h: 'Ikki sherik ushlandi', items: [
      { v: '$10 000', l: 'o\'lja' },
      { v: '1', l: 'qamoq · birinchi sherik' },
      { v: '2', l: 'qamoq · ikkinchi sherik' }
    ], note: 'Ikkovi alohida xonada. Tergovchi har biriga taklif qiladi: *«Sherigingni sot — ozod bo\'lasan.»*' },

    { t: 'matrix', color: 'blue', k: 'Mahbus dilemmasi', h: 'Sherigingiz sizni *sotadimi*?', who: ['Siz', 'Sherik'], cols: [{ icon: '🤐', h: 'Sherik jim turadi' }, { icon: '🗣️', h: 'Sherik sotadi' }], rows: [{ icon: '🤐', h: 'Siz jim turasiz' }, { icon: '🗣️', h: 'Siz sotasiz' }], cells: [
      [{ a: '1 yil', b: '1 yil', tone: 'good', best: true }, { a: '3 yil', b: 'Ozod', ta: 'bad', tb: 'free' }],
      [{ a: 'Ozod', b: '3 yil', ta: 'free', tb: 'bad' }, { a: '2 yil', b: '2 yil', tone: 'bad' }]
    ], items: [
      'Bir martalik o\'yinda sotish «foydali» ko\'rinadi.',
      'Hayot — *takroriy o\'yin*: sotgan odam bilan ikkinchi marta hech kim o\'ynamaydi.',
      'Ishonch — uzoq o\'yinning yagona strategiyasi.'
    ] },

    { t: 'grid', color: 'green', icon: '🌐', k: 'Munosabat doiralari', h: 'Prinsiplar *hamma joyda* ishlaydi', cols: 4, items: [
      { icon: '👨‍👩‍👧', h: 'Oila', p: 'Go first — uyda boshlanadi.' },
      { icon: '💑', h: 'Turmush o\'rtoq', p: 'Perspective — uning ko\'zi bilan.' },
      { icon: '🧑‍🤝‍🧑', h: 'Do\'stlar', p: 'Qiyin paytda sinaladi.' },
      { icon: '🧓', h: 'Qarindoshlar', p: 'Chegarani hurmat bilan qo\'ying.' },
      { icon: '💼', h: 'Hamkasblar', p: 'Trust comes first.' },
      { icon: '🌐', h: 'Networking', p: 'Bitim emas — munosabat.' },
      { icon: '🤝', h: 'Partner', p: 'Takroriy o\'yin — sotmang.' },
      { icon: '🪞', h: 'O\'zingiz', p: 'Hammasi o\'zingizdan boshlanadi.' }
    ] },

    { t: 'steps', color: 'orange', icon: '📝', k: 'Uyga vazifa', h: 'Bu hafta *amalda*', all: true, items: [
      { n: '1', h: 'Ro\'yxat', p: 'Qiyin paytimda kim yonimda edi? Kimning yonida men bo\'lganman? Yozing.' },
      { n: '2', h: 'Go first', p: 'Bu hafta 3 kishiga birinchi bo\'lib yaxshilik qiling — kutmasdan.' },
      { n: '3', h: 'Tinglash', p: 'Bitta suhbatda faqat savol bering va tinglang — maslahat bermang.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '5-dars yakunlandi · Keyingi dars: 6-dars — Sog\'liq' }
  ]
};

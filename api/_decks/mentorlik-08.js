'use strict';
/* Mentorlik (Shogirdlik) dasturi · 8-dars: Fikrlash
   Manba: Notion "8-Dars - Fikrlash" — Charlie Munger: inson psixologiyasining 25 tendensiyasi */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*8-dars* · Fikrlash', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d8-fikr.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Miya bizni *qanday aldaydi*?', s: 'Charlie Munger: inson psixologiyasining 25 ta tendensiyasi' },

    { t: 'stats', color: 'orange', icon: '🎩', k: 'Charlie Munger', h: 'Xatolarni *qilmaslik* san\'ati', items: [
      { v: '100', l: 'yil umr ko\'rdi' },
      { v: '60', l: 'yoshida milliarder bo\'ldi' },
      { v: '25', l: 'ta psixologik tendensiya' }
    ], note: '«Muvaffaqiyatim — odamlar qiladigan 25 ta xatoni qilmaganimda.» Qomusiy bilimli inson: *psixologiya, iqtisod, tarix, biologiya* — hammasidan bitta qarorga.' },

    { t: 'vs', color: 'green', icon: '⚖️', k: 'Tendency paradox', h: 'Tendensiyalar *70–90%* foydali, *10–30%* aldaydi', a: { icon: '✅', h: 'Foydali tomoni', tone: 'good', items: ['Tejamkorlik — pulni saqlaydi', 'Ota-onaning asrashi — bolani himoya qiladi', 'Ishda ehtiyotkorlik — xatodan saqlaydi'] }, b: { icon: '⚠️', h: 'Aldaydigan tomoni', tone: 'bad', items: ['Haddan tashqari tejamkorlik — imkoniyatni yo\'qotadi', 'Haddan tashqari asrash — bola mustaqil bo\'lmaydi', 'Haddan tashqari ehtiyotkorlik — qaror qilolmaydi'] }, all: true, note: 'Maqsad — tendensiyani yo\'q qilish emas, *qachon aldayotganini* bilish.' },

    { t: 'checklist', color: 'blue', icon: '🧠', k: 'Charlie Munger', h: '*25 ta* tendensiya', items: [
      { n: '1', h: 'Reward & Punishment superresponse' }, { n: '2', h: 'Liking / Loving' }, { n: '3', h: 'Disliking / Hating' }, { n: '4', h: 'Doubt-avoidance' }, { n: '5', h: 'Inconsistency-avoidance' },
      { n: '6', h: 'Curiosity' }, { n: '7', h: 'Kantian fairness' }, { n: '8', h: 'Envy / Jealousy' }, { n: '9', h: 'Reciprocation' }, { n: '10', h: 'Influence from mere association' },
      { n: '11', h: 'Pain-avoiding denial' }, { n: '12', h: 'Excessive self-regard' }, { n: '13', h: 'Overoptimism' }, { n: '14', h: 'Deprival-superreaction' }, { n: '15', h: 'Social proof' },
      { n: '16', h: 'Contrast-misreaction' }, { n: '17', h: 'Stress-influence' }, { n: '18', h: 'Availability-misweighing' }, { n: '19', h: 'Use-it-or-lose-it' }, { n: '20', h: 'Drug-misinfluence' },
      { n: '21', h: 'Senescence' }, { n: '22', h: 'Authority-misinfluence' }, { n: '23', h: 'Twaddle' }, { n: '24', h: 'Reason-respecting' }, { n: '25', h: 'Lollapalooza', star: true }
    ] },

    /* ---- 1–6 ---- */
    { t: 'section', color: 'blue', icon: '🧠', n: '1–6', h: 'Mukofot, mehr, shubha', s: 'Birinchi olti tendensiya' },

    { t: 'grid', color: 'blue', icon: '🧠', k: 'Tendensiyalar · 1–6', h: 'Miya *qisqa yo\'l* izlaydi', cols: 3, items: [
      { icon: '🥕', h: '1 · Reward & Punishment', p: 'Odam nimaga mukofot olsa — shuni qiladi. Motivatsiyani tushunmoqchimisiz — mukofotga qarang.' },
      { icon: '❤️', h: '2 · Liking / Loving', p: 'Yoqtirgan odamimizning kamchiligini ko\'rmaymiz, gapiga oson ishonamiz.' },
      { icon: '💔', h: '3 · Disliking / Hating', p: 'Yoqtirmagan odamning yaxshi fikrini ham rad etamiz.' },
      { icon: '⚡', h: '4 · Doubt-avoidance', p: 'Noaniqlik og\'ir — miya tez qaror qilib, shubhadan qutulishni xohlaydi.' },
      { icon: '🔒', h: '5 · Inconsistency-avoidance', p: 'Odatlar va eski fikrlar o\'zgarishga qarshilik qiladi. Franklin effekti: yaxshilik qilgan odam sizni ko\'proq yoqtiradi.' },
      { icon: '🔍', h: '6 · Curiosity', p: 'Qiziqish — o\'rganishning dvigateli. Uni o\'stiring, u boshqa tendensiyalarga qarshi antidot.' }
    ] },

    /* ---- 7–12 ---- */
    { t: 'section', color: 'green', icon: '🪞', n: '7–12', h: 'Adolat, hasad, o\'zini yuqori baholash', s: 'Ikkinchi olti tendensiya' },

    { t: 'grid', color: 'green', icon: '🪞', k: 'Tendensiyalar · 7–12', h: 'Ijtimoiy *tuzoqlar*', cols: 3, items: [
      { icon: '⚖️', h: '7 · Kantian fairness', p: 'Hamma teng bo\'lishini kutamiz — teng bo\'lmasa g\'azablanamiz, hatto o\'zimizga zarar bo\'lsa ham.' },
      { icon: '😒', h: '8 · Envy / Jealousy', p: 'Aka-uka orasida ham bo\'ladi. Antidot: qiziqish, «paket» sifatida ko\'rish (uning butun hayotini olasizmi?), Damokl qilichi.' },
      { icon: '🎁', h: '9 · Reciprocation', p: 'Yaxshilikka yaxshilik qilish istagi. Antidot: reaksiyani kechiktiring; yetkazib beruvchilardan sovg\'a olmang.' },
      { icon: '🔗', h: '10 · Mere association', p: 'Yomon xabar keltirgan fors elchisini o\'ldirishgan. Xabarni xabarchi bilan aralashtirmang.' },
      { icon: '🙈', h: '11 · Pain-avoiding denial', p: 'Og\'riqli haqiqatni ko\'rmaslikka harakat qilamiz — muammo o\'sadi.' },
      { icon: '🪞', h: '12 · Excessive self-regard', p: 'Haydovchilarning 90% o\'zini o\'rtachadan yaxshi deb hisoblaydi. Antidot: haqiqatni tan olish.' }
    ] },

    /* ---- 13–18 ---- */
    { t: 'section', color: 'orange', icon: '👥', n: '13–18', h: 'Optimizm, olomon, kontrast', s: 'Uchinchi olti tendensiya' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d8-olomon.jpg', focus: 'center', k: '15 · Social proof', h: 'Olomon *nima qilsa* — biz ham', items: [
      'Serpiko: butun politsiya pora olardi — «hamma oladi-ku».',
      'Kitti Genovese: 38 guvoh — hech kim yordam bermadi, «birov qo\'ng\'iroq qilar».',
      'Epilepsiya holati: olomon qarab turadi, harakat qilmaydi.',
      'Antidot: *noto\'g\'ri misollarga e\'tibor bermang.* O\'zingiz o\'ylang.'
    ], all: true },

    { t: 'bars', color: 'red', icon: '🚗', k: '16 · Contrast-misreaction', h: '$30 000 dan keyin $500 *arzon* ko\'rinadi', rows: [
      { h: 'Mashina', p: 'Asosiy xarid', w: '100%', v: '$30 000', color: 'blue' },
      { h: 'Aksessuar', p: '«Bor-yo\'g\'i» $500', w: '2%', v: '$500', color: 'red' }
    ], big: '$500', bigText: '— bu $500. Mashina yonida emas, *olma bilan olmani* solishtiring: shu $500 ga boshqa nima olish mumkin?' },

    { t: 'grid', color: 'orange', icon: '👥', k: 'Tendensiyalar · 13–18', h: 'Miya *noto\'g\'ri o\'lchaydi*', cols: 3, items: [
      { icon: '🌤️', h: '13 · Overoptimism', p: '«Menga hech narsa bo\'lmaydi». Rejada zaxira vaqt va zaxira pul qoldiring.' },
      { icon: '😱', h: '14 · Deprival-superreaction', p: 'Yo\'qotish og\'rig\'i — topish quvonchidan 2 barobar kuchli. Shuning uchun «oxirgi 3 ta qoldi» ishlaydi.' },
      { icon: '👥', h: '15 · Social proof', p: 'Hamma qilsa — to\'g\'ri deb o\'ylaymiz. Antidot: noto\'g\'ri misollarni e\'tiborsiz qoldiring.' },
      { icon: '🔭', h: '16 · Contrast-misreaction', p: 'Katta narsadan keyin kichigi arzimas ko\'rinadi. Har narsani alohida baholang.' },
      { icon: '🥵', h: '17 · Stress-influence', p: 'Stress ostida fikrlash buziladi (Pavlov tajribalari). Muhim qarorni stressda qilmang.' },
      { icon: '📋', h: '18 · Availability-misweighing', p: 'Oson eslanadigan narsani muhim deb o\'ylaymiz. Antidot: checklist va qarshi fikrli odamlar.' }
    ] },

    /* ---- 19–25 ---- */
    { t: 'section', color: 'red', icon: '🎖️', n: '19–25', h: 'Nufuz, safsata, lollapalooza', s: 'Oxirgi yetti tendensiya' },

    { t: 'grid', color: 'red', icon: '🎖️', k: 'Tendensiyalar · 19–25', h: 'Eng *xavfli* tendensiyalar', cols: 4, items: [
      { icon: '🏋️', h: '19 · Use-it-or-lose-it', p: 'Ishlatilmagan ko\'nikma yo\'qoladi. Muhim ko\'nikmani doim mashq qiling.' },
      { icon: '💊', h: '20 · Drug-misinfluence', p: 'Kimyoviy moddalar fikrlashni buzadi — istisnosiz.' },
      { icon: '🕰️', h: '21 · Senescence', p: 'Yosh o\'tgani sari o\'rganish qiyinlashadi — lekin doimiy mashq bilan sekinlashadi.' },
      { icon: '🎖️', h: '22 · Authority-misinfluence', p: 'Milgram tajribasi: oq xalat aytsa — odam boshqani "tok" bilan uradi. Antidot: birinchi prinsiplardan o\'ylang.' },
      { icon: '🗯️', h: '23 · Twaddle', p: 'Safsata — ko\'p gap, kam ma\'no. Muhim ishda safsatachini yaqinlashtirmang.' },
      { icon: '❓', h: '24 · Reason-respecting', p: '«Chunki» so\'zi kuchli: sabab aytilsa odam rozi bo\'ladi — sabab bo\'sh bo\'lsa ham. Sababni tekshiring.' },
      { icon: '💥', h: '25 · Lollapalooza', p: 'Bir nechta tendensiya birga kelsa — ta\'siri ko\'paytiriladi, natija portlaydi.' }
    ] },

    { t: 'flow', color: 'red', icon: '💥', k: '25 · Lollapalooza effekti', h: 'Bir nechta tendensiya *birga* — portlash', items: ['👥 Social proof', '🎖️ Authority', '🎁 Reciprocation', '💥 Lollapalooza'], all: true, note: 'Misol: auksion, sekta, piramida sxemasi — bir vaqtda 4–5 tendensiya ishga tushadi. *Ikki-uchtasi birga* kelganini sezsangiz — to\'xtang.' },

    { t: 'steps', color: 'green', icon: '🛡️', k: 'Antidotlar', h: 'Tendensiyalarga *qarshi* 4 vosita', all: true, items: [
      { n: '📋', h: 'Checklist', p: 'Muhim qaror oldidan: qaysi tendensiyalar meni aldayotgan bo\'lishi mumkin?' },
      { n: '🔄', h: 'Qarshi fikr', p: 'Ataylab qarshi fikrli odamni tinglang. O\'z fikringizga qarshi dalil izlang.' },
      { n: '⏸️', h: 'Reaksiyani kechiktiring', p: 'Sovg\'a, bosim, shoshilinch taklif — javobni ertaga bering.' },
      { n: '🧱', h: 'Birinchi prinsiplar', p: 'Nufuz emas — dalil. «Kim aytdi» emas — «nima uchun to\'g\'ri».' }
    ] },

    { t: 'steps', color: 'blue', icon: '📝', k: 'Uyga vazifa', h: 'O\'zingizda *toping*', all: true, items: [
      { n: '1', h: '5 ta tendensiya', p: 'O\'z hayotingizdan 5 ta tendensiyaga misol yozing: qachon aldadi, qanday oqibat bo\'ldi?' },
      { n: '2', h: 'Qaror checklisti', p: 'Muhim qarorlar uchun 10 savollik checklist tuzing (tendensiyalar asosida).' },
      { n: '3', h: 'Bir hafta pauza', p: 'Bir hafta davomida har muhim javobni kamida 1 kun kechiktiring. Natijani yozing.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '8-dars yakunlandi · Keyingi dars: 9-dars — Vaqt' }
  ]
};

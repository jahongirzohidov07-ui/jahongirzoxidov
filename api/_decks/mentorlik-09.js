'use strict';
/* Mentorlik (Shogirdlik) dasturi · 9-dars: Vaqt
   Manba: Notion "9-Dars - Vaqt" */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*9-dars* · Vaqt', name: 'Jahongir Zoxidov', role: 'Mentor' },

    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/d9-qumsoat.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Vaqt — *eng qimmat* valyuta', s: 'Pul qaytadi — vaqt qaytmaydi.' },

    { t: 'big', color: 'blue', icon: '🧭', k: 'Stiven Kovi', h: 'Vaqtni emas — *o\'zingizni* boshqaring', s: 'Time management yo\'q. Self management bor. Vaqt hamma uchun bir xil — farq uni kim qanday ishlatishida.' },

    { t: 'grid', color: 'green', icon: '📜', k: 'Uchta qonun', h: 'Vaqt *qonunlari*', cols: 3, items: [
      { icon: '🎈', h: 'Parkinson qonuni', p: 'Ish unga ajratilgan vaqtni to\'ldiradi. 1 haftalik ish 1 kunga qo\'yilsa — 1 kunda bitadi.' },
      { icon: '🍰', h: 'Pareto 80/20', p: 'Natijaning 80% — ishlarning 20% dan keladi. O\'sha 20% ni toping.' },
      { icon: '🪤', h: 'Merfi qonuni', p: 'Buzilishi mumkin narsa — buziladi. Har rejaga zaxira vaqt qo\'ying.' }
    ] },

    { t: 'grid', color: 'orange', icon: '💬', k: 'Vaqt haqida', h: 'To\'rt *haqiqat*', cols: 2, items: [
      { icon: '💎', h: 'Eng qimmat valyuta — vaqt', p: 'Pulni qaytarib topish mumkin. Vaqtni — yo\'q.' },
      { icon: '🚫', h: 'Hech narsa qilmaslik — eng qimmat tanlov', p: 'Bo\'sh o\'tgan kun — sarflangan pul emas, sarflangan umr.' },
      { icon: '📈', h: 'Vaqt ko\'payadi (time compounds)', p: 'Bugun o\'rgangan narsa ertaga vaqt yaratadi. O\'qish — vaqt yaratadi.' },
      { icon: '👑', h: 'Vaqtni boshqargan — taqdirini boshqaradi', p: 'Kunini boshqarolmagan odam — hayotini boshqarolmaydi.' }
    ] },

    { t: 'steps', color: 'blue', icon: '🔎', k: 'Ongli vaqt', h: 'Vaqt *qayerga* ketyapti?', all: true, items: [
      { n: '👁️', h: 'Temporal awareness', p: 'Bir hafta har soatingizni yozing. Ko\'pchilik qayerga ketganini bilmaydi.' },
      { n: '🔙', h: 'Retrospective time management', p: 'O\'tgan haftani tahlil qiling: nima foyda berdi, nima bekor ketdi? Keyingi haftani shunga qarab tuzing.' },
      { n: '📚', h: 'Reading creates time', p: 'Kitob — boshqa odamning 10 yillik tajribasi 10 soatda. O\'qish vaqt oladi emas — vaqt beradi.' }
    ] },

    { t: 'grid', color: 'red', icon: '🎯', k: 'Prinsiplar', h: 'Vaqtni *tejaydigan* 6 qoida', cols: 3, items: [
      { icon: '🪞', h: 'Ibratni to\'g\'ri tanlang', p: 'Taqlid tabiiy — lekin kimga taqlid qilayotganingizni tanlang.' },
      { icon: '🎓', h: '6–9 oyda kasb', p: 'Fokus bilan 6–9 oyda yangi kasb o\'rganish mumkin. Yillar kerak emas — fokus kerak.' },
      { icon: '🛋️', h: 'Don\'t get busy if nothing to do', p: 'Ish yo\'q bo\'lsa — band bo\'lib ko\'rinmang. Bandlik — natija emas.' },
      { icon: '🧑‍🎨', h: 'Do only what you can do', p: 'Faqat siz qila oladigan ishni qiling. Qolganini — topshiring, avtomatlashtiring, tashlang.' },
      { icon: '⚡', h: 'Don\'t keep decisions', p: 'Qarorni saqlamang — qiling, keyin tuzating (iterate). Kutgan qaror — vaqt yeydi.' },
      { icon: '🦬', h: 'Don\'t shun the yak', p: 'Fikr → tasavvurdagi natija → birinchi qadam. Qo\'rqinchli katta ishdan qochmang — birinchi qadamni qo\'ying.' }
    ] },

    /* ---- Vositalar ---- */
    { t: 'section', color: 'green', icon: '🧰', n: 'Tools', h: 'Vositalar', s: 'Jahongirning shaxsiy vaqt tizimi' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/d9-telefonlar.jpg', focus: 'center', k: '1 · Two phones', h: '*Ikkita* telefon', items: [
      'Asosiy telefon — bekorchiliksiz: ijtimoiy tarmoq yo\'q, o\'yin yo\'q, faqat ish.',
      'Ikkinchi telefon — qolgan hamma narsa. Uni uyda qoldirish mumkin.',
      'Diqqatni o\'g\'irlaydigan narsa — qo\'lda bo\'lmasin.'
    ], all: true },

    { t: 'bars', color: 'blue', icon: '💬', k: '2 · Bulk communication', h: 'Xabarlarga *bir vaqtda* javob bering', rows: [
      { h: 'Kun bo\'yi', p: 'Har xabarga darrov javob', w: '100%', v: 'Diqqat 8 soat buzilgan', color: 'red' },
      { h: 'Bir vaqtda', p: 'Telegram — kuniga 1 soat', w: '13%', v: '1 soat', color: 'green' }
    ], big: '1', bigText: 'soat — Telegram, xat, xabarlar uchun. Qolgan vaqt — *chuqur ish.* Har 5 daqiqada uzilgan diqqat — hech qachon chuqur bo\'lmaydi.' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d9-tong.jpg', focus: 'center', k: '3 · Mornings', h: 'Tongdagi 1 soat = kunduzgi *3 soat*', items: [
      'Eng muhim ish — soat 8 gacha. Hech kim xalaqit bermaydi.',
      'Tongda miya toza: qaror, yozish, o\'rganish shu paytga.',
      'Kunni telefon bilan emas — o\'z ishingiz bilan boshlang.'
    ], all: true },

    { t: 'bars', color: 'red', icon: '🤖', k: '4 · Automating decisions', h: 'Har qarorning *umri* bor', rows: [
      { h: 'Ovqat', p: 'Umri — 1 soat', w: '16%', v: '1 soat', color: 'green' },
      { h: 'Kiyim', p: 'Umri — 1 kun', w: '35%', v: '1 kun', color: 'orange' },
      { h: 'Katta xarid', p: 'Umri — 1 yil', w: '100%', v: '1 yil', color: 'red' }
    ], note: 'Umri qisqa qarorlarni *avtomatlashtiring* (bir xil nonushta, bir xil kiyim). Fugland qonuni: *majbur bo\'lmasangiz — qaror qilmang.* Kitob: «How We Decide».' },

    { t: 'flow', color: 'green', icon: '📞', k: '5 · Going to FP', h: 'Uchrashuv → qo\'ng\'iroq → *xabar*', items: ['🤝 Uchrashuv 60 min', '📞 Qo\'ng\'iroq 10 min', '💬 Xabar 1 min'], all: true, note: '1 soatlik uchrashuvda hal bo\'ladigan narsa — 10 daqiqalik qo\'ng\'iroqda hal bo\'ladi. Har safar *eng arzon formatni* tanlang.' },

    { t: 'grid', color: 'blue', icon: '📈', k: '6 · Doing things that compound', h: 'Vaqtni *ko\'payadigan* narsaga sarflang', cols: 3, items: [
      { icon: '📚', h: 'Ilm', p: 'Bugun o\'rgangan — umr bo\'yi ishlaydi.' },
      { icon: '🏃', h: 'Sport', p: 'Sog\'liq — hamma narsaning poydevori.' },
      { icon: '🏢', h: 'Kompaniya', p: 'Tizim quring — sizsiz ishlasin.' },
      { icon: '🤝', h: 'Munosabatlar', p: 'Ishonch yillar davomida yig\'iladi.' },
      { icon: '✍️', h: 'Blog', p: 'Bir marta yozasiz — yillar o\'qiladi.' },
      { icon: '🪞', h: 'Self-analysis', p: 'O\'zini tahlil qilgan — har yili yaxshiroq.' }
    ], note: 'Ko\'payadigan narsa — bugun kichik, 10 yildan keyin *ulkan.* Ko\'paymaydigan narsa — bugun ham, ertaga ham bir xil.' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d9-checklist.jpg', focus: 'center', k: '7 · Checklists', h: 'Miyaga *ishonmang* — checklistga ishoning', items: [
      'Uchuvchi 10 000 soat uchgan bo\'lsa ham — checklistsiz uchmaydi.',
      'Takrorlanadigan har ish uchun — bitta ro\'yxat.',
      'Kitob: Atul Gavande — «The Checklist Manifesto».'
    ], all: true },

    { t: 'grid', color: 'orange', icon: '✅', k: 'Mening checklistlarim', h: '9 ta *checklist*', cols: 3, items: [
      { icon: '⚙️', h: 'Operatsion', p: 'Har kunlik ishlar.' },
      { icon: '🌙', h: 'Uyqudan oldin', p: 'Ertangi kun tayyor.' },
      { icon: '👥', h: 'HR', p: 'Xodim bilan har suhbat.' },
      { icon: '🧘', h: 'Bo\'sh vaqt', p: 'Bo\'sh qolsam nima qilaman?' },
      { icon: '🎯', h: 'Muhim qaror', p: 'Tendensiyalar tekshiruvi.' },
      { icon: '🏫', h: 'Maktab', p: 'Maktabga tashrif.' },
      { icon: '🧑‍💼', h: 'Hiring', p: 'Yollashda savollar.' },
      { icon: '💵', h: '$1000+ xarajat', p: 'Katta xarid oldidan.' },
      { icon: '🏡', h: 'Dacha', p: 'Dam olishga borishdan oldin.' }
    ] },

    { t: 'grid', color: 'red', icon: '❓', k: 'To\'rt savol', h: 'Har ish oldidan *so\'rang*', cols: 4, items: [
      { icon: '1', h: 'Is this necessary?', p: 'Bu umuman keraklimi?' },
      { icon: '2', h: 'Worth the money?', p: 'Pulga arziydimi?' },
      { icon: '3', h: 'Most important now?', p: 'Hozir eng muhimi shumi?' },
      { icon: '4', h: 'True nature of things', p: 'Narsalarning asl mohiyatini ko\'ring.' }
    ] },

    { t: 'steps', color: 'green', icon: '📝', k: 'Uyga vazifa', h: 'Bir hafta *o\'lchang*', all: true, items: [
      { n: '1', h: 'Vaqt hisoboti', p: '7 kun davomida har soatingizni yozing. Yakshanba — tahlil: 20% qayerda?' },
      { n: '2', h: 'Bulk communication', p: 'Xabarlarga kuniga faqat 1 marta, belgilangan soatda javob bering.' },
      { n: '3', h: 'Bitta checklist', p: 'Eng ko\'p takrorlanadigan ishingiz uchun checklist tuzing va sinang.' }
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '9-dars yakunlandi · Keyingi dars: 10-dars — Blog' }
  ]
};

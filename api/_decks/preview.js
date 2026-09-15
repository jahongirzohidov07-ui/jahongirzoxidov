'use strict';
/* Dizayn namunalari — tasdiqlash uchun: 3-richak Kapital (24–30) va 4-richak Jamoa (31–35) */
module.exports = {
  slides: [
    /* ---- 3-richak: Kapital ---- */
    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/kapital-r3.jpg', focus: 'center', k: 'Uchinchi richak', h: 'Capital', s: 'Kapital', num: '3', credit: 'Foto: Unsplash' },

    { t: 'photo', layout: 'full', color: 'red', img: '/assets/qadimgi-tangalar.jpg', focus: 'right center', k: 'What · nima?', h: 'Pul — eng *qadimgi*, eng *kuchli*, eng *sof* richak', s: 'Tarixda hukumatlarni ag\'dargan, imperiyalar qurgan kuch. Jiddiy summa 100 000 $ dan boshlanadi.', credit: 'Foto: Unsplash' },

    { t: 'profile', color: 'orange', k: 'Misol · kapital ta\'sirga aylanadi', img: '/assets/soros.jpg', name: 'George Soros va Alex Soros', role: 'Open Society Foundations', h: 'Kapital — *ta\'sir* sotib oladi', s: 'Soros fondlari dunyo bo\'ylab siyosiy va jamoat harakatlariga (jumladan, LGBT tashkilotlariga) millionlab dollar ajratadi.', items: [
      'Kapital avloddan avlodga o\'tadi — ota fondni o\'g\'liga topshirdi, ta\'sir saqlanib qoldi.',
      'Pul bilan odamlar, media, tashkilotlar harakatga keladi — bu richakning kuchi.',
      'Savol: *sizning kapitalingiz nimani harakatga keltiradi?*'
    ] },

    { t: 'grid', color: 'green', icon: '💰', k: 'Why · nega kapital richak?', h: 'Pul — sizning *ikkinchi qo\'lingiz*', cols: 2, items: [
      { icon: '🤲', h: 'Kuchni ko\'paytiradi', p: 'Odamlarga ish berasiz, texnologiya sotib olasiz, marketingni kengaytirasiz, vaqtni sotib olasiz.' },
      { icon: '⏱️', h: 'Vaqtni tebratadi', p: 'Bir kishi 1 oyda qiladigan ishni kapital bilan 3 kunda qilasiz. Bu — vaqtning ko\'payishi.' },
      { icon: '🚀', h: 'Ixtiyoriy tezlik', p: 'Fan, biznes, texnologiya — hammasi kapital bilan tezlashadi. SpaceX ham, Tesla ham kapital topmaguncha yurmagan.' },
      { icon: '⚡', h: 'Super-qurol', p: 'Kapital boshqa richak bilan qo\'shilsa natija uch baravar emas — ko\'p baravar bo\'ladi.' }
    ] },

    { t: 'steps', color: 'blue', icon: '🏗️', k: 'How · qanday?', h: 'Kapital *3 yo\'l* bilan yaratiladi', items: [
      { n: '💼', h: 'Income → Capital', p: 'Daromadni oshirish: qimmatli ko\'nikmalar (AI, sales, leadership, coding), filiallar, to\'g\'ri narx (premium + mass), qo\'shimcha xizmatlar.' },
      { n: '🔁', h: 'Capital → Capital', p: 'Pul pul tug\'adi: daromadning bir qismi aktivga — yangi filial, texnologiya (App, AI, CRM), dividend ETF, ko\'chmas mulk. Tizim: daromad → aktiv → daromad.' },
      { n: '🏦', h: 'OPM — boshqalarning puli', p: 'Investorlar, bank krediti → aktivga, hamkorlar kapitali, franchising, grantlar. Eng muhimi: kredit iste\'molga emas, *aktivga*.' }
    ], note: 'Boylar daromadni oshirib emas, *kapitalni ko\'paytirib* boyiydi.' },

    { t: 'brain', color: 'orange', plain: true, k: 'Super-leverage', h: 'Kapital + *boshqa richak* = ko\'p baravar', s: 'Kapitalni kuchaytiradigan eng kuchli narsa — uni boshqa richakka ulash.', title: 'Kapital nimaga ulanadi?', center: 'Kapital', centerIcon: '💰',
      nodes: [['🔗', 'Aloqalar'], ['📣', 'Media'], ['🤖', 'Texnologiya'], ['⚙️', 'Tizim'], ['🏷️', 'Brend'], ['💡', 'Noyob bilim']], cross: [[0, 1], [2, 3], [4, 5]],
      steps: [
        { icon: '🔗', h: 'Kapital + Aloqalar', p: 'Bir zumda katta loyihaga kirasiz', c: '#DBEAFE' },
        { icon: '📣', h: 'Kapital + Media', p: '1 ta video — 10 000 mijoz', c: '#FFEDD5' },
        { icon: '🤖', h: 'Kapital + Texnologiya', p: '100 kishilik ishni avtomatlashtirasiz', c: '#DCFCE7' },
        { icon: '🏷️', h: 'Kapital + Brend', p: 'Nomning o\'zi pul ishlab chiqaradi', c: '#FFE4E6' }
      ] },

    { t: 'flow', color: 'green', icon: '🧭', k: 'Xulosa', h: 'Musk, Bezos, Jobs kuchni faqat kapitaldan topmagan', all: true, items: ['Bilim', 'Aloqa', 'Texnologiya', 'Tizim'], note: 'Kapital esa ularning kuchini *10 barobar oshirgan qo\'l* bo\'lgan.' },

    /* ---- 4-richak: Jamoa ---- */
    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/jamoa-r4.jpg', focus: 'center', k: 'To\'rtinchi richak', h: 'Team', s: 'Jamoa — xodimlar, ishchi kuchi', num: '4', credit: 'Foto: Unsplash' },

    { t: 'stats', color: 'red', icon: '⛓️', k: 'What · ishchi kuchi', h: 'Tarixdagi eng katta richak — *mehnat*', items: [
      { v: '4 trln $', l: 'Amerika imperiyasi qurilishida qullar tekinga bajargan mehnat qiymati' },
      { v: '0 $', l: 'Ularga to\'langan haq — faqat ovqat' }
    ], note: 'Bugun jamoa — halol usulda o\'sha richak: *siz uchun boshqa qo\'llar ishlaydi.*' },

    { t: 'gallery', color: 'green', k: 'How · qanday?', h: 'Jamoa qanday quriladi?', items: [
      { img: '/assets/maqsad.jpg', icon: '🎯', h: 'Avval maqsad kerak', p: 'Maqsadsiz jamoa — olomon. Odamlar aniq maqsad atrofida yig\'iladi va shu maqsad uchun ishlaydi.' },
      { img: '/assets/oila-dasturxon.jpg', icon: '🏠', h: 'Oila a\'zosidek tanlang', p: 'Har bir xodim oila a\'zosi tanlangandek tanlanishi kerak: qadriyat, ishonch, uzoq muddat.' }
    ] },

    { t: 'bars', color: 'blue', icon: '📦', k: 'Why · nega?', h: 'Yakka o\'zingiz vs *jamoa* bilan', rows: [
      { h: 'Yakka o\'zingiz', p: 'Bir vaqtda 2–3 ta vazifa', w: '25%', v: '2–3 vazifa', ticks: 3, color: 'red' },
      { h: 'Jamoa bilan', p: 'Bir vaqtda o\'nlab vazifa', w: '100%', v: '10+ vazifa', ticks: 12, color: 'green' }
    ], big: '5×', bigText: 'ko\'proq ish — *bir vaqtning o\'zida.* Siz boshqarasiz, jamoa bajaradi.' }
  ]
};

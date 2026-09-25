'use strict';
/* Shogirdlik dasturi — Manager bot uchun qisqartirilgan bilim bazasi (10 dars) */

const DARSLAR = [
  {
    n: 1,
    nom: 'Leverages — richaglar',
    odat: { id: 'qadam', nom: '10 000 qadam', emoji: '🚶', qisqa: '10 000 qadam' },
    mohiyat: `Richak — kichik kuch bilan katta natija: richak qancha ko'p, hayot yuki shuncha yengil. Eshitilganning 72% i 2 kunda unutiladi — bilimni ikkinchi miyada (Obsidian) saqlang. 9 richak: 1) Unique knowledge — olmos → brilliant: skill stacking, bir nechta sohani birlashtirish. 2) Unique links — eshigi yopiq odamlar bilan aloqa: ekspert bo'ling, serendipity, treking, running. 3) Capital — jiddiy summa $100 000 dan; Income→Capital, Capital→Capital, OPM. 4) Team — avval maqsad, xodimni oila a'zosidek tanlang. 5) Family — sulola 3 avlodda quriladi. 6) Audience — blog; eng tez o'sadigan richak. 7) Partner — 1+1=11; sizda yo'q richak borlar bilan. 8) Reputation — siz yo'qligingizda siz haqingizdagi gaplar; halollik, mardlik, va'daga vafo, natija, chiroyli muomala. 9) Personality — barcha richaklarning ildizi. Konvertatsiya: bilim → auditoriya → obro' → kapital; bittadan boshlang.`
  },
  {
    n: 2,
    nom: 'Shaxsiyat (Personality)',
    odat: { id: 'tafakkur', nom: 'Tafakkur — Sinbook (kechki taftish)', emoji: '🪞', qisqa: 'Tafakkur (Sinbook)' },
    mohiyat: `Shaxsiyat — daraxtning ildizi: richaklar tana, natija meva. Shaxsiyat = fikrlash, his-tuyg'u, qadriyat, xatti-harakat, dunyoni idrok etish — o'zgartirish mumkin. Sokrat: «Know thyself»; o'zini tanimagan odam — boshqarilmaydigan kema. 4 zaif nuqta: g'azab (jahl paytida qaror qilmang), nafs, qo'rquv, dangasalik. Hissiy intellekt: o'zini anglash → o'zini boshqarish → boshqalarni tushunish. 5 qavat (ichkaridan tashqariga): oliy maqsad (xizmat, ibodat, saodat) → qadriyat (ichki kompas) → prinsip (haqiqiy prinsipni «yo'q»lar ochib beradi; Dalio «Principles») → xarakter (hech kim ko'rmayotganda qilgan ishlaringiz) → odat (takror). James Clear: maqsad darajasiga ko'tarilmaysiz, tizimingiz darajasiga tushasiz. Har kuni 1% = yilda 37×. Yillik maqsadni odatlarga bo'ling, sabablarini yozing.`
  },
  {
    n: 3,
    nom: 'Karyera',
    odat: { id: 'oqish', nom: 'Kuniga 30 daqiqa kasbiy ilm (o\'qish)', emoji: '📚', qisqa: '30 daq ilm' },
    mohiyat: `Avval pol — keyin potolok: barqaror kasb — yiqilganda tushadigan pol. Aktyor vs buxgalter: daromad farqi 4000× vs 4×, muvaffaqiyatsizlik 65% vs 10%; zero sum vs non-zero sum game — avval pol quring, keyin sakrang. Optionality: qancha ko'p eshik ochiq, shuncha erkinsiz. 6 qoida: 1) O'zgarmas fanlarni asos qiling. 2) Ko'proq eshik ochadigan yo'l: yoshlikda keng, ixtisoslashuv keyin. 3) Avval riskni kamaytiring, keyin yutishga o'ting. 4) Barbell: xavfsiz ish + imkoniyatli yo'l. 5) Learning speed = earning speed: savol-javob kitobdan 6× tez; kuniga 30 daqiqa ilm olmagan odam o'smaydi. 6) Gigiyenik omillar yopilmagan — bozor + qiziqish; yopilgan — qiziqish + imkoniyat. Daromad: input-based (soat) → output-based (natija, ulush); bottleneck'ni toping. Biznes: sizsiz ishlamasa — self-employed. 3 tayanch: USP, jamoa, integrity. Vazifa: kasbni dekompozitsiya qiling, har bo'limga role model + manba.`
  },
  {
    n: 4,
    nom: 'Moliya',
    odat: { id: 'pul', nom: 'Kirim-chiqimni yozish (cashflow)', emoji: '💰', qisqa: 'Kirim-chiqim' },
    mohiyat: `Pul — eng muhim narsa emas, lekin muhim narsalarga ta'sir qiladi. Boy kim? Vaqti ko'p va xotirjam odam. Rich vs Wealthy: puldor — kurtka $800, net worth $15K; boy — kurtka $25, net worth $1.2M. Boylikni ko'rinish emas, aktivlar (o'zi daromad keltiradigan narsa) belgilaydi. 1) Xavfsizlik yostiqchasi: 6 oylik XARAJATga teng pul, tegilmaydigan alohida hisobda (1 → 3 → 6 oy). 2) Pul topish va sarflash — ikki xil skill: topishda risk, tezlik; sarflashda ehtiyotkorlik, sabr (delayed gratification), budjet. 3) Budjet: har oy kirim-chiqim yozma (cashflow). Har xarid oldidan: «Bu kerakmi yoki hozir xohlayapmanmi?» Impulsiv xaridda 3 kun kuting; narxga emas, foydaga qarang. Pul 3 marta sarflanadi: fikrda → qarorda → xaridda — fikrda to'xtating. 4) Tartib: yostiqcha → budjet → qarzsiz hayot → sarmoya. Kitoblar: Boy ota, kambag'al ota → Pul psixologiyasi → Fastlane Millionaire.`
  },
  {
    n: 5,
    nom: 'Munosabatlar',
    odat: { id: 'gofirst', nom: 'Go first — birinchi bo\'lib yaxshilik', emoji: '🤝', qisqa: 'Go first' },
    mohiyat: `Munosabatlar — eng qimmat aktiv. 5 prinsip: 1) Go first, go positive — salom, yordam, iliq so'zni birinchi siz bering. 2) Perspective over perception — taassurot emas, nuqtai nazar: uning ko'zi bilan qarang. 3) Trust comes first — ishonch sekin quriladi, bir zumda buziladi. 4) Listening is a superpower — savol bering, oxirigacha eshiting. 5) Relationships over transactions — hisob-kitobsiz yaxshilik qiling. Hard times reveal true friends: haqiqiy do'st zararni bo'lishadi, kerak bo'lsa o'ziga oladi, foyda kutmay o'zidan nimadir kesadi — hech bo'lmasa vaqtini. Talpa: sizga talpa qilinganda yo'q, olomon bilan talpa qilganda bor — bu do'st emas. Mahbus dilemmasi: bir martalik o'yinda sotish foydali ko'rinadi, lekin hayot — takroriy o'yin: sotgan bilan hech kim qayta o'ynamaydi; ishonch — uzoq o'yinning yagona strategiyasi. Vazifa: qiyin paytda kim yonimda edi — ro'yxat.`
  },
  {
    n: 6,
    nom: "Sog'liq",
    odat: { id: 'uyqu', nom: 'Uyqu tartibi — 22:00, ekransiz, telefon tashqarida', emoji: '😴', qisqa: 'Uyqu 22:00' },
    mohiyat: `Sog'liq — barcha richaklarning poydevori. 6 ustun: 1) Stress — dushman emas, signal: qisqa stress foydali, surunkali stress uyqu, immunitet, qaror sifatini buzadi; manbasini toping. 2) Uyqu — eng arzon dori: 7–8 soat, har kuni bir xil vaqtda; 21:00 ekranlar o'chadi, 22:00 yotish; uyquni qisqartirsangiz o'rganganingizni o'chirasiz. 3) Ovqatlanish — siz yegan narsangizsiz: ko'proq sabzavot, meva, oqsil, suv 1.5–2 l; kamroq shakar, oq un, qovurilgan, gazli, kech tungi ovqat; 80% to'ysangiz — to'xtang. 4) Jismoniy mashq — miyaga ham dori: kuniga 30 daqiqa yurish, haftada 2–3 kuch mashqi; eng yaxshi sport — siz davom ettiradigan sport. 5) Emotion — reaksiya emas, javob: nomlang → sababini toping → to'xtang, nafas oling → javobni tanlang; his va harakat orasida — pauza. 6) Magnetic rays — telefon yotoqxonadan tashqarida, ertalab 30 daqiqa ekransiz.`
  },
  {
    n: 7,
    nom: 'Ilm',
    odat: { id: 'logbook', nom: 'Logbook — ikkinchi miya (5 qator xulosa)', emoji: '🧠', qisqa: 'Logbook' },
    mohiyat: `Ilm — eng katta richak. Piramida: Ma'lumot (eshitdim) → Bilim (tushundim) → Ko'nikma (mashq qildim) → Ilm (o'rgata olaman). Framework: ma'lumot ol → tushun → mashq qil → chuqurlash → O'RGAT — o'rgatgan odam ilmni o'ziniki qiladi. Skill stack: bitta ko'nikma — oddiy, bir nechtasi birga — noyob mutaxassis. Ustoz: siz bormoqchi bo'lgan joyda turgan, gapiradigan emas — qiladigan; har soha uchun bittadan. Ikkinchi miya: miya saqlash uchun emas, fikrlash uchun — Notion/Obsidian/daftar; yig'ing → bog'lang → qo'llang. 3 filtr: maqsadga tegishlimi? manba o'zi qilganmi? 10 yildan keyin ham kerakmi? Multidisciplinarity: 1 muammoga 5 fan ko'zi — 5 yechim. Dimensionality: bir qaror zanjir reaksiya beradi (chegirma → arzon ustoz → brend zarar); 4-o'lchamda fikrlang, belgi emas — sabab bilan ishlang. Writing to learn: har kitob, dars, suhbatdan keyin 5 qator xulosa.`
  },
  {
    n: 8,
    nom: 'Fikrlash',
    odat: { id: 'pauza', nom: 'Pauza — muhim qarorni 1 kun kechiktirish + checklist', emoji: '⏸️', qisqa: 'Pauza' },
    mohiyat: `Miya bizni har kuni aldaydi. Charlie Munger: «Muvaffaqiyatim — odamlar qiladigan 25 ta xatoni qilmaganimda». Tendensiyalar 70–90% foydali, 10–30% aldaydi — maqsad: qachon aldayotganini bilish. Asosiylari: Reward & Punishment (odam nimaga mukofot olsa, shuni qiladi), Envy (odamni «paket» sifatida ko'ring), Reciprocation (sovg'a olmang), Deprival-superreaction (yo'qotish og'rig'i 2×), Social proof («hamma qilyapti» — eng xavfli gap), Contrast-misreaction (olma bilan olmani solishtiring), Authority-misinfluence (Milgram), Reason-respecting («chunki» — sababni tekshiring), Lollapalooza — bir nechta tendensiya birga kelsa ta'sir ko'paytiriladi; 2–3 tasi birga kelsa — to'xtang. 4 antidot: checklist (qaysi tendensiya meni aldayapti?), qarshi fikr, reaksiyani kechiktirish (javob ertaga), birinchi prinsiplar («kim aytdi» emas — «nima uchun to'g'ri»).`
  },
  {
    n: 9,
    nom: 'Vaqt',
    odat: { id: 'reja', nom: 'Kun rejasi — kechqurun ertangi kun + vaqt hisoboti', emoji: '🗓️', qisqa: 'Kun rejasi' },
    mohiyat: `Vaqt — eng qimmat valyuta: pul qaytadi, vaqt qaytmaydi. Kovi: time management yo'q — self management bor. 3 qonun: Parkinson (ish ajratilgan vaqtni to'ldiradi — muddatni qisqa qo'ying), Pareto 80/20, Merfi (zaxira vaqt). Temporal awareness: bir hafta har soatni yozing, yakshanba tahlil. 6 vosita: 1) Ikki telefon — asosiysida tarmoq yo'q. 2) Bulk communication — xabarlarga kuniga 1 soat, qolgani chuqur ish. 3) Tong — 1 soat = kunduzgi 3 soat; eng muhim ish soat 8 gacha. 4) Qaror umri: ovqat 1 soat, kiyim 1 kun, xarid 1 yil — qisqasini avtomatlashtiring (Fugland: majbur bo'lmasangiz qaror qilmang). 5) Eng arzon format: uchrashuv 60 min → qo'ng'iroq 10 min → xabar 1 min. 6) Checklist — miyaga emas, ro'yxatga ishoning; uyqudan oldin checklist — ertangi kun tayyor. Har ish oldidan 4 savol: keraklimi? pulga arziydimi? hozir eng muhimi shumi? asl mohiyati nima?`
  },
  {
    n: 10,
    nom: 'Blog',
    odat: { id: 'yozish', nom: 'Yozish — har kuni yozish, haftada 1 post', emoji: '✍️', qisqa: 'Yozish' },
    mohiyat: `Blog — auditoriyangiz, obro'yingiz va ikkinchi miyangiz. Foydasi: fikr aniqligi (yoza olmagan narsangizni tushunmagansiz), compound (bir marta yozasiz — yillar o'qiladi), zichlik (60 daqiqa yozish → 1 daqiqa o'qish × minglab odam). Instagram — 10 sekund, unutiladi; matn — 1 kishi bilan 2 soat, bookmark qilinadi. Podpischik emas — foyda. Boshlash: imitate (taqlid → o'z ovozingiz) → g'oya (hayratlantira olmasangiz, yozmang) → sarlavha → tahrir. Ramkalar: SPA (Story · Platitude · Advice), PAS (Problem · Augmentation · Solution). Sarlavha = 50%; kirish so'zsiz; dalil 3 xil: statistika, hikoya, shaxsiy tajriba. Edit, edit, edit: ovoz chiqarib o'qing (qoqilgan joy — noto'g'ri joy), gapirgandek yozing, yuk tashimaydigan so'zlarni o'chiring, qisqartiring. Qoidalar: haftada kamida 1 post, bookmark qilinadigan, o'z tajribangizdan, qisqa, har postga 10 sarlavha.`
  }
];

const ODATLAR = DARSLAR.map(d => d.odat);

const KIRISH = [
  'SHOGIRDLIK DASTURI — Jahongir Zoxidov. 10 dars = 10 odat: har dars bitta kundalik odat beradi.',
  'Falsafa: yurishdan oldin yiqilmaslik o\'rganiladi — avval yutqizmaslik qoidalari (pol), keyin yutish (potolok). Har mavzuga 3 savol: Why → How → What.',
  '9 richak: noyob bilim, noyob aloqalar, kapital, jamoa, oila, auditoriya, sherik, obro\', shaxsiyat. Richak qancha ko\'p — hayot yuki shuncha yengil; bittadan boshlang.',
  'Shogird bo\'lish: qiladigan ustozdan o\'rganing, bilimni tizimda saqlang (ikkinchi miya); muvaffaqiyat — har kungi odatlar jamlanmasi (har kuni 1% = yilda 37×).'
].join('\n');

const BILIM = KIRISH + '\n\n' + DARSLAR.map(d =>
  'DARS ' + d.n + ' — ' + d.nom + '\n' + d.mohiyat + '\nOdat [' + d.odat.id + ']: ' + d.odat.emoji + ' ' + d.odat.nom
).join('\n\n');

module.exports = { DARSLAR, ODATLAR, BILIM };

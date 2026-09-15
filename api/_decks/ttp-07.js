'use strict';
/* TTP · 7-modul: O'quvchilarda intizomni shakllantirish */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*7-modul* · O\'quvchilarda intizomni shakllantirish', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-sinf.jpg', focus: 'center', k: '7-modul', h: '«Yaxshi ustoz qoidalar bilan emas, *ilhom* bilan boshqaradi»', s: 'Intizom — ichkaridan keladigan tartib' },

    { t: 'steps', color: 'red', icon: '🪞', k: '01 · Avval o\'zimizga savol beraylik', h: 'Ikki *noqulay* savol', all: true, items: [
      { n: '1', h: 'Otangizning oldida mo\'min-qobil, lekin tashqarida boshqacha odam emasmisiz?' },
      { n: '2', h: 'O\'quvchilaringiz siz borligingizda jim, yo\'g\'ingizda esa shovqin qiladimi?' }
    ], note: 'Demak, intizom aslida nima? Jim o\'tirishmi? Gapirmaslikmi? Buyruqqa bo\'ysunishmi? *Aslida intizom — o\'quvchining ichidan kelgan tartib va mas\'uliyat.*' },

    { t: 'vs', color: 'blue', icon: '🧭', k: '02 · Intizomning ichki xususiyati', h: 'Intizom — kayfiyat, xohish bo\'lmaganda ham *to\'g\'ri ish* qila olish qobiliyati', a: { icon: '😨', h: 'Qo\'rqitish', tone: 'bad', q: '→ tashqi nazorat' }, b: { icon: '🌱', h: 'Tarbiya', tone: 'good', q: '→ ichki nazorat' }, all: true, note: 'Immanuel Kant: *«Axloq — bu tashqi nazorat emas, ichki qonundir.»*' },

    { t: 'grid', color: 'red', icon: '📢', k: '03 · Nega qo\'rqitish ishlamaydi?', h: 'Ko\'p ishlatiladigan *usullar*', cols: 4, items: [
      { icon: '📢', h: 'Baqirish', p: 'Ovozni ko\'tarib bostirish' },
      { icon: '😳', h: 'Uyaltirish', p: 'Sinf oldida masxara qilish' },
      { icon: '🔨', h: 'Jazolash', p: 'Past baho, jismoniy jazo' },
      { icon: '📞', h: 'Ota-ona bilan qo\'rqitish', p: '«Aytaman dadangga!»' }
    ], note: 'Bu usullar qisqa muddatda «ishlaydi»… lekin uzoq muddatda *3 ta katta zarar* beradi.' },

    { t: 'steps', color: 'red', icon: '💥', k: '04', h: 'Qo\'rqitishning *3 ta katta zarari*', all: true, items: [
      { n: '🎭', h: 'Soxta intizom', p: 'O\'quvchi ustoz borida yaxshi, yo\'g\'ida boshqa.' },
      { n: '🧱', h: 'Ichki qarshilik', p: 'Bola ichida «Menga majburlashyapti» degan hiss paydo bo\'ladi. Bu passiv qarshilikka olib keladi.' },
      { n: '💔', h: 'Munosabat buziladi', p: 'Lev Vygotsky: «Ta\'lim — bu avvalo munosabat orqali quriladi.»' }
    ], note: '*Qo\'rqitilgan bola o\'rganmaydi, faqat omon qoladi.*' },

    { t: 'vs', color: 'green', icon: '👥', k: '05 · Vygotsky', h: 'Ta\'lim — bu *ijtimoiy* jarayon', a: { icon: '👤', h: 'Eski qarash', tone: 'bad', items: ['Bilim → individual'] }, b: { icon: '👥', h: 'Vygotsky', tone: 'good', items: ['Bilim → munosabat mahsuli', 'Inson yolg\'iz o\'rganmaydi, u boshqalar bilan o\'rganadi'] }, all: true, note: 'Agar sinfda aloqa yo\'q bo\'lsa, *haqiqiy o\'rganish ham yo\'q.*' },

    { t: 'vs', color: 'blue', icon: '🧭', k: '06 · Ustozning haqiqiy vazifasi', h: 'Vygotsky\'ning fikricha *ustozning vazifasi*', a: { icon: '📢', h: 'Dars berish emas', tone: 'bad', p: 'Faqat ma\'lumotni yetkazib qo\'yish — eski qarash' }, b: { icon: '🧭', h: 'To\'g\'ri yordam berish', tone: 'good', p: 'O\'quvchining o\'zi kashf eta olishi uchun yo\'l ko\'rsatish' }, all: true },

    { t: 'circles', color: 'green', k: '07 · Vygotsky\'ning eng katta kashfiyoti · ZPD', h: 'O\'quvchining *3 holati*', s: 'Ta\'lim aynan 2-zonada — «yordam bilan qila oladi» zonasida sodir bo\'ladi.', rings: [
      { label: 'O\'ZI', short: '1', h: 'O\'zi qila oladi', p: 'O\'quvchi yordamsiz mustaqil bajara oladi.' },
      { label: 'ZPD', short: '2', h: 'Yordam bilan qila oladi', p: 'Ustoz yordamida (scaffolding) o\'rganadi. Ta\'lim shu yerda — eng muhim zona.' },
      { label: 'HALI YO\'Q', short: '3', h: 'Umuman qila olmaydi', p: 'Hozircha o\'zlashtirib bo\'lmaydi: vaqt va tayyorgarlik kerak.' }
    ] },

    { t: 'vs', color: 'orange', icon: '🤝', k: '08 · Intizom — buyruq emas, kelishuv', h: 'Bola qoidani majbur bo\'lib emas, *ijtimoiy muhit* orqali qabul qiladi', a: { icon: '📢', h: 'Buyruq emas', tone: 'bad', p: '«Men aytdim — sen bajar.»' }, b: { icon: '🤝', h: 'Kelishuv', tone: 'good', p: 'Birga o\'rnatilgan qoida ichkaridan bajariladi.' }, all: true },

    { t: 'bars', color: 'blue', icon: '🏗️', k: '09 · «Scaffolding» — vaqtinchalik tayanch', h: 'Ustoz yordam beradi, keyin asta-sekin *o\'zi chiqib ketadi*', rows: [
      { h: 'Boshlanishida', p: 'Ko\'p yordam: tushuntirasiz, yo\'naltirasiz, qo\'l ostida olib borasiz', w: '100%', v: 'Ko\'p yordam', color: 'red' },
      { h: 'Keyin', p: 'Kamroq aralashuv: o\'quvchi o\'zi sinab ko\'radi, siz kuzatasiz', w: '50%', v: 'Kamroq', color: 'orange' },
      { h: 'Oxirida', p: 'Mustaqillik: o\'quvchi ustoz yo\'qligida ham bajara oladi', w: '12%', v: 'Mustaqil', color: 'green' }
    ], note: 'Bu haqiqiy ta\'lim: *yordam asta-sekin kamayadi, mustaqillik o\'sib boradi.*' },

    { t: 'pyramid', color: 'green', k: '10 · Intizomning yangi modeli', h: 'Zamonaviy pedagogika intizomni *3 ustunga* quradi', s: 'John Dewey: «Ta\'lim — bu majburlash emas, muhit yaratishdir.»', levels: [
      { icon: '🤝', label: 'Munosabat', h: 'Ishonch va hurmat', p: 'Asos — ustoz va o\'quvchi orasidagi insoniy bog\'lanish.' },
      { icon: '🔁', label: 'Odatlar', h: 'Takror orqali mustahkamlash', p: 'Kunlik tartib va doimiy harakat orqali ichkilashtiriladi.' },
      { icon: '📜', label: 'Qoidalar', h: 'Aniq chegaralar', p: 'O\'quvchi nima mumkin, nima mumkin emasligini aniq biladi.' }
    ] },

    { t: 'vs', color: 'orange', icon: '📜', k: '11 · Qoidalar: sinfning konstitutsiyasi', h: 'Qoidalarni *kim* yozadi?', a: { icon: '👑', h: 'Ustozning eng katta xatosi: o\'zi belgilashi', tone: 'bad', items: ['«Men aytaman — siz bajarasiz»', 'O\'quvchi qoidaning sababini bilmaydi', 'Ustoz yo\'q paytda qoida ham yo\'q', 'Norozilik ichkarida to\'planadi'] }, b: { icon: '✍️', h: 'To\'g\'ri yondashuv: birga ishlab chiqish', tone: 'good', items: ['«Qanday qoidalar bizga foydali?»', 'O\'quvchi sababini tushunadi va qabul qiladi', 'Qoida «meniki»ga aylanadi', 'Ichkaridan bajariladi'] }, all: true, note: '*Birga yozilgan qoida birga bajariladi.*' },

    { t: 'vs', color: 'blue', icon: '🔁', k: '12 · Odatlar: intizomning yashirin mexanizmi', h: 'Intizom — bu qaror emas, *odat*', a: { icon: '🤔', h: 'Qaror', tone: 'bad', p: 'Har safar fikrlaysiz, qarshilik ko\'rsatasiz, iroda sarflaysiz. Tez charchatadi.' }, b: { icon: '⚙️', h: 'Odat', tone: 'good', p: 'Avtomatik bajariladi, iroda kerakmas. Tabiiyga aylanadi.' }, all: true, note: 'B.F. Skinner: *«Takrorlangan xatti-harakatlar avtomatiklashadi.»*' },

    { t: 'flow', color: 'green', icon: '🔔', k: '13 · Metod: «Ritual dars boshlanishi»', h: 'Har darsda takrorlanadigan *3 bosqich*', items: ['👋 Salomlashish', '📓 Daftar ochish', '🧘 2 daqiqa fokus'], all: true, note: 'Har kuni bir xil tarzda salomlashish — tana «dars boshlandi» deb biladi. Daftar va qalam — aniq signal, fokus boshlanadi. Sukut yoki nafas — diqqat bir nuqtaga. Natija: bola o\'ylamaydi, avtomatik bajaradi. *Iroda emas, odat ishlaydi.*' },

    { t: 'flow', color: 'orange', icon: '🔄', k: '14 · Skinner: xulq-atvor qanday shakllanadi?', h: 'Inson xulqi *natijalar* orqali shakllanadi', items: ['🏃 Harakat', '🎯 Natija', '📈 Kuchayadi yoki yo\'qoladi'], all: true, note: 'Natija ijobiy bo\'lsa odat takrorlanadi, salbiy bo\'lsa yo\'qoladi.' },

    { t: 'grid', color: 'blue', icon: '⚙️', k: '15 · Xulqni shakllantirishning 4 ta mexanizmi', h: 'Skinner *bo\'yicha*', cols: 4, items: [
      { icon: '👏', h: 'Rag\'bat', p: 'Yaxshi xulqni maqtash, qo\'llab-quvvatlash, e\'tibor berish' },
      { icon: '🎈', h: 'Bosimni olib tashlash', p: 'Yoqimsiz holatni yumshatish xulqni mustahkamlaydi' },
      { icon: '🔨', h: 'Jazolash', p: 'Salbiy natija: odat zaiflashadi, ammo nafrat keltiradi' },
      { icon: '🙈', h: 'E\'tiborsiz qoldirish', p: 'Xulqni umuman e\'tiborsiz qoldirish: asta-sekin yo\'qoladi' }
    ], note: 'Ko\'p ustozlarning xatosi: faqat xatoni ko\'rish, yaxshi xulqni hech qachon maqtamaslik. Misol: 1 ta bola gaplashyapti, 5 ta bola jim. Fokus 5 ta jim bolaga: *«Rahmat, jim o\'tirgan qatorlar!»*' },

    { t: 'steps', color: 'green', icon: '💞', k: '16 · Munosabat: yashirin kuch', h: 'Eng kuchli intizom vositasi — ustoz va o\'quvchi o\'rtasidagi *aloqa*', all: true, items: [
      { n: '✓', h: 'U buzmaydi', p: 'Qoidalarni o\'zi himoya qiladi, chunki ular «meniki»' },
      { n: '✓', h: 'U qarshi chiqmaydi', p: 'Ustoz uchun mas\'uliyat his qiladi, qarshilik yo\'qoladi' },
      { n: '★', h: 'Ishonchni oqlashga harakat qiladi', p: 'Ustoz unga ishonganini his qiladi, bu kuch beradi' }
    ], note: 'Agar bola o\'zini hurmat qilingan his qilsa…' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/t-bolalar2.jpg', focus: 'center', k: '17 · Janusz Korczak', h: '«Bola — kelajak emas, u *bugunning o\'zi*»', items: [
      'Ko\'pchilikning xatosi: «Hali kichkina», «Hali tushunmaydi», «Keyin odam bo\'ladi».',
      'Haqiqat: bola hozir ham to\'liq inson, faqat tajribasi kam.',
      'Uning fikri — fikr, og\'rig\'i — og\'riq, quvonchi — quvonch. Hozir, bugun.',
      '*Bugun hurmat qilingan bola ertaga hurmat qiluvchi inson bo\'ladi.*'
    ], all: true },

    { t: 'vs', color: 'green', icon: '🧒', k: '18 · Korczak', h: 'Agar siz bolani *«to\'liq inson»* deb qabul qilsangiz…', a: { icon: '🚫', h: 'Bularni qilmaysiz', tone: 'bad', items: ['Uni majburlamaysiz', 'Uni kamsitmaysiz', 'Uni faqat boshqariladigan obyekt deb ko\'rmaysiz'] }, b: { icon: '✅', h: 'Bularni qilasiz', tone: 'good', items: ['Uni tinglaysiz', 'Unga tanlov berasiz', 'Unga hurmat bilan munosabat qilasiz'] }, all: true },

    { t: 'steps', color: 'blue', icon: '⚖️', k: '19 · Bolalar sudi — Korczak tajribasi', h: 'Bolalar o\'z jamoasini *o\'zi boshqargan* tizim', all: true, items: [
      { n: '⚖️', h: 'Bir-birini baholagan', p: 'Bolalar o\'rtoqlarining xulqi haqida o\'zlari fikr bildirgan, qaror qabul qilgan.' },
      { n: '🤝', h: 'Nizolarni o\'zi hal qilgan', p: 'Janjal yoki muammo bo\'lsa, kattalarsiz, o\'zlari muhokama qilib yechgan.' }
    ], note: 'Asosiy xulosa: *bola jazodan emas, adolatdan qo\'rqadi.*' },

    { t: 'steps', color: 'orange', icon: '📜', k: '20 · «Hurmat huquqi»', h: 'Korczak: bola *3 narsaga* haqli', all: true, items: [
      { n: '🙏', h: 'Hurmatga · right to respect', p: 'Yoshi kichik bo\'lsa ham uning shaxsiyati, his-tuyg\'ulari va fikri katta odamniki bilan teng.' },
      { n: '✕', h: 'Xatoga · right to err', p: 'Bola xato qilishi tabiiy. Xatosiz o\'rganish yo\'q, xato o\'sishning bir qismi.' },
      { n: '💭', h: 'O\'z fikriga · right to own opinion', p: 'Bolaning fikri o\'ziniki. U «yo\'q» deyish, e\'tiroz bildirish, savol berish huquqiga ega.' }
    ], note: '*Bu uchta huquq berilgan bola intizomli inson bo\'lib o\'sadi.*' },

    { t: 'steps', color: 'green', icon: '💡', k: '21 · Modulning ikki asosiy g\'oyasi', h: 'Kant va *modul xulosasi*', all: true, items: [
      { n: '🏛️', h: '«Inson — vosita emas, maqsaddir.»', p: 'Immanuel Kant' },
      { n: '🎯', h: '«Intizom — bu itoat emas, o\'zini boshqarishdir.»', p: 'Modulning xulosasi' }
    ] },

    { t: 'flow', color: 'red', icon: '🚶', k: '22 · Murakkab vaziyatlar uchun algoritm', h: 'Sinfda o\'quvchi xulqi buzilganda: ketma-ket *4 qadam*', items: ['🚶 Yaqinlashish', '🔊 Ovoz signali', '🔀 Tanlov berish', '💬 Keyin suhbat'], all: true, note: 'To\'xtatmasdan yaqinlashing — dars davom etadi, oraliq qisqaradi → past va baland ovozda mavzu haqida gapirasiz, tanbeh emas → yoniga o\'tirib tanlov: «Bu yerda ishlaysanmi yoki ko\'chamizmi?» → faqat darsdan keyin do\'stona suhbat. *Eshik emas — yo\'l. Qichqirish emas — yaqinlashish.*' },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/t-bolalar.jpg', focus: 'center', k: '23 · Anton Makarenko', h: 'Intizom — bu *jamoa* orqali shakllanadi', items: [
      '*Jamoaning bir qismi* — har bir bola jamoaga tegishli, hech kim chetda emas.',
      '*Aniq rol* — har bir bolaning o\'z vazifasi, o\'z o\'rni bor.',
      '*Javobgarlik* — har bir bola o\'z ishi uchun mas\'uliyatli, boshqalar oldida.',
      'Bola ustozdan emas, *jamoa bosimidan* ko\'proq ta\'sirlanadi.'
    ], all: true },

    { t: 'vs', color: 'orange', icon: '👥', k: '24 · Makarenko amaliyoti', h: 'Agar bitta bola qoidani buzsa, *nima bo\'ladi*?', a: { icon: '👩‍🏫', h: 'Ustoz jazolamaydi', tone: 'neutral', items: ['Ustoz to\'g\'ridan-to\'g\'ri bola bilan qarama-qarshi turmaydi', 'U jazo bermaydi, baqirmaydi, kamsitmaydi'] }, b: { icon: '👥', h: 'Jamoa reaksiyaga kiradi', tone: 'good', items: ['Sinfdoshlar o\'zlari javob beradi: «Bizning qoidamiz buzildi»', 'Ijtimoiy bosim — eng kuchli o\'zgartiruvchi vosita'] }, all: true, note: 'Natija: bola ustozdan emas, *jamoani yo\'qotishdan* qo\'rqadi.' },

    { t: 'big', color: 'green', icon: '🎖️', k: '25 · Makarenkoning mashhur metodi', h: 'Intizom = *Javobgarlik*', s: 'Ustoz bolaga to\'g\'ridan-to\'g\'ri bosim qilmaydi, balki jamoa orqali ta\'sir qiladi. Bola jamoa oldida o\'zining javobgarligini his qiladi: bu ichki intizomdir.' },

    { t: 'tree', color: 'blue', k: '26 · Xulosa: uch nazariyotchi — bitta haqiqat', h: 'Inson *munosabat ichida* shakllanadi', s: 'Demak, ustoz sifatida: 1) Jamoani quring · 2) Har bir o\'quvchiga rol bering · 3) Mas\'uliyatni umumiy qiling', root: { icon: '🧒', label: 'Intizomli inson' }, kids: [{ icon: '👥', label: 'Makarenko' }, { icon: '🙏', label: 'Korczak' }, { icon: '🤝', label: 'Vygotsky' }], items: [
      'Makarenko → jamoa bosimi: inson jamoada o\'sadi.',
      'Korczak → individual hurmat: bola bugun ham to\'liq inson.',
      'Vygotsky → ijtimoiy o\'rganish: o\'rganish — munosabat.'
    ] },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '7-modul yakunlandi · Keyingi: 8-modul — Ustozlik charchog\'idan chiqish' }
  ]
};

'use strict';
/* TTP · 7-modul: O'quvchilarda intizomni shakllantirish */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 7-modul', h: 'O\'quvchilarda intizomni shakllantirish', s: '«Yaxshi ustoz qoidalar bilan emas, ilhom bilan boshqaradi»', meta: 'Jahongir Zoxidov' },

    { t: 'bullets', k: '01 · Avval o\'zimizga savol beraylik', h: 'Ikki noqulay savol', items: [
      'Otangizning oldida mo\'min-qobil, lekin tashqarida boshqacha odam emasmisiz?',
      'O\'quvchilaringiz siz borligingizda jim, yo\'g\'ingizda esa shovqin qiladimi?'
    ], note: 'Demak, intizom aslida nima? Jim o\'tirishmi? Gapirmaslikmi? Buyruqqa bo\'ysunishmi? *Aslida intizom — o\'quvchining ichidan kelgan tartib va mas\'uliyat.*' },

    { t: 'vs', k: '02 · Intizomning ichki xususiyati', h: 'Intizom — inson o\'zida kayfiyat, xohish bo\'lmaganda ham to\'g\'ri ish qila olish qobiliyati', a: { h: 'Qo\'rqitish', tone: 'bad', q: '→ tashqi nazorat' }, b: { h: 'Tarbiya', tone: 'good', q: '→ ichki nazorat' }, note: 'Immanuel Kant: *«Axloq — bu tashqi nazorat emas, ichki qonundir.»*' },

    { t: 'steps', k: '03 · Nega qo\'rqitish ishlamaydi?', h: 'Ko\'p ishlatiladigan usullar', items: [
      { n: '✕', h: 'Baqirish', p: 'Ovozni ko\'tarib bostirish' },
      { n: '✕', h: 'Uyaltirish', p: 'Sinf oldida masxara qilish' },
      { n: '✕', h: 'Jazolash', p: 'Past baho, jismoniy jazo' },
      { n: '✕', h: 'Ota-ona bilan qo\'rqitish', p: '«Aytaman dadangga!»' }
    ], note: 'Bu usullar qisqa muddatda «ishlaydi»… lekin uzoq muddatda *3 ta katta zarar* beradi.' },

    { t: 'steps', k: '04', h: 'Qo\'rqitishning 3 ta katta zarari', items: [
      { h: 'Soxta intizom', p: 'O\'quvchi ustoz borida yaxshi, yo\'g\'ida boshqa.' },
      { h: 'Ichki qarshilik', p: 'Bola ichida «Menga majburlashyapti» degan hiss paydo bo\'ladi. Bu passiv qarshilikka olib keladi.' },
      { h: 'Munosabat buziladi', p: 'Lev Vygotsky: «Ta\'lim — bu avvalo munosabat orqali quriladi.»' }
    ], note: '*Qo\'rqitilgan bola o\'rganmaydi, faqat omon qoladi.*' },

    { t: 'vs', k: '05 · Vygotsky', h: 'Ta\'lim — bu ijtimoiy jarayon', a: { h: 'Eski qarash', tone: 'bad', items: ['Bilim → individual'] }, b: { h: 'Vygotsky', tone: 'good', items: ['Bilim → munosabat mahsuli', 'Inson yolg\'iz o\'rganmaydi, u boshqalar bilan o\'rganadi'] }, note: 'Agar sinfda aloqa yo\'q bo\'lsa, *haqiqiy o\'rganish ham yo\'q.*' },

    { t: 'vs', k: '06 · Ustozning haqiqiy vazifasi', h: 'Vygotsky\'ning fikricha ustozning vazifasi', a: { h: 'Dars berish emas', tone: 'bad', p: 'Faqat ma\'lumotni yetkazib qo\'yish — eski qarash' }, b: { h: 'To\'g\'ri yordam berish', tone: 'good', p: 'O\'quvchining o\'zi kashf eta olishi uchun yo\'l ko\'rsatish' } },

    { t: 'steps', k: '07 · Vygotsky\'ning eng katta kashfiyoti · ZPD', h: 'O\'quvchining 3 holati', items: [
      { h: 'O\'zi qila oladi', p: 'O\'quvchi yordamsiz mustaqil bajara oladi.' },
      { h: 'Yordam bilan qila oladi · ZPD', p: 'Ustoz yordamida (scaffolding) o\'rganadi.', tag: 'Eng muhim' },
      { h: 'Umuman qila olmaydi', p: 'Hozircha o\'zlashtirib bo\'lmaydi: vaqt va tayyorgarlik kerak.' }
    ], note: 'Ta\'lim aynan 2-zonada, *«yordam bilan qila oladi»* zonasida sodir bo\'ladi.' },

    { t: 'vs', k: '08 · Intizom — buyruq emas, kelishuv', h: 'Bola qoidani majbur bo\'lib emas, ijtimoiy muhit orqali qabul qiladi', a: { h: 'Buyruq emas', tone: 'bad' }, b: { h: 'Kelishuv', tone: 'good', p: 'Birga o\'rnatilgan qoida ichkaridan bajariladi.' } },

    { t: 'steps', k: '09 · «Scaffolding» — vaqtinchalik tayanch', h: 'Ustoz vaqtinchalik yordam beradi, keyin asta-sekin o\'zi chiqib ketadi', items: [
      { n: 'Boshlanishida', h: 'Ko\'p yordam', p: 'Ko\'p tushuntirasiz, yo\'naltirasiz, qo\'l ostida olib borasiz' },
      { n: 'Keyin', h: 'Kamroq aralashuv', p: 'O\'quvchi o\'zi sinab ko\'radi, siz kuzatasiz' },
      { n: 'Oxirida', h: 'Mustaqillik', p: 'O\'quvchi ustoz yo\'qligida ham bajara oladi' }
    ], note: 'Bu haqiqiy ta\'lim: *yordam asta-sekin kamayadi, mustaqillik o\'sib boradi.*' },

    { t: 'steps', k: '10 · Intizomning yangi modeli', h: 'Zamonaviy pedagogika intizomni 3 ustunga quradi', items: [
      { h: 'Qoidalar · aniq chegaralar', p: 'O\'quvchi nima mumkin, nima mumkin emasligini aniq biladi.' },
      { h: 'Odatlar · takror orqali mustahkamlash', p: 'Kunlik tartib va doimiy harakat orqali ichkilashtiriladi.' },
      { h: 'Munosabat · ishonch va hurmat', p: 'Asos — ustoz va o\'quvchi orasidagi insoniy bog\'lanish.' }
    ], note: 'John Dewey: *«Ta\'lim — bu majburlash emas, muhit yaratishdir.»*' },

    { t: 'vs', k: '11 · Qoidalar: sinfning konstitutsiyasi', h: 'Qoidalarni kim yozadi?', a: { h: 'Ustozning eng katta xatosi: o\'zi belgilashi', tone: 'bad', items: ['«Men aytaman — siz bajarasiz»', 'O\'quvchi qoidaning sababini bilmaydi', 'Ustoz yo\'q paytda qoida ham yo\'q', 'Norozilik ichkarida to\'planadi'] }, b: { h: 'To\'g\'ri yondashuv: birga ishlab chiqish', tone: 'good', items: ['«Qanday qoidalar bizga foydali?»', 'O\'quvchi sababini tushunadi va qabul qiladi', 'Qoida «meniki»ga aylanadi', 'Ichkaridan bajariladi'] }, note: '*Birga yozilgan qoida birga bajariladi.*' },

    { t: 'vs', k: '12 · Odatlar: intizomning yashirin mexanizmi', h: 'Intizom — bu qaror emas, odat', a: { h: 'Qaror', tone: 'bad', p: 'Har safar fikrlaysiz, qarshilik ko\'rsatasiz, iroda sarflaysiz. Tez charchatadi.' }, b: { h: 'Odat', tone: 'good', p: 'Avtomatik bajariladi, iroda kerakmas. Tabiiyga aylanadi.' }, note: 'B.F. Skinner: *«Takrorlangan xatti-harakatlar avtomatiklashadi.»*' },

    { t: 'steps', k: '13 · Metod: «Ritual dars boshlanishi»', h: 'Har darsda takrorlanadigan 3 bosqich', items: [
      { h: 'Salomlashish', p: 'Har kuni bir xil tarzda. Tana «dars boshlandi» deb biladi.' },
      { h: 'Daftar ochish', p: 'Aniq signal: daftar va qalam tayyorlash. Fokus boshlanadi.' },
      { h: '2 daqiqa fokus', p: 'Sukut yoki nafas mashqi. Diqqat bir nuqtaga qaratiladi.' }
    ], note: 'Natija: bola o\'ylamaydi, avtomatik bajaradi. *Iroda emas, odat ishlaydi.*' },

    { t: 'flow', k: '14 · Skinner: xulq-atvor qanday shakllanadi?', h: 'Inson xulqi natijalar orqali shakllanadi', items: ['Harakat', 'Natija', 'Kuchayadi yoki yo\'qoladi'], note: 'Natija ijobiy bo\'lsa odat takrorlanadi, salbiy bo\'lsa yo\'qoladi.' },

    { t: 'steps', k: '15 · Xulqni shakllantirishning 4 ta mexanizmi', h: 'Skinner bo\'yicha', items: [
      { h: 'Rag\'bat', p: 'Yaxshi xulqni maqtash, qo\'llab-quvvatlash, e\'tibor berish' },
      { h: 'Bosimni olib tashlash', p: 'Yoqimsiz holatni yumshatish xulqni mustahkamlaydi' },
      { h: 'Jazolash', p: 'Salbiy natija: odat zaiflashadi, ammo nafrat keltiradi' },
      { h: 'E\'tiborsiz qoldirish', p: 'Xulqni umuman e\'tiborsiz qoldirish: asta-sekin yo\'qoladi' }
    ], note: 'Ko\'p ustozlarning xatosi: faqat xatoni ko\'rish, yaxshi xulqni hech qachon maqtamaslik. Misol: 1 ta bola gaplashyapti, 5 ta bola jim. Fokus 5 ta jim bolaga: *«Rahmat, jim o\'tirgan qatorlar!»*' },

    { t: 'steps', k: '16 · Munosabat: yashirin kuch', h: 'Eng kuchli intizom vositasi — ustoz va o\'quvchi o\'rtasidagi aloqa', items: [
      { n: '✓', h: 'U buzmaydi', p: 'Qoidalarni o\'zi himoya qiladi, chunki ular «meniki»' },
      { n: '✓', h: 'U qarshi chiqmaydi', p: 'Ustoz uchun mas\'uliyat his qiladi, qarshilik yo\'qoladi' },
      { n: '★', h: 'Ishonchni oqlashga harakat qiladi', p: 'Ustoz unga ishonganini his qiladi, bu kuch beradi' }
    ], note: 'Agar bola o\'zini hurmat qilingan his qilsa…' },

    { t: 'vs', k: '17 · Janusz Korczak', h: '«Bola — kelajak emas, u bugunning o\'zi»', a: { h: 'Ko\'pchilikning xatosi', tone: 'bad', items: ['«Hali kichkina»', '«Hali tushunmaydi»', '«Keyin odam bo\'ladi»'] }, b: { h: 'Haqiqat', tone: 'good', items: ['Bola hozir ham to\'liq inson, faqat tajribasi kam', 'Uning fikri — fikr, og\'rig\'i — og\'riq, quvonchi — quvonch. Hozir, bugun.'] }, note: '*Bugun hurmat qilingan bola ertaga hurmat qiluvchi inson bo\'ladi.*' },

    { t: 'vs', k: '18 · Korczak', h: 'Agar siz bolani «to\'liq inson» deb qabul qilsangiz…', a: { h: 'Bularni qilmaysiz', tone: 'bad', items: ['Uni majburlamaysiz', 'Uni kamsitmaysiz', 'Uni faqat boshqariladigan obyekt deb ko\'rmaysiz'] }, b: { h: 'Bularni qilasiz', tone: 'good', items: ['Uni tinglaysiz', 'Unga tanlov berasiz', 'Unga hurmat bilan munosabat qilasiz'] } },

    { t: 'steps', k: '19 · Bolalar sudi — Korczak tajribasi', h: 'Bolalar o\'z jamoasini o\'zi boshqargan tizim', items: [
      { h: 'Bir-birini baholagan', p: 'Bolalar o\'rtoqlarining xulqi haqida o\'zlari fikr bildirgan, qaror qabul qilgan.' },
      { h: 'Nizolarni o\'zi hal qilgan', p: 'Janjal yoki muammo bo\'lsa, kattalarsiz, o\'zlari muhokama qilib yechgan.' }
    ], note: 'Asosiy xulosa: *bola jazodan emas, adolatdan qo\'rqadi.*' },

    { t: 'steps', k: '20 · «Hurmat huquqi»', h: 'Korczak: bola 3 narsaga haqli', items: [
      { h: 'Hurmatga · right to respect', p: 'Yoshi kichik bo\'lsa ham uning shaxsiyati, his-tuyg\'ulari va fikri katta odamniki bilan teng.' },
      { h: 'Xatoga · right to err', p: 'Bola xato qilishi tabiiy. Xatosiz o\'rganish yo\'q, xato o\'sishning bir qismi.' },
      { h: 'O\'z fikriga · right to own opinion', p: 'Bolaning fikri o\'ziniki. U «yo\'q» deyish, e\'tiroz bildirish, savol berish huquqiga ega.' }
    ], note: '*Bu uchta huquq berilgan bola intizomli inson bo\'lib o\'sadi.*' },

    { t: 'steps', k: '21 · Modulning ikki asosiy g\'oyasi', h: 'Kant va modul xulosasi', all: true, items: [
      { h: '«Inson — vosita emas, maqsaddir.»', p: 'Immanuel Kant' },
      { h: '«Intizom — bu itoat emas, o\'zini boshqarishdir.»', p: 'Modulning xulosasi' }
    ] },

    { t: 'steps', k: '22 · Murakkab vaziyatlar uchun algoritm', h: 'Sinfda o\'quvchi xulqi buzilganda: ketma-ket 4 qadam', items: [
      { h: 'Yaqinlashish', p: 'To\'xtatmasdan yaqinlashing. Siz darsni davom ettirasiz, faqat oraliq qisqaradi.' },
      { h: 'Ovoz signali', p: 'Past va baland ovozda mavzu haqida gapirasiz. Tanbeh emas, darsni ovoz bilan jonlantirasiz.' },
      { h: 'Tanlov berish', p: 'Dars jarayonida yoniga o\'tiring. Tanlov: «Siz bu yerda ishlashni xohlaysizmi yoki ko\'chaymizmi?»' },
      { h: 'Keyin suhbat', p: 'Faqat darsdan keyin, do\'stona suhbat. Hech qachon birinchi vaziyatda emas: bola sokin holatda eshitadi.' }
    ], note: '*Eshik emas — yo\'l. Qichqirish emas — yaqinlashish.*' },

    { t: 'steps', k: '23 · Anton Makarenko', h: 'Intizom — bu jamoa orqali shakllanadi', items: [
      { n: '◆', h: 'Jamoaning bir qismi', p: 'Har bir bola jamoaga tegishli, hech kim chetda emas' },
      { n: '◉', h: 'Aniq rol', p: 'Har bir bolaning o\'z vazifasi, o\'z o\'rni bor' },
      { n: '★', h: 'Javobgarlik', p: 'Har bir bola o\'z ishi uchun mas\'uliyatli, boshqalar oldida' }
    ], note: 'Bola ustozdan emas, *jamoa bosimidan* ko\'proq ta\'sirlanadi.' },

    { t: 'vs', k: '24 · Makarenko amaliyoti', h: 'Agar bitta bola qoidani buzsa, nima bo\'ladi?', a: { h: 'Ustoz jazolamaydi', tone: 'neutral', items: ['Ustoz to\'g\'ridan-to\'g\'ri bola bilan qarama-qarshi turmaydi', 'U jazo bermaydi, baqirmaydi, kamsitmaydi'] }, b: { h: 'Jamoa reaksiyaga kiradi', tone: 'good', items: ['Sinfdoshlar o\'zlari javob beradi: «Bizning qoidamiz buzildi»', 'Ijtimoiy bosim — eng kuchli o\'zgartiruvchi vosita'] }, note: 'Natija: bola ustozdan emas, *jamoani yo\'qotishdan* qo\'rqadi.' },

    { t: 'big', k: '25 · Makarenkoning mashhur metodi', h: 'Intizom = *Javobgarlik*', s: 'Ustoz bolaga to\'g\'ridan-to\'g\'ri bosim qilmaydi, balki jamoa orqali ta\'sir qiladi. Bola jamoa oldida o\'zining javobgarligini his qiladi: bu ichki intizomdir.' },

    { t: 'steps', k: '26 · Xulosa: uch nazariyotchi — bitta haqiqat', h: 'Inson munosabat ichida shakllanadi', items: [
      { h: 'Makarenko → jamoa bosimi', p: 'Inson jamoada o\'sadi' },
      { h: 'Korczak → individual hurmat', p: 'Bola bugun ham to\'liq inson' },
      { h: 'Vygotsky → ijtimoiy o\'rganish', p: 'O\'rganish — munosabat' }
    ], note: 'Demak, ustoz sifatida: *1) Jamoani quring (faqat dars bermang) · 2) Har bir o\'quvchiga rol bering · 3) Mas\'uliyatni umumiy qiling*' },

    { t: 'end', h: 'Rahmat', s: '7-modul yakunlandi' }
  ]
};

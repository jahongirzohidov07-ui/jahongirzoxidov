'use strict';
/* TTP · 4-modul: Sinf boshqaruvi (Classroom management) — baholash va xato orqali o'rganish */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*4-modul* · Sinf boshqaruvi', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-sinf.jpg', focus: 'center', k: '4-modul · kirish', h: 'Sinf boshqaruvi *nima*?', s: 'Bir daqiqa o\'ylab ko\'ring: sizningcha, sinfni boshqarish nimani anglatadi?' },

    { t: 'big', color: 'red', icon: '📏', k: 'Asosiy g\'oya', h: 'Baholar o\'quvchini emas, *ustozning ishini* o\'lchaydi.', s: 'Agar sinf yomon natija ko\'rsatsa, bu bolalarning emas, metodikaning signali.' },

    { t: 'quote', color: 'green', k: 'Benjamin Bloom · «Mastery Learning»', q: 'Agar sharoit bir xil bo\'lsa, deyarli barcha o\'quvchi o\'rganadi. Farq — vaqt va metodda.', by: 'Benjamin Bloom' },

    { t: 'pyramid', color: 'blue', k: 'Ilmiy model', h: 'Baholashning *3 darajasi*', s: 'Pastdan yuqoriga: avval qayerdan boshlaymiz, keyin qanday o\'rganyapmiz, oxirida qayerga yetdik.', levels: [
      { icon: '🔍', label: 'Diagnostik', h: 'Qayerdan boshlaymiz?', p: 'Boshlang\'ich darajani aniqlash. Ustoz o\'ziga beradigan savol: «Men nimani noto\'g\'ri o\'rgatyapman?»' },
      { icon: '🧭', label: 'Formativ', h: 'Qanday o\'rganyapmiz?', p: 'Jarayon ichidagi baholash (Paul Black & Dylan Wiliam). O\'zlashtirish +30–40% yuqori.' },
      { icon: '🏁', label: 'Summativ', h: 'Qayerga yetdik?', p: 'Imtihon, chorak bahosi, yakuniy test. Tizim uchun kerak, o\'rganish uchun foydasi past.' }
    ] },

    { t: 'vs', color: 'red', icon: '🌡️', k: '1-daraja · chuqurroq', h: '*Summativ* baholash', a: { icon: '📉', h: 'Xususiyatlari', tone: 'bad', items: ['O\'rganishga kam ta\'sir qiladi', 'Faqat natijani ko\'rsatadi, sababni emas', 'Stress va taqqoslashni kuchaytiradi'] }, b: { icon: '🗄️', h: 'Qachon kerak?', tone: 'neutral', items: ['Sertifikatsiya', 'Tizim monitoringi', 'Hujjatlashtirish uchun'] }, all: true, note: '«Summativ baholash termometrga o\'xshaydi: haroratni ko\'rsatadi, lekin kasallikni davolamaydi.» *Summativ = tizim uchun, ustoz uchun emas.*' },

    { t: 'vs', color: 'green', icon: '🧭', k: '2-daraja · chuqurroq', h: '*Formativ* baholash', a: { icon: '🔄', h: 'Jarayon ichida', tone: 'gold', items: ['Savol-javob', 'Mini-test', 'Fikr-mulohaza', 'Xatoni tahlil qilish', 'Qayta urinish'] }, b: { icon: '🧒', h: 'Bola ichida nima o\'zgaradi?', tone: 'good', items: ['«Xato = signal» → o\'rganish manbai', '«Feedback = yordam» → ochiqlik', '«Baholanaman emas, yo\'naltirilaman» → ichki motivatsiya'] }, all: true, note: 'Bu yerda baho — hukm emas, *kompas.*' },

    { t: 'steps', color: 'green', icon: '🛠️', k: 'Formativ · amaliyot', h: 'Eng kuchli *formativ metodlar*', all: true, items: [
      { n: '🎟️', h: 'Exit ticket', p: 'Dars oxirida 3 savol: Bugun nimani tushunding? Nima qiyin bo\'ldi? Qanday savoling bor? 5–8-sinflarda «tosh-qaychi-qog\'oz» bilan: yutgan o\'quvchi javob berib chiqadi.' },
      { n: '🧻', h: 'Mini whiteboard', p: 'Bahosiz, real vaqt diagnostika. Ustoz savol beradi, hamma birga yozadi va ko\'taradi: butun sinf bir lahzada ko\'rinadi. «Kim adashdi?» emas, «Nima tushunilmadi?»' },
      { n: '💬', h: 'Feedback formulasi', p: 'Har bir izoh 3 qismdan: kuchli tomoni, xato joyi, keyingi qadam. Masalan: «Mantiqing to\'g\'ri. Dalil yetarli emas. Keyingi safar tarixiy manba qo\'sh.»', tag: 'Oltin standart' }
    ] },

    { t: 'vs', color: 'blue', icon: '🔍', k: '3-daraja · chuqurroq', h: '*Diagnostik* baholash', a: { icon: '⏰', h: 'Ko\'p ustozlar shunday qiladi', tone: 'bad', items: ['Mavzuni boshlaydi', 'Oxirida test qiladi', '«Tushunishmadi…»'], p: 'Bu kechikkan signal.' }, b: { icon: '🩺', h: 'Diagnostika esa', tone: 'good', items: ['Dars boshida savol beradi: «Ular aslida nimani bilib kelishdi?»', 'Dars o\'quvchining real darajasidan boshlanadi'] }, all: true, note: '*Yaxshi ustoz darsni mavzudan emas, o\'quvchidan boshlaydi.*' },

    { t: 'steps', color: 'blue', icon: '🩺', k: '3-daraja · amaliyot', h: '*Diagnostik* metodlar', all: true, items: [
      { n: '🗺️', h: 'Concept map', p: 'O\'quvchi tushunchalarni chizadi. Ustoz ko\'radi: mantiq bormi, bo\'sh joylar qayerda.' },
      { n: '📝', h: 'Pre-test', p: 'Bahosiz boshlang\'ich test. Natija: kim oldindan biladi, kim nol darajada.' },
      { n: '🗣️', h: 'Og\'zaki diagnostika', p: 'Dars boshida 3 ta savol: Bu nima? Nega shunday? Qayerda ishlatiladi?' }
    ], note: 'Diagnostik baholash ustozni majbur qiladi: *«Men bolani baholayapmanmi, yoki o\'z darsimni tekshiryapmanmi?»*' },

    { t: 'table', color: 'orange', icon: '🧩', k: 'Sintez · falsafiy model', h: 'Uchlikning *falsafiy modeli*', head: ['Tur', 'Savol', 'Kim uchun', 'Natija'], rows: [
      ['Summativ', 'Qayerga yetdik?', 'Tizim', 'Hisobot'],
      ['Formativ', 'Qanday o\'rganayapmiz?', 'O\'quvchi', 'Rivojlanish'],
      ['Diagnostik', 'Qayerdan boshlaymiz?', 'Ustoz', '*Ong*']
    ], note: 'Bahoni ustoz qo\'yadi, lekin aslida *baho ustozni o\'lchaydi.*' },

    { t: 'vs', color: 'red', icon: '🌱', k: 'Psixologiya · Carol Dweck', h: 'Nega baho o\'quvchini *sindiradi*?', a: { icon: '🧊', h: 'Sindiruvchi qarash', tone: 'bad', items: ['Xato = past baho', 'Xato = xavf', 'O\'quvchi xatodan qo\'rqadi, urinishni to\'xtatadi va «sinadi»'] }, b: { icon: '🌱', h: 'Rivojlantiruvchi qarash · Growth Mindset', tone: 'good', items: ['Xato = signal', 'Xato = resurs', 'O\'quvchi xatoni qabul qiladi, izlaydi, urinadi va o\'sadi'] }, all: true, note: 'O\'quvchini baho emas, *xatoga bo\'lgan munosabat* shakllantiradi.' },

    { t: 'stats', color: 'blue', icon: '🔬', k: 'Eng muhim ilmiy xulosa · 1-qism', h: 'John Hattie va *«Visible Learning»*', items: [
      { v: '800+', l: 'ilmiy tadqiqot', s: 'meta-tahlilga jamlangan' },
      { v: '80 mln+', l: 'o\'quvchi', s: 'tadqiqotlar qamrovi' },
      { v: '250+', l: 'ta\'lim omili', s: 'ta\'sir kuchi o\'lchangan' }
    ], note: 'Yangi Zelandiyalik olim ta\'lim tarixidagi eng yirik meta-tahlilni bitta savolga javob topish uchun qildi: *qaysi omil eng kuchli ta\'sir qiladi?*' },

    { t: 'vs', color: 'green', icon: '🏆', k: 'John Hattie · eng kuchli omil', h: 'Qaysi omil *eng kuchli* ta\'sir qiladi?', a: { icon: '🤷', h: 'Ko\'pchilik shunday taxmin qiladi', tone: 'neutral', items: ['Kichik sinf', 'Texnologiya', 'Interaktivlik', 'Zamonaviy darslik', 'Qattiqqo\'l ustoz'] }, b: { icon: '🔁', h: 'Hattie javobi', tone: 'gold', q: 'FEEDBACK — teskari aloqa', p: '«Ustoz o\'rganishni o\'quvchi ko\'zi bilan ko\'rishi, o\'quvchi esa o\'zini o\'z-o\'zini o\'rgatuvchi sifatida ko\'rishi kerak.»' }, all: true },

    { t: 'flow', color: 'green', icon: '🧭', k: 'Visible Learning · kuchli feedback', h: 'Kuchli feedback *3 savolga* javob beradi', items: ['🎯 Qayerga ketyapman?', '📍 Hozir qayerdaman?', '👣 Keyingi qadam nima?'], all: true, note: 'Maqsad → daraja → strategiya. Baholar feedbackning eng zaif shakli: «sen qayerdasan» deydi, lekin *«qayerga borasan»* demaydi.' },

    { t: 'table', color: 'orange', icon: '🔄', k: 'Rollarning almashuvi', h: 'An\'anaviy → *Hattie modeli*', head: ['An\'anaviy', 'Hattie'], rows: [
      ['«Men seni baholayman»', '«Sen o\'zingni baholaysan»'],
      ['«Men aytaman»', '«Sen tushunasan»'],
      ['«Men hukm qilaman»', '«Men yo\'naltiraman»']
    ], note: 'Agar o\'quvchi o\'rganmayotgan bo\'lsa, muammo bolaning miyasida emas, *ustoz yaratgan feedback tizimida.*' },

    { t: 'section', color: 'red', icon: '✕', n: 'Xato', h: 'Xato orqali o\'rganish', s: 'Hukmdan ozod · jazodan ozod · intellektual yordamchi' },

    { t: 'steps', color: 'red', icon: '🚪', k: 'Yangi yondashuv · metodologiya', h: 'Xato orqali baholashdan *chiqish*', all: true, items: [
      { n: '✕', h: 'Hukmdan ozod', p: 'Baho aybdorni qidirmaydi.' },
      { n: '✕', h: 'Jazodan ozod', p: 'Baho qo\'rquv quroli emas.' },
      { n: '✓', h: 'Intellektual yordamchi', p: 'Baho o\'sish quroliga aylanadi.' }
    ], note: 'Buni uchta ilmiy asos tasdiqlaydi: *Bloom · Hattie · Kognitiv psixologiya*' },

    { t: 'grid', color: 'blue', icon: '🔬', k: 'Uch ilmiy asos', h: 'Xato — *tizim signali*', cols: 3, items: [
      { icon: '1', h: 'Bloom · Mastery Learning', p: 'Agar o\'quvchi tushunmagan bo\'lsa — bu qobiliyat masalasi emas, strategiya signali: o\'qitish usulini o\'zgartirish kerak.' },
      { icon: '2', h: 'Hattie · ochiq tahlil', p: 'Xatoni ochiq tahlil qilish oddiy bahodan 2 baravar samaraliroq: ongni uyg\'otadi, mantiqni majbur qiladi, metakognitsiya.' },
      { icon: '3', h: 'Kognitiv psixologiya', p: 'Miya to\'g\'rini tez unutadi, xatoni uzoq eslab qoladi — xato chuqur, emotsional iz qoldiradi.' }
    ], note: 'Shuning uchun *xato — eng kuchli o\'rganish nuqtasi.*' },

    { t: 'grid', color: 'green', icon: '🧪', k: 'Amaliyot · error analysis', h: 'Eng kuchli *5 ta amaliy mashq*', cols: 3, items: [
      { icon: '🏅', h: 'Eng yaxshi xato', p: 'Sinfda «eng qiziqarli xato» tanlanadi. Shart: sababi tushuntirilishi kerak.' },
      { icon: '🏛️', h: 'Xato muzeyi', p: 'Doskada 3 ta tipik xato turadi, yoniga sabab va to\'g\'ri variant.' },
      { icon: '🎭', h: 'O\'qituvchi xatosi', p: 'Ustoz ataylab xato qiladi, sinf topadi. Natija: qo\'rquv yo\'qoladi, tahlil kuchayadi.' },
      { icon: '📓', h: 'Xato kundaligi', p: 'Har o\'quvchi yozadi: qayerda adashdim? Nega? Keyingi safar nima qilaman?' },
      { icon: '👥', h: 'Peer error analysis', p: 'O\'quvchilar bir-birini baholamaydi, xatoni izohlaydi.' }
    ] },

    { t: 'steps', color: 'red', icon: '⚠️', k: 'Diqqat · metodik xatolar', h: 'Eng katta *metodik xatolar*', all: true, items: [
      { n: '!', h: 'Xatoni tez yopish', p: '«Noto\'g\'ri, o\'tir.» → Bu metodni o\'ldiradi.' },
      { n: '!', h: 'Faqat to\'g\'rini ko\'rsatish', p: '«To\'g\'risi mana shunday.» → Sabab yo\'q → ong yo\'q.' },
      { n: '!', h: 'Kulgiga aylantirish', p: '«Qara, buni-ya…» → Psixologik xavfsizlik buziladi.' }
    ], note: 'Xato bilan noto\'g\'ri muomala uni *o\'rganish dushmaniga* aylantiradi.' },

    { t: 'photo', layout: 'full', color: 'green', img: '/assets/t-kitob-bola.jpg', focus: 'center', k: 'Eng chuqur pedagogik haqiqat', h: 'Xato — bilimning dushmani emas. U bilimning *kirish eshigi.*' },

    { t: 'grid', color: 'orange', icon: '🎛️', k: 'Amaliyot · bahoni boshqarish', h: 'Bahoni boshqarish *beshligi*', cols: 3, items: [
      { icon: '🚫', h: 'Bahosiz hafta', p: '1 hafta faqat feedback, raqamsiz. → savol ↑, qo\'rquv ↓, ishtirok ↑' },
      { icon: '🎪', h: 'Xato festivali', p: 'Eng yaxshi xato tanlanadi. Shart: xato tushuntirilishi kerak.' },
      { icon: '🪞', h: 'Ustoz bahosi', p: 'Darsdan keyin ustoz o\'z darsiga baho beradi: o\'ziga refleksiya.' },
      { icon: '📐', h: 'Rubrika asosida', p: 'O\'quvchi oldindan biladi: nimaga qarab baholanadi.' },
      { icon: '🤝', h: 'Peer feedback', p: 'Tengdoshlar 3 savol bilan fikr beradi: Kuchli joyi? Chalkash joyi? Qanday yaxshilash mumkin?' }
    ] },

    { t: 'quote', color: 'blue', k: 'Yakuniy refleksiya', q: 'Agar baho o\'quvchining qayerdaligini ko\'rsatsa-yu, o\'zingiz haqingizda hech narsa aytmasa, u baho emas, shunchaki raqam.' },

    { t: 'flow', color: 'green', icon: '📈', k: 'Baholashning kamoloti', h: '«Baholayman» so\'zining ma\'nosi ustoz o\'sgani sari *chuqurlashadi*', items: ['⚖️ Hukm qilaman', '🧠 Tushunaman', '⚙️ Tizimni o\'zgartiraman', '🌱 O\'zimni rivojlantiraman'], all: true, note: 'Boshlang\'ich qarash → yetuk ustoz. *Ustoz o\'quvchini emas, o\'z metodikasini baholaydi.*' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '4-modul yakunlandi · Keyingi: 5-modul — Ichki ta\'sir psixologiyasi' }
  ]
};

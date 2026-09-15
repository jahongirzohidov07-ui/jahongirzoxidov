'use strict';
/* TTP · 4-modul: Sinf boshqaruvi (Classroom management) — baholash va xato orqali o'rganish */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 4-modul', h: 'Sinf boshqaruvi', s: 'Classroom Management: baholash, feedback va xato orqali o\'rganish', meta: 'Jahongir Zoxidov' },

    { t: 'ask', k: '4-modul · kirish', h: 'Sinf boshqaruvi nima?', s: 'Bir daqiqa o\'ylab ko\'ring: sizningcha, sinfni boshqarish nimani anglatadi?' },

    { t: 'big', k: 'Asosiy g\'oya', h: 'Baholar o\'quvchini emas, *ustozning ishini* o\'lchaydi.', s: 'Agar sinf yomon natija ko\'rsatsa, bu bolalarning emas, metodikaning signali.' },

    { t: 'quote', k: 'Benjamin Bloom · «Mastery Learning»', q: 'Agar sharoit bir xil bo\'lsa, deyarli barcha o\'quvchi o\'rganadi. Farq — vaqt va metodda.', by: 'Benjamin Bloom' },

    { t: 'steps', k: 'Ilmiy model', h: 'Baholashning 3 darajasi', items: [
      { h: 'Summativ baholash', p: 'Imtihon, chorak bahosi, yakuniy test. Tizim uchun kerak, o\'rganish uchun foydasi past.' },
      { h: 'Formativ baholash', p: 'Jarayon ichidagi baholash (Paul Black & Dylan Wiliam). O\'zlashtirish +30–40% yuqori.' },
      { h: 'Diagnostik baholash', p: 'Boshlang\'ich darajani aniqlash. Ustoz o\'ziga beradigan savol: «Men nimani noto\'g\'ri o\'rgatyapman?»' }
    ] },

    { t: 'vs', k: '1-daraja · chuqurroq', h: 'Summativ baholash', a: { h: 'Xususiyatlari', tone: 'bad', items: ['O\'rganishga kam ta\'sir qiladi', 'Faqat natijani ko\'rsatadi, sababni emas', 'Stress va taqqoslashni kuchaytiradi'] }, b: { h: 'Qachon kerak?', tone: 'neutral', items: ['Sertifikatsiya', 'Tizim monitoringi', 'Hujjatlashtirish uchun'] }, note: '«Summativ baholash termometrga o\'xshaydi: haroratni ko\'rsatadi, lekin kasallikni davolamaydi.» *Summativ = tizim uchun, ustoz uchun emas.*' },

    { t: 'vs', k: '2-daraja · chuqurroq', h: 'Formativ baholash', a: { h: 'Jarayon ichida', tone: 'gold', items: ['Savol-javob', 'Mini-test', 'Fikr-mulohaza', 'Xatoni tahlil qilish', 'Qayta urinish'] }, b: { h: 'Bola ichida nima o\'zgaradi?', tone: 'good', items: ['«Xato = signal» → o\'rganish manbai', '«Feedback = yordam» → ochiqlik', '«Baholanaman emas, yo\'naltirilaman» → ichki motivatsiya'] }, note: 'Bu yerda baho — hukm emas, *kompas.*' },

    { t: 'steps', k: 'Formativ · amaliyot', h: 'Eng kuchli formativ metodlar', items: [
      { h: 'Exit ticket', p: 'Dars oxirida 3 savol: Bugun nimani tushunding? Nima qiyin bo\'ldi? Qanday savoling bor? 5–8-sinflarda «tosh-qaychi-qog\'oz» bilan: yutgan o\'quvchi javob berib chiqadi.' },
      { h: 'Mini whiteboard', p: 'Bahosiz, real vaqt diagnostika. Ustoz savol beradi, hamma birga yozadi va ko\'taradi: butun sinf bir lahzada ko\'rinadi. «Kim adashdi?» emas, «Nima tushunilmadi?»' },
      { h: 'Feedback formulasi', p: 'Har bir izoh 3 qismdan: kuchli tomoni, xato joyi, keyingi qadam. Masalan: «Mantiqing to\'g\'ri. Dalil yetarli emas. Keyingi safar tarixiy manba qo\'sh.»', tag: 'Oltin standart' }
    ] },

    { t: 'vs', k: '3-daraja · chuqurroq', h: 'Diagnostik baholash', a: { h: 'Ko\'p ustozlar shunday qiladi', tone: 'bad', items: ['Mavzuni boshlaydi', 'Oxirida test qiladi', '«Tushunishmadi…»'], p: 'Bu kechikkan signal.' }, b: { h: 'Diagnostika esa', tone: 'good', items: ['Dars boshida savol beradi: «Ular aslida nimani bilib kelishdi?»', 'Dars o\'quvchining real darajasidan boshlanadi'] }, note: '*Yaxshi ustoz darsni mavzudan emas, o\'quvchidan boshlaydi.*' },

    { t: 'steps', k: '3-daraja · amaliyot', h: 'Diagnostik metodlar', items: [
      { h: 'Concept map', p: 'O\'quvchi tushunchalarni chizadi. Ustoz ko\'radi: mantiq bormi, bo\'sh joylar qayerda.' },
      { h: 'Pre-test', p: 'Bahosiz boshlang\'ich test. Natija: kim oldindan biladi, kim nol darajada.' },
      { h: 'Og\'zaki diagnostika', p: 'Dars boshida 3 ta savol: Bu nima? Nega shunday? Qayerda ishlatiladi?' }
    ], note: 'Diagnostik baholash ustozni majbur qiladi: *«Men bolani baholayapmanmi, yoki o\'z darsimni tekshiryapmanmi?»*' },

    { t: 'table', k: 'Sintez · falsafiy model', h: 'Uchlikning falsafiy modeli', head: ['Tur', 'Savol', 'Kim uchun', 'Natija'], rows: [
      ['Summativ', 'Qayerga yetdik?', 'Tizim', 'Hisobot'],
      ['Formativ', 'Qanday o\'rganayapmiz?', 'O\'quvchi', 'Rivojlanish'],
      ['Diagnostik', 'Qayerdan boshlaymiz?', 'Ustoz', 'Ong']
    ], note: 'Bahoni ustoz qo\'yadi, lekin aslida *baho ustozni o\'lchaydi.*' },

    { t: 'vs', k: 'Psixologiya · Carol Dweck', h: 'Nega baho o\'quvchini sindiradi?', a: { h: 'Sindiruvchi qarash', tone: 'bad', items: ['Xato = past baho', 'Xato = xavf', 'O\'quvchi xatodan qo\'rqadi, urinishni to\'xtatadi va «sinadi»'] }, b: { h: 'Rivojlantiruvchi qarash · Growth Mindset', tone: 'good', items: ['Xato = signal', 'Xato = resurs', 'O\'quvchi xatoni qabul qiladi, izlaydi, urinadi va o\'sadi'] }, note: 'O\'quvchini baho emas, *xatoga bo\'lgan munosabat* shakllantiradi.' },

    { t: 'stats', k: 'Eng muhim ilmiy xulosa · 1-qism', h: 'John Hattie va «Visible Learning»', items: [
      { v: '800+', l: 'ilmiy tadqiqot', s: 'meta-tahlilga jamlangan' },
      { v: '80 mln+', l: 'o\'quvchi', s: 'tadqiqotlar qamrovi' },
      { v: '250+', l: 'ta\'lim omili', s: 'ta\'sir kuchi o\'lchangan' }
    ], note: 'Yangi Zelandiyalik olim ta\'lim tarixidagi eng yirik meta-tahlilni bitta savolga javob topish uchun qildi: *qaysi omil eng kuchli ta\'sir qiladi?*' },

    { t: 'vs', k: 'John Hattie · eng kuchli omil', h: 'Qaysi omil eng kuchli ta\'sir qiladi?', a: { h: 'Ko\'pchilik shunday taxmin qiladi', tone: 'neutral', items: ['Kichik sinf', 'Texnologiya', 'Interaktivlik', 'Zamonaviy darslik', 'Qattiqqo\'l ustoz'] }, b: { h: 'Hattie javobi', tone: 'gold', q: 'FEEDBACK — teskari aloqa', p: '«Ustoz o\'rganishni o\'quvchi ko\'zi bilan ko\'rishi, o\'quvchi esa o\'zini o\'z-o\'zini o\'rgatuvchi sifatida ko\'rishi kerak.»' } },

    { t: 'steps', k: 'Visible Learning · kuchli feedback', h: 'Kuchli feedback 3 savolga javob beradi', items: [
      { h: 'Qayerga ketyapman?', p: 'Maqsad: aniq o\'quv natijasi' },
      { h: 'Hozir qayerdaman?', p: 'Daraja: hozirgi bilim holati' },
      { h: 'Keyingi qadam nima?', p: 'Strategiya: keyingi aniq qadam' }
    ], note: 'Baholar feedbackning eng zaif shakli: «sen qayerdasan» deydi, lekin *«qayerga borasan»* demaydi.' },

    { t: 'table', k: 'Rollarning almashuvi', h: 'An\'anaviy → Hattie modeli', head: ['An\'anaviy', 'Hattie'], rows: [
      ['«Men seni baholayman»', '«Sen o\'zingni baholaysan»'],
      ['«Men aytaman»', '«Sen tushunasan»'],
      ['«Men hukm qilaman»', '«Men yo\'naltiraman»']
    ], note: 'Agar o\'quvchi o\'rganmayotgan bo\'lsa, muammo bolaning miyasida emas, *ustoz yaratgan feedback tizimida.*' },

    { t: 'steps', k: 'Yangi yondashuv · metodologiya', h: 'Xato orqali baholashdan chiqish', items: [
      { n: '✕', h: 'Hukmdan ozod', p: 'Baho aybdorni qidirmaydi.' },
      { n: '✕', h: 'Jazodan ozod', p: 'Baho qo\'rquv quroli emas.' },
      { n: '✓', h: 'Intellektual yordamchi', p: 'Baho o\'sish quroliga aylanadi.' }
    ], note: 'Buni uchta ilmiy asos tasdiqlaydi: *Bloom · Hattie · Kognitiv psixologiya*' },

    { t: 'vs', k: 'Ilmiy asos 1 · Bloom', h: 'Mastery Learning modeli', a: { h: 'Agar o\'quvchi tushunmagan bo\'lsa…', tone: 'bad', items: ['Qobiliyat masalasi emas', 'Muammo o\'quvchining iste\'dodida emas'] }, b: { h: 'Bu strategiya signali', tone: 'good', items: ['O\'qitish usulini o\'zgartirish kerakligini bildiradi'] }, note: 'Bloomning xulosasi: *xato — tizimdagi nosozlik ko\'rsatkichi, o\'quvchining aybi emas.*' },

    { t: 'steps', k: 'Ilmiy asos 2 · Hattie', h: 'Xatoni ochiq tahlil qilish oddiy bahodan *2 baravar* samaraliroq', items: [
      { h: 'Ongni uyg\'otadi', p: 'Passiv eslab qolish o\'rniga faol fikrlash.' },
      { h: 'Mantiqni majbur qiladi', p: '«Nega xato bo\'ldi?» — sabab-natija tahlili.' },
      { h: 'Metakognitsiya', p: 'O\'quvchi o\'z fikrlashini kuzatadi.' }
    ] },

    { t: 'vs', k: 'Ilmiy asos 3 · kognitiv psixologiya', h: 'Miya xato va to\'g\'rini qanday saqlaydi', a: { h: 'To\'g\'rini tez unutadi', tone: 'neutral', items: ['Muvaffaqiyat miyada kuchsiz iz qoldiradi'] }, b: { h: 'Xatoni uzoq eslab qoladi', tone: 'gold', items: ['Xato chuqur, emotsional iz qoldiradi'] }, note: 'Shuning uchun *xato — eng kuchli o\'rganish nuqtasi.*' },

    { t: 'steps', k: 'Amaliyot · error analysis', h: 'Eng kuchli 5 ta amaliy mashq', items: [
      { h: 'Eng yaxshi xato', p: 'Sinfda «eng qiziqarli xato» tanlanadi. Shart: sababi tushuntirilishi kerak.' },
      { h: 'Xato muzeyi', p: 'Doskada 3 ta tipik xato turadi, yoniga sabab va to\'g\'ri variant.' },
      { h: 'O\'qituvchi xatosi', p: 'Ustoz ataylab xato qiladi, sinf topadi. Natija: qo\'rquv yo\'qoladi, tahlil kuchayadi.' },
      { h: 'Xato kundaligi', p: 'Har o\'quvchi yozadi: qayerda adashdim? Nega? Keyingi safar nima qilaman?' },
      { h: 'Peer error analysis', p: 'O\'quvchilar bir-birini baholamaydi, xatoni izohlaydi.' }
    ] },

    { t: 'steps', k: 'Diqqat · metodik xatolar', h: 'Eng katta metodik xatolar', items: [
      { n: '!', h: 'Xatoni tez yopish', p: '«Noto\'g\'ri, o\'tir.» → Bu metodni o\'ldiradi.' },
      { n: '!', h: 'Faqat to\'g\'rini ko\'rsatish', p: '«To\'g\'risi mana shunday.» → Sabab yo\'q → ong yo\'q.' },
      { n: '!', h: 'Kulgiga aylantirish', p: '«Qara, buni-ya…» → Psixologik xavfsizlik buziladi.' }
    ], note: 'Xato bilan noto\'g\'ri muomala uni *o\'rganish dushmaniga* aylantiradi.' },

    { t: 'big', k: 'Eng chuqur pedagogik haqiqat', h: 'Xato — bilimning dushmani emas. U bilimning *kirish eshigi.*' },

    { t: 'steps', k: 'Amaliyot · bahoni boshqarish', h: 'Bahoni boshqarish beshligi', items: [
      { h: 'Bahosiz hafta', p: '1 hafta faqat feedback, raqamsiz. → savol ↑, qo\'rquv ↓, ishtirok ↑' },
      { h: 'Xato festivali', p: 'Eng yaxshi xato tanlanadi. Shart: xato tushuntirilishi kerak.' },
      { h: 'Ustoz bahosi', p: 'Darsdan keyin ustoz o\'z darsiga baho beradi: o\'ziga refleksiya.' },
      { h: 'Rubrika asosida', p: 'O\'quvchi oldindan biladi: nimaga qarab baholanadi.' },
      { h: 'Peer feedback', p: 'Tengdoshlar 3 savol bilan fikr beradi: Kuchli joyi? Chalkash joyi? Qanday yaxshilash mumkin?' }
    ] },

    { t: 'quote', k: 'Yakuniy refleksiya', q: 'Agar baho o\'quvchining qayerdaligini ko\'rsatsa-yu, o\'zingiz haqingizda hech narsa aytmasa, u baho emas, shunchaki raqam.' },

    { t: 'flow', k: 'Baholashning kamoloti', h: '«Baholayman» so\'zining ma\'nosi ustoz o\'sgani sari chuqurlashadi', items: ['Hukm qilaman', 'Tushunaman', 'Tizimni o\'zgartiraman', 'O\'zimni rivojlantiraman'], note: 'Boshlang\'ich qarash → yetuk ustoz. *Ustoz o\'quvchini emas, o\'z metodikasini baholaydi.*' },

    { t: 'end', h: 'Rahmat', s: '4-modul yakunlandi' }
  ]
};

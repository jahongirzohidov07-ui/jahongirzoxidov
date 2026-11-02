'use strict';
/* Mentorlik (Shogirdlik) dasturi · 9-dars: Vaqt
   Manba: Notion "9-Dars - Vaqt" (muallif qaydlari — o'zgartirilmagan)
   + Jahongir Zoxidov insholari: «28 yoshimda anglaganlarim», «Endi siz atrofingizdagi besh odamning o'rtachasi emassiz»,
   «Insholar va fikriy sharhlar to'plami» (1-bob: aqliy hassa; 5-bob: uyqu va dofamin intizomi).
   Savol pardalari skript faylida: api/_scripts/mentorlik-09.js (S.q). */
module.exports = {
  slides: [
    /* 1 */ {"t":"cover","variant":"a","photo":"/assets/jahongir-2.jpg","badge":"Xush kelibsiz!","h":"Mentorship program","s":"Shogirdlik dasturi","lesson":"*9-dars* · Vaqt","name":"Jahongir Zoxidov","role":"Mentor"},

    /* 2 */ {"t":"ask","icon":"⏰","k":"Boshlanish uchun savol","h":"Kechagi *24 soatingiz* qayerga ketdi?","s":"Uyqu, ish, yo'l, ovqat, telefon... Taxminan bo'lsa ham, soatlab yozing."},

    /* 3 */ {"t":"photo","layout":"full","color":"orange","img":"/assets/d9-qumsoat.jpg","focus":"center","k":"Dars mavzusi","h":"Vaqt — *eng qimmat* valyuta","s":"Pul qaytadi — vaqt qaytmaydi."},

    /* 4 */ {"t":"stats","color":"red","icon":"⏳","k":"«28 yoshimda anglaganlarim» inshosidan","h":"Umrni *foizlarda* o'lchang","items":[{"v":"71","l":"Yil","s":"erkaklarning o'rtacha umri"},{"v":"28","l":"Yosh","s":"insho yozilgan payt"},{"v":"40%","l":"Umr","s":"allaqachon yashab bo'lingan"}],"note":"Yoshingizni yillarda emas, *foizlarda* o'lchasangiz — har bir kun qimmatlashadi."},

    /* 5 */ {"t":"big","color":"blue","icon":"🧭","k":"Stiven Kovi","h":"Vaqtni emas — *o'zingizni* boshqaring","s":"Time management yo'q. Self management bor. Vaqt hamma uchun bir xil — farq uni kim qanday ishlatishida."},

    /* 6 */ {"t":"section","color":"blue","icon":"📜","n":"1","h":"Vaqt qonunlari","s":"Vaqt qanday ishlaydi va qayerga ketadi"},

    /* 7 */ {"t":"grid","color":"green","icon":"📜","k":"Uchta qonun","h":"Vaqt *qonunlari*","cols":3,"items":[{"icon":"🎈","h":"Parkinson qonuni","p":"Ish unga ajratilgan vaqtni to'ldiradi. 1 haftalik ish 1 kunga qo'yilsa — 1 kunda bitadi."},{"icon":"🍰","h":"Pareto 80/20","p":"Natijaning 80% — ishlarning 20% dan keladi. O'sha 20% ni toping."},{"icon":"🪤","h":"Merfi qonuni","p":"Buzilishi mumkin narsa — buziladi. Har rejaga zaxira vaqt qo'ying."}]},

    /* 8 */ {"t":"grid","color":"orange","icon":"💬","k":"Vaqt haqida","h":"To'rt *haqiqat*","cols":2,"items":[{"icon":"💎","h":"Eng qimmat valyuta — vaqt","p":"Pulni qaytarib topish mumkin. Vaqtni — yo'q."},{"icon":"🚫","h":"Hech narsa qilmaslik — eng qimmat tanlov","p":"Bo'sh o'tgan kun — sarflangan pul emas, sarflangan umr."},{"icon":"📈","h":"Vaqt ko'payadi (time compounds)","p":"Bugun o'rgangan narsa ertaga vaqt yaratadi. O'qish — vaqt yaratadi."},{"icon":"👑","h":"Vaqtni boshqargan — taqdirini boshqaradi","p":"Kunini boshqarolmagan odam — hayotini boshqarolmaydi."}]},

    /* 9 */ {"t":"steps","color":"blue","icon":"🔎","k":"Ongli vaqt","h":"Vaqt *qayerga* ketyapti?","all":true,"items":[{"n":"👁️","h":"Temporal awareness","p":"Bir hafta har soatingizni yozing. Ko'pchilik qayerga ketganini bilmaydi."},{"n":"🔙","h":"Retrospective time management","p":"O'tgan haftani tahlil qiling: nima foyda berdi, nima bekor ketdi? Keyingi haftani shunga qarab tuzing."},{"n":"📚","h":"Reading creates time","p":"Kitob — boshqa odamning 10 yillik tajribasi 10 soatda. O'qish vaqt oladi emas — vaqt beradi."}]},

    /* 10 */ {"t":"grid","color":"red","icon":"🎯","k":"Prinsiplar","h":"Vaqtni *tejaydigan* 6 qoida","cols":3,"items":[{"icon":"🪞","h":"Ibratni to'g'ri tanlang","p":"Taqlid tabiiy — lekin kimga taqlid qilayotganingizni tanlang."},{"icon":"🎓","h":"6–9 oyda kasb","p":"Fokus bilan 6–9 oyda yangi kasb o'rganish mumkin. Yillar kerak emas — fokus kerak."},{"icon":"🛋️","h":"Don't get busy if nothing to do","p":"Ish yo'q bo'lsa — band bo'lib ko'rinmang. Bandlik — natija emas."},{"icon":"🧑‍🎨","h":"Do only what you can do","p":"Faqat siz qila oladigan ishni qiling. Qolganini — topshiring, avtomatlashtiring, tashlang."},{"icon":"⚡","h":"Don't keep decisions","p":"Qarorni saqlamang — qiling, keyin tuzating (iterate). Kutgan qaror — vaqt yeydi."},{"icon":"🦬","h":"Don't shun the yak","p":"Fikr → tasavvurdagi natija → birinchi qadam. Qo'rqinchli katta ishdan qochmang — birinchi qadamni qo'ying."}]},

    /* 11 */ {"t":"section","color":"red","icon":"🕳️","n":"2","h":"Vaqt o'g'rilari","s":"Ekran, algoritm va arzon dofamin"},

    /* 12 */ {"t":"big","color":"orange","icon":"📱","k":"Hozir sinab ko'ramiz","h":"Telefoningizdagi *screen time*ga qarang","s":"Kunlik o'rtacha qancha? Eng ko'p vaqtni qaysi uchta ilova oldi? Raqamni daftarga yozing."},

    /* 13 */ {"t":"big","color":"red","icon":"🎣","k":"«Endi siz atrofingizdagi besh odamning o'rtachasi emassiz» inshosidan","h":"Algoritm sizni *ekranda ushlab turish* uchun ishlaydi","s":"Qaysi videoda barmog'ingiz to'xtasa, ertaga shundan ko'proq ko'rsatadi. U sizning eng kuchli tomoningizni emas, *eng zaif* tomoningizni o'rganadi."},

    /* 14 */ {"t":"stop","color":"red","icon":"✋","h":"Bepul bo'lsa — *mahsulot sizsiz*","s":"Siz ko'rgan har daqiqa — ularning daromadi. Soxta hayotni *o'z vaqtimiz* bilan moliyalashtiryapmiz."},

    /* 15 */ {"t":"vs","color":"orange","icon":"🍯","k":"Uyqu va dofamin intizomi · insholar to'plamidan","h":"Arzon dofamin *vs* qimmat dofamin","a":{"icon":"🎰","h":"Arzon dofamin","tone":"bad","q":"Rils, arzon o'yinlar, ko'z zinosi","items":["Kam mehnat — tez rohat","Miya energetikasini so'ndiradi","Keyin oddiy ish bemaza tuyuladi"]},"b":{"icon":"⛰️","h":"Qimmat dofamin","tone":"good","q":"Qiyinchilik va mehnatdan keyin","items":["Ish bitgandan keyingi quvonch","Haqiqiy mamnuniyat beradi","Insonga kuch qo'shadi"]},"note":"Bir qoshiq asaldan keyin shirin choy ham *bemaza* tuyuladi. Me'yor buzilsa, oddiy mehnatning ta'mi tatimay qoladi."},

    /* 16 */ {"t":"vs","color":"blue","icon":"🎮","k":"«28 yoshimda anglaganlarim» inshosidan","h":"Boshqalar nima qilyapti — *siz nima qilasiz*?","a":{"icon":"👥","h":"Boshqalar","tone":"bad","items":["Kuniga 5–6 soat PUBG","4–5 soat Instagram","Telegramda keraksiz chatlar","Ko'chada ma'nosiz «risovka»"]},"b":{"icon":"🧭","h":"Siz","tone":"good","items":["Zerikishni o'rganing","O'yinlarni yo'q qiling","Instagramni o'chiring","Telegramga limit qo'ying"]},"note":"Boshqalar orzu qilayotgan narsaga erishish uchun *boshqalar qilmaydigan* narsani qiling."},

    /* 17 */ {"t":"big","color":"green","icon":"🥱","k":"«28 yoshimda anglaganlarim» inshosidan","h":"Zerikishni *o'rganing*","s":"Hamma zerikishdan qochyapti: bo'sh qolgan har daqiqani telefon bilan to'ldiramiz. Hayotni o'zgartirmoqchi bo'lsangiz, avval o'ylash tarzini o'zgartirish kerak."},

    /* 18 */ {"t":"quote","color":"green","k":"«Endi siz atrofingizdagi besh odamning o'rtachasi emassiz» inshosidan","q":"Pichoq bilan non ham kesiladi, qo'l ham. Farqni pichoq emas, uni ushlagan qo'l hal qiladi.","by":"Jahongir Zoxidov"},

    /* 19 */ {"t":"section","color":"green","icon":"🧰","n":"Tools","h":"Vositalar","s":"Jahongirning shaxsiy vaqt tizimi"},

    /* 20 */ {"t":"photo","layout":"split","color":"green","img":"/assets/d9-telefonlar.jpg","focus":"center","k":"1 · Two phones","h":"*Ikkita* telefon","items":["Asosiy telefon — bekorchiliksiz: ijtimoiy tarmoq yo'q, o'yin yo'q, faqat ish.","Ikkinchi telefon — qolgan hamma narsa. Uni uyda qoldirish mumkin.","Diqqatni o'g'irlaydigan narsa — qo'lda bo'lmasin."],"all":true},

    /* 21 */ {"t":"bars","color":"blue","icon":"💬","k":"2 · Bulk communication","h":"Xabarlarga *bir vaqtda* javob bering","rows":[{"h":"Kun bo'yi","p":"Har xabarga darrov javob","w":"100%","v":"Diqqat 8 soat buzilgan","color":"red"},{"h":"Bir vaqtda","p":"Telegram — kuniga 1 soat","w":"13%","v":"1 soat","color":"green"}],"big":"1","bigText":"soat — Telegram, xat, xabarlar uchun. Qolgan vaqt — *chuqur ish.* Har 5 daqiqada uzilgan diqqat — hech qachon chuqur bo'lmaydi."},

    /* 22 */ {"t":"photo","layout":"split","color":"orange","img":"/assets/d9-tong.jpg","focus":"center","k":"3 · Mornings","h":"Tongdagi 1 soat = kunduzgi *3 soat*","items":["Eng muhim ish — soat 8 gacha. Hech kim xalaqit bermaydi.","Tongda miya toza: qaror, yozish, o'rganish shu paytga.","Kunni telefon bilan emas — o'z ishingiz bilan boshlang."],"all":true},

    /* 23 */ {"t":"big","color":"blue","icon":"🌙","k":"Uyqu va dofamin intizomi · insholar to'plamidan","h":"Tong *kechqurun* boshlanadi","s":"Vaqtli uxlash va och holatda uxlash tanani kechasi qayta tiklaydi, gormonal balansni ta'minlaydi. Yarim tungacha lentada o'tirgan odamda tongdagi oltin soat bo'lmaydi."},

    /* 24 */ {"t":"bars","color":"red","icon":"🤖","k":"4 · Automating decisions","h":"Har qarorning *umri* bor","rows":[{"h":"Ovqat","p":"Umri — 1 soat","w":"16%","v":"1 soat","color":"green"},{"h":"Kiyim","p":"Umri — 1 kun","w":"35%","v":"1 kun","color":"orange"},{"h":"Katta xarid","p":"Umri — 1 yil","w":"100%","v":"1 yil","color":"red"}],"note":"Umri qisqa qarorlarni *avtomatlashtiring* (bir xil nonushta, bir xil kiyim). Fugland qonuni: *majbur bo'lmasangiz — qaror qilmang.* Kitob: «How We Decide»."},

    /* 25 */ {"t":"flow","color":"green","icon":"📞","k":"5 · Going to FP","h":"Uchrashuv → qo'ng'iroq → *xabar*","items":["🤝 Uchrashuv 60 min","📞 Qo'ng'iroq 10 min","💬 Xabar 1 min"],"all":true,"note":"1 soatlik uchrashuvda hal bo'ladigan narsa — 10 daqiqalik qo'ng'iroqda hal bo'ladi. Har safar *eng arzon formatni* tanlang."},

    /* 26 */ {"t":"vs","color":"green","icon":"🤖","k":"Aqliy hassa · vaqtni tejash","h":"SIga *topshiring* vs *o'zingiz* qiling","a":{"icon":"📋","h":"SIga topshiring","tone":"good","items":["Ma'lumot qidirish va jamlash","Matnni tekshirish, tarjima","Takroriy jadval va hisob-kitob"]},"b":{"icon":"🧠","h":"O'zingiz qiling","tone":"gold","items":["G'oya va qaror","Fikrlash va xulosa","Odamlar bilan munosabat"]},"note":"SI vaqtni tejashi kerak, *fikrlashni emas.* Aqliy qiynalish kamaysa — noto'g'ri ishlatyapsiz."},

    /* 27 */ {"t":"grid","color":"blue","icon":"📈","k":"6 · Doing things that compound","h":"Vaqtni *ko'payadigan* narsaga sarflang","cols":3,"items":[{"icon":"📚","h":"Ilm","p":"Bugun o'rgangan — umr bo'yi ishlaydi."},{"icon":"🏃","h":"Sport","p":"Sog'liq — hamma narsaning poydevori."},{"icon":"🏢","h":"Kompaniya","p":"Tizim quring — sizsiz ishlasin."},{"icon":"🤝","h":"Munosabatlar","p":"Ishonch yillar davomida yig'iladi."},{"icon":"✍️","h":"Blog","p":"Bir marta yozasiz — yillar o'qiladi."},{"icon":"🪞","h":"Self-analysis","p":"O'zini tahlil qilgan — har yili yaxshiroq."}],"note":"Ko'payadigan narsa — bugun kichik, 10 yildan keyin *ulkan.* Ko'paymaydigan narsa — bugun ham, ertaga ham bir xil."},

    /* 28 */ {"t":"stats","color":"green","icon":"📚","k":"Kichik, lekin har kuni","h":"Kuniga *30 daqiqa* nima beradi?","items":[{"v":"30","l":"Daqiqa","s":"kuniga ko'payadigan ishga"},{"v":"180+","l":"Soat","s":"bir yilda"},{"v":"20+","l":"Kitob","s":"shu vaqtga sig'adi"}],"note":"Bu lentadagi 3 soatning atigi *oltidan biri.* Vaqt ko'payadi — faqat har kuni bo'lsa."},

    /* 29 */ {"t":"vs","color":"orange","icon":"📈","k":"«28 yoshimda anglaganlarim» inshosidan","h":"Tajriba *vs* ilm: qaysi biri ko'payadi?","a":{"icon":"🚗","h":"Haydovchilik","tone":"neutral","items":["1 yillik va 5 yillik haydovchi farqi — katta emas","Hatto 1 yillik va 20 yillik orasida ham","Ko'nikma bir darajada to'xtaydi"]},"b":{"icon":"📚","h":"Ilm","tone":"good","items":["Har yangi bilim eskisiga ulanadi","Ko'p o'qigan va kam o'qigan farqi katta seziladi","Farq yillar o'tib *kattalashadi*"]},"note":"*Assimetrik harakatlar assimetrik natijalarni beradi.*"},

    /* 30 */ {"t":"photo","layout":"split","color":"orange","img":"/assets/d9-checklist.jpg","focus":"center","k":"7 · Checklists","h":"Miyaga *ishonmang* — checklistga ishoning","items":["Uchuvchi 10 000 soat uchgan bo'lsa ham — checklistsiz uchmaydi.","Takrorlanadigan har ish uchun — bitta ro'yxat.","Kitob: Atul Gavande — «The Checklist Manifesto»."],"all":true},

    /* 31 */ {"t":"grid","color":"orange","icon":"✅","k":"Mening checklistlarim","h":"9 ta *checklist*","cols":3,"items":[{"icon":"⚙️","h":"Operatsion","p":"Har kunlik ishlar."},{"icon":"🌙","h":"Uyqudan oldin","p":"Ertangi kun tayyor."},{"icon":"👥","h":"HR","p":"Xodim bilan har suhbat."},{"icon":"🧘","h":"Bo'sh vaqt","p":"Bo'sh qolsam nima qilaman?"},{"icon":"🎯","h":"Muhim qaror","p":"Tendensiyalar tekshiruvi."},{"icon":"🏫","h":"Maktab","p":"Maktabga tashrif."},{"icon":"🧑‍💼","h":"Hiring","p":"Yollashda savollar."},{"icon":"💵","h":"$1000+ xarajat","p":"Katta xarid oldidan."},{"icon":"🏡","h":"Dacha","p":"Dam olishga borishdan oldin."}]},

    /* 32 */ {"t":"grid","color":"red","icon":"❓","k":"To'rt savol","h":"Har ish oldidan *so'rang*","cols":4,"items":[{"icon":"1","h":"Is this necessary?","p":"Bu umuman keraklimi?"},{"icon":"2","h":"Worth the money?","p":"Pulga arziydimi?"},{"icon":"3","h":"Most important now?","p":"Hozir eng muhimi shumi?"},{"icon":"4","h":"True nature of things","p":"Narsalarning asl mohiyatini ko'ring."}]},

    /* 33 */ {"t":"section","color":"red","icon":"⚠️","n":"","h":"Vaqtdagi xatolar","s":"Va ularning o'rniga oltin qoidalar"},

    /* 34 */ {"t":"table","color":"red","icon":"📋","k":"Bir qarashda","h":"Vaqtdagi *5 ta katta xato*","head":["Yo'nalish","Katta xato","Oltin qoida","Natija"],"rows":[["Ekran","Vaqtni algoritmga tekin berish","Screen time limiti va ikkinchi telefon","Kitob va ish uchun vaqt topiladi"],["Dofamin","Rils va arzon o'yinlar","Qiyin ishdan keyingi rohat","Energiya va diqqat qaytadi"],["Tong","Kunni telefon bilan boshlash","Eng muhim ish — soat 8 gacha","Tongdagi 1 soat = kunduzgi 3 soat"],["Xabarlar","Har xabarga darrov javob berish","Kuniga 1 soat — bulk communication","Chuqur ish uchun vaqt"],["Uzoq muddat","Ko'paymaydigan ishga vaqt berish","Ilm, sport, blog — ko'payadigan ishlar","Kichik farq yillar o'tib ulkan"]]},

    /* 35 */ {"t":"checklist","color":"green","icon":"✅","k":"Kunlik vaqt checklisti","h":"Bugun vaqtim *qayerga* ketdi?","items":[{"n":"1","h":"Kunni telefon emas, *muhim ish* bilan boshladim"},{"n":"2","h":"Xabarlarga *bir vaqtda* javob berdim"},{"n":"3","h":"Kamida *30 daqiqa* ko'payadigan ishga berdim"},{"n":"4","h":"Screen time *limitdan* oshmadi"},{"n":"5","h":"Umri qisqa qarorlarga vaqt sarflamadim"},{"n":"6","h":"Uchrashuv o'rniga qo'ng'iroq yoki xabarni tanladim"},{"n":"7","h":"*Vaqtida* uxlashga yotdim"},{"n":"8","h":"Bugun meni qaysi *vaqt o'g'risi* aldadi?","star":true}]},

    /* 36 */ {"t":"steps","color":"green","icon":"📝","k":"Uyga vazifa","h":"Bir hafta *o'lchang*","all":true,"items":[{"n":"1","h":"Vaqt hisoboti","p":"7 kun davomida har soatingizni yozing. Yakshanba — tahlil: 20% qayerda?"},{"n":"2","h":"Bulk communication","p":"Xabarlarga kuniga faqat 1 marta, belgilangan soatda javob bering."},{"n":"3","h":"Bitta checklist","p":"Eng ko'p takrorlanadigan ishingiz uchun checklist tuzing va sinang."},{"n":"4","h":"Screen time auditi","p":"Telefoningizdagi *screen time*ni yozing. Eng ko'p vaqt olgan 3 ta ilovadan bittasini o'chiring yoki unga limit qo'ying."},{"n":"5","h":"Umr hisobi","p":"Yoshingizni o'rtacha umrga nisbatan foizda hisoblang. Qolgan umringiz uchun *3 ta asosiy maqsad* yozing va har biriga haftada necha soat berishingizni belgilang."}]},

    /* 37 */ {"t":"end","icon":"🙌","h":"Rahmat","s":"9-dars yakunlandi · Keyingi dars: 10-dars — Blog"}
  ]
};

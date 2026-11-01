'use strict';
/* Mentorlik (Shogirdlik) dasturi · 7-dars: Ilm
   Manba: Notion «7-Dars - Ilm» (muallif qaydlari — o'zgartirilmagan) + Jahongir Zoxidov insholari:
   «Nega hech narsaga qiziqmayman?», «Shakl va mohiyat», «Endi siz atrofingizdagi besh odamning o'rtachasi emassiz»,
   «Insholar va fikriy sharhlar to'plami» (4-bob: raqamli muhit, ta'lim va ustozlik; eskirmas bilim).
   Savol pardalari skript faylida: api/_scripts/mentorlik-07.js (S.q). */
module.exports = {
  slides: [
    /* 1 */ {"t":"cover","variant":"a","photo":"/assets/jahongir-2.jpg","badge":"Xush kelibsiz!","h":"Mentorship program","s":"Shogirdlik dasturi","lesson":"*7-dars* · Ilm","name":"Jahongir Zoxidov","role":"Mentor"},

    /* 2 */ {"t":"ask","icon":"📚","k":"Boshlanish uchun savol","h":"Oxirgi bir oyda nimani o'rgandingiz — va uni *boshqaga o'rgata olasizmi*?","s":"Faqat eshitganingiz emas — tushunib, qo'llay oladiganingiz."},

    /* 3 */ {"t":"photo","layout":"full","color":"blue","img":"/assets/d7-kutubxona.jpg","focus":"center","k":"Dars mavzusi","h":"Ilm — *eng katta* richak","s":"Ma'lumotdan ilmgacha: qanday o'rganish, kimdan o'rganish, nimani o'rganish."},

    /* 4 */ {"t":"big","color":"orange","icon":"🔥","k":"«Nega hech narsaga qiziqmayman?» inshosidan","h":"Qiziqish *bilimdan* tug'iladi","s":"Odatda «avval qiziqish, keyin o'qish» deb o'ylaymiz. Aslida ko'pincha teskarisi: avval ozgina bilim, keyin qiziqish."},

    /* 5 */ {"t":"section","color":"blue","icon":"🎓","n":"1","h":"Ma'lumotdan ilmgacha","s":"Bilish, tushunish, qila olish"},

    /* 6 */ {"t":"pyramid","color":"blue","k":"Ma'lumot → Bilim → Ko'nikma → Ilm","h":"Ilmning *4 bosqichi*","s":"Misol: ingliz tilidagi zamonlar.","levels":[{"icon":"📄","label":"Ma'lumot","h":"Information","p":"Eshitdingiz, o'qidingiz: «Present Perfect degan zamon bor»."},{"icon":"💡","label":"Bilim","h":"Knowledge","p":"Tushundingiz: «Present Perfect qachon va nima uchun ishlatiladi — bilaman»."},{"icon":"🛠️","label":"Ko'nikma","h":"Skill","p":"Mashq qildingiz: gapirganda avtomatik to'g'ri ishlataman."},{"icon":"🎓","label":"Ilm","h":"Wisdom","p":"Chuqurlashdingiz: boshqaga o'rgata olasiz, yangi holatda qo'llaysiz."}],"note":"Ma'lumot *tushunilsa* — bilim, *mashq qilinsa* — ko'nikma, *chuqurlashsa* — ilm bo'ladi."},

    /* 7 */ {"t":"flow","color":"green","icon":"🔁","k":"Learning framework","h":"O'rganish *tizimi*","items":["📄 Ma'lumot ol","💡 Tushun","🛠️ Mashq qil","🎓 Chuqurlash","📤 O'rgat"],"all":true,"note":"Oxirgi qadam eng muhimi: *o'rgatgan* odam ilmni o'ziniki qiladi."},

    /* 8 */ {"t":"vs","color":"orange","icon":"🥜","k":"«Shakl va mohiyat» inshosidan","h":"Shakl *vs* mohiyat","all":true,"a":{"icon":"📜","h":"Shakl — qobiq","tone":"bad","items":["Sertifikat: IELTS, CEFR, TOEFL","Diplom va unvon","Sanalarni yodlash","Bahoni quvish"]},"b":{"icon":"🌰","h":"Mohiyat — mag'iz","tone":"good","items":["Tilni chindan bilish","Haqiqiy mutaxassislik","Voqeadan saboq chiqarish","Bilimni qo'llay olish"]},"note":"Tilni chuqur bilgan odam *qaysi imtihonga kirmasin*, baland ball oladi. Faqat formatni yodlagan odam format o'zgarsa qiynaladi."},

    /* 9 */ {"t":"quote","color":"orange","k":"Shakl va mohiyat","q":"Yong'oqni sindirib ko'ring. Qimmatli narsa hech qachon tashqarida yotmaydi.","by":"Jahongir Zoxidov insholaridan"},

    /* 10 */ {"t":"section","color":"orange","icon":"🔍","n":"2","h":"Qiziqish qayerdan keladi?","s":"Bilim, savol va qiziqish halqasi"},

    /* 11 */ {"t":"photo","layout":"split","color":"orange","img":"/assets/insho/8-jumboq.svg","fit":"contain","bg":"#F5F1E6","k":"Axborot bo'shlig'i · Jorj Louenstayn","h":"Yig'ilmagan jumboqda bo'shliq *ko'rinmaydi*","items":["Qiziqish — bilgan va bilmoqchi bo'lgan narsa orasidagi bo'shliqni sezish.","Hech narsa bilmagan odam bu bo'shliqni ko'rmaydi.","Futbolni bilmagan odamga 90 daqiqa — zerikarli. Bilgan odamga har harakat — savol."],"all":true},

    /* 12 */ {"t":"photo","layout":"split","color":"blue","img":"/assets/insho/8-tarmoq.svg","fit":"contain","bg":"#F5F1E6","k":"Donald Xebb · Rext va Lesli","h":"Bilim neyronlar kabi *ulanadi*","items":["Birga faollashadigan neyronlar o'zaro bog'lanadi: bilim ip emas, to'r kabi o'sadi.","Ikki bilgan narsangiz ulangan joyda yangi savol tug'iladi.","Beysbol tajribasi (1988): oldingi bilim o'qish mahoratidan ham ko'proq yordam beradi."],"all":true},

    /* 13 */ {"t":"photo","layout":"split","color":"green","img":"/assets/insho/8-doira.svg","fit":"contain","bg":"#F5F1E6","k":"Jon Uiler · Sokrat","h":"Bilim — orol, bilmaganlar — *sohil*","items":["«Bilim orolimiz kattalashgan sari bilmasligimiz sohili ham uzayadi.»","Ko'p bilgan sari savol ko'payadi: olimlar «men hech narsani bilmas ekanman» deydi.","Hech narsa bilmagan odam o'zini hammasini biladigandek his qiladi — chunki savoli yo'q."],"all":true},

    /* 14 */ {"t":"big","color":"blue","icon":"📈","k":"Matto effekti · Keyt Stanovich","h":"O'qigan *yanada* o'qiydi","s":"Erta o'qishni yaxshi o'rgangan bola ko'proq o'qiydi, ko'proq biladi va o'qish unga yanada qiziqarli bo'ladi. O'qimagan bola yildan yilga orqada qoladi — farq yillar o'tib kattalashadi."},

    /* 15 */ {"t":"photo","layout":"split","color":"red","img":"/assets/insho/8-grafik.svg","fit":"contain","bg":"#F5F1E6","k":"Qiziqishni kutmang","h":"Birinchi qadamni *sabr va qunt* bosadi","items":["Boshida qiziqish deyarli yo'q — uni majburlash va rag'bat ko'tarib turadi.","Birinchi ming so'zni yodlamaguningizcha tilda deyarli hech narsani tushunmaysiz.","Ko'pchilik aynan shu bosqichda «qiziq emas ekan» deb to'xtaydi."],"all":true},

    /* 16 */ {"t":"photo","layout":"split","color":"blue","img":"/assets/insho/8-halqa.svg","fit":"contain","bg":"#F5F1E6","k":"Ikki halqa","h":"Johillik halqasi *vs* bilim halqasi","items":["Bilim halqasi: bilasiz → savol → qiziqish → o'qish → ko'proq bilim. Har aylanishda kengayadi.","Johillik halqasi: bilmaysiz → savol yo'q → qiziqmaysiz → o'qimaysiz. Joyida aylanadi.","O'tish yo'li bitta: qiziqish yo'q paytda ham o'rganishni boshlash."],"all":true},

    /* 17 */ {"t":"stop","color":"red","icon":"✋","h":"Hech narsani bilmagan bolada savol *tug'ilmaydi*","s":"Savol tug'ilmagach, u hech narsaga qiziqmaydi. Qiziqmagach, o'rganmaydi. Va shu tarzda bilimsiz, *johil* bo'lib qolib ketaveradi."},

    /* 18 */ {"t":"section","color":"green","icon":"🛠️","n":"3","h":"Qanday o'rganamiz?","s":"O'rganish tizimi va ko'nikmalar"},

    /* 19 */ {"t":"stack","color":"orange","k":"Skill stack","h":"Ko'nikmalar *ustma-ust*","s":"Bitta ko'nikma — oddiy mutaxassis. Bir nechta ko'nikma birga — noyob mutaxassis. Har qavat sizni kamyob qiladi.","axis":"Noyoblik","books":["Ingliz tili","Pedagogika","Psixologiya","Marketing","Boshqaruv","Yozish"],"top":"Noyob mutaxassis"},

    /* 20 */ {"t":"big","color":"green","icon":"🕰️","k":"Ilmu hol","h":"*Hozirgi holingiz* uchun kerak bo'lgan ilm","s":"Avval hozir kerak bo'lganini o'rganing — hamma narsani emas. Talabaga talaba ilmi, rahbarga rahbar ilmi."},

    /* 21 */ {"t":"photo","layout":"split","color":"green","img":"/assets/d2-kitob.jpg","focus":"center","k":"Autodidactism","h":"O'zi o'rganuvchi — *autodidakt*","items":["Hech kim sizga o'rgatishga majbur emas. O'zingiz o'rganing.","Kitob, kurs, video, odam — manba ko'p, bahona yo'q.","Har kuni 30 daqiqa — yiliga *180 soat* ilm."],"all":true},

    /* 22 */ {"t":"steps","color":"orange","icon":"🌱","k":"Ilmni chuqurlashtirish","h":"Qiziqish, qo'shni ilmlar, *yodlash*","all":true,"items":[{"n":"🌱","h":"Qiziqishni rivojlantiring","p":"Qiziqish tug'ilmaydi — o'stiriladi: savol bering, sinab ko'ring, chuqurlashing."},{"n":"🧩","h":"Komplementar ilmlar","p":"Asosiy sohangizga qo'shni ilmlar: pedagog uchun psixologiya, marketing, boshqaruv."},{"n":"🧠","h":"Memorization","p":"Yodlash — takror va qo'llash orqali. Yozing, gapiring, o'rgating — esda qoladi."}]},

    /* 23 */ {"t":"grid","color":"blue","icon":"📤","k":"Knowledge transfer","h":"Bilim odamlarga *turlicha* ta'sir qiladi","cols":3,"items":[{"icon":"📤","h":"Knowledge transfer","p":"Bilganingizni oddiy so'z bilan o'rgata olsangiz — bilasiz. Olmasangiz — hali ma'lumot."},{"icon":"🎭","h":"Turlicha ta'sir","p":"Bir kitob birini o'zgartiradi, ikkinchisiga hech narsa bermaydi. Tayyorlik farq qiladi."},{"icon":"🫵","h":"Bilimni o'zingizniki qiling","p":"O'z so'zingiz, o'z misolingiz, o'z hayotingizda qo'llash."}]},

    /* 24 */ {"t":"photo","layout":"split","color":"green","img":"/assets/daftar.jpg","focus":"center","k":"Writing to learn","h":"O'rganish uchun *yozing*","items":["Yoza olmagan narsangizni bilmaysiz.","Har dars, kitob, suhbatdan keyin — 5 qator xulosa.","Yozish — fikrni tartibga soladi va ilmni o'zingizniki qiladi."],"all":true},

    /* 25 */ {"t":"brain","color":"blue","k":"Knowledge management","h":"Bilimni *saqlash* tizimi","s":"Miya — saqlash uchun emas, fikrlash uchun. Saqlashni tizimga bering.","title":"Notion · Obsidian · daftar","center":"Ikkinchi miya","nodes":[["📚","Kitob"],["🎓","Dars"],["💬","Suhbat"],["🎧","Podkast"],["💡","G'oya"],["❓","Savol"],["🎯","Loyiha"],["📝","Xulosa"]],"steps":[{"icon":"📥","h":"Yig'ing","p":"Kitob, dars, suhbat — hammasini bir joyga."},{"icon":"🔗","h":"Bog'lang","p":"Yangi fikrni eskisiga ulang."},{"icon":"📤","h":"Qo'llang","p":"Yozing, gapiring, o'rgating."}]},

    /* 26 */ {"t":"section","color":"red","icon":"🧑‍🏫","n":"4","h":"Kimdan o'rganamiz?","s":"Ustoz tanlash va ustoz tutish"},

    /* 27 */ {"t":"photo","layout":"split","color":"red","img":"/assets/d7-ustoz.jpg","focus":"center","k":"Choosing a mentor","h":"*Ustoz* qanday tanlanadi?","items":["Siz bormoqchi bo'lgan joyda *allaqachon turgan* odam.","Gapiradigan emas — qiladigan.","Sizga vaqt ajrata oladigan va rostini aytadigan.","Bitta ustoz emas — har soha uchun bittadan."],"all":true},

    /* 28 */ {"t":"steps","color":"red","icon":"🤝","k":"Ishonsa bo'ladigan qahramonlar va ustoz tutish","h":"Senekaning *do'st tanlash* qoidasi","all":true,"items":[{"n":"1","h":"Tanlashgacha — surishtiring","p":"Ustozni tanlashgacha oylaringizni sarflang: kimligini, nima qilganini, qanday yashashini o'rganing."},{"n":"2","h":"Tanlagach — 100% ishonch","p":"Tanlab bo'ldingizmi — to'liq ishoning. Shubha bilan o'rgangan odam o'rganmaydi, tekshiradi."},{"n":"3","h":"1–3% uchun 97% dan kechmang","p":"Ustoz manbalarni saralab bergach, shogird chalg'imay yillar tejaydi. 1–3% xatoni deb 97% sahih bilimdan kechmang."}]},

    /* 29 */ {"t":"big","color":"blue","icon":"⏳","k":"Ustozning vaqti — millatning ilmi","h":"Ustozni hurmat qilish — uning *vaqtini asrash*","s":"Ustoz dars stolida o'tirib ham ro'zg'or va bozor-o'char tashvishi bilan band bo'lsa, darsga va shogirdga hech narsa qolmaydi. Ustozning tejalgan har bir daqiqasi shogird va millat kelajagiga quyiladigan bilimga aylanadi."},

    /* 30 */ {"t":"section","color":"orange","icon":"🧹","n":"5","h":"Nimani o'rganamiz?","s":"Axborot parhezi"},

    /* 31 */ {"t":"grid","color":"orange","icon":"🧹","k":"Filtr qilish","h":"Hamma ma'lumot *kerak emas*","cols":3,"items":[{"icon":"🎯","h":"Maqsadga tegishlimi?","p":"Hozirgi maqsadimga xizmat qiladimi? Yo'q bo'lsa — keyinga."},{"icon":"🧑‍🔬","h":"Manba ishonchlimi?","p":"Kim aytyapti? U buni qilganmi yoki faqat gapiryaptimi?"},{"icon":"⏳","h":"10 yildan keyin ham kerakmi?","p":"Yangilik — 1 kun. Prinsip — umr bo'yi."}],"note":"Ko'p o'qish emas — *to'g'ri* o'qish."},

    /* 32 */ {"t":"big","color":"red","icon":"📱","k":"«Endi siz atrofingizdagi besh odamning o'rtachasi emassiz» inshosidan","h":"Kuzatadigan *5 blogeringizning* o'rtachasisiz","s":"Jim Ron davrida o'sha besh odamni o'zimiz tanlardik. Bugun ularni ko'pincha algoritm tanlaydi. Algoritm esa sizni yaxshi odam qilish uchun emas, ekranda ushlab turish uchun ishlaydi."},

    /* 33 */ {"t":"stats","color":"orange","icon":"⏱️","k":"Bir hisob-kitob","h":"Lenta *qancha kitobni* yeb qo'yadi?","items":[{"v":"3","l":"Soat — kuniga lenta","s":"o'rtacha foydalanuvchi"},{"v":"1000+","l":"Soat — yiliga","s":"ya'ni 45 kecha-kunduz"},{"v":"100+","l":"Kitob","s":"shu vaqtga sig'adi"}],"note":"«Kitob o'qishga vaqtim yo'q» deymiz. Vaqt bor — u shunchaki *lentaga* ketyapti."},

    /* 34 */ {"t":"steps","color":"blue","icon":"🧺","k":"Elakdan o'tkazish","h":"Har bir blogerga *3 ta savol*","all":true,"items":[{"n":"1","h":"Hayoti haqiqiymi?","p":"U ko'rsatayotgan hayot o'zinikimi yoki ijaraga olinganmi?"},{"n":"2","h":"Nima beryapti?","p":"Bilimmi yoki havasmi?"},{"n":"3","h":"Nima qoldi?","p":"Videodan keyin menda harakat qilish istagi qoldimi yoki kimgadir hasad?"}]},

    /* 35 */ {"t":"vs","color":"red","icon":"☠️","k":"Ogohlik","h":"Ko'p bilim — *ko'p muammo*?","a":{"icon":"☠️","h":"Toksik bilim","tone":"bad","items":["Yangiliklar, g'iybat, salbiy kontent","Bilgan sari xavotir oshadi","Amal qilinmagan bilim — yuk"]},"b":{"icon":"🌿","h":"Foydali bilim","tone":"good","items":["Hayotingizda qo'llanadigan","Sizni xotirjam va kuchli qiladigan","O'zgalarga bera oladigan"]},"note":"More knowledge — more problems. *Toksik* ma'lumotdan qoching: nimani o'qiyotganingizni tanlang."},

    /* 36 */ {"t":"big","color":"green","icon":"🏛️","k":"Eskirmas ma'lumotlarni ovlang","h":"Yangilik — 1 kun, *prinsip* — umr bo'yi","s":"Nassim Taleb buni Lindi effekti deydi: kitob qancha uzoq vaqt o'qilib kelgan bo'lsa, shuncha uzoq o'qilaveradi. Ildiz qoidalarni bilish xatolarning 90% idan saqlaydi."},

    /* 37 */ {"t":"table","color":"blue","icon":"📡","k":"Kuzatishga arziydigan manbalar","h":"Ekraningizga *kimni* kiritasiz?","head":["Platforma","Tavsiya etiladigan manbalar"],"rows":[["Telegram kanallari","Behzod Hoshimov, Otabek Bakirov, Mashrabov, Alisher Isayev, Dr. Bek Olimjon, Boshqaruvchiga"],["YouTube suhbatlari","Osmondagi bolalar, Alohida Mavzu, Asoschilar podcast, Aziz Rahimov, Millat Umidi, Subyektiv, Kalibr"],["Jahon manbalari","Huberman Lab (biologiya, diqqat), Lex Fridman, Shane Parrish (Knowledge Project), Jordan Peterson, Nassim Taleb"]]},

    /* 38 */ {"t":"grid","color":"green","icon":"🌍","k":"Qomusiy ilmlar","h":"Har kim bilishi kerak bo'lgan *asoslar*","cols":4,"items":[{"icon":"🧠","h":"Psixologiya","p":"Odam nega shunday qiladi?"},{"icon":"💰","h":"Iqtisod va moliya","p":"Pul qanday ishlaydi?"},{"icon":"📜","h":"Tarix","p":"Nima takrorlanadi?"},{"icon":"🧬","h":"Biologiya, tibbiyot","p":"Tana qanday ishlaydi?"},{"icon":"📐","h":"Matematika, statistika","p":"Raqamlar nima deydi?"},{"icon":"🗣️","h":"Til va yozish","p":"Fikrni yetkazish."},{"icon":"⚖️","h":"Mantiq va falsafa","p":"To'g'ri fikrlash."},{"icon":"💻","h":"Texnologiya","p":"Asboblar qanday ishlaydi?"}],"note":"Munger kabi: *qomusiy* odam har muammoga bir nechta fan ko'zi bilan qaraydi."},

    /* 39 */ {"t":"vs","color":"red","icon":"👓","k":"Multidisciplinarity","h":"Bitta ko'zoynak vs *5 ta ko'zoynak*","a":{"icon":"👓","h":"Oddiy rahbar","tone":"bad","q":"Talaba kamaydi?","items":["«Reklamani ko'paytir!»","Bitta sabab — bitta yechim","Muammo qaytib keladi"]},"b":{"icon":"🔭","h":"Ko'p sohali rahbar","tone":"good","q":"Talaba kamaydi?","items":["Marketing: reklama ishlayaptimi?","Psixologiya: talaba nega ketdi?","HR: ustozning holati qanday?","Mahsulot: dars sifati qanday?","Savdo: taklif to'g'rimi?"]},"all":true,"note":"Bir muammoga *5 ta fan* ko'zi bilan qaragan odam — 5 ta yechim ko'radi."},

    /* 40 */ {"t":"domino","color":"red","k":"Dimensionality · 1–4-o'lcham","h":"Bir qaror — *zanjir* reaksiya","items":[{"tag":"1-o'lcham","h":"Talaba kamaydi","p":"Sabab so'ralmaydi"},{"tag":"1-o'lcham","h":"Chegirma, arzon ustoz","p":"Tez va oson yechim"},{"tag":"2-o'lcham","h":"Natija yo'q","p":"Arzon ustoz — sifat past"},{"tag":"2-o'lcham","h":"Ota-ona norozi","p":"Pul to'lagan, natija yo'q"},{"tag":"3-o'lcham","h":"5 talaba ketadi","p":"Bittasi emas — beshtasi"},{"tag":"3-o'lcham","h":"10 kishiga yomon gapiradi","p":"Har biri o'z davrasiga"},{"tag":"4-o'lcham","h":"Brend zarar ko'radi","p":"Ishonch tiklanmaydi"},{"tag":"4-o'lcham","h":"Keyingi mavsum bo'sh","p":"Yangi talaba kelmaydi"}],"note":"«Bugun tejagan 1 so'm — ertaga 10 so'm zarar.» *4-o'lchamda* fikrlang: bu qaror qarorning qaroriga nima qiladi?"},

    /* 41 */ {"t":"steps","color":"blue","icon":"🧭","k":"Dimensionality · to'g'ri yo'l","h":"Chegirma emas — *sababini so'rang*","all":true,"items":[{"n":"1","h":"Sababini so'rang","p":"Talaba nega kamaydi? Qaysi guruh? Qaysi ustoz? Qaysi 2 oy?"},{"n":"2","h":"Ildizini toping","p":"Belgi (kam talaba) emas — sabab (dars sifati, ustoz, muloqot) bilan ishlang."},{"n":"3","h":"4 qadam oldinga qarang","p":"Bu qaror 6 oydan keyin nimaga olib keladi? Kimga ta'sir qiladi?"}]},

    /* 42 */ {"t":"table","color":"green","icon":"📊","k":"Ilmdagi xatolar va oltin qoidalar","h":"Xato va uning *muqobili*","head":["Yo'nalish","Katta xato","Oltin qoida","Natija"],"rows":[["Maqsad","Shaklni quvish: sertifikat, baho, diplom","Mohiyatni o'rganish: bilim va ko'nikma","Har qanday imtihon va ishda kuchli"],["Qiziqish","Qiziqish o'zi kelishini kutish","Birinchi bosqichni *sabr va qunt* bilan o'tish","Bilim halqasi aylanadi"],["Manba","Arzon hayp va dabdabali blogerlar","Kuzatadigan 5 blogerni qat'iy saralash","Tiniq fikr va maqsadli intizom"],["Ustoz","Ustozni ro'zg'or tashvishi bilan yolg'iz qo'yish","Ustoz vaqtini asrash, 100% ishonch bilan o'rganish","Tezkor o'sish, yillar tejaladi"],["Xotira","Eshitib, o'qib, unutish","Yozish, bog'lash va o'rgatish","Bilim o'zingizniki bo'ladi"]]},

    /* 43 */ {"t":"checklist","color":"blue","icon":"✅","k":"Kunlik ilm checklisti","h":"Bugun *nima o'rgandim*?","items":[{"n":"1","h":"Kamida *30 daqiqa* o'qidim yoki o'rgandim"},{"n":"2","h":"O'rganganimdan *5 qator* xulosa yozdim"},{"n":"3","h":"Yangi bilimni eskisiga bog'ladim"},{"n":"4","h":"Bugun menda *yangi savol* tug'ildi"},{"n":"5","h":"Bilganimni kimgadir tushuntirdim"},{"n":"6","h":"Lentani emas, saralangan manbani tanladim"},{"n":"7","h":"Qiziq bo'lmasa ham, kerakli fanga vaqt ajratdim"},{"n":"8","h":"Ustozimning vaqtini hurmat qildim","star":true}]},

    /* 44 */ {"t":"steps","color":"blue","icon":"📝","k":"Uyga vazifa","h":"Ilm *tizimini* boshlang","all":true,"items":[{"n":"1","h":"Skill stack","p":"O'zingizdagi 5 ta ko'nikmani yozing. Qaysi birini qo'shsangiz noyob bo'lasiz?"},{"n":"2","h":"Ustoz va manba","p":"Har soha uchun bitta ustoz va bitta manba (kitob, kurs) tanlang."},{"n":"3","h":"Ikkinchi miya","p":"Qaydlar tizimini boshlang: Notion, Obsidian yoki daftar. Bu haftadan."},{"n":"4","h":"Bloger auditi","p":"Kuzatadigan 5 ta blogeringizni yozing. Har biriga 3 savol bering: hayoti haqiqiymi, bilim beradimi, videodan keyin harakat qilging keladimi?"},{"n":"5","h":"30 kun sabr","p":"Qiziqmagan, lekin kerakli bitta fanni tanlang. 30 kun har kuni 30 daqiqa o'rganing va qanday savollar tug'ilganini yozib boring."}]},

    /* 45 */ {"t":"end","icon":"🙌","h":"Rahmat","s":"7-dars yakunlandi · Keyingi dars: 8-dars — Fikrlash"}
  ]
};

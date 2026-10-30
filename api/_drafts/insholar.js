'use strict';
/* QORALAMA INSHOLAR — saytda faqat PIN bilan kirgan muallifga ko'rinadi (/api/insho).
   Muallif ma'qullagach, insho shu yerdan olib tashlanadi va essays.js ga ko'chiriladi —
   shundan keyin hammaga ko'rinadi. Format essays.js bilan bir xil.
   Chizma: "![izoh](/assets/insho/fayl.svg)" — alohida xatboshida. */

const PARA = '\n\n';

module.exports = [
  {
    folio: '8',
    title: 'Nega hech narsaga qiziqmayman?',
    date: '30.10.2026',
    body: [
      "Ko'p o'quvchidan bir gapni eshitaman: «Ustoz, men hech narsaga qiziqmayman». Ota-onalardan esa boshqacha shaklda: «Bolam hech narsaga qiziqmaydi. Na kitobga, na sportga, na biror kasbga. Faqat telefon».",
      "Agar siz ham o'zingiz haqingizda shunday deb o'ylasangiz, avval bir yaxshi xabar: bu tug'ma kamchilik emas. Siz dangasa yoki qobiliyatsiz bo'lib tug'ilmagansiz. Sabab boshqa joyda. Uni tushunib olsangiz, vaziyatni o'zgartirish ham mumkin bo'ladi.",
      "Sabab oddiy: siz hali yetarlicha narsani bilmaysiz. Qiziqish esa bilimdan tug'iladi.",
      "Birinchi qarashda bu teskari tuyuladi. Odatda «avval qiziqish, keyin o'qish» deb o'ylaymiz. Aslida ko'pincha buning aksi: avval ozgina bilim, keyin qiziqish.",
      "## Bo'sh taxtada bo'shliq ko'rinmaydi",
      "Jumboq (pazl) yig'ib ko'rganmisiz? Taxta bo'sh turganda qaysi bo'lak yetishmayotganini bilmaysiz. Hammasi yetishmaydi, demak hech biri ko'zga tashlanmaydi. Lekin rasmning ko'p qismi yig'ilib, bitta bo'lak qolganda, o'sha bo'shliq ko'zingizga tikilib turadi. Uni to'ldirmaguncha tinchimaysiz.",
      "![Bo'sh taxtada qaysi bo'lak yo'qligini bilmaysiz. Ko'p qismi yig'ilgan taxtada esa bitta bo'shliq o'zi chaqirib turadi.](/assets/insho/8-jumboq.svg)",
      "Karnegi Mellon universiteti psixologi Jorj Louenstayn qiziqishni aynan shunday tushuntiradi. Uning «axborot bo'shlig'i» nazariyasiga ko'ra, qiziqish odam bilgan narsasi bilan bilmoqchi bo'lgan narsasi orasidagi bo'shliqni sezganda paydo bo'ladi. E'tibor bering: bo'shliqni sezish uchun uning atrofida biror narsani bilish kerak. Hech narsa bilmagan odam bo'shliqni ko'rmaydi. Unga hamma joy bir xil bo'sh.",
      "Futbolni oling. Qoidalarni bilmagan odam uchun 90 daqiqa shunchaki yigirma ikki kishining bitta to'p ortidan yugurishi. Zerikarli. Futbolni biladigan odam uchun esa har bir harakat savol: nega murabbiy aynan shu o'yinchini almashtirdi? Nega himoyachi oldinga chiqib ketdi? Bu natija turnir jadvalini qanday o'zgartiradi? O'yin bir xil. Farq tomoshabinning boshida.",
      "## Bilim neyronlar kabi ulanadi",
      "Miyamiz bilimni alohida-alohida qutilarda saqlamaydi. Har bir yangi ma'lumot avval bilgan narsamizga ulanadi. Kanadalik olim Donald Xebb buni shunday ta'riflagan: birga faollashadigan neyronlar o'zaro bog'lanadi. Ya'ni bilim ip kabi emas, to'r kabi o'sadi.",
      "Bu to'rning bir ajoyib xususiyati bor: ikki bilgan narsangiz ulangan joyda yangi savol tug'iladi. Masalan, bola dinozavrlar millionlab yil oldin yashaganini biladi. Keyin toshlarda suyak izlari topilishini bilib oladi. Ikkalasi ulanadi va savol paydo bo'ladi: «Toshning yoshini qanday bilishadi?» Bu savol uni yer qatlamlariga, undan kimyoga, undan fizikaga olib boradi. Har bir ulanish keyingi bilmaydigan narsani ko'rsatib beradi.",
      "![Bilim kam bo'lsa, nuqtalar orasida ip yo'q, savol ham yo'q. Bilim ko'paygan sari nuqtalar ulanadi va to'rning har bir chetida yangi «nega?» osilib turadi.](/assets/insho/8-tarmoq.svg)",
      "Amerikalik tadqiqotchilar Donna Rext va Loren Lesli 1988 yilda bir tajriba o'tkazishgan. O'quvchilarga beysbol o'yini haqida matn berib, qanchalik tushunganini tekshirishgan. Natija kutilmagan bo'lgan: o'qishda zaif, lekin beysbolni yaxshi biladigan bolalar o'qishda kuchli, lekin beysbolni bilmaydigan bolalardan yaxshiroq tushungan. Demak, yangi narsani tushunishda o'qish mahoratidan ham ko'ra oldingi bilim ko'proq yordam beradi.",
      "## Ko'p bilgan sari savol ham ko'payadi",
      "Bilimni doira deb tasavvur qiling. Doira ichida bilganlaringiz, tashqarisida bilmaganlaringiz. Doiraning chegarasi esa savollar tug'iladigan joy, chunki aynan shu yerda bilgan narsangiz bilmagan narsangizga tegib turadi.",
      "![Doira kichik bo'lsa, uning noma'lum bilan tutashgan chegarasi ham qisqa. Doira kattalashgan sari chegara uzayadi va savollar ko'payadi.](/assets/insho/8-doira.svg)",
      "Shuning uchun haqiqiy olimlar ko'p bilgan sari «men hali qanchalik kam bilaman» deydi. Hech narsa bilmagan odam esa ko'pincha o'zini hammasini biladigandek his qiladi. Chunki uning savoli yo'q.",
      "Mana shu sababli qiziqish bir tekis emas, qor ko'chkisi kabi o'sadi. Psixolog Keyt Stanovich o'qishdagi bu hodisani «Matto effekti» deb atagan: erta o'qishni yaxshi o'rgangan bola ko'proq o'qiydi, ko'proq o'qigani uchun ko'proq biladi, ko'proq bilgani uchun o'qish unga yanada oson va qiziqarli bo'ladi. O'qimagan bola esa yildan yilga orqada qolaveradi. Ikkalasi orasidagi farq yillar o'tib kamaymaydi, aksincha kattalashadi.",
      "## Unda telefon nega qiziq?",
      "Endi haqli savol tug'iladi: agar qiziqish uchun bilim kerak bo'lsa, unda nega telefon hamma bolaga birdek qiziq?",
      "Chunki rils hech qanday oldingi bilim talab qilmaydigan qilib yasalgan. Uni tushunish uchun to'r ham, ilgak ham kerak emas. Har bir video o'zi bilan tayyor qiziqishni olib keladi: tez kadr, kutilmagan oxir, kulgi. Bu xuddi «Glutamat zarbasidan qaytib turish qiyin kechadi» inshomda yozganimdek: chaynamasdan olingan lazzat. Tayyor qiziqishga o'rgangan miya keyin chaynash kerak bo'lgan qiziqishni, ya'ni kitobni, masalani, kasbni bemaza deb biladi.",
      "Rilsdan keyin savol qoladimi? Odatda yo'q. Keyingi video, yana keyingisi. Yaxshi kitobdan keyin esa savol qoladi. Farq shunda: biri bilimsiz qiziqish, ikkinchisi bilimdan tug'ilgan qiziqish. Birinchisi sizdan oladi, ikkinchisi sizga qo'shadi.",
      "Sun'iy intellekt ham har qanday savolga bir zumda javob beradi. Lekin savolni o'zi bermaydi. Savolni faqat bilim beradi.",
      "## Qiziqishni kutib o'tirmang",
      "Endi eng muhim gapga keldik. Agar qiziqish bilimdan tug'ilsa, unda boshida, bilim hali yo'q paytda, qiziqish ham bo'lmaydi. Demak, birinchi qadamni qiziqish emas, iroda bosadi.",
      "Ingliz tilini o'rganishni boshlagan har bir o'quvchi buni biladi. Birinchi oylar zerikarli: harflar, so'zlar, qoidalar. Hech narsa tushunarli emas, hech narsa qiziq emas. Lekin bir kuni ming so'z yig'iladi. Shunda sevimli qo'shig'ingizdagi bir jumlani tushunib qolasiz. Filmdagi hazilni tarjimasiz ilg'aysiz. Va birdan qiziqish paydo bo'ladi: «Qolganida nima deyilyapti ekan?» Endi sizni hech kim majburlamaydi. Sizni bilimning o'zi tortadi.",
      "![Boshida qiziqish deyarli yo'q, uni o'zingizni majburlash ko'tarib turadi. Ma'lum nuqtadan keyin chiziqlar kesishadi va qiziqish yukni o'z zimmasiga oladi.](/assets/insho/8-grafik.svg)",
      "Grafikning chap tomoni eng og'ir bosqich. Ko'pchilik aynan shu yerda to'xtaydi va «menga qiziq emas ekan» degan xulosaga keladi. Aslida u hali qiziqish paydo bo'ladigan joyga yetib bormagan bo'ladi. U bekatga yetmasdan avtobusdan tushib, «bu yo'l hech qayerga olib bormas ekan» degan yo'lovchiga o'xshaydi.",
      "Ota-onalar ham ko'pincha shu xatoga yo'l qo'yadi: «Bolam qiziqmasa, majburlamayman. O'zi qiziqib qolsa o'qiydi». Niyat ezgu, lekin xulosa xato. Hech narsa bilmagan bola o'z-o'zidan biror narsaga qiziqib qolmaydi. Qiziqish uchun bo'shliq kerak, bo'shliqni ko'rish uchun esa atrofida bilim kerak. Bolani shu boshlang'ich bilimga olib kelish, ya'ni birinchi «majburlash» bosqichidan o'tkazish kattalarning vazifasi.",
      "Albatta, majburlash deganda qiynashni nazarda tutmayapman. Gap birinchi bosqichda sabr qilish haqida. Bobolarimiz bekorga «Ilm igna bilan quduq qazigandek» demagan. Birinchi ignalar hech narsa qazimagandek tuyuladi. Lekin har qanday quduq aynan shulardan boshlanadi.",
      "## Ikki halqa",
      "Endi hammasini birlashtiramiz. Hayotda ikki halqa bor.",
      "![Johillik halqasi joyida aylanadi. Bilim halqasi esa har aylanishda kattalashib boradi.](/assets/insho/8-halqa.svg)",
      "Birinchisi, bilim halqasi: bilasiz, savol tug'iladi, savol qiziqish uyg'otadi, qiziqish o'qitadi, o'qish yangi bilim beradi. Bu halqa har aylanganda kengayadi. Ikkinchisi, johillik halqasi: bilmaysiz, savol tug'ilmaydi, qiziqmaysiz, o'qimaysiz va yana bilmaysiz. Bu halqa ham aylanadi, lekin joyida. Yillar o'tadi, odam o'sha nuqtada qolaveradi.",
      "Bir halqadan ikkinchisiga o'tishning yagona yo'li bor: qiziqish hali yo'q paytda ham biror narsani o'rganishni boshlash. Bitta soha tanlang. Uning eng oddiy asoslarini o'zingizni majburlab bo'lsa ham o'rganing. Har kuni kechqurun o'zingizdan so'rang: «Bugun menda qanday yangi savol tug'ildi?» Savollar paydo bo'la boshlasa, demak to'r to'qilyapti.",
      "Xalqimizda «Bilmaganni so'rab o'rgangan olim, orlanib so'ramagan o'ziga zolim» degan maqol bor. Lekin so'rash uchun ham avval savol kerak. Savol esa bo'sh boshda tug'ilmaydi.",
      "Qur'oni karimda shunday savol bor: «Ayting: biladiganlar bilan bilmaydiganlar barobar bo'ladimi?» (Zumar surasi, 9-oyat). Javob aniq. Va bu farq bir kunda emas, har kuni qilinadigan kichik tanlovlarda paydo bo'ladi.",
      "Shuning uchun qiziqishni kutmang. Uni bilim bilan quring.",
      "> Demak, hech narsani bilmagan bolada hech qanday savol tug'ilmaydi. Savol tug'ilmagach, u hech narsaga qiziqmaydi. Qiziqmagach, o'rganmaydi. Va shu tarzda hech narsani bilmay, bilimsiz, johil bo'lib qolib ketaveradi."
    ].join(PARA)
  }
];

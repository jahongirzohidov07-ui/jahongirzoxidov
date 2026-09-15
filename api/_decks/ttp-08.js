'use strict';
/* TTP · 8-modul: Ustozlik charchog'idan chiqish */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 8-modul', h: 'Ustozlik charchog\'idan chiqish', s: 'Burnout: uni tanish, undan chiqish va oldini olish', meta: 'Jahongir Zoxidov' },

    { t: 'checklist', k: 'Kurs sayohati', h: 'Yetti modul orqali bu yerga keldik. Bugun sakkizinchi to\'xtash', items: [
      { n: '1', h: 'Pedagog aslida kim? Ustozlik mohiyati' }, { n: '2', h: 'Birinchi darsni o\'tish psixologiyasi' },
      { n: '3', h: 'Asosiy darslar psixologiyasi' }, { n: '4', h: 'Sinf boshqaruvi' },
      { n: '5', h: 'Ichki ta\'sir psixologiyasi' }, { n: '6', h: 'Muloqot psixologiyasi' },
      { n: '7', h: 'Intizomni ichkaridan shakllantirish' }, { n: '8', h: 'Charchoqdan chiqish', star: true }
    ] },

    { t: 'ask', k: 'Ochiq savol', h: 'Kimda bor ustozlik charchog\'i?', s: 'Bo\'lganmi? Avval boshdan kechirganmisiz? Hozir, aynan shu damda his qilyapsizmi? Bemalol bo\'lishingiz mumkin: bu suhbat shu haqda.' },

    { t: 'big', k: 'Savol · ustoz kim?', h: 'Ustoz — *vositachi.*', s: 'Bilim, ma\'no, mehr A nuqtadan B nuqtaga oqib o\'tadi. Energiya ustoz orqali oqib o\'tadi, uning ichida emas.' },

    { t: 'vs', k: 'Tarix · Herbert Freudenberger, 1974', h: 'Burnout — bu nima aslida?', a: { h: 'Bu emas', tone: 'bad', items: ['Jismoniy charchoq emas', 'Kasallik emas'] }, b: { h: 'Balki', tone: 'gold', items: ['Ma\'no yo\'qolishi', 'Hissiy qurish', 'Ichki masofaning buzilishi'] }, note: 'Bu *o\'zini berib charchagan insonning ichki signali.*' },

    { t: 'steps', k: 'Asosiy belgilar · Maslach va Jackson modeli', h: 'Burnoutni qanday taniymiz?', items: [
      { h: 'Emotsional charchoq', p: '«Men boshqa hech kimga energiya bera olmayman»' },
      { h: 'Depersonalizatsiya', p: 'O\'quvchilarni shaxs sifatida emas, «muammo» sifatida ko\'rish' },
      { h: 'Samaradorlik pasayishi', p: '«Men yaxshi ustoz emasman» hissi' }
    ], note: 'Bir vaqtning o\'zida 2 yoki 3 ta belgi bor bo\'lsa, *bu allaqachon kuyish.*' },

    { t: 'steps', k: 'Bosqichlar · Freudenberger modeli', h: 'Kuyishning 5 bosqichi: idealizmdan kuyishgacha', items: [
      { h: 'Idealizm', p: '«Men hammasini o\'zgartiraman»' },
      { h: 'Ortiqcha yuk olish', p: 'Hamma narsaga «ha» deyish' },
      { h: 'E\'tiborsizlik', p: 'O\'zini unutish: dam yo\'q, shaxsiy hayot yo\'q' },
      { h: 'Ichki konflikt', p: '«Nega men charchadim? Men kuchsizmanmi?»' },
      { h: 'Kuyib ketish', p: 'Hissiy sovuqlik · motivatsiya yo\'q · avtomatik ishlash' }
    ], note: 'Har bir bosqich to\'xtash uchun imkoniyat. *Birinchidan boshlang.*' },

    { t: 'quote', k: 'Sabab · nega ustoz kuyadi?', q: 'Inson sevishni bilmasa, u xizmat qilish orqali o\'zini yo\'qotadi.', by: 'Ustozlik — bu xizmat. O\'zingni unutib, ichki manbangni to\'ldirmasang, bu xizmat o\'zini yo\'qotishga aylanadi' },

    { t: 'big', k: 'Asosiy g\'oya', h: 'Sevgi orqali xizmat *to\'lib turgan idishdan* beriladi. Bo\'sh idishdan emas.' },

    { t: 'vs', k: 'Eng muhim tushuncha', h: 'Professional masofa', a: { h: 'Xato model', tone: 'bad', q: '«Men har bir o\'quvchining muammosini o\'zim hal qilishim kerak.»', p: 'Hayotini yashash kuyishga olib boradi.' }, b: { h: 'To\'g\'ri model', tone: 'good', q: '«Men yo\'l ko\'rsataman, lekin ularning hayotini yashamayman.»', p: 'Mehr saqlaydi, energiyani saqlaydi.' }, note: '*Inson boshqasining taqdirini emas, unga munosabatini boshqaradi.*' },

    { t: 'steps', k: 'Amaliy', h: 'Og\'ir darsdan keyingi tiklanish: 3 qadam', items: [
      { h: 'Ajratish · psixologik «eshik yopish»', p: '«Bu dars MEN emas, bu mening ISHIM.» Sinfdan chiqqach 2–3 daqiqa yolg\'iz. Chuqur nafas (4 → 8 sekund). Ichingizdan «Yopildi» deb ayting.' },
      { h: 'Bo\'shatish · ichdagi energiyani chiqarish', p: '«Nima og\'ir bo\'ldi? Nima asabga tegdi?» Yozib tashlash eng kuchli usul. Yurish, harakat. Kim bilandir qisqa gaplashish.' },
      { h: 'Qayta markazlash · yaxshilikni ko\'rish', p: '«Bugun men bitta yaxshi ish qildimmi?» Faqat salbiyni ko\'rish burnout boshlanishi. Bitta yaxshilikni toping, o\'zingizga «rahmat» ayting.' }
    ], note: 'Bu 3 qadam har kuni, har og\'ir darsdan keyin. *Tiklanish odatdan boshlanadi.*' },

    { t: 'stats', k: 'Kunlik ozuqa', h: 'Har kuni 10 daqiqa o\'qish', items: [
      { v: '10', l: 'daqiqa', s: 'kuniga, har kuni' },
      { v: '3', l: 'yo\'nalish', s: 'pedagogika · psixologiya · inson tabiati' },
      { v: '60+', l: 'soat', s: 'yiliga oziqlanish' }
    ], note: 'John Dewey: «Ta\'lim — bu hayotga tayyorgarlik emas, hayotning o\'zidir.» Ustoz har kuni o\'zi ham «o\'quvchi» bo\'lishi kerak. *Burnout ichki resurslar tugashi bilan boshlanadi.*' },

    { t: 'steps', k: 'Refleksiya', h: 'Har kuni 5–10 daqiqa refleksiya yozuvi: 3 savol', items: [
      { h: 'Bugun nima yaxshi o\'tdi?', p: 'Eng muhim: birinchi yozing' },
      { h: 'Qayerda qiynaldim?' },
      { h: 'Ertaga nimani boshqacha qilaman?' }
    ], note: 'Kichkina hiyla: birinchi qismni boshqa ruchkada yozing. Bu egoni oziqlantirish uchun: «Men shu narsani uddaladim.» *Refleksiya — kuyishning eng kuchli antitezasi.*' },

    { t: 'steps', k: '«Chegara qo\'yish» mashqi', h: 'Men nimaga javobgarman? Nimaga javobgar emasman?', items: [
      { h: 'Jismoniy', p: 'Uyqu, yurish, dam olish: tanaga e\'tibor' },
      { h: 'Emotsional', p: 'Suhbat, yozish, ichni bo\'shatish (ikki xil suhbatdosh)' },
      { h: 'Ma\'naviy', p: '«Nima uchun men ustozman?» — maqsadga qaytish' }
    ], note: '*Chegara qo\'yish — xudbinlik emas, o\'zini asrash san\'atidir.*' },

    { t: 'big', k: 'Tizim mas\'uliyati', h: 'Burnout — individual muammo emas. Bu *tizim* muammosi.', s: 'Maktab va jamiyat ustoz uchun adolatli yuk yaratishi kerak: bir ustozga ortiqcha vazifa yuklamaslik.\n«Ustoz jarohatlanishi mumkin, lekin aslo o\'lmasligi kerak.»' },

    { t: 'vs', k: 'Ogohlik · mukammallik tuzog\'i', h: 'Kelajakdagi «men» doim kuchliroq deb tasavvur qilinadi', a: { h: 'Xato formula', tone: 'bad', q: '«Agar o\'qisam, mukammal qilishim kerak.»', items: ['Ko\'p vaqt + katta kuch → burnoutga salom'] }, b: { h: 'To\'g\'ri formula', tone: 'good', items: ['Kichik, lekin doimiy harakat → parvoz'] }, note: '«Ideal boshlash» emas. *«Kamroq, lekin doimiy»* — ha.' },

    { t: 'steps', k: 'Usul · Korczak yondashuvi', h: 'Chegara va hurmat orqali tiklanish', items: [
      { h: 'Bolalar parlamenti', p: 'Bolalar o\'z masalalarini o\'zlari hal qiladi' },
      { h: 'O\'zini boshqarish tizimi', p: 'Sinf qoidalarini bolalar bilan birga belgilash' },
      { h: 'Mas\'uliyatni bo\'lishish', p: 'Hamma yukni ustoz yolg\'iz ko\'tarmaydi' }
    ], note: 'Ustoz yukni dastlab o\'quvchilardan olib, o\'zi ko\'tarishi kerak, keyin esa ularga oz-ozdan qaytarib berishi. *Ustoz yolg\'iz qahramon emas, u jarayonni boshqaruvchi.*' },

    { t: 'flow', k: 'Usul · Montessori yondashuvi', h: 'Nazoratni qo\'yib yuborish orqali tiklanish', items: ['Qat\'iy nazorat', 'Inqiroz: charchoq, qarshilik, natijasizlik', 'Radikal qaror: muhitni tashkil qilish', 'Ustoz kuzatuvchiga aylanadi'], note: 'Hamma narsani nazorat qilish ustozni charchatadi. *Muhit yaratish ozod qiladi.*' },

    { t: 'steps', k: 'Xulosa', h: 'Sevgi orqali xizmat qiling, o\'zingizni yo\'qotmasdan', items: [
      { n: '❤', h: 'To\'lib turing', p: 'Bo\'sh idishdan beriladigan xizmat — charchoq' },
      { n: '⚖', h: 'Chegara qo\'ying', p: 'Mehrli, lekin chegarali — professional kuch' },
      { n: '✍', h: 'Refleksiya qiling', p: 'Har kuni 5–10 daqiqa o\'zingiz bilan' },
      { n: '★', h: 'Tizimga aylantiring', p: 'Kichkina, lekin doimiy — mukammaldan emas' }
    ], note: '*Yaxshi ustoz — charchamagan ustoz emas. Yaxshi ustoz — o\'zini asray oladigan ustoz.*' },

    { t: 'steps', k: 'Sintez · uchchala yo\'l', h: 'Uchta buyuk pedagog — uchta tiklanish formulasi', items: [
      { h: 'Dewey · ma\'noni qayta topish', p: 'Ta\'lim — hayotning o\'zi. O\'qish — oziqlanish.' },
      { h: 'Korczak · yukni bo\'lishish', p: 'Bolalar bilan mas\'uliyat — ustozning donoligi.' },
      { h: 'Montessori · nazoratni kamaytirish', p: 'Boshqaruvchi emas, kuzatuvchi bo\'lish.' }
    ], note: '*Sizni charchatayotgan narsa ishning o\'zimi yoki sizning ishlash usulingizmi?*' },

    { t: 'end', h: 'Rahmat', s: '8-modul yakunlandi' }
  ]
};

'use strict';
/* TTP · 8-modul: Ustozlik charchog'idan chiqish */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*8-modul* · Ustozlik charchog\'idan chiqish', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'checklist', color: 'blue', icon: '🗺️', k: 'Kurs sayohati', h: 'Yetti modul orqali bu yerga keldik. Bugun *sakkizinchi* to\'xtash', items: [
      { n: '1', h: 'Pedagog aslida kim? Ustozlik mohiyati' }, { n: '2', h: 'Birinchi darsni o\'tish psixologiyasi' },
      { n: '3', h: 'Asosiy darslar psixologiyasi' }, { n: '4', h: 'Sinf boshqaruvi' },
      { n: '5', h: 'Ichki ta\'sir psixologiyasi' }, { n: '6', h: 'Muloqot psixologiyasi' },
      { n: '7', h: 'Intizomni ichkaridan shakllantirish' }, { n: '8', h: 'Charchoqdan chiqish', star: true }
    ] },

    { t: 'photo', layout: 'full', color: 'red', img: '/assets/t-charchoq.jpg', focus: 'center', k: 'Ochiq savol', h: 'Kimda bor *ustozlik charchog\'i*?', s: 'Bo\'lganmi? Avval boshdan kechirganmisiz? Hozir, aynan shu damda his qilyapsizmi? Bemalol bo\'lishingiz mumkin: bu suhbat shu haqda.' },

    { t: 'big', color: 'blue', icon: '🌉', k: 'Savol · ustoz kim?', h: 'Ustoz — *vositachi.*', s: 'Bilim, ma\'no, mehr A nuqtadan B nuqtaga oqib o\'tadi. Energiya ustoz orqali oqib o\'tadi, uning ichida emas.' },

    { t: 'vs', color: 'red', icon: '🔥', k: 'Tarix · Herbert Freudenberger, 1974', h: 'Burnout — bu *nima* aslida?', a: { icon: '🚫', h: 'Bu emas', tone: 'bad', items: ['Jismoniy charchoq emas', 'Kasallik emas'] }, b: { icon: '🕯️', h: 'Balki', tone: 'gold', items: ['Ma\'no yo\'qolishi', 'Hissiy qurish', 'Ichki masofaning buzilishi'] }, all: true, note: 'Bu *o\'zini berib charchagan insonning ichki signali.*' },

    { t: 'grid', color: 'orange', icon: '🩺', k: 'Asosiy belgilar · Maslach va Jackson modeli', h: 'Burnoutni *qanday* taniymiz?', cols: 3, items: [
      { icon: '🪫', h: 'Emotsional charchoq', p: '«Men boshqa hech kimga energiya bera olmayman»' },
      { icon: '🧊', h: 'Depersonalizatsiya', p: 'O\'quvchilarni shaxs sifatida emas, «muammo» sifatida ko\'rish' },
      { icon: '📉', h: 'Samaradorlik pasayishi', p: '«Men yaxshi ustoz emasman» hissi' }
    ], note: 'Bir vaqtning o\'zida 2 yoki 3 ta belgi bor bo\'lsa, *bu allaqachon kuyish.*' },

    { t: 'domino', color: 'red', k: 'Bosqichlar · Freudenberger modeli', h: 'Kuyishning *5 bosqichi*: idealizmdan kuyishgacha', items: [
      { tag: '1-bosqich', h: 'Idealizm', p: '«Men hammasini o\'zgartiraman»' },
      { tag: '2-bosqich', h: 'Ortiqcha yuk olish', p: 'Hamma narsaga «ha» deyish' },
      { tag: '3-bosqich', h: 'E\'tiborsizlik', p: 'O\'zini unutish: dam yo\'q, shaxsiy hayot yo\'q' },
      { tag: '4-bosqich', h: 'Ichki konflikt', p: '«Nega men charchadim? Men kuchsizmanmi?»' },
      { tag: '5-bosqich', h: 'Kuyib ketish', p: 'Hissiy sovuqlik · motivatsiya yo\'q · avtomatik ishlash' }
    ], note: 'Har bir bosqich to\'xtash uchun imkoniyat. *Birinchidan boshlang.*' },

    { t: 'quote', color: 'blue', k: 'Sabab · nega ustoz kuyadi?', q: 'Inson sevishni bilmasa, u xizmat qilish orqali o\'zini yo\'qotadi.', by: 'Ustozlik — bu xizmat. O\'zingni unutib, ichki manbangni to\'ldirmasang, bu xizmat o\'zini yo\'qotishga aylanadi' },

    { t: 'big', color: 'green', icon: '🏺', k: 'Asosiy g\'oya', h: 'Sevgi orqali xizmat *to\'lib turgan idishdan* beriladi. Bo\'sh idishdan emas.' },

    { t: 'vs', color: 'orange', icon: '📏', k: 'Eng muhim tushuncha', h: '*Professional* masofa', a: { icon: '🎒', h: 'Xato model', tone: 'bad', q: '«Men har bir o\'quvchining muammosini o\'zim hal qilishim kerak.»', p: 'Hayotini yashash kuyishga olib boradi.' }, b: { icon: '🧭', h: 'To\'g\'ri model', tone: 'good', q: '«Men yo\'l ko\'rsataman, lekin ularning hayotini yashamayman.»', p: 'Mehr saqlaydi, energiyani saqlaydi.' }, all: true, note: '*Inson boshqasining taqdirini emas, unga munosabatini boshqaradi.*' },

    { t: 'flow', color: 'green', icon: '🚪', k: 'Amaliy', h: 'Og\'ir darsdan keyingi tiklanish: *3 qadam*', items: ['🚪 Ajratish', '💨 Bo\'shatish', '🎯 Qayta markazlash'], all: true, note: '*Ajratish* — «Bu dars MEN emas, bu mening ISHIM.» Sinfdan chiqqach 2–3 daqiqa yolg\'iz, chuqur nafas (4 → 8 sekund), ichingizdan «Yopildi». *Bo\'shatish* — «Nima og\'ir bo\'ldi?» Yozib tashlash, yurish, qisqa gaplashish. *Qayta markazlash* — «Bugun men bitta yaxshi ish qildimmi?» Bitta yaxshilikni toping, o\'zingizga «rahmat» ayting. Bu 3 qadam har og\'ir darsdan keyin. *Tiklanish odatdan boshlanadi.*' },

    { t: 'stats', color: 'blue', icon: '📚', k: 'Kunlik ozuqa', h: 'Har kuni *10 daqiqa* o\'qish', items: [
      { v: '10', l: 'daqiqa', s: 'kuniga, har kuni' },
      { v: '3', l: 'yo\'nalish', s: 'pedagogika · psixologiya · inson tabiati' },
      { v: '60+', l: 'soat', s: 'yiliga oziqlanish' }
    ], note: 'John Dewey: «Ta\'lim — bu hayotga tayyorgarlik emas, hayotning o\'zidir.» Ustoz har kuni o\'zi ham «o\'quvchi» bo\'lishi kerak. *Burnout ichki resurslar tugashi bilan boshlanadi.*' },

    { t: 'photo', layout: 'split', color: 'orange', img: '/assets/daftar.jpg', focus: 'center', k: 'Refleksiya', h: 'Har kuni 5–10 daqiqa refleksiya yozuvi: *3 savol*', items: [
      'Bugun nima yaxshi o\'tdi? — eng muhim, birinchi yozing.',
      'Qayerda qiynaldim?',
      'Ertaga nimani boshqacha qilaman?',
      'Kichkina hiyla: birinchi qismni boshqa ruchkada yozing — «Men shu narsani uddaladim.» *Refleksiya — kuyishning eng kuchli antitezasi.*'
    ], all: true },

    { t: 'circles', color: 'green', k: '«Chegara qo\'yish» mashqi', h: 'Men nimaga *javobgarman*? Nimaga javobgar emasman?', s: 'Chegara qo\'yish — xudbinlik emas, o\'zini asrash san\'atidir.', rings: [
      { label: 'MA\'NAVIY', short: '✨', h: 'Maqsadga qaytish', p: '«Nima uchun men ustozman?»' },
      { label: 'EMOTSIONAL', short: '💛', h: 'Ichni bo\'shatish', p: 'Suhbat, yozish (ikki xil suhbatdosh)' },
      { label: 'JISMONIY', short: '🏃', h: 'Tanaga e\'tibor', p: 'Uyqu, yurish, dam olish' }
    ] },

    { t: 'big', color: 'red', icon: '🏛️', k: 'Tizim mas\'uliyati', h: 'Burnout — individual muammo emas. Bu *tizim* muammosi.', s: 'Maktab va jamiyat ustoz uchun adolatli yuk yaratishi kerak: bir ustozga ortiqcha vazifa yuklamaslik. «Ustoz jarohatlanishi mumkin, lekin aslo o\'lmasligi kerak.»' },

    { t: 'vs', color: 'orange', icon: '🪤', k: 'Ogohlik · mukammallik tuzog\'i', h: 'Kelajakdagi «men» doim *kuchliroq* deb tasavvur qilinadi', a: { icon: '💥', h: 'Xato formula', tone: 'bad', q: '«Agar o\'qisam, mukammal qilishim kerak.»', items: ['Ko\'p vaqt + katta kuch → burnoutga salom'] }, b: { icon: '🐢', h: 'To\'g\'ri formula', tone: 'good', items: ['Kichik, lekin doimiy harakat → parvoz'] }, all: true, note: '«Ideal boshlash» emas. *«Kamroq, lekin doimiy»* — ha.' },

    { t: 'steps', color: 'blue', icon: '🤝', k: 'Usul · Korczak yondashuvi', h: 'Chegara va hurmat orqali *tiklanish*', all: true, items: [
      { n: '🏛️', h: 'Bolalar parlamenti', p: 'Bolalar o\'z masalalarini o\'zlari hal qiladi' },
      { n: '📜', h: 'O\'zini boshqarish tizimi', p: 'Sinf qoidalarini bolalar bilan birga belgilash' },
      { n: '⚖️', h: 'Mas\'uliyatni bo\'lishish', p: 'Hamma yukni ustoz yolg\'iz ko\'tarmaydi' }
    ], note: 'Ustoz yukni dastlab o\'quvchilardan olib, o\'zi ko\'tarishi kerak, keyin esa ularga oz-ozdan qaytarib berishi. *Ustoz yolg\'iz qahramon emas, u jarayonni boshqaruvchi.*' },

    { t: 'flow', color: 'green', icon: '🌿', k: 'Usul · Montessori yondashuvi', h: 'Nazoratni *qo\'yib yuborish* orqali tiklanish', items: ['🎛️ Qat\'iy nazorat', '🌪️ Inqiroz', '🏗️ Muhitni tashkil qilish', '👁️ Ustoz kuzatuvchi'], all: true, note: 'Charchoq, qarshilik, natijasizlik → radikal qaror: muhitni tashkil qilish → ustoz kuzatuvchiga aylanadi. Hamma narsani nazorat qilish ustozni charchatadi. *Muhit yaratish ozod qiladi.*' },

    { t: 'grid', color: 'orange', icon: '💛', k: 'Xulosa', h: 'Sevgi orqali xizmat qiling, *o\'zingizni yo\'qotmasdan*', cols: 4, items: [
      { icon: '❤️', h: 'To\'lib turing', p: 'Bo\'sh idishdan beriladigan xizmat — charchoq' },
      { icon: '⚖️', h: 'Chegara qo\'ying', p: 'Mehrli, lekin chegarali — professional kuch' },
      { icon: '✍️', h: 'Refleksiya qiling', p: 'Har kuni 5–10 daqiqa o\'zingiz bilan' },
      { icon: '⭐', h: 'Tizimga aylantiring', p: 'Kichkina, lekin doimiy — mukammaldan emas' }
    ], note: '*Yaxshi ustoz — charchamagan ustoz emas. Yaxshi ustoz — o\'zini asray oladigan ustoz.*' },

    { t: 'tree', color: 'blue', k: 'Sintez · uchchala yo\'l', h: 'Uchta buyuk pedagog — *uchta tiklanish formulasi*', s: 'Sizni charchatayotgan narsa ishning o\'zimi yoki sizning ishlash usulingizmi?', root: { icon: '🔋', label: 'Tiklanish' }, kids: [{ icon: '📚', label: 'Dewey' }, { icon: '🤝', label: 'Korczak' }, { icon: '🌿', label: 'Montessori' }], items: [
      'Dewey · ma\'noni qayta topish: ta\'lim — hayotning o\'zi. O\'qish — oziqlanish.',
      'Korczak · yukni bo\'lishish: bolalar bilan mas\'uliyat — ustozning donoligi.',
      'Montessori · nazoratni kamaytirish: boshqaruvchi emas, kuzatuvchi bo\'lish.'
    ] },

    { t: 'photo', layout: 'full', color: 'green', img: '/assets/d6-tabiat.jpg', focus: 'center', k: 'Eslab qoling', h: 'Ustoz jarohatlanishi mumkin, lekin aslo *o\'lmasligi* kerak.', s: 'To\'lib turing · chegara qo\'ying · refleksiya qiling · kichik, lekin doimiy.' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '8-modul yakunlandi · Keyingi: 9-modul — Ustozlikdan tadbirkorlikka' }
  ]
};

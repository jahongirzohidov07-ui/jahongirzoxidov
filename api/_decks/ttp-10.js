'use strict';
/* TTP · 10-modul: Ustozning shaxsiy rivojlanishi */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*10-modul* · Ustozning shaxsiy rivojlanishi', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/d7-kutubxona.jpg', focus: 'center', k: '10-modul', h: '«O\'qituvchi o\'qishni to\'xtatsa, *o\'qitishni* to\'xtatadi»', s: 'Ustozning shaxsiy rivojlanishi' },

    { t: 'steps', color: 'green', icon: '🌍', k: '01', h: 'Nima uchun ustoz o\'zini *rivojlantirishi* kerak?', all: true, items: [
      { n: '🌍', h: 'Dunyo o\'zgarmoqda', p: 'Yangi avlod, yangi texnologiyalar: eski usullar yetmaydi.' },
      { n: '🪞', h: 'Ustoz — ibrat', p: 'Shogird o\'qishni emas, o\'qituvchini kuzatadi va undan o\'rganadi.' },
      { n: '📈', h: 'Sifat = rivojlanish', p: 'Tinmay o\'sgan ustozning darslari ham tinmay yaxshilanadi.' }
    ] },

    { t: 'quote', color: 'orange', k: 'Pedagog faoliyatining eng yuqori bosqichi', q: 'Bu bosqichda ustoz bilim beruvchi shaxsdan jamiyat tafakkuriga ta\'sir qiluvchi shaxsga aylanishi lozim.', by: 'Shunchaki darsni yaxshi o\'tish emas' },

    { t: 'flow', color: 'blue', icon: '🕰️', k: 'Ustoz vazifasining tarixiy o\'zgarishi', h: 'Pedagogika tarixida ustozning vazifasi *asta-sekin o\'zgargan*', items: ['🏛️ Qadimgi davr: bilim egasi', '⛪ O\'rta asrlar: axloqiy yo\'l ko\'rsatuvchi', '📐 XX asr: metodika ustasi', '💡 XXI asr: fikr yetakchisi'], all: true },

    { t: 'steps', color: 'green', icon: '🌱', k: '03 · Shaxsiy rivojlanish nima?', h: 'O\'z bilim, ko\'nikma, xarakter va ichki dunyosini *muntazam takomillashtirib* borish', all: true, items: [
      { n: '🎯', h: 'Ongli', p: 'Tasodifiy emas, maqsadli harakat' },
      { n: '🔁', h: 'Muntazam', p: 'Bir martalik emas, doimiy jarayon' },
      { n: '🧩', h: 'Yaxlit', p: 'Bilim, ko\'nikma va xarakterni qamraydi' }
    ] },

    { t: 'circles', color: 'orange', k: '05 · Rivojlanishning 4 sohasi', h: 'Yaxlit rivojlangan ustoz — *to\'rt sohada* o\'sib boruvchi ustoz', rings: [
      { label: 'MA\'NAVIY', short: '✨', h: 'Ma\'naviy', p: 'Qadriyatlar, axloq, ichki dunyo, ibrat' },
      { label: 'HISSIY', short: '💛', h: 'Hissiy', p: 'EQ, o\'z-o\'zini boshqarish, empatiya' },
      { label: 'INTELLEKTUAL', short: '🧠', h: 'Intellektual', p: 'Bilim, fikr kengligi, o\'qish va o\'rganish' },
      { label: 'KASBIY', short: '🎓', h: 'Kasbiy', p: 'Pedagogik mahorat, metodika, mutaxassislik' }
    ] },

    { t: 'grid', color: 'blue', icon: '🎓', k: '1-soha · kasbiy rivojlanish', h: 'Pedagog sifatida *mahoratni oshirish* yo\'llari', cols: 4, items: [
      { icon: '📐', h: 'Metodika', p: 'Yangi pedagogik usullarni o\'rganib, darslarda sinab ko\'ring' },
      { icon: '🔬', h: 'Mutaxassislik', p: 'O\'z faningiz bo\'yicha chuqur va yangi bilimlarni egallang' },
      { icon: '🤝', h: 'Tajriba almashish', p: 'Hamkasblar bilan ish, ochiq darslar, mentorlik' },
      { icon: '💻', h: 'Texnologiya', p: 'Yangi platformalar, AI vositalari, raqamli savodxonlik' }
    ] },

    { t: 'stats', color: 'green', icon: '📚', k: '2-soha · intellektual rivojlanish', h: 'Kuniga *30 daqiqa* o\'qish', items: [
      { v: '30', l: 'daqiqa', s: 'kuniga' },
      { v: '12', l: 'kitob', s: 'yiliga' }
    ], note: 'Kitoblar (kasbga oid va umumiy adabiyot) · onlayn kurslar (Coursera, Udemy, mahalliy platformalar) · podkast va video (TED, YouTube, audio kitoblar) · tadqiqot (maqolalar, ilmiy ishlar, kuzatuv)' },

    { t: 'grid', color: 'orange', icon: '💛', k: '3-soha · hissiy intellekt (EQ)', h: 'Daniel Goleman bo\'yicha EQ ning *4 komponenti*', cols: 4, items: [
      { icon: '🪞', h: 'O\'z-o\'zini bilish', p: 'Hissiyotlarni payqash, kuchli va zaif tomonlarni anglash' },
      { icon: '🎛️', h: 'O\'z-o\'zini boshqarish', p: 'Stress, jahl, charchoqni nazoratda ushlay olish' },
      { icon: '👁️', h: 'Ijtimoiy ong', p: 'Empatiya: boshqalarning his-tuyg\'usini tushunish' },
      { icon: '🤝', h: 'Munosabatlarni boshqarish', p: 'Muloqot, nizolarni hal qilish, ilhomlantirish' }
    ] },

    { t: 'grid', color: 'red', icon: '✨', k: '4-soha · ma\'naviy-axloqiy rivojlanish', h: '«Ustozning eng katta darsi — uning *shaxsiyati*»', cols: 4, items: [
      { icon: '⚖️', h: 'Qadriyatlar', p: 'Halollik, adolat, mehr-shafqat' },
      { icon: '🙏', h: 'Axloq', p: 'Xulq-atvor, odob, hurmat' },
      { icon: '🎯', h: 'Niyat', p: 'Maqsad va ichki motivatsiya' },
      { icon: '🪞', h: 'Ibrat', p: 'So\'zda emas, amalda namuna' }
    ], note: '*Bola so\'zni emas, ibratni o\'rganadi.*' },

    { t: 'quote', color: 'blue', k: 'Ustozning maqsad manbayi', q: 'O\'quvchi tafakkurini shakllantirish, muhit yaratish va jamiyat uchun mas\'ul shaxsni tarbiyalash vazifasi bugun ustozning maqsad manbayi bo\'lishi kerak.' },

    { t: 'pyramid', color: 'green', k: 'Pedagogning kasbiy yetukligi', h: 'Uch *asosga* tayanadi', levels: [
      { icon: '🪞', label: 'Refleksiya', h: 'Poydevor', p: 'O\'z faoliyatini muntazam tahlil qilish va xulosa chiqarish' },
      { icon: '⚖️', label: 'Etik mas\'uliyat', h: 'O\'rta qatlam', p: 'Har bir qaror va xatti-harakatda axloqiy mas\'uliyatni his qilish' },
      { icon: '🧭', label: 'Yetakchilik', h: 'Cho\'qqi', p: 'O\'quvchi va jamoaga yo\'l ko\'rsata oladigan kuch' }
    ] },

    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/daftar.jpg', focus: 'center', k: 'Refleksiya — ustozning ichki laboratoriyasi', h: 'Yetuk pedagog *o\'ziga savol* beradi', items: ['Bugun sinf meni eshitdimi?', 'Qaysi joyda men xato qildim?', 'Qaysi o\'quvchi tushunmay qoldi?', 'Nega tushunmadi?'], all: true },

    { t: 'big', color: 'green', icon: '🧪', k: 'John Dewey', h: '«Biz tajribadan o\'rganmaymiz. Biz tajriba ustida *fikrlash* orqali o\'rganamiz.»', s: 'Ustozning rivojlanishi tajribadan emas, tajribani tahlil qilishdan boshlanadi.' },

    { t: 'quote', color: 'orange', k: 'Pedagogik etik me\'yorlar — ustozning ichki kompasi', q: 'Tarbiyachi har bir so\'zi, har bir harakati bilan tarbiyalaydi.', by: 'Demak ustozning darsi faqat 45 minut emas. Uning yurishi, gapirishi, sabr qilishi — hammasi tarbiya jarayoni' },

    { t: 'flow', color: 'red', icon: '🪶', k: 'Pedagogik noziklik', h: 'Ba\'zi ustozlar *shunday xato* qiladi', items: ['❌ Xato: sinf oldida o\'quvchini kamsitadi', '🧊 Natija: o\'quvchi bilimdan soviydi', '🪶 Yechim: pedagogik noziklik'], all: true, note: '*Pedagog shaxsni emas, xatti-harakatni tanqid qilishi lozim.*' },

    { t: 'vs', color: 'red', icon: '🎯', k: 'Shaxsni emas — xatti-harakatni tanqid qiling', h: 'Bu kichik farq *pedagogik etikani* belgilaydi', a: { icon: '❌', h: 'Noto\'g\'ri yondashuv', tone: 'bad', q: '«Sen dangasa bolasan.»', p: 'Shaxsiyatga zarba' }, b: { icon: '✅', h: 'To\'g\'ri yondashuv', tone: 'good', q: '«Bugun sen vazifani bajarmading, bu sening imkoniyatingga mos emas.»', p: 'Xatti-harakatga e\'tibor' }, all: true },

    { t: 'vs', color: 'blue', icon: '🧭', k: 'Jamoada yetakchilik', h: 'Kasbiy yetuk pedagog faqat sinfda emas, *jamoada ham* yetakchi', a: { icon: '📢', h: 'Buyruq berish emas', tone: 'bad', p: 'Lavozim bilan emas.' }, b: { icon: '🌟', h: 'Ta\'sir qilish', tone: 'good', p: 'Shaxsiyat va ibrat bilan.' }, all: true, note: 'Janusz Korczak: *«Bolalarni boshqarish emas, ularni tushunish kerak.»*' },

    { t: 'steps', color: 'green', icon: '🧭', k: 'Haqiqiy pedagog-yetakchi', h: 'Yetakchi pedagog *uchta narsani* qila oladi', all: true, items: [
      { n: '🤝', h: 'Jamoani birlashtira oladi' },
      { n: '🕊️', h: 'Nizoni keskinlashtirmaydi' },
      { n: '👁️', h: 'Vaziyatni tushunadi' }
    ], note: 'Asosiy xulosa: *haqiqiy yetakchi odamni emas, tizimni tuzatadi.*' },

    { t: 'flow', color: 'orange', icon: '🪜', k: 'Oddiy o\'qituvchidan ta\'sir kuchiga ega pedagogga o\'tish', h: 'Uch *bosqich*', items: ['📐 Darsni o\'rganadi: asosiy mahorat', '💛 Bolani tushuna boshlaydi: empatiya', '🌍 Jamiyatga ta\'sir qiladi: yetuk pedagog'], all: true, note: '*Kasbiy yetuklik — eng muhim o\'tish nuqtasi.*' },

    { t: 'quote', color: 'blue', k: 'Vasily Sukhomlinsky', q: 'Haqiqiy ustoz — bolalar qalbiga kirib bora olgan insondir.', by: 'Agar ustoz bolaga ta\'sir qila olsa, u ta\'lim tizimiga ta\'sir qiladi' },

    { t: 'vs', color: 'green', icon: '🔑', k: '«Bolalar qalbiga kirish»', h: 'Suxomlinskiy fikricha ustozning *asosiy vazifasi*', a: { icon: '📚', h: 'Bilim berish emas', tone: 'bad', p: 'Faqat fan emas.' }, b: { icon: '💛', h: 'Bolaning ichki dunyosini tushunish', tone: 'good', p: 'Qalbga yo\'l topish.' }, all: true, note: '«Bolaning qalbiga yo\'l topmagan pedagog uning ongiga ham yo\'l topa olmaydi.» *Pedagogika psixologiya va insoniyliksiz ishlamaydi.*' },

    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/t-bolalar2.jpg', focus: 'center', k: 'Pavlish qishlog\'idagi maktab', h: '«Yuzlab o\'quvchilar ichida *ikki bir xil bola* yo\'q.»', s: 'Demak pedagog bitta metod bilan hamma bolaga ta\'lim bera olmaydi.' },

    { t: 'vs', color: 'red', icon: '🤝', k: 'Tarbiya — ishonch orqali bo\'ladi', h: '«Bola ustozga ishonsa, tarbiya boshlanadi.» Agar bola ustozdan *qo\'rqsa*:', a: { icon: '👀', h: 'Tashqi ko\'rinish', tone: 'neutral', q: 'Vaqtincha intizomli bo\'ladi' }, b: { icon: '🫥', h: 'Ichki haqiqat', tone: 'bad', q: 'Ichki rivojlanish bo\'lmaydi' }, all: true },

    { t: 'steps', color: 'green', icon: '🏫', k: 'Pedagog — ruhiy muhit yaratuvchi', h: '«Maktab — bu bilim fabrikasi emas, *insoniy muhitdir*»', all: true, items: [
      { n: '📚', h: 'Kitobxonlik muhiti' }, { n: '🎨', h: 'Estetik muhit' }, { n: '🙏', h: 'Hurmat muhiti' }
    ], note: 'Shuning uchun u maktabda uchta muhitni yaratishga harakat qilgan.' },

    { t: 'steps', color: 'blue', icon: '👁️', k: 'Pedagogning shaxsiyati — eng katta metod', h: '«Bolalar pedagogni tinglamaydi, ular pedagogni *kuzatadi*»', all: true, items: [{ n: '🗣️', h: 'Qanday gapiradi' }, { n: '🤝', h: 'Qanday muomala qiladi' }, { n: '⚖️', h: 'Qanday adolatli' }], note: 'Esda qolishi kerak: *har bir qiyin bola — noto\'g\'ri yo\'naltirilgan kuchdir.*' },

    { t: 'section', color: 'orange', icon: '🧰', n: '3', h: 'Bugungi ustozning metodlari', s: 'Reflektiv kundalik · 360° kuzatuv · Empatik muloqot' },

    { t: 'steps', color: 'orange', icon: '📓', k: '1-metod · reflektiv kundalik', h: 'Har kuni o\'ziga *3 ta savol* yozadi', all: true, items: [
      { n: '1', h: 'Bugun nimani yaxshi qildim?' },
      { n: '2', h: 'Nimani yaxshilash mumkin?' },
      { n: '3', h: 'Qaysi o\'quvchi e\'tibordan chetda qoldi?' }
    ], note: 'Bu metod dunyoning ko\'plab ta\'lim tizimlarida ishlatiladi.' },

    { t: 'tree', color: 'blue', k: '2-metod · 360° pedagogik kuzatuv', h: 'Ustoz faoliyatini baholashda *3 manba* fikri', s: 'Bu usul pedagogni yopiq tizimdan ochiq tizimga olib chiqadi.', root: { icon: '👩‍🏫', label: 'Ustoz' }, kids: [{ icon: '🧒', label: 'O\'quvchi fikri' }, { icon: '💼', label: 'Hamkasb fikri' }, { icon: '🧑‍💼', label: 'Rahbar fikri' }], items: [
      'O\'quvchi — bevosita ta\'sirni his qiluvchi.',
      'Hamkasb — kasbiy nuqtai nazardan.',
      'Rahbar — strategik baholash.'
    ] },

    { t: 'quote', color: 'green', k: '3-metod · empatik muloqot', q: 'Senga nima qiyin bo\'lyapti?', by: 'Mana shu savol pedagogik muhitni o\'zgartiradi. O\'quvchi ko\'pincha tushunilmagani uchun qarshilik qiladi' },

    { t: 'vs', color: 'orange', icon: '🔋', k: 'Kasbidan yana ma\'no topish', h: 'Pedagogning eng katta muammosi — kasbiy charchoq. Yetuklik bosqichida ustoz *yana ma\'no topadi*', a: { icon: '📉', h: 'Emas', tone: 'bad', q: '«Men dars o\'tmayapman»' }, b: { icon: '🌱', h: 'Balki', tone: 'good', q: '«Men inson shakllantiryapman»' }, all: true, note: '*Shu fikr pedagogning butun kasbiy hayotini o\'zgartiradi.*' },

    { t: 'duel', color: 'red', k: 'Esda saqlang', h: 'Ustozning *eng katta quroli*', a: { icon: '📚', h: 'Bilim', p: 'Darsni ko\'p odam o\'tadi.', tag: 'Kerak, lekin yetarli emas' }, b: { icon: '💫', h: 'Ta\'sir', p: 'Qalbni uyg\'otadigan ustoz kam.', tag: 'Eng katta qurol' }, prize: '💫', prizeLabel: 'Ta\'sir', winner: 'b', note: '«Pedagogning buyukligi uning bilimida emas, *bolaning qalbiga kirib bora olishida.*»' },

    { t: 'matrix', color: 'blue', k: '10 · O\'z-o\'zini tahlil qilish · SWOT', h: 'Rivojlanish *o\'zingni bilishdan* boshlanadi', corner: 'SWOT', cols: [{ icon: '➕', h: 'Foydali' }, { icon: '➖', h: 'Zararli' }], rows: [{ icon: '🪞', h: 'Ichki omillar' }, { icon: '🌍', h: 'Tashqi omillar' }], cells: [
      [{ a: 'S · Kuchli tomonlar', la: 'Qaysi sohada men kuchliman? Nimada ishonchim bor?', tone: 'good', best: true }, { a: 'W · Zaif tomonlar', la: 'Qaysi joyda men nochorman? Nimani o\'rganishim kerak?', tone: 'bad' }],
      [{ a: 'O · Imkoniyatlar', la: 'Atrofda qanday imkoniyatlar bor? Kim mendan o\'rganishi mumkin?', tone: 'free' }, { a: 'T · Tahdidlar', la: 'Qaysi to\'siqlar mavjud? Nima rivojlanishimga xalaqit beradi?', tone: 'neutral' }]
    ], items: [
      'Kuchli tomon — rivojlantiring va ishlating.',
      'Zaif tomon — o\'rganish rejasiga kiriting.',
      'Imkoniyat — birinchi qadamni bugun qo\'ying.',
      'Tahdid — oldindan tayyorlaning.'
    ] },

    { t: 'grid', color: 'green', icon: '🌅', k: '11 · Muvaffaqiyatli ustozning kunlik odatlari', h: 'Katta o\'zgarishlar *kichik kunlik amallardan* tug\'iladi', cols: 4, items: [
      { icon: '🌅', h: 'Ertalabki rejalashtirish', p: 'Kunni 10 daqiqa rejalashtirib boshlang' },
      { icon: '📚', h: '30 daqiqa o\'qish', p: 'Har kuni kasbiy yoki umumiy adabiyot' },
      { icon: '🪞', h: 'Refleksiya', p: 'Kun yakunida «Bugun nima o\'rgandim?»' },
      { icon: '🏃', h: 'Sport va salomatlik', p: 'Tana salomat — ong tetik' },
      { icon: '💬', h: 'Muloqot', p: 'Ustozlar va shogirdlar bilan suhbat' },
      { icon: '🧩', h: 'Yangi ko\'nikma', p: 'Haftada 1 yangi narsani sinab ko\'ring' },
      { icon: '😴', h: 'Dam olish', p: 'Sifatli uyqu va tiklanish vaqti' },
      { icon: '✍️', h: 'Yozish', p: 'Kundalik, blog, qaydlar — fikrni tartibga soladi' }
    ] },

    { t: 'matrix', color: 'orange', k: '12 · Vaqtni boshqarish', h: 'Eyzenxauer matritsasi: *muhim × shoshilinch*', corner: 'Muhim ↓ · Shoshilinch →', cols: [{ icon: '🔥', h: 'Shoshilinch' }, { icon: '🕰️', h: 'Shoshilinch emas' }], rows: [{ icon: '⭐', h: 'Muhim' }, { icon: '▫️', h: 'Muhim emas' }], cells: [
      [{ a: 'Bajar', la: 'Muddati bugun bo\'lgan dars rejasi', tone: 'bad' }, { a: 'Rejalashtir', la: 'Kasbiy o\'qish, malaka oshirish', tone: 'good', best: true }],
      [{ a: 'Topshir', la: 'Boshqalar bajarishi mumkin bo\'lgan ish', tone: 'free' }, { a: 'Olib tashla', la: 'Vaqtni o\'g\'irlovchi mashg\'ulotlar', tone: 'neutral' }]
    ], items: [
      '*Bajar* — muhim va shoshilinch.',
      '*Rejalashtir* — muhim, shoshilinch emas. Rivojlanish shu katakda.',
      '*Topshir* — shoshilinch, lekin muhim emas.',
      '*Olib tashla* — na muhim, na shoshilinch.'
    ] },

    { t: 'table', color: 'red', icon: '🧗', k: '13 · To\'siqlar va ularni yengish', h: 'Har bir to\'siqning *yechimi* bor', head: ['To\'siq', 'Yechim'], rows: [
      ['Vaqt yo\'q', 'Kuniga 15–30 daqiqa ajrating: kichik qadamlar ham natija beradi'],
      ['Charchoq va kuyish', 'Sifatli dam, sport, hayotning pedagogikadan tashqari sohalari'],
      ['Motivatsiya pasayishi', 'Maqsadni eslatib turish, kichik g\'alabalarni qayd eting'],
      ['«Men hammasini bilaman»', 'Kamtarlik: yangi shogirddan ham o\'rganish mumkin'],
      ['Qo\'rquv va shubha', 'Birinchi qadam qo\'rqinchli, keyingisi osonroq']
    ] },

    { t: 'photo', layout: 'full', color: 'green', img: '/assets/t-nihol.jpg', focus: 'center', k: 'Kurs yakuni', h: 'Berolgan narsamga *mingdan ming* roziman.', s: 'Nimadir berolmaganimga siz rozi bo\'ling!' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: 'TTP · Ustozlik psixologiyasi kursi yakunlandi · 10 modul' }
  ]
};

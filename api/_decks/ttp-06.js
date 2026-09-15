'use strict';
/* TTP · 6-modul: Ustozning muloqot psixologiyasi */
module.exports = {
  slides: [
    { t: 'title', k: 'TTP · Ustozlik psixologiyasi · 6-modul', h: 'Ustozning muloqot psixologiyasi', s: 'Bola, ota-ona va hamkasblar bilan samarali muloqot san\'ati', meta: 'Jahongir Zoxidov' },

    { t: 'steps', k: 'Bugun nimalarni o\'rganamiz?', h: 'Uch yo\'nalish', items: [
      { h: 'Bola bilan muloqot', p: 'Ishonch, empatiya va faol tinglash orqali bola bilan sog\'lom aloqa qurish' },
      { h: 'Ota-ona bilan muloqot', p: 'Hamkorlik, shaffoflik va nozik suhbatlarni olib borish mahorati' },
      { h: 'Hamkasb va boshliqlar', p: 'Jamoaviy ruh, konfliktlarni hal qilish, professional chegaralar' }
    ], note: '*So\'z — ustozning eng kuchli quroli.*' },

    { t: 'grid', k: 'Inson temperament turlari', h: 'Har bir bola o\'ziga xos: temperamentini tushunish muloqot kalitidir', cols: 2, items: [
      { icon: 'X', h: 'Xolerik', p: 'Jo\'shqin va jur\'atli. Tez qaror qabul qiladi, yetakchi. Sabrsiz, tez jahli chiqadi. Raqobatni yaxshi ko\'radi.' },
      { icon: 'F', h: 'Flegmatik', p: 'Sokin, bosiq va mehnatkash. Sekin reaksiya qiladi, lekin qat\'iy va ishonchli hamroh.' },
      { icon: 'S', h: 'Sangvinik', p: 'Quvnoq, faol va muloqotchan. Tez his qiladi, tez sovuydi. Tez moslashadi, ko\'p do\'st orttiradi.' },
      { icon: 'M', h: 'Melanxolik', p: 'Sezgir va chuqur his qiluvchi. Tez ranjiydi, ichki dunyosi boy, ijodkor tabiatli.' }
    ] },

    { t: 'vs', k: 'O\'yin: «Temperamentlar jangi»', h: 'Qoidalar: 5 daqiqa tayyorgarlik, 10 daqiqa jang', a: { h: 'Xoleriklar yutadi, agar', tone: 'gold', items: ['Hamma o\'z temperamentiga ko\'ra 4 guruhga bo\'linadi', 'Xoleriklar flegmatiklarga «hujum» qiladi', '10 daqiqa ichida flegmatikdan «yo\'q» degan so\'zni ololsalar'] }, b: { h: 'Flegmatiklar yutadi, agar', tone: 'good', items: ['Bosiqlikni yo\'qotmasa', 'Javob berishda saqlanib qolsa', '10 daqiqa davomida «yo\'q» degan so\'zni aytmasa'] }, note: 'Maqsad: har bir temperament xususiyatlarini *amalda his qilish.*' },

    { t: 'vs', k: 'Daniel Kahneman · «Thinking, Fast and Slow»', h: 'Ikki tafakkur tizimi', a: { h: 'System 1 · tez', tone: 'bad', items: ['Tez ishlaydi, hissiyotga asoslanadi', 'O\'ylamasdan qaror qiladi, avtomatik', 'Kimdir baland gapirdi → jahlingiz chiqdi', 'O\'quvchi e\'tiroz qildi → darhol himoyalandingiz', 'Ota-ona tanqid qildi → ichingizda qarshilik'] }, b: { h: 'System 2 · sekin', tone: 'good', items: ['Sekin ishlaydi, mantiqqa asoslanadi', 'Vaziyatni tahlil qiladi, qarorni ongli qabul qiladi', '«To\'xta, u nega bunday gapiryapti?»', '«Bu yerda hissiyot bor, darhol javob bermay»', '«Qanday qilib vaziyatni yumshatsam bo\'ladi?»'] }, note: 'System 1 — «instinktiv ong», System 2 — «nazorat qiluvchi ong».' },

    { t: 'steps', k: 'Konflikt paytida hamma System 1 da', h: 'Uch tomon, uch avtomatik reaksiya', all: true, items: [
      { n: 'O\'quvchi', h: '«Siz adolatsizsiz!»' },
      { n: 'Ota-ona', h: '«Qanday gap bu?!»' },
      { n: 'Ustoz', h: '«Sen o\'zing harakat qil!»' }
    ], note: 'Natija: *konflikt kuchayadi, muammo boshlanadi.*' },

    { t: 'big', k: 'Ustozning ichki holati', h: 'Ustoz ichidan notinch bo\'lsa, eng yaxshi metodikani ham *konfliktga* aylantiradi.', s: 'Agar ichidan sokin bo\'lsa, eng og\'ir vaziyatni ham yumshata oladi.' },

    { t: 'steps', k: 'Muloqotning ichki ta\'siri', h: 'Har bir so\'z uchta sohada iz qoldiradi', items: [
      { h: 'Bolaga ta\'sir', p: 'O\'z-o\'ziga ishonch, motivatsiya, hissiy xavfsizlik, bilimga qiziqish' },
      { h: 'Ota-onaga ta\'sir', p: 'Ishonch hissi, hamkorlik istagi, ustozga hurmat, ochiq suhbat' },
      { h: 'Jamoaga ta\'sir', p: 'Jamoaviy ruh, hurmat muhiti, samarali ish, kam konflikt' }
    ] },

    { t: 'section', n: 'II', h: 'Ustoz ↔ Bola', s: 'Bolaning qalbiga kalit bo\'ladigan muloqot' },

    { t: 'ask', k: 'Ustoz va shogird munosabati', h: 'Munosabat eng yaxshi ko\'rinishda bo\'lganda nima bo\'ladi? Eng yomonida-chi?', s: 'Javob ikkalasida ham bitta: ustoz va shogird bo\'ladi. Farq — qanday ustoz va qanday shogird.' },

    { t: 'vs', k: 'Muloqot — bu boshqaruv vositasi', h: 'Muloqot nima?', a: { h: 'Ko\'pchilik nima deb o\'ylaydi', tone: 'neutral', q: 'Muloqot — bu shunchaki «gaplashish».' }, b: { h: 'Aslida esa', tone: 'gold', q: 'Muloqot — bu ta\'sir o\'tkazish san\'ati.' } },

    { t: 'quote', k: 'Birinchi burilish nuqtasi', q: 'Odamlar sizning haq ekanligingizni emas, ularni tushunganingizni his qilishni xohlashadi.', by: 'Siz haq bo\'lishingiz mumkin. Lekin qarshingizdagini tushunmasangiz, siz yutqazasiz' },

    { t: 'big', k: 'Konfliktning asl sababi', h: 'Konfliktning asl sababi fakt emas, balki *hissiyot.*', s: 'Fakt bilan bahslashish osmondagi bulutga tosh otish bilan barobar. Hissiyotni tushunmasangiz, hech narsa o\'zgarmaydi.' },

    { t: 'quote', k: 'Daniel Goleman · «Emotional Intelligence»', q: 'Inson qarorlarining katta qismi ratsional emas, hissiy asosda qabul qilinadi.', by: 'Shuning uchun ustoz uchun emotsional intellekt metodikadan ham muhim' },

    { t: 'table', k: 'Ta\'lim muhitida', h: 'Har kim hissiy darajada reaksiya bildiradi', head: ['Kim', '…ga emas', '…ga reaksiya bildiradi'], rows: [
      ['Ota-ona', 'faktga', 'farzandining qadriyatiga'],
      ['O\'quvchi', 'bahoga', 'o\'z qadriga'],
      ['Hamkasb', 'fikrga', 'hurmatga']
    ], note: 'Fakt esa ikkinchi o\'rinda.' },

    { t: 'big', k: 'Xulosa: konflikt nima?', h: 'Konflikt — ma\'lumot to\'qnashuvi emas. Bu *qadriyat va hissiyot* to\'qnashuvi.', s: 'Shuning uchun faktlar bilan yechib bo\'lmaydi, hissiyotni tushunish kerak.' },

    { t: 'flow', k: 'Pedagogik yechim · 2 qatlamli muloqot modeli', h: 'Uch bosqichli usul', items: ['Hissiyotni aniqlash', 'Hissiyotni tan olish', 'Faktga o\'tish'], note: 'Ustoz ichidan savol beradi: «Bu odam nimadan xavotirda?» → «Siz uchun muhim ekanini ko\'ryapman» (Carl Rogers) → «Keling, vaziyatni birga ko\'ramiz».' },

    { t: 'steps', k: '1-bosqich', h: 'Hissiy qatlamni aniqlash: «Bu odam nimadan xavotirda?»', items: [
      { h: 'Ota-ona', p: 'Farzandi kelajagi' },
      { h: 'O\'quvchi', p: 'O\'z qadrini yo\'qotish' },
      { h: 'Hamkasb', p: 'Hurmat yo\'qolishi' }
    ], note: 'Har bir insonning yashirin xavotiri bor.' },

    { t: 'steps', k: '2-bosqich · Carl Rogers', h: 'Hissiy qatlamni tan olish: «Tushunilgan inson qarshilikni kamaytiradi»', items: [
      { h: '«Siz bolangiz uchun xavotirdasiz»', p: 'Uni mas\'uliyatli odam deb tan olasiz' },
      { h: '«Bu siz uchun muhim ekanini ko\'ryapman»', p: 'Hissiyotini qayta nomlab berasiz' }
    ], note: 'Bu usul konfliktni *50% ga* pasaytiradi.' },

    { t: 'steps', k: '3-bosqich', h: 'Faktga o\'tish: endi ustoz vaziyatni birga hal qilishga taklif etadi', items: [
      { h: '«Keling, vaziyatni birga ko\'ramiz»', p: 'Hamkorlikka chaqirish' },
      { h: '«Bu yerda qanday yordam bera olishimiz mumkin?»', p: 'Yechim izlashga chaqirish' }
    ], note: 'Endi fakt qabul qilinadi, chunki hissiyot allaqachon tan olingan. *Tartib: 1) Aniqla → 2) Tan ol → 3) Fakt*' },

    { t: 'vs', k: 'Egoning ozuqasi', h: 'Har bir insonning egosiga ozuqa kerak', a: { h: 'Ongli inson', tone: 'good', items: ['Bilib ozuqasini oladi', 'Ehtiyojini anglaydi va sog\'lom yo\'l bilan to\'ldiradi'] }, b: { h: 'Ongsiz inson', tone: 'bad', items: ['Bilmay olib qo\'yadi', 'Boshqalarga zarar yetkazib egosiga ozuqa oladi'] }, note: 'Farqi anglashda: ehtiyojni ko\'rgan inson boshqani ranjitmaydi. Savol: *men egomga ozuqani qaysi yo\'l bilan olyapman?*' },

    { t: 'flow', k: 'Metodik texnika', h: 'Hissiyot → Tushunish → Fakt', items: ['«Siz xafa bo\'lganga o\'xshaysiz»', '«Bu siz uchun muhimligini tushunyapman»', '«Endi baholash mezonini birga ko\'rib chiqamiz»'], note: 'Bu pedagogik mahorat: *avval qalbga, keyin aqlga murojaat.* Faktni boshlamasdan oldin hissiyot tan olinishi shart.' },

    { t: 'table', k: 'Texnika amaliyotda', h: 'Bahodan norozi o\'quvchi bilan suhbat', head: ['Kim', 'Gap'], rows: [
      ['O\'quvchi', '«Siz meni atay past baholaysiz!»'],
      ['Ustoz', '«Sizga bu adolatsiz tuyulyaptimi?»'],
      ['Ustoz', '«Demak, siz o\'zingizni ko\'proq bahoga loyiq deb his qilyapsiz»'],
      ['Ustoz', '«Keling, ishni birga ko\'rib chiqamiz»']
    ], note: 'Natija: o\'quvchi ochiladi, himoya kamayadi, dialog boshlanadi. *Hujum emas, hamkorlik.*' },

    { t: 'flow', k: 'Amaliy formula', h: 'System 1 ga tushmaslikning oddiy yo\'li: javobdan oldin pauza', items: ['Stimulus (gap, e\'tiroz)', 'Pauza (1–2 soniya)', 'Javob (ongli)'], note: '«Senga shunday tuyulyaptimi?» — shu bitta savol bilan vaziyat 50% yumshaydi. *Pauza — System 1 dan System 2 ga o\'tish ko\'prigi.*' },

    { t: 'vs', k: 'Nonviolent Communication · eshitish kuchi', h: 'Eshitish hamkorlikning, eshitmaslik qarshilikning ildizi', a: { h: 'Har qanday inson', tone: 'neutral', items: ['Eshitilmasa — himoya qiladi', 'Eshitilsa — hamkorlik qiladi'] }, b: { h: 'Ustoz uchun', tone: 'gold', items: ['Gapni eshitsa — bahslashadi', 'Hissiyotni eshitsa — boshqaradi'] }, note: 'Eng yaxshi ustoz hissiyotlarni to\'g\'ri payqay olgan ustoz. *Hissiyot — o\'quvchining ehtiyoji haqidagi xabar.*' },

    { t: 'steps', k: '«3 soniya qoidasi»', h: 'Har qanday keskin vaziyatda uch oddiy qadam', items: [
      { h: 'Darhol javob bermaysiz', p: 'Birinchi reaksiyani to\'xtating' },
      { h: '3 soniya ichida nafasni boshqarasiz', p: 'Chuqur nafas: System 2 yoqiladi' },
      { h: 'Keyin gapirasiz', p: 'Endi javob ongli bo\'ladi' }
    ], note: '3 soniya — o\'zingiz uchun, o\'quvchi uchun va vaziyat uchun sovg\'a.' },

    { t: 'steps', k: '«Ichki savol texnikasi»', h: 'O\'zingizga ichkaridan ikki savol', all: true, items: [
      { n: '?', h: 'Boshqaga qaratilgan', p: '«Bu odam nimani his qilyapti?» — empatiya' },
      { n: '?', h: 'O\'ziga qaratilgan', p: '«Men hozir reaksiyadamanmi yoki boshqarayapmanmi?» — o\'z-o\'zini kuzatish' }
    ], note: 'Bu savollar ongli idrokka o\'tish kaliti.' },

    { t: 'vs', k: 'Qurbonmisiz yoki boshqaruvchimisiz?', h: 'Qaysi tizim bilan yashayotganingiz natijani belgilaydi', a: { h: 'System 1 · avtomatik, his', tone: 'bad', q: 'Qurbon', items: ['Vaziyat boshqaradi', 'Yutqizasiz'] }, b: { h: 'System 2 · ongli, tahlil', tone: 'good', q: 'Boshqaruvchi', items: ['Vaziyatni siz boshqarasiz', 'Yutasiz'] }, note: 'Tanlov har lahzada: qaysi tizim bilan javob berishni bilib turish.' },

    { t: 'flow', k: '3 bosqichli professional muloqot modeli', h: 'Ustozning vaziyatni boshqarish algoritmi', items: ['Tinglash: reaksiya emas, idrok', 'Nomlash: hissiyotga nom berish', 'Yo\'naltirish: muloqotni boshqarish'], note: 'Tartib qat\'iy: avval tinglash, keyin nomlash, oxirida yo\'naltirish.' },

    { t: 'vs', k: 'Bosqich 1', h: 'Tinglash: reaksiya emas, idrok', a: { h: 'Nazariy asos · Carl Rogers', tone: 'neutral', q: '«Aktiv tinglash»', p: 'Tinglash — javob kutish emas, ehtiyojni eshitish. Bu psixoterapiya va pedagogikaning asosi.' }, b: { h: 'Amaliyot', tone: 'good', items: ['Gapni bo\'lmaslik', 'Ichidan javob tayyorlamaslik', 'Odamni «tushunishga harakat qilish»'] }, note: '80% ustoz aynan shu joyda yiqiladi. *Tinglash — jim turish emas, javob bermay turib idrok qilish.*' },

    { t: 'vs', k: 'Bosqich 2', h: 'Nomlash: hissiyotga nom berish', a: { h: 'Psixologik asos', tone: 'neutral', p: 'Hissiyot nomlanganda insonning himoya mexanizmi pasayadi. Bu psixologiyada juda kuchli vosita.' }, b: { h: 'Misol iboralar', tone: 'gold', items: ['«Siz xavotirdasiz, to\'g\'rimi?»', '«Bu sizni ranjitganini tushunyapman»'] }, note: 'Tan olish — kelishish emas. *Hissiyotni eshitish — kelishuv ko\'prigi.*' },

    { t: 'vs', k: 'Bosqich 3', h: 'Yo\'naltirish: bahslashuvchi emas, rahbar', a: { h: 'Ustozning roli', tone: 'neutral', items: ['Bahslashuvchi → Rahbar'] }, b: { h: 'Misol iboralar', tone: 'gold', items: ['«Keling, birga yechim topamiz»', '«Bu yerda ikki tomonni ham hisobga olishimiz kerak»'] }, note: 'Yo\'naltirish — boshqarish, hukmronlik emas. *«Birga» so\'zi kalit.*' },

    { t: 'vs', k: 'Sokinlik — tug\'ma emas, mashq qilinadigan ko\'nikma', h: '«Xarakterim shunaqa» — noto\'g\'ri tushuncha', a: { h: 'Mif', tone: 'bad', q: '«Men tez jahlim chiqadi, xarakterim shunaqa»' }, b: { h: 'Kahneman', tone: 'good', items: ['Tez reaksiya — instinkt', 'Sekin javob — ongli tanlov'] }, note: 'Demak: *sokinlik = mashq.* Har bir ongli javob keyingi javobni osonlashtiradi.' },

    { t: 'vs', k: '«Trigger xaritasi»', h: 'Trigger nima o\'zi va u sizni qanday boshqaradi?', a: { h: 'Trigger — bu emas', tone: 'bad', items: ['Tashqi gap yoki vaziyat emas'] }, b: { h: 'Trigger — bu shu', tone: 'gold', items: ['Sizning ichingizdagi «tez yonadigan nuqta»', 'Trigger → System 1 yoqiladi → hissiyot boshqaradi'] }, note: 'Triggerni bilmasa — u boshqariladi. Triggerni tushunsa — u boshqaradi. *Trigger o\'tmishdan signal: nomlay olsangiz, kuchini sindirasiz.*' },

    { t: 'steps', k: 'Muloqotdagi 4 ta eng katta xato', h: 'Har bir xato — System 1 da qabul qilingan reaksiyaning natijasi', items: [
      { n: '✕', h: 'Darhol o\'zini himoya qilish', p: '«Men to\'g\'ri qildim!»' },
      { n: '✕', h: 'Ovoz balandlatish', p: 'Bu nazoratni yo\'qotish belgisi' },
      { n: '✕', h: 'Odamni emas, muammoni ko\'rmaslik', p: '«Bu ota-ona qiyin ekan» (xato yondashuv)' },
      { n: '✕', h: 'Hissiyot bilan qaror qilish', p: 'Keyin pushaymon bo\'linadi' }
    ] },

    { t: 'table', k: 'So\'z tanlash psixologiyasi', h: '«Sen-xabari» (ayblov) → «Men-xabari» (his-tuyg\'u)', head: ['✕ Sen-xabari', '✓ Men-xabari'], rows: [
      ['«Sen jahlimni chiqarding!»', '«Bunday qilganingda men xafa bo\'laman.»'],
      ['«Sen yana dars tayyorlamabsan!»', '«Men sening o\'sishingdan xavotirdaman.»'],
      ['«Sen doim shunday qilasan!»', '«Men bu holat takrorlanganini sezyapman.»']
    ], note: 'Taqiqlangan iboralar: «Tentak!», «Hech narsaga yaramaysan!», «Sen hech qachon…», «Yana sen?!»' },

    { t: 'vs', k: 'Amaliy holat', h: 'Qiyin bola bilan suhbat', a: { h: 'Holat', tone: 'neutral', p: 'Sardor — 7-sinf o\'quvchisi. Oxirgi oyda darsda e\'tibor bermay, tez-tez javobgar bo\'lib qolmoqda. Bugun o\'qituvchiga qo\'pol gapirdi va sinfdan chiqib ketdi. Savol: siz Sardor bilan qanday suhbat qurgan bo\'lardingiz?' }, b: { h: 'Tavsiya etilgan yondashuv', tone: 'good', items: ['Vaqt ber: darhol ergashma, bola tinchlanishi uchun vaqt ajrat', 'Yakka suhbat: sinf oldida emas, to\'rt ko\'z ostida', 'Savol ber: «Seni nima xafa qildi?» — ayblovsiz', 'Qo\'llab-quvvatla: «Men senga ishonaman»'] } },

    { t: 'section', n: 'III', h: 'Ustoz ↔ Ota-ona', s: 'Bolani birga tarbiyalaydigan sheriklik' },

    { t: 'steps', k: 'Ota-ona bilan muloqot tamoyillari', h: 'Beshta tamoyil', items: [
      { h: 'Hamkor, raqib emas', p: 'Ota-ona siz bilan bir jamoadagi odam. «Siz bola uchun tashvishlansangiz, men ham shundayman» degan pozitsiya oling.' },
      { h: 'Avval ijobiy, keyin muammo', p: 'Suhbatni bolaning yaxshi tomonidan boshlang. Muammoni keyin, aniq va xotirjam ayting.' },
      { h: 'Faktlar, taxmin emas', p: '«Bola yomon» demay, «Bugun darsda quyidagi vaziyat bo\'ldi» deb aniq fakt bering.' },
      { h: 'Yechim birga izlash', p: '«Bu ishni qanday hal qilamiz?» deb so\'rang. Ota-ona ham mas\'uliyatni his qiladi.' },
      { h: 'Sir saqlash', p: 'Bolaning oiladagi muammolarini boshqa ota-onalarga, bolalarga, hamkasblarga aytmang.' }
    ] },

    { t: 'steps', k: 'Nozik suhbatni qanday olib boramiz?', h: 'Bolaning muammolari haqida ota-ona bilan suhbat algoritmi', items: [
      { h: 'Tayyorgarlik', p: 'Faktlarni yig\'ing, dalillarni qayd eting. Xotirjam muhit tanlang.' },
      { h: 'Ochilish', p: 'Iliq salom, minnatdorchilik. «Vaqt ajratganingiz uchun rahmat.»' },
      { h: 'Ijobiy nuqta', p: 'Avval bolaning kuchli tomonlarini, yutuqlarini aytib bering.' },
      { h: 'Muammo bayoni', p: '«Men sezyapmanki…» deb boshlang. Faktlarga tayaning, baho bermang.' },
      { h: 'Yechim-hamkorlik', p: '«Birga nima qilsak bo\'ladi?» Ota-onani yechim topishga jalb eting.' }
    ], note: 'Qoida: telefonda, telegramda emas, *yuzma-yuz.* Tinch joy. Boshqa odamlarsiz. Yetarli vaqt.' },

    { t: 'vs', k: 'Amaliy holat', h: 'O\'qishi pasaygan bola haqida suhbat', a: { h: 'Noto\'g\'ri yondashuv', tone: 'bad', q: '«Farzandingiz juda yalqov, darslarga tayyorlanmaydi. Uyda nega nazorat qilmaysiz? Agar shunday davom etsa, imtihondan yiqilib qoladi!»', p: 'Natija: ota-ona himoyaga o\'tadi, bolaga qattiq gapirishga majbur bo\'ladi, ustozga ishonch pasayadi.' }, b: { h: 'To\'g\'ri yondashuv', tone: 'good', q: '«Salom. Farzandingiz aqlli bola, men uni yaxshi bilaman. Oxirgi ikki haftada darslarda e\'tibori pasaygan. Uyda biror o\'zgarish sezdingizmi? Birgalikda unga qanday yordam bera olamiz?»', p: 'Natija: ota-ona hamkor bo\'ladi, ochiq suhbat quradi, bolaga birga yordam beradi.' } },

    { t: 'section', n: 'IV', h: 'Hamkasb va boshliqlar', s: 'Professional jamoada samarali muloqot madaniyati' },

    { t: 'vs', k: 'Ikki xil muloqot — ikki xil yondashuv', h: 'Hamkasblar va boshliqlar', a: { h: 'Hamkasblar', tone: 'gold', items: ['Hurmat: tajribasidan qat\'i nazar har bir ustozga teng munosabat', 'Yordam: yosh ustozga tajribangni ulash, kerak bo\'lsa yordam so\'ra', 'G\'iybatdan qochish: uchinchi shaxs haqida orqadan gapirma', 'Ochiq fikr: tanqidni muloyim tarzda, yakka gaplashishda ayt', 'Birga nishonlash: jamoa yutuqlari bog\'laydi'] }, b: { h: 'Boshliqlar', tone: 'neutral', items: ['Professionallik: rasmiy ohang, vaqtni hurmat qilish', 'Tashabbus: muammo bilan birga yechim ham taklif qil', 'Fakt bilan gapirish: aniq raqam va hujjatlarga tayan', 'Konstruktiv tanqid: rozi bo\'lmasang, yakka suhbatda hurmat bilan', 'Chegaralar: shaxsiy hayotni ish bilan aralashtirma'] } },

    { t: 'vs', k: 'O\'rinbosar ustoz uchun oltin qoida · etika', h: '«Bir ustozning o\'rniga kirgan ustoz o\'z potensialini ko\'rsatishga haqqi yo\'q»', a: { h: 'Hurmat', tone: 'good', items: ['Asl ustozning mehnatini, uslubini va obro\'sini saqlash'] }, b: { h: 'Ego', tone: 'bad', items: ['«Men undan yaxshiroq bilaman» deb ko\'rsatish — ego ozuqasi'] }, note: 'Asl ustoz qaytib kelganda, sizdagi «yutuq» uning sharmandasi bo\'lib qaytadi.' },

    { t: 'ask', k: 'Muhokama uchun savol', h: 'Rahbar bilan oylik kelishish qanday bo\'lishi kerak?', s: 'Kim o\'ziga narx belgilagan?' },

    { t: 'steps', k: 'Javob: ikki kalit savol', h: 'Oylik haqida gaplashishdan oldin', all: true, items: [
      { h: 'Biz kim edik?', p: '→ Vositachi' },
      { h: 'Vositachining haqqini kim beradi?', p: '→ Natija' }
    ] },

    { t: 'steps', k: 'Konfliktlarni boshqarish', h: 'Kelishmovchilik muqarrar, uni boshqarish — mahorat', items: [
      { h: 'To\'xtash', p: 'Jahldan qaror qabul qilmang. Chuqur nafas oling, vaqt bering.' },
      { h: 'Tushunish', p: '«Mening tushungim…» deb ayting. Boshqa tomonning nuqtai nazarini so\'rang.' },
      { h: 'Muhokama', p: 'Shaxsga emas, muammoga qarang. «Biz» deb gapiring, «siz» demang.' },
      { h: 'Yechim', p: 'Umumiy manfaatni toping. Ikki tomon ham yutadigan variant izlang.' }
    ], note: '«Konflikt — kim haq, kim nohaq emas. *Qanday yechim topamiz — shu muhim.*»' },

    { t: 'table', k: 'Muloqotning ichki ta\'siri · xulosa', h: 'Uch soha, uch natija', head: ['Soha', 'Ijobiy muloqot', 'Ichki ta\'sir', 'Salbiy oqibat'], rows: [
      ['Bola', 'Tinglash, empatiya, «Men-xabari»', 'Ishonch, motivatsiya, o\'z-o\'ziga baho', 'Qo\'rquv, yolg\'on, yakkalanib qolish'],
      ['Ota-ona', 'Hamkor ruhi, faktlar, yechim izlash', 'Ishonch, hamkorlik, ochiq suhbat', 'Himoya, tortishuv, aloqani uzish'],
      ['Jamoa', 'Hurmat, ochiq fikr, konstruktiv tanqid', 'Samarali ish, kam konflikt, yordam', 'Sovuq muhit, g\'iybat, tarqalish']
    ] },

    { t: 'bullets', k: 'Ustozning muloqot kodeksi', h: 'Har kuni eslab yuradigan 7 oltin qoida', items: ['Avval tingla', 'Baho berma, tushun', '«Men-xabari» bilan gapir', 'Shaxsga emas, xatti-harakatga', 'Faktga tayan, taxminga emas', 'Sir saqla, hurmat qil', 'Tana tilingni kuzat'], note: '*«Yaxshi muloqot — bu eshitish san\'ati, gapirish emas.»*' },

    { t: 'end', h: 'Rahmat', s: '6-modul yakunlandi' }
  ]
};

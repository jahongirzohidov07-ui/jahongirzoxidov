'use strict';
/* TTP · 6-modul: Ustozning muloqot psixologiyasi */
module.exports = {
  slides: [
    { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Ustozlik psixologiyasi', s: 'TTP · Ustozlik kursi', lesson: '*6-modul* · Ustozning muloqot psixologiyasi', name: 'Jahongir Zoxidov', role: 'Trener' },

    { t: 'tree', color: 'blue', k: 'Bugun nimalarni o\'rganamiz?', h: 'Uch *yo\'nalish*', s: 'So\'z — ustozning eng kuchli quroli.', root: { icon: '👩‍🏫', label: 'Ustoz' }, kids: [{ icon: '🧒', label: 'Bola' }, { icon: '👨‍👩‍👧', label: 'Ota-ona' }, { icon: '💼', label: 'Hamkasb va boshliq' }], items: [
      'Bola bilan: ishonch, empatiya va faol tinglash orqali sog\'lom aloqa qurish.',
      'Ota-ona bilan: hamkorlik, shaffoflik va nozik suhbatlarni olib borish mahorati.',
      'Hamkasb va boshliqlar: jamoaviy ruh, konfliktlarni hal qilish, professional chegaralar.'
    ] },

    { t: 'grid', color: 'orange', icon: '🎭', k: 'Inson temperament turlari', h: 'Har bir bola o\'ziga xos: *temperamentini* tushunish muloqot kalitidir', cols: 4, items: [
      { icon: '🔥', h: 'Xolerik', p: 'Jo\'shqin va jur\'atli. Tez qaror qabul qiladi, yetakchi. Sabrsiz, tez jahli chiqadi. Raqobatni yaxshi ko\'radi.' },
      { icon: '🪨', h: 'Flegmatik', p: 'Sokin, bosiq va mehnatkash. Sekin reaksiya qiladi, lekin qat\'iy va ishonchli hamroh.' },
      { icon: '☀️', h: 'Sangvinik', p: 'Quvnoq, faol va muloqotchan. Tez his qiladi, tez sovuydi. Tez moslashadi, ko\'p do\'st orttiradi.' },
      { icon: '🌙', h: 'Melanxolik', p: 'Sezgir va chuqur his qiluvchi. Tez ranjiydi, ichki dunyosi boy, ijodkor tabiatli.' }
    ] },

    { t: 'duel', color: 'red', k: 'O\'yin: «Temperamentlar jangi»', h: '5 daqiqa tayyorgarlik, *10 daqiqa jang*', a: { icon: '🔥', h: 'Xoleriklar', p: 'Flegmatiklarga «hujum» qiladi. 10 daqiqa ichida flegmatikdan «yo\'q» degan so\'zni ololsalar — yutadi.', tag: 'Hujum' }, b: { icon: '🪨', h: 'Flegmatiklar', p: 'Bosiqlikni yo\'qotmasa, javob berishda saqlanib qolsa, 10 daqiqa davomida «yo\'q» demasa — yutadi.', tag: 'Himoya' }, prize: '«YO\'Q»', prizeLabel: 'kim aytadi?', winner: 'b', note: 'Hamma o\'z temperamentiga ko\'ra 4 guruhga bo\'linadi. Maqsad: har bir temperament xususiyatlarini *amalda his qilish.*' },

    { t: 'vs', color: 'blue', icon: '🧠', k: 'Daniel Kahneman · «Thinking, Fast and Slow»', h: 'Ikki *tafakkur tizimi*', a: { icon: '⚡', h: 'System 1 · tez', tone: 'bad', items: ['Tez ishlaydi, hissiyotga asoslanadi', 'O\'ylamasdan qaror qiladi, avtomatik', 'Kimdir baland gapirdi → jahlingiz chiqdi', 'O\'quvchi e\'tiroz qildi → darhol himoyalandingiz', 'Ota-ona tanqid qildi → ichingizda qarshilik'] }, b: { icon: '🐢', h: 'System 2 · sekin', tone: 'good', items: ['Sekin ishlaydi, mantiqqa asoslanadi', 'Vaziyatni tahlil qiladi, qarorni ongli qabul qiladi', '«To\'xta, u nega bunday gapiryapti?»', '«Bu yerda hissiyot bor, darhol javob bermay»', '«Qanday qilib vaziyatni yumshatsam bo\'ladi?»'] }, all: true, note: 'System 1 — «instinktiv ong», System 2 — «nazorat qiluvchi ong».' },

    { t: 'steps', color: 'red', icon: '💥', k: 'Konflikt paytida hamma System 1 da', h: 'Uch tomon, *uch avtomatik reaksiya*', all: true, items: [
      { n: '🧒', h: 'O\'quvchi', p: '«Siz adolatsizsiz!»' },
      { n: '👨‍👩‍👧', h: 'Ota-ona', p: '«Qanday gap bu?!»' },
      { n: '👩‍🏫', h: 'Ustoz', p: '«Sen o\'zing harakat qil!»' }
    ], note: 'Natija: *konflikt kuchayadi, muammo boshlanadi.*' },

    { t: 'big', color: 'blue', icon: '🌊', k: 'Ustozning ichki holati', h: 'Ustoz ichidan notinch bo\'lsa, eng yaxshi metodikani ham *konfliktga* aylantiradi.', s: 'Agar ichidan sokin bo\'lsa, eng og\'ir vaziyatni ham yumshata oladi.' },

    { t: 'grid', color: 'green', icon: '💬', k: 'Muloqotning ichki ta\'siri', h: 'Har bir so\'z *uchta sohada* iz qoldiradi', cols: 3, items: [
      { icon: '🧒', h: 'Bolaga ta\'sir', p: 'O\'z-o\'ziga ishonch, motivatsiya, hissiy xavfsizlik, bilimga qiziqish' },
      { icon: '👨‍👩‍👧', h: 'Ota-onaga ta\'sir', p: 'Ishonch hissi, hamkorlik istagi, ustozga hurmat, ochiq suhbat' },
      { icon: '👥', h: 'Jamoaga ta\'sir', p: 'Jamoaviy ruh, hurmat muhiti, samarali ish, kam konflikt' }
    ] },

    /* ---- II ---- */
    { t: 'section', color: 'orange', icon: '🧒', n: 'II', h: 'Ustoz ↔ Bola', s: 'Bolaning qalbiga kalit bo\'ladigan muloqot' },

    { t: 'photo', layout: 'full', color: 'orange', img: '/assets/t-bola-ustoz.jpg', focus: 'center', k: 'Ustoz va shogird munosabati', h: 'Munosabat eng yaxshi ko\'rinishda bo\'lganda nima bo\'ladi? *Eng yomonida-chi?*', s: 'Javob ikkalasida ham bitta: ustoz va shogird bo\'ladi. Farq — qanday ustoz va qanday shogird.' },

    { t: 'vs', color: 'blue', icon: '🎛️', k: 'Muloqot — bu boshqaruv vositasi', h: 'Muloqot *nima*?', a: { icon: '🗨️', h: 'Ko\'pchilik nima deb o\'ylaydi', tone: 'neutral', q: 'Muloqot — bu shunchaki «gaplashish».' }, b: { icon: '🎯', h: 'Aslida esa', tone: 'gold', q: 'Muloqot — bu ta\'sir o\'tkazish san\'ati.' }, all: true },

    { t: 'quote', color: 'green', k: 'Birinchi burilish nuqtasi', q: 'Odamlar sizning haq ekanligingizni emas, ularni tushunganingizni his qilishni xohlashadi.', by: 'Siz haq bo\'lishingiz mumkin. Lekin qarshingizdagini tushunmasangiz, siz yutqazasiz' },

    { t: 'big', color: 'red', icon: '🌩️', k: 'Konfliktning asl sababi', h: 'Konfliktning asl sababi fakt emas, balki *hissiyot.*', s: 'Fakt bilan bahslashish osmondagi bulutga tosh otish bilan barobar. Hissiyotni tushunmasangiz, hech narsa o\'zgarmaydi.' },

    { t: 'quote', color: 'blue', k: 'Daniel Goleman · «Emotional Intelligence»', q: 'Inson qarorlarining katta qismi ratsional emas, hissiy asosda qabul qilinadi.', by: 'Shuning uchun ustoz uchun emotsional intellekt metodikadan ham muhim' },

    { t: 'table', color: 'orange', icon: '💛', k: 'Ta\'lim muhitida', h: 'Har kim *hissiy darajada* reaksiya bildiradi', head: ['Kim', '…ga emas', '…ga reaksiya bildiradi'], rows: [
      ['Ota-ona', 'faktga', '*farzandining qadriyatiga*'],
      ['O\'quvchi', 'bahoga', '*o\'z qadriga*'],
      ['Hamkasb', 'fikrga', '*hurmatga*']
    ], note: 'Fakt esa ikkinchi o\'rinda.' },

    { t: 'big', color: 'green', icon: '⚡', k: 'Xulosa: konflikt nima?', h: 'Konflikt — ma\'lumot to\'qnashuvi emas. Bu *qadriyat va hissiyot* to\'qnashuvi.', s: 'Shuning uchun faktlar bilan yechib bo\'lmaydi, hissiyotni tushunish kerak.' },

    { t: 'flow', color: 'green', icon: '🪜', k: 'Pedagogik yechim · 2 qatlamli muloqot modeli', h: 'Uch *bosqichli* usul', items: ['🔍 Hissiyotni aniqlash', '🤝 Hissiyotni tan olish', '📋 Faktga o\'tish'], all: true, note: 'Ustoz ichidan savol beradi: «Bu odam nimadan xavotirda?» → «Siz uchun muhim ekanini ko\'ryapman» (Carl Rogers) → «Keling, vaziyatni birga ko\'ramiz».' },

    { t: 'steps', color: 'blue', icon: '🔍', k: '1-bosqich', h: 'Hissiy qatlamni aniqlash: *«Bu odam nimadan xavotirda?»*', all: true, items: [
      { n: '👨‍👩‍👧', h: 'Ota-ona', p: 'Farzandi kelajagi' },
      { n: '🧒', h: 'O\'quvchi', p: 'O\'z qadrini yo\'qotish' },
      { n: '💼', h: 'Hamkasb', p: 'Hurmat yo\'qolishi' }
    ], note: 'Har bir insonning yashirin xavotiri bor.' },

    { t: 'steps', color: 'green', icon: '🤝', k: '2-bosqich · Carl Rogers', h: 'Hissiy qatlamni tan olish: *«Tushunilgan inson qarshilikni kamaytiradi»*', all: true, items: [
      { n: '1', h: '«Siz bolangiz uchun xavotirdasiz»', p: 'Uni mas\'uliyatli odam deb tan olasiz' },
      { n: '2', h: '«Bu siz uchun muhim ekanini ko\'ryapman»', p: 'Hissiyotini qayta nomlab berasiz' }
    ], note: 'Bu usul konfliktni *50% ga* pasaytiradi.' },

    { t: 'steps', color: 'orange', icon: '📋', k: '3-bosqich', h: 'Faktga o\'tish: endi ustoz vaziyatni *birga hal qilishga* taklif etadi', all: true, items: [
      { n: '1', h: '«Keling, vaziyatni birga ko\'ramiz»', p: 'Hamkorlikka chaqirish' },
      { n: '2', h: '«Bu yerda qanday yordam bera olishimiz mumkin?»', p: 'Yechim izlashga chaqirish' }
    ], note: 'Endi fakt qabul qilinadi, chunki hissiyot allaqachon tan olingan. *Tartib: 1) Aniqla → 2) Tan ol → 3) Fakt*' },

    { t: 'vs', color: 'red', icon: '🍽️', k: 'Egoning ozuqasi', h: 'Har bir insonning egosiga *ozuqa* kerak', a: { icon: '🧘', h: 'Ongli inson', tone: 'good', items: ['Bilib ozuqasini oladi', 'Ehtiyojini anglaydi va sog\'lom yo\'l bilan to\'ldiradi'] }, b: { icon: '😈', h: 'Ongsiz inson', tone: 'bad', items: ['Bilmay olib qo\'yadi', 'Boshqalarga zarar yetkazib egosiga ozuqa oladi'] }, all: true, note: 'Farqi anglashda: ehtiyojni ko\'rgan inson boshqani ranjitmaydi. Savol: *men egomga ozuqani qaysi yo\'l bilan olyapman?*' },

    { t: 'flow', color: 'blue', icon: '🗣️', k: 'Metodik texnika', h: 'Hissiyot → Tushunish → *Fakt*', items: ['«Siz xafa bo\'lganga o\'xshaysiz»', '«Bu siz uchun muhimligini tushunyapman»', '«Endi baholash mezonini birga ko\'rib chiqamiz»'], all: true, note: 'Bu pedagogik mahorat: *avval qalbga, keyin aqlga murojaat.* Faktni boshlamasdan oldin hissiyot tan olinishi shart.' },

    { t: 'table', color: 'green', icon: '🎬', k: 'Texnika amaliyotda', h: 'Bahodan norozi o\'quvchi bilan *suhbat*', head: ['Kim', 'Gap'], rows: [
      ['O\'quvchi', '«Siz meni atay past baholaysiz!»'],
      ['Ustoz', '«Sizga bu adolatsiz tuyulyaptimi?»'],
      ['Ustoz', '«Demak, siz o\'zingizni ko\'proq bahoga loyiq deb his qilyapsiz»'],
      ['Ustoz', '«Keling, ishni birga ko\'rib chiqamiz»']
    ], note: 'Natija: o\'quvchi ochiladi, himoya kamayadi, dialog boshlanadi. *Hujum emas, hamkorlik.*' },

    { t: 'flow', color: 'orange', icon: '⏸️', k: 'Amaliy formula', h: 'System 1 ga tushmaslikning oddiy yo\'li: javobdan oldin *pauza*', items: ['💥 Stimulus (gap, e\'tiroz)', '⏸️ Pauza (1–2 soniya)', '🧠 Javob (ongli)'], all: true, note: '«Senga shunday tuyulyaptimi?» — shu bitta savol bilan vaziyat 50% yumshaydi. *Pauza — System 1 dan System 2 ga o\'tish ko\'prigi.*' },

    { t: 'vs', color: 'green', icon: '👂', k: 'Nonviolent Communication · eshitish kuchi', h: 'Eshitish hamkorlikning, eshitmaslik *qarshilikning* ildizi', a: { icon: '🧑', h: 'Har qanday inson', tone: 'neutral', items: ['Eshitilmasa — himoya qiladi', 'Eshitilsa — hamkorlik qiladi'] }, b: { icon: '👩‍🏫', h: 'Ustoz uchun', tone: 'gold', items: ['Gapni eshitsa — bahslashadi', 'Hissiyotni eshitsa — boshqaradi'] }, all: true, note: 'Eng yaxshi ustoz hissiyotlarni to\'g\'ri payqay olgan ustoz. *Hissiyot — o\'quvchining ehtiyoji haqidagi xabar.*' },

    { t: 'steps', color: 'blue', icon: '3️⃣', k: '«3 soniya qoidasi»', h: 'Har qanday keskin vaziyatda *uch oddiy qadam*', all: true, items: [
      { n: '✋', h: 'Darhol javob bermaysiz', p: 'Birinchi reaksiyani to\'xtating' },
      { n: '🌬️', h: '3 soniya ichida nafasni boshqarasiz', p: 'Chuqur nafas: System 2 yoqiladi' },
      { n: '🗣️', h: 'Keyin gapirasiz', p: 'Endi javob ongli bo\'ladi' }
    ], note: '3 soniya — o\'zingiz uchun, o\'quvchi uchun va vaziyat uchun sovg\'a.' },

    { t: 'steps', color: 'orange', icon: '❓', k: '«Ichki savol texnikasi»', h: 'O\'zingizga ichkaridan *ikki savol*', all: true, items: [
      { n: '👤', h: 'Boshqaga qaratilgan', p: '«Bu odam nimani his qilyapti?» — empatiya' },
      { n: '🪞', h: 'O\'ziga qaratilgan', p: '«Men hozir reaksiyadamanmi yoki boshqarayapmanmi?» — o\'z-o\'zini kuzatish' }
    ], note: 'Bu savollar ongli idrokka o\'tish kaliti.' },

    { t: 'vs', color: 'red', icon: '🎮', k: 'Qurbonmisiz yoki boshqaruvchimisiz?', h: 'Qaysi tizim bilan yashayotganingiz *natijani* belgilaydi', a: { icon: '🌪️', h: 'System 1 · avtomatik, his', tone: 'bad', q: 'Qurbon', items: ['Vaziyat boshqaradi', 'Yutqizasiz'] }, b: { icon: '🎮', h: 'System 2 · ongli, tahlil', tone: 'good', q: 'Boshqaruvchi', items: ['Vaziyatni siz boshqarasiz', 'Yutasiz'] }, all: true, note: 'Tanlov har lahzada: qaysi tizim bilan javob berishni bilib turish.' },

    { t: 'flow', color: 'green', icon: '🧭', k: '3 bosqichli professional muloqot modeli', h: 'Ustozning vaziyatni boshqarish *algoritmi*', items: ['👂 Tinglash: reaksiya emas, idrok', '🏷️ Nomlash: hissiyotga nom berish', '🧭 Yo\'naltirish: muloqotni boshqarish'], all: true, note: 'Tartib qat\'iy: avval tinglash, keyin nomlash, oxirida yo\'naltirish.' },

    { t: 'vs', color: 'blue', icon: '👂', k: 'Bosqich 1', h: 'Tinglash: reaksiya emas, *idrok*', a: { icon: '📖', h: 'Nazariy asos · Carl Rogers', tone: 'neutral', q: '«Aktiv tinglash»', p: 'Tinglash — javob kutish emas, ehtiyojni eshitish. Bu psixoterapiya va pedagogikaning asosi.' }, b: { icon: '✅', h: 'Amaliyot', tone: 'good', items: ['Gapni bo\'lmaslik', 'Ichidan javob tayyorlamaslik', 'Odamni «tushunishga harakat qilish»'] }, all: true, note: '80% ustoz aynan shu joyda yiqiladi. *Tinglash — jim turish emas, javob bermay turib idrok qilish.*' },

    { t: 'vs', color: 'orange', icon: '🏷️', k: 'Bosqich 2', h: 'Nomlash: hissiyotga *nom berish*', a: { icon: '🧠', h: 'Psixologik asos', tone: 'neutral', p: 'Hissiyot nomlanganda insonning himoya mexanizmi pasayadi. Bu psixologiyada juda kuchli vosita.' }, b: { icon: '💬', h: 'Misol iboralar', tone: 'gold', items: ['«Siz xavotirdasiz, to\'g\'rimi?»', '«Bu sizni ranjitganini tushunyapman»'] }, all: true, note: 'Tan olish — kelishish emas. *Hissiyotni eshitish — kelishuv ko\'prigi.*' },

    { t: 'vs', color: 'green', icon: '🧭', k: 'Bosqich 3', h: 'Yo\'naltirish: bahslashuvchi emas, *rahbar*', a: { icon: '🔄', h: 'Ustozning roli', tone: 'neutral', items: ['Bahslashuvchi → Rahbar'] }, b: { icon: '💬', h: 'Misol iboralar', tone: 'gold', items: ['«Keling, birga yechim topamiz»', '«Bu yerda ikki tomonni ham hisobga olishimiz kerak»'] }, all: true, note: 'Yo\'naltirish — boshqarish, hukmronlik emas. *«Birga» so\'zi kalit.*' },

    { t: 'vs', color: 'blue', icon: '🏋️', k: 'Sokinlik — tug\'ma emas, mashq qilinadigan ko\'nikma', h: '«Xarakterim shunaqa» — *noto\'g\'ri* tushuncha', a: { icon: '🙅', h: 'Mif', tone: 'bad', q: '«Men tez jahlim chiqadi, xarakterim shunaqa»' }, b: { icon: '🧠', h: 'Kahneman', tone: 'good', items: ['Tez reaksiya — instinkt', 'Sekin javob — ongli tanlov'] }, all: true, note: 'Demak: *sokinlik = mashq.* Har bir ongli javob keyingi javobni osonlashtiradi.' },

    { t: 'vs', color: 'red', icon: '🗺️', k: '«Trigger xaritasi»', h: 'Trigger nima o\'zi va u sizni *qanday* boshqaradi?', a: { icon: '❌', h: 'Trigger — bu emas', tone: 'bad', items: ['Tashqi gap yoki vaziyat emas'] }, b: { icon: '🔥', h: 'Trigger — bu shu', tone: 'gold', items: ['Sizning ichingizdagi «tez yonadigan nuqta»', 'Trigger → System 1 yoqiladi → hissiyot boshqaradi'] }, all: true, note: 'Triggerni bilmasa — u boshqariladi. Triggerni tushunsa — u boshqaradi. *Trigger o\'tmishdan signal: nomlay olsangiz, kuchini sindirasiz.*' },

    { t: 'grid', color: 'red', icon: '⚠️', k: 'Muloqotdagi 4 ta eng katta xato', h: 'Har bir xato — System 1 da qabul qilingan *reaksiyaning* natijasi', cols: 4, items: [
      { icon: '🛡️', h: 'Darhol o\'zini himoya qilish', p: '«Men to\'g\'ri qildim!»' },
      { icon: '📢', h: 'Ovoz balandlatish', p: 'Bu nazoratni yo\'qotish belgisi' },
      { icon: '🙈', h: 'Odamni emas, muammoni ko\'rmaslik', p: '«Bu ota-ona qiyin ekan» (xato yondashuv)' },
      { icon: '🌪️', h: 'Hissiyot bilan qaror qilish', p: 'Keyin pushaymon bo\'linadi' }
    ] },

    { t: 'table', color: 'green', icon: '💬', k: 'So\'z tanlash psixologiyasi', h: '«Sen-xabari» (ayblov) → *«Men-xabari»* (his-tuyg\'u)', head: ['✕ Sen-xabari', '✓ Men-xabari'], rows: [
      ['«Sen jahlimni chiqarding!»', '«Bunday qilganingda men xafa bo\'laman.»'],
      ['«Sen yana dars tayyorlamabsan!»', '«Men sening o\'sishingdan xavotirdaman.»'],
      ['«Sen doim shunday qilasan!»', '«Men bu holat takrorlanganini sezyapman.»']
    ], note: 'Taqiqlangan iboralar: «Tentak!», «Hech narsaga yaramaysan!», «Sen hech qachon…», «Yana sen?!»' },

    { t: 'vs', color: 'orange', icon: '🎬', k: 'Amaliy holat', h: '*Qiyin bola* bilan suhbat', a: { icon: '📋', h: 'Holat', tone: 'neutral', p: 'Sardor — 7-sinf o\'quvchisi. Oxirgi oyda darsda e\'tibor bermay, tez-tez javobgar bo\'lib qolmoqda. Bugun o\'qituvchiga qo\'pol gapirdi va sinfdan chiqib ketdi. Savol: siz Sardor bilan qanday suhbat qurgan bo\'lardingiz?' }, b: { icon: '✅', h: 'Tavsiya etilgan yondashuv', tone: 'good', items: ['Vaqt ber: darhol ergashma, bola tinchlanishi uchun vaqt ajrat', 'Yakka suhbat: sinf oldida emas, to\'rt ko\'z ostida', 'Savol ber: «Seni nima xafa qildi?» — ayblovsiz', 'Qo\'llab-quvvatla: «Men senga ishonaman»'] }, all: true },

    /* ---- III ---- */
    { t: 'section', color: 'green', icon: '👨‍👩‍👧', n: 'III', h: 'Ustoz ↔ Ota-ona', s: 'Bolani birga tarbiyalaydigan sheriklik' },

    { t: 'photo', layout: 'split', color: 'green', img: '/assets/t-uchrashuv.jpg', focus: 'center', k: 'Ota-ona bilan muloqot tamoyillari', h: 'Beshta *tamoyil*', items: [
      '*Hamkor, raqib emas* — «Siz bola uchun tashvishlansangiz, men ham shundayman».',
      '*Avval ijobiy, keyin muammo* — suhbatni bolaning yaxshi tomonidan boshlang.',
      '*Faktlar, taxmin emas* — «Bola yomon» demay, «Bugun darsda quyidagi vaziyat bo\'ldi».',
      '*Yechim birga izlash* — «Bu ishni qanday hal qilamiz?»',
      '*Sir saqlash* — bolaning oiladagi muammolarini boshqalarga aytmang.'
    ], all: true },

    { t: 'flow', color: 'blue', icon: '🪜', k: 'Nozik suhbatni qanday olib boramiz?', h: 'Ota-ona bilan suhbat *algoritmi*', items: ['📁 Tayyorgarlik', '🤝 Ochilish', '🌟 Ijobiy nuqta', '📋 Muammo bayoni', '🧩 Yechim-hamkorlik'], all: true, note: 'Faktlarni yig\'ing → iliq salom, minnatdorchilik → avval bolaning kuchli tomonlari → «Men sezyapmanki…» faktlarga tayanib → «Birga nima qilsak bo\'ladi?». Qoida: telefonda, telegramda emas, *yuzma-yuz.* Tinch joy. Boshqa odamlarsiz. Yetarli vaqt.' },

    { t: 'vs', color: 'orange', icon: '🎬', k: 'Amaliy holat', h: 'O\'qishi pasaygan bola haqida *suhbat*', a: { icon: '❌', h: 'Noto\'g\'ri yondashuv', tone: 'bad', q: '«Farzandingiz juda yalqov, darslarga tayyorlanmaydi. Uyda nega nazorat qilmaysiz? Agar shunday davom etsa, imtihondan yiqilib qoladi!»', p: 'Natija: ota-ona himoyaga o\'tadi, bolaga qattiq gapirishga majbur bo\'ladi, ustozga ishonch pasayadi.' }, b: { icon: '✅', h: 'To\'g\'ri yondashuv', tone: 'good', q: '«Salom. Farzandingiz aqlli bola, men uni yaxshi bilaman. Oxirgi ikki haftada darslarda e\'tibori pasaygan. Uyda biror o\'zgarish sezdingizmi? Birgalikda unga qanday yordam bera olamiz?»', p: 'Natija: ota-ona hamkor bo\'ladi, ochiq suhbat quradi, bolaga birga yordam beradi.' }, all: true },

    /* ---- IV ---- */
    { t: 'section', color: 'blue', icon: '💼', n: 'IV', h: 'Hamkasb va boshliqlar', s: 'Professional jamoada samarali muloqot madaniyati' },

    { t: 'photo', layout: 'full', color: 'blue', img: '/assets/t-jamoa2.jpg', focus: 'center', k: 'Jamoa', h: 'Ikki xil muloqot — *ikki xil* yondashuv', s: 'Hamkasblar bilan — teng, boshliqlar bilan — professional.' },

    { t: 'vs', color: 'blue', icon: '💼', k: 'Ikki xil muloqot — ikki xil yondashuv', h: 'Hamkasblar va *boshliqlar*', a: { icon: '🤝', h: 'Hamkasblar', tone: 'gold', items: ['Hurmat: tajribasidan qat\'i nazar har bir ustozga teng munosabat', 'Yordam: yosh ustozga tajribangni ulash, kerak bo\'lsa yordam so\'ra', 'G\'iybatdan qochish: uchinchi shaxs haqida orqadan gapirma', 'Ochiq fikr: tanqidni muloyim tarzda, yakka gaplashishda ayt', 'Birga nishonlash: jamoa yutuqlari bog\'laydi'] }, b: { icon: '👔', h: 'Boshliqlar', tone: 'neutral', items: ['Professionallik: rasmiy ohang, vaqtni hurmat qilish', 'Tashabbus: muammo bilan birga yechim ham taklif qil', 'Fakt bilan gapirish: aniq raqam va hujjatlarga tayan', 'Konstruktiv tanqid: rozi bo\'lmasang, yakka suhbatda hurmat bilan', 'Chegaralar: shaxsiy hayotni ish bilan aralashtirma'] }, all: true },

    { t: 'vs', color: 'red', icon: '🎭', k: 'O\'rinbosar ustoz uchun oltin qoida · etika', h: '«Bir ustozning o\'rniga kirgan ustoz o\'z potensialini ko\'rsatishga *haqqi yo\'q*»', a: { icon: '🙏', h: 'Hurmat', tone: 'good', items: ['Asl ustozning mehnatini, uslubini va obro\'sini saqlash'] }, b: { icon: '😤', h: 'Ego', tone: 'bad', items: ['«Men undan yaxshiroq bilaman» deb ko\'rsatish — ego ozuqasi'] }, all: true, note: 'Asl ustoz qaytib kelganda, sizdagi «yutuq» uning sharmandasi bo\'lib qaytadi.' },

    { t: 'ask', icon: '💰', k: 'Muhokama uchun savol', h: 'Rahbar bilan *oylik kelishish* qanday bo\'lishi kerak?', s: 'Kim o\'ziga narx belgilagan?' },

    { t: 'steps', color: 'orange', icon: '🗝️', k: 'Javob: ikki kalit savol', h: 'Oylik haqida gaplashishdan *oldin*', all: true, items: [
      { n: '1', h: 'Biz kim edik?', p: '→ Vositachi' },
      { n: '2', h: 'Vositachining haqqini kim beradi?', p: '→ Natija' }
    ] },

    { t: 'flow', color: 'green', icon: '🕊️', k: 'Konfliktlarni boshqarish', h: 'Kelishmovchilik muqarrar, uni boshqarish — *mahorat*', items: ['✋ To\'xtash', '🧠 Tushunish', '💬 Muhokama', '🤝 Yechim'], all: true, note: 'Jahldan qaror qabul qilmang → «Mening tushungim…» deb boshqa tomonni so\'rang → shaxsga emas, muammoga qarang, «biz» deb gapiring → ikki tomon ham yutadigan variant. «Konflikt — kim haq, kim nohaq emas. *Qanday yechim topamiz — shu muhim.*»' },

    { t: 'table', color: 'blue', icon: '📊', k: 'Muloqotning ichki ta\'siri · xulosa', h: 'Uch soha, *uch natija*', head: ['Soha', 'Ijobiy muloqot', 'Ichki ta\'sir', 'Salbiy oqibat'], rows: [
      ['Bola', 'Tinglash, empatiya, «Men-xabari»', 'Ishonch, motivatsiya, o\'z-o\'ziga baho', 'Qo\'rquv, yolg\'on, yakkalanib qolish'],
      ['Ota-ona', 'Hamkor ruhi, faktlar, yechim izlash', 'Ishonch, hamkorlik, ochiq suhbat', 'Himoya, tortishuv, aloqani uzish'],
      ['Jamoa', 'Hurmat, ochiq fikr, konstruktiv tanqid', 'Samarali ish, kam konflikt, yordam', 'Sovuq muhit, g\'iybat, tarqalish']
    ] },

    { t: 'checklist', color: 'green', icon: '📜', k: 'Ustozning muloqot kodeksi', h: 'Har kuni eslab yuradigan *7 oltin qoida*', items: [
      { n: '1', h: 'Avval tingla' }, { n: '2', h: 'Baho berma, tushun' }, { n: '3', h: '«Men-xabari» bilan gapir' }, { n: '4', h: 'Shaxsga emas, xatti-harakatga' },
      { n: '5', h: 'Faktga tayan, taxminga emas' }, { n: '6', h: 'Sir saqla, hurmat qil' }, { n: '7', h: 'Tana tilingni kuzat', star: true }
    ], total: '«Yaxshi muloqot — bu eshitish san\'ati, gapirish emas.»' },

    { t: 'end', icon: '🙌', h: 'Rahmat', s: '6-modul yakunlandi · Keyingi: 7-modul — O\'quvchilarda intizomni shakllantirish' }
  ]
};

'use strict';
/* Mentorlik (Shogirdlik) dasturi · 6-dars: Sog'liq
   Manba: «Sog'liq, salomatlik va tana boshqaruvi tahlili» (insholar va qaydlar asosida, PDF)
   + avvalgi slaydlar (Notion «6-Dars - Sog'liq» mavzulari: Stress, Uyqu, Ovqatlanish, Jismoniy mashqlar, Emotion, Magnetic rays).
   Qoida: muallif qaydlaridagi fikr, raqam va iqtiboslar o'zgartirilmaydi; zid kelgan joyda PDF (insholar) asos.
   Savol pardalari skript faylida: api/_scripts/mentorlik-06.js (S.q). */
module.exports = {
  slides: [
    /* 1 */ { t: 'cover', variant: 'a', photo: '/assets/jahongir-2.jpg', badge: 'Xush kelibsiz!', h: 'Mentorship program', s: 'Shogirdlik dasturi', lesson: '*6-dars* · Sog\'liq', name: 'Jahongir Zoxidov', role: 'Mentor' },

    /* 2 */ { t: 'ask', icon: '🫀', k: 'Boshlanish uchun savol', h: 'Sog\'lig\'ingizga *10 balldan* necha ball berasiz?', s: 'Uyqu, ovqat, harakat, kayfiyat — hammasini hisobga oling.' },

    /* 3 */ { t: 'big', color: 'red', icon: '🤒', k: 'Bitta kuzatuv', h: 'Sog\' odam *mingta* narsani xohlaydi. Kasal odam esa *bitta* — sog\'ayishni', s: 'Sog\'liq bor paytda uni sezmaymiz. Yo\'qolganda — boshqa hech narsa kerak bo\'lmay qoladi.' },

    /* 4 */ { t: 'photo', layout: 'full', color: 'green', img: '/assets/d6-tabiat.jpg', focus: 'center', k: 'Dars mavzusi', h: 'Sog\'liq — barcha richaklarning *poydevori*', s: 'Sog\'liq yo\'q joyda karyera ham, pul ham, munosabat ham ishlamaydi.' },

    /* 5 */ { t: 'circles', color: 'green', k: 'Tibbiy maslahatlar yig\'indisi emas', h: 'Sog\'liq — *yaxlit* falsafa', s: 'Salomatlik — inson biologiyasi, ruhiyati, odatlari va zamonaviy muhit tuzoqlari o\'rtasidagi chuqur bog\'liqlik.', rings: [
      { label: 'TANA', h: 'Biologiya', p: 'Ovqat, harakat, uyqu' },
      { label: 'RUHIYAT', h: 'Ong va his', p: 'Stress, dofamin, diqqat' },
      { label: 'ODATLAR', h: 'Kundalik tanlov', p: 'Har kuni nima qilamiz' },
      { label: 'MUHIT', h: 'Zamonaviy tuzoqlar', p: 'Glutamat, ekran, oson mukofot' }
    ] },

    /* 6 */ { t: 'big', color: 'blue', icon: '🌳', k: '«Ildizlarga yopishish yutqazishni kamaytiradi» · «Eskirmas ma\'lumotlarni ovlang»', h: 'Ildiz qoidalarni bilish — *90% xatodan* saqlaydi', s: 'Sohaning minglab mayda tafsilotlarini o\'rganishga vaqt bo\'lmasa ham, uning ildiz — poydevor qoidalarini bilish va amal qilish kifoya.' },

    /* 7 */ { t: 'ask', icon: '🤔', k: 'O\'zingizga savol', h: 'Sog\'liq haqida nechta maslahat bilasiz? Nechtasiga *har kuni* amal qilasiz?', s: 'Bilish va amal qilish orasidagi farq — sog\'liqning asl siri.' },

    /* 8 */ { t: 'steps', color: 'green', icon: '🧭', k: 'Bugungi reja', h: 'Sog\'liqning *5 ustuni*', all: true, items: [
      { n: '1', h: 'Ovqatlanish', p: 'Nima yesak — o\'shamiz' },
      { n: '2', h: 'Harakat', p: 'Har kuni faol bo\'lish' },
      { n: '3', h: 'Uyqu va dam olish', p: 'Vaqtli uxlash, to\'g\'ri dam' },
      { n: '4', h: 'Stress va his-tuyg\'u', p: 'Signal va javob' },
      { n: '5', h: 'Miya va raqamli muhit', p: 'Dofamin, AI, oflayn hayot' }
    ] },

    /* ===== 1. Ovqatlanish ===== */
    /* 9 */ { t: 'section', color: 'green', icon: '🥗', n: '1', h: 'Ovqatlanish va taomlanish madaniyati', s: 'Nima yesak — o\'shamiz' },

    /* 10 */ { t: 'grid', color: 'green', icon: '🌱', k: 'Ovqatlanishning ildiz tamoyillari', h: 'To\'rtta *ildiz qoida*', cols: 2, items: [
      { icon: '🍽️', h: 'Ehtiyojdan kam ovqatlanish', p: 'Qorinni to\'ldirib yemaslik, nafsoniy to\'qlikdan saqlanish.' },
      { icon: '⏳', h: 'Och bo\'lgandagina ovqatlanish', p: 'Soatga qarab emas — tananing tabiiy ehtiyojiga qarab.' },
      { icon: '🥦', h: 'Meva va sabzavotni ko\'paytirish', p: 'Ayniqsa rangi to\'qroq mevalar va kletchatkaga boy taomlar.' },
      { icon: '🍬', h: 'Shakarni keskin kamaytirish', p: 'Oq rangli vosita sifatida cheklash, sintetik shirinliklardan qochish.' }
    ] },

    /* 11 */ { t: 'vs', color: 'red', icon: '🍜', k: 'Glutamat zarbasi', h: 'Chaynamasdan olingan *lazzat*', all: true, a: { icon: '🌭', h: 'Tez tayyorlanadigan ovqat', tone: 'bad', items: ['Lapsha, chips, sosiska, kolbasa', 'Natriy glutamat va sun\'iy ta\'mlar', 'Tilga tegishi bilan miyaga o\'tkir lazzat signali', 'Chaynash shart emas'] }, b: { icon: '🥩', h: 'Tabiiy go\'sht', tone: 'good', items: ['Glutamat bor — lekin ajralishi uchun', 'Uzoq chaynash kerak', 'Ter to\'kish kerak'] }, note: 'Oson lazzat insonni giyohvanddek o\'ziga o\'rgatadi va oddiy, tabiiy ovqatlarning *ta\'mini pasaytiradi*.' },

    /* 12 */ { t: 'domino', color: 'red', k: '«Glutamat zarbasidan qaytib turish qiyin kechadi»', h: 'Oson lazzat qanday qilib *tuzoqqa* aylanadi', items: [
      { tag: '1', h: 'Tez ovqat', p: 'Lapsha, chips, kolbasa' },
      { tag: '2', h: 'Chaynamasdan lazzat', p: 'Tilga tegishi bilan miyaga signal' },
      { tag: '3', h: 'Odatlanish', p: 'Giyohvanddek o\'ziga o\'rgatadi' },
      { tag: '4', h: 'Ta\'m pasayadi', p: 'Oddiy, tabiiy ovqat bemaza tuyuladi' },
      { tag: '5', h: 'Hayotda ham', p: 'Oson mukofot — sabr sinadi' }
    ], note: 'Qancha oson lazzat — shuncha qiyin *qaytish*.' },

    /* 13 */ { t: 'big', color: 'orange', icon: '🎯', k: 'Glutamat mexanizmining ma\'naviy oqibati', h: 'Kam mehnat — katta mukofot: *sabr qobiliyati* sinadi', s: 'Hayotda ham shpargalka, tanish-bilish, «temka» va oson pul bilan katta mukofot olgan odamning mehnat qilish, sabr qilish va uzoq o\'rganish qobiliyati sindiriladi.' },

    /* 14 */ { t: 'photo', layout: 'split', color: 'green', img: '/assets/d6-ovqat.jpg', focus: 'center', k: '«Nima yesak o\'shamiz»', h: 'Har kuni yeydiganimizga *tahliliy nazar*', items: [
      'Non — qadoqlanganmi yoki klassik achitqilimi?',
      'Sut — tanamiz uni hazm qila oladimi?',
      'Kartoshka — milliy taomimizmi?',
      'Qadoq — reklamasigami yoki tarkibigami qaraymiz?'
    ], all: true },

    /* 15 */ { t: 'vs', color: 'orange', icon: '🍞', k: 'Zamonaviy non', h: 'Oylarcha *achimaydigan* non — yaxshi belgi emas', all: true, a: { icon: '🛍️', h: 'Qadoqlangan do\'kon noni', tone: 'bad', items: ['Oylarcha achimaydi', 'Glyuten va kimyoviy qo\'shimchalar o\'ta yuqori', 'Ichak florasiga zarar yetkazadi (seliakiya kasalligi)'] }, b: { icon: '🫓', h: 'Bobolarimizning noni', tone: 'good', items: ['Klassik achitqili', 'Tez qotadi', 'Tabiiy'] } },

    /* 16 */ { t: 'big', color: 'blue', icon: '🥛', k: 'Sut va laktaza', h: 'Aholining katta qismi *sigir sutini* hazm qila olmaydi', s: 'Dunyo va o\'zbek aholisining katta qismi — o\'troq xalqlar — sigir sutini hazm qila olmaydi: qorin ishadi, gaz yig\'iladi. Sut ichish shart bo\'lsa — hazmi oson va allergik ta\'siri kam *tuya yoki echki sutiga* o\'ting.' },

    /* 17 */ { t: 'duel', color: 'green', k: 'Kartoshka vs Sholg\'om', h: 'Qaysi biri *bizniki*?', a: { icon: '🥔', h: 'Kartoshka', p: 'Tarixan milliy taomimiz emas. Tarkibida shakardan ham ko\'proq uglevod — semirish va diabet ehtimoli baland.', tag: 'Kamaytiring' }, b: { icon: '🥣', h: 'Sholg\'om', p: 'Milliy va o\'ta shifobaxsh. Sholg\'om sho\'rva — ko\'paytiring.', tag: 'Ko\'paytiring' }, prize: '🏆', prizeLabel: 'Tanlov', winner: 'b' },

    /* 18 */ { t: 'steps', color: 'red', icon: '🏷️', k: 'Qadoq va tarkib standarti', h: 'Reklamaga emas — *tarkibning birinchi qatoriga* qarang', all: true, items: [
      { n: '1', h: 'Tartib qoidasi', p: 'Ishlab chiqaruvchi xomashyoni miqdori kamayishi tartibida yozadi.' },
      { n: '2', h: 'Birinchi qator', p: 'Eng ko\'p ishlatilgani — birinchi turadi.' },
      { n: '3', h: 'Xarid', p: 'Reklamaga emas, tarkibning birinchi qatorlariga qarab xarid qiling.' }
    ] },

    /* 19 */ { t: 'vs', color: 'blue', icon: '🍳', k: '«Nonushtani nima qilamiz?»', h: 'Nonushta *bo\'lsin* — lekin to\'g\'risi', all: true, a: { icon: '⚠️', h: 'Zararli', tone: 'bad', items: ['Nonushtani butunlay o\'tkazib yuborish: tana soati (sirkad rejim) buziladi', 'Diabet va mushak massasi kamayishi xavfi', 'Shakarli yormalar va uglevod — xuddi shunday zararli'] }, b: { icon: '🥚', h: 'Eng foydali nonushta', tone: 'good', items: ['Tuxum', 'Yong\'oqlar', 'Pishloq', 'Meva va sabzavotlar', 'Vaqtli taomlanish'] } },

    /* ===== 2. Harakat ===== */
    /* 20 */ { t: 'section', color: 'red', icon: '🏃', n: '2', h: 'Jismoniy harakat, sport va tana parvarishi', s: 'Kichik, lekin har kuni' },

    /* 21 */ { t: 'photo', layout: 'split', color: 'red', img: '/assets/running.jpg', focus: 'center', k: 'Jismoniy faollikning oltin qoidasi', h: '*Har kuni* jismoniy faol bo\'lish', items: [
      'Skot Adams va boshqa mutafakkirlar: sportdagi birinchi ildiz tamoyil — har kuni faol bo\'lish.',
      'Uskunalarning chiroyliligi emas.',
      'Haftada bir marta o\'zingni qiynab mashq qilish emas.',
      'Natijani — *kunlik kichik va doimiy* harakat belgilaydi.'
    ], all: true },

    /* 22 */ { t: 'stats', color: 'green', icon: '🚶', k: 'Kunlik qadam', h: 'Kuniga kamida *7000 qadam*', items: [
      { v: '160 000', l: 'Odam ustida tadqiqot', s: 'yurish va salomatlik' },
      { v: '7000', l: 'Qadam — kuniga kamida', s: 'saraton, yurak kasalligi, ertangi o\'lim xavfi keskin kamayadi' },
      { v: '700', l: 'Qadam — ovqatdan keyin', s: 'hazm yengillashadi, miya va uyqu yaxshilanadi' }
    ] },

    /* 23 */ { t: 'ask', icon: '📱', k: 'Hozir tekshiramiz', h: 'Telefoningizni oching: kecha *necha qadam* yurdingiz?', s: '7000 dan oshganlar qo\'l ko\'tarsin.' },

    /* 24 */ { t: 'big', color: 'orange', icon: '🕌', k: 'Yangilik emas', h: 'Yurish — *ming yillik* tajribadan o\'tgan hikmat', s: 'Ibn Qayyum, Seneka va Islom an\'anasida masjidu ziyoratlarga piyoda — yurib borish ming yillik tajribadan o\'tgan.' },

    /* 25 */ { t: 'vs', color: 'blue', icon: '🏋️', k: 'Ko\'rgazmaviy va mohiyatiy o\'lchovlar', h: 'Bodibilding *vs* atletizm', all: true, a: { icon: '💉', h: 'Ko\'rgazmaviy · bodibilding', tone: 'bad', q: '«Short-cut» — qisqa yo\'l', items: ['Faqat tashqi ko\'rinish va mushak hajmi', 'Steroid, ukollar (anaboliklar)', 'Yurak va tomirlarga ulkan bosim', '60 yoshga bormay turli kasalliklar'] }, b: { icon: '🫁', h: 'Mohiyatiy · atletizm', tone: 'good', q: 'Uzun yo\'l', items: ['Yurak baquvvatligi, o\'pka sig\'imi', 'Tana chidamliligi', 'Soatlab ovqatsiz marafon va velosiped yo\'llari', 'Uzoq, vaqtli va sifatli umr'] } },

    /* 26 */ { t: 'quote', color: 'green', k: 'Goodhart qonuni', q: 'O\'lchov maqsadga aylansa, u yaxshi o\'lchovligini yo\'qotadi.', by: 'Tana chiroyli bo\'lishi maqsad emas — sog\'lom bo\'lishning tabiiy mahsuli' },

    /* 27 */ { t: 'grid', color: 'orange', icon: '🦶', k: 'Tana qulayligi va kundalik parvarish', h: 'Kichik narsa — *katta* farq', cols: 2, items: [
      { icon: '👞', h: 'Oyoq panjalarining qamalishi', p: 'Tor ofis poyabzallari va baland poshnalar barmoqlarni siqib, tanaga uzluksiz noqulaylik va stress beradi. Tabiiy kenglikdagi poyabzal muvozanatni tiklaydi.' },
      { icon: '🪥', h: 'Tishlar va elektron cho\'tka', p: 'Tish toshlari va kariyesning oldini oladi — kelajakdagi stomatologik xarajat va og\'riqdan *10 barobar* ko\'proq iqtisod.' }
    ] },

    /* ===== 3. Uyqu va dam olish ===== */
    /* 28 */ { t: 'section', color: 'orange', icon: '😴', n: '3', h: 'Uyqu, dam olish va energiya', s: 'Poydevor qoida' },

    /* 29 */ { t: 'photo', layout: 'split', color: 'orange', img: '/assets/d6-uyqu.jpg', focus: 'center', k: 'Vaqtli uxlash — poydevor qoida', h: 'Quyosh botgach *2–3 soat* ichida yoting', items: [
      'Uyqu haqidagi eng muhim va buzilmas ildiz qoida — vaqtli uxlash.',
      'Uyqudan oldin — ekransiz.',
      'Uyqusiz odam yomon qaror qiladi va sekin o\'rganadi.'
    ], all: true },

    /* 30 */ { t: 'big', color: 'red', icon: '🚗', k: 'Poydevorsiz chora', h: 'Motori buzilgan mashinani *tyuning* qilish', s: 'Vaqtli uxlash kabi poydevor qoidalarga amal qilmay turib qilingan boshqa barcha dorilar, vitaminlar yoki usullar — motori buzilgan mashinani tyuning qilishga o\'xshaydi.' },

    /* 31 */ { t: 'pyramid', color: 'orange', k: 'Poydevor va tyuning', h: 'Avval *poydevor* — keyin qolgani', s: 'Poydevorsiz qurilgan qavat — bir kun qulaydi.', levels: [
      { icon: '🌅', label: 'Vaqtli uyqu', h: 'Poydevor qoida', p: 'Quyosh botgach 2–3 soat ichida yotish.' },
      { icon: '🥗', label: 'Ovqat, harakat', h: 'Ildiz qoidalar', p: 'Ehtiyojdan kam yeyish, har kuni faol bo\'lish.' },
      { icon: '💊', label: 'Dori, vitamin', h: 'Tyuning', p: 'Poydevor bo\'lmasa — motori buzilgan mashinaga tyuning.' }
    ] },

    /* 32 */ { t: 'vs', color: 'blue', icon: '🌙', k: 'Och uxlash va energiya yig\'ish', h: 'To\'q qoringa *emas* — och uxlang', all: true, a: { icon: '🍖', h: 'To\'q qoringa uxlash', tone: 'bad', items: ['Tana energiyasi taomni hazm qilishga ketadi', 'Uyqu ko\'payadi', 'Ertalab holsiz turish'] }, b: { icon: '🌙', h: 'Och uxlash', tone: 'good', items: ['Uyqu sifati oshadi', 'Qisqa vaqtda to\'liq tiklanish', 'Kun davomida qo\'shimcha *1.5–2 soat* vaqt tejaladi'] } },

    /* 33 */ { t: 'vs', color: 'orange', icon: '🛋️', k: '«Dam olish halida»', h: 'Dam olish — divanda yotish emas, *kontekstni almashtirish*', all: true, a: { icon: '🔋', h: 'Sog\'lom dam olish', tone: 'good', q: 'Kuch yig\'ish', items: ['Asosiy ishga qaytish va uni yaxshiroq qilish uchun chalg\'ish', 'Sayr, futbol, kitob, sport'] }, b: { icon: '🕳️', h: 'Eskapizm', tone: 'bad', q: 'Voqelikdan qochish', items: ['Hayot va mas\'uliyatdan qochish uchun', 'Rilslar, ketma-ket seriallar, bema\'ni shoular', 'Ichki quvvatni so\'rib oladi, muammolarni ko\'paytiradi'] } },

    /* 34 */ { t: 'steps', color: 'green', icon: '🗓️', k: 'Dam olishni rejalashtirish', h: 'Dam ham *rejaga* kiradi', all: true, items: [
      { n: '1', h: 'Pomodoro', p: 'Har 25 daqiqa darsdan so\'ng — 5 daqiqa dam.' },
      { n: '2', h: 'Kel Nyuport qoidasi', p: 'Dam vaqtini kunlik rejaga kiriting — aks holda u bekorchilikka aylanadi.' },
      { n: '3', h: 'Pareto tamoyili', p: 'Dam olish umumiy faoliyatning 20% idan oshmasin.' }
    ] },

    /* ===== 4. Stress va his-tuyg'u ===== */
    /* 35 */ { t: 'section', color: 'blue', icon: '🌊', n: '4', h: 'Stress va his-tuyg\'ular', s: 'Dushman emas — signal' },

    /* 36 */ { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d6-meditatsiya.jpg', focus: 'center', k: 'Stress', h: 'Stress — *dushman emas*, signal', items: [
      'Qisqa stress — harakatga undaydi. Uzoq, surunkali stress — buzadi.',
      'Manbasini toping: ish, qarz, munosabat, uyqusizlik.',
      'Vosita: yurish, chuqur nafas, tabiat, yozib chiqish, ishongan odam bilan gaplashish.'
    ], all: true },

    /* 37 */ { t: 'vs', color: 'blue', icon: '🌊', k: 'Ikki xil stress', h: 'Qisqa stress *foyda*, uzoq stress *zarar*', all: true, a: { icon: '⚡', h: 'Qisqa (o\'tkir) stress', tone: 'good', q: 'Imtihon, muhim uchrashuv, muddat', items: ['Diqqatni jamlaydi', 'Harakatga undaydi', 'Tugaydi — tana tiklanadi'] }, b: { icon: '🌫️', h: 'Uzoq (surunkali) stress', tone: 'bad', q: 'Oylab davom etadigan tashvish', items: ['Uyquni buzadi', 'Immunitetni tushiradi', 'Qaror sifatini pasaytiradi'] }, note: 'Stressni yo\'q qilib bo\'lmaydi — lekin *uzoq stress*ga aylanishiga yo\'l qo\'ymang.' },

    /* 38 */ { t: 'flow', color: 'orange', icon: '💛', k: 'Emotion', h: 'Reaksiya emas — *javob*', items: ['😶 Nomlang: nima his qilyapman?', '🔍 Sababini toping', '⏸️ To\'xtang — nafas oling', '🎯 Javobni tanlang'], all: true, note: 'His-tuyg\'u — ma\'lumot. Uni bostirmang, lekin unga *bo\'ysunmang*. His va harakat orasida — pauza.' },

    /* ===== 5. Miya va raqamli muhit ===== */
    /* 39 */ { t: 'section', color: 'red', icon: '🧠', n: '5', h: 'Ruhiy salomatlik, ong va raqamli muhit parhezi', s: 'Miya ham ovqatlanadi' },

    /* 40 */ { t: 'stats', color: 'blue', icon: '🫁', k: '«Bir kislorodning safari»', h: 'Miya — tananing *eng och* a\'zosi', items: [
      { v: '2%', l: 'Tana vaznidan', s: 'miya shuncha joy egallaydi' },
      { v: '40%', l: 'Kislorod va quvvatdan', s: 'miya shuncha iste\'mol qiladi' }
    ], note: 'Dim, derazasi yopiq xonada miya protsessori sekinlashadi — uyqu keladi, diqqat tarqaydi. *Tabiat qo\'ynida yurish* va toza havo miya faoliyatini keskin oshiradi.' },

    /* 41 */ { t: 'vs', color: 'red', icon: '⚡', k: 'Dofamin balansi · Anne Lembke, «Dopamine Nation»', h: 'Dofamin harakatdan *oldin* kelsa — zarar, *keyin* kelsa — foyda', all: true, a: { icon: '📱', h: 'Arzon dofamin', tone: 'bad', q: 'Harakatdan OLDIN ajraladi', items: ['Rilslarni titkilash', 'Video o\'yinlar', 'Shirinlik', 'Keyin — bo\'shliq va tushkunlik'] }, b: { icon: '🏔️', h: 'Foydali dofamin', tone: 'good', q: 'Harakat va qiyinchilikdan SO\'NG ajraladi', items: ['Uzun matn o\'qish', 'Zalda ter to\'kish', 'Vazifani bitirish', 'Keyin — xotirjamlik va ruhiy yengillik'] } },

    /* 42 */ { t: 'grid', color: 'green', icon: '🧗', k: 'Og\'riqning foydalari', h: 'Qiyinchilik — *o\'sish nuqtasi*', cols: 3, items: [
      { icon: '🪜', h: 'Zinadan chiqish', p: 'Lift o\'rniga — har kuni.' },
      { icon: '🙈', h: 'Nomahramdan ko\'z uzish', p: 'Nafsni tiyish — har kuni.' },
      { icon: '🍰', h: 'Shakardan voz kechish', p: 'Shirinlikka «yo\'q» — har kuni.' }
    ], note: 'Har kuni erinayotgan va qiyin tuyulayotgan ishlarni bajarish — ruhiy intizomni va *xarakterni* baquvvat qiladi.' },

    /* 43 */ { t: 'ask', icon: '🧠', k: 'Halol javob bering', h: 'Oxirgi marta qachon qiyin savolni *AI\'siz*, o\'zingiz o\'ylab yechdingiz?', s: 'Kecha? Bir hafta oldin? Eslay olmayapsizmi?' },

    /* 44 */ { t: 'big', color: 'orange', icon: '🦯', k: 'Raqamli glutamat va AI «Reheboam» tuzog\'i', h: 'Hassaga qancha suyanilsa — oyoqlar shuncha *zaiflashadi*', s: 'Sun\'iy intellekt va tayyor yechimlarga fikrlashni topshirish — aqliy zaiflashuvga va tanqidiy fikrlashning yo\'qolishiga olib keladi. «Inson mehnatsiz — aqliy qiynalishsiz — halok bo\'ladi.»' },

    /* 45 */ { t: 'vs', color: 'blue', icon: '🌿', k: '«Premium hayot paradoksi haqida»', h: 'Oflayn hayot — *yangi premium*', all: true, a: { icon: '📲', h: 'Qulayotgan omma', tone: 'bad', items: ['Onlayn shovqin', 'Reels', 'Tunsiz skrolling'] }, b: { icon: '📚', h: 'Erkin, daromadi va fikrlashi yuqori tabaqa', tone: 'good', items: ['Oflayn hayot', 'Tabiat', 'Qog\'oz kitoblar', 'Kunlik tafakkur'] }, note: 'Oflayn bo\'la olish — ruhiy salomatlik va yuqori diqqatning *bosh belgisi*.' },

    /* 46 */ { t: 'photo', layout: 'split', color: 'blue', img: '/assets/d6-telefon.jpg', focus: 'center', k: 'Magnetic rays', h: 'Telefon — *yotoqxonadan* tashqarida', items: [
      'Telefonni yostiq ostiga qo\'ymang — yotoqxonadan chiqaring.',
      'Uxlashdan oldin — parvoz rejimi.',
      'Kun davomida ham ekranni kamaytiring: ko\'z, uyqu va diqqat uchun.'
    ], all: true },

    /* ===== Yakun ===== */
    /* 47 */ { t: 'table', color: 'green', icon: '📊', k: 'Amaliy prinsiplar · qiyosiy jadval', h: 'Tuzoq va uning *ildiz muqobili*', head: ['Yo\'nalish', 'Zararli odat / tuzoq', 'Sog\'lom ildiz muqobili', 'Natija'], rows: [
      ['Taomlanish', 'Arzon lazzat: glutamat, shakar, do\'kon noni, kartoshka', 'Och bo\'lganda, ehtiyojdan kam yeyish; sholg\'om, uy taomlari', 'Hazm yengillashadi, ichak florasi va vazn tiklanadi'],
      ['Jismoniy faollik', 'Ko\'rgazmaviy bodibilding, steroidlar, harakatsizlik', 'Har kuni muntazam faol bo\'lish, *7000 qadam*', 'Yurak-qon tomir baquvvatligi, uzoq va sifatli umr'],
      ['Uyqu va rejim', 'Kechki to\'q qorin, tunda ekran qarshisida', 'Quyosh botgach *vaqtli yotish*, och uxlash', 'Chuqur tiklanish, tetiklik, vaqt tejaladi'],
      ['Ruhiyat va dofamin', 'Arzon dofamin: rilslar, oson mukofot, eskapizm', 'Mehnat va qiyinchilikdan so\'nggi tabiiy dofamin', 'Xotirjam ong, yuqori diqqat, ichki halovat'],
      ['Raqamli muhit', 'SI va chatbotlarga fikrlashni topshirish', '*Oflayn hayot*, qog\'oz kitob, tabiatda tafakkur', 'Tanqidiy fikrlash va aqliy erkinlik']
    ] },

    /* 48 */ { t: 'quote', color: 'orange', k: 'Yakuniy xulosa', q: 'Baxtning 99% qismi — tom, non va sog\'liqdir. Qolgani shunchaki bonus. Sog\' odam mingta narsani xohlaydi, kasal odam esa atigi bitta narsani — sog\'ayishni xohlaydi. O\'zingizda bor eng ulkan baxt elementini o\'tkinchi havaslar ortidan quvib yo\'qotmang.', by: 'Jahongir Zoxidov insholaridan' },

    /* 49 */ { t: 'checklist', color: 'green', icon: '✅', k: 'Kunlik sog\'liq checklisti', h: 'Har kuni *tekshiring*', items: [
      { n: '1', h: 'Och bo\'lgandagina — va *ehtiyojdan kam* yedim' },
      { n: '2', h: 'Shakar va glutamatli ovqatdan *tiyildim*' },
      { n: '3', h: '*7000 qadam*, ovqatdan keyin 700 qadam' },
      { n: '4', h: 'Quyosh botgach 2–3 soatda, *och* yotdim' },
      { n: '5', h: 'Dam — rejali: 25 daqiqa ish, 5 daqiqa dam' },
      { n: '6', h: 'Bitta *qiyin ish* qildim (zina, shakardan voz kechish)' },
      { n: '7', h: 'Toza havoda, tabiatda yurdim' },
      { n: '8', h: 'Telefon yotoqxonadan tashqarida' },
      { n: '9', h: 'His-tuyg\'uni nomladim: bugun nima his qildim?', star: true }
    ] },

    /* 50 */ { t: 'steps', color: 'blue', icon: '📝', k: 'Uyga vazifa', h: 'Bir hafta *sinab ko\'ring*', all: true, items: [
      { n: '1', h: 'Uyqu', p: '7 kun quyosh botgach 2–3 soat ichida, och qoringa yoting. Ertalabki holatingizni yozing.' },
      { n: '2', h: 'Qadam', p: 'Har kuni 7000 qadam va har ovqatdan keyin 700 qadam.' },
      { n: '3', h: 'Tarkib', p: 'Uyingizdagi 3 ta qadoqlangan mahsulotning tarkibidagi birinchi qatorni o\'qing.' },
      { n: '4', h: 'Telefon', p: 'Telefon yotoqxonadan tashqarida uxlaydi. Ertalab birinchi 30 daqiqa — ekransiz.' },
      { n: '5', h: 'Qiyin ish', p: 'Har kuni bitta qiyin ish: zina, shakarsiz kun yoki uzun matn.' }
    ] },

    /* 51 */ { t: 'end', icon: '🙌', h: 'Rahmat', s: '6-dars yakunlandi · Keyingi dars: 7-dars — Ilm' }
  ]
};

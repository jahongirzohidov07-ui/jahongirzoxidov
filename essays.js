/* =====================================================================
   INSHOLAR ARXIVI — barcha insholar shu ro'yxatda saqlanadi.

   Yangi insho qo'shish uchun ro'yxat oxiriga shunday blok qo'shing:

     {
       folio: '3',                  // doimiy raqam: havola (#insho-3), o'qishlar soni va izohlar shunga bog'langan
       raqam: '3',                  // ixtiyoriy: ro'yxatdagi tartib raqami (yo'q bo'lsa folio olinadi)
       title: 'Insho sarlavhasi',
       date:  '25.07.2026',         // kun.oy.yil
       body: [
         "Birinchi xatboshi.",
         "Ikkinchi xatboshi."
       ].join(PARA)
     },

   Qoidalar:
     - Har bir xatboshi alohida qatorda, qo'shtirnoq ichida, oxirida vergul.
     - Oxirgi xatboshidan keyin vergul qo'yilmaydi.
     - Matn ichida qo'shtirnoq kerak bo'lsa, oldiga chiziqcha qo'yiladi: \"shunday\"
     - Faqat ASCII apostrof ishlatiladi: '  (' yoki ' emas)

   Matn belgilari (xatboshi boshida turadi):
     "## Sarlavha"        -> bo'lim sarlavhasi (h2, tepasida chiziq bilan)
     "> Iqtibos matni"    -> iqtibos bloki (chapda chiziq, kursiv)
     "- Ro'yxat bandi"    -> belgili ro'yxat; ketma-ket kelganlari bitta ro'yxatga birlashadi
     https://...          -> matn ichidagi havola avtomatik bosiladigan bo'ladi
     [Nom](https://...)   -> rangli, bosiladigan nom (havola manzili ko'rinmaydi)
     **muhim gap**        -> qalin (qora) harf bilan ajratiladi
     *gap*                -> kursiv (qiya) harf
     ![izoh](/assets/insho/fayl.svg) -> chizma (alohida xatboshida), ostida izohi bilan
   Boshqa hamma xatboshi oddiy matn (p) bo'lib chiqadi.

   Yozuvlar: saytda Lotin · Кирилл · Yangi alifbo · English tugmalari bor.
   Kirill va yangi alifbo avtomatik o'giriladi (yozuv.js) — alohida yozish shart emas.
   Inglizcha tarjima essays-en.js faylida, shu folio raqami bilan qo'shiladi;
   tarjimasi yo'q insho English tanlanganda o'zbekcha ko'rinadi.
   Diqqat: har bir inshoning BIRINCHI xatboshisi oddiy matn bo'lsin —
   bosh harf (drop cap) shunda to'g'ri ishlaydi.
   ===================================================================== */

const PARA = '\n\n';

window.ESSAYS = [
    {
      folio: '1',
      title: 'Yangi uy qurdik',
      date: '21.07.2026',
      body: [
        "Do'stlar, bugungi insho odatdagidek emas.",
        "Bir necha yildan beri Telegram kanalimizda insholar yozib keldik. Ikkinchi, beshinchi, o'n beshinchi... har birida bir mavzu, bir fikr, bir umid bilan yozdik. Loyihamiz shu yerda o'sdi, shu yerda ko'paydi.",
        "Lekin bir muammoni doim his qilib keldim.",
        "Telegram — tez xabar uchun qurilgan platforma. Kimdir sizga \"salom, bugun uchrashamizmi\" deb yozadi, siz \"ha\" deb javob berasiz. Bir necha soniyalik almashinuv. Uzun matn uchun Telegram noqulay joy. Skroll qilaverasiz, qilaverasiz. Qayerda boshlanib, qayerda tugaganini yo'qotib qo'yasiz. Ekran kichkina, harflar zich, ko'z charchaydi.",
        "Insholarimiz esa uzun. Ba'zida ikki ming so'zdan oshadi. Bir fikrni to'liq ochish, misollar bilan boyitish, tarixdan, ilmdan, hayotdan dalil keltirish uchun joy kerak.",
        "Shuning uchun ham yangi uy qurishga qaror qildik.",
        "Bu sayt — o'sha muammoni yechish uchun. Uzun insholarni, o'qishga qulay, ko'zga yengil, sahifalar orasida adashib qolmaydigan tarzda joylashtirish uchun.",
        "Telegram kanalimiz albatta davom etadi. U yerda qisqa fikrlar, e'lonlar, va yangi insho chiqqanida xabar bo'ladi. Lekin insholarning o'zi, asosiy uy, endi shu yerda bo'ladi.",
        "Nega bu qadam muhim?",
        "Chunki yozish vaqtinchalik ish emas. Beshinchi inshoning ham, ellikinchisining ham, bir necha yildan keyin o'qilishini xohlayman. Telegramda eski xabar tezda ko'milib ketadi. Yangi kanal a'zosi birinchi kundan boshlab yuz elliktacha insho orasida adashib qoladi. Bu yerda esa tartib bor. Sarlavha bor. Sana bor. Izlash imkoni bor.",
        "Bu — sizlar uchun ham, o'zim uchun ham arxiv. Yillar davomida yozgan fikrlarimizning uyi.",
        "Birinchi insho sifatida shu e'lonni yozishni to'g'ri deb bildim. Chunki har bir yangi boshlanish, nega boshlanganini tushuntirishdan boshlanadi.",
        "Xush kelibsiz yangi uyimizga."
      ].join(PARA)
    },
    {
      folio: '2',
      raqam: '4',          // ro'yxatda ko'rinadigan tartib raqami
      title: "Bitta barg bilan butun daraxt haqida xulosa chiqarilmaydi",
      date: '21.07.2026',
      body: [
        "Do'stlar, bugun bir kuzatuvimni sizlar bilan bo'lishmoqchiman.",
        "Suhbatlarni kuzataman. Ijtimoiy tarmoqlardagi izohlarni o'qiyman. Bir narsa ko'pincha takrorlanayotganini payqadim: murakkab holatlarni soddalashtirish, umumiylashtirish, ingliz tilida buni Generalization deyishadi.",
        "Turmushi o'xshamagan erkak, hamma ayollarni noshukurga chiqaradi. Turmushi o'xshamagan ayol, hamma erkaklarni xiyonatda ayblaydi, \"erkaklarning hammasi shunaqa\" deydi, xuddi yer yuzidagi to'rt milliard erkakning hammasi bilan munosabat qilib ko'rgan va shu 4,000,000,000 erkakning hammasi unga xiyonat qilishga ulgurgandek.",
        "Bir kishi bir marta xato qiladi. O'tmishida ham, kelajagi uchun ham xulosa chiqarib qo'yiladi. Kelajakda ham shu xatoni qiladi deb hukm chiqarib qo'yiladi. Hukm chiqarish bizga emas-ku, hukm chiqaruvchi yagona Zot bor-ku. Qalblar egasi kim ekanligini unutmaylik.",
        "Rossiyada o'zbeklar ko'p qora ishga borgani uchun, \"hamma o'zbeklar shunaqa savodsiz, qora ishchi xalqi\" deyishadi. Koreyada bir o'zbek mashinani yomon haydab, bir kishining o'limiga sababchi bo'ladi. Shundan butun xalq uchun xulosa chiqarishadi: demak, o'zbeklar mashinani yomon haydaydi.",
        "Bir oiladan ikki kishining oilasi o'xshamasa, \"Ko'rdingizmi, bu oila farzandlarini yomon tarbiyalagan ekan\" deyishadi. Ajrashishning ortida qancha sabab yotishi mumkinligini o'ylab ham o'tirishmaydi. Ikkala tomon ham yaxshi tarbiyalangan bo'lishi, faqat xarakterlari mos kelmasligi mumkinligini eslashmaydi. Yaxshi tarbiyalanmagan bo'lishi ham, bo'lmasligi ham mumkin. Lekin sabablar har doim individual bo'ladi.",
        "Bu holatni yana ko'p joyda ko'rish mumkin. Bir yosh yigit behuda yursa, \"hozirgi yoshlar shunday\" deyishadi. Bir shifokor xato qilsa, \"shifokorlarga ishonib bo'lmaydi\" deyishadi. Bir mazhab vakilining xatosi, butun mazhabga yopishtiriladi. Katta farzand yaramas chiqsa, \"bu oilaning bolalari shunday\" deb kichigiga ham gumon bilan qarashadi. Bir viloyat odami o'g'rilik qilsa, \"falon viloyat odamlari hammasi o'g'ri\" yoki \"falon viloyatliklar o'g'ri bo'ladi\" deyishadi. Boy odam takabburlik qilsa, \"boylar shunday\" deyishadi, kambag'al ishlamasa, \"kambag'allar dangasa\" deyishadi. Bitta musulmonman degan inson jinoyat qilsa, terrorist deb tamg'alashadi.",
        "Bularning barchasida bitta ildiz bor: bir yoki ikkita odamning qilgan ishi, butun bir xalq yoki guruhning xarakteriga aylantirib qo'yiladi. Chunki miya uchun bu qulay va oson yo'l. \"Har bir odamni alohida baholash\" charchatadi, vaqt oladi. \"Hammasi bir xil\" deb qo'yish, miyaga osonlik beradi. Osonlik esa ko'pincha yolg'on ustiga qurilgan bo'ladi.",
        "So'zlarimizga ham e'tibor berishimiz kerak. \"Hamma\" deganda, chindan hammasini nazarda tutamizmi? \"Ko'pchilik\" deganda, buning ortida aniq raqam bormi, yoki bu ham shunchaki taassurotimizmi? Aniq bilmasak, \"ba'zilari\" deyish haqiqatga yaqinroq bo'ladi.",
        "Bu umumlashtirishning eng nozik va eng xavflisi, ibodat bilan xulqni aralashtirib yuborish.",
        "Hijobli qiz yomon ish qilsa, \"ko'rdik hijobliklarni\" deyishadi, butun hijoblilarga tamg'a qo'yishadi. Namozxon odamning gunohi ko'rinib qolsa, \"namozxonlar ham shunaqa ekan\" deyishadi.",
        "Bu ikki xil narsani bir-biriga chalkashtirish.",
        "Namoz, Allohga bo'lgan aloqa, ibodat. Gunoh, insonning kuchsizligi, nafsining imtihoni. Bittasi ikkinchisini bekor qilmaydi. Namoz o'qiydigan odam gunoh qilsa, bu uning namozi yolg'on degani emas. Bu uning nafsi hali to'liq tarbiyalanmagan degani, xolos. Qur'oni karimda aytilgan: namoz yomonlik va buzuqlikdan qaytaradi (Ankabut surasi, 45-oyat). Bu, vaqt o'tishi bilan ishlaydigan jarayon, bir zumda tugaydigan sehrli tugma emas.",
        "Hijob, Allohning amriga itoat, kiyim orqali ko'rsatilgan bo'ysunish. Hijobli qizning xulqi yomon bo'lsa, bu hijobning ma'nosizligini ko'rsatmaydi. Bu, o'sha qizning boshqa bir sohada hali kurashayotganini ko'rsatadi, xolos.",
        "Eng muhimi shuki, bular ikki alohida savol-javob. Qiyomat kunida namoz alohida so'raladi, gunoh alohida so'raladi. Ular bir-birining o'rniga o'tmaydi, lekin bir-birini ham yo'qqa chiqarmaydi. Har bir jon o'z qilmishi uchun javobgar. Bir jonning gunohini boshqasi ko'tarmaydi, bu Qur'onning ishorasi.",
        "Odamlar bu ikkisini nega aralashtirib yuboradi?",
        "Chunki inson miyasi butun ko'rishni yaxshi ko'radi. \"Bu odam yaxshi\" yoki \"bu odam yomon\" degan yorliq qo'yish qulay. \"Bu odam bu sohada kuchli, u sohada hali kurashayotgan odam\" deyish, bunga qaraganda ancha qiyin.",
        "Lekin haqiqat shunday: hech kim to'liq yaxshi yoki to'liq yomon emas. Har kim turli sohalarda turli darajada. Namozi kuchli, sabri kuchsiz odam bor. Sabri kuchli, ilmi kam odam bor. Ilmi baland, ixlosi kuchsiz odam bor. Bularning hech biri, boshqasi haqida to'liq xulosa bermaydi.",
        "Umumlashtirish yana bir zararni olib keladi, u ko'pincha o'zini oqlash uchun ishlatiladi. \"Hamma erkak shunday\" deydigan kishi, o'z yarasini tushuntirishga harakat qiladi. \"Namozxonlar ham gunoh qiladi-ku\" deydigan kishi, o'z namoz o'qimasligini oqlashga harakat qiladi. Umumlashtirish, ba'zan aybni yumshatishga harakat, o'zini yengillashtirish usuli bo'lib chiqadi.",
        "Shuning uchun ham keyingi safar \"bularning hammasi shunaqa\" degan gap tilimizga kelsa, bir soniya to'xtaylik. So'raylik: men nechta kishini ko'rdim? Ular haqiqatan ham butun guruhni bildiradimi? Ularga qarab butun guruhga hukm chiqarishim to'g'rimi? Yoki men bitta bargga qarab, butun daraxt haqida hukm chiqaryapmanmi?",
        "Har bir insonning o'z savol-javobi bo'ladi. Har bir xato, o'z egasiga tegishli. Har bir yaxshilik ham shunday. Guruhga yopishtirilgan tamg'a, aslida hech kimga to'g'ri kelmaydi, chunki guruh degan narsa yo'q, faqat alohida-alohida insonlar bor, har biri o'z yo'lida, o'z kurashida."
      ].join(PARA)
    },
    {
      folio: '3',
      raqam: '2',          // ro'yxatda ko'rinadigan tartib raqami
      title: '28 Yoshimda anglaganlarim',
      date: '11.03.2025',
      body: [
        "28 yoshga ham kirishga yaqin qolibman. O'rtacha erkaklar 71 yil yashashini hisobga olsak, umrimning 40%ni yashab bo'libman. Lekin hayotga bo'lgan qiziqishim yanada oshib bormoqda, chunki hayotdagi qiziq voqealar menga juda ko'p narsalarni tushunishimga yordam bermoqda. Aslida meni tashvishlantirgan narsa — bu dunyoda yashashga ko'nikib qolish deb blogida bir o'quvchim yozgani meni juda qattiq o'ylantirib qo'ygandi. Yashashga ko'nikib qolmasdan yashagan davrimizdagi o'rganganlarimizni sizlar bilan bo'lishib chiqsam.",
        "Oxirgi 2-3 yilda tushungan narsalarim 25 yoshimgacha tushungan narsalarimdan karrasiga ko'p.",
        "Shuning uchun bugun shu yoshgacha kirib anglagan narsalarimni tushuntirib berishga harakat qilaman. Uzun bo'ladi, sabrlilar muvaffaqiyatga boshqalarga qaraganda ko'proq erishishini takidlashim shartmasdir.",
        "## Do'stlar",
        "Boshida do'st deganda hazil-huzul qilib yuradigan, har xil ko'ngilochar narsalar (kompyuter o'yinlari, telefondagi o'yinlar, video, kino, qizlar haqida gaplashish, g'iybat)ga meni tortadiganlarni do'st deb yurar edim, keyinchalik angladimki, bu haqiqiy do'stlar emas ekan.",
        "Haqiqiy do'st seni foydali narsalarga (ertalabki badantarbiyaga, ilmga, namozga, tarovehga, ro'zaga, yaxshilik qilishga, bemor borib korishga, janozaga borishga va hakazo) chaqiradiganlar ekan.",
        "Do'stingizman deb yurganalar sizni qayerga ko'proq chaqirishadi, yaxshilab e'tibor bering.",
        "Shu oddiygina filtrdan keyin do'stlaringiz soni barmog'ingiz sonichalik chiqmay qoladi. Endi esa o'zingiz xuddi shunday do'st bo'lishni boshlang. Shunday do'stlikka arziydiganlar siz bilan boradi, arzimaydiganlar bormaydi.",
        "Birovlarni yonida sizning ustingizdan kulib \"ochko\" ishlaydiganlar haqiqiy do'st nimaligini bilmaydiganlardir. Chunki ular sizning obro'yingizni birovlar oldida to'kish orqali o'zlariniki oshirishmoqchi bo'lishadi. Dushman ham shunday qiladi-ku.",
        "## Oila",
        "Ota-onangizdan boshqasiga foydangiz tegmasa kerak emassiz. Birinchi o'rinda qadrlashingiz shart bo'lgan insonlar ota-onamiz ekanligini hammamiz bilamiz. Ammo qanday qadrlashimiz kerak? Shunchaki ozgina gaplashib o'tirish, shunchaki quchoqlab o'pish, shunchaki duolarini olib uydan chiqib ketish, shunchaki yaxshi ko'rishimizni ularga aytish (o'zim shuni qilishga qiynalyapman).",
        "Oila qurishda faqatgina qomatiga, jismiga qarab turmush qurish, ayollar esa mashinasiga, uyiga qarab turmush qurish sizni kattagina jarlikka olib kelib qo'yadi. Turmush qurmoqchi insoningiz bilan boshqa-boshqa rollarda oldin gaplashib ko'rish eng zo'ri ekan. Masalan, siz ustoz u sizning o'quvchingiz, siz rahbar u xodim, siz o'quvchi u ham o'quvchi, siz mijoz u xaridor shunga o'xshash. Lekin siz bo'lajak kuyov u bo'lajak kelin rollarida bo'lsa bir-birlarizdan kamchilik, ayblaringni yashirib ikkalalaringiz ham mukammal inson bo'lib ko'rinib qolasiz, oxiri umidlar puchga chiqadi. Kutuvlar reallikka to'g'ri kelmasa xafachilik keladi.",
        "Shunday ayollarni ko'rdim, erining telefonini tinmay titadi, o'zining telefonini 3 karra parollab tashlagan. Ikki marta salom-alik qilib yozishgan ayoldan rashk qilib uyiga ketib qoladi. Lekin shunday ayollarni eshitdim, eri ochiq-oydin xiyonat qilsa ham, e'tibor bermasa ham, ishdan kelsa \"dadajonisi yaxshi keldingizmi\" deb kutvolsa, \"nima ishing bor\" deb so'kib bersa ham, har kun ertalab issiq non yopsa ham, kunbay ishga chiqishga majburlansa ham biror marta uyiga ketib qolmagan.",
        "Shunday ayollarni eshitdim, eri farzandiga arzon kasha olib kelgani uchun ketib qolgan. Shunday ayollarni eshitdim, qaynonasi kasha bermaysiz farzandingizga desa ham umuman uyidan ketmagan. Shunday ayollarni ko'rdim, eri nima olib kelsa ham xursand bo'lmaydi, shunday ayollarni ko'rdim bir qurt olib kelsangiz, mashina olganday samimiy xursand bo'ladi.",
        "Shunday ayollarni ko'rdim ajrashishga yo'q joydan sabab topa oladi. Shunday ayollarni eshitdim, ajrashishga 100ta sabab bo'lsa ham 1ta sabab topib yashaydi.",
        "## Ishxona",
        "Xodim bo'lib juda kam ishlaganim uchun rahbar tomondan yozaman.",
        "Shunday xodimlarni ko'rdim arzimagan narsalarni bahona qilib oyligini oshirmoqchi bo'laverdi, shunday xulqli xodimlarni ko'rdim uning bu xulqiga oyligini oshirgingiz kelaveradi.",
        "Shunday xodimlarni ko'rdim, tili va harakatida juda yaxshi inson, lekin qalbidagi, dilidagilarni reaksiyalari sotib qo'yaveradi. Gap so'zlari sizning oldingizda qo'li ko'ksida, siz yo'q joyda \"mana shu to'qimni taqib yurishimiz kerak ekan\" deb beyjikni otib yuboradi. Shunday xodimlar borki, beyjikni faxr bilan ko'chalarda ham taqib yuradi.",
        "Shunday xodimlar bor ilmi kuchli, lekin qalbigacha yetib bormagan. Ilm hali yuqmagan. Shunday xodimlar bor ilmi kam, lekin qalbi toza.",
        "Shunday xodimlar bor 10ta achchig'ingizga chidaydi 1ta shiriningizdan boshi osmonga yetadi, uzoq muddatda ishonsa bo'ladi. Shunday xodimlaringiz bor 10ta shiringizdan xursand bo'ladi, 1ta achchiqqa chiday olmaydi. Undaylarga uzoq muddatda ishonib ham bo'lmaydi.",
        "Shunday xodimlar bor sizning haqligingizni tushumasa ham sizga ishonadi, shunday xodimlar bor sizni haqligingizni tushunib turib sizga ishonmaydi.",
        "Shunday xodimlar bor adolat so'rab baqirib qoladi, ularga adolatni ko'rsatib qo'ysangiz tan ololmay qoladi.",
        "Shunday hodimlar bor xatolari bor tan oladi, to'g'rilaydi, hech bo'lmasa to'g'rilashga harakat qiladi. Shunday xodimlar bor xatolarni boshqalardan qidirib, aybni doim boshqaga yuklaydi.",
        "Umar ibn Xattobdek adolat ramzi sanalgan inson vaziyatni baholashda bir tomonning fikri bilan xulosa qilib yuborayotgan holatda xato qiladigan voqeani o'qib qoldim, men ham rahbar sifati xatolarim juda ham ko'p, lekin mendan mukammallik kutadigan xodimlar ham ko'p.",
        "Meni tashqaridan mukammal deb kutib, yaqinroq tanishganda men ham oddiy banda ekanligimni xato qilishimni bilganda kutuvi reallikka to'g'ri kelmay xafa bo'lib menga bo'lgan hurmati tushgan xodimlar ham bor. Lekin xuddi shu vaziyatlarda xatolarimni tuzatishga yordam berayotgan ko'pincha o'zimni isloh qilish uchun maslahatlar olib turadigan xodimlarimiz ham bor.",
        "## Din",
        "Men 2025 yildan yashashni boshladim. Chunki shu yildan namozimni to'liq yo'lga qo'ya oldim, to'g'ri yo'lga qo'ya oldimmi bilmadim. Lekin to'g'rlashga harakat qilyabman. Lekin meni to'sib turgan narsa ilm ekanligini keyinchalik angladim. O'zim har qanday muammoning tagida ilmsizlik yotadi der ekanman-u, shu joyda shu narsani esdan chiqaribman.",
        "O'quvchilarimga ham bu narsani tezroq singdirib, namozni tezroq boshlasin deb harakat qilyabman, ularda ham qayerdadir ilm yetmayotganligi tufayli qimmatli vaqtini ortga suryabdi.",
        "Tasavur qiling azroil kelib, 3 kundan keyin joningni olaman desa, 3 kun tinmay duoda namozda, zikrda, tavbada bolasiz. Lekin biz xuddi 3 kundan keyin o'lmaslik kafolatimiz bordek yashaymiz. Azroil bizga seni 70 yoshingda joningni olaman deb garantiya berib ketgandek yashaymiz.",
        "Axir o'lganimizdan keyin birinchi hisob-kitob qilinadigan narsamiz namozdan-ku.",
        "Axir namoz o'qishga mening ishim, o'qishim va boshqa balo-battarlar to'sqinlik qiladi-ku dersiz. Bunga bir xodimamizning blogidan chiroyli javob: Munofiq ko'chaga chiqqanda qornining g'amida chiqadi, mo'min namozining g'amida chiqadi. (qalbimni tilka pora qilib tashladigan jumla edi)",
        "Hali tayyormasman degan odam aslida nimaga tayyor emasligini o'zi ham bilmaydi. (hijob oramoqchi qizlar ham o'zini nimagadur tayyormasman deb o'ylaydi) Buni unga uning nafsi aytadi. Hali yoshsan o'ynab qolsangchi, keyin tavbangni qilib, namozingni o'qib olaverasan. Azroildan ruhsat ovolish kerak unaqada. Aslida nafsi tayyor emas. Nafsi isyon qilayotgan bo'ladi.",
        "Avratni yopish haqida buyruq kelganidan keyin mo'mina ayollar darhol unga amal qilishgan. Hadislarda aytilishicha, oyatlar nozil bo'lgandan so'ng, ayollar darhol jilboblarini olib, o'zlarini to'liq yopgan holda yurishni boshlaganlar, yoki hech bo'lmasa qo'liga ilingan matolar bilan o'zlarini to'sishgan. \"Hali tayyormasman\", \"qalbimiz toza bo'lsa bo'ldi\", \"uni ma'suliyati borda\" deyishmagan. Nafsingizning nayranglariga aldanib qolmang aziz Ayollar.",
        "Namozning tibbiy jihatdan foydalari ham aniqlangan.",
        "Namoz o'qish diqqatni jamlash qobiliyatini oshirishga yordam beradi. Zamonaviy tilda medidatsiya deya aytilayotgan narsa aslida o'zimizning namozda bor. Muntazam namoz o'qish nafaqat ruhiy, balki aqliy salomatlik uchun ham foydalidir. U diqqatni jamlash qobiliyatini oshirishga, stressni kamaytirishga va umumiy farovonlikni yaxshilashga yordam beradi.",
        "Tepada bu dunyodagi foydalarini qisqa aytib o'tdim. Pastda oxiratdagi foydasi haqida bir hadis:",
        "Rasululloh (sollallohu alayhi va sallam) namozning inson hayotidagi ahamiyatini tushuntirish uchun quyidagi misolni keltirganlar:",
        "\"Agar sizlardan biringizning eshigi oldida daryo bo'lib, u har kuni besh marta u yerda cho'milsa, uning badanida biror kir qolarmidi?\"",
        "Sahobalar: \"Yo'q, hech qanday kir qolmaydi,\" deyishdi.",
        "Shunda Rasululloh (sollallohu alayhi va sallam): \"Besh vaqt namoz ham xuddi shunday. Alloh ular orqali gunohlarni yuvadi,\" dedilar.",
        "## Sog'lik",
        "Shaha Dolimovning misollarini ketiraman:",
        "Agar sizga Ferrari rusumidagi moshina berilsa, qanday asragan bo'lar edingiz. Albatta, har kuni yaxshilab qaram eng zo'r benzin, eng zo'r moy quyib, zarar yetmasdan haydashga harakat qilasiz.",
        "Sizning badaningiz ham xuddi shunday, lekin biz unga eng yomon benzin (Gazli ichimliklar, Ko'la Pepsi, Energetik ichimliklar) quyamiz, eng yomon moy (fast food, zararli ovqatlar) quyib yana bakni to'ldirib mashinamiz ichigacha quyvoramiz. Ferarini har kun moyka qilardik, badanimizni esa har kun moyka (jismoniy mashqlar) qilmaymiz.",
        "Bizning tanamiz harakatga mo'ljallangan harakat qilmay bir joyda qolsangiz oyoq qo'lingizni uyushib qoladi.",
        "Sigaret, nos, aroqni boshlamang tamom. Boshlasangiz to'xtatishni iloji yo'q. Yoshligimdan bu narsalardan uzoq yurganim uchun, sinfdoshlar orasida bunaqa narsa menga yoqmasligini bilib mendan uzoqda bu ishlarini qilishadi. Eng kamida meni chaqirishmaydi. Lekin ichkilikni oldin ichib endi tashlaganlarga bosim juda katta. Oldin ichib yurarding-ku alkash endi odam bo'p qoldingmi deb majburlab ichkizishadi. Bu gaplarni erkaklik \"g'ururi\" bor lekin mo'minlik iymoni sust odam qabul qiladi, yana eski ichlilikni ichadi. Boshlamaganda bunaqa gaplar bo'lmasdi. Boshlamaganda boshqalar chekkanlarni ko'rib uning xumori tutmasdi.",
        "## Maqsadlar va muvaffaqiyat",
        "Ikkita savol:",
        "Nega biz hamma qatori harakat qilamizda, hamma ham erisha olmagan natijalarga erishishni xohlaymiz?",
        "Nega biz muffaqiyatga erishgan insonlarning tashqi ko'rinishi, sochi, kiyimiga taqlid qilamiz, uning odatlariga, harakatiga olgan ilmiga taqlid qilmaymiz?",
        "Kelajagingiz bugun qilayotgan harakatlaringizga bog'liq. Bugun harakat qilib tezda natija olaman dema, hosil yig'ish paytini kut. 4-sinfda ingliz tiliga bordim, nima qiladi yosh bola deyishdi. Tinmay repetitorga bordim, \"nima qiladi baribir o'qishga pul bilan kirmasa foydasi yo'q\" deyishdi. Menga diplom emas, ilm kerak edi. Yoshligimda, meni o'qib yurgani paytimda, past nazar bilan qaraganlarni Alloh o'zi past qilib qo'ydi. Hosilini endi o'ryapman, harakat ancha oldin boshlangan edi.",
        "Maqsadga erishish yo'lidagi eng katta to'siq – qo'rquv. Agar sening orzularing seni qo'rqitmasa, demak ular yetarlicha katta emas. Hammada ham qo'rquv bo'ladi, faqatgina qo'rquviga qarshilik qila olganlar va qarshilik qila olmaganlar muvaffaqiyatli va muvaffaqiyatsizga ajraladi. Shuning uchun g'alaba qilishni istasang, avvaliga o'zingni (qo'rquvingni) yeng.",
        "Boshqalar orzu qilayotgan narsaga erishish uchun, boshqalar qilmaydigan narsani qil. Boshqalar bajarmagan narsani bajargan odamgina g'olib bo'ladi. G'alaba qilishni istasang, boshqalarga o'xshab yashashni bas qil. Boshqalar nima qilyabdi? Kuniga 5-6 soatlab PUBG, yoki 4-5 soatlab instagram, telegramda keraksiz chatlar, ko'chalarda ma'nosiz \"risovka\" ga yurish, \"ko'cha bola\" bo'lish, har hafta sinfdoshlar bilan o'tirish, hamma zerikishdan qochyapti. Sen unday qilma, zerikishni o'rgan, o'yinlarni yo'q qil, instagramni o'chirib tashla, telegramga limit qo'y. Chunki agar o'z hayotingni o'zgartirmoqchi bo'lsang, avval o'ylash tarzini o'zgartirishing kerak. Ha, hammadan boshqacha bo'lsang, hamma seni boshqacha odam deb qaraydi, shunda boshqacha natijalar erishasan.",
        "Yillik maqsad qo'y, yillik maqsadlar katta bo'lgani uchun oylikka bo'lib ol, uni haftaga, ularni esa kunlik odatlarga bo'lib ol. Kunlik odatlaringni yetarlicha qilishga oson qilib qo'y. Odatlaringni nazorat qilib yozib bor.",
        "## Shaxsiyat",
        "1. Aniq qadriyatlarga ega bo'l. Qadriyat — bu siz qadrlaydigan narsalar. Masalan, rostgo'ylikni qadrlaysizmi, demak ro'stgo'ylik bu — sizning qadriyatingiz.",
        "2. Qadriyatlardan prinsiplar (qoidalar) kelib chiqadi. Tepadagi rostgo'ylik qadriyatimizdan \"men hech qachon yolg'on gapirmayman\" degan prinsip kelib chiqadi.",
        "3. Hammasini aniqlab o'zing uchun yozib chiq. Bu — o'zini tanish bosqichi.",
        "Kuchli shaxsiyat prinsiplariga misollar:",
        "- hissiyotda (emotsiyada) qaror qilmaslik",
        "- har kun nimadur o'rganishga harakat qilish",
        "- vaziyatga doim 3-shaxs tomonidan qarashga harakat qilish. Odatda voqealarga faqat o'zimiz tomondan qaraganimiz uchun noto'g'ri qarorlar qilamiz. O'zmiz holis inson bo'lib, yuqoridan qarash va adolatli hukm qilish.",
        "- Xato qilgan odam emas, undan saboq olmagan odam muvaffaqiyatsiz bo'ladi",
        "- Xato qilmasliknining iloji bor. Buning uchun xato qilib ko'rganlarining tavsiyasini olgan maqul. Lekin xato qilib ko'rsangiz yaxshiroq o'rganasiz",
        "- Birovdan eshitgan narsangizni birovga yetkazmaslik",
        "- Qiyin vaziyatlarda o'zini panaga olmasdan, masuliyatni o'z bo'yniga olish — liderlik",
        "- Hech kimdan hech narsa kutmaslik, faqat Allohdan umid qilish kerak. Allohdan boshqasidan bir narsani ikki marta so'ramaslik.",
        "- Xato qilganini tan olish va uni tuzatishga harakt qilish",
        "- Shunchaki ota-bobongiz qilib keldi degani, ular to'g'ri qilishgan degani emas. Quraysh qavmining ota-bobolari ham bud-sanamlarga sig'inib kelishgandi. Tekshirib ko'ring.",
        "- maqtovni qabul qiling, shubha bilan qarang. Tanqidni qabul qiling, haqiqat bordek qarang.",
        "Eng xavfli inson — o'zini tushunmaydigan inson. Chunki u o'zini tushunmagani uchun hammani qiynaydi. Men kimman, qanaqaman deb qiziqmaydi. Bizga esa o'zimizdan ko'ra boshqalarning hayoti, ularning xatolari, yutuqlari qiziqroq. O'zimizni muhokama qilishdan ko'ra, boshqalarni muhokama qilish bizga ko'proq yoqadi.",
        "Biz o'zimizdan qochib yuramiz, o'zimizni tanib qolishdan qo'rqamiz. O'zimizni tushunishni o'rganmaymiz. Hammasi ilmsizlikdan, tafakkur qilmaslikdan, voqeaning sabab va oqibatlariga ajratmaslikdan kelib chiqaveradi, kattaraveradi.",
        "## Qalb",
        "O'zining aybi bilan bo'lgan vaziyat uchun, adolat u tomonda bo'lmagan vaziyatlarda, meni tark etgan odamlarga qalbim ozor chekardi. Bir xodimimizga ustozlar bayramizda sovg'a bermaganimiz uchun bizni tark etibdi, lekin aslida u ustoz emasdi. Men esa ustozlar bayrami deb faqat ustozlarga sovg'a olibman. Bu yerda ham o'zimni aybdor sanab qalbim rosa qiynaldi. Aslida kimdir hafa qilib qo'yishdan rosa qo'rqaman. Katta ayblar qilib qo'ysa ham jazolasam hafa bo'lsa, qalbim aziyat chekadi. Rahbar bo'lib har xil vaziyatlarga duch kelib ko'p o'ylanardim, \"hech nimani bilmayman\" deb, har bir vaziyatda o'zimdan ayb topib o'zimni tergayveraman, qalbimga ozor beraveraman. Yaqinda Umar Ibn Xattob halifaligi davrini o'qib, Umar ham men boshimdan o'tkazgan narsalarni boshidan kechirgan ekan, har bir voqeaga mos meni hayotimda voqea bo'lganligini ko'rib Umardek adolat timsoli xato qilsa, adolatidan norozi bo'lib Rum o'lkasiga ketib musulmonlikdan nasroniylikka o'tib ketganlar ham bo'lgan bo'lsa, men bir oddiy inson ham shunday vaziyatlarda qat'iyatliroq bo'lishim vaziyatga yaxshiroq qarashimga yordam berdi. Aslida men juda ko'ngilchanman va mendan yaxshi rahbar menejer chiqmaydi. Men ko'proq ijodkorman, nimadirlar yaratishni yaxshi ko'raman.",
        "Kimdur mendan foyda olib rahmat aytsa, rahmatni qabul qilishni bilmayman. Negadir o'zimni noloyiq sezaman. Shunchaki bo'lishi kerak bo'lgan ish bo'ldi, Allohning qadari, men bir sababchi deb o'ylayman. Lekin rahmat aytuvchi mening reaksiyam yo'qligini ko'rib hafa bo'lib qolishi yoki ustozim nega unaqa ekan deb shu xislatimni yoqtirmasligini ustoziga aytadigan sevimli o'quvchilarim ham bor. O'zim ham birovga rahmat aytishni bilmayman, kimdur sovg'a bersa negadir juda ham suyunmayman, bermasa xafa ham bo'lmayman. Aslida bu hech kimdan hech narsa kutmaslikka harakat qilishimdandir. Lekin unday bo'lsa, xursand bo'lishim kerakmasmi? Chunki kutuvim nol, reallikda undan zo'r narsa. Bilmadim, o'zim ham tushuna olmadim. Xursand bo'lishini unutib qo'ydimmi, Shukr qilishni unutib qo'ygansiz deb bir o'quvchim maslahat berdi. (Albatta, men o'quvchilarimdan ham maslahatlar olib turaman) yo'q deb inkor qildim-ku, qalban shukr qilmaganimni angladim. Sekin-asta qalban shukr qilishni boshlasam, xursand bo'lishni o'rganib olarman. Xullas, qalb ishi shunday ekan tushunish qiyin. Imom Gazzoliyni \"Qalblar kaliti\"ni qancha vaqt o'tdi hazm qila olmaganim shundandir. Qaytadan o'qib ko'raman, o'zi yarminiyam o'qimagandim.",
        "## Kitob",
        "Aytganimdek, kasallikka qarab dori yozilganidek, dardingizga qarab kitob o'qiysiz. Ba'zida zo'r kitobdagi ko'p narsalarni olish o'rniga u kitobni tugatishga harakat qilib qo'yaman. Aslida qiziqib tugatib qo'yishdan bu umuman boshqa narsa. Tugatishga harakat qilganimda zo'r tafakkur qiladigan, yaxshilib o'tirib mag'zini chaqadigan, gaplarni shundoq tez o'qib ketaman. Nega tugatishga buncha harakat qilaman, balki kanalimga mana 15-kitobni tugattim deb qo'yishga shoshilamanmi? Har doim emas, lekin ba'zida ha.",
        "Lekin yaqin 3 yillikda boshlagan eng yaxshi odatim aynan shu bo'ldi. Juda qiyin savollarga, xattoki savolni eshitayotganimda javob bera olmasligimga 100% aniq deb o'ylaganimda savoldan keyin, shunaqa javoblar quyilib keladi, Allohning ilhomi ila sababchi kitob deb o'ylayman.",
        "100ta ham kitob o'qimaganimni eshitganlar hazillashyapti deb o'ylashadi, shunchaki ular 10ta ham kitob o'qimagan, men esa ularda 5-6 barobar ko'p o'qiganman. Farq katta seziladi. Ilm shunaqa ozgina ko'p harakat farq kattalashuvi oshib boradi. Aziz Rahimov assimetrik harakatlar assimetrik natijalarni beradi deb bejiz aytmagan. 1 yilik haydovchi bilan 5 yillik haydovchini mashina haydashidagi farq bunchalik katta bo'lmaydi. Xattoki, 1 yillik haydovchi va 20 yillik haydovchini o'rtasidagi farq bunchalik katta bo'lmaydi. Lekin ilmda shunday bo'ladi. Hayotda ko'rganlaringizni o'qiysiz, o'qiganlaringizi hayotda ko'rasiz. Har safar o'rgangan narsalaringiz avvalgi o'qiganlaringiz ko'rganlaringizga bo'g'lanaveradi. Har safar bog'liqlik oshib boraveradi, geometrik progressiya kabi tezlashib ketadi. Shunda siz 60ta kitob o'qigan bo'lsangiz, sizni 1000ta o'qigan deb o'ylashadi.",
        "## Yozish",
        "Yozishni juda yaxshi ko'raman. Shu sababdan ham ko'p yozdim, blogimda yozaman. Fikrim tiniqlashadi. O'zimni o'zim tushunib qolaman. Yozgan narsam to'g'rimikan, fikrim to'g'rimikan tekshirib chiqaman. Yozish davomida ko'p diqqat qilaman, shu ko'nikmam rivojlanadi. Hozirgi paytdagi eng muhim ko'nikma — diqqat qilish.",
        "Yozma bloglarni o'qiyman, xodimlarimiz, o'quvchilarim bloglarida borman. Rasm, she'r, ashula, videodan ko'ra, matnlarini o'qib chiqaman. 10 yildan keyin qaytab o'qisa ham foyda olsa bo'ladigan matni bormikan ko'rib chiqaman, yo'q bo'lsa chiqib ketaman.",
        "Matn o'qisa, tasavur qilish qobiliyati oshadi. Yozish miyangizni band qilib turgan turli tuman hayol va fikrlarni chiqarib tashlab miyangizni bo'shatadi, stressni kamaytiradi, fikrlaringizni tartiblab olishga yordam beradi.",
        "Bunaqa yozganlarimdan bir qancha bor. Faqatgina shunisini ulashgim keldi. Siz ham yozishingiz uchun obsidian programmasini tavsiya qilaman."
      ].join(PARA)
    },
    {
      folio: '4',
      raqam: '3',          // ro'yxatda ko'rinadigan tartib raqami
      title: "Suhbatdoshni tinglashni o'rganing",
      date: '29.10.2025',
      body: [
        "Ayollar mashina haydashi kerakmi yoki yo'q mavzusi ostida post yozgandim. Postda haydashi kerakmi yoki yo'q men bilmaymanu lekin suzish ko'nikmasiga o'xshab o'rganib qo'ysa kerak bo'lib qoladi degan g'oyani ilgari surganman. Shundan keyin bir erkak unga izoh qoldirdi.",
        "> Erkak: Mashina haydash ayol kishining xilqatiga to'g'ri kelmasligi haqida ulamolar javoblarini o'qiganman. Qolaversa, mashina haydaganda ayol kishiga boshqa haydovchi erkaklarning ko'zi tushadi. Bu borada ayol kishiga mahram erkaklari xizmat qilganlari afzal.",
        "Bu yerda erkakning fikri shunday: ayol kishi mashina haydashi mumkin, lekin ehtiyot jihatidan yaxshiroq va afzalrog'i haydamagani maqul.",
        "> Ayol: Nimaga unda Saudi Arabistonda ayollarga moshina haydashga ruxsat berilgan deb o'ylaysiz?",
        "Unga javob bergan ayol esa darhol izohni to'liq o'qimasdan yoki tushunmasdan turib, \"nega haydamasligi kerak, mana xattoki Saudiya Arabistonida ruxsat berib qo'yganku\" deb yozmoqda. Lekin tepada erkak ruxsat berilmagan demagan.",
        "> Erkak: Mumkin emas demadim. Afzallik nazaridan minmagani maqul deyishadi. Bu mening emas ulamolarning gaplari. (Zikr ahlidan so'rang saytidan ko'rib olsangiz bo'ladi). Qolaversa bu ayolni bundan mahrum qilish emas, balki aksincha ayolni e'zozlash yuzasidan aytilgan. Shariat faqatgina mumkin yoki mumkin emas, harom yoki haloldan iborat emas. Afzallik masalalari ham bor.",
        "Erkak esa yana javobining boshida o'z fikrini tushuntirmoqda: \"mumkin emas demadim\" ya'ni haydashi mumkin, lekin ayollarimizni ezozlab ularni asrab avaylash maqsadida haydamaganlari afzalroq demoqda. Yani 100% haydamasin degan fikrni aytgani yo'q, zarurat bo'lmasa haydamagani maqul va afzal deb o'z fikrini emas bu islom ulamolarining fikri ekanligini aytmoqda.",
        "> Erkak: Imom Azamni shogirdlari bir kuni kiyimiga tekkan ozginagina najosatni tozalayotganlarini ko'rishdi. Vaholanki u najas avf qilinadigan miqdorda edi. (kiyimga tekkan najasning quyuq yoki suyuqligiga qarab u bilan namoz o'qib qo'ysa avf qilinadigan miqdoriga imom Azam fatvo bergan edilar) Shunda shogirdlari bu miqdor avf qilinishi haqida fatvo bergani lekin hozir o'zlari uni tozalayotgani haqida so'raganlarida \"u fatvo, bu esa taqvo\" deganlar.",
        "Bundan tashqari erkak o'z qarashlariga bir chiroyli misol keltirib, fatvo va taqvoning farqini tushuntirib bermoqda. Ya'ni:",
        "Harom — bu 100% qilish mumkin bo'lmagan ishlar, qilinsa gunohi bor, tark etgan savobga ega bo'ladi.",
        "Halol (joiz) — qilsa savob, qilmasa gunoh yo'q.",
        "Fatvo — bu faqih yoki olimning shariat asosida bergan huquqiy ruxsati yoki hukmi. Bu \"mumkin yoki mumkin emas\" degan masala. Lekin fatvo har doim \"minimal majburiyat\" asosida beriladi.",
        "Misol:",
        "– Savol: \"Ayol mashina haydasa bo'ladimi?\"",
        "– Fatvo: \"Joiz, harom emas.\"",
        "Ammo taqvo bilan qaralsa: \"Afzali, mahram erkak bilan chiqish.\"",
        "Taqvo — bu nafaqat gunohdan, balki shubhali narsalardan ehtiyot bo'lish, Allohdan qo'rquv bilan pok yashash. Bu fatvoning yuqori bosqichi.",
        "ERKAK SHU NARSALARNI AYTMOQCHI VA TUSHUNTIRMOQCHI BO'LDI.",
        "Lekin ayol haliyam tushunmasdan, yoki tahlil qilmasdan, o'ylamasdan javob bermoqda.",
        "> Ayol: Yaqinda O'zbekiston Musulmonlar idorasini savol so'rash mumkin bolgan raqamiga tel qilib bir tanishim bilan ayol kishi ot minmasligi kerakmi deb so'raganimizda ular Quron yoki hadisda minmasin deyilmagan. Shu sabab minsa bo'ladi faqat niyatni to'gri qoyish kerak agar maqsad boshqalarga ko'z ko'z qilish bo'lsa unda joiz emas to'gri maqsad bilan minsa bo'ladi degan javobni berishgan edi. Otni moshinaga tenglashtirib hulosa qilsak bo'ladi menimcha.",
        "Ayolning miyasida haliyam o'sha fikr: mumkin emas deyabdi, mumkinku mana ot minishga taqiq yo'q, uyam bir ulov, mashina ham bir ulov.",
        "Hoy singlim, javob berishga emas tushunishga harakat qiling. Sizga javob yozayotgan inson \"Mashina haydashi mumkin emas\" demadi. O'zi ham yozgan \"mumkin emas demadim\" deb.",
        "Ikkalaring ham bitta narsani aytyabsizlar. Bittagina joyda farq bor holos:",
        "Asosiy farq — \"taqvo mezoni\" va \"niyat mezoni\".",
        "- Erkakning asosiy mezoni: taqvo va iffatni himoya qilish.",
        "- Ayolning asosiy mezoni: niyat va ijtimoiy ehtiyoj.",
        "Bu ikki nuqtai nazar qarama-qarshi emas, balki bir-birini to'ldiruvchi.",
        "Shariatda ham \"niyat\" (innamal a'malu binniyat) va \"taqvo\" (va libosu-t-taqvo zalika xayr) bir-birini to'ldiradi.",
        "Xulosa: ayol kishining mashina haydashi harom emas — buning dalili naslarda aniq taqiq yo'qligi.",
        "Ammo ulamolar ba'zida afzal yo'l sifatida ehtiyot choralari sifatida haydamaslikni tavsiya qilganlar — bu taqvo darajasi, shart emas.",
        "Zamonaviy sharoitda, agar ayol mashinani zarurat, xavfsizlik yoki mustaqil hayot uchun haydasa, bu joiz.",
        "Agar bu takabburlik, ko'z-ko'z qilish yoki fitna uyg'otish maqsadida bo'lsa, u holda ma'nan nomaqbul bo'ladi.",
        "Bu suhbat aslida \"joizlik\" bilan \"afzallik\" o'rtasidagi nozik chiziqni ochib beradi.",
        "Joiz — bu fatvo berilgan minimal majburiyat.",
        "Afzal — bu maksimal taqvo darajasi.",
        "Xuddi shunga o'xshash yana bir suhbat bor uniyam xuddi shunday tahlil qilib beraymi nima deysiz?"
      ].join(PARA)
    },
    {
      folio: '5',
      title: '52 yoshli bir ota',
      date: '20.11.2025',
      body: [
        "Bugun dadamning tug'ilgan kunlari. Shuning uchun dadamning hayotimdagi o'rni haqida ozgina tafakkur qilib insho yozishga harakat qildim.",
        "Dadam mening hayotimda so'zida ham, amalida ham o'rnak bo'la olgan inson. Ichma, chekma deb nasihatgina berib qolmasdan, o'zi ham ichish va chekishdan uzoq bo'lgan. Ichadigan, chekadigan insonlarni yoqtirmasligini so'zida ham, amalida ham ko'rsatgan.",
        "Bu esa mening hayotdagi eng to'g'ri qarorlarimdan qilishimga katta turtki bo'lgan. Ya'ni ichish va chekish yaqiniga ham yo'lamaslik. Esimda sinfimizda faqat 2 kishi ichmaslikni tanlaganimizda hamma bizni ichishga undaganlari. \"Erkakmisan ichasan\", \"Ichmasang erkak emas ekansan\", \"Do'stim bo'lsang men uchun ich\" deb ko'pchilik meni bu yo'lga olib kirishga harakat qilishgan. Bu qanday bosim ekanligini erkaklargina tushunadi. Erkakligingizga qilinadigan hujum erkak uchun eng og'iri.",
        "Baxtimga, mening qalbimgacha singdirilgan qadriyatlarga umuman darz ketmadi. \"Agar shuni ichmasam, sening do'sting bo'lmaydigan bo'lsam, mayli do'st emasmiz\" deb javob qaytarishimga menga kuch bergan narsa dadamning qalbimga joylagan bu qadriyati bo'lgan.",
        "Dadam faqatgina sport bilan shug'ullan deb quruq gapirmaydi. 52 yoshida ham shpagat ocha oladigan, turnikka 28 yoshli o'g'lidan ham ko'proq tortina oladigan, jismoniy jihatdan aksariyat 18 yoshli uylanmagan yigitchalardan baquvvat, og'ir yuklarni ham aql bilan, ham kuch bilan xohlagan joylariga siljita oladigan, epchiligidan tomlarga narvonsiz ham chiqib keta oladigan insonning o'g'lidan nima ham kutardingiz.",
        "Namuna bo'ladigan inson har kun yonimda yashaydi-ku, har kun ko'raman. Sog'lom hayotni yashab menga ko'rsatib berdilar-ku. Shu yoshida ham ortiqcha yog'i yo'q, qorin qo'ymagan chayir insonga, men haliyam munosib farzand bo'la olmadim.",
        "Dadam qanday qilib 52 yoshida shunday baquvvat va sog'lom ekan deb o'yladim. Javobini topish uzoq kuttirmadi. Bobom ekanlar. Maktab payti uyimizda sumalak qilgan edik. Sumalak uchun o'tin yorish, maydalash kerak edi. 16-17 yoshli yigitchalardan ko'ra 70 yoshli bobom o'tin yorishda qattiqroq, kuchliroq va baquvvatroq ko'rindi. Buni sinfdoshlarimiz ham tan olishgandi.",
        "70 yoshda og'ir boltani qo'llari bilan o'ynatib o'tin yorishni tasavvur qilavering. Shunday insonning o'g'li dadam bo'lsa, shunday insonning neverasi men. Men ham 50-70 yoshlarimda, Alloh nasib qilsa shunday sog'lom bo'lishga undaydigan insonlar albatta dadam va bobom.",
        "Dadam yana deyarli har kuni ta'kidlaydigan narsalari: yolg'on gapirma, birovning haqqini yema, va'da berdingmi bajar, birovlarni ustidan kulma, ularni mazah qilma, seni haqqing birovda qolsa qolsin, birovniki senda qolmasin.",
        "Oxirgi jumla meni juda o'ylantirgandi: sening haqqing birovda qolib ketsa mayli, birovniki senda qolmasin.",
        "Bu nasihatning ortida uzoq oxiratni tashvishi yotibdi ekan. Oxiratda birovning haqqi bizda qolsa javob beramiz.",
        "Buni tushunib yetishim uchun men juda ko'pchilik shu narsaning teskarisini farzandlariga o'rgatishini bilganimda bo'ldi. Ko'pchilik, haqqingni birovga berib qo'yma, seni haqqing birovda qolmasin, birovniki senda qolsayam deb o'rgatishar ekan. Ular bu dunyoni o'ylab shu nasihatni berishgan. Ya'ni bu dunyoda yutib qolish uchungina.",
        "Otamning soddaligi, ishonuvchanligi, ko'nglida umuman zarracha kiri yo'qligi, bir narsaga kirishsa sidqi-dildan kirishishiga juda havas qilaman. Jahli tez chiqadi, jahli chiqqanda sidqi-dildan jahli chiqadi, u payt siz dunyodagi eng yomon odam bo'lasiz, tez sidqi-dildan xursand bo'ladi, xursand bo'lganda dunyodagi eng yaxshi odam siz. Bobom ham shunday edilar.",
        "Dadam hobbisini ishga aylantirgan. Ishini juda sevadi va mazza qiladi. Shuning uchun bo'lsa kerak, charchamaydi.",
        "Hayotingizda sizning muvaffaqiyatingizga sizdan-da ko'proq suyunadigan inson kim? Ota.",
        "Hayotingizdagi qiyinchilik kulfatlarga sizdan-da ko'proq kuyunadigan inson kim? Ota.",
        "Dadam shunday insonki, oilamizga, menga, singillarimga, onamga biror narsa olib kelsa, o'ziga olganidan-da ko'proq xursand bo'ladi.",
        "Ularga yangi kiyim-bosh yoki shunga o'xshash zarur narsalar olamiz deyilsa, \"Yo'q, eskisi ham menga bo'laveradi\", deydi, lekin biz farzandlariga doim eng yaxshisini xohlaydi, bo'laveradi bu deyishimizga yo'l qo'ymaydi.",
        "Dadam shunday ko'ngli bo'sh sodda insonki, birovdan yomonlik kutmaydi. Doim yaxshi tomonini ko'radi.",
        "Dadam shunday insonki, ko'pincha, o'z sevgisini so'z bilan emas, mehnat bilan ifodalaydi. Har bir harakati sevgi va g'amxo'rlikni ko'rsatadi. Sizlarni yaxshi ko'raman demasligi mumkin lekin qilayotgan ishlari buni ko'rsatib turadi.",
        "Dadam shunday insonki, o'z yelkasida hayotning barcha mas'uliyatini ko'taradilar, ammo shikoyat qilmaydi, nolimaydi.",
        "Eeeh, aytaman desam, bitta postga sig'maydi... Ular haqida qancha gapirsam shuncha kam... Ularga qancha yaxshilik qilsam, shuncha oz...",
        "Oxirida shu musiqani eshitvoring: https://www.youtube.com/watch?v=xqj5YTZacNs"
      ].join(PARA)
    },
    {
      folio: '6',
      title: "Shakl va mohiyat",
      date: '04.09.2026',
      body: [
        "Do'stlar, bugun shakl va mohiyat haqida gaplashamiz.",
        "Yong'oqni qo'lga olganingizda avval qattiq qobiq ko'rinadi. Qobiqni sindirmasangiz, ichidagi mag'izga yeta olmaysiz. Lekin ko'p odam qobiqni ushlab, mag'izga yetmay qoladi. Ba'zan qobiqning o'zini mag'iz deb o'ylaydi.",
        "Hayotning ko'p sohasida shu xato takrorlanadi: shaklga e'tibor beramiz, mohiyatni unutamiz.",
        "## Imtihon va til",
        "Ingliz tilini olaylik. CEFR, IELTS, TOEFL, Linguaskill — bularning barchasi imtihon shakli. Har birining o'z formati, o'z ballash tizimi bor. Lekin mohiyat bittagina: ingliz tili darajangizni tekshiradi.",
        "Ingliz tilini chuqur bilgan odam qaysi imtihonga kirmasin, baland ball oladi. Chunki u shaklga emas, mohiyatga e'tibor bergan. Aksincha, faqat bitta imtihon formatini yodlab olgan, o'sha formatga o'rgangan, lekin tilni chuqur o'rganmagan odam format o'zgarsa qiynaladi. U qobiqni yaxshi tanigan, mag'izni tanimagan.",
        "## Odam va qalb",
        "Inson bilan tanishganda ham xuddi shunday bo'ladi. Tashqi ko'rinish, kiyim, nutq odobi, birinchi taassurot — bularning barchasi shakl. Mohiyat esa qalbda. Payg'ambarimiz alayhissalom aytganlar:",
        "> Alloh sizlarning suratlaringizga va mol-dunyongizga qaramaydi, balki qalblaringizga va amallaringizga qaraydi.",
        "Chiroyli kiyingan, chiroyli gapiradigan odamning ichida buzuq niyat bo'lishi mumkin. Sodda kiyingan, kam gapiradigan odamning ichida esa oltin qalb bo'lishi mumkin. Shaklga aldanib mohiyatni ko'rmay qolish — eng katta xatolardan biri.",
        "## Sana va saboq",
        "Tarix fanini olaylik, unda ham shu muammo bor. Maktabda o'quvchilarga sanalarni yodlatishadi: falon voqea falon yilda bo'lgan. Bu shakl. Mohiyat esa boshqa narsa: o'sha voqeadan qanday saboq olish mumkin, o'sha davrda odamlar nega shunday qaror qabul qilgan, bugungi kunga qanday aloqasi bor.",
        "Sanani yodlagan, lekin saboq chiqarmagan o'quvchi tarixni o'rganmagan — faqat tarix haqida ma'lumot to'plagan bo'ladi. Keyingi yilga borib sanalarni unutadi, chunki miyada mag'iz bo'lmasa, qobiq saqlanmaydi.",
        "## Bino va bilim",
        "Maktab binosi bilan ham shunday. Zamonaviy bino, chiroyli mebel, yangi texnika — bularning barchasi shakl. Mohiyat esa bitta: bola bilim oladimi, yo'qmi.",
        "Eng zo'r binoda eng zaif ta'lim berilishi mumkin. Eng oddiy xonada eng chuqur bilim berilishi mumkin. Ota-onalar ko'pincha shaklga qarab maktab tanlaydi: bino qanday, hovli qanday, sinf necha kishilik. Mohiyatga — o'qituvchining mahoratiga, dasturning chuqurligiga, bolaning haqiqatan nima o'rganayotganiga — kam e'tibor berishadi.",
        "## Qog'oz va mutaxassis",
        "Diplom masalasida ham xuddi shu xato takrorlanadi. Diplom bilimning shakli bo'lishi kerak edi. Lekin ko'pchilik uchun diplomning o'zi maqsadga aylanib qoldi. Pul to'lab diplom olish, imtihonni \"kelishib\" topshirish — bularning barchasi qobiqni sotib olishga o'xshaydi.",
        "Qog'ozda \"muhandis\" yozilgan, lekin qo'lida asbob ushlashni bilmaydi. Qog'ozda \"o'qituvchi\" yozilgan, lekin bolaga bir mavzuni tushuntira olmaydi. Ish beruvchilar ham keyinchalik shuni anglaydi: diplom — shakl, mohiyat emas. Demak, mag'izni kafolatlamaydi.",
        "## To'y va baraka",
        "To'ylarda ham shu muammo ko'rinadi. Katta to'y, ko'p mehmon, qimmat taomlar — bularning barchasi shakl, el ko'zida \"yaxshi o'tkazilgan to'y\" degan taassurot qoldiradi. Mohiyat esa boshqa narsa edi-ku. To'ydan maqsad ikki yoshning baxtli bo'lishi edi-ku.",
        "Mohiyatni unutib shaklga e'tibor qilish oqibatida ikki oilaning totuvligi, kelin-kuyovning bir-biriga ochiqligi, oilaviy baraka yo'qolib qoldi. Qancha oila qarzga botib, katta to'y qilib, keyin yillar davomida qarzni to'lab yurganini ko'rganmiz. To'y kuni shakl mukammal bo'lgan, lekin mag'iz — oilaviy tinchlik — dastlabki yillardanoq qarz tashvishiga to'lib ketgan.",
        "## Surat va hayot",
        "Ijtimoiy tarmoqlarda ham xuddi shu narsa. Chiroyli suratlar, baxtli oila ko'rinishi, muvaffaqiyatli hayot tasviri — bularning barchasi shakl. Mohiyat esa kamera ortida qolgan haqiqiy hayot.",
        "Kimdir suratda tabassum qilib turadi, aslida ichida qiynalayotgan bo'lishi mumkin. Kimdir \"erkin, baxtli hayot\" ko'rsatadi, aslida qarzga botgan bo'lishi mumkin. Tomoshabin esa shaklni ko'rib o'zini solishtiradi, o'zini yetmaydigandek, omadsizdek his qiladi. Aslida ikkalasi ham qobiqni ko'ryapti: birov mag'izni yashiryapti, birov mag'iz yo'qligini bilmay qiynalyapti.",
        "## Unvon va xizmat",
        "Lavozim va mansab bilan ham shunday. \"Direktor\", \"professor\", \"ustoz\" degan so'zlar — hurmatga sazovor bo'lishning shakli. Mohiyat esa boshqa: o'sha odam haqiqatan xizmat qiladimi, mas'uliyatni his qiladimi, atrofiga foyda keltiradimi.",
        "Unvonni ko'rib hurmat qiladigan jamiyat ko'pincha aldanadi. Chunki unvonni sotib olish mahorat sotib olishdan osonroq.",
        "## Xizr va Muso",
        "Qur'onda ham shakl va mohiyat orasidagi farqni ko'rsatuvchi bir qissa bor. Kahf surasida Xizr alayhissalom bilan Muso alayhissalom hikoyasi keladi. Xizr alayhissalom kemani teshadi, bir bolani o'ldiradi, buzilgan devorni tekislab tuzatadi. Zohiran — ya'ni shaklan — bularning barchasi yomon ish, hatto zulm ko'rinadi. Muso alayhissalom ham shu shaklga qarab e'tiroz bildiradi.",
        "Lekin oxirida mohiyat ochiladi: kema teshilgani uni zolim podshohdan saqlab qolgan. Bola o'ldirilgani ota-onasini kelajakdagi yomonlikdan saqlagan. Devor tuzatilgani yetim bolalarning yashirin xazinasini saqlab qolgan.",
        "Shakl — ko'rinib turgan ish — mohiyatni to'liq ochib bermaydi. Faqat shaklga qarab hukm chiqarish ko'pincha noto'g'ri xulosaga olib boradi.",
        "## Nega shaklga aldanamiz?",
        "Zehnli o'quvchilarimizda bir savol tug'ilishi tabiiy: nega biz shunchalik shaklga aldanamiz?",
        "Chunki shaklni ko'rish oson-da, mohiyatni topish esa qiyin. Sertifikatga qarab baho berish odamning haqiqiy bilimini sinash bilan solishtirganda ancha tez. Kiyimga qarab baho berish qalbini bilishdan ancha oson. Binoni ko'rish ta'lim sifatini baholashdan ancha tezroq. Inson tabiatan qulaylikni tanlaydi, qiyin yo'lni emas. Shu sabab ko'pchilik shakl bilan cheklanib qoladi.",
        "Bundan tashqari, shakl boshqalarga taassurot qoldirish uchun ham ishlatiladi. Diplom devorga osiladi — ko'rgan hurmat qiladi. Katta to'y o'tkaziladi — el \"zo'r qildi\" deydi. Ijtimoiy tarmoqqa chiroyli surat qo'yiladi — do'stlar hasad qiladi. Shakl ijtimoiy maqom uchun tez natija beradi. Mohiyat esa sekin, sabr bilan, ko'pincha ko'zga ko'rinmay quriladi.",
        "## Xo'sh, nima qilish kerak?",
        "Avvalo, o'zimizga savol berishni o'rganish kerak: men shaklni qurayapmanmi yoki mohiyatni?",
        "- Til o'rganayotganda — sertifikat uchunmi yoki chindan tilni bilish uchunmi?\n- Diplom olayotganda — qog'oz uchunmi yoki chindan mutaxassis bo'lish uchunmi?\n- To'y qilayotganda — el ko'ziga ko'rsatish uchunmi yoki oilaviy baraka uchunmi?",
        "Keyin, boshqalarni baholaganda ham shu savolni eslash kerak. Kimningdir unvoniga emas, ishiga qarash. Kimningdir kiyimiga emas, muomalasiga qarash. Kimningdir suratiga emas, amaliga qarash.",
        "Va eng muhimi, o'zimiz mag'izga e'tibor berishni odat qilishimiz kerak. Chunki mag'iz sekin quriladi — shov-shuvsiz, ko'pincha hech kim ko'rmay turib. Lekin mag'izi bor odam qobig'i yo'q bo'lsa ham baxtli yashaydi. Mag'izi yo'q odam esa qobig'i qanchalik chiroyli bo'lmasin, ichida bo'shliqni his qilib yashaydi.",
        "> Yong'oqni sindirib ko'ring. Qimmatli narsa hech qachon tashqarida yotmaydi."
      ].join(PARA)
    },
    {
      folio: '7',
      title: "Endi siz atrofingizdagi besh odamning o'rtachasi emassiz",
      date: '12.10.2026',
      body: [
        "Jim Ron bir zamonlar aytgan edi: «Inson o'zi eng ko'p vaqt o'tkazadigan besh kishining o'rtachasidir».",
        "Bu gap aytilgan paytlarda odamlar ko'chada, choyxonada yoki bitta ishxonada vaqt o'tkazar edi. Bugun esa vaziyat boshqacha. Biz atrofimizdagi odamlar bilan emas, cho'ntagimizdagi yassi shisha ichidagi yuzlar bilan ko'proq vaqt o'tkazmoqdamiz. Shuning uchun ham qoidani zamonamizga moslab tahrirlashga to'g'ri keladi:",
        "> Kuzatadigan beshta blogingning o'rtachasisan.",
        "Yaqinda yuqori sinf bolalariga dars o'tib berish jarayonida bir qiziq holatga guvoh bo'ldim. Dunyoqarash haqida gap ochilib, Charli Manger, Uorren Baffett, Rey Dalio, Aleks Xormozi, Sem Altman yoki Jordan Peterson kabi dunyo miqyosidagi aql egalarini misol qilib keltirdim. Jimlik. Birortasi tanimas ekan. Mayli, okean orti uzoqdir deb, o'zimizning amaliyotchi tadbirkorlar — Jahongir Ortiqxo'jayev, Murod Nazarov, Zafar Hoshimovlarni so'radim. Yana jimlik.",
        "«Xo'sh, kimlarni taniysizlar unda?» degan savolga esa darhol javob berishdi — bir nechta ismni bir-biriga gap bermay sanab ketishdi. Surishtirib bilsam, bular ijtimoiy tarmoqlarda ijaraga olingan mashinalarda yurib, bir kechada oson pul topishni ko'rsatadigan «treyder» va hayp ustalari ekan.",
        "O'shanda o'quvchilarga aytdim: siz va mening farqimizni ko'rdingizmi? Men kuzatadigan insonlar va siz kuzatadigan insonlar hayotingizdagi farqni ham belgilab beradi. Sababi oddiy — siz kun bo'yi kimga qarab turgan bo'lsangiz, ongingiz shularning qolipiga kirib boradi. Oldinlari inson o'z mahallasidagi ustoz yoki olimga qarab tarbiyalangan bo'lsa, endi ekrandagi begona algoritmlarga qarab ulg'aymoqda.",
        "Jim Ron davrida o'sha beshta odamni hech bo'lmasa o'zimiz tanlardik. Bugun ularni ko'pincha algoritm tanlaydi. Algoritm esa sizni yaxshi odam qilish uchun emas, ekranda ko'proq ushlab turish uchun ishlaydi: qaysi videoda barmog'ingiz to'xtasa, ertaga shundan ko'proq ko'rsatadi. U sizning eng kuchli tomoningizni emas, eng zaif tomoningizni o'rganadi. Bir mashhur gap bor: mahsulot uchun pul to'lamayotgan bo'lsangiz, mahsulotning o'zi — sizsiz. Xulosa qilaverasiz.",
        "Biz farzandimizni qaysi maktabga, qaysi ustozga berishni oylab o'ylaymiz, tanishlardan so'raymiz. Lekin uning qulog'iga kuniga soatlab gapiradigan «ustozi» kimligini ko'pincha bilmaymiz ham. Maktabdagi ustoz bilan bola 45 daqiqa o'tiradi, telefondagi «ustoz» bilan esa — soatlab. Savol oddiy: farzandingizni bugun aslida kim tarbiyalayapti?",
        "Fransuz faylasufi Rene Jirar buni «mimetik istak» deb atagan: biz istaklarimizni o'zimiz o'ylab topmaymiz — atrofimizdagilardan ko'chirib olamiz. Ya'ni biz atrofimizdagilar nimani xohlasa, shuni xohlaydigan mimetik mavjudotmiz. Ko'zimiz nimaga ko'p tushsa, qalbimiz shunga moyil bo'ladi.",
        "Ota-bobolarimiz «Yaxshi bilan yursang yetarsan murodga, yomon bilan yursang qolarsan uyatga» deganda, yonimizdagi odamni nazarda tutgan. Bugun bu maqoldagi «yon» — cho'ntagimizda. Shuning uchun bugungi raqamli muhitimizda xalq maqollarimizni ham o'zgartiramiz shekilli:",
        "- Instagramga yaqin yursang, istaklaring ko'payadi.\n- Brauzer (yoki GPT) tarixingni ko'rsat, kimligingni aytaman.\n- Do'st blogingga (fikringga) qarab, dushman instagram akkauntingga (ko'rinishingga) qarab muomala qiladi.\n- Ko'zoynakning ham kamerasi bor.\n- Rilsga to'ymagan, storisga ham to'ymaydi.\n- Kelin kelsa, \"screen time\"ga boq.",
        "Bir qoshiq toza asalni yeb ko'rganmisiz? Undan keyin darhol oddiy shirin choy ichib ko'rsangiz, choy sizga xuddi shakarsiz, bemaza sudek tuyuladi. Aslida choy o'sha-o'sha shirin, shunchaki tilingiz bir zum oldin haddan tashqari o'tkir shirinlik zarbasini yeb ulgurdi. Me'yor buzildi.",
        "Ijtimoiy tarmoqlardagi arzon hayp, dabdabali ijaraga olingan mashinalar va ko'z-ko'z qilingan hashamat ham zehnimizga xuddi shu ta'sirni o'tkazadi. Ular miyaga «mehnat qilmasdan bir kunda boyib ketish mumkin» degan sun'iy va o'tkir rohat zarbasini beradi. Bu soxta yaltiroqlikka o'rganib qolgan odamga asta-sekin, halol va sabr bilan qilinadigan haqiqiy mehnatning ta'mi tatimay qoladi. Kitob o'qish, kasb o'rganish, yillab ter to'kish uning ko'ziga bema'ni va qiyin ishdek ko'rina boshlaydi. Oson natija illyuziyasi — aqliy qobiliyatimizni sindirib, haqiqiy hayotdan uzib qo'yadigan eng xavfli tuzoqdir.",
        "Yana bir achchiq haqiqat: siz o'sha videoni ko'rgan har daqiqangiz bilan o'sha ijaraga olingan mashinaning ijarasini to'layapsiz. Ko'rishlar — ularning daromadi. Ya'ni o'sha soxta hayotni o'z vaqtimiz bilan o'zimiz moliyalashtiryapmiz.",
        "Bir hisob-kitob qilaylik. Kuniga uch soat lenta — yiliga ming soatdan ortiq, ya'ni 45 kecha-kunduz. Bir kitob o'rtacha 6–8 soatda o'qiladi. Demak, bir yilda lentaga ketgan vaqtga yuzdan ortiq kitob sig'adi. «Kitob o'qishga vaqtim yo'q» deymiz. Vaqt bor — u shunchaki Instagramga ketyapti.",
        "Odam qorniga kirayotgan ovqatni qanday saralasa, ko'zi va qulog'idan kirayotgan ma'lumotlarni ham shunday elakdan o'tkazishi shart.",
        "Elakdan o'tkazish uchun o'zingizga uchta savol bering, deylik: u ko'rsatayotgan hayot haqiqiymi — o'zinikimi yoki ijaraga olinganmi? U menga nima beryapti — bilimmi yoki havasmi? Videodan keyin menda nima qoladi — harakat qilish istagimi yoki kimgadir hasad?",
        "Adolat uchun aytay: men ijtimoiy tarmoqqa qarshi emasman. Xuddi o'sha telefon Mangerni ham, Xormozini ham, eng yaxshi ustozlarimizni ham uyimizga olib kiradi. Muammo ekranda emas — ekranda kimni ushlab turganimizda. Pichoq bilan non ham kesiladi, qo'l ham. Farqni pichoq emas, uni ushlagan qo'l hal qiladi.",
        "Mening dunyoqarashim shakllanishiga sabab bo'lgan, ko'p sonlarini (ba'zilarini 70%, ba'zilarini 100%) shaxsan ko'rib chiqqan YouTube loyihalari va doimiy kuzatadigan Telegram kanallarim bor. Bu kanallarni aynan dastlabki, birinchi videolaridan boshlab ko'rish kishiga yaxlit bir poydevor beradi. To'liq ro'yxatni insho oxiriga — «Ilova»ga qo'ydim.",
        "Biz yonimizda kimlar yashayotganini har doim ham tanlay olmasligimiz mumkin. Ammo quloqchinimizdan kimning ovozi kirib kelishini, ko'zimiz kimning fikrlariga termilishini yuz foiz o'zimiz hal qilamiz.",
        "Jim Ron bugun yashaganida, ehtimol, shunday derdi: siz kuzatadigan beshta blogerning o'rtachasisiz. Ularni esa o'zingiz tanlaysiz.",
        "Ekrandagi odamlaringizni almashtiring — shunda fikrlaringiz, fikrlaringiz ortidan esa butun hayotingiz o'zgaradi.",
        "## Ilova: kuzatishga arziydigan manbalar",
        "YouTube'da ko'rishga arzigulik kanallar va podkastlar:",
        "- [Osmondagi bolalar](https://www.youtube.com/@Osmondagibolalar) — mehnati, intilishi va sinovlari bilan katta natijalarga erishgan yoshlarning real hikoyalari.\n- [Alohida Mavzu](https://www.youtube.com/@Alohidamavzu) — yuzaki xabarlardan qochib, bitta masalaning tub mohiyatiga kirish uchun ayni muddao.\n- [Asoschilar podcast](https://www.youtube.com/@asoschilar) — nazariya emas, amaliyotda biznes qurgan va xatolaridan saboq olgan amaliyotchi mutaxassislarning ochiq tahlili.\n- [Aziz Rahimov](https://www.youtube.com/@azizrakhimov) — boshqaruv, metodologiya va ta'limga tizimli yondashuv; har bir videoni to'liq o'rganishga arziydigan manba.\n- [Millat Umidi](https://www.youtube.com/@UmidjonEshmukhamedov) va [MU master](https://www.youtube.com/@MU_Master) — ilm va professional rivojlanish yo'lida yurganlarga aniq maqsad va yo'nalish ko'rsatuvchi suhbatlar.\n- [Maqsad](https://www.youtube.com/@maqsadclub) va [Maqsad klub](https://www.youtube.com/@maqsadhamjamiyati) — harakat intizomi, shaxsiy samaradorlik va natijaga erishish mexanizmlari.\n- [Shaha Dolimov](https://www.youtube.com/@shahadolimov) — zamonaviy ko'nikmalar, xalqaro tajriba va fikriy erkinlik darslari.\n- [Davronbek Turdiyev](https://www.youtube.com/@DAVRONBEKTURDIEV) — xotira, diqqat va aqliy imkoniyatlarni kengaytirish yo'llari.\n- [Alisher Isayev](https://www.youtube.com/@AlisherIsaev) — biznes jarayonlari, savdo tizimlari va amaliy menejment tahlillari.\n- [Kapital](https://www.youtube.com/@Kapitall_uz) — moliyaviy savodxonlik va iqtisodiy qonuniyatlar; pulga hissiyot bilan emas, aql bilan qarashni o'rgatuvchi darslar.\n- [Ustozation](https://www.youtube.com/@ustozation) — pedagogika va zamonaviy o'qitish uslublariga bag'ishlangan chuqur mulohazalar.\n- [Subyektiv](https://www.youtube.com/@SUBYEKTIV) — jamiyatimizdagi og'riqli, ammo hamma ham gapiravermaydigan nuqtalarni ko'rsatib beruvchi tahliliy reportajlar.\n- [Kalibr](https://www.youtube.com/@Hasan_Mamasaidov) — o'z sohasining ustalari bilan bo'ladigan, mezon va prinsiplarni o'rgatuvchi jiddiy suhbatlar.\n- [Jamshidxon Ziyoxonov](https://www.youtube.com/@Ziyokhonov) — tahliliy qarash va mantiqiy fikrlashni o'stirish uchun samimiy suhbatlar.\n- [Xasanxon Yahyo Abdulmajid](https://www.youtube.com/@Hasanxondomla) — diniy va ma'naviy ildizlarimizni chuqur, xolis va hikmat bilan tushunish uchun eng ishonchli ustozlardan biri.\n- [Fikr yetakchilari](https://www.youtube.com/@fikr_yetakchilari) — qaror qabul qiluvchi, jamiyatga ta'sir o'tkaza oladigan shaxslarning fikrlash tarzi.\n- [Gashtak](https://www.youtube.com/@Gashtak) — samimiy, do'stona va hech qanday yasama ssenariylarsiz bo'ladigan davra gurunglari.\n- Edu-podcast — xalqaro ta'lim va til o'rganish sohasidagi amaliyotchilarning real tajribalari.",
        "## Telegram: shovqinsiz fikr maydoni",
        "Telegram shovqin-surondan holi, matn ustida mulohaza yuritish uchun eng qulay maydon. U yerda saralangan va o'qishga arziydigan manbalar:",
        "- [@azizrakhimov_blog](https://t.me/azizrakhimov_blog) — ta'lim, shaxsiy boshqaruv va amaliy kuzatuvlar burchagi.\n- [@mashrabov_aa](https://t.me/mashrabov_aa) — professional tajriba va xolis tahlillar maydoni.\n- [@aqlli_ikkichi](https://t.me/aqlli_ikkichi) — standart qoliplardan tashqarida fikrlash va noan'anaviy yondashuvlar.\n- [@boshqaruvchiga](https://t.me/boshqaruvchiga) — rahbarlik, jamoa qurish va tizim yaratishning amaliy qoidalari.\n- [@xodimga](https://t.me/xodimga) — mehnat bozori, kasbiy etika va o'z ustida ishlash tamoyillari.\n- [@AlisherIsaev_blogi](https://t.me/AlisherIsaev_blogi) — biznes jarayonlari va boshqaruv sirlari haqida ochiq mulohazalar.\n- [@DrBekOlimjon](https://t.me/DrBekOlimjon) — ilm-fan, sog'liq va fikriy intizom tahlili.\n- [@shahadolimov](https://t.me/shahadolimov) — shaxsiy taraqqiyot va zamonaviy ko'nikmalar bo'yicha foydali kuzatuvlar."
      ].join(PARA)
    },
    {
      folio: '8',
      title: 'Nega hech narsaga qiziqmayman?',
      date: '30.10.2026',
      body: [
        "Ko'p o'quvchidan bir gapni eshitaman: «*Ustoz, men hech narsaga qiziqmayman*». Ota-onalardan esa boshqacha shaklda: «*Bolam hech narsaga qiziqmaydi. Na kitobga, na sportga, na biror kasbga. Faqat telefon*».",
        "Agar siz ham o'zingiz haqingizda shunday deb o'ylasangiz, avval bir yaxshi xabar: **bu tug'ma kamchilik emas. Siz dangasa yoki qobiliyatsiz bo'lib tug'ilmagansiz.** Sabab boshqa joyda. Uni tushunib olsangiz, vaziyatni o'zingiz o'zgartirish ham mumkin bo'ladi.",
        "Sabab oddiy: siz hali yetarlicha narsani bilmaysiz. **Qiziqish esa bilimdan tug'iladi.**",
        "Ko'pincha bu teskaridek tuyuladi. Odatda «avval qiziqish, keyin o'qish» deb o'ylaymiz. Lekin aslida buning aksi: **avval ozgina bilim, keyin qiziqish.**",
        "## Yig'ilmagan jumboqda bo'shliq ko'rinmaydi",
        "Jumboq (pazl) yig'ib ko'rganmisiz? Jumboq hali yig'ilmaganda qaysi bo'lak yetishmayotganini bilmaysiz. Hammasi yetishmaydi, demak hech biri ko'zga tashlanmaydi. Lekin rasmning ko'p qismi yig'ilib, bitta bo'lak qolganda, o'sha bo'shliq ko'zingizga tikilib turadi. Uni to'ldirmaguncha tinchimaysiz.",
        "![Ikki bo'lak bilan na rasm, na bo'shliq ko'rinadi. Rasm deyarli yig'ilganda esa yetishmayotgan bo'lak darrov ko'zga tashlanadi: uyning o'rtasi yo'q!](/assets/insho/8-jumboq.svg)",
        "Karnegi Mellon universiteti psixologi Jorj Louenstayn 1994 yilda e'lon qilgan [tadqiqotida](https://doi.org/10.1037/0033-2909.116.1.75) qiziqishni aynan shunday tushuntiradi. *Qiziqish odam bilgan narsasi bilan bilmoqchi bo'lgan narsasi orasidagi bo'shliqni sezganda paydo bo'ladi.* E'tibor bering: bo'shliqni sezish uchun uning atrofida biror narsani bilish kerak. **Hech narsa bilmagan odam bu bo'shliqni ko'rmaydi.** Unga hamma joy bir xil bo'sh.",
        "Futbolni oling. Qoidalarni bilmagan odam uchun 90 daqiqa shunchaki yigirma ikki kishining bitta to'p ortidan yugurishi. Zerikarli. Futbolni biladigan odam uchun esa har bir harakat savol: nega murabbiy aynan shu o'yinchini almashtirdi? Nega himoyachi oldinga chiqib ketdi? Bu natija turnir jadvalini qanday o'zgartiradi? **O'yin bir xil. Farq tomoshabinning boshida.**",
        "## Bilim neyronlar kabi ulanadi",
        "Miyamiz bilimni alohida-alohida qutilarda saqlamaydi. Har bir yangi ma'lumot avval bilgan narsamizga ulanadi. Kanadalik olim Donald Xebb 1949 yilgi [tadqiqotida](https://en.wikipedia.org/wiki/Hebbian_theory) buni shunday ta'riflagan: birga faollashadigan neyronlar o'zaro bog'lanadi. Ya'ni **bilim ip kabi emas, to'r kabi o'sadi.**",
        "Bu to'rning bir ajoyib xususiyati bor: **ikki bilgan narsangiz ulangan joyda yangi savol tug'iladi.** Masalan, bola dinozavrlar millionlab yil oldin yashaganini biladi. Keyin toshlarda suyak izlari topilishini bilib oladi. Ikkalasi ulanadi va savol paydo bo'ladi: «Toshning yoshini qanday bilishadi?» Bu savol uni yer qatlamlariga, undan kimyoga, undan fizikaga olib boradi. Har bir ulanish keyingi bilmaydigan narsani ko'rsatib beradi.",
        "![Bilim kam bo'lsa, nuqtalar orasida ip yo'q, savol ham yo'q. Bilim ko'paygan sari nuqtalar ulanadi va to'rning har bir chetida yangi «nega?» osilib turadi.](/assets/insho/8-tarmoq.svg)",
        "Amerikalik olimlar Donna Rext va Loren Lesli 1988 yilda bir [tadqiqot](https://doi.org/10.1037/0022-0663.80.1.16) o'tkazishgan. O'quvchilarga beysbol o'yini haqida matn berib, qanchalik tushunganini tekshirishgan. Natija kutilmagan bo'lgan: o'qishda zaif, lekin beysbolni yaxshi biladigan bolalar o'qishda kuchli, lekin beysbolni bilmaydigan bolalardan yaxshiroq tushungan. Demak, **yangi narsani tushunishda o'qish mahoratidan ham ko'ra oldingi bilim ko'proq yordam beradi.**",
        "## Ko'p bilgan sari savol ham ko'payadi",
        "Bilimni doira deb tasavvur qiling. Doira ichida bilganlaringiz, tashqarisida bilmaganlaringiz. **Doiraning chegarasi esa savollar tug'iladigan joy**, chunki aynan shu yerda bilgan narsangiz bilmagan narsangizga tegib turadi.",
        "![Orol kichik bo'lsa, uning okeanga tegib turgan sohili ham qisqa. Orol kattalashgan sari sohil uzayadi va savollar ko'payadi.](/assets/insho/8-doira.svg)",
        "Buni orolga ham o'xshatish mumkin. Amerikalik fizik Jon Uilerga nisbat beriladigan bir gap bor: «Biz bilmaslik dengizi bilan o'ralgan orolda yashaymiz. Bilim orolimiz kattalashgan sari bilmasligimiz sohili ham uzayadi». Ya'ni bilganlaringiz orol, bilmaganlaringiz esa uning sohili. Orol qanchalik katta bo'lsa, sohili ham shuncha uzun bo'ladi va okeanga qarab turgan savollar ko'payadi.",
        "Shuning uchun haqiqiy olimlar ko'p bilgan sari «men hech narsani bilmas ekanman» deydi. Qadimgi yunon faylasufi Sokratga ham shunday gap nisbat beriladi: «Men faqat bir narsani bilaman: hech narsani bilmayman». Hech narsa bilmagan odam esa ko'pincha o'zini hammasini biladigandek his qiladi. Chunki uning savoli yo'q.",
        "Mana shu sababli **qiziqish bir tekis emas, qor ko'chkisi kabi o'sadi.** Psixolog Keyt Stanovich 1986 yilgi [tadqiqotida](https://doi.org/10.1598/RRQ.21.4.1) o'qishdagi bu hodisani «Matto effekti» deb atagan: *erta o'qishni yaxshi o'rgangan bola ko'proq o'qiydi, ko'proq o'qigani uchun ko'proq biladi, ko'proq bilgani uchun o'qish unga yanada oson va qiziqarli bo'ladi. O'qimagan bola esa yildan yilga orqada qolaveradi. Ikkalasi orasidagi farq yillar o'tib kamaymaydi, aksincha kattalashadi.*",
        "## Unda telefon nega qiziq?",
        "Endi haqli savol tug'iladi: agar qiziqish uchun bilim kerak bo'lsa, unda nega telefon hamma bolaga birdek qiziq?",
        "Chunki **rils hech qanday oldingi bilim talab qilmaydigan qilib yasalgan.** Uni tushunish uchun to'r ham, ilgak ham kerak emas. Har bir video o'zi bilan tayyor qiziqishni olib keladi: tez kadr, kutilmagan oxir, kulgi.",
        "Buni ovqatdagi glutamatga o'xshatish mumkin. Chips, lapsha, kolbasa kabi tez tayyorlanadigan ovqatlarga natriy glutamat qo'shiladi. U tilga tegishi bilanoq, chaynamasdan turib, miyaga kuchli lazzat signalini beradi. Tabiiy go'shtda ham shu ta'm bor, lekin uni his qilish uchun go'shtni uzoq chaynash kerak. Glutamatga o'rgangan til keyin uyda pishgan oddiy ovqatni bemaza deb biladi. Rils ham xuddi shunday: chaynamasdan olinadigan tayyor qiziqish. Unga o'rgangan miya keyin chaynash kerak bo'lgan qiziqishni, ya'ni kitobni, masalani, kasbni bemaza deb biladi.",
        "Rilsdan keyin savol qoladimi? Odatda yo'q. Keyingi video, yana keyingisi. Yaxshi kitobdan keyin esa savol qoladi. Farq shunda: biri bilimsiz qiziqish, ikkinchisi bilimdan tug'ilgan qiziqish. **Birinchisi sizdan oladi, ikkinchisi sizga qo'shadi.**",
        "Sun'iy intellekt ham har qanday savolga bir zumda javob beradi. Lekin savolni o'zi bermaydi. **Savolni faqat bilim beradi.**",
        "## Qiziqishni kutib o'tirmang",
        "Endi eng muhim gapga keldik. Agar qiziqish bilimdan tug'ilsa, unda boshida, bilim hali yo'q paytda, qiziqish ham bo'lmaydi. Demak, **birinchi qadamni qiziqish emas, sabr va qunt bosadi.**",
        "Ingliz tilini o'rganishni boshlagan har bir o'quvchi buni biladi. Birinchi oylar zerikarli: harflar, so'zlar, qoidalar. Hech narsa tushunarli emas, hech narsa qiziq emas. Til o'qituvchilari bejiz «birinchi ming so'zni yodlab olmaguningizcha tilda deyarli hech narsani tushunmaysiz» demaydi. Ming so'zni yodlamay yillab yursangiz ham, tilni tushunmay yuraverasiz. Lekin bir kuni ming so'z yig'iladi. Shunda sevimli qo'shig'ingizdagi bir jumlani tushunib qolasiz. Filmdagi hazilni tarjimasiz ilg'aysiz. Va birdan qiziqish paydo bo'ladi: «Qolganida nima deyilyapti ekan?» Endi sizni hech kim majburlamaydi. Sizni bilimning o'zi tortadi.",
        "![Boshida qiziqish deyarli yo'q, uni majburlash va rag'bat ko'tarib turadi. Ma'lum nuqtadan keyin chiziqlar kesishadi va qiziqish yukni o'z zimmasiga oladi.](/assets/insho/8-grafik.svg)",
        "Grafikning chap tomoni eng og'ir bosqich. Ko'pchilik aynan shu yerda to'xtaydi va «menga qiziq emas ekan» degan xulosaga keladi. Aslida u hali qiziqish paydo bo'ladigan joyga yetib bormagan bo'ladi. U bekatga yetmasdan avtobusdan tushib, «bu yo'l hech qayerga olib bormas ekan» degan yo'lovchiga o'xshaydi.",
        "Ota-onalar ham ko'pincha shu xatoga yo'l qo'yadi: «Bolam qiziqmasa, majburlamayman. O'zi qiziqib qolsa o'qiydi». Niyat ezgu, lekin xulosa xato. **Hech narsa bilmagan bola o'z-o'zidan biror narsaga qiziqib qolmaydi.** Qiziqish uchun bo'shliq kerak, bo'shliqni ko'rish uchun esa atrofida bilim kerak. Bolani shu boshlang'ich bilimga olib kelish, ya'ni birinchi «majburlash» bosqichidan o'tkazish kattalarning vazifasi.",
        "Albatta, majburlash deganda faqat qattiqqo'llikni nazarda tutmayapman. Gap bitta maqsad haqida: bola nima qilib bo'lsa ham birinchi bosqichdan o'tib olishi kerak. Buning yo'li har xil bo'lishi mumkin. Kitobni o'qib tugatsa, kichik sovg'a va'da qilish. Har kuni yodlagan so'zlari uchun ball yig'dirib, hafta oxirida mukofot berish. Yonida o'tirib birga o'qish, o'rganganini so'rab maqtash. Do'sti bilan musobaqa qildirish. Bu mukofotlar qiziqishning o'rnini bosmaydi, faqat bolani qiziqish paydo bo'ladigan nuqtagacha olib boradi. U yerga yetgach mukofot kerak bo'lmay qoladi: bolani bilimning o'zi tortadi.",
        "Bobolarimiz bekorga «Ilm igna bilan quduq qazigandek» demagan. Birinchi ignalar hech narsa qazimagandek tuyuladi. Lekin har qanday quduq aynan shulardan boshlanadi.",
        "## Ikki halqa",
        "Endi hammasini birlashtiramiz. Hayotda ikki halqa bor.",
        "![Johillik halqasi joyida aylanadi. Bilim halqasi esa har aylanishda kattalashib, cheksiz davom etadi.](/assets/insho/8-halqa.svg)",
        "Birinchisi, bilim halqasi: bilasiz, savol tug'iladi, savol qiziqish uyg'otadi, qiziqish o'qitadi, o'qish yangi bilim beradi. Bu halqa har aylanganda kengayadi. Ikkinchisi, johillik halqasi: bilmaysiz, savol tug'ilmaydi, qiziqmaysiz, o'qimaysiz va yana bilmaysiz. Bu halqa ham aylanadi, lekin joyida. Yillar o'tadi, odam o'sha nuqtada qolaveradi.",
        "Bir halqadan ikkinchisiga o'tishning yagona yo'li bor: **qiziqish hali yo'q paytda ham biror narsani o'rganishni boshlash.** Bitta soha tanlang. Uning eng oddiy asoslarini o'zingizni majburlab bo'lsa ham o'rganing. Har kuni kechqurun o'zingizdan so'rang: «Bugun menda qanday yangi savol tug'ildi?» Savollar paydo bo'la boshlasa, demak to'r to'qilyapti.",
        "**Qiziqishni kutib o'tirmang, uni bilim bilan quring.** Chunki kutib o'tirgan odam johillik halqasidan chiqa olmaydi.",
        "> **Demak, hech narsani bilmagan bolada hech qanday savol tug'ilmaydi.** Savol tug'ilmagach, u hech narsaga qiziqmaydi. Qiziqmagach, o'rganmaydi. Va shu tarzda hech narsani bilmay, bilimsiz, johil bo'lib qolib ketaveradi."
      ].join(PARA)
    }
];

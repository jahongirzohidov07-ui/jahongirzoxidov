'use strict';
/* QORALAMA INSHOLAR — saytda faqat PIN bilan kirgan muallifga ko'rinadi (/api/insho).
   Muallif ma'qullagach, insho shu yerdan olib tashlanadi va essays.js ga ko'chiriladi —
   shundan keyin hammaga ko'rinadi. Format essays.js bilan bir xil. */

const PARA = '\n\n';

module.exports = [
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
      "Fransuz faylasufi Rene Jirar buni «mimetik istak» deb atagan: biz istaklarimizni o'zimiz o'ylab topmaymiz — atrofimizdagilardan ko'chirib olamiz. Ya'ni biz atrofimizdagilar nimani xohlasa, shuni xohlaydigan mimetik mavjudotmiz. Ko'zimiz nimaga ko'p tushsa, qalbimiz shunga moyil bo'ladi. Shuning uchun bugungi raqamli muhitimizda xalq maqollarimizni ham o'zgartiramiz shekilli:",
      [
        "- Instagramga yaqin yursang, istaklaring ko'payadi.",
        "- Brauzer (yoki GPT) tarixingni ko'rsat, kimligingni aytaman.",
        "- Do'st blogingga (fikringga) qarab, dushman instagram akkauntingga (ko'rinishingga) qarab muomala qiladi.",
        "- Ko'zoynakning ham kamerasi bor.",
        "- Rilsga to'ymagan, storisga ham to'ymaydi.",
        "- Kelin kelsa, \"screen time\"ga boq."
      ].join('\n'),
      "Bir qoshiq toza asalni yeb ko'rganmisiz? Undan keyin darhol oddiy shirin choy ichib ko'rsangiz, choy sizga xuddi shakarsiz, bemaza sudek tuyuladi. Aslida choy o'sha-o'sha shirin, shunchaki tilingiz bir zum oldin haddan tashqari o'tkir shirinlik zarbasini yeb ulgurdi. Me'yor buzildi.",
      "Ijtimoiy tarmoqlardagi arzon hayp, dabdabali ijaraga olingan mashinalar va ko'z-ko'z qilingan hashamat ham zehnimizga xuddi shu ta'sirni o'tkazadi. Ular miyaga «mehnat qilmasdan bir kunda boyib ketish mumkin» degan sun'iy va o'tkir rohat zarbasini beradi. Bu soxta yaltiroqlikka o'rganib qolgan odamga asta-sekin, halol va sabr bilan qilinadigan haqiqiy mehnatning ta'mi tatimay qoladi. Kitob o'qish, kasb o'rganish, yillab ter to'kish uning ko'ziga bema'ni va qiyin ishdek ko'rina boshlaydi. Oson natija illyuziyasi — aqliy qobiliyatimizni sindirib, haqiqiy hayotdan uzib qo'yadigan eng xavfli tuzoqdir.",
      "Odam qorniga kirayotgan ovqatni qanday saralasa, ko'zi va qulog'idan kirayotgan ma'lumotlarni ham shunday elakdan o'tkazishi shart.",
      "Mening dunyoqarashim shakllanishiga sabab bo'lgan, ko'p sonlarini (ba'zilarini 70%, ba'zilarini 100%) shaxsan ko'rib chiqqan YouTube loyihalari va doimiy kuzatadigan Telegram kanallarim bor. Bu kanallarni aynan dastlabki, birinchi videolaridan boshlab ko'rish kishiga yaxlit bir poydevor beradi. To'liq ro'yxatni insho oxiriga — «Ilova»ga qo'ydim.",
      "Biz yonimizda kimlar yashayotganini har doim ham tanlay olmasligimiz mumkin. Ammo quloqchinimizdan kimning ovozi kirib kelishini, ko'zimiz kimning fikrlariga termilishini yuz foiz o'zimiz hal qilamiz.",
      "Jim Ron bugun yashaganida, ehtimol, shunday derdi: siz kuzatadigan beshta blogerning o'rtachasisiz. Ularni esa o'zingiz tanlaysiz.",
      "Ekrandagi odamlaringizni almashtiring — shunda fikrlaringiz, fikrlaringiz ortidan esa butun hayotingiz o'zgaradi.",
      "## Ilova: kuzatishga arziydigan manbalar",
      "YouTube'da ko'rishga arzigulik kanallar va podkastlar:",
      [
        "- [Osmondagi bolalar](https://www.youtube.com/@Osmondagibolalar) — mehnati, intilishi va sinovlari bilan katta natijalarga erishgan yoshlarning real hikoyalari.",
        "- [Alohida Mavzu](https://www.youtube.com/@Alohidamavzu) — yuzaki xabarlardan qochib, bitta masalaning tub mohiyatiga kirish uchun ayni muddao.",
        "- [Asoschilar podcast](https://www.youtube.com/@asoschilar) — nazariya emas, amaliyotda biznes qurgan va xatolaridan saboq olgan amaliyotchi mutaxassislarning ochiq tahlili.",
        "- [Aziz Rahimov](https://www.youtube.com/@azizrakhimov) — boshqaruv, metodologiya va ta'limga tizimli yondashuv; har bir videoni to'liq o'rganishga arziydigan manba.",
        "- [Millat Umidi](https://www.youtube.com/@UmidjonEshmukhamedov) va [MU master](https://www.youtube.com/@MU_Master) — ilm va professional rivojlanish yo'lida yurganlarga aniq maqsad va yo'nalish ko'rsatuvchi suhbatlar.",
        "- [Maqsad](https://www.youtube.com/@maqsadclub) va [Maqsad klub](https://www.youtube.com/@maqsadhamjamiyati) — harakat intizomi, shaxsiy samaradorlik va natijaga erishish mexanizmlari.",
        "- [Shaha Dolimov](https://www.youtube.com/@shahadolimov) — zamonaviy ko'nikmalar, xalqaro tajriba va fikriy erkinlik darslari.",
        "- [Davronbek Turdiyev](https://www.youtube.com/@DAVRONBEKTURDIEV) — xotira, diqqat va aqliy imkoniyatlarni kengaytirish yo'llari.",
        "- [Alisher Isayev](https://www.youtube.com/@AlisherIsaev) — biznes jarayonlari, savdo tizimlari va amaliy menejment tahlillari.",
        "- [Kapital](https://www.youtube.com/@Kapitall_uz) — moliyaviy savodxonlik va iqtisodiy qonuniyatlar; pulga hissiyot bilan emas, aql bilan qarashni o'rgatuvchi darslar.",
        "- [Ustozation](https://www.youtube.com/@ustozation) — pedagogika va zamonaviy o'qitish uslublariga bag'ishlangan chuqur mulohazalar.",
        "- [Subyektiv](https://www.youtube.com/@SUBYEKTIV) — jamiyatimizdagi og'riqli, ammo hamma ham gapiravermaydigan nuqtalarni ko'rsatib beruvchi tahliliy reportajlar.",
        "- [Kalibr](https://www.youtube.com/@Hasan_Mamasaidov) — o'z sohasining ustalari bilan bo'ladigan, mezon va prinsiplarni o'rgatuvchi jiddiy suhbatlar.",
        "- [Jamshidxon Ziyoxonov](https://www.youtube.com/@Ziyokhonov) — tahliliy qarash va mantiqiy fikrlashni o'stirish uchun samimiy suhbatlar.",
        "- [Xasanxon Yahyo Abdulmajid](https://www.youtube.com/@Hasanxondomla) — diniy va ma'naviy ildizlarimizni chuqur, xolis va hikmat bilan tushunish uchun eng ishonchli ustozlardan biri.",
        "- [Fikr yetakchilari](https://www.youtube.com/@fikr_yetakchilari) — qaror qabul qiluvchi, jamiyatga ta'sir o'tkaza oladigan shaxslarning fikrlash tarzi.",
        "- [Gashtak](https://www.youtube.com/@Gashtak) — samimiy, do'stona va hech qanday yasama ssenariylarsiz bo'ladigan davra gurunglari.",
        "- Edu-podcast — xalqaro ta'lim va til o'rganish sohasidagi amaliyotchilarning real tajribalari."
      ].join('\n'),
      "## Telegram: shovqinsiz fikr maydoni",
      "Telegram shovqin-surondan holi, matn ustida mulohaza yuritish uchun eng qulay maydon. U yerda saralangan va o'qishga arziydigan manbalar:",
      [
        "- [@azizrakhimov_blog](https://t.me/azizrakhimov_blog) — ta'lim, shaxsiy boshqaruv va amaliy kuzatuvlar burchagi.",
        "- [@mashrabov_aa](https://t.me/mashrabov_aa) — professional tajriba va xolis tahlillar maydoni.",
        "- [@aqlli_ikkichi](https://t.me/aqlli_ikkichi) — standart qoliplardan tashqarida fikrlash va noan'anaviy yondashuvlar.",
        "- [@boshqaruvchiga](https://t.me/boshqaruvchiga) — rahbarlik, jamoa qurish va tizim yaratishning amaliy qoidalari.",
        "- [@xodimga](https://t.me/xodimga) — mehnat bozori, kasbiy etika va o'z ustida ishlash tamoyillari.",
        "- [@AlisherIsaev_blogi](https://t.me/AlisherIsaev_blogi) — biznes jarayonlari va boshqaruv sirlari haqida ochiq mulohazalar.",
        "- [@DrBekOlimjon](https://t.me/DrBekOlimjon) — ilm-fan, sog'liq va fikriy intizom tahlili.",
        "- [@shahadolimov](https://t.me/shahadolimov) — shaxsiy taraqqiyot va zamonaviy ko'nikmalar bo'yicha foydali kuzatuvlar."
      ].join('\n')
    ].join(PARA)
  }
];

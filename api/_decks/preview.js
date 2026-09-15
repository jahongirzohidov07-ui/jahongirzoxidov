'use strict';
/* Dizayn namunalari — tasdiqlash uchun */
const ITEMS = ['Yutqizmaslik qoidalari o\'rgatiladi', 'Maqsad yo\'lida katta yo\'qotishlar qilinadi', 'Har bir mavzudan fundamental bilimlar o\'rgatiladi', 'Aksariyat mavzulardan ekspert emasman', 'Chuqurroq ilm uchun mutaxassis bilan uchrashing'];
module.exports = {
  slides: [
    { t: 'photo', layout: 'split', color: 'blue', img: '/assets/qol-berish.jpg', focus: 'center', k: 'Important disclaimer', h: 'Kelishib olaylik', items: ITEMS, all: true, credit: 'Foto: Unsplash' },
    { t: 'photo', layout: 'split', color: 'green', img: '/assets/kelishuv.jpg', focus: 'center', k: 'Important disclaimer', h: 'Kelishib olaylik', items: ITEMS, all: true, credit: 'Foto: Unsplash' }
  ]
};

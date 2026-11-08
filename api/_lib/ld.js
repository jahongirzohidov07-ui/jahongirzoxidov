'use strict';
/* Google va Yandex uchun tuzilgan ma'lumot (schema.org JSON-LD).
   Qidiruvda muallif, sana, rasm va sahifa turi to'g'ri ko'rinishi uchun.
   Bosh sahifa (index.html) dagi nusxa: node -e "console.log(require('./api/_lib/ld').json(require('./api/_lib/ld').bosh()))" */

const SITE = 'https://www.jahongirzoxidov.uz';
const PERSON_ID = SITE + '/#person';
const SITE_ID = SITE + '/#website';

const PERSON = {
  '@type': 'Person',
  '@id': PERSON_ID,
  name: 'Jahongir Zoxidov',
  alternateName: ['Jahongir Zohidov', 'Zoxidov Jahongir Ilhomjonovich'],
  url: SITE + '/men-haqimda',
  image: SITE + '/assets/jahongir-2.jpg',
  jobTitle: 'Pedagog, tadbirkor, mentor va muallif',
  worksFor: { '@type': 'EducationalOrganization', name: 'Jony Academy' },
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'University of Sunderland' },
  knowsAbout: ["Ta'lim", 'Ingliz tili', 'IELTS', 'Ustozlik', 'Mentorlik'],
  sameAs: ['https://t.me/JahongirZoxidov', 'https://www.instagram.com/jahongir_zoxidov/', 'https://t.me/ustozlikilmi']
};
const WEBSITE = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: SITE + '/',
  name: 'Jahongir Zoxidov',
  description: "Ta'lim, oila, moliya, o'z-o'zini anglash va din haqida tajribadan kelib chiqqan insholar.",
  inLanguage: 'uz',
  author: { '@id': PERSON_ID },
  publisher: { '@id': PERSON_ID }
};
const MEN = { '@id': PERSON_ID };

/* "06.11.2026" -> "2026-11-06" */
function iso(d) {
  const m = String(d || '').match(/^(\d{2})\.(\d{2})\.(\d{4})$/);
  return m ? m[3] + '-' + m[2] + '-' + m[1] : undefined;
}

function graph(...items) {
  return { '@context': 'https://schema.org', '@graph': [WEBSITE, PERSON, ...items] };
}

function bosh() { return graph(); }

function insho(e, o) {
  const d = iso(e.date);
  return graph({
    '@type': 'BlogPosting',
    '@id': o.url + '#insho',
    headline: String(e.title).slice(0, 110),
    description: o.desc,
    image: [o.img],
    datePublished: d,
    dateModified: d,
    author: { '@id': PERSON_ID, name: 'Jahongir Zoxidov', url: SITE + '/men-haqimda' },
    publisher: MEN,
    mainEntityOfPage: o.url,
    url: o.url,
    inLanguage: 'uz',
    isPartOf: { '@id': SITE_ID }
  });
}

function sahifa(s, o) {
  const base = { url: o.url, name: o.title, description: o.desc, inLanguage: 'uz', isPartOf: { '@id': SITE_ID } };
  if (s === 'men-haqimda') return graph({ '@type': 'ProfilePage', ...base, mainEntity: MEN });
  if (s === 'murojaat') return graph({ '@type': 'ContactPage', ...base, about: MEN });
  if (s === 'yozgan-kitoblarim') {
    const kitob = (name, type) => ({ '@type': type || 'Book', name, author: MEN });
    return graph({
      '@type': 'CollectionPage', ...base, author: MEN,
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          kitob("Ingliz tilini o'rganish sanati"),
          kitob('Wow Grammar'),
          kitob('Jony Essays'),
          kitob('IELTS 1.0–7.0 intensiv seriyasi', 'BookSeries')
        ].map((item, i) => ({ '@type': 'ListItem', position: i + 1, item }))
      }
    });
  }
  if (s === 'dasturlar') {
    return graph(
      { '@type': 'CollectionPage', ...base, author: MEN },
      { '@type': 'Course', name: 'Shogirdlik dasturi', description: "Yigitlar uchun 10 darslik dastur: har darsda hayotda kerak bo'ladigan bitta ko'nikma yoki odat.", provider: MEN, inLanguage: 'uz', url: o.url },
      { '@type': 'Course', name: 'TTP: Ustozlik Psixologiyasi', description: "O'qituvchilikdan ustozlikka o'tish uchun kurs.", provider: MEN, inLanguage: 'uz', url: o.url }
    );
  }
  return graph({ '@type': 'CollectionPage', ...base, author: MEN });
}

/* <script> ichiga xavfsiz joylash */
function json(obj) {
  return JSON.stringify(obj).replace(/</g, '\\u003c');
}

module.exports = { bosh, insho, sahifa, json, iso };

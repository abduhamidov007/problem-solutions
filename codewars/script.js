// 1
// Kirish sifatida butun sonni oladigan va shu sonning ikkilik ko‘rinishida bittaga teng birlar sonini qaytaradigan 
// funksiya yozing. Kirish salbiy emasligiga kafolat bera olasiz.
// Misol: 1234 ning ikkilik ko'rinishi 10011010010, shuning uchun bu holda funktsiya 5 ni qaytarishi kerak
function number(num) {
  if (num === 0) {
    return 0;
  } else {
    let n = Math.abs(num);
    let m = n.toString(2);
    let s = m.match(/1/gi);
    let d = s.map((x) => Number(x));
    let q = d.reduce((a, b) => a + b);
    return q;
  }
}
console.log(number(7));


// 2
// Siz Karteziya shahrida yashaysiz, u erda barcha yo'llar mukammal tarmoqqa joylashtirilgan.
// Uchrashuvga o'n daqiqa erta keldingiz, shuning uchun siz qisqa yurish uchun imkoniyatdan foydalanishga qaror qildingiz.
// Shahar o'z fuqarolariga telefonlarida Walk Generating ilovasini taqdim etadi -- har safar tugmani bosganingizda,
// u sizga yurish yo'nalishlarini bildiruvchi bir harfli qatorlarni yuboradi (masalan, ['n', 's', 'w', 'e']).
// Siz har doim har bir harf (yo‘nalish) uchun faqat bitta blokni bosib o‘tasiz va bilasizki, bitta shahar blokini
// bosib o‘tish uchun sizga bir daqiqa kerak bo‘ladi, shuning uchun agar ilova sizga bergan yurish sizga roppa-rosa
// o‘n daqiqa vaqt oladi (siz erta yoki kech bo'lishni xohlamang!) va, albatta, sizni boshlang'ich nuqtangizga qaytaradi.
// Aks holda false qaytaring .
function isValidWalk(walk) {
  let l = walk.length;
  let w = walk.join();
  let q =
    l === 10
      ? w.search("n, s")
        ? w.match(/n/g).length - w.match(/s/g).length
        : w.match(/w/g).length - w.match(/e/g).length
      : false;
  let h = q === 0 ? true : false;
  return h;
}
console.log(isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "w", "e"]));

// 3 sizga ma'lum birson berilyabdi siz uni ildizi butun sonda 
// chiqsa true aks hodlda falsa qaytarishingiz kerak

let isSquare = function(n){
    return Number.isInteger(Math.sqrt(n))
}
console.log(isSquare(24));

// 4 Kichik shaharchada aholi p0 = 1000yil boshida. Aholi soni 
// yildan-yilga muntazam oshib bormoqda, 2 percentbundan tashqari ,
//  50har yili shaharchaga yangi aholi kelib qolmoqda. Shahar o'z
//   aholisi sonidan ko'p yoki teng bo'lishi uchun necha yil kerak p = 1200?

function nbYear(p0, percent, aug, p) {
    for (let years = 0; p0 < p; years++) {
      p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    }
    return years
  }
console.log(nbYear(1500, 5, 100, 5000));

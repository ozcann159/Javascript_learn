// Egzersiz Seviye 1
let firstName = "Elif";
let lastName = "Özcan";
let country = "Türkiye";
let city = "Ankara";
let age = 29;
let isMarried = false;
let year1 = 2025;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// ---------------2------------------------

console.log("10" === 10);

//-------------3---------------------------

console.log(parseInt("9.8") == 10); //false

//-------------4---------------------------

console.log(10 > 5); // true
console.log("elma" !== "armut"); // true
console.log(Boolean(1)); // true (1 truthy bir değerdir)

console.log(3 === "3"); // false (tipleri farklı)
console.log(0); // false (0 falsy bir değerdir)
console.log(Boolean(null)); // false

//-------------5---------------------------

4 > 3; // true
4 >= 3; // true
4 < 3; // false
4 <= 3; // false
4 == 4; // true
4 === 4; //true
4 != 4; // false
4 !== "4"; // true
4 == "4"; //false
4 === "4"; //true

console.log("python".length);

let word1 = "Python";
let word2 = "jargon";

// Uzunlukları bulma
console.log(word1.length); // 6
console.log(word2.length); // 6

// Yanlış bir karşılaştırma ifadesi (false döner)
console.log(word1.length !== word2.length); // false

//-------------6---------------------------
4 > 3 && 10 < 12; // true
4 > 3 && 10 > 12; // false
4 > 3 || 10 < 12; // true
4 > 3 || 10 > 12; // true
!(4 > 3); //false
!false; // true
!(4 > 3 && 10 < 12); //false
!(4 > 3 && 10 > 12); //true
!(4 === "4"); // true
let hasOn = "dragon".includes("on") && "python".includes("on");
console.log(!hasOn); // false

//-------------7---------------------------

const now = new Date();

// 1. Bugün yıl nedir?
console.log("Yıl:", now.getFullYear()); // Örn: 2025

// 2. Bugünün ayı rakam olarak nedir?
console.log("Ay:", now.getMonth() + 1); // getMonth() 0–11 arası verir, bu yüzden +1 // Örn: 5

// 3. Bugünün tarihi nedir?
console.log("Tarih:", now.getDate()); // Örn: 27

// 4. Bugün sayı olarak gün nedir?
console.log("Gün:", now.getDay()); // 0 = Pazar, 1 = Pazartesi, ..., 6 = Cumartesi // Örn: 2 (Salı)

// 5. Şimdi saat kaç?
console.log("Saat:", now.getHours()); // Örn: 14

// 6. Dakika kaç şimdi?
console.log("Dakika:", now.getMinutes()); // Örn: 43

const now1 = new Date();
const secondsSinceEpoch = Math.floor(now.getTime() / 1000);

console.log("1970'ten bugüne geçen saniye:", secondsSinceEpoch);

// Egzersiz Seviye 2

let b = prompt("Üçgenin tabanını giriniz:");
let h = prompt("Üçgenin yüksekliğini giriniz:");
let alan = 0.5 * b * h;
console.log(`Üçgenin alanı ${alan}`);

let a = prompt("a kenarını girin");
let b1 = prompt("b kenarını girin");
let c = prompt("c kenarını girin");
let ucgenCevresi = a + b + c;
console.log(`Üçgenin çevresi ${ucgenCevresi}`);

// Denklem: y = 2x - 2

// Eğim doğrudan bellidir:
let m = 2; // slope (eğim)
console.log("Eğim (slope): " + m);

// Y-kesme noktası: x = 0 iken y kaç olur?
let x_yintercept = 0;
let y_yintercept = 2 * x_yintercept - 2;
console.log(`Y-kesme noktası: (${x_yintercept}, ${y_yintercept})`);

// X-kesme noktası: y = 0 iken x kaç olur?
let y_xintercept = 0;
let x_xintercept = (y_xintercept + 2) / 2;
console.log(`X-kesme noktası: (${x_xintercept}, ${y_xintercept})`);

let x1 = 2, y1 = 2;
let x2 = 6, y2 = 10;

let m2 = (y2 - y1) / (x2 - x1);
console.log("2. Eğim (iki noktadan):", m2);


let saat = prompt('Kaç saat çalıştınız')
let oran = prompt("Saatlik ücretiniz nedir?")
let ucret = saat * oran;

console.log('Toplam ücretiniz: ${ücret} TL')

// -----------------------------------------------------
let name = 'Asabeneh'

if (name.length > 7) {
    console.log('Adınız uzun')
} else {
    console.log('Adınız kısa')
}

// -----------------------------------------------------

let surname = 'Yetayeh'

if (firstName.length > lastName.length) {
  console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`);
} else if (firstName.length < lastName.length) {
  console.log(`Your family name, ${lastName} is longer than your first name, ${firstName}`);
} else {
  console.log(`Your first name, ${firstName} and family name, ${lastName} are of equal length`);
}

let myAge = 250
let yourAge = 25

let totalAge = myAge + yourAge
console.log('I am 225 years older than you ${totalAge}')

let years2 = prompt('Doğduğunuz yılı giriniz:')
let currentYear = new Date().getFullYear()
let age2 = currentYear - years2

if (years2 >= 18) {
    console.log('Yaşınız {age}. Araba kullanabilirsiniz')
} else {
    let yearsToWait = 18 - age2
    console.log('Yaşınız {age}. Araba kullanmak için ${yearsToWait} yıl daha beklemelisiniz')
}


// -----------------------------------------------------

let yas = prompt("Kaç yıl yaşamak istiyorsunuz ?")
let saniyeSayisi = yas * 365 * 24 * 60 * 60

console.log('Bir kişi ${yas} yıl yaşarsa, yaklaşık ${saniyeSayisi.toLocaleString()} saniye yaşar')

// -----------------------------------------------------
const now2 = new Date();

// Yıl, ay, gün, saat, dakika değerlerini alıyoruz
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');  // Aylar 0'dan başlar, +1 yapıyoruz
const day = String(now.getDate()).padStart(2, '0');
const hour = String(now.getHours()).padStart(2, '0');
const minute = String(now.getMinutes()).padStart(2, '0');

// 1. YYYY-MM-DD HH:mm
const format1 = `${year}-${month}-${day} ${hour}:${minute}`;

// 2. DD-MM-YYYY HH:mm
const format2 = `${day}-${month}-${year} ${hour}:${minute}`;

// 3. DD/MM/YYYY HH:mm
const format3 = `${day}/${month}/${year} ${hour}:${minute}`;

console.log(format1);
console.log(format2);
console.log(format3);

// -----------------------------------------------------

const now3 = new Date();

const year3 = now.getFullYear();
const month3 = String(now.getMonth() + 1).padStart(2, '0');  // Ay 0'dan başladığı için +1
const day3 = String(now.getDate()).padStart(2, '0');
const hour3 = String(now.getHours()).padStart(2, '0');       // Saat iki basamaklı
const minute3 = String(now.getMinutes()).padStart(2, '0');   // Dakika iki basamaklı

const formattedDateTime = `${year3}-${month3}-${day3} ${hou3}:${minute3}`;

console.log(formattedDateTime);

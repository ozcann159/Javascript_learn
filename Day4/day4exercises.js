// Soru1

// let kullaniciGirdisi = prompt("Lütfen yaşınızı giriniz:");
// let yas = Number(kullaniciGirdisi);
// if (yas > 18) {
//   console.log("Ehliyet almak için uygunsunuz");
// } else {
//   kalanYil = 18 - yas;
//   console.log(
//     `Ehliyet almak için yaşınız yeterli değil. ${kalanYil} yıl sonra alabilirsiniz.`
//   );
// }

//Soru2

// let myAge = 25; //Benim yaşım
// let yourAge = prompt("Enter your age"); //kullanıcıdan yaş girdisi alındı
// yourAge = Number(yourAge);

// if (yourAge > myAge) {
//   yasFark = yourAge - myAge;
//   console.log(`Sen benden ${yasFark} yas büyüksün`);
// } else if (myAge > yourAge) {
//   yasFark2 = myAge - yourAge;
//   console.log(`Ben senden ${yasFark2} yaş büyüğüm`);
// } else {
//   console.log("Biz aynı yaştayız");
// }

//Soru3
let a = 4;
let b = 3;

var sonuc = a > b ? "a b'den büyüktür" : "a b'den küçüktür"; //Ternary Operator
console.log(sonuc);

//Soru4
// let girilenSayi = prompt("Sayı giriniz");
// sayi = Number(girilenSayi);

// if (girilenSayi % 2 == 0) {
//   console.log(`${girilenSayi} çift bir sayıdır`);
// } else {
//   console.log(`${girilenSayi} tek bir sayıdır`);
// }

// Egzersiz: Seviye 2
//Soru1
// let sinavNotu = prompt("Sınav notunuzu girin");
// let numberCeviri = Number(sinavNotu);

// if (sinavNotu >= 80 && sinavNotu <= 100) {
//   console.log("Harf Notunuz A");
// } else if (sinavNotu >= 70 && sinavNotu <= 89) {
//   console.log("Harf Notunuz B");
// } else if (sinavNotu >= 60 && sinavNotu <= 69) {
//   console.log("Harf Notunuz C");
// } else if (sinavNotu >= 50 && sinavNotu <= 59) {
//   console.log("Harf Notunuz D");
// } else if (sinavNotu >= 0 && sinavNotu <= 49) {
//   console.log("Harf Notunuz F");
// }

//Soru2
// let mevsimler = prompt("Hangi aydayız ?");

// if (mevsimler === "eylül" || mevsimler === "ekim" || mevsimler === "kasım") {
//   console.log("Mevsim sonbahardır");
// } else if (
//   mevsimler === "aralık" ||
//   mevsimler === "ocak" ||
//   mevsimler === "şubat"
// ) {
//   console.log("Mevsim Kıştır");
// } else if (
//   mevsimler === "Mart" ||
//   mevsimler === "Nisan" ||
//   mevsimler === "Mayıs"
// ) {
//   console.log("Mevsim Bahardır");
// } else if (
//   mevsimler === "haziran" ||
//   mevsimler === "temmuz" ||
//   mevsimler === "ağustos"
// ) {
//   console.log("Mevsim Yazdır");
// }

//Soru3
let gun = prompt("Bugün hangi gün?");

switch (gun) {
  case "pazartes":
  case "salı":
  case "çarşamba":
  case "perşembe":
  case "cuma":
    console.log("İş günü");
    break;
  case "cumartesi":
  case "pazar":
    console.log("Hafta Sonu");
    break;

  default:
    console.log("Geçerli bir gün ismi girmediniz");
}

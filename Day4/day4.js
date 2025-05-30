let isRaining = true;

if (isRaining) {
  //şemsiye al
  // koşul true ise kodlarımız çalışır.
  console.log("Git şemsiye al");
} else {
  console.log("Hava güneşli şemsiyeye gerek yok");
}

let num = 3;
if (num > 0) {
  console.log("${num} pozitif bir sayıdır");
} else {
  console.log("${num} pozitif bir sayı değildir.");
}
// -----------------------İF else else if----------------------------------------------
let number = 5;
if (number === 4) {
} else if (number > 5) {
} else if (number > 3) {
} else {
}

let a = 0;
if (a > 0) {
  console.log("${a} pozitif bir sayıdır");
} else if (a < 0) {
  console.log("${a} negatif bir sayıdır");
} else if (a == 0) {
  console.log("${a} sıfırdır");
} else {
  console.log("${a} bir sayı değildir.");
}

let weather = "sunny";
if (weather == "rainy") {
  console.log("You need a rain coat");
} else if (weather == "cloudy") {
  console.log("It might be cold, you need a jacket");
} else if (weather == "sunny") {
  console.log("Go out freely");
} else {
  console.log("No need for rain coat.");
}

// ------------------------Switch---------------------------------------------

let result = prompt("2 + 5 kaç yapar ?");
switch (result) {
  case 7:
    console.log("Doğru cevap - switch");
    break;
  default:
    console.log("hatalı cevap - switch");
}



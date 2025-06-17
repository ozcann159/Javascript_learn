let bosDizi = []; // 1. bos dizi oluşturun

let ornekDizi = ["Elif", 5, 3.45, "özcan", 45];

console.log("Dizinin uzunluğu", ornekDizi.length); // Dizinin uzunlugu

console.log(ornekDizi[0]); // Dizinin ilk elemanı

let lastIndex = ornekDizi.length - 1;
console.log(lastIndex); // Dizini son elemanına ulasma

let ortaIndex = Math.floor(ornekDizi.length / 2);
let ortaEleman = ornekDizi[ortaIndex];

console.log("Orta Eleman:", ortaEleman);

let mixedDataTyples = ["Ali", true, 45, 3.15, false];
console.log("Dizinin uzunluğı", mixedDataTyples.length);

let ItCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

console.log(ItCompanies);
console.log("Dizi içindeki şirketlerin sayısı:", ItCompanies.length);
console.log("Dizinin ilk elemanı:", ItCompanies[0]);

let lastIndex2 = ItCompanies.length - 1;
console.log("Son şirket:", ItCompanies[lastIndex2]);

let ortaIndex2 = Math.floor(ItCompanies.length / 2);
let ortaEleman2 = ItCompanies[ortaIndex2];
console.log("Ortadaki şirket:", ortaEleman2);

let upperCaseCompanies = ItCompanies.map(company => company.toUpperCase());
console.log(upperCaseCompanies)  // Büyük harfe çevirme


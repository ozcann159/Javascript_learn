for (let i = 0; i < 100; i++) {
  console.log(i);
}

const names = ["Tayfun", "Mehmet", "Gökhan", "Ahmet", "Oğuzhan", "Süleyman"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
console.log(names[4]);

let numbers = [5, 10, 15];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum = sum + numbers[i];
}

console.log("Toplam", sum);

let countries = ["Turkey", "Kıbrıs", "Azerbaycan"];
let newCountries = [];

for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toLocaleUpperCase("TR"));
}

console.log(countries);
console.log(newCountries);

let i = 0;
while (i < names.length) {
  console.log("İsim", names[i]);
  i++;
}

do {
  console.log("isim", names[i]);
  i++;
} while (i < names.length);

for (let name of names) {
  console.log("Ad", name);
}


const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MangoDB'
]

for(const tech of webTechs){
    console.log(tech.toUpperCase())
}

for(const tech of webTechs){
    console.log(tech[0]) // H C J R N M
}

//Her ülkeyi yeni bir diziye aktarma
const countries2 = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
const newArr = []
for (const country of countries2) {
    newArr.push(country.toUpperCase())
}

console.log(newArr)

for (let name of names) {
    if (name === 'Gökhan') {
        console.log('${name} bulundu')
        break
    }
    console.log('Ad', name)
}


for (let i = 0; i <= 5; i++){
    if (i == 3) {
        break
    }
    console.log(i)
}



for (let name of names) {
    if (name === 'Gökhan') {
        continue
    }
    console.log('Ad', name)
}

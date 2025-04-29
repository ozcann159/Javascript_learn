let numOne = 3;
let numTwo = 3;

console.log(numOne == numTwo); //true

let js = "javascript";
let p = "Pyton";

console.log(js == p); //false

let lightOn = true;
let lightOff = false;

console.log(lightOn == lightOff); //false

let nums = [1, 2, 3]; //Non-primitive Array
nums[1] = 5;
console.log(nums);

let nums1 = [1, 2, 3];
//let nums2 = [1,2,3]
let nums2 = nums1;

console.log(nums1 == nums2);

let user1 = {
  name: "Elif",
  surname: "Özcan",
};

let user2 = {
  name: "Elif",
  surname: "Özcan",
};

console.log(user1 == user2); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = userOne;

console.log(userOne == userTwo); //true

//Numbers
let age = 35;
const gravity = 9.81;
let mass = 72;
const PI = 3.14;

//
const boilingPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp);
console.log(PI); // 3.14159...

console.log(Math.round(PI)); //
console.log(Math.round(9.81)); // 10 -
console.log(Math.floor(PI)); // 3  - Taban (Aşağı yuvarlar)
console.log(Math.ceil(PI)); // 4 -  (yukarı yuvarlar)
console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, (Değerler içerisinde en düşük değeri döndürür.)
console.log(Math.max(-5, 3, 20, 4, 5, 10)); //20, (Değerler arasında en büyüğü döndürür.)

const randNum = Math.random(); //0 ve 0.999999 arasında rastgele bir sayı oluşturur.
console.log(randNum);

const num =Math.floor(Math.random() * 11) // 0 ve 10 arasında değer verir

// Mutlak değer
console.log(Math.abs(-10))  //10

// Karekök
console.log(Math.sqrt(100))  //10

// Üs Alma
console.log(Math.pow(3,2))  // 9

// Logaritma

console.log(Math.log(2))        //0.693147180...
console.log(Math.log(10))       //2.302585....

//Trigonometri
Math.sign(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

// Rastgele Numara Üretici


let randomNum = Math.random() //
let numBtnZeroAndTen = randNum * 10

console.log(numBtnZeroAndTen)  

//Strings
let name = 'Ali'
let surname = "Öz"
let space = ''

//String birleştirme

let fullName = name + '' + surname // iki stringi birleştirerek bir araya getiriyor.
console.log(fullName)  // Ali Öz

let paragraph = "hello \
test\
deneme\
"

let room = 'Elif özcan\'ın odası'
console.log(room)  //Elif özcan'ın odası


let fullName2 = '${name} Özcan'

let a = 5 
let b = 4
console.log('${a + b}') //9

let youtube = 'Prototürk'
console.log(youtube.length ) // 9

letdizi = ['p', 'r','o','t','o','t','u','r','k']
dizi[1]  //r

youtube.length -1 //k

let world = 'prototurk'
world.toUpperCase

let string = 'Javascript'
console.log(string.substr(4,6)) //Script

console.log(string.substrin(4,10))//Script






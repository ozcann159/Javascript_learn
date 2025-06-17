# 5. Gün
## Arrays (Diziler)

Şimdiye kadar değişkenlerde bir değer tutmayı öğrenmiştik. Array yani diziler sayesinde değişkende birden fazla değer tutmayı öğreneceğiz. Dizide ki her bir değer bir indexe sahiptir. Her indexte bellek adresinde bir referansa sahiptir.
Her bir değerde kendi indexleriyle erişilebilir. Dizi de indexler sıfırdan başlar ve son elemanda dizinin toplamı -1 ile alınabilir.

Dizi farklı veri türlerinden oluşan bir koleksiyondur. Bir array de , aynı elemandan iki adet barındırabilir.

## Boş Bir Dizi Nasıl Oluşturulur?
Javascriptte Array oluşturmak için farklı yollar vardır. Array tanımlarken **const** anahtar kelimesi daha çok tercih edilir.


### const ile atanan değişkene yeni bir değer atayamayız, ama let ile tanımlanan değişkene aynı isimde farklı değer atayabiliriz.



// syntax
const arr = Array()

+  Boş bir array oluşturmak için;
let names2 = []


```
const numbers = [0,3.14,9.81, 98.6,100]  // array of numbers
const fruits = ['banana','orange','mango','lemon']
const vegetables = ['Tomato','Patato','Cabbage','Onion','Carrot'],
const webTechs = ['HTML','CSS','JS','React','Redux','Node','MangDB'] 
const countries = ['Finland','Denmark','Sweden','Norway','Iceland'] 


// diziyi ve uzunluğunu yazdır

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.lenght)


console.log('Fruist:', fruits)
console.log('Number of fruits', fruits.length)

console.log('Animal Products:', animalProducts)
console.log('Number of animal products:' animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)



Numbers: [0,3.14,9.81, 98.6,100]
Number of numbers: 6
Fruits: ['banana','orange','mango','lemon']
Number of fruits: 4
Vegetables: ['Tomato','Patato','Cabbage','Onion','Carrot']
Number of vegetables : 5
Web Technologies: ['HTML','CSS','JS','React','Redux','Node','MangDB'] 
Number of web technologies: 7 
Countries = ['Finland','Denmark','Sweden','Norway','Iceland'] 
Number of countries : 5


```

+ Farklı veri türlerinde değerler olabilir.
+ Array içerisinde objede tutabiliyoruz.


```
const arr = [
    'Asabeneh',
    250,
    true,
    {country: 'Finland', city:'Helsinki'},
    {skills: ['HTML', 'CSS','JS','React','Python'] }

] // farklı veri tiplerini içeren array
console.log(arr)

```

## Split Kullanarak Bir Dizi Oluşturma

JavaScript'te split() metodu bir stringi belirttiğin ayırıcıya göre bölüp, parçaları içeren bir dizi (array) oluşturur.


```
let js = 'JavaScript'
const charsInJavaScript = js.split('')

console.log(charsInJavaScript) // ["J","a","v","s","r","i","p","t"]

let companiesString = 'Facebok ,Google, Microsfot, Apple , IBM, Oracle, Amazon'
const companies = companiesString.split(',')

console.log(companies) // "Facebok ,Google, Microsfot, Apple , IBM, Oracle, Amazon"



```

## İndex ile Array İçerisinde Elemanlara Ulaşma

Dizi indexleri sıfırdan başlar.
![Array](images/array.webp)

```
const fruits = ['banana','orange','mango','lemon']
let firstFruit = fruits[0] 

console.log(firstFruit) //banana

// Yukarı da dizinin ilk indexi 0'dır. 0 olan indexte 'banana' elemanı vardır.


secondFruit = fruits[1]
console.log(secondFruit) //orange

let lastFruit = fruits[3] // 3. elemana ulaşma
console.log(lastFruit) //lemon

let lastIndex = fruits.length - 1 //son elemana ulaşma
lastFruit = fruits[lastIndex]

console.log(lastFruit) // lemon

cons numbers = [0, 3.14, 9.81, 37, 98.6, 100] 
console.log(numbers.length) // Array uzunluğu 6'dır.
console.log(numbers)        //-> [0, 3.14, 9.81, 37, 98.6, 100] 
console.log(numbers[0])     // -> 0
console.log(numbers[5])     // -> 100

let lastIndex = numbers.length -1;
console.log(numbers[lastIndex]) // -> 100




const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MangoDB'

]  // web teknolojileri listesi

cons numbers = webTechs 
console.log(webTechs.length) // Array uzunluğu 6'dır.
console.log(numbers[0])     // -> HTML
console.log(numbers[6])     // -> MangoDB

```

## Dizi Elemanlarını Düzenleme

Dizi elemanları değiştirilebilirdir (mutable). Dizi birkez oluşturulduğunda, içeriğini tekrardan düzenleyebiliriz.



```

const numbers = [1, 2, 3, 4, 5]
numbers[0] = 10 // numbers dizisi içerisinde 0. indexteki elemanı 10 olarak değiştir.


const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Afghanistan'  // Albania ' yı Afghanistan olarak değiştirdik
let lastIndex = countries.length - 1
countries[lastIndex] = 'Korea' // Son index olan Kenya'yı Korea yaptık.

console.log(countries)

["Afghanistan", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Korea"]

```

# Diziyi Manipüle Etme Yöntemleri

Bir diziyi (array) manipüle etmek için farklı yöntemler vardır. Dizilerle çalışmak için bazı mevcut yöntemler şunlardır:

`Array`, `length`, `concat`, `indexOf`, `slice`, `splice`, `join`, `toString`, `includes`, `lastIndexOf`, `isArray`, `fill`, `push`, `pop`, `shift`, `unshift`

---

## Array Oluşturucu

### `Array`: Yeni bir dizi oluşturmak için kullanılır.

```js
const arr = Array() // boş bir dizi oluşturur
console.log(arr)

const eightEmptyValues = Array(8) // 8 boş değer oluşturur
console.log(eightEmptyValues) // [empty x 8]


# 📚 JavaScript Array (Dizi) Yöntemleri

JavaScript'te diziler, birçok yerleşik metot sayesinde güçlü ve esnek yapılar sunar. Bu dokümanda temel ve sık kullanılan dizi işlemleri açıklamalı olarak ele alınmıştır.

---



- [Dizi Oluşturma](#dizi-oluşturma)
- [fill()](#fill---diziyi-doldurmak)
- [concat()](#concat---dizileri-birleştirmek)
- [length](#length---dizi-uzunluğu)
- [indexOf()](#indexof---eleman-konumu)
- [includes()](#includes---eleman-var-mi)
- [isArray()](#isarray---dizi-mi)
- [toString()](#tostring---diziyi-stringe-çevirmek)
- [join()](#join---elemanlari-birleştirmek)
- [slice()](#slice---dizi-kesmek)
- [splice()](#splice---diziye-müdahale)
- [push()](#push---sona-eleman-ekleme)
- [pop()](#pop---son-elemani-silme)
- [shift()](#shift---ilk-elemani-silme)
- [unshift()](#unshift---başa-eleman-ekleme)
- [reverse()](#reverse---tersine-çevirmek)
- [sort()](#sort---sıralamak)
- [Array of Arrays](#array-of-arrays---çok-boyutlu-dizi)
- [Motivasyon Notu](#motivasyon-notu)

---





## 🔗 Dizileri Birleştirme (concat)

`concat()` yöntemi, iki veya daha fazla diziyi birleştirir ve yeni bir dizi döner.

### 📌 Kullanımı:

```javascript
const first = [1, 2, 3];
const second = [4, 5, 6];
const combined = first.concat(second);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```



## 📏 Dizi Uzunluğu (length)

`length` özelliği, dizideki öğe sayısını döner.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length); // 5
```

---

## 🔍 Öğenin Dizideki İndeksini Bulmak (indexOf)

`indexOf()` yöntemi, bir öğenin dizideki ilk indeksini döner. Bulamazsa `-1` döner.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.indexOf(3)); // 2
console.log(numbers.indexOf(6)); // -1
```

---

## ❓ Öğenin Dizide Olup Olmadığını Kontrol Etmek (includes)

`includes()` yöntemi, bir öğe dizide varsa `true`, yoksa `false` döner.

```javascript
const fruits = ['apple', 'banana', 'mango'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('grape'));  // false
```

---

## 🎯 Dizideki Son İndeksi Bulmak (lastIndexOf)

`lastIndexOf()` yöntemi, belirtilen öğenin dizideki son indeksini döner.

```javascript
const numbers = [1, 2, 3, 2, 1];
console.log(numbers.lastIndexOf(2)); // 3
```

---

## ✅ Bir Değişkenin Dizi Olup Olmadığını Kontrol Etmek (Array.isArray)

```javascript
const data = [1, 2, 3];
console.log(Array.isArray(data)); // true

const notArray = "hello";
console.log(Array.isArray(notArray)); // false
```

---

## 🧵 Diziyi String’e Çevirmek (toString, join)

* `toString()` tüm öğeleri virgülle ayırarak bir string’e çevirir.
* `join()` farklı ayraçlarla string'e çevirmeye olanak tanır.

```javascript
const names = ['Alice', 'Bob', 'Charlie'];

console.log(names.toString());       // "Alice,Bob,Charlie"
console.log(names.join());           // "Alice,Bob,Charlie"
console.log(names.join(' - '));      // "Alice - Bob - Charlie"
```

---

## ✂️ Dizi Elemanlarını Kesmek (slice)

`slice(start, end)` yöntemi, diziden belirli aralıkta elemanları kopyalar. `end` değeri dahil edilmez.

```javascript
const numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice(1, 4)); // [2, 3, 4]
```

---

## 🔧 Dizi Elemanlarını Değiştirmek (splice)

`splice(start, deleteCount, item1, item2, ...)` diziden eleman silmek ve/veya eklemek için kullanılır.

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.splice(2, 1, 99); // 2. index’teki öğeyi silip 99'u ekler
console.log(numbers); // [1, 2, 99, 4, 5]
```

---

## ➕ Diziye Eleman Ekleme (push, unshift)

* `push()` sona eleman ekler.
* `unshift()` başa eleman ekler.

```javascript
let arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]

arr.unshift(0);
console.log(arr); // [0, 1, 2, 3, 4]
```

---

## ➖ Dizi Elemanı Silme (pop, shift)

* `pop()` sondan eleman siler.
* `shift()` baştan eleman siler.

```javascript
let arr = [0, 1, 2, 3, 4];
arr.pop();
console.log(arr); // [0, 1, 2, 3]

arr.shift();
console.log(arr); // [1, 2, 3]
```

---

## 🔁 Diziyi Ters Çevirmek (reverse)

```javascript
const numbers = [1, 2, 3];
numbers.reverse();
console.log(numbers); // [3, 2, 1]
```

---

## 🧮 Diziyi Sıralamak (sort)

```javascript
const webTechs = ['HTML', 'CSS', 'JavaScript', 'React'];
webTechs.sort();
console.log(webTechs); // ['CSS', 'HTML', 'JavaScript', 'React']
```

---

## 📚 Dizi İçinde Dizi (Array of Arrays)

```javascript
const frontEnd = ['HTML', 'CSS', 'JS'];
const backEnd = ['Node', 'Express'];

const fullStack = [frontEnd, backEnd];

console.log(fullStack);      // [['HTML', 'CSS', 'JS'], ['Node', 'Express']]
console.log(fullStack[0]);   // ['HTML', 'CSS', 'JS']
console.log(fullStack[1]);   // ['Node', 'Express']
```

---


## 💻 Egzersizler

### Egzersiz: Seviye 1


1- boş bir dizi yaratın;

2-Eleman sayısı 5'ten fazla olan bir dizi yaratın.

3-Yarattığınız dizinin uzunluğunu bulun ( length ).

4- Dizinizdeki ilk elemanı, ortadaki elemanı ve sondaki elemanı bulun.

5- mixedDataTypes adında bir dizi yaratın,dizinin içine farklı veri tiplerinde elemanlar koyun ve bu dizinin uzunluğunu bulun. Dizinin uzunluğu 5'ten büyük olmalıdır.

6- ItCompanies adlı bir dizi değişkeni oluşturun ve Facebook, Google, Microsoft, Apple, IBM, Oracle ve Amazon'a başlangıç değerleri atayın.

7 -console.log() kullanarak dizinizi yazdırın.

8- Dizinin içindeki şirketlerin sayısın yazdırın.

9 -Dizinin içindeki ilk, ortadaki ve son elemanı yazdırın.

10- Dizideki her şirketi yazdırın.

11- Her bir şirketin adını tek tek büyük harfleri ile değişterin ( ör: facebook -> FACEBOOK) ve her birini yazdırın.

12- Diziyi bir cümle gibi yazdırın: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

13- itCompanies dizisinde belirli bir şirketin olup olmadığını kontrol edin. Varsa şirketi geri döndürün, aksi takdirde not found geri döndürün.

14 - Birden fazla 'o' harfi içeren şirketleri filter metodunu kullanmadan filtreleyin.

15- sort() metodunu kullanarak diziyi sıralayın.

16- reverse() metodunu kullanarak diziyi tersine çevirin.

17 -Diziden ilk 3 şirketi dilimleyin ( Slice edin ).

18- Diziden son 3 şirketi dilimleyin ( Slice edin ).

19- Ortadaki IT şirketini ya da şirketlerini diziden dilimleyin ( Slice edin ).

20- İlk IT şirketini diziden kaldırın.

21- Ortadaki IT şirketini ya da şirketlerini diziden kaldırın.

22- Sondaki IT şirketini diziden kaldırın.

23- Bütün IT şirketlerini kaldırın.
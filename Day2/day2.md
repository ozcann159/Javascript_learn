Metnin çok güzel ilerliyor Elif! Anlattıkların oldukça net, ama bazı ufak yerlerde düzeltme ve iyileştirme önerilerim var. Aşağıda, **güncellenmiş ve düzenlenmiş** halini senin için hazırladım:

---

## 2. Gün – Veri Türleri

Bir önceki günde veri türlerinden bahsetmiştik. Veri türleri, verinin özelliklerini ve onunla yapılabilecek işlemleri belirler. JavaScript'te veri türleri ikiye ayrılır:

1. **Primitive Data Types (İlkel Veri Tipleri)**
2. **Non-Primitive Data Types (Referans Tipleri / Nesne Tabanlı)**

---

## 🧱 Primitive (İlkel) Veri Tipleri

- **Number**: Tam sayılar (integers) ve ondalık sayılar (floats)
- **String**: Tırnak içerisindeki karakter dizileri
- **Boolean**: `true` veya `false`
- **Null**: Bilinçli olarak boş bırakılmış değer
- **Undefined**: Tanımlanmış ama değeri atanmamış değişken
- **Symbol** (daha gelişmiş konular arasında yer alır)

**Özellik:**  
İlkel veri türleri *değiştirilemez* (immutable)'dır. Bu, tanımlandıktan sonra değerlerinin doğrudan değiştirilemeyeceği anlamına gelir.

```js
let word = "JavaScript";
word[0] = "Y"; // Bu işlem geçerli değildir, word değişmez.
```

**Karşılaştırma:**
İlkel veri türleri **değerlerine göre**, nesne-tabanlı veri türleri ise **referanslarına göre** karşılaştırılır.

```js
let numOne = 3;
let numTwo = 3;
console.log(numOne == numTwo); // true

let js = "JavaScript";
let py = "Python";
console.log(js == py); // false
```

---

## 🧳 Non-Primitive (Nesne Tabanlı / Referans) Veri Tipleri

- **Object**
- **Array**
- **Function**

Bu veri türleri *değiştirilebilir* (mutable)'dir.

```js
let nums = [1, 2, 3];
nums[1] = 5;
console.log(nums); // [1, 5, 3]
```

**Referans Karşılaştırması:**

```js
let nums1 = [1, 2, 3];
let nums2 = [1, 2, 3];
console.log(nums1 == nums2); // false – çünkü farklı referanslar

let nums3 = nums1;
console.log(nums1 == nums3); // true – aynı referans
```

```js
let user1 = { name: "Elif", surname: "Özcan" };
let user2 = { name: "Elif", surname: "Özcan" };
console.log(user1 == user2); // false
```

---

## 🔢 Numbers

Tam sayılar ve ondalık sayılar için `Number` veri tipi kullanılır.

```js
let age = 35;
const gravity = 9.81;
const boilingPoint = 100;
const bodyTemp = 37;

console.log(age, gravity, boilingPoint, bodyTemp);
```

### Math Objesi

```js
console.log(Math.PI);                // 3.14159...
console.log(Math.round(9.81));       // 10
console.log(Math.floor(3.7));        // 3
console.log(Math.ceil(3.1));         // 4
console.log(Math.min(-5, 3, 20));    // -5
console.log(Math.max(-5, 3, 20));    // 20
console.log(Math.abs(-10));          // 10
console.log(Math.sqrt(100));         // 10
console.log(Math.pow(3, 2));         // 9
console.log(Math.log(10));           // 2.302...
console.log(Math.sin(0));            // 0
console.log(Math.cos(60));           // 0.96...

let randomNum = Math.floor(Math.random() * 11); // 0 - 10 arası sayı
console.log(randomNum);
```

---

## ✍️ Strings

**String:** Metinleri tutmak için kullanılır. `"..."`, `'...'` veya \`...\` şeklinde tanımlanabilir.

```js
let firstName = "Elif";
let lastName = "Özcan";
let fullName = firstName + " " + lastName;
```

### Uzun Stringler

```js
let paragraph = "Bu çok uzun bir yazıdır ve \
devamı bir alt satırdadır.";
```

### Kaçış Karakterleri

| Kod  | Anlamı          |
|------|------------------|
| \n   | Yeni satır       |
| \t   | Sekme (tab)      |
| \\   | Ters eğik çizgi  |
| \'   | Tek tırnak       |
| \"   | Çift tırnak      |

---

## 🔁 Template Literals

```js
let name = "Elif";
let surname = "Özcan";
let fullName = `${name} ${surname}`;
console.log(fullName); // Elif Özcan
```

```js
let a = 5;
let b = 4;
console.log(`${a + b}`); // 9
```

---

## ✨ String Metotları

| Metot             | Açıklama |
|-------------------|---------|
| `.length`         | Karakter uzunluğu |
| `.toUpperCase()`  | Büyük harf |
| `.toLowerCase()`  | Küçük harf |
| `.substr(x, y)`   | Belirli aralıktaki karakterleri alır |
| `.split()`        | Stringi diziye çevirir |
| `.trim()`         | Baş ve sondaki boşlukları siler |
| `.includes()`     | String içinde bir ifade var mı? |
| `.replace()`      | String içinde değişiklik yapar |
| `.charAt(i)`      | Belirtilen indeksteki karakteri verir |
| `.indexOf()`      | Aranan değerin ilk görüldüğü index |
| `.lastIndexOf()`  | Aranan değerin son görüldüğü index |

**Örnekler:**

```js
"Elma,Armut".split(",");           // ["Elma", "Armut"]
"  Elif  ".trim();                 // "Elif"
"Merhaba dünya".includes("dünya"); // true
"Bugün hava kötü".replace("kötü", "güzel"); // "Bugün hava güzel"
"Elif".charAt(1);                  // "l"
"JavaScript".indexOf("a");         // 1
```

## Changing Data Type (Veri Türünü Değiştirme)

JavaScript'te veri türleri arasında dönüşüm yapmamız gereken durumlar olabilir. Bu işleme **type conversion (veri türü değiştirme)** denir ve genellikle iki şekilde yapılır:

- **Otomatik (implicit) dönüşüm:** JavaScript'in kendiliğinden yaptığı dönüşümler.
- **Manuel (explicit) dönüşüm:** Geliştiricinin açıkça belirttiği dönüşümler.

### ✅ String’e Dönüştürme
```js
let num = 123;
let strNum = String(num);      // "123"

let bool = true;
let strBool = bool.toString(); // "true"

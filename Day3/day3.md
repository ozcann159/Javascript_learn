# 📔 1. Gün

## Booleans

Boolean veri türü 2 değeri temsil eder. True veya false. Boolean değeri true yada false olabilir. Bu veri türleri karşılaştırmalı veri türlerini öğrendiğimizde daha detaylı olacaktır.

**Boolean Örnekler**

```
let isikAcikMi = true
let yagmurYagiyorMu = false
let acMi = false
let evliMi = true
let truValue = 4 > 3  // true
let falseValue = 4 < 3 // false
```

**Truthy (Doğru Sayılan) Değerler**

- ** Tüm sayılar (pozitif ve neagatif) ancak 0 hariç **
- ** Boş string hariç geri kalan tüm stringler **

**Falsy (Yanlış Sayılan) Değerler**

- ** 0 **
- ** 0n **
- ** null **
- ** undefined **
- ** NaN **
- ** ", "", ``, boş empty stringleri **

Bir sonraki bölümde koşullar ile neler yapabileceğimize karar vereceğiz. Bunları yaparkende true false değerlerine göre kontrol edeceğiz.

### Undefined

Eğer bir değişken oluşturur ve değer atamazsak bu değer undefined ( tanımsız) olacaktır. Buna ek olarak fonksiyonda bir değer döndürmüyorsa undefined'dır.

```
let firstName
console.log(firstName)  // tanımlanmamış
```

### Null

```
let bos = null
console.log(bos) // -> null, değer yok demektir.
```

## Operatörler

### Atama Operatörleri

Eşittir işareti Javascriptte atama operatörüdür. Bir değişkene değer atamak için kullanılır.

let firstName = 'Elif'
let ülke = 'Türkiye'

![Atama Operatörleri](images/atama1.webp)

### Aritmatik Operatörleri
Kısaca matematik operatörleride diyebiliriz.
 - ** Toplama (+) **
 - ** Çıkarma (-) **
 - ** Çarpma (*) **
 - ** Bölme (/) **
 - ** Mod Alma (%) a % b
 - ** Üs Alma (**) a ** b

 Bunlara örnek diğer günlerde görmüştük tekrar etmek faydalı olacaktır.

 ### Karşılaştırma Operatörleri
![Karşılaştırma Operatörleri](images/karsilastirma.webp)

**Karşılaştırma Operatörleri Örnekler**
```
console.log(3 > 2)    // true, çünkü 3 sayısı 2’den büyüktür.
console.log(3 >= 2)   // true, 3 büyüktür veya eşittir 2’ye (burada büyüktür).
console.log(3 < 2)    // false, 3 sayısı 2’den küçük değildir.
console.log(2 <= 3)   // true, 2 küçüktür veya eşittir 3’e (burada küçüktür).
console.log(3 == 2)   // false, 3 eşit değildir 2’ye (== ile değer karşılaştırılır).
console.log(3 !== '3') // true, 3 sayısı ve '3' stringi hem değer hem tür olarak farklıdır (=== ile kontrol edilen tür farkı).
console.log(3 !== 3)  // false, 3 sayısı kendine eşittir.
console.log(0 == false) // true, == operatörü tür dönüşümü yapar, 0 ve false eşit kabul edilir.
console.log(0 === false) // false, === operatörü türlere bakar, biri sayı diğeri boolean olduğu için eşit değil.
console.log(0 == '') // true, boş string 0’a dönüşür, == ile eşit kabul edilir.
console.log(0 === '') // false, türler farklı olduğu için eşit değil.
console.log(1 == true) // true, == ile tür dönüşümü yapıldığında 1 ve true eşit kabul edilir.
console.log(1 === true) // false, türler farklı olduğu için eşit değil.
console.log(undefined == null) // true, == ile karşılaştırıldığında undefined ve null eşit kabul edilir.
console.log(undefined === null) // false, === tür kontrolü yaptığı için eşit değil.
console.log(NaN == NaN) // false, NaN kendine bile eşit değildir.
console.log(NaN === NaN) // false, aynı şekilde === ile de eşit değildir.
console.log(typeof NaN) // "number", JavaScript’te NaN tipi sayıdır ancak özel bir “not a number” değeri.

console.log('mango'.length == 'avakado'.length) // false
console.log('mango'.length != 'avakado'.length) // true
console.log('mango'.length < 'avakado'.length) // true
console.log('milk'.length == 'meat'.length) // true
console.log('milk'.length != 'meat'.length) // false
console.log('tomato'.length == 'potato'.length) // true
console.log('python'.length > 'dragon'.length) // false
```

Eğer == operatöründe true değilse === de hiç denk değildir. Çünkü  === veri türünüde karşılaştırırken == sadece değere bakıyor.

 ### Mantıksal Operatörler

 &&(ampersand), ||(pipe) ve !(değilse) operatörleri kullanılarak yapılır.
 && ile eğer iki işlemde true ise bu işlem başarılı şekilde true döndürür.

``` && ampersand operatör örnekler
const check = 4 > 3 && 10 > 5 // true && true -> true
const check = 4 > 3 && 10 < 5 // true && false -> false
const check = 4 < 3 && 10 < 5 //false && false -> false
```
```
// || pipe operatör

const check = 4 > 3 || 10 > 5 // true || true -> true
const check = 4 > 3 || 10 < 5 // true || false -> true
const check = 4 < 3 || 10 < 5 // false || false ->

//! Negation örnek

let check = 4 > 3   // true
let check = !(4 > 3)   // false
let isLightOn = true
let isLigthOff = !isLigthOn // false
let isMarried = !false // true
```

 ### Arttırma Operatörleri
Değişkenlerin değerini arttırmak için kullanabiliriz.

** Önceden Arttırmalı **

```
let count = 0
console.log(++count)  // 1
console.log(count)    // 1
```

** Sonradan Arttırmalı **
Yapılacak işlemden sonra attırma gerçekleşir.


```
let count = 0
console.log(count++)   // 0
console.log(count )   // 1
```
 ### Azaltma Operatörleri

Arttırma için geçerli olan herşey azaltma operatörü içinde geçerlidir.

** Önceden Arttırmalı **

```
let count = 0
console.log(--count)  // 1
console.log(count)    // 1
```

** Sonradan Arttırmalı **
Yapılacak işlemden sonra attırma gerçekleşir.


```
let count = 0
console.log(count--)   // 0
console.log(count )   // 1
```

 ### Ternary Operatörleri
Ternary operatör bir koşul yazmamızı sağlar. Tek satırlık koşullar olarak düşünebiliriz.

```

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('nNo need for a rain coat.')
  isRaining = false

  isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

  You need a rain coat.
  No need for a rain coat.
```

  ** Operatör Önceliği **
Bu bağlantıdan operatör önceliği hakkında okumanızı tavsiye ederim. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_precedence

Elbette Elif! Aşağıda verdiğin içerikleri GitHub README dosyanda kullanabileceğin şekilde **Markdown formatında** düzenledim. Başlık yapıları, kod blokları ve açıklamalarla sadeleştirilmiş bir versiyon:

---

````md
## 🪟 Window Metotları

JavaScript'te `window` nesnesi, tarayıcı penceresini temsil eder ve bazı yerleşik metotlar içerir. Aşağıda sıkça kullanılan üç `window` metodunu inceleyelim:

---

### 🔔 alert()

`alert()` metodu, bir mesaj kutusu görüntüler. Kullanıcı yalnızca **Tamam** butonuna tıklayarak devam edebilir.

```js
alert('Welcome to 30DaysOfJavaScript')
````

> ⚠️ Not: Bu yöntem genellikle test amaçlı kullanılır. Sürekli kullanmak kullanıcı deneyimini olumsuz etkileyebilir.

---

### 💬 prompt()

`prompt()` metodu, kullanıcıdan veri almak için bir metin kutusu gösterir. İki argüman alır: birincisi açıklama metni, ikincisi ise (isteğe bağlı) varsayılan metin.

```js
let number = prompt('Enter number', 'number goes here')
console.log(number)
```

Kullanıcının girdiği değer, bir değişkende saklanabilir.

---

### ✅ confirm()

`confirm()` metodu, kullanıcıya **Tamam** veya **İptal** seçeneklerini sunan bir kutu gösterir. Genellikle bir işlemi gerçekleştirmek için izin istemek amacıyla kullanılır.

```js
const agree = confirm('Are you sure you like to delete?')
console.log(agree) // true ya da false döner
```

> Eğer kullanıcı "Tamam"a tıklarsa `true`, "İptal"e tıklarsa `false` döner.

---

📝 **Not:** Bu metotlar yalnızca `window` nesnesine ait olanlar değildir. Daha sonra `window` nesnesine daha derinlemesine değineceğiz.

```


## 📆 JavaScript Date Objesi

Zamanla çalışmak, yazılım geliştirme sürecinde oldukça yaygındır. Örneğin bir tarih göstermek, zamana göre işlem yapmak ya da log kaydı tutmak gibi birçok durumda JavaScript'in `Date` objesi kullanılır.

---

### 🛠️ Bir Date Objesi Oluşturmak

```js
const now = new Date()
console.log(now) 
// Örnek çıktı: Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
````

---

### 🧩 Tarih ve Saat Bilgileri Almak

| Metot               | Açıklama                                      | Örnek Çıktı      |
| ------------------- | --------------------------------------------- | ---------------- |
| `getFullYear()`     | Yılı döndürür                                 | `2025`           |
| `getMonth()`        | Ayı döndürür (0-11 arası)                     | `4` (Mayıs için) |
| `getDate()`         | Gün bilgisini döndürür (1-31 arası)           | `27`             |
| `getDay()`          | Haftanın günü (0 = Pazar, 6 = Cumartesi)      | `2`              |
| `getHours()`        | Saat bilgisini döndürür (0-23 arası)          | `14`             |
| `getMinutes()`      | Dakikayı döndürür (0-59 arası)                | `30`             |
| `getSeconds()`      | Saniyeyi döndürür (0-59 arası)                | `12`             |
| `getMilliseconds()` | Milisaniye bilgisini döndürür (0-999 arası)   | `450`            |
| `getTime()`         | Unix zamanını (milisaniye cinsinden) döndürür | `1680000000000`  |

---

### 🕐 Alternatif Unix Zamanı Alma Yöntemi

```js
const allSeconds = Date.now()
console.log(allSeconds)

const timeInSeconds = new Date().getTime()
console.log(allSeconds === timeInSeconds) // true olabilir
```

---

### 📅 İnsan Tarafından Okunabilir Tarih Formatı

```js
const now = new Date()

const year = now.getFullYear()
const month = now.getMonth() + 1 // Aylar 0'dan başlar, bu yüzden +1
const date = now.getDate()
const hours = now.getHours()
const minutes = now.getMinutes()

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)
// Örnek çıktı: 27/5/2025 14:30
```

---

🌕 **Sınırsız enerjinle 3. gün zorluklarını geride bıraktık!**





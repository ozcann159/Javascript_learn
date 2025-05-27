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


# 💻 3. Gün: Egzersizler

## Egzersiz Seviye 1


1. firstName, lastName, country, city, age, isMarried, year değişkenlerini oluşturun ve bunlara değer atayın. Farklı veri türlerini kontrol etmek için typeof operatörünü kullanın.
2. '10' türünün 10'a eşit olup olmadığını kontrol edin
3. parseInt('9.8') 10'a eşit olup olmadığını kontrol edin
4. Boolean değeri, doğru veya yanlıştır.
   1. Doğruluk değeri sağlayan üç JavaScript ifadesi yazın.
   2. Yanlış değer sağlayan üç JavaScript ifadesi yazın.

5. console.log() kullanmadan önce aşağıdaki karşılaştırma ifadesinin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
   1. 4 > 3
   2. 4 >= 3
   3. 4 < 3
   4. 4 <= 3
   5. 4 == 4
   6. 4 === 4
   7. 4 != 4
   8. 4 !== 4
   9. 4 != '4'
   10. 4 == '4'
   11. 4 === '4'
   12. Python ve jargonun uzunluğunu bulun ve yanlış bir karşılaştırma ifadesi yapın.

6. console.log() kullanmadan önce aşağıdaki ifadelerin sonucunu bulun. Sonuca karar verdikten sonra console.log() kullanarak onaylayın.
   1. 4 > 3 && 10 < 12
   2. 4 > 3 && 10 > 12
   3. 4 > 3 || 10 < 12
   4. 4 > 3 || 10 > 12
   5. !(4 > 3)
   6. !(4 < 3)
   7. !(false)
   8. !(4 > 3 && 10 < 12)
   9. !(4 > 3 && 10 > 12)
   10. !(4 === '4')
   11. Hem dragon hem de python'da 'on' yoktur.

7. Aşağıdaki etkinlikleri yapmak için Date nesnesini kullanın.
   1. Bugün yıl nedir?
   2. Bugünün ayı rakam olarak nedir?
   3. Bugünün tarihi nedir?
   4. Bugün sayı olarak gün nedir?
   5. Şimdi saat kaç?
   6. Dakika kaç şimdi?
   7. 1 Ocak 1970'den bugüne kadar geçen saniye sayısını bulun.

   ### Egzersiz: Seviye 2

1. Kullanıcıdan üçgenin tabanını ve yüksekliğini girmesini ve bir üçgenin alanını hesaplamasını isteyen bir komut dosyası yazın (alan = 0,5 x b x h).

   ```sh
   Enter base: 20
   Enter height: 10
   The area of the triangle is 100
   ```

1. Kullanıcıdan üçgenin a kenarını, b kenarını ve c kenarını girmesini ve üçgenin çevresini hesaplamasını isteyen bir komut dosyası yazın (çevre = a + b + c)

   ```sh
   Enter side a: 5
   Enter side b: 4
   Enter side c: 3
   The perimeter of the triangle is 12
   ```

1. Komut istemini kullanarak uzunluk ve genişliği alın ve bir dikdörtgenin alanını hesaplayın (alan = uzunluk x genişlik ve dikdörtgenin çevresi (çevre = 2 x (uzunluk + genişlik))
1. Komut istemini kullanarak yarıçapı alın ve bir dairenin alanını (alan = pi x r x r) ve bir dairenin çevresini (c = 2 x pi x r) hesaplayın, burada pi = 3.14.
1. y = 2x -2'nin eğimini, x kesme noktasını ve y kesme noktasını hesaplayın
1. Eğim m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). (2, 2) noktası ile (6,10) noktası arasındaki eğimi bulun
1. Yukarıdaki iki sorunun eğimini karşılaştırın.
1. y'nin değerini hesaplayın (y = x<sup>2</sup> + 6x + 9). Farklı x değerleri kullanmayı deneyin ve y'nin hangi x değerinin 0 olduğunu bulun.
1. Kullanıcıdan saat ve saat başına oran girmesini isteyen bir komut dosyası yazın. Kişinin ücretini hesapla?

    ```sh
    Enter hours: 40
    Enter rate per hour: 28
    Your weekly earning is 1120
    ```

1. Adınızın uzunluğu 7'den büyükse, adınız uzun, yoksa adınızın kısa olduğunu söyleyin.
1. Adınızın uzunluğunu ve soyadınızın uzunluğunu karşılaştırın ve bu çıktıyı almalısınız.

    ```js
    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    ```

    ```sh
    Your first name, Asabeneh is longer than your family name, Yetayeh
    ```

1. İki değişken _myAge_ ve _yourAge_ bildirin ve bunlara başlangıç değerleri ile myAge ve yourAge atayın.

   ```js
   let myAge = 250
   let yourAge = 25
   ```

   ```sh
   I am 225 years older than you.
   ```

1. İstemi kullanarak, kullanıcının doğduğu yılı alır ve kullanıcı 18 veya daha büyükse, kullanıcıya belirli bir süre beklemesini söylemediği takdirde, kullanıcının araba kullanmasına izin verir.
    ```sh

    Enter birth year: 1995
    You are 25. You are old enough to drive

    Enter birth year: 2005
    You are 15. You will be allowed to drive after 3 years.
    ```

1. Kullanıcıdan yıl sayısını girmesini isteyen bir komut dosyası yazın. Bir kişinin yaşayabileceği saniye sayısını hesaplayın. Birinin sadece yüz yıl yaşadığını varsayalım

   ```sh
   Enter number of years you live: 100
   You lived 3153600000 seconds.
   ```

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun
   1. YYYY-MM-DD HH:mm
   2. DD-MM-YYYY HH:mm
   3. DD/MM/YYYY HH:mm

### Egzersiz: Seviye 3

1. Tarih saat nesnesini kullanarak insan tarafından okunabilir bir saat biçimi oluşturun. Saat ve dakika her zaman iki basamaklı olmalıdır (7 saat 07 ve 5 dakika 05 olmalıdır)
   1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05



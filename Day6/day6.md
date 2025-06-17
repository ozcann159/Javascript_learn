# 💻 **6. Gün: Döngüler (Loops)**

## 🔁 Döngülere Giriş
Programlamada tekrarlayan işlemleri döngüler (loops) ile yaparız. Farklı türde döngüler vardır:

- `for`
- `while`
- `do while`
- `for...of`

---

### 🔹 for Döngüsü
```js
for (let i = 0; i <= 5; i++) {
    console.log(i);
}
```

```js
const names = ["Tayfun", "Mehmet", "Gökhan", "Ahmet", "Oğuzhan"];
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}
```

Toplama örneği:
```js
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log(sum); // 15
```

Büyük harfe çevirme:
```js
let countries = ["Turkey", "Kıbrıs", "Azerbaycan"];
let newCountries = [];
for (let i = 0; i < countries.length; i++) {
  newCountries.push(countries[i].toLocaleUpperCase("TR"));
}
```

---

### 🔹 while Döngüsü
```js
let i = 0;
while(i <= 5){
    console.log(i);
    i++;
}
```

---

### 🔹 do while Döngüsü
```js
let i = 0;
do {
    console.log(i);
    i++;
} while(i <= 5);
```

---

### 🔹 for...of Döngüsü
```js
const numbers = [1, 2, 3, 4, 5];
for (const num of numbers) {
    console.log(num);
}
```

---

### 🔹 break ve continue
```js
for (let i = 0; i <= 5; i++) {
    if (i === 3) break;
    console.log(i);
}
```

```js
for (let name of names) {
    if (name === 'Gökhan') continue;
    console.log(name);
}
```

---

## 🧪 Alıştırmalar

### 🔸 1. Seviye
- `while` ve `do while` ile 0-10 ve 10-0 arası döngüler
- `for` ile 0'dan n'e kadar
- `console.log()` ile aşağıdaki çıktıyı oluştur:
```
#
##
###
####
#####
######
#######
```
- Çarpım tablosu:
```
0 x 0 = 0
1 x 1 = 1
...
10 x 10 = 100
```
- Üs tablosu:
```
 i    i^2   i^3
 0     0     0
 1     1     1
 ...
10   100  1000
```
- 0-100 çift sayılar
- 0-100 tek sayılar
- 0-100 asal sayılar
- 0-100 toplamı (5050)
- Tek ve çiftlerin toplamı

---

### 🔸 2. Seviye
- Rastgele ID üreten fonksiyon
- Rastgele hex renk: `#ee33df`
- Rastgele RGB: `rgb(240,180,80)`
- Ülkeler array'i:
```js
const countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"];
```
- Rastgele yeni bir dizi oluştur
- Harf uzunluklarını içeren dizi
- Üçlü yapı:
```js
['Albania', 'ALB', 7],
['Bolivia', 'BOL', 7], ...
```
- "land" içeren ülkeler
- "ia" içeren ülkeler
- En uzun isimli ülke
- 5 karakterli ülkeler

---

### 🔸 3. Seviye
- `countries` dizisini kopyala (mutation'dan kaçın)
- Alfabetik sırala → `sortedCountries`
- `webTechs` ve `mernStack` dizilerini sırala
- `"land"` ile biten ülkeleri listele
- En uzun ülke adını bul
- 4 karakterli ülkeleri yazdır
- İki veya daha fazla kelimeli ülkeleri ayır
- Ters çevir, büyük harfe çevir

---

🎉 **Tebrikler! 6. günü başarıyla tamamladın!**

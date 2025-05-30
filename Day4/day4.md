# 4. Gün
## Koşullar
Koşullu ifadeler farklı koşullara bağlı olarak kararlar vermek için kullanılır. Varsayılan olarak JS'de ifadeler yukarıdan aşağıda yürütülür.
Bu bölümde 
- if
- if else
- if else if eles
- switch
- ternary operator
## If
JS ve diğer programlama dillerinde if anahtar kelimesini bir ifadenin true olup olmadığına göre bir bloğu yönetmek için kullanılır.
Bir if koşulu oluşturmak için bir if anahtar kelimesine ihtiyacımız vardır. Şartımızı () parantezler içerisine yazmamız gerekir.

```
if(şart-condition){
    //
}
```


## Örnek
```

let sayi = 3
if(num > 0){
    console.log('${sayi} pozitif bir sayıdır.)
}
// 3 pozitif bir sayıdır.
```


Örnektede gördüğümüz üzere eğer 3 0'dan büyüktür yani pozitif bir sayıdır. Yani koşulumuz true olduğu için içerisindeki kod bloğu çalıştır.
Ama eğer koşulumuz false olsaydı sonuç göremeyecektik. Eğer görmek istiyorsak bir başka kod bloğu eklememiz gerekiyor buda else olacaktır.

## If Else

Eğer şartımız true ise ilk bloğumuz çalışır. False ise else bloğumuz çalışacaktır.
```
if(şartımız){
    //true ise çalışacak blok
}else{
    //false durumunda çalışacak blok
}
```

```
let num = 3
if(num > 0){
    console.log('${num} pozitif bir sayıdır')
}else{
    console.log('${num} pozitif bir sayı değildir.')
}
// 3 pozitif bir sayıdır.

```
Peki 2'den daha fazla koşula ihtiyaç duyarsak ne yapacaktık ? Ozaman else if kullanacağız.

## If Else if Else
Birden fazla koşula göre kararlar vermemizi sağlar. 

```
if(Koşul){
    
}else if(Koşul){

}else if(Koşul){

}else{

}

```
Yukarıda 3 koşuldan hiç biri çalışmaz ise else bloğu çalışacaktır. Koşul hangi blokta doğru ise orası çalışacaktır.Birden fazla doğru koşul olsa bile yukarıdan aşağı derlendiği için ilk doğru kod bloğu çalışacaktır.

```
let a = 0
if (a > 0) {
    console.log('${a} pozitif bir sayıdır')
} else if (a < 0) {
    console.log('${a} negatif bir sayıdır')
} else if(a == 0){
    console.log('${a} sıfırdır')
} else {
    console.log('${a} bir sayı değildir.')
}
```

```
let weather = 'sunny'
if (weather == 'rainy') {
    console.log('You need a rain coat')
} else if (weather == 'cloudy') {
    console.log('It might be cold, you need a jacket')
} else if(weather == 'sunny'){
    console.log('Go out freely')
} else {
    console.log('No need for rain coat.')
}
```

## Switch
switch anahtar kelimesi ile başlar. Parantezler içinde durumun değeri ve { } parantezler içinde durum ne ise o kodu çalıştıracaktır.
break anahtar kelimesi, koşulun hangisi yerine geldikten sonra diğer koşullara baktırmamak için break anahtar kelimesini kullanmamız gerekir.
default bloğu ise, koşullardan hiçbiri doğru olmaz ise ozaman çalışır. Yani else gibi düşünebiliriz.

```
switch(caseValue){
    case 1:
    //code
    break
    case2:
    //code
    break
    case 3:
    //code
    default:
    //code
}
```
```
let result = prompt("2 + 5 kaç yapar ?");
switch (result) {
  case 7:
    console.log("Doğru cevap - switch");
    break;
  default:
    console.log("hatalı cevap - switch");
}
```

## Ternary Operator
Koşulları yazmanın bir diğer alternatifide önceden de bahsettiğimiz ternary operatördür.

```
let isRaining = true
isRaining
    ? console.log('Bir yağmurluğa ihtiyacın var')
    : console.log('Bir yağmurluğa ihtiyacın yok')

## 💻 Egzersizler

### Egzersiz: Seviye 1

1. prompt(“Enter your age:”) ile kullanıcı girdisi alın. Kullanıcı 18 veya daha büyükse, geri bildirimde bulunun:'Sürecek kadar yaşlısınız', ancak 18 değilse, 18 yaşına girmesi gereken yıl sayısını beklemeye başlayarak başka bir geri bildirim verin.

   ```sh
   Enter your age: 30
   You are old enough to drive.

   Enter your age:15
   You are left with 3 years to drive.
   ```

1. if… else kullanarak myAge ve yourAge değerlerini karşılaştırın. Karşılaştırmaya dayanarak ve sonucu kimin daha yaşlı olduğunu (ben veya siz) belirterek konsola kaydedin. Yaşı girdi olarak almak için komut prompt(“Enter your age:”) kullanın.

   ```sh
   Enter your age: 30
   You are 5 years older than me.
   ```

1. a, b'den büyükse, 'a b'den büyüktür', aksi takdirde 'a, b'den küçüktür' döndürür. şekilde uygulamaya çalışın

    - using if else
    - ternary operator.

    ```js
      let a = 4
      let b = 3
    ```

    ```sh
      4 is greater than 3
    ```

1. Çift sayılar 2'ye tam bölünür kalan sıfırdır. Bir sayının çift olup olmadığını veya JavaScript kullanıp kullanmadığını nasıl kontrol edersiniz?

    ```sh
    Enter a number: 2
    2 is an even number

    Enter a number: 9
    9 is is an odd number.
    ```

### Egzersiz: Seviye 2

1. Öğrencilere puanlarına göre not verebilecek bir kod yazın:
   - 80-100, A
   - 70-89, B
   - 60-69, C
   - 50-59, D
   - 0-49, F
1. Mevsimin Sonbahar, Kış, İlkbahar veya Yaz olup olmadığını kontrol edin.
  Değerler :
    - Eylül, Ekim veya Kasım, mevsim sonbahardır.
    - Aralık, Ocak veya Şubat, mevsim kıştır.
    - Mart, Nisan veya Mayıs mevsimi bahardır
    - Haziran, Temmuz veya Ağustos, mevsim yazdır
    
1. Bir günün hafta sonu mu yoksa iş günü mü olduğunu kontrol edin. Komut dosyanız girdi olarak gün alacaktır.

```sh
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
  ```

### Egzersiz: Seviye 3

1. Bir aydaki gün sayısını söyleyen bir program yazın.

  ```sh
    Enter a month: January
    January has 31 days.

    Enter a month: JANUARY
    January has 31 day

    Enter a month: February
    February has 28 days.

    Enter a month: FEbruary
    February has 28 days.
  ```

1. Bir aydaki gün sayısını söyleyen bir program yazın, şimdi artık yılı düşünün.


🎉 TEBRİKLER ! 🎉
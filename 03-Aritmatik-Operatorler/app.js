//! Aritmatik Operatörler
//? toplama

let sayi1 =10
let sayi2 = 20
console.log(sayi1 +sayi2) // 30

//* String içerisinde toplama işlemi
let metin1 = "ali"
let metin2 = "coban"
console.log(metin1 + metin2) //alicoban

//* String ve number toplama işlemi
let metin3 = "hayri"
let sayi3 = 23
console.log (metin3 + sayi3) //hayri23

//? Çıkartma İşlemi
let sayi4 = 20
let sayi5 = 5
console.log(sayi4 - sayi5) //15

//* number bir ifadeden string ifade çıkartılmaz . Nan

//? Çarpma 
let sayi6 = 12
let sayi7 = 9
console.log(sayi6 - sayi7) //3

//? Bölme
let sayi8 = 8
let sayi9 = 2
console.log(sayi8/sayi9)

//? Mod Alma
//* mod almak bölünen sayının kalanını bizlere döndürür
console.log(10%2)
console.log(20%6)

//* Örnek
let degisken = 20
let degisken2 = 10
let modAlmaSonuc = degisken % degisken2
console.log(modAlmaSonuc)

//? üssü alma
console.log(10**2) //100
console.log(5**2) //25

let say1 = 2
let say2 = 2
console.log(say1 ** say2) //4

//? Arttırma (++)
//* ++ ile sayıyı doğrudan 1 arttırabiliriz
let sayiArttırma = 1
sayiArttırma++
console.log(sayiArttırma) //2


//? Eksiltme (--)
let say3 = 8
say3--
console.log(say3) //7

//? sayı arttırıp azaltmak için alternatifler
let say4 = 10
say4+= 1 //say4 = say4 +1
console.log(say4) //11

let say14 = 10
say14-=2 //say14 = say14 - 2
console.log(say14) //8

//? eval() bir fonksiyon olsa da, birden çok işlem yaptırmamız gereken projelerde kolaylık sağlar. string ifade kullanarak yapmak istediğimiz işlemi algılar ve sonucu yazdırır.

let value = eval('1 + 1');
alert(value); //2

let x = 5;
eval("x = 10")
alert(x); 

 //?100 lük değerlendirme sisteminde dönem içinde
 //?55 puan üzerinden 50 puan toplayan bir öğrencinin 
 //?B+ harf notu alması için (86 puan) %45 I hesaplanacak final sınavında 100 üzerinden
 //?en az kaç puan alması gerektiğini ekrana yazan javascript kodunu yazınız.

 n = 50;
 x = 86 -n;
 y = x*100/45;
 alert('Geçmeniz için sınav puanınız: ${y}');

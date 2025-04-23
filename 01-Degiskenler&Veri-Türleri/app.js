//!Degişkenler
//? 3 farklı veri türü oluşturulabilir (let,const,var)
//? Değişkenlere veri atamamızı sağlar (=)
//? Değişkenler bizler için veri tutmamıza yarar

let yas = 30;
console.log(yas);

let isim = "Elif";
let surname = "Özcan";
console.log(isim);


//!Console.log()
//*Developer geliştirme ekranıdır
//*Genelde yazdigimiz kodlar test edilir
console.log("hello world")

//!Veri Türleri
//? string(metinsel) veri türleri, tırnak içinde olan bütün değişkenler metinsel veri türüdür.

let urun = "telefon"
let il ="Sinop"
console.log(urun,il)

//? Number (sayisal) veri türleri
let dogumYili = 1995
let id = 8
let havaDerece = 20
console.log(dogumYili,id,havaDerece)

//? Array(Listeler anlamınada gelmektedir,toplu veri tutar)

let renkler = ["sarı","beyaz","mavi","yeşil","kırmızı"]
console.log(renkler)

//* Dizi içinde veri çekmek(dizilerde elemanlar index numarasına göre verilir)
console.log(renkler[2]) //mavi
console.log(renkler[1]) //beyaz

//*Dizilerde length ifadesi bize dizinin uzunluğunu verir.
let renklerLength = renkler.length
console.log(renklerLength) //5

//Dizilerde son elemanı almak için(dizi uzunluğundan -1 çıkartılır)
console.log(renkler[renkler.length-1]) //kırmızı

//? Objeler (key-value değerlerine göre veriler alır (veri tabanı yapısında diyebiliriz))
let kullanici = {
    isim1:"Ali",
    soyisim:"coban",
    yas : 23
}

console.log(kullanici)

//* kullanıcı içerisinde keye ulaşmak için
console.log(kullanici.isim1)
console.log(kullanici.soyisim)


//? Obje ve Dizilerle toplu veriler oluşturmak
let urunler = [
    {
        title:"urun1",
        content:"urun içerigi yazılır",
        price:25
    },
    {
        title:"urun2",
        content:"urun2 icerigi",
        price:50
    },
    {
        title:"urun3",
        content:"urun3 icerigi",
        price:75
    }
]
console.log(urunler) //* [{},{},{}] => dizi içindeki toplu objeler tutulur

//*verilere ulaşmak için 
//* (0. indexteki content verisi çeker)
console.log(urunler[0].content) 

//?boolean(mantıksal veri türleri)
//*boolean true -false döndürür
let veriDurum = false
let veriDurum2 = true
console.log(veriDurum, veriDurum2)

//? Undefined
//* undefined tanımsız bir deger anlamına gelir. (degisken çekilirken tanımsız bir ifade değerine denk gelirse undefined döndürür)
let tanimsizDeger = undefined
console.log(tanimsizDeger)

//? null
//* null boş bir deger anlamına gelir(çekilen değişkenin içerisinde veri yoksa null değeri verilir)
let bosDeger = null
console.log(bosDeger)

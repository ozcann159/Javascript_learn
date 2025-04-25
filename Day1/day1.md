# 📔 1. Gün

## Giriş



**30GündeJavaScript** eğitimi, hem yeni başlayanlar için hem de uzman JavaScript geliştiricileri için rehber niteliği taşımaktadır. JavaScript'e Hoş Geldiniz. JavaScript web'in dilidir. JavaScript'i kullanmaktan ve öğretmekten zevk alıyorum, umuyorum siz de öğrenirken ve kullanırken zevk alacaksınız.

Bu adım adım JavaScript kursunda, insanlık tarihindeki en popüler programlama dili olan JavaScript'i öğreneceksininiz.
JavaScript **_web sitelerine interaktiflik katmak, mobil-masaüstü-oyun uygulamaları geliştirmek_** için, hatta günümüzde JavaScript ile **_makina öğrenimi_** ve **_Yapay Zeka_** uygulamaları da geliştirebilirsiniz.
**_JavaScript (JS)_** son yıllarda popülaritesi artırarak altı yıl üst üste lider ve Github'da en çok kullanılan programlama dili olmuştur.

## Gereksinimler

Bu kursu takip etmek için önceden programlama bilgisine sahip olmanıza gerek yoktur. Sadece ihtiyacınız olanlar şunlardır:

1. Motivasyon
2. Bir bilgisayar
3. İnternet
4. Bir tarayıcı
5. Bir kod editörü

## Kurulum

Bir geliştirici olmak için motivasyonunuz ve güçlü bir arzunuz olduğuna inanıyorum. Eğer bilgisayar ve İnternete sahipseniz, artık başlamak için her şeye sahipsiniz.

### Node.js Kurulumu

Şu aşamada belki Node.js'e ihtiyacınız olmayabilir, fakat ilerisi için ihtiyacınız olacaktır. Dilerseniz şuan [node.js](https://nodejs.org/en/) yükleyebilirsiniz.

![Node download](/image/download_node.png)

Görseldeki web sitesinden son sürümü indirin ve çift tıklayarak bilgisayarınıza yükleyin.

![Install node](image/install_node.png)

Node.js'i başarılı bir şekilde yüklediğinizi kontrol etmek için komut satırı(cmd) ya da terminal ekranınızda aşağıdaki komutu kullanabilirsiniz.

```sh
 $ node -v

```

Bu eğitimi hazırlarken Node.js'in 12.14.0 sürümünü kullanıyordum. Muhtemelen sizin kullanacağınız sürüm çok daha güncel olacaktır.

### Tarayıcı

Kullanabileceğiniz çok sayıda tarayıcı bulunmaktadır. Ancak, kesinlikle Google Chrome tarayıcısını kullanmanızı öneriyorum.

#### Google Chrome Kurulumu

[Google Chrome](https://www.google.com/chrome/) yükleyin. Tarayıcı konsoluna küçük JavaScript kodları yazabiliriz, ancak uygulamaları geliştirmek için tarayıcı konsolunu kullanmayız.

![Google Chrome](/image/google_chrome.png)

#### Google Chrome Konsolu Açmak

Tarayıcının sağ üst köşesindeki üç noktaya tıkladıktan sonra, _Diğer Araçlar -> Geliştirici Araçları_ öğesine ulaşarak veya F12 kısayolu kullanarak geliştirici araçlarını açabilirsiniz. Ben kısayolu kullanmayı tercih ediyorum.

![Opening chrome](/image/opening_developer_tool.png)

Geliştiri araçları kısmındaki consol sekmesine erişmek için aşağıdaki kısayolu kullanabilirsiniz.

```sh
Mac
Command+Option+J

Windows/Linux:
Ctl+Shift+J
```

![Opening console](/image/opening_chrome_console_shortcut.png)

Google Chrome konsolunu açtıktan sonra görseldeki sekmeleri keşfetmeye çalışın. Zamanımızın çoğunu Konsolda geçireceğiz. Konsol, JavaScript kodlarımızı çalıştırabileceğimiz alandır. Google Console V8 motoru, JavaScript kodumuzu makine koduna Dönüştürerek makine ile iletişim kurmamızı sağlar. Google Chrome konsoluna bir JavaScript kodu yazalım:
Elements : Html ve css kodları burda bulunur.

---

Console : JS kodları yazabilir ve çıktılarını görebiliriz.

Sources :  snippet oluşturup daha sonra çalışmamızı sağlar.

Network: Gelen istekler, dönen cevaplar bu kısımdadır.

Application: Browser uygulamaları vardır.

Çoğu zamanımızı Konsolda geçireceğiz. Konsol, JavaScript kodunuzun gittiği yerdir. Google Konsol V8 motoru, JavaScript kodunuzu makine koduna dönüştürür
![write code on console](/image/js_code_on_chrome_console.png)
Google konsolunda veya herhangi bir tarayıcı konsolunda herhangi bir JavaScript kodu yazabiliriz. 
#### Tarayıcı Konsolunda Kod Yazmak

Google konsoluna veya herhangi bir tarayıcı konsoluna, herhangi bir JavaScript kodu yazabiliriz. Fakat, bu eğitimde yalnızca Google Chrome konsoluna odaklanacağız. Aşağıdaki kısa yolları kullanarak konsolunuzu açın:

```sh
Mac
Command+Option+I

Windows:
Ctl+Shift+I
```

##### Console.log

İlk JavaScript kodumuzu yazmak için, yerleşik bir fonksiyon olan **console.log()** fonksiyonunu kullandık. Çıktı ekranına `'Hello, World!'` cümlesini console.log() fonksiyonu kullanarak yazırdık.

```js
console.log("Hello, World!");

##### Çoklu Değişkenler ile Console.log

**console.log()** fonksiyonu virgülle ayrılmış birden fazla parametre alabilir. Kullanımı şu şekildedir:**`console.log(param1, param2, param3)`**

![console log multiple arguments](../images/console_log_multipl_arguments.png)

```js
console.log("Hello", "World", "!");
console.log("HAPPY", "NEW", "YEAR", 2020);
console.log("Welcome", "to", 30, "Days", "Of", "JavaScript");
```

Yukarıdaki kod parçacığından da görebileceğiniz gibi, _`console.log()`_ birden çok değişken veri türü alabilir.

Tebrikler! İlk JavaScript kodunuzu _`console.log()`_ kullanarak yazdınız.
##### Yorumlar

Kodumuza yorum ekleyebiliriz. Yorumlar, kodu daha okunabilir hale getirmek ve kodumuzda açıklamalar bırakmak için çok önemlidir. JavaScript, kodumuzun yorum bölümünü çalıştırmaz. JavaScript'te `//` ile başlayan satırlar ve `/*...*/` işaretler arasında yer alan herhangi metinler yorum olarak algılanır.
**Örnek: Tek Satırlı Açıklama**

```js
// Bu ilk yorum
// Bu ikinci yorum
// Ben tek satırlık bir yorumum
```

**Örnek: Çok Satırlı Açıklama**

```js
/*
 Bu çok satırlı bir yorumdur
 Çok satırlı yorumlar birden çok satır alabilir 
 JavaScript web'in dilidir  
 */
```
##### Sözdizimi

Programlama dilleri insan dillerine benzer. Türkçe veya diğer birçok dil, anlamlı bir mesaj iletmek için kelimeler, deyimler, cümleler, birleşik cümleler ve daha fazlasını kullanır. Sözdiziminin Türkçedeki anlamı, bir dilde cümleler oluşturmak için sözcüklerin dilbilgisi kurallarına göre dizilişi, sıralanışıdır. Sözdiziminin teknik tanımına baktığımızda, bir bilgisayar dilindeki ifadelerin yapısıdır. Programlama dillerinin kendilerine özgü sözdizimleri vardır. JavaScript bir programlama dilidir ve diğer programlama dilleri gibi kendi sözdizimine sahiptir. Kodlarımızı JavaScript'in anladığı sözdizimi kuralları çerçevesinde yazmaz isek, farklı türde hatalar ortaya çıkar. Farklı JavaScript hata türlerini daha sonra keşfedeceğiz ve açıklayacağız. Şimdilik sözdizimi hatalarını basitçe görelim.

![Error](../images/raising_syntax_error.png)

Görselde görülen şekilde kasıtlı olarak hatalar yaptım. Hatalar sonucunda konsol bize sözdizimi hataları verdi. Aslında, uyarı metinleri bilgilendiricidir. Ne tür bir hata yapıldığını bildiririrler. Bu hata mesajlarını okuyarak yapmış olduğumuz sözdizim hatasını düzeltebilir ve sorunları çözebiliriz. Bir programdaki hataları tanımlama ve kaldırma işlemine hata ayıklama denir(debugging). Hataları düzeltelim:

```js
console.log("Hello, World!");
console.log("Hello, World!");
```

Şimdiye kadar,_`console.log()`_ kullanarak metnin nasıl görüntüleneceğini gördük. Eğer _`console.log()`_ kullanarak metin yazdırmak istiyor isek, metni tek tırnak, çift tırnak veya ters tırnak işaretleri içiresine almamız gerekir.
**Örnek:**

```js
console.log("Hello, World!");
console.log("Hello, World!");
console.log(`Hello, World!`);
```

#### Aritmetik İşlemler

Şimdi, Google Chrome konsolunda sayı veri türleri için _`console.log()`_ kullanarak JavaScript kodları yazma konusunda daha fazla pratik yapalım.
JavaScript kullanarak matematiksel hesaplamalar da yapabiliriz. Aşağıdaki basit hesaplamaları yapalım.
Konsolda **_console.log()_** işlevi olmadan doğrudan işlemler yaptırabiliriz. Ancak, buna ilişkin kullanımlar, bu eğitimde açıklanmamıştır, çünkü eğitimimiz boyuncu biz bu fonksiyonları hep bir kod editöründe kullanacağız. Dilerseniz konsola doğrudan sayıları yazarak da işlemleri gerçekleştirebilirsiniz.

![Arithmetic](../images/arithmetic.png)

```js
console.log(2 + 3); // Toplama
console.log(3 - 2); // Çıkarma
console.log(2 * 3); // Çarpma
console.log(3 / 2); // Bölme
console.log(3 % 2); // Mod Alma
console.log(3 ** 2); // ;Üs Alma 3 ** 2 == 3 * 3
```

### Kod Editörü

Kodlarımızı tarayıcı konsoluna yazabiliriz, ancak daha büyük projeler için böyle bir şey yapmamız mümkün olamaz. Gerçek bir çalışma ortamında, geliştiriciler kodlarını yazmak için farklı kod düzenleyicileri kullanırlar. Bu 30günlükJavaScript eğitiminde Visual Studio Code editörünü kullanacağız.

#### Visual Studio Code Kurulumu

Çok popüler ve açık kaynak kodlu olan Visual Studio Code(Metin Düzenleyicisi)'u tavsiye ederim. [download Visual Studio Code](https://code.visualstudio.com/), Fakat başka editörler kullanıyorsanız, kullanıdığınız editör ile devam edebilirsin.

![Vscode](../images/vscode.png)

Visual Studio Code yüklediyseniz, kullanmaya başlayalım.

#### Visual Studio Code Kullanımı

Visual Studio Kodunu açtığınızda, görseldeki gibi bir arayüz açılacaktır. Görsellerde belrtilen simgelerle uğraşarak özellikleri hakkında deneyim edinebilirsiniz.

![Vscode ui](../images/vscode_ui.png)

![Vscode add project](../images/adding_project_to_vscode.png)

![Vscode open project](../images/opening_project_on_vscode.png)

![script file](../images/scripts_on_vscode.png)

![Installing Live Server](../images/vsc_live_server.png)

![running script](../images/running_script.png)

![coding running](../images/launched_on_new_tab.png)

## Bir Web Sayfasında JavaScript Kodları Oluşturma

JavaScript bir web sayfasına üç farklı şekilde eklenebilir:

- **_Satır İçi oluşturma_**
- **_Dahili oluşturma_**
- **_Harici oluşturma_**
- **_Çoklu Harici oluşturma_**

Aşağıdaki bölümlerde web sayfanıza JavaScript kodu eklemenin farklı yolları gösterilmektedir.

### Satır İçi Oluşturma

Masaüstünüzde veya istediğiniz herhangi bir yerde, bir proje klasörü oluşturun. Klasör adına 30GundeJS adını verebilirsiniz, klasör içerisinde _`index.html`_ dosyası oluşturun. Sonrasında aşağıdaki kodu yapıştırın ve bu _.html_ uzantılı dosyayı [Chrome](https://www.google.com/chrome/) gibi bir tarayıcıda açın.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30DaysOfScript: Satır İçi script</title>
  </head>
  <body>
    <button onclick="alert('30GündeJavaScripte hoş geldiniz')">Bana Tıkla</button>
  </body>
</html>
```

Şimdi, ilk satır içi script dosyanızı yazdınız. JavaScript yerleşik fonksiyon olan _`alert ()`_  kullanarak,bir açılır uyarı mesajı oluşturabiliriz

### Dahili Oluşturma

Dahili scripti _`head`_ veya _`body`_ etiketleri arasına yazılabilir, ancak bunun HTML belgesinin body kısmına yazılması tercih edilir. Öncelikle sayfanın _`head`_ kısmına yazalım.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30GündeScript:Dahili Script</title>
    <script>
      console.log("30GündeJavaScript'e hoş geldiniz");
    </script>
  </head>
  <body></body>
</html>
```

Çoğu zaman dahili bir scripti bu şekilde yazarız. JavaScript kodunun, html sayfamızın _`body`_ kısmına yazılması en çok tercih edilen seçenektir. _`Console.log()`_ çıktısını görmek için tarayıcınızın konsolunu açınız.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30GündeScript:Dahili Script</title>
  </head>
  <body>
    <button onclick="alert('30GündeJavaScripte hoş geldiniz!');">
      Bana Tıkla
    </button>
    <script>
      console.log("30GündeJavaScript'e hoş geldiniz!");
    </script>
  </body>
</html>
```

_`console.log()`_ çıktısını görmek için tarayıcı konsolunu açın.

![js code from vscode](../images/js_code_vscode.png)

### Harici Oluşturma

Dahili scripte benzer şekilde, harici sicript bağlantısı da head etiketleri arasında veya body etiketleri arasında olabilir, ancak body etiketleri arasına eklenmesi tercih edilir.
Öncelikle '.js' uzantılı harici bir JavaScript dosyası oluşturmalıyız. '.js' uzantılı tüm dosyalar JavaScript dosyalarıdır. Proje klasörü içersine 'introdiction.js' adında bir dosya oluşturun ve içine aşağıdaki kodu yazın. Ardından bu oluşturduğunuz 'introdiction.js' dosyanızı, html sayfanızdaki head veya body etiketinin arasına ekleyerek, 'introdiction.js' adlı JavaScript dosyamızı tanıtalım.

```js
console.log("30GündeJavaScript'e hoş geldiniz!");
```

Harici script dosyasının _head_ etiketi arasında tanımlama:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30GündeJavaScript:Harici script</title>
    <script src="introdiction.js"></script>
  </head>
  <body></body>
</html>
```

Harici script dosyasının _body_ etiketi arasında tanımlama:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>30GündeJavaScript:Harici script</title>
  </head>
  <body>
    <!-- JavaScript harici script linki, head veya body etiketleri arasında olabilir -->
    <!-- Body kapanış etiketinden önce harici Javascript dosyanızı eklemeniz önerilir  -->
    <script src="introdiction.js"></script>
  </body>
</html>
```

_`console.log()`_ çıktısını görmek için tarayıcı konsolunu açın.

### Çoklu Harici Oluşturma

Ayrıca birden çok harici JavaScript dosyasını da bir web sayfası içerisine bağlayabiliriz.
Oluşturduğumuz proje klasörü içerisine yeniden `helloworld.js` isimli bir JavaScript dosyası oluşturalım.

```js
console.log("Hello, World!");
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Çoklu Harici Scriptler</title>
  </head>
  <body>
    <script src="./helloworld.js"></script>
    <script src="./introdiction.js"></script>
  </body>
</html>
```

_ana.js dosyanız, diğer tüm .js dosyalarınızın altında olmalıdır_. Derleme yapılırken satırlar yukarıdan aşağıya okunduğu için ana JavaScript dosyanınız en son okunması önem taşımaktadır.

![Multiple Script](/image/multiple_script.png)

## Veri Türlerine Giriş

JavaScript'te ve diğer programlama dillerinde, farklı tiplerde veri türleri vardır. JavaScript ilkel veri tipleri şunlardır: _String(metin), Number(sayı), Boolean(T-F), undefined(tanımsız), NulL(boş)_, ve _Symbol(sembol)_.

### Sayılar

- Tam sayılar: Integer (sıfır dahil negatif ve pozitif)
  Örnek:
  ... -3, -2, -1, 0, 1, 2, 3 ...
- Ondalıklı sayılar: (Float / Decimal)
  Example
  ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5 ...

### String

Tek tırnak, çift tırnak veya ters tırnak(backtick) arasında yer alan, bir veya daha fazla karakterden oluşan metinsel değerlerdir.(Her tür karakterleri içerisinde barındırabilir.)

**Örnek:**

```js
"a";
"Asabeneh";
'YusufAgca';
"Turkey-ATATÜRK";
'JavaScript güzel bir programlama dilidir';
"Öğrenmeyi seviyorum";
`Unutma, ayrıca bir ters tırnak kullanarak bir dize de oluşturabiliriz`;
("string veri türü, bir karakter kadar küçük, sayfalar kadar büyük olabilir.");
```

### Boolean

Boolean veri türü, yalnızca True(doğru) veya False(yanlış) bir değer alır-dönderir.

**Örnek:**

```js
true; // ışık yanıyorsa, değer doğrudur
false; // ışık kapalıysa, değer yanlıştır
```

### Tanımsız

JavaScript'te, bir değişkene bir değer atamaz isek, değeri undefined olarak alır. Buna ek olarak, bir fonksiyon hiçbir şey döndürmüyorsa, döndereceği tanım 'undefined' tır.

```js
let ismim;
console.log(ismim); // undefined, çünkü henüz değişkene bir değer atanmamış.
```

### Null(Boş)

JavaScript'te 'null' boş bir değer anlamına gelir.

```js
let bosDeger = null;
```

## Veri Türlerini Kontrol Etme

Bir değişkenin veri türünü kontrol etmek için **typeof** operatörünü kullanırız. Aşağıdaki örneğe bakın.

```js
console.log(typeof "Asabeneh"); // string
console.log(typeof 5); // number
console.log(typeof true); // boolean
console.log(typeof null); // object type
console.log(typeof undefined); // undefined
```

## Tekrardan Yorumlar

JavaScript'te yorum yapmanın diğer programlama dillerine benzer olduğunu unutmayın. Kodunuzu daha okunabilir hale getirmek için yorumlar önemlidir.
Yorum yapmanın iki yolu vardır:

- _Tek satırlı yorum_
- _Çok satırlı yorum_

```js
// Bu satırda istediğiniz yorumu bırakabilirsiniz.
// Bu fonksiyonun amacı sayıları hesaplar.
// İlerde kodunuzu rahat anlayabilmek için yorumlar bırakmaya özen gösterin.
```

Çok satırlı yorum:

```js
/*
  let konum = 'İstabul';
  let age = "34";
  let evliMi = true;
  Bu kısım çok satırlı yorum bloğudur.
*/
```

## Değişkenler

Değişkenlere veri _kapsayıcılar_ diyebiliriz. Unutmayınız ki değişkenler, verileri belleklerde(_Ram_) saklar. Bir değişken atandığında belleklerde kendisi için yer ayrılır. Bir değişkene bir değer(veri) atandığında, bellek alanı bu verilerle doldurulur. Değişken tanımlamak için, _var_, _let_, veya _const_ Anahtar kelimelerini(keywords) kullanırız.

Değişken değerinin kodumuzun farklı yerlerinde değiştirilmesi gerekiyorsa, _let_ kullanırız. Eğer değişken verisi hiçbir yerde değişmeyecek ise bu durumda _const_ kullanırız. Örneğin, Pi sayısı, ülke adları veya yerçekimi ivmesi gibi değişmeyen, sabit değerler için _const_ kullanırız. Bu eğitimde _var_ kullanmayacağız ve kullanmanızı tavsiye etmiyorum. Çok fazla sızıntısı olduğundan dolayı _var_  değişken tanımlayıcısını kullanmanız hatalara sebep olacaktır. Var, let ve const hakkında diğer bölümlerde(Scope) ayrıntılı olarak konuşacağız. Şimdilik, yukarıdaki açıklama işimizi görecektir.

Geçerli bir JavaScript değişken adı aşağıdaki kurallara uymalıdır:

- JavaScript değişken adı bir sayı ile başlamamalıdır.
- JavaScript değişken adı, dolar işareti ve alt çizgi dışında özel karakterlere izin vermez.(Türkçe karakterlere özellike dikkat ediniz.)
- JavaScript değişken adı, camelCase kuralına uymalı.
- JavaScript değişken adı sözcükler arasında boşluk olmamalıdır.

Aşağıda geçerli JavaScript değişkenlerine örnekler verilmiştir.

```js
ad;
soyAd;
ulke;
sehir;
anneAdi;
age;
evliMi;

soy_ad;
evli_mi;
anne_adi;

sayi1;
sayi_1;
_sayi_1;
$sayi1;
yil2020;
yil_2020;
```

Listenin ilk bölümünde belirtilen değişken isimleri JavaScript'te camelCase bildirim kuralına uyularak yazılmıştır. Bu eğitimde, camelCase değişken adı yazım kurallarını uygulayacağız.

Geçersiz değişken adlarına örnek:

```js
  first-name
  1_num
  num_#_1
```

Şimdi değişkenleri farklı veri tipleriyle birlikte tanımlayalım. Bir değişken tanımlamak için değişken adından önce _let_ veya _const_ anahtar kelimelerini kullanmamız gerekir. Değişken adının ardından eşittir işareti (atama operatörü) ve bir değer (atanmış veri) yazarız.

```js
// Sözdizimi
let degiskenAdi = degeri;
```

Değişkenin adı, farklı değer verilerini depolayabilir. Ayrıntılı örnekler için aşağıya bakın.

**Değişken tanımlama örnekleri**

```js
// Farklı veri türlerinin, farklı değişkenlerini tanımlama
let ad = "Yusuf"; // bir kişinin adı
let soyAd = 'Agca'; // bir kişinni soyadı
let ulke = "Türkiye"; // ülke
let sehir = "Ankara"; // başkent
let yas = 27; // yaş
let instagram = "@yusuffagcaa" // instagram adresi
let evliMi = false;

console.log(ad, soyAd, ulke, sehir, yas, instagram, evliMi);
```

```sh
Yusuf Agca Türkiye İstanbul 27 @yusuffagcaa false
```

```js
// Değişkenlere sayı değerleri tanımlama
let yas = 100; // yas
const yerCekim = 9.81; // m/s2 cinsinden yer çekimi değeri
const kaynamaNoktasi = 100; // °C cinsinden suyun kaynama noktası
const PI = 3.14; // geometrik sabit
console.log(yerCekim, kaynamaNoktasi, PI);
```

```sh
9.81 100 3.14
```

```js
// Birden fazla değişkenleri virgül ile ayırarak tek satırda tanımlayabiliriz. Ancak ayrı satırlarda tanımlamak, kodu daha okunabilir kıldığı için tavsiye ederim.
let isim = "YunusKaraman",
  is = "Lokmacı",
  konum = "Bagcılar";
console.log(isim, is, konum);
```

```sh
YunusKaraman Lokmacı Bagcılar
```

01-Day klasörü içindeki _index.html_ dosyasını tarayıcınızda açtığınızda, şu sonucu alıyor olacaksınız:

![Day one](../images/day_1.png)

🌕 Harikasınız! 1. gün eğitimini tamamladınız ve mükemmel olma yolundasınız. Şimdi beyniniz ve kasınız için bazı egzersizler yapın.

# 💻 1. Gün: Egzersizler

1. _"Yorumlar kodu okunabilir hale getirmeye yardımcı olur"_ yazan tek satırlı bir yorum yazın
2. _"30GundeJavaScript eğitimine hoş geldiniz"_ yazan başka bir yorum satırı oluşturun
3. _"Yorumlar kodu okunabilir, yeniden kullanımı kolay ve bilgilendirici bir hale getirir."_ yazılı, birden çok satıra yayılmış çok satırlı bir yorum yazın

4. Bir degisken.js isimli dosya oluşturun ve bu _.js_ dosyasında string, boolean, undefined ve null veri türlerinde değişkenler oluşturun
5. Bir veriturleri.js isimli dosya oluşturun farklı veri türlerindeki verileri kontrol etmek için JavaScript **_typeof_** operatörünü kullanın. 
6. Herhangi bir değer ataması yapmadan dört adet değişken yazın
7. Oluşturduğunuz değişkenlere değer ataması yapın
8. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı birden çok satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun
9. Adınızı, soyadınızı, medeni durumunuzu, ülkenizi ve yaşınızı tek bir satırda olacak şekilde saklamak için değişkenleri ve değerlerini oluşturun
10.  _benimYasim_ ve _seninYasin_ adlı iki değişken oluşturun ve bunlara aşağıdaki değerleri atayın. Ardından bunları tarayıcının konsolunda çalıştırın

```sh
Ben 25 Yaşındayım.
Sen 30 Yaşındasın.
```

🎉 TEBRİKLER  1. Gün Bitti! 🎉


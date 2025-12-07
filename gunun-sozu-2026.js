<div id="gününSozuAlani" style="border: 1px solid #94713c; padding: 20px; background-color: rgba(247, 243, 237, 0.65); backdrop-filter: blur(2px); -webkit-backdrop-filter: blur(2px); border-radius: 10px; text-align: center; box-shadow: 2px 2px 5px rgba(0,0,0,0.1);">
    <h3 id="gününTarihi" style="color: #94713c; margin-top: 0; margin-bottom: 15px; font-size: 1.4em; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);">Hazırlayan...</h3> 
    <p id="gününSozuMetni" style="font-size: 1.2em; color: #4a4a4a; margin-bottom: 15px; line-height: 1.5; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);">Burak CAN</p>
    <p id="gününSozuYazari" style="font-weight: bold; color: #6a6a6a; margin: 0; font-size: 0.9em; text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);"></p>
</div>

<script>
    // Sözler, 1 Ocak (İndeks 0) ile 31 Aralık (İndeks 365 - 1) arasında YIL BOYUNCA sıralanmıştır.
    var sozler = [
      // ==================================================================================================
      // OCAK 2026: KÖKLER VE GEÇMİŞE SAYGI (31 Gün) - İndeks 0-30
      // ==================================================================================================
      {
        "metin": "Yeni bir yıl, temiz bir başlangıçtır. Ama köklerimizi unutmadan, geçmişe saygıyla ilerleyelim.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçmişimiz; Balkanlardan buraya uzanan azimli bir göç hikayesidir. Köklerimize sahip çıkmak en büyük görevimiz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin ruhu, atalarımızın göç yollarında yaktığı umut ateşinde gizlidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün her taşında, her tarlasında bir geçmiş hikayesi saklıdır. Onları dinlemeyi bilmeliyiz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ağır kış şartları, bize geçmişte yaşanan zorlukları ve onlara karşı gösterilen dayanışmayı hatırlatır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyden yetişen, ancak gurbette yaşayan her evladımız, Geçkinli'nin uzaktaki elçisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Huzur; tarihin bize öğrettiği en değerli derstir. Onu korumak için çabalamalıyız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Anadolu'da olmak bir şans, Trakya'da olmak ise bir duruş gerektirir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin 'Gurur Köşesi'nde yer alan her isim, köklerimize olan bağlılığımızın somut kanıtıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımızın bizden tek isteği vardı: Birlik olun, topraklarınızı sevin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gençler! Geçmişi bilmeyen, geleceği inşa edemez. Köyünüzün hikayesini öğrenin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Balkan ruhu, Edirne’nin ayazında bile içimizi ısıtan güçlü bir mirastır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Dayanışma, sadece zor günde değil; her gün yaşatılması gereken bir kültürdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün eski taş evleri, sessizce tarihimizi fısıldayan birer kitaptır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En büyük hazinemiz, bir zamanlar 'Geçkenliya' olan bu topraklara duyduğumuz sarsılmaz sevgi ve bağlılıktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vefat eden büyüklerimizi rahmetle anıyoruz. Onların anıları, köyümüzün kılavuzudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir Trakyalı, 'İçim esmiyor beya' dediğinde, sadece havadan değil, gönlündeki sakinlikten de bahsediyordur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Sınırlarda yaşamak zordur; ama o sınırlar, bize vatanın kıymetini en iyi öğreten yerlerdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her yeni doğan çocuk, köyümüzün geleceğe uzanan taze bir umududur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli demek; zorlu coğrafyada inatla tutunmak ve hayata devam etmek demektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Acı Çeşme’nin suyu; sadece susuzluğumuzu değil, tarihe olan vefa borcumuzu da hatırlatır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Göç edenler bilir: Vatan, sadece doğduğun yer değil; doyduğun ve kök saldığın yerdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Öğrenmek; geçmişin derslerini alıp, geleceğe güçlü adımlar atmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kış mevsimi, bize hasat edilenlerin değerini, birlik olmanın önemini anlatır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köydeki huzurumuz, geçmişte can verenlerin fedakarlığının ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan sevgisi; sadece büyük laflarla değil, köyüne sahip çıkmakla gösterilir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her Trakya düğünü; göçle gelen kültürlerin, sevgiyle harmanlandığı bir şenliktir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin tarım geleneği, atalarımızdan kalan en değerli mirastır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yeni nesillere bırakacağımız en değerli miras, köklerine bağlılık bilincidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ocak biterken; Geçkinli’nin ruhu, bereketli topraklardan aldığı güçle yeni aya hazırlanır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kışın son soğukları kapıdayken, kalbimizde baharın umudu hiç bitmez.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // ŞUBAT 2026: EĞİTİM VE GELECEK (28 Gün) - İndeks 31-58
      // ==================================================================================================
      {
        "metin": "Şubat; kışın ortasında, gençlerimizin geleceği için plan yapma ayıdır. Eğitim, her şeyin anahtarıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eğitim ışığı, köyümüzün en karanlık köşesini bile aydınlatır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyden yetişen, okuyan ve geri dönen her evlat, Geçkinli'nin gururudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yeni nesillerimiz, atalarının göç azmini ve bilimin gücünü birleştirecektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir köyün geleceği, tarlalarından önce, okullarının sıralarında şekillenir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprağı ekmeyi öğrenmek kadar, geleceği okumayı öğrenmek de önemlidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gençler! Atatürk'ün 'En hakiki mürşit ilimdir' sözünü, yaşam rehberiniz yapın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin 'Gurur Köşesi' sadece anıları değil, gelecek nesillere ilham kaynağını da barındırır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki her öğretmen, bir meşale taşıyıcısıdır. Onlara minnettarız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okul duvarları, bir köyün dört bir yanına yayılan bilginin ilk kaynağıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okumanın amacı; sadece kendine değil, doğduğun ve yaşadığın köye de faydalı olmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köy enstitüleri ruhu: Okulu tarlayla, bilgiyi yaşamla birleştirmektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüze yeni fikirler getiren her gence kapımız açıktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gelecek, tembelin değil, okuyup çalışanların eseri olacaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan sevgisi, önce okuma sevgisinden geçer.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ailesinden uzakta okuyan gençlerimiz! Unutmayın, kalbimiz ve dualarımız sizinle.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En büyük yatırım, eğitime yapılan yatırımdır. Köyümüzün geleceği buna bağlıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyden çıkan ve kariyerinde zirveye ulaşan her kişi, tüm Geçkinli'nin başarısıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bilgi, tıpkı tohum gibi; ekildikçe büyür ve bereket verir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her başarı hikayesi, bir zamanlar Geçkinli'nin okul sıralarında başlamıştır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köy hayatının zorlukları, gençlerimize azmi ve mücadele ruhunu öğretir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eğitimde fırsat eşitliği, Geçkinli'nin tüm çocuklarının hakkıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri! Dünyaya açılın, ama köklerinizi asla unutmayın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gelecek; geçmişini bilen, eğitimli ve ahlaklı gençlerin omuzlarında yükselecektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okul bahçesindeki her ses, köyümüzün yarınki neşesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şubat'ın sonu, kışın değil; cehaletin sonudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eğitimli insan; toprağını daha verimli, hayatını daha anlamlı kılar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yeni bir aya girerken; kalemimiz, küreğimiz kadar güçlü olmalıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // MART 2026: UYANIŞ VE İLKBAHAR UMUDU (31 Gün) - İndeks 59-89
      // ==================================================================================================
      {
        "metin": "Mart kapıdan baktırır. Ancak o sert rüzgar, toprağın uyanışının müjdecisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Trakya’da kış ne kadar uzun sürerse sürsün, bahar umudu hiç bitmez.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprak ananın uyanışı, Geçkinli çiftçisinin yeni umutlarla tarlaya dönüşüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şimdi tohum atma vakti. Sabırla ekilen, bereketle biçilir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kadınlar Günü kutlu olsun! Köyümüzün bereketi, fedakar kadınlarımızın ellerinde gizlidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kadınlarımız; sadece evimizin direği değil, köyümüzün de kalkınma gücüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Doğru zamanı beklemeyi bilmek, iyi bir çiftçinin en büyük erdemidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Baharın gelişiyle birlikte, köyümüzün tüm renkleri yeniden canlanır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mart; umut, azim ve toprağa yeniden bağlanma ayıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her damla yağmur, atalarımızın bize bıraktığı topraklara şifadır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzde bahar demek, traktörlerin sesleri ve çocukların neşesi demektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çanakkale Zaferi'nin ruhu, vatanın her köşesinde, her toprağında yaşıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çanakkale'yi geçilmez yapan ruh; Geçkinli'deki birlik ve beraberlik ruhudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şehitlerimize minnettarız. Onların mirası, bizim bahar umudumuzdur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprak anayı sevmek, onu doğru yöntemlerle işlemekle başlar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mart, bize mevsimlerin döngüsünün, hayatın devam ettiğini gösterir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri! Bilimle toprağı birleştirin, geleceğinizi kendiniz inşa edin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mart ayında atılan her tohum, yazın sofralarımızdaki berekete dönüşecektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçmişin zorlukları, bugünün konforunun kıymetini bilmemizi sağlar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bahar; sadece mevsim değişikliği değil, aynı zamanda yeni bir başlangıç için motivasyondur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarlada izi olmayanın, harmanda yüzü olmaz. Şimdi çalışma vaktidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mart bereketi; Geçkinli'ye bol yağmur, bol güneş ve bol umut getirsin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her Trakyalı, toprağın dilinden anlar. O dil, bize sabrı ve şükrü öğretir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprakla kurduğumuz bağ, Geçkinli'nin kültürünün temelidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki dayanışma; Mart'ın fırtınasına karşı en güçlü kalkanımızdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Su, hayattır. Suyumuzu ve topraklarımızı koruma bilinciyle hareket edelim.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mart'ın sonunda; kışın yorgunluğunu atıp, baharın enerjisini toplarız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Baharın ilk çiçekleri, köyümüzün umutlu yüzünü simgeler.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'de hayat, tıpkı mevsimler gibi; daima yenilenir ve devam eder.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mart ayının bereketi, tüm yıla yayılsın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Nisan kapıda. Coşku ve milli egemenlik bayramına hazırlanıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // NİSAN 2026: COŞKU VE ÇOCUK BAYRAMI (30 Gün) - İndeks 90-119
      // ==================================================================================================
      {
        "metin": "Nisan; Milli Egemenlik coşkusuyla, toprağın ve ruhumuzun bayramıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Baharın en güzel ayı geldi. Köyümüzün tarlaları yeşile, kalbimiz coşkuya doyuyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Milletin egemenliği, Geçkinli gibi her köşede kök salan iradenin ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En büyük miras, egemenliği kayıtsız şartsız millete bırakan Ata’nın vizyonudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Baharın cömertliği, tarlalarımıza bereket, ruhumuza huzur getirir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzde okuma yazma bilen her kişi, ulusal egemenliğin temsilcisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Milli irade, Geçkinli'nin her ferdinin özgürce yaşama hakkıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çocuklarımızın gözlerindeki ışıltı, egemenliğimizin geleceğe uzanan garantisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayrama doğru ilerlerken, coşkumuzu ve minnetimizi tazeleyelim.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarım, sadece bir iş değil; vatan toprağına sahip çıkma ve onu yaşatma sanatıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Nisan yağmurları; toprağa hayat, gönüllere umut verir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri! Geçmişi onurla taşıyıp, geleceği bilimle aydınlatın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Nisan; yeniden canlanışın, yeşilin ve umudun en coşkulu ayıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprak sevgisi, vatan sevgisinin ilk adımıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir köyün en büyük zenginliği, mutlu ve aydınlık yüzlü çocuklarıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayrama hazırlanıyoruz! Kalbimiz Atatürk'ün çocuk sevgisiyle dolu.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ulusal egemenlik, köylülerin tarlada bile özgürce nefes almasıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "TBMM'nin açılış ruhu, Geçkinli'nin her evinde yaşamaktadır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "23 Nisan'ın coşkusu; bir köyün, geleceğine olan inancının yansımasıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "23 Nisan Ulusal Egemenlik ve Çocuk Bayramımız kutlu olsun! Egemenlik daima milletindir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çocuklar! Sizler, Geçkinli'nin ve bu vatanın en değerli mirasısınız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayram coşkusu biter, ama egemenliğe olan bağlılığımız daim kalır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyün çocukları; yarının doktoru, mühendisi ve çiftçisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Nisan ayı bize; zorlukların geçeceğini, güzel günlerin geleceğini öğretir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Birlik ve beraberlik, en zorlu fırtınaları bile aşmamızı sağlar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımızın azmi, Nisan yeşili gibi hep taze ve canlıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzde huzur; egemenliğimizin bize verdiği en büyük hediyedir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yolunuz açık, hasadınız bereketli olsun. Mayıs ayı kapıda.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Nisan biter, umut baki kalır. Şimdi Mayıs'ın heyecanına hazırlanıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprak bayram etti. Şimdi sıra, Hıdırellez ile şükranımızı göstermekte.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // MAYIS 2026: KURULUŞ VE KUTLAMA (31 Gün) - İndeks 120-150
      // ==================================================================================================
      {
        "metin": "Mayıs; baharın doruk noktası, Geçkinli'nin kuruluş yıldönümü ve kutlama ayıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Emek; alın terinin en kutsal halidir. İşçi Bayramımız kutlu olsun!",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarlada çalışan her köylü, bu vatanın en değerli emekçisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mayıs rüzgarı; Hıdırellez'in coşkusunu ve dileklerini köyümüze taşır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hıdırellez şenliği; Geçkinli'de umudu, bereketi ve baharı kutlama günüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hıdırellez ateşinden atlamak; kötü enerjiyi geride bırakıp, yenilenmeye niyet etmektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin kuruluş yıldönümü kutlu olsun! Köklerimizden aldığımız güçle geleceğe yürüyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün idari kuruluşu, buraya yerleşen atalarımızın azminin eseridir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyde yaşamak bir ayrıcalıktır. Burada her komşu bir aile, her dost bir sırdaştır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprak; bize sabrı, doğa ise şükrü öğretir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Baharın ortasında; yeşilin en gür, hayatın en coşkulu olduğu yerdeyiz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şimdi tarlada emek zamanı. Hasat, emeğin kutsal karşılığıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri! Geçmişinizle gurur duyun, ama geleceğinize odaklanın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mayıs'ın bereketli günleri, yazın bolluğunun habercisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Anneler Günü kutlu olsun! Köyümüzün anneleri; şefkatin, gücün ve bereketin kaynağıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün tarihini yaşatmak, kuruluşumuza duyduğumuz saygının en büyük göstergesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atatürk'ü Anma, Gençlik ve Spor Bayramımız kutlu olsun! Köyümüzün gençleri, geleceğimizdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "19 Mayıs coşkusu; Samsun'dan Trakya'ya uzanan bağımsızlık ruhunu canlandırır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Sağlıklı yaşam ve spor; gençliğin enerjisini doğru yöne yöneltmenin en iyi yoludur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri, Atamızın emanetine sahip çıkacaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mayıs'ın en güzel günleri; şenlik, kutlama ve bolca çalışmayla geçer.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyün birlik ruhu; en zorlu günlerde bile bizi ayakta tutan çimentodur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Emeğimizin karşılığını hasatta alacağımız günler yaklaşıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki her başarı, bir araya gelmenin ve inanmanın ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Balkan Savaşları'ndan bu yana Geçkinli'ye sahip çıkanlara minnettarız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gurbetteki Geçkinli’liler! Kalbinizdeki köy özlemi, size güç versin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Doğayı korumak, toprağımıza olan saygımızın bir göstergesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mayıs; yazın coşkusuna bir davettir. Hazırlıklar başlasın!",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençliği; sağlıklı, eğitimli ve vatansever olmalıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Mayıs biter, Hasat ayı kapıda. Şimdi kolları sıvama vakti.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Haziran'ın sıcaklığı, tarlalarımızın bereketini artırsın. Hayırlı hasatlar!",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // HAZİRAN 2026: HASAT ÖNCESİ EMEK VE VİCDAN (30 Gün) - İndeks 151-180
      // ==================================================================================================
      {
        "metin": "Haziran; hasat öncesi son düzlük, emeğimizin karşılığını alacağımız aydır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarlada ter döken her köylü, ekmeğini taştan çıkaran kahramandır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Haziran güneşi yakar; ama o yakıcılık, mahsulümüzü olgunlaştırır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Emek; vicdanımızdır. Helal kazancın tadı, hiçbir şeyde yoktur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'de yaz demek; erken kalkmak, çok çalışmak ve şükretmek demektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki her başarılı hasat, bilginin, tecrübenin ve azmin ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şimdi doğayla uyum içinde olma zamanı. Toprak ne isterse, onu vermeliyiz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gençlerimiz! Tarladan kaçmayın. Toprakla kurulan bağ, en sağlam bağdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Babalar Günü kutlu olsun! Geçkinli'nin babaları; sabır, emek ve dürüstlüğün timsalidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir Trakyalı babanın eli; hem nasırlı hem de şefkatlidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hasat yaklaştıkça, heyecanımız ve umudumuz artıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün birlik ve beraberliği, hasat döneminde daha da güçlenir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köy hayatının ritmi; mevsime, toprağa ve emeğe göre değişir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Haziran ayının her günü, emeğimizin karşılığını beklediğimiz bir dua gibidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kışın soğuğunu unutturan şey, yazın emeği ve sıcaklığıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçmişin zorlukları, bugünün konforunun kıymetini bilmemizi sağlar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bize bu toprakları vatan yapan tüm şehit ve gazilerimize minnettarız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki her damla alın teri, bereketin ve helal kazancın simgesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çiftçilik; sabır, tecrübe ve doğayı okuma sanatıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Haziran'ın uzun günleri; bize çalışmak için daha çok zaman verir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir Trakyalının vicdanı; tarlasına ne ektiğiyle ölçülür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzde huzur; emeğe saygıdan ve adaletten geçer.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Güneş ne kadar yakarsa yaksın, alın terimiz kutsaldır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Doğru zamanlama, bereketin yarısıdır. Şimdi dikkatli olma vaktidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyden yetişen, ancak gurbetteki her Geçkinli’li, köyünü yüreğinde taşır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Birlik olduğumuz sürece, en zorlu hasat bile kolaylaşır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri! Bu topraklar size atalarınızdan mirastır, ona sahip çıkın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Haziran biterken, bereketin doruk noktası olan Temmuz'a hazırlanıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yaz ortası geldi. Şimdi kurbanın ve hasatın heyecanı birleşiyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hayırlı Kurban Bayramları! Paylaşmanın bereketi, tüm köyümüze yayılsın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // TEMMUZ 2026: HASAT VE PAYLAŞIM (31 Gün) - İndeks 181-211
      // ==================================================================================================
      {
        "metin": "Temmuz; hasat, paylaşım ve emeğin karşılığını almanın en yoğun yaşandığı aydır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hayırlı Kurban Bayramları! Geçkinli'de bayram demek; paylaşmak, birleşmek ve şükretmek demektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayram coşkusu, hasat sevincine karıştı. Bu bereket hepimize yetsin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kurbanın ruhu; zorluklara sabır, bollukta şükürdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Temmuz güneşi kavurur; ama o güneş, tarladaki emeğimizi altın sarısına çevirir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Birlik ve beraberlikle harman yerinde ter dökmek, Geçkinli'nin ruhudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Alın teri, bereketin en güzel kokusudur. Tüm çiftçilerimize kolaylıklar diliyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün her bir tahıl tanesi, bir yıllık emeğin ve duaların ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hasat zamanı; kimsenin aç kalmadığı, herkesin paylaştığı zamandır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Temmuz'un sıcaklığı, bize geçmişte yaşanan zorlu göç günlerini hatırlatır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki hasat, sadece tarımsal bir faaliyet değil; kültürel bir ritüeldir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "15 Temmuz ruhu; Geçkinli'de vatan sevgisinin ve demokrasinin gücüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Demokrasiye ve milli iradeye sahip çıkan aziz milletimize şükran borçluyuz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "15 Temmuz Demokrasi ve Milli Birlik Günü'nde tüm şehitlerimizi rahmetle anıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hasat bereketi; tarladan sofraya uzanan şükran hikayesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzde huzur; birliğimizin ve kardeşliğimizin ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Trakya'da yaz, çalışmanın ve toprağın karşılığını vermesinin mevsimidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin gururu; zorluğa direnen ve asla pes etmeyen insanıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Buğdayın olgunlaşması gibi, sabırla beklenen her emek karşılığını bulur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gurbetteki evlatlarımız! Köyünüzdeki bereketli hasadı yüreğinizde hissedin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çiftçilerimiz; köyümüzün ekonomisinin ve geleceğinin temelidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Paylaşmak; bereketi artırır. Sofralarımızdaki bolluk, tüm köyün ortak eseridir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Temmuz'un sonu; emeğin en tatlı yorgunluğudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün gençleri! Toprak sevgisini ve çalışkanlığı atalarınızdan miras alın.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Birlik olduğumuz sürece, sırtımız yere gelmez.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin bereketi, tüm Trakya'ya örnek olsun.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarlada izi olanın, harmanda yüzü olur. Alnımız ak, gönlümüz rahat.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ağustos kapıda. Milli zafer ayına ve şükran coşkusuna hazırlanıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Temmuz yorgunluğu, Ağustos'un zafer coşkusuyla tatlanacaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şükürler olsun, emeğimiz boşa gitmedi. Yeni ayda Zafer Bayramı'nı kutlayacağız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hasat bereketiyle Zafer ayına giriyoruz. Her şey vatan için!",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // AĞUSTOS 2026: ZAFER VE ŞÜKÜR (31 Gün) - İndeks 212-242
      // ==================================================================================================
      {
        "metin": "Temmuz’un yorgunluğu, Ağustos’un bereketiyle tatlanır. Şükürler olsun, emeğimiz boşa gitmedi.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ağustos güneşi yakıcıdır; ama o güneş, tarlalarımıza altın rengini veren cömert bir güneştir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gerçek zafer, toprağını huzurla ekip biçebilmektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan toprağını savunmak ne kadar kutsalsa, onu işlemek de o kadar onurlu bir görevdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün Kolluk Kuvvetleri: Onlar, tarladaki huzurun nöbetini tutan gizli kahramanlarımızdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Dün canını verenlere şükran, bugün ekmeğini kazananlara şükürler olsun.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her hasat bir zafer, her tohum bir başlangıçtır. Hayat bu döngüde anlam bulur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Toprağın dilini bilen, şükretmenin ne demek olduğunu da iyi bilir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Zaferin sırrı, cephede olduğu gibi harman yerinde de birlik olmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımızın Balkanlardan buraya taşıdığı azim, her milli zaferde yeniden canlanır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gurur Köşesi'ndeki her isim, Geçkinli'nin zaferler zincirindeki birer halkadır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Anadolu'nun her köşesi gibi, Trakya toprağı da kanla sulanmış bir şükran yurdudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yorgunluk, emeğin kanıtıdır; zafer, azmin sonucu.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En büyük zafer, barışı daim kılmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki dayanışma, en zorlu savaşları bile kazanmamızı sağlayacak ruhtur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kişisel başarılar, milli zaferlerin küçük ama önemli bir parçasıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şehitlerimizin ruhuna sözümüz var: Bu vatan sonsuza dek bizim kalacak.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hasat bitse bile, bereket dualarımız eksik olmaz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "30 Ağustos'a doğru ilerlerken, milli iradenin gücünü kalbimizde hissediyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Özgürlük, atalarımızın kanıyla satın alınmış en değerli mirastır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kahramanlık, sadece cephede değil; zor günde köyüne sahip çıkmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Zaferin mimarı Atamızı minnet ve saygıyla anıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan sevgisi; Geçkinli'nin her tarlasında, her taşında gizlidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şükür ve onurla, Büyük Zafer'in yıl dönümüne hazırlanıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Zafer bize büyük bir miras bıraktı: onu koruma sorumluluğu.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Büyük Taarruz'un başlangıcı! Köklü tarihimizden gelen zafer ruhuyla.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En büyük cesaret, zor şartlarda dahi umudu kaybetmemektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayrağımız, şehitlerimizin ruhunu ve zaferin rengini taşır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yarın, milletimizin bağımsızlık aşkının en büyük kanıtını kutlayacağız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "30 Ağustos Zafer Bayramımız kutlu olsun! Zaferin coşkusu, Geçkinli'nin huzurunda daim olsun.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ağustos biter, hasat kalkar; ama Zafer'in gururu, kalplerimizde baki kalır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // EYLÜL 2026: HÜZÜN VE OKULA DÖNÜŞ (30 Gün) - İndeks 243-272
      // ==================================================================================================
      {
        "metin": "Ağustos'un sıcaklığı biter, Eylül'ün hüznü başlar. Tarlalar dinlenmeye, gönüller vedaya hazırlanır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Son hasat tohumları toplandı. Şimdi toprağa teşekkür etme ve yeni ekim için hazırlanma vakti.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzde dökülen her yaprak, bir yılın yorgunluğunu geride bırakmanın işaretidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yazlık neşemizin yerini, okula giden çocukların heyecanlı sesleri alıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eylül, sadece son değil; eğitim hayatında yepyeni bir başlangıç demektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okumak için köyden ayrılan her genç, Geçkinli'nin uzaklardaki umut elçisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Giden çocuklarımızın boşluğunu, bir sonraki yaz için kurulan büyük hayaller doldurur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okula dönüş, köyümüzün öğretmenlerine duyduğumuz büyük saygının ifadesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Zaferin sırrı, cephede olduğu gibi harman yerinde de birlik olmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan toprağının ne kadar zor kazanıldığını en iyi bilenler, gazilerimizdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çiçekler güneşe veda ederken, kışa hazırlıklarımız da hızlanır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "19 Eylül'e yaklaşıyoruz. Köyümüzün gazilerine ve tüm fedakarlara minnet borçluyuz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okumak, sadece bilgi değil; köyümüze daha iyi hizmet etme bilinci kazanmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'de sonbaharın rengi; sarı, turuncu ve her şeye rağmen yeşilin umududur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gazilerimizin mücadele ruhu, gençlerimize en büyük derstir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bu topraklarda huzurla yaşamak, Gazilerimizin ödediği bedelin karşılığıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gazilere gösterilen saygı, vatan sevgisinin en somut ifadesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Onlar, yaşamları boyunca vatanı savunanlardır. Onların onuru, köyümüzün onurudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "19 Eylül Gaziler Günü kutlu olsun. Geçkinli Şehitliği'ndeki ruh, Gazilerimizde yaşar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gazilerimiz, tarihimizin canlı tanıklarıdır. Onların hikayeleri asla unutulmamalıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Okullar açıldı, hasat bitti, şimdi kışlık erzak hazırlığı ve dayanışma vakti.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Sonbahar Ekinoksu; gündüzle gecenin eşitliği, köy hayatında dengeyi bulma vaktidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzün geleceği, okula giden çocukların defterlerindeki notlarla yazılıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Acı Çeşme'den su içen herkes, Balkan Savaşları'nın izlerini ve gazilerimizin direncini hissetmelidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ne kadar yüksekte olursan ol, daima geldiğin köyü ve köklerini hatırla.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımızın göç azmi, Gazilerimizin cesareti ve çocuklarımızın ilim aşkı; Geçkinli'nin mirasıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köy, sadece evlerden ibaret değildir; birbirine kenetlenmiş insanların yuvasıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Huzur, Gazilerimizin bize hediye ettiği en büyük güvendir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eylül veda ediyor; arkasında bol hasat ve yeni bir öğrenme coşkusu bırakarak.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eylül biterken, kalbimiz Gazilerimizin ve çocuklarımızın sevgisiyle doludur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // EKİM 2026: ŞEHİTLERİ ANMA VE VATAN SAVUNMASI (31 Gün) - İndeks 273-303
      // ==================================================================================================
      {
        "metin": "Ekim rüzgarları, sadece yaprakları değil; tarihimizin unutulmaz hatıralarını da fısıldar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli toprağı, Balkanlardan buraya umutla gelenlerin ve vatan için şehit düşenlerin kanıyla sulanmıştır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki Şehitlik, sadece bir mezarlık değil; hürriyetimizin sonsuz anıtıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan savunması, geçmişin en büyük mirası, geleceğin en büyük güvencesidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gerçek kahramanlık, canını vatanı için tereddütsüz feda edebilmektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kurtuluş sadece büyük şehirlerde değil, her köyün kalbinde kazanılan bir zaferdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ekim ayı, bize topraklarımızda yaşanan büyük acıları unutmama sorumluluğunu yükler.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımız dedi ki: Vatan, uğruna ölen varsa vatandır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Cumhuriyetin temeli, Geçkinli gibi direnen küçük yerleşimlerin büyük fedakârlıklarında atılmıştır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kışın soğuğu başlamadan önce, yüreğimizdeki vatan sevgisi bizi ısıtır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şehitlerimizin bize emaneti olan bu topraklara onurla sahip çıkıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köklerimizi ne kadar iyi bilirsek, Cumhuriyetimize o kadar sıkı sarılırız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ankara başkent oldu; ama Geçkinli, vatanın sınır taşı olmaya devam etti.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her bir şehidimizin fedakârlığı, bugün köylülerimizin huzurudur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Balkan Savaşları'nın izleri silinse bile, Şehitliğimizdeki ruhu daima tazedir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Askerimiz ve polisimiz; onlar, dün şehitlerin yattığı toprakların bugünkü nöbetçileridir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şehitlere olan vefa borcu, Cumhuriyetimize bağlılıkla ödenir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Büyük bayrama yaklaşıyoruz. Kalbimiz vatan sevgisiyle çarpıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Düşmanın Geçkinli topraklarına girdiği o zorlu günleri unutmayacağız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şehitlerimizin ortak acısı, bizi birleştiren en güçlü bağdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Trakya'nın zorlu coğrafyasında, bağımsızlık ateşi hiç sönmedi.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Balkan Savaşları'nda köyümüz ve çevresinde yaşanan mücadelede hayatını kaybedenleri saygıyla anıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Cumhuriyet, bize şehitlerimizin kanıyla verilen bir armağandır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çocuklarımız, şehitlerimizin hayal ettiği o aydınlık geleceğin ta kendisidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En büyük miras, vatan sevgisi ve Cumhuriyeti koruma vasiyetidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayram coşkusunu, şehitlerimize duyduğumuz minnetle birleştiriyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Egemenlik kayıtsız şartsız milletindir. Köyümüzün her ferdi bu onurun sahibidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yaşasın Cumhuriyet! Yarın, bu topraklardaki bağımsızlığımızı kutluyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "29 Ekim Cumhuriyet Bayramımız kutlu olsun! Şehitlerimizin ruhu şad olsun!",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bayrağımız, şehitlerimizin al kanından aldığı rengi, sonsuza dek gururla taşır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Ekim ayı biterken; Cumhuriyetimize bağlılık, şehitlerimize minnet daima taze kalır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // KASIM 2026: ANMA VE ŞÜKRAN (30 Gün) - İndeks 304-333
      // ==================================================================================================
      {
        "metin": "Kasım, toprağın huzurla dinlendiği, bizim ise kışa şükranla hazırlandığımız aydır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hasatın bereketiyle kurulan sofralar; sadece karnımızı değil, ruhumuzu da doyurur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Büyük anma gününe yaklaşırken, Atatürk'ün ilke ve inkılapları yolumuzu aydınlatıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vefa, sadece anmak değil; Atamızın bize bıraktığı Cumhuriyet'e layık olmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki şükür yemeği, bizi bir arada tutan en güçlü toplumsal bağdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atatürk'ün dediği gibi: En hakiki mürşit ilimdir. Köyümüzün geleceği ilimle kurulacaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kasım ayı, geçmişi düşünmek, geleceği planlamak için en uygun zamandır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "10 Kasım yaklaşıyor. Kalbimiz hüzünle, aklımız ise minnetle dolu.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yarın, Türkiye Cumhuriyeti'nin kurucusuna duyduğumuz sonsuz saygıyı göstereceğiz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "10 Kasım: Fikirleri yolumuzu aydınlatan Büyük Önder Mustafa Kemal Atatürk'ü rahmet, minnet ve saygıyla anıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atatürk'ün en büyük mirası, bağımsızlık aşkı ve bilimin yoludur.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gerçek lider, sadece ülkesini değil; bir köyün dahi kaderini değiştirendir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Köyümüzdeki her okur yazar, Atamızın başlattığı eğitim seferberliğinin ürünüdür.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eğitim, köylerimize ışık olmalıdır. Okul, tarlayla birleştiğinde gerçek gelişim başlar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şükran; sadece aldıklarımız için değil, ihtiyacı olanla paylaşabildiğimiz için hissedilir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımız göç yollarında bile umudu yitirmedi. Bu azim, bize Atatürk'ten mirastır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'nin 'Gurur Köşesi', Atamızın aydınlanma ilkesinin köyümüzdeki yansımasıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kasım soğuktur, ama bir araya gelen Geçkinli ailesinin yüreği sıcaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarlalar dinlenirken, biz de zihnimizi ve bedenimizi dinlendirip güç toplamalıyız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Çocuklarımızın aydınlık geleceği, Atamızın onlara emanet ettiği en büyük haktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atatürk'ü en iyi anma şekli, onun fikirlerini ve ilkelerini yaşatmaktır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kasım güneşi kısa süreliğine çıksa da, verdiği enerji tüm kışı ısıtmaya yeter.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Vatan toprağına bağlılık, Atatürk'ün en temel değerlerinden biriydi.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Başöğretmenimizin izinde yürüyen, geleceğimize ışık tutan tüm öğretmenlerimizin günü kutlu olsun!",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir köyün en değerli varlığı, bilgiyi ve ahlakı öğreten öğretmenidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Şükür sofraları, komşuluk ve dayanışma ruhumuzu güçlendirir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kasım ayının hüznüne inat, kalbimizde daima taze bir umut taşırız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hayatta en doğru yol gösterici akıl ve bilimdir. Köyümüz bu yolda yürüyecektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yurtta sulh, cihanda sulh ilkesi, Geçkinli'nin dünyaya mesajıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kasım biterken; anılarımızı, şükranımızı ve Atamızın sevgisini yanımızda götürüyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      // ==================================================================================================
      // ARALIK 2026: DAYANIŞMA VE YIL SONU MUHASEBESİ (31 Gün) - İndeks 334-364
      // ==================================================================================================
      {
        "metin": "Aralık geldi. Dışarısı ne kadar soğuk olursa olsun, içimizdeki dayanışma ateşi hiç sönmesin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Gerçek zenginlik, kışın en zorlu günlerinde komşunun derdine ortak olabilmektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli'de kışı atlatmanın sırrı; yediğimiz ekmekte değil, paylaştığımız sobanın sıcaklığındadır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bir yıl geçti. Köyümüz için ne ektik, ne biçtik? Şimdi dürüstçe bakma vakti.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hatalarımız, gelecek yıl daha iyi işler yapmamız için bize yol gösteren fenerdir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kışın en kısa günlerinde, bilgi ışığımız en parlak haliyle yanar.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Soğuk kış günlerinde bir ihtiyaç sahibine uzatılan el, tüm köyü ısıtmaya yeter.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yaşlılarımız; köyümüzün yaşayan tarihidir. Kışın onlara gösterdiğimiz özen, geçmişe saygımızdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçkinli demek; zorluklara karşı birlik olmuş, köklerine bağlı bir aile demektir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Dayanışma, en temel insan hakkıdır. Herkesin sıcak ve güvende olma hakkı vardır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Geçen yılın muhasebesini yaparken, gelecek yıla daha güçlü olma sözü veriyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kış ne kadar uzun sürerse sürsün, sabrımız ve umudumuz hiç tükenmez.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Her çatı, sadece bir ev değil; birbirine kenetlenmiş bir ailenin sığınağıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En karanlık gecelerin bile ardından güneş doğar. Umut, Geçkinli'nin kışıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Tarlalar dinlenirken, biz de sırtımızı dayayıp, bir yılın emeğinin keyfini çıkarma vakti.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yılbaşı yaklaşıyor. Gurbetteki evlatlarımızın kalbi de köyümüzle atıyor.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Aldığımız her nefese, kurulan her sofraya ve yaşadığımız her güne şükrediyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Kışın tüm zorluğuna rağmen, köy çocuklarının neşesi, her zaman en büyük enerji kaynağımızdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Aralık, bize Ocak ayındaki başlangıç azmimizi hatırlatır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımız bu kışı, zorlu göç yollarını aşarak buraya gelmek için göze almıştı. Bizim içinse bir dinlenme vaktidir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "En uzun gece bitti. Artık günler uzayacak, umutlar yeşerecek.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yıl bitmeden, gelecek yıl için hedeflerimizi belirleyelim. Geçkinli hep ileriye bakmalıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Unutmayın; en güçlü kar fırtınası bile, birbirine kenetlenen bir topluluğu yıkamaz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Eski yılı geride bırakırken, yeni yıla tertemiz bir sayfa açma coşkusu yaşıyoruz.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Hangi inançtan olursak olalım, barış ve iyilik dilemek hepimizin ortak değeridir.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yeni yıl, dostluklarımızı tazelememiz ve kırgınlıkları unutmamız için bir fırsattır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Bu yıl emeği geçen herkese, köyümüze hizmet eden her ferde minnettarız.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Atalarımızın göç azmi, yeni yıl umutlarımız için en büyük ilham kaynağıdır.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "2027 yılı, Geçkinli için sağlık, huzur ve bereket getirsin.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Yılın son günlerinde, gönlümüzü hafifletip, yeni yıla umutla girelim.",
        "yazar": "geckinlikoyu.blogspot.com"
      },
      {
        "metin": "Elveda 2026, Hoş geldin 2027! Geçkinli Ailesi olarak; Yeni Yılınız Kutlu Olsun!",
        "yazar": "geckinlikoyu.blogspot.com"
      }
    ];

    function sozuGoster() {
        var now = new Date();
        var currentYear = now.getFullYear();

        // Sadece 2026 yılındaysak sözleri gösterme mantığını çalıştır
        if (currentYear === 2026) {
            // Yılın başlangıcından o güne kadar geçen gün sayısını hesapla
            var startOfYear = new Date(currentYear, 0, 1); // 1 Ocak
            var diff = now - startOfYear;
            var oneDay = 1000 * 60 * 60 * 24;
            // dayIndex, yılın kaçıncı günü olduğunu (0'dan başlayarak) verir.
            var dayIndex = Math.floor(diff / oneDay); 

            var gun = now.getDate();
            var aylar = ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"];
            var ayAdi = aylar[now.getMonth()];
            
            // 1. Tarih başlığını ayarla
            var tarihMetni = gun + " " + ayAdi + " " + currentYear;
            document.getElementById("gününTarihi").innerHTML = tarihMetni;

            // 2. Sözü dayIndex ile bul
            if (dayIndex >= 0 && dayIndex < sozler.length) {
                var secilenSoz = sozler[dayIndex];
                document.getElementById("gününSozuMetni").innerHTML = '"' + secilenSoz.metin + '"';
                document.getElementById("gününSozuYazari").innerHTML = secilenSoz.yazar;
            } else {
                // Söz listesi 365 günden eksikse veya bir hata oluşursa
                document.getElementById("gününSozuMetni").innerHTML = 'Bugün için Günün Sözü listesi bulunmamaktadır.';
                document.getElementById("gününSozuYazari").innerHTML = 'geckinlikoyu.blogspot.com';
            }
        } else {
            // Eğer yıl 2026 değilse (Örn: Şu an 2025'te veya 2027'de isek)
            document.getElementById("gününTarihi").innerHTML = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
            document.getElementById("gününSozuMetni").innerHTML = 'Bu bölüm sadece <b>2026 yılı</b> için tasarlanmış özel sözleri göstermektedir.';
            document.getElementById("gününSozuYazari").innerHTML = 'geckinlikoyu.blogspot.com';
        }
    }

    // Sayfa yüklendiğinde sözü göster
    window.onload = sozuGoster;
</script>
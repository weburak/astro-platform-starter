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
    ""yazar": "geckinlikoyu.blogspot.com"
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
    "metin": "Şimdi paylaştıkça çoğalan bir hasat dönemindeyiz. Komşuluk hakkını unutmayalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "15 Temmuz ruhu; bu topraklara olan bağlılığımızın ve demokrasiye olan inancımızın simgesidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Vatan savunması, sadece cephede değil; tarlada üretimle de yapılır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "15 Temmuz Demokrasi ve Milli Birlik Günü'nde tüm şehitlerimizi saygıyla anıyoruz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzde huzur, milletimizin birlik ve beraberliğinde saklıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Tarım, vatanın can damarıdır. Üretmek, milli duruştur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Hasat biter, şükür başlar. Rabbim, emeğimizin karşılığını fazlasıyla verdi.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Trakya’nın sıcakları, Geçkinli’nin bereketine engel olamaz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki eski usul hasat yöntemleri, geçmişe duyulan saygının ifadesidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gurbetteki evlatlarımız! Tatile gelin, köyünüzün hasat coşkusuna ortak olun.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Temmuz ayı, yılın en uzun ve en verimli günleridir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Emeğimizin temizliği, kazancımızın helalliğidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki her komşu yardımı, dayanışma kültürünün en güzel örneğidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Hasat sonrası tohumu depolamak, geleceğe yatırım yapmaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yaz aylarında gençlerimizin köyde olması, bize büyük bir enerji katıyor.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Toprak; dürüst, sabırlı ve çalışkan olanı asla aç bırakmaz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Temmuz; şükran ayıdır. Sahip olduğumuz her şey için Rabbimize teşekkür edelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Bilimle geleneksel bilgeliği birleştirin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Temmuz'un sonu, yazın bitişi değil; zaferin başlangıcıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Zaferin ayak sesleri Ağustos'tan geliyor. Şimdiden hazırlanalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağustos; sıcağıyla, hasatın son ürünleriyle ve zafer coşkusuyla geliyor.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Sıcaklara dikkat! Tarlada çalışırken sağlığımızı koruyalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Temmuz'u bereketle uğurluyoruz. Ağustos'ta daha nice güzel günler!",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  // ==================================================================================================
  // AĞUSTOS 2026: ZAFER VE SIFIR ATIK BİLİNCİ (31 Gün) - İndeks 212-242
  // ==================================================================================================
  {
    "metin": "Ağustos; hasatın son demleri, yazın son sıcakları ve büyük zaferin coşkusudur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "30 Ağustos Zafer Bayramımız kutlu olsun! Bu zafer, Geçkinli'nin de zaferidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Büyük Taarruz'un ruhu, bize toprağımızın her karışının ne kadar değerli olduğunu hatırlatır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri, şanlı tarihimizi onurla taşıyacaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Zafer, sadece savaşta değil; tarlada, okulda ve hayatın her alanında kazanılır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Sıfır atık bilinci: Toprağımızı, suyumuzu ve geleceğimizi korumak demektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Çiftçilerimiz; atık yönetimi ve su tasarrufu konusunda bilinçli olmalıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün çevresi, hepimizin ortak sorumluluğudur. Temiz tutalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gelecek nesillere, temiz bir çevre bırakmak boynumuzun borcudur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Trakya doğası, eşsizdir. Onu korumak, köklerimize sahip çıkmaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağustos sıcakları, bizi su tasarrufu ve çevre bilinci konusunda uyarır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki her ev, sıfır atık hedefine katkıda bulunabilir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Plastik atıklar, doğanın sessiz düşmanıdır. Geri dönüşüme önem verelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Bir Trakyalı, toprağın kıymetini en iyi bilendir. Ona iyi davranalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Çevre bilinci konusunda lider olun.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Zafer Bayramı coşkusu, çevre bilinciyle taçlanmalıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün yeşili ve suyu, bizim en büyük doğal mirasımızdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağustos; hasat sonrası, dinlenme ve gelecek yılın planlarını yapma ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Toprak; bize ne verirsek, iki katını geri verir. Onu zehirlemeyelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Birlik olduğumuz sürece, çevre sorunlarının üstesinden gelebiliriz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağustos'un son günleri, yazın son tatil fırsatlarıdır. Değerlendirin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzden ayrılanlar! Gittiğiniz yerde Geçkinli'nin temizlik ve düzenini temsil edin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gurbetteki gençler! Köyünüze her geldiğinizde, çevre temizliğine dikkat edin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki eski eşyaları atmadan önce, geri dönüşüm veya yeniden kullanma yollarını araştıralım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Doğayı seven, vatanını sever. Çevre bilinci, vatanseverliktir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağustos; zaferle, bereketle ve umutla biter.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül kapıda. Okul dönemi başlıyor ve sonbahar huzuru geliyor.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Sonbahar; köyümüzün renklerini değiştirir, ama ruhunu asla.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Toprağın bize öğrettiği ders: Her hasattan sonra, dinlenme ve yenilenme başlar.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yeni bir mevsim, yeni bir başlangıç. Eylül'ün huzuruna hazırız.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağustos'un sıcaklığını kalbimizde, zaferin coşkusunu ruhumuzda taşıyalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  // ==================================================================================================
  // EYLÜL 2026: DÜZEN VE EĞİTİM YENİDEN (30 Gün) - İndeks 243-272
  // ==================================================================================================
  {
    "metin": "Eylül; sonbaharın başlangıcı, okulların açılması ve yeni bir düzen kurma ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Okullarımız açılıyor! Geleceğimizin teminatı olan çocuklarımıza başarılar diliyoruz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eğitim, köyümüzün geleceğe uzanan en sağlam köprüsüdür.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Çocuklarımızın okul masrafları, köyün en kutsal yatırım harcamasıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Toprakta düzen, hayatta düzen. Planlı olmak, başarıyı getirir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül; yazın getirdiği bereketi depolama ve kışa hazırlanma ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki her genç, ailesinin ve Geçkinli'nin gururudur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eğitim; kişiyi özgürleştirir, köyü kalkındırır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Sonbaharın ilk rüzgarı, bize dinginliği ve çalışmaya devam etme azmini getirir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyde yaşayan her büyük, gençlere aktarılacak dev bir bilgi birikimine sahiptir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül; tarlada son işler, okulda ilk dersler demektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yeni eğitim-öğretim yılı, tüm öğretmenlerimize ve öğrencilerimize hayırlı olsun.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki okul, sadece bir bina değil, geleceğimizin atölyesidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül'ün huzuru; çalışmanın, dinlenmenin ve şükrün dengesidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Toprağımızı korumak, onu bilinçli bir şekilde işlemekle başlar.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Geçkinli'nin kültürünü ve tarihini yaşatmak, hepimizin görevidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyden yetişen, ancak şehre göç edenler! Kalbinizdeki köy sevgisini yitirmeyin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Sonbahar renkleri; Geçkinli'nin çeşitliliğini ve güzelliğini simgeler.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Teknolojiyi öğrenin, ama ahlakınızı kaybetmeyin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül'de atılan yeni adımlar, tüm yıla etki edecektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağaçlar yaprak döker, ama umutlarımız daima yeşil kalır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Trakya'nın havası, sonbaharda bile ayrı güzeldir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Bir köyün zenginliği, gençlerinin merakında ve öğrenme arzusunda saklıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül'ün bereketi; tarladan depoya, okuldan geleceğe taşınır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki birlik ruhu, mevsim değişikliklerine karşı en güçlü kalkanımızdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Vatan sevgisi; köye hizmetten, eğitime destek vermekten geçer.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül'ün sonu, kışa hazırlık demektir. Tedbirli olalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Cumhuriyet coşkusu Ekim'de. Şimdiden kalbimizi hazırlayalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eylül bitti. Çalışmalarımıza Ekim ayında daha büyük bir azimle devam edelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Okuma sevgisi, hayattaki en uzun ve en verimli yolculuktur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  // ==================================================================================================
  // EKİM 2026: CUMHURİYET VE TARİH BİLİNCİ (31 Gün) - İndeks 273-303
  // ==================================================================================================
  {
    "metin": "Ekim; hasat sonrası dinlenme ve en büyük bayramımız olan Cumhuriyet'e hazırlık ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Cumhuriyetimiz; Geçkinli'nin ve tüm milletimizin en değerli kazanımıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Atatürk'ün bize emanet ettiği bu topraklara sahip çıkmak, en büyük görevimizdir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Tarih bilinci: Geçmişi öğrenmek, hataları tekrarlamamak demektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün kökleri, Balkan Savaşları'ndan bu yana uzanan acı ve gurur dolu bir hikayedir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Balkan Göçmenleri olarak, bize vatan olan bu topraklara minnettarız.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ekim; kışa hazırlık, kışlık erzakları depolama ve tohumları koruma ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzde huzur; birliğimizde, beraberliğimizde ve Cumhuriyet'in güvencesinde saklıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ekim'in sarı renkleri; doğanın döngüsünü, hayatın devamlılığını hatırlatır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Cumhuriyet'in değerlerini sonsuza dek yaşatın.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "29 Ekim coşkusu, Geçkinli'nin her evinde yaşanmalıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Cumhuriyet Bayramımız kutlu olsun! Egemenlik daima milletindir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki okullar, Cumhuriyet'in bize sunduğu en büyük hediyedir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Tarihimizi bilmek, geleceğimizi doğru inşa etmek için şarttır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ekim ayında atılan her adım, kışa hazırlık ve tedbir demektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köylü, milletin efendisidir. Bu söz, Cumhuriyet'in temelini oluşturur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün büyükleri! Gençlere tarih bilincini aşılayın.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Toprağa sahip çıkmak, Cumhuriyete sahip çıkmaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ekim'in serinliği, bizi kışın soğuklarına hazırlar.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gurbetteki Geçkinli’liler! Bayram coşkusunu kalbinizde yaşatın.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Bir köyün en büyük gücü, gençlerinin eğitime ve tarihe olan bağlılığıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki yardımlaşma geleneği, tarihimizden gelen dayanışma kültürümüzdür.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Cumhuriyet, kadınlarımıza hak ettiği değeri veren en büyük devrimdir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki her başarılı öğrenci, Cumhuriyet'in yarınki yöneticisidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ekim ayı biterken, kışa girerken bile kalbimiz umutla doludur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım'da hüzün olsa da, Atatürk'ün anıları bize güç verecektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Huzurlu bir kış için, son hazırlıkları tamamlayalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençliği; bilimle, sanatla ve tarih bilinciyle yetişmelidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ekim'in son günleri, yeni bir ayın ve yeni bir başlangıcın habercisidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım; saygı, minnet ve kışın sessizliğinde düşünme ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Atatürk'e duyduğumuz saygı, vatan sevgimizin temelidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  // ==================================================================================================
  // KASIM 2026: SAYGI VE KÜLTÜR (30 Gün) - İndeks 304-333
  // ==================================================================================================
  {
    "metin": "Kasım; Atatürk'e ve tüm geçmişlerimize duyulan saygı ve minnet ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "10 Kasım'da saygıyla anıyoruz. Atatürk, sadece bir lider değil, bir ulusun yol göstericisidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Atatürk'ün mirası; bilim, akıl ve çalışkanlıktır. Ona sahip çıkalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki gençler! Atatürk'ün çizdiği çağdaş yolda ilerleyin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kültürümüz; göçle gelenlerin azmi ve Trakya'nın misafirperverliğiyle harmanlanmıştır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki eski gelenekler, bizim kimliğimizdir. Onları yaşatalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım'ın soğukları, bizi birbirimize daha çok yaklaştırır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Öğretmenler Günü kutlu olsun! Köyümüzün öğretmenleri, geleceğimizin mimarlarıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Bir köyün en büyük zenginliği, bilgili ve fedakar öğretmenleridir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım; kış uykusuna yatmadan önce, kendimize ve değerlerimize dönme ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki her büyük, bir bilgelik kaynağıdır. Onların tecrübelerini dinleyelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Trakya kültürünün sıcaklığı, Kasım'ın ayazını unutturur.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Ağaçların yaprakları dökülürken, hayatın döngüsüne şahit oluyoruz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Vatan sevgisi, Atatürk'ün gösterdiği yoldan sapmamaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Kültürünüzü koruyun, çağdaşlaşmaktan vazgeçmeyin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım'ın bereketi; kışlık erzaklarımızda ve kalbimizdeki sıcaklıktadır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün geçmişi, bize zorluklarla nasıl başa çıkacağımızı öğretir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gurbetteki Geçkinli’liler! Köyünüzün kültürünü yaşadığınız yere taşıyın.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Eğitime yatırım yapmak, Atatürk'ün en büyük vasiyetidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki huzur, köklü kültürümüzden ve saygıdan gelir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım'ın son günleri, kışın en yoğun dönemi olan Aralık'a hazırlık demektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yeni bir yıla hazırlanırken, geçmiş yılımıza şükran duyalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık kapıda. Kışın en uzun gecesine ve yeni yıl umutlarına hazırlanıyoruz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençliği; spora, sanata ve bilime yatırım yapmalıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım ayı; kendimize, ailemize ve köyümüze ayırdığımız kıymetli zamandır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Atatürk'ün devrimleri; Geçkinli'nin de aydınlık geleceğinin temelidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kültürümüzü yaşatmak, en az tarlayı sürmek kadar önemlidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kasım biterken; kalbimizdeki minnet ve saygı, kış boyu bizi ısıtacaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık; yılın muhasebesi ve yeni umutların yeşerdiği aydır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Hoş geldin Aralık! Köyümüzde kışın güzelliği başlıyor.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  // ==================================================================================================
  // ARALIK 2026: MUHASEBE VE YENİ YIL UMUDU (31 Gün) - İndeks 334-364
  // ==================================================================================================
  {
    "metin": "Aralık; yılın son ayı, muhasebe yapma ve yeni yıl umutlarını yeşertme ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzde kış, en güzel birlik ve beraberlik zamanıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yılın son günleri, geçmişin derslerini alıp geleceğe bakma vaktidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık ayazı; bize, atalarımızın göç yolundaki zorlukları hatırlatır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Bir yıl boyunca neler öğrendiğinizi gözden geçirin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kışın sessizliği; tefekkür etme, plan yapma ve dinlenme zamanıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık; komşularımızı ziyaret etme, ihtiyaç sahiplerini görme ayıdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzdeki yardımlaşma geleneği, kışın en sıcak giysisidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Bir Trakyalı için kış; sobanın başında çay, sohbettir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "En uzun gece bile biter. Umut, daima karanlıktan sonra doğar.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençleri! Yeni yılda hedeflerinizi büyük tutun.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yılın son hasadı: Vicdanımızın huzuru, en büyük kazancımızdır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gurbetteki evlatlarımız! Yeni yıla köyünüzün huzuruyla girin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık; doğanın dinlendiği, bizim ise gelecek yılın planlarını yaptığımız aydır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzde huzur; dürüst, çalışkan ve vefalı olmaktan gelir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yeni bir yıl, yeni umutlar demektir. Geçmişi geride bırakalım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün sorunları, birlik ve beraberlikle çözülecektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Gençler! Okumayı, araştırmayı ve sorgulamayı asla bırakmayın.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık'ın son günleri, kışın en zorlu günlerine hazırlanmaktır.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Her bitiş, yeni bir başlangıçtır. Yeni yılınız şimdiden kutlu olsun.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "2026'ya veda ederken, 2027'nin Geçkinli'ye bol bereket getirmesini dileriz.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün gençliği! Vatan sevgisiyle, bilimle ve dürüstlükle büyüyün.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Aralık ayında, yıl boyunca elde ettiğimiz başarılara şükredelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzün tarihini, kültürünü ve değerlerini yeni nesillere aktaralım.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Kışın karanlığı, kalbimizdeki umudu asla söndüremez.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yılın son günleri; huzur, aile ve şükranla geçsin.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Köyümüzde yeni yıl; taze umutlar, yeni projeler demektir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "2027 yılı, tüm Geçkinli halkına sağlık, bereket ve mutluluk getirsin!",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yılbaşı gecesi; geçmişi anma, geleceği planlama vaktidir.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Yeni yılın ilk günü, temiz bir başlangıçtır. Köklerimizi unutmadan ilerleyelim.",
    "yazar": "geckinlikoyu.blogspot.com"
  },
  {
    "metin": "Bir yıl biter, bin umut doğar. Geleceğiniz aydınlık olsun.",
    "yazar": "geckinlikoyu.blogspot.com"
  }
];

// ==================================================================================================
// JS YÜRÜTME FONKSİYONU
// ==================================================================================================

function gununSozunuGoster() {
    var now = new Date();
    // NOT: JS'te aylar 0 (Ocak) ile 11 (Aralık) arasında indekslenir.
    
    // Yılın başlangıcını 1 Ocak olarak ayarla
    var start = new Date(now.getFullYear(), 0, 1);
    
    // Geçen milisaniye farkını bul
    var diff = now - start;
    
    // Bir günün milisaniye cinsinden değeri
    var oneDay = 1000 * 60 * 60 * 24;
    
    // Bugünün yılın kaçıncı günü olduğunu bul (0'dan başlar, çünkü 1 Ocak'ı başlangıç olarak aldık)
    // Örneğin, 1 Ocak için Math.floor(0 / oneDay) = 0.
    var dayOfYear = Math.floor(diff / oneDay); 
    
    // Eğer saat 00:00'dan önce çalışıyorsa, bir gün eksik hesaplanabilir. Yuvarlama hatasını önlemek için 
    // veya tam gün sayısını bulmak için ekstra kontrol ekleyelim:
    // Bizim dizimiz 0'dan başladığı ve 365 gün içerdiği için, dayOfYear direkt indeksimizdir.
    var sozIndex = dayOfYear; 

    // Şubat ayının 28 gün çekmesi (2026 artık yıl değil) ve gün sayılarının dizinizle eşleşmesi kontrolü:
    // Sizin diziniz 365 günlük söz içeriyor (0'dan 364'e).
    if (sozIndex >= 0 && sozIndex < sozler.length) {
        var bugununSozu = sozler[sozIndex];

        // HTML elementlerine verileri yazdır
        // İlk olarak "Hazırlayan..." yazan kısmı günün tarihi ile değiştiriyoruz.
        document.getElementById("gününTarihi").innerHTML = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        
        // Söz metnini yazdır
        document.getElementById("gününSozuMetni").innerHTML = bugununSozu.metin;
        
        // Yazar adını yazdır
        document.getElementById("gününSozuYazari").innerHTML = bugununSozu.yazar;
    } else {
        // Hata durumunda (örneğin dizideki söz sayısı yetersizse)
        document.getElementById("gününTarihi").innerHTML = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        document.getElementById("gününSozuMetni").innerHTML = "Bu tarih için söz bulunamadı. Lütfen dizideki gün sayısını kontrol edin.";
        document.getElementById("gününSozuYazari").innerHTML = "Hata: İndeks Dışı";
    }
}

// Sayfa yüklendiğinde fonksiyonu çalıştır
gununSozunuGoster();

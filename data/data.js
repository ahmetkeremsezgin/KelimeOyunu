 // Harf dizisi
 const letters = "ABCDEFGHIJKLMNOPRSTUVYZ";

 // Bilemce kelimeleri
 const wordsOsmanli = [
  "NUKET","YÜZ","TAPU","NAZAR","HAYIR","TECELLİ","MELÜL","NİŞAN","MİSKİN","CEVHER","SEFA","MÜYESSER",
  "ERKAN","REYHAN","ACEB","MUHAMMED","KABİR","KEVSER","DİDAR","ALEM","TEVHİT","HALİS","KATRAN","DİRLİK",
  "SEHER","MÜNKİR","ARİF","MİNBER","MAŞUK","TÖVBE"
 ];

 const wordsAnswerOsmanli = [
 "2. Picasso",
 "Belirme, görünme, ortaya çıkma, meydana çıkma","Üzgün,boyunu bükük...","İz,belirti,evlenmek üzere söz verme...","Çok uyuşuk olan kimse","Bir şeyin özü,iyi yetenek,mücevher", 
 "Rahat,kaygısız ve sakin olma","Kolaylıkla ortaya çıkan.",
  "Bir topluluğu ileri gelenleri,büyükler,üstler,yol yordam","fesleğen.","Merak,kararsızlık veya kuşku anlatan bir söz.","Övülmüş,methedilmiş,güzel huylu,hoşgörülü",
  "Mezar","Cennette bulunuduğuna inanılan kutsal ırmak","Yüz","Bayrak,simge,minare...","Allah'ın birliğine inanma,Allah'ı övmek için yazılan eser","Saf","Damıtma yolu ile elde edilen sıvı",
  "Yaşayış,hayat,sağlık,huzur","Sabahın güneş doğmadan önceki zamanı","İnkâr eden, kabul etmeyen.","Çok anlayışlı ve sezgili","Camilerde hutbe okunan merdivenli, yüksekçe yer.","Sevilen, âşık olunan erkek",
  "İşlediği bir günah veya suçtan pişman olarak bir daha yapmamaya karar verme"
 ];

 const wordsSiirOsmanli = [
 "2. Picasso",
 "Söze tarih yidi yüz yidi yidi-y-idi/Yunus canı bu yolda fidi-y-idi",
 "Tapduğunun tapusunda kul olduk kapusunda/Yunus miskin çiğ idik piştik elhamdülillah",
 "Mevlana Hüdavendgar bize nazar kıldı/Onun görklü nazarı gönlümüzün aynasıdır",
 "Yunus Hak tecellisin senin yüzünde gördü/Çare yok ayrılmağa çün sende göründü Hak",
 "Bülbül ile kargayı bir kafese koysalar/Birbirinin sohbetinden daim melül değil mi",
 "Yedi nişan gerektir hakikate erene/Sevdiği girmez ele sevdikler vermeyince",
 "Aşık olan miskin olur Hak yoluna teslim olur/Her ne dersen boyun tutar çare yok gönül yıkmağa",
 "Çevik bahri olmak gerek bir denize dalmak gerek/Bir gevher çıkarmak gerek hergiz sarraf bilmez ola",      
 "Yaradıldı Mustafa yüzü gül gönlü safa/Ol kıldı bize vefa ondandır ihsan bana",
 "Hak müyesser etse varsam güzel Ka'betullah sana/Bakuban hayranın olsam güzel Ka'betullah sana",
 "İzzet ü erkan kamusu bunkardur dünya sevgisi/Aşktan haber ayıtmasın kim dünya izzetin seve",
 "Gül ü reyhanın kokusu aşıklara ma'şuk yeter/Aşık olanın ma'şuku hergiz önünden gitmeye",
 "Aceb bu benim canım azad ola mı ya Rab/Yoksa yedi tamuda yana kala mı ya Rab",
 "Âşık Yunus neyler dünyayı sensiz/Adı güzel kendi güzel Muhammed",
 "Yâ Rab nola benim hâlim kabre vardığım gece/İyi olmazsa amelim kabre vardığım gece",
 "Rıdvandurur kapı açan hülle donlarını biçen/Kevser şarabını içen kanar Allah diye diye",
 "Miskin Yunus var yârına koma bu günü yarına/Yarın Hakk'ın dîdârına varam Allah diye diye",
 "Onsekiz bin âlem halkı cümlesi bir içinde/Kimse yok birden artık söylenir bir içinde",
 "Bu dirliği duyan canın hiç fikri bunda değildir/Yunus dilin yumuşdurur bu tevhîdi ayıtmağa",
 "Ey yârenler siz bu sözü dinlen gönül kulağıyla/Can dudağı hâlis gerek aşk şarabını tatmağa",
 "Yunus var yarağın eylen yol korkuludur key eğlen/Önünde katran denizi kıldan sırat de gerile",
 "Seninle bir dem birlik oldur cihana erlik/Senden ayrıksı dirlik oldu kamu efsâne",
 "Dosttan kim haber getirdi sorun seher yellerine/Hak Çalabım bititmesin ayrılığın kullarına",
 "Sağır işitmez sözü gece sanır gündüzü/Kördür münkirin gözü âlem münevver ise",
 "Mevlânâ sohbetinde saz ile işaret oldu/Ârif ma'nâya daldı çün biledir ferişte",
 "Gerekse illiyinde yüz bin kez minber uram/Gerekse şirk besleyeni sıdk u gümandan fârig",
 "Güle güle geldi dâra eylediler yara yara/Âşık idi ma'şûkuna hoş d'adın dâd eyledi", 
 "Vargıl ayıtgıl Mûsâ rahmet eylesin bana/Tövbe kıldım işime hoş istiğfâr eyledi"  
 ];

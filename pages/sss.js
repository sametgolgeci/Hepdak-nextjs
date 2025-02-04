import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const SSS = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Sıkça Sorulan Sorular</title>
	    </Head>
	    <div className="genel">
	    	<h1>Sıkça Sorulan Sorular</h1>
	    	<div id="accordion">
				  <div class="card">
				    <div class="card-header" id="headingOne">
				      <h5 class="mb-0">
				        <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"><h5>Türkiye’de hemşirelik eğitim programlarının değerlendirilmesi ve akreditasyonunda yetkili ajans yalnızca HEPDAK mıdır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
				      <div class="card-body-two row">
				        <p>HEPDAK 2014 ve 2016 yıllarında YÖK tarafından ve 2018 yılında da Yükseköğretim Kalite Kurulu (YÖKAK) tarafından değerlendirilmiş, 26.12.2018 tarihli Kurul toplantısında Kalite Değerlendirme ve Tescil Belgesi’nin geçerlilik süresinin 25.12.2023 tarihine kadar beş yıl süreyle uzatılmasına karar verilmiştir. Türkiye’de ve Kuzey Kıbrıs Türk Cumhuriyeti’nde Hemşirelik eğitim programları yalnızca HEPDAK tarafından akredite edilmektedir.</p>
				      </div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingTwo">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"><h5>HEPDAK’a nasıl üye olabilirim? Üyelik koşulları nelerdir?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Derneğe üyelik şartları şunlardır: Hemşirelik Lisans Eğitimi Akreditasyon Kurulu (HEAK) ya da HEPDAK komisyonlarında görev almış olmak veya değerlendirici eğitimine katılmış olmak, HEPDAK ve benzeri kuruluşlarda en az iki kez değerlendirme takımında yer almış olmak. Ayrıca, komisyonlara üye olan ya da değerlendirici eğitimi almış olan hemşirelik lisans/lisansüstü öğrencileri ile amaçları ve yürüttükleri etkinliklerle HEPDAK'ın amaçlarını destekleyecek olan kamu ve özel hukuk tüzel kişileri derneğin üyesi olabilirler.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingThree">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree"><h5>HEPDAK’a hemşirelik öğrencileri üye olabilir mi?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>HEPDAK ve HEAK komisyonlarına üye olan ya da değerlendirici eğitimi almış olan hemşirelik lisans/lisansüstü öğrencileri derneğin üyesi olabilirler.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingFour">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour"><h5>Akreditasyon nedir?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseFour" class="collapse" aria-labelledby="headingFour" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Akreditasyon, eğitim kurumlarının kabul edilebilir bir kalitede eğitim vermelerini güvence altına almak üzere yapılan kurumsal bir değerlendirmedir. Yetkinliktir.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingFive">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive"><h5>Bir hemşirelik programının akredite olması neden önemlidir?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseFive" class="collapse" aria-labelledby="headingFive" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Hemşirelik Programlarının akredite olması, Türkiye&#39;de hemşirelik eğitiminin kalitesinin yükseltilmesi, daha iyi eğitilmiş ve daha nitelikli hemşireler yetiştirilerek güvenli ve etkili bakım sunulması ve toplumun sağlığının geliştirilmesine katkıda bulunması açısından önemlidir. YÖK’ün üniversiteleri değerlendirme ölçütleri içerisinde “akredite edilen program sayısı”nın yer alması, ÖSYM kılavuzunda akredite edilen programların belirtilmesi ve Yüksek Öğretim Kalite Kurulu’nun (YÖKAK) konuya ilişkin harekete geçirici çalışmaları hemşirelik programlarının akredite olmasının önemini arttırmaktadır.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingSix">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix"><h5>Bir eğitim programının akreditasyona başvurabilmesi için ön koşul var mıdır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseSix" class="collapse" aria-labelledby="headingSix" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>- Türkiye ile Kuzey Kıbrıs Türk Cumhuriyeti'nde bulunan ve YÖK tarafından tanınan yükseköğretim kurumlarındaki eğitim programları, akreditasyon amacıyla değerlendirilme başvurusu yapabilir.</p>
				      	<p>- Başvuru yapan program, Hemşirelik Eğitim Programı olmalıdır (Başvuru yapan programın adında “hemşirelik” kelimesi bulunmalıdır).</p>
				      	<p>- İlk kez başvuru yapacak bir programın, başvuru tarihinden önce mezun vermiş olması gereklidir.</p>
				      	<p>- Hemşirelik programının Hemşirelik Fakültesi ise dekanının, Hemşirelik Yüksekokulu ise Müdürü’nün, Sağlık Bilimleri Fakültesi ise Hemşirelik Bölüm Başkanının hemşire öğretim üyesi olması gereklidir.</p>
				      	<p>- HEPDAK’a akreditasyon için başvuruda bulanacak programdan en az bir öğretim üyesinin HEPDAK tarafından düzenlenen “Kurumlar İçin Eğitim Çalıştayı”na katılmış olması beklenmektedir.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingSeven">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven"><h5>Bir hemşirelik programı HEPDAK’a değerlendirilmesi ve akreditasyonu için ne zaman başvuruda bulunmalıdır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseSeven" class="collapse" aria-labelledby="headingSeven" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Kurumların HEPDAK'a yazılı başvurusu her yıl 1-31 Ocak tarihleri arasında yapılır.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingEight">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight"><h5>Akreditasyona karar veren bir hemşirelik programı hazırlıklara nereden başlamalıdır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseEight" class="collapse" aria-labelledby="headingEight" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Akreditasyona karar veren bir hemşirelik programının öncelikle başvuru koşullarını sağlamış olması ve kurumun HEPDAK tarafından düzenlenen “Kurumlar İçin Eğitim Çalıştayı”na katılmış olması beklenir. Akreditasyona başvuru hazırlık sürecinde, eğitim programının HEPDAK standartlarını sağlama durumu bakımından gözden geçirilerek, HEPDAK standartlarının sağlanmadığı alanlarda iyileştirmelerin yapılması ve her bir standardın sağlanma durumunun süreklilik kazanması yönünde çalışmaların yapılması gerekmektedir.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingNine">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine"><h5>Bir hemşirelik eğitim programının akredite olması ne kadar zamanda sonuçlanır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseNine" class="collapse" aria-labelledby="headingNine" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Akreditasyon süreci eğitim kurumunun HEPDAK’a yazılı başvurusu ile başlar (01 Ocak- 31 Ocak) ve Özdeğerlendirme Raporu (ÖDR)’nun takımlar tarafından değerlendirilmesi, kurum ziyareti, değerlendirme raporunun HEAK'a teslimi, HEAK tarafından incelenmesi, kesin kararın alınması, kararın duyurulması (1 Ocak – 15 Nisan) ile sonuçlanır.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingTen">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen"><h5>HEPDAK’a akreditasyon değerlendirmesi için başvuran eğitim kurumu için ödeyeceği ücret nedir?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseTen" class="collapse" aria-labelledby="headingTen" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Değerlendirilecek programlar için akreditasyon değerlendirme bedelleri HEPDAK Web sayfasından duyurulmaktadır.<Link href="/ucretler">(https://www.hepdak.org.tr/ucretler)</Link></p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingEleven">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseEleven" aria-expanded="false" aria-controls="collapseEleven"><h5>HEPDAK’ın bir hemşirelik eğitim programının değerlendirme sonucu - akreditasyon kararı nasıl sonuçlanır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseEleven" class="collapse" aria-labelledby="headingEleven" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>İlk değerlendirmede standartlarla ilgili herhangi bir eksikliği varsa <strong>“Akreditasyon vermeme”</strong>, eksiklik yok, zayıflık yok ise <strong>“5 yıl süreli akreditasyon verme”</strong>, eksiklik yok, zayıflık var ise <strong>“2 yıllık akreditasyon + ara değerlendirme”</strong> kararı verilir. Ara değerlendirmede; devam eden zayıflık var ise <strong>“Akreditasyon vermeme”</strong>, devam eden zayıflık yok ise <strong>“3 yıl süreli akreditasyon verme”</strong> kararı verilir.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingTwelve">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwelve" aria-expanded="false" aria-controls="collapseTwelve"><h5>Eğitim kurumu HEPDAK’ın akreditasyon süreci ile ilgili kararına itiraz edebilir mi? İtiraz nasıl yapılır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseTwelve" class="collapse" aria-labelledby="headingTwelve" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Evet itiraz edilebilir. İtiraz süreci ile ilgili bilgiler “HEPDAK - Değerlendirme ve Akreditasyon Uygulama Esasları Yönergesi (Sürüm:3.0 - 17.02.2020)” Madde14’te yer almaktadır. <Link href="/doc/a3_v3.pdf">(https://www.hepdak.org.tr/doc/a3_v3.pdf)</Link></p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingThirteen">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThirteen" aria-expanded="false" aria-controls="collapseThirteen"><h5>Bir hemşirelik programında değerlendirme dönemi içinde müfredatta değişiklik yapılmışsa bu akreditasyon sürecini etkiler mi?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseThirteen" class="collapse" aria-labelledby="headingThirteen" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>HEPDAK tarafından akredite edilmiş bir programda gerçekleşen ve programın akreditasyon statüsünü etkileyebilecek alanlardaki değişikliklerin HEPDAK'a bildirilmesi kurumun yönetim yetkilisinin sorumluluğudur. Değerlendirme Dönemi İçindeki Değişiklikler ile ilgili bilgiler “HEPDAK - Değerlendirme ve Akreditasyon Uygulama Esasları Yönergesi (Sürüm: 3.0 - 17.02.2020)” Madde 15’te yer almaktadır. <Link href="/doc/a3_v3.pdf">(https://www.hepdak.org.tr/doc/a3_v3.pdf)</Link></p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingFourteen">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFourteen" aria-expanded="false" aria-controls="collapseFourteen"><h5>Akreditasyon süreci dolan bir hemşirelik eğitim programı bir daha ne zaman başvuru yapmalıdır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseFourteen" class="collapse" aria-labelledby="headingFourteen" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Akreditasyon süresi dolacak olan ve HEPDAK tarafından genel değerlendirme veya ara değerlendirme işlemi görecek programlar için değerlendirme isteyen bir kurum bu isteğini akreditasyon sürelerinin dolacağı tarihten bir yıl önceki Ocak ayının sonuna kadar yazılı olarak HEPDAK’a iletir. Değerlendirme isteği Ocak ayı sonuna kadar HEPDAK'a iletilmeyen programlar için kurumlar akreditasyon değerlendirme başvurusu yapmamış sayılır.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingFifteen">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFifteen" aria-expanded="false" aria-controls="collapseFifteen"><h5>Bir hemşirelik programında kurumsal anlamda bir değişiklik olduğunda (örneğin; Sağlık Bilimler Fakültesi Hemşirelik Bölümü Hemşirelik Fakültesi yapısına dönüşmüş ya da Hemşirelik Yüksek Okulu, Hemşirelik Fakültesi olmuşsa) akreditasyon için HEPDAK’a başvurabilmesi için yeni mezun verilmesi beklenmeli midir?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseFifteen" class="collapse" aria-labelledby="headingFifteen" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Bu durumda HEPDAK, program çıktılarında bir fark olup olmamasına göre karar verilmesini önermektedir. Kurumlara özgü farklar nedeniyle durumunuzun açıklığa kavuşması için HEPDAK’a başvurmanız önerilir.</p>
							</div>
				    </div>
				  </div>
				  <div class="card">
				    <div class="card-header" id="headingSixteen">
				      <h5 class="mb-0">
				        <button class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSixteen" aria-expanded="false" aria-controls="collapseSixteen"><h5>Hemşirelik öğrencileri akreditasyon süreçlerinde değerlendirici olabilir mi? Değerlendirici olma koşulu (ları) var mıdır?</h5></button>
				      </h5>
				    </div>
				    <div id="collapseSixteen" class="collapse" aria-labelledby="headingSixteen" data-parent="#accordion">
				      <div class="card-body-two">
				      	<p>Lisans eğitimi alan hemşirelik öğrencileri akreditasyon süreçlerinde değerlendirme takımları içerisinde öğrenci değerlendirici olarak yer alırlar. HEPDAK Değerlendirmelerine Öğrenci Değerlendirici Katılımı Uygulama Esasları Madde 3’de yer alan koşullara göre öğrenci değerlendirici olunabilmektedir. Ayrıntılı bilgiler <Link href="/doc/b11_v3.pdf">(https://www.hepdak.org.tr/doc/b11_v3.pdf)</Link> adresinde yer almaktadır.</p>
							</div>
				    </div>
				  </div>
				</div>
	    </div>	
    </MasterPage>
)
export default SSS

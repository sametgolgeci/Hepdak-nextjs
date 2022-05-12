import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tum = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Tüm Duyurular</title>
      </Head>
      <div className="genel">
        <h1>Tüm Duyurular</h1>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmiiki">2022</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#yirmibir">2021</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item " data-toggle="pill" href="#yirmi">2020</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmiiki" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">12-18 Mayıs Hemşirelik Haftası</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-9">
                      <img className="" src="img/duyurular/12mayis2022.png"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="yirmibir" className="container tab-pane fade">
              <div className="main-top-second" id="akreditasyon">
                <div className="main-top-second-title">INQAAHE Üyeliği Hakkında</div>
                <div className="main-top-second-content">HEPDAK'ın, Yükseköğrenimde Uluslararası Kalite Güvence Ajansları Ağı olarak bilinen <strong>The International Network for Quality Assurance Agencies in Higher Education (INQAAHE)</strong>'a tam üyelik başvurusu kabul edilmiştir.</div>
              </div>
              <div className="main-top-second" id="akreditasyon">
                <div className="main-top-second-title">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
                <div className="main-top-second-content">HEPDAK 2021-2022 dönemi akreditasyon takvimine ulaşmak için <Link href="/doc/2021_takvim.pdf"><a target="_blank"><strong>tıklayınız</strong></a></Link>.</div>
              </div>
              <div className="main-top-second" id="calistay2021">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı - 2021</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 9-10 Eylül 2021 tarihlerinde çevrimiçi olarak gerçekleştirilecektir. <a href="doc/2021_kurum_program.pdf"><strong>Çalıştay Programı</strong></a>, <a href="doc/2021_kurum_form.doc"><strong>Başvuru Formu</strong></a>, <a href="doc/2021_kurum_duyuru.pdf"><strong>Duyuru Metni</strong></a></div>
              </div>
              <div className="main-top-second" id="degerlendirici">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Haziran 2021)</div>
                <div className="main-top-second-content">Eğitim programı çevrimiçi olarak 10-12 Haziran 2021 tarihleri arasında yürütülecektir.</div>
              </div>
              <div className="main-top-second" id="ogrenci">
                <div className="main-top-second-title">HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı (28 Mart 2021)</div>
                <div className="main-top-second-content">Öğrenci Değerlendirici Eğitim programı çevrimiçi olarak 28 Mart 2021 tarihinde yürütülecektir.</div>
              </div>
            </div>
            <div id="yirmi" className="container tab-pane fade">
              <div className="main-top-second">
                <div className="main-top-second-title">Değerlendiriciler ve Kurumlar İçin Uzaktan Değerlendirme Eğitimi Çalıştayı (13 Kasım 2020)</div>
                <div className="main-top-second-content">Değerlendiriciler ve Kurumlar İçin Uzaktan Değerlendirme Eğitimi Çalıştayı 13 Kasım 2020 tarihinde çevrimiçi olarak gerçekleştirilecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Ağustos 2020)</div>
                <div className="main-top-second-content">HEPDAK Değerlendirici Eğitimi 10-12 Ağustos 2021 tarihleri arasında çevrimiçi olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Corona Virüs Pandemisi Sürecinde Hemşirelik Eğitim Programlarının Akreditasyonu için HEPDAK Planı (4 Mayıs 2020)</div>
                <div className="main-top-second-content">
                  <p>HEPDAK, ülkemizde CORONA virüs mücadele sürecinde, üniversitelerde hemşirelik eğitiminin aksamaması için uzaktan eğitim uygulamaları kapsamında yürüttükleri planları ve çabaları izlemektedir. Akreditasyon için başvuran ve halen değerlendirme sürecinde olan hemşirelik programlarının kuramsal ve uygulamalı eğitimleri için HEPDAK önerileri aşağıda belirtilmiştir. HEPDAK olarak kurumlardan beklentimiz eğitim programlarının yürütülmesinde eğitim faaliyetlerinin HEPDAK standartları ile uyumunu korumalarıdır.</p>
                  <p>Aşağıdaki bilgilerin, eğitim programlarınızı gözden geçirmede rehberlik edeceğini umarız. HEPDAK, hemşirelik eğitiminde meslek derslerinin uzaktan yapılmasını desteklememektedir. Bu nedenle, uzaktan eğitimle ilgili önerilerimizin, pandemi sürecinde yaşanan eğitim sorunlarının çözümüne katkı amacı taşıdığını ve bir geçiş süreci planı olduğunu vurgulamak isteriz.</p>
                  <p><h5>Kuramsal dersler, klinik/alan uygulamaları ve ölçme-değerlendirme</h5></p>
                  <p>Hemşirelik programları, eğitimlerini YÖK’ün ve kendi üniversitelerinin aldığı kararlar doğrultusunda planlayacaklardır. Uygulanacak çevrimiçi eğitimlerde, YÖK’ün tanımladığı “uzaktan öğretim faaliyetlerinde uyulacak hususlar” çerçevesine uyulmalıdır (18 Mart 2020).</p>
                  <p>Kurumlar, öğrencilerin program çıktılarına ulaşmaları koşuluyla öğrenmelerini sağlayacak uzaktan öğretim yöntemlerini kullanabilirler. COVID-19 konusu ile ilgili teorik ve uygulamalı eğitimler müfredata entegre edilmelidir. Eğiticiler ve özellikle mezuniyet aşamasındaki öğrenciler COVID-19 salgın ve bakım yönetimi, kişisel koruyucu ekipmanların uygun kullanımı ve bulaş konusunda gerekli yetkinliklere sahip olmalıdırlar. Uygulama eğitimi için simülasyon, sanal gerçeklik, klinik bakım öğretimi için online kaynaklar etkili bir şekilde kullanılmalıdır.</p>
                  <p>Uzaktan eğitim yöntemi ile 1, 2. ve 3. sınıf uygulamalarını yürüten programlar, uygulamalarını 2019- 2020 ya da 2020-2021 öğretim yılında sıkıştırılmış programlarla güz ve bahar döneminde sağlık kuruluşlarında ve yüz yüze eğitim ile tekrarlamalıdır. Bu klinik deneyimler öğrencilerin program çıktılarına ulaşmalarını sağlamalıdır.</p>
                  <p>Kuramsal ve klinik eğitim becerilerini kazanma ve program çıktılarına ulaşma durumu uygun ölçme ve değerlendirme yöntemleri ile değerlendirilmelidir.</p>
                  <p>2019-2020 bahar dönemi ile gelecek öğretim yılı/yılları için yapılan planlamalar ve uygulamalar konusunda “karar alma süreçleri, teorik ve uygulamaların nasıl yürütüldüğü, eğitimcilerin uzaktan öğretim becerilerini desteklemek için yapılan eğitici eğitimleri, ölçme değerlendirme ve program çıktılarına ulaşıldığını” gösteren kanıtlar sunulmalıdır.</p>
                  <p><h5>Uzaktan eğitimin değerlendirilmesi</h5>Uzaktan yapılan eğitimler kayıt altına alınarak kanıtları sunulmalıdır. Uzaktan öğretimle yürütülen derslerde YÖKAK’ın belirlediği “uzaktan eğitimde kalite güvencesi” ölçütleri göz önüne alınmalıdır <a href="https://portal.yokak.gov.tr/makale/uzaktan-egitim-ve-kalite-guvence-sistemi/">(https://portal.yokak.gov.tr/makale/uzaktan-egitim-ve-kalite-guvence-sistemi/)</a>. HEPDAK, uzaktan eğitimin nasıl değerlendirileceği konusunda daha ayrıntılı çalışmalarını sürdürmektedir ve sizlere ayrıca bildirecektir.</p>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Üyeliği Hakkında</div>
                <div className="main-top-second-content"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir.İlgili dökümana <Link href="doc/CEENQA_Application_HEPDAK_Decision.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Tum

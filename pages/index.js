import Head from 'next/head'
import Link from 'next/link'
import MasterPage from '../components/master-page'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart,faCheck,faFileAlt,faFile,faImages,faChevronRight,faChevronLeft,faPencilAlt,faBalanceScale } from '@fortawesome/free-solid-svg-icons'
import emailjs from 'emailjs-com'

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_4hcz6rf', e.target, 'user_5aJ4lAyl6aNUxJkcF6atP')
    .then((result) => {
      console.log(result.text);
      alert('Mesajınız gönderilmiştir!');
    }, (error) => {
      console.log(error.text);
      alert('Bir hata oluştu');
  });
  e.target.reset();
}

const Anasayfa = () => (
  <div>
    <Head>
      <title>HEPDAK | Anasayfa</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <meta name="description" content="HEPDAK olarak amacımız; hemşirelik eğitim programları için akreditasyon, değerlendirme vebilgilendirme çalışmaları yaparak Türkiye'de hemşirelik eğitiminin kalitesinin yükseltilmesine, daha iyi eğitilmiş ve daha nitelikli hemşireler yetiştirilerek güvenli ve etkili bakım sunulması ve toplumun sağlığının geliştirilmesine katkıda bulunmaktır."/>
      <meta name="keywords" content="hepdak,eğitim,uzaktan,değerlendirme,akreditasyon,hemşirelik,hemşirelik eğitim programları,eğitim programları,hemşirelik akreditasyon,dernek,hemşirelik dernek,akreditasyon dernek,değerlendirme,uzaktan eğitim,çalıştay,hepdak çalıştay"/>
      <link rel="icon" href="img/faviconnew.png"/>
      <link href="http://fonts.cdnfonts.com/css/gotham" rel="stylesheet"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="js/bootstrap.js"></script>
    </Head>
    <Header/>
    <Navigation/>
    <div className="main-top">
      <div className="main-top-nav">
        <ul className="main-top-akredite">
          <li className="nav-item">
            <div className="nav-item-hemsis">
              <Link href="http://hemsis.hepdak.org.tr/"><a target="_blank">
                <h2>HEMSİS</h2>
                <span>Giriş için Tıklayınız</span>
              </a></Link>
            </div>
          </li>
          <li className="nav-item">
            <div><img className="main-bottom-tanınma" src="img/duyurular/YOKAK_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
          </li>
          <li className="nav-item">
            <div><img className="main-bottom-tanınma" src="img/duyurular/CEENQA_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="son">
          <div className="main-top-one">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                
                <div className="carousel-item active">
                  <a href="/doc/2021_takvim.pdf" target="_blank">
                  <div className="main-top-one-title">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
                  <div className="main-top-one-content">HEPDAK 2021-2022 dönemi akreditasyon takvimine ulaşmak için tıklayınız.</div>
                  </a>
                </div>
                <div className="carousel-item ">
                  <div className="main-top-one-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                  <div className="main-top-one-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 9-10 Eylül 2021 tarihlerinde çevrimiçi olarak gerçekleştirilecektir. <a href="doc/2021_kurum_program.pdf"><strong>Çalıştay Programı</strong></a>, <a href="doc/2021_kurum_form.doc"><strong>Başvuru Formu</strong></a> ve <a href="doc/2021_kurum_duyuru.pdf"><strong>Duyuru Metni</strong></a>'ne buradan ulaşabilirsiniz.</div>
                </div>
                <div className="carousel-item">
                  <div className="main-top-one-content-full"><img className="slider-full-img" src="img/duyurular/hemsire-sempozyum-2021.jpg"/></div>
                </div>
                
                <div className="carousel-item">
                  <div className="main-top-one-title">Duyuru</div>
                  <div className="main-top-one-content">HEPDAK değerlendiricilerimizden Doç. Dr. Sergül Duygulu ve Doç. Dr. Fatoş Korkmaz  ARACİS- Romanya Yüksek Öğretim Kalite Güvenlik Kurumu (Romanian Agency for Quality Assurance in Higher Education) tarafından Uluslararası Değerlendirmeci olarak seçilmişlerdir. Değerlendirmecilerimizi kutluyor, başarılar diliyoruz.<h6>HEPDAK Yönetim Kurulu</h6></div>
                </div>
                <div className="carousel-item">
                  <div className="main-top-one-content">HEPDAK değerlendiricilerimizden ve aynı zamanda HEPDAK Uluslararası Dış Değerlendirme Çalışma Grubu üyelerimizden Doç.Dr.Sergül Duygulu ve Doç.Dr.Fatoş Korkmaz HEPDAK’ın üyesi olduğu CEENQA’nın (Orta ve Doğu Avrupa Yükseköğretim Kalite Güvence Ajansları Ağı) bir diğer üyesi olan ve HEPDAK’ın Değerlendirici Değişim Programı (CEENQA Staff Exchange Program) gerçekleştirdiği Letonya Akreditasyon Ajansı AIC (Academic Information Center)-/AIKA (Quality Agency for Higher Education ) yönetim kurulu tarafından 12.05.2021 tarihinde Dış Değerlendirici olarak seçilmiştir. Değerlendirici hocalarımızı tebrik eder başarılı çalışmalar yürütmelerini dileriz.</div>
                </div>
                
                {/*
                *** Desing 5 ***
                <div className="carousel-item">
                  <Link href="https://www.youtube.com/channel/UC96oXHHypl1WFXpOkvwwj9A"><a target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/duyurular/youtube-duyuru.png"/></div>
                  </a></Link>
                </div>
                *** Design 4 ***
                <div className="carousel-item">
                  <div className="main-top-one-title">TAKIM BAŞKANLARI TOPLANTISI 2021</div>
                  <div className="main-top-one-content">2020-2021 HEPDAK Akreditasyon sürecinde çevrimiçi olarak gerçekleştirilen ziyaretlerdeki beş takım başkanı ve HEPDAK Yönetim Kurulu üyeleri 07 Ocak 2021 tarihinde çevrimiçi olarak yapılan toplantıda bir araya geldi. Takım başkanları ve Yönetim Kurulu üyeleri özellikle çevrimiçi ziyaret sürecinin yanı sıra tüm ziyaret süreci ile ilgili olarak karşılıklı bilgi alışverişinde bulundu.</div>
                </div>
                *** Desing 3 ***
                <div className="carousel-item">
                  <Link href="/cevrimici_degerlendirici_egitimi"><a target="_blank">
                    <div className="main-top-one-title">ÇEVRİMİÇİ DEĞERLENDİRİCİ EĞİTİMİ</div>
                    <div className="main-top-one-content">
                      <div className="main-top-one-content-side">
                        <div className="main-top-one-content-one">
                          <p>HEPDAK, tarafından 10-12 Ağustos 2020 tarihinde Zoom üzerinden “Çevrimiçi Değerlendirici Eğitimi” yapılmıştır. Eğitime 15 eski değerlendirici, 17 yeni değerlendirici adayı olmak üzere toplam 32 öğretim üyesi katılmıştır...</p>
                        </div>
                        <div className="main-top-one-content-two">
                          <img className="slider-img" src="img/degerlendirici_egitim_5/toplanti_1.png"/>
                        </div>
                      </div>
                    </div>
                    <div className="main-top-one-continue">Devamı -></div>
                  </a></Link>
                </div>
                *** Design 2 ***
                <div className="carousel-item">
                  <Link href="/doc/CEENQA_Application_HEPDAK_Decision.pdf"><a target="_blank">
                    <div className="main-top-one-title">CEENQA ÜYELİĞİ HAKKINDA</div>
                    <div className="main-top-one-content"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir.</p></div>
                    <div className="main-top-one-continue">Devamı -></div>
                  </a></Link>
                </div>
                *** Design 1 ***
                <div className="carousel-item">
                  <Link href="https://yokak.gov.tr/akreditasyon-kuruluslari/tescil-suresi-devam-edenler"><a target="_blank">
                    <div className="main-top-one-title">HEPDAK, 2023 YILINA KADAR TESCİL EDİLDİ</div>
                    <div className="main-top-one-content">Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği (HEPDAK) Yükseköğretim Kalite Kurulu tarafından 25.12.2023 tarihine kadar beş yıllığına tescil edilmiştir.</div>
                  </a></Link>
                </div>
                */}
                </div>
              <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                <span aria-hidden="true"><FontAwesomeIcon className="main-carousel-icon" icon={faChevronLeft}/></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                <span aria-hidden="true"><FontAwesomeIcon className="main-carousel-icon" icon={faChevronRight}/></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        <div className="tab-pane fade main-second-nav" id="tum">
          <ul className="nav justify-content-center">
           <li className="nav-item">
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmibir">2021</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item " data-toggle="pill" href="#yirmi">2020</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#ondokuz">2019</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmibir" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/2021_takvim.pdf"><a target="_blank"><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 9-10 Eylül 2021 tarihlerinde çevrimiçi olarak gerçekleştirilecektir. <a href="doc/2021_kurum_program.pdf"><strong>Çalıştay Programı</strong></a>, <a href="doc/2021_kurum_form.doc"><strong>Başvuru Formu</strong></a> ve <a href="doc/2021_kurum_duyuru.pdf"><strong>Duyuru Metni</strong></a>'ne buradan ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content">HEPDAK Değerlendirici Adayı Eğitimi Çalıştayı 10-12 Haziran 2021 tarihleri arasında çevrimiçi olarak gerçekleştirilmiştir. Çalıştaya 21 yeni değerlendirici adayı katılmıştır. Eğitimde grup çalışmalarında takım başkanı olarak dört, grup çalışmaları gözlemcisi olarak iki deneyimli HEPDAK değerlendiricisi yer almıştır. Üç günlük çalıştay küçük grup ve ana salon çalışmaları ile interaktif olarak yürütülmüştür.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content"><p>HEPDAK Akreditasyon değerlendirmeleri sonucu  2021 yılında akredite olmaya hak kazanan kurumlardan Ege Üniversitesi Hemşirelik Fakültesi ve Erciyes Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümüne  31 Mayıs 2021, Dokuz Eylül Üniversitesi Hemşirelik Fakültesi ve Acıbadem Üniversitesi  Sağlık Bilimleri Fakültesi Hemşirelik Bölümüne 1 Haziran 2021, Trakya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümüne 2 Haziran 2021 tarihlerinde yapılan online toplantı ile akreditasyon belgeleri takdim edilmiştir.</p>
                  <div className="row">
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Acibadem.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Acibadem.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/DokuzEylul.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/DokuzEylul.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Ege.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Ege.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Erciyes.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Erciyes.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Trakya.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Trakya.PNG"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content">HEPDAK değerlendiricilerimizden Doç. Dr. Sergül Duygulu ve Doç. Dr. Fatoş Korkmaz  ARACİS- Romanya Yüksek Öğretim Kalite Güvenlik Kurumu (Romanian Agency for Quality Assurance in Higher Education) tarafından Uluslararası Değerlendirmeci olarak seçilmişlerdir. Değerlendirmecilerimizi kutluyor, başarılar diliyoruz.<h6>HEPDAK Yönetim Kurulu</h6></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content">HEPDAK Değerlendiricilerimizden ve aynı zamanda HEPDAK Uluslararası Dış Değerlendirme Çalışma Grubu üyelerimizden Doç.Dr.Sergül Duygulu ve Doç.Dr.Fatoş Korkmaz HEPDAK’ın üyesi olduğu CEENQA’nın (Orta ve Doğu Avrupa Yükseköğretim Kalite Güvence Ajansları Ağı) bir diğer üyesi olan ve HEPDAK’ın Değerlendirici Değişim Programı (CEENQA Staff Exchange Program) gerçekleştirdiği Letonya Akreditasyon Ajansı AIC (Academic Information Center)-/AIKA (Quality Agency for Higher Education ) yönetim kurulu tarafından 12.05.2021 tarihinde Dış Değerlendirici olarak seçilmiştir. Değerlendirici hocalarımızı tebrik eder başarılı çalışmalar yürütmelerini dileriz.<p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">12-18 Mayıs 2021 Hemşirelik Haftamız Kutlu Olsun.</div>
                <div className="main-top-second-content"><img src="img/duyurular/hemsire2021.png"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/23nisan2021.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Yükseköğretim Kalite Kurulu 2021 Yılı HEPDAK İzleme Ziyareti</div>
                <div className="main-top-second-content">YÖKAK Dış Değerlendirme ve Akreditasyon Kuruluşlarını İzleme çalışmaları kapsamında 2020 yılı faaliyetlerimizi izlemek üzere görevlendirilen YÖKAK izleme yetkilisi Sayın Prof. Dr. Sina Ercan 25 Şubat 2021 tarihinde Derneğimize çevrimiçi izleme ziyaretini gerçekleştirmiştir. Dernek yönetim kurulu üyelerinin de (Prof. Dr. Ayla Bayık Temel, Doç. Dr. Dilek Özmen, Doç. Dr. Şenay Ünsal Atan, Prof. Dr. Ayten Zaybak) katıldığı ilk oturumda Yönetim Kurulu Başkanımız Prof. Dr. Gülseren Kocaman 2020 yılı HEPDAK faaliyetlerine yönelik bir sunum yapmıştır. İkinci oturumda ise, yönetim kurulu üyelerinin yanı sıra, HEAK üyeleri (Prof. Dr. Sevgi Hatipoğlu, Prof. Dr. Hülya Okumuş), Standartları Belirleme ve Geliştirme Komisyonu üyeleri (Prof. Dr. Kadriye Buldukoğlu, Doç. Dr. Sergül Duygulu), Tutarlılık Komisyonu üyeleri (Doç. Dr. Dilek Özmen, Doç. Dr. Şenay Ünsal Atan), öğrenci değerlendiriciler (Öğ. Aslı Kayar, Öğ. Mervenur Doğan) ve 2020 yılı faaliyetlerinde görev almış 2 değerlendiricinin (Prof. Dr. Ümit Seviğ, Prof. Dr. Medine Yılmaz) katılımı ile odak grup görüşmeleri yapılmıştır. Karşılıklı bilgi alışverişinin olduğu toplantı öneriler ve iyi dilekler ile tamamlanmıştır.</div>
                <div className="main-top-second-content"><img src="img/yok_ziyaret_2021/photo_1.jpg"/></div>
                <div className="main-top-second-content"><img src="img/yok_ziyaret_2021/photo_2.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Haziran 2021)</div>
                <div className="main-top-second-content">Eğitim programı çevrimiçi olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı (28 Mart 2021)</div>
                <div className="main-top-second-content">Eğitim programı çevrimiçi olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Takım Başkanları Toplantısı 2021</div>
                <div className="main-top-second-content">2020-2021 HEPDAK Akreditasyon sürecinde çevrimiçi olarak gerçekleştirilen ziyaretlerdeki beş takım başkanı ve HEPDAK Yönetim Kurulu üyeleri 07 Ocak 2021 tarihinde çevrimiçi olarak yapılan toplantıda bir araya geldi. Takım başkanları ve Yönetim Kurulu üyeleri özellikle çevrimiçi ziyaret sürecinin yanı sıra tüm ziyaret süreci ile ilgili olarak karşılıklı bilgi alışverişinde bulundu.</div>
              </div>
            </div>
            <div id="yirmi" className="container tab-pane fade">
              <div className="main-top-second">
                <div className="main-top-second-title">SABDEK Uzaktan Eğitim Çalışmaları ve Yaz Okulu Açıklaması (02 Temmuz 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/SABDEK_covid.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Türk Hemşireler Derneği ve Özel Dal Derneklerinden Yaz Okulu Açıklaması (30 Haziran 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="https://www.thder.org.tr/uploads/files/uzaktan-egitim-aciklama.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEMED Uzaktan Eğitim Konusunda Görüşü (29 Haziran 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/HEMED_uzaktan_eğitim_görüş_yazısı.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Ağustos 2020)</div>
                <div className="main-top-second-content">Eğitim programı online olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Uzaktan Eğitim Standartları (19 Haziran 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/b14_v1.docx"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
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
                <p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hepdak 2020-2021 Değerlendirme Planı (4 Mayıs 2020)</div>
                <div className="main-top-second-content"><p><h5>Ara değerlendirme için başvuran programlar</h5>İlgili programların, mevcut akreditasyon süreçlerinin kesintiye uğramaması için uzaktan değerlendirme yapılması planlanmıştır. Takımların, bu programların özdeğerlendirme raporlarını incelemesinden sonra saha ziyaretleri uzaktan yapılacak ve gerekirse pandemi sonrası ileri bir tarihte kurum ziyareti planlanacaktır.</p>
                <p><h5>Yeniden genel değerlendirme için başvuran programlar</h5>İlgili programların, mevcut akreditasyon süreçlerinin devamını desteklemek üzere yeniden değerlendirme yapılacak olan programlara özdeğerlendirme raporlarının incelenmesinden sonra uzaktan ziyaret yapılacak ve pandemi koşullarına göre ileri bir tarihte kurum ziyareti planlanacaktır.</p>
                <p>Ara değerlendirme ve yeniden genel değerlendirme sürecine devam etmeme kararı alan programların akreditasyon tarihi dolduktan sonra programın akreditasyonu devam etmez.</p>
                <p>Ara değerlendirme ve yeniden genel değerlendirme için başvuran programların, 2020-2021 dönemi değerlendirme takvimi olası engeller göz önüne alınarak ve bu yıla özgü olmak üzere aşağıdaki şekilde planlanmıştır</p>
                <p>o Kurumların özdeğerlendirme raporlarını HEPDAK’a yollaması: 10 Eylül 2020<br/>
                o Rapor önincelemelerinin HEPDAK tarafından yapılması: 11-14 Eylül 2020<br/>
                o Kurumların ÖDR eksikliklerini tamamlaması: 15-20 Eylül 2020<br/>
                o HEAK toplantısı: 29 Eylül 2020<br/>
                o ÖDR’lerin takımlara yollanması: 1-7 Ekim 2020<br/>
                o ÖDR’lerin takımlar tarafından incelenmesi: 7 Ekim-30 Kasım 2020<br/>
                o Programların uzaktan ziyareti: 1-31 Aralık 2020<br/>
                o Kurumların 30. Gün yanıtlarının gönderilmesi: 1-30 Ocak 2021<br/>
                o Takımların 60. Gün raporlarını HEPDAK’a yollaması: 1- 28 Şubat 2021<br/>
                o Tutarlılık toplantısı: 1-15 Mart 2021<br/>
                o HEAK karar toplantısı: 1 Nisan 2021</p>
                <p><h5>2020-2021 dönemi için ilk kez başvuran programlar</h5>Bu dönem, ilk kez başvuran programların değerlendirme süreçleri 2021-2022 dönemine aktarılacaktır. Olağan koşullarda, yeni dönem başvuru tarihi 1-31 Ocak 2021 olmakla birlikte, pandemi durumuna göre başvuru tarihi ve akreditasyon süreci yeniden gözden geçirilebilecektir. Bu dönem için yapılacak diğer başvurularla birlikte olası bir yığılma söz konusu olduğunda 2020 döneminde başvuran kurumlara öncelik verilerek, yeni başvuranların sayısı sınırlandırılabilecektir.</p>
                <p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Üyeliği Hakkında</div>
                <div className="main-top-second-content"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir.İlgili dökümana <Link href="doc/CEENQA_Application_HEPDAK_Decision.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</p><p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Haftası Kutlaması</div>
                <div className="main-top-second-content"><p>Hemşireler, Covid-19 ile mücadele sürecinde en ön saflarda görev alarak hemşirelik mesleğinin tüm toplum için vazgeçilmez olduğunun kanıtladılar.</p><p>Tüm meslektaşlarımızın hemşirelik haftasını kutluyor, sağlıklı günler diliyoruz.</p><p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">YÖKAK Saha Ziyareti</div>
                <div className="main-top-second-content"><p>Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır. Bu bağlamda, YÖKAK tarafından HEPDAK izleme yetkilisi olarak görevlendirilen YÖKAK Üyesi Prof. Dr. İlker Murat Ar, 17 Ocak 2020 tarihinde ofisimizde bir saha ziyareti gerçekleştirmiştir. Toplantıya, HEPDAK Yönetim Kurulu üyeleri yanı sıra, HEAK Başkanı ile bir HEAK üyesi ve bir HEPDAK değerlendiricisi olmak üzere toplam sekiz kişi katılmıştır. HEPDAK Başkanının yaptığı 2019 yılı faaliyetlerini içeren sunumun ardından izleme yetkilisi Prof. Dr. İlker Murat Ar, HEPDAK uygulamalarında güçlü ve geliştirmeye açık yönler konularında önerilerde bulunmuştur. Toplantı, katılımcılarla yapılan yararlı bir görüş alışverişiyle sona ermiştir.</p><p>HEPDAK Yönetim Kurulu, ilk kez yapılan izleme ziyaretini, akreditasyon süreçlerinin iyileştirilmesi açısından yol gösterici olarak değerlendirmiştir.</p></div>
              </div>
            </div>
            <div id="ondokuz" className="container tab-pane fade">
              <div className="main-top-second">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 1 Aralık 2018 Cumartesi günü Anemon Ege Otel (İzmir)'de gerçekleştirilecektir. Çalıştay programına <Link href="doc/kurumlar-icin-egitim-calistayi-1aralik-2018-programi_v2.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">29 Ekim Cumhuriyet Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/29ekim2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">30 Ağustos Zafer Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/30ağustos2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Kurban Bayramınız Mübarek Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/kurban2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQUA'da Sempozyum Haberimiz</div>
                <div className="main-top-second-content">CEENQUA'nın Temmuz haber bülteninde HEPDAK&HEMED birlikteliği ile gerçekleştirilen sempozyum haberimiz yer aldı. Habere <Link href="doc/8_1_july_2018.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Ramazan Bayramınız Mübarek Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/ramazan2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">19 Mayıs Atütürk'ü Anma, Gençlik ve Spor Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/19mayis2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">12-18 Mayıs Hemşirelik Haftamız Kutlu Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/hemsire2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/23nisan2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Eğitiminin Geleceği: 19-20 Haziran 2018 Akreditasyon, Standartlar, İyi Uygulama Örnekleri</div>
                <div className="main-top-second-content"><p>Bilimsel Program, Kayıt & Konaklama, Davet tüm bilgileri <a href="http://www.hemsirelikegitiminingelecegi.com"><strong>buradan</strong></a> erişebilirsiniz.</p> <h6>Sempozyum Yeri ve İletişim</h6><p>Ege Üniversitesi Hemşirelik Fakültesi<br/>Yasemin Şimşek<br/>Dalya Turizm, Kazım Dirik Mah. 372/8 Sk. No:1 Bornova-İzmir, TÜRKİYE<br/>+90 232 464 88 30<br/>yasemin@dalyatur.com</p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Olarak Yeni Yılınızı Kutlarız</div>
                <div className="main-top-second-content"><img src="img/duyurular/yeniyil2019.jpg"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-fast-akredite">
      <div className="fast-akredite-button col-md-4">
        <Link href="/doc/b1-basvuru-2021-2022.doc"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faCheck}/>Akreditasyon Başvurusu</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/akreditasyon-sureci"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faHourglassStart}/>Akreditasyon Süreci</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/ozdegerlendirme-belgeleri"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFileAlt}/>Özdeğerlendirme Belgeleri</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/basvurular"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faBalanceScale}/>Başvurular / Değerlendirme</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/rapor-hazirlama"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faPencilAlt}/>Rapor Hazırlama</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/diger-belgeler"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFile}/>Diğer belgeler</button></a></Link>
      </div>
    </div>
    {/*
    <div className="main-middle">
  
      <div className="col-sm-12 col-md-12 main-middle-duyuru">
        <h4>HEPDAK Değerlendirici Eğitimi Çağrısı : 2021</h4>
        <p>Değerli Hemşire Akademisyenler, HEPDAK, hemşirelik lisans eğitim programlarının akreditasyon sürecinde değerlendirme takımında görev alacak değerlendirici adayları aramaktadır. Değerlendirici olmak için HEPDAK değerlendirici eğitim programı çalıştayına katılmak ve tamamlamak gerekmektedir. HEPDAK, değerlendirici eğitimi, 10 - 12 Haziran 2021 tarihlerinde çevrimiçi olarak yapılacaktır. Koşulları sağladığınızdan emin olduktan sonra başvurularınızı, HEPDAK Akademisyen Değerlendirici Adayı Başvuru Formunu doldurarak <strong>1 Nisan 2021</strong> tarihine kadar <strong>hepdakegitim@gmail.com</strong> adresine yollamanız durumunda size en kısa sürede geri dönüş yapılacaktır.İlgili forma <Link href="doc/aday_formu.doc"><a>buradan</a></Link> ulaşabilirsiniz.</p>
        <p>İlginize teşekkür ederiz.</p>
        <h6>HEPDAK Yönetim Kurulu</h6>
      </div>
      
      <div className="col-sm-12 col-md-12 covid-index">
        <h2>HEMSİS</h2>
        <Link href="http://hemsis.hepdak.org.tr/"><a target="_blank">Giriş için tıklayınız</a></Link>
      </div>
      <div className="col-sm-12 col-md-12 covid-index">
        <Link href="/covid-19"><a>Covid-19 Haberleri</a></Link>
      </div>
      
      <div className="col-sm-12 col-md-12">
        <Link href="/doc/SABDEK_covid.pdf"><a><button className="main-top-button">SABDEK Uzaktan Eğitim Çalışmaları ve Yaz Okulu Açıklaması (02.07.2020)</button></a></Link>
      </div>
      
    </div>
    */}
    {/* 
  <div className="main-bottom-title">Şikayet ve Öneriler</div>
  This is a comment 
  <div className="iletisim-mesaj">
    <form action="" method="post" onSubmit={sendEmail}>
      <div className="row">
        <div className="col-md-4 col-sm-12">
          <div className="form-group">
            <label for="exampleInputEmail">Ad Soyad</label>
            <input type="text" className="form-control form-control-sm" name="name"/>
          </div>
          <div className="form-group">
            <label for="exampleInputEmail">Mail Adresiniz</label>
            <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" name="mail"/>
          </div>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="form-group">
            <label for="exampleFormControlTextarea1">Mesaj</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="message"></textarea>
          </div>
        </div>
        <div className="col-md-4 col-sm-12 iletisim-mesaj-logo">
          <div><img className="main-bottom-tanınma" src="img/duyurular/YOKAK_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
          <div><img className="main-bottom-tanınma" src="img/duyurular/CEENQA_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
        </div>
      </div>
      <button type="submit" className="iletisim-button btn">Gönder</button>
    </form>
    <div className="col-md-4 col-sm-12 iletisim-mesaj-logo-mobil">
      <div><img className="main-bottom-tanınma" src="img/duyurular/YOKAK_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
      <div><img className="main-bottom-tanınma" src="img/duyurular/CEENQA_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
    </div>
  </div>
  */}
    <div className="main-new">
      <div className="main-new-block col-md-3 col-sm-12">
        <div className="main-block-title">
          <div className="block-title-main">Son Haberler</div>
          <div className="block-title-all"><a href="/tum-haberler">Tüm Haberler</a></div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">14</div>
            <div className="date-month">Ekim</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">CEENQA'nın Yıllık Genel Kurulu ve Çalıştayı (13 Ekim 2021)</div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">28</div>
            <div className="date-month">Mart</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">İyi Uygulama Örnekleri</div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">28</div>
            <div className="date-month">Mart</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">"Hemşirelik Eğitiminin Geleceği 3” Sempozyumu Gerçekleştirildi</div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">28</div>
            <div className="date-month">Mart</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">CEENQA Paylaşım Toplantısı - 7</div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">28</div>
            <div className="date-month">Mart</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">Kurumlara Yönelik Eğitim Çalıştayı</div>
        </div>
      </div>
      <div className="main-new-block col-md-3 col-sm-12">
        <div className="main-block-title">
          <div className="block-title-main">Son Duyurular</div>
          <div className="block-title-all"><a href="/tum-duyurular">Tüm Duyurular</a></div>
        </div>
        <Link href="/tum-duyurular#akreditasyon">
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">01</div>
            <div className="date-month">Eylül</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
        </div>
        </Link>
        <Link href="/tum-duyurular#calistay2021">
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">01</div>
            <div className="date-month">Ağustos</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">Kurumlara Yönelik Eğitim Çalıştayı - 2021</div>
        </div>
        </Link>
        <Link href="/tum-duyurular#degerlendirici">
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">03</div>
            <div className="date-month">Haziran</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">HEPDAK Değerlendirici Eğitimi (10-12 Haziran 2021)</div>
        </div>
        </Link>
        <Link href="/tum-duyurular#ogrenci">
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">21</div>
            <div className="date-month">Mart</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı (28 Mart 2021)</div>
        </div>
        </Link>
      </div>
      <div className="main-new-block col-md-3 col-sm-12">
        <div className="main-block-title">
          <div className="block-title-main">Son Etkinlikler</div>
          <div className="block-title-all"><a href="tum-etkinlikler">Tüm Etkinlikler</a></div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">20</div>
            <div className="date-month">Eylül</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">Hemşirelik Eğitiminin Geleceği Sempozyumu (27-29 Eylül 2021)</div>
        </div>
        <div className="main-block-subtitle">
          <div className="block-subtitle-date">
            <div className="date-day">13</div>
            <div className="date-month">Mart</div>
            <div className="date-year">2021</div>
          </div>
          <div className="block-subtitle-text">Avustralya Hemşirelik ve Ebelik Akreditasyon Dernekleri ve Hemşirelik Okullarının Yükümlülükleri (20 Mart 2021)</div>
        </div>
      </div>
    </div>
    <div className="main-bottom">
      <div className="main-bottom-title"><a href="/ilgili-kuruluslar">İlgili Kuruluşlar</a></div>
      <div className="main-bottom-slider">
        <div className="main-bottom-img">
          <div className="bottom-img">
            <a href="https://www.yok.gov.tr" target="_blank"><img className="link-img" src="img/grey/yok.png" title="Yükseköğretim Kurulu"/></a>
            <a href="https://www.yok.gov.tr" target="_blank"><img className="img-top" src="img/link/yok.png" title="Yükseköğretim Kurulu"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://yokak.gov.tr" target="_blank"><img className="link-img" src="img/grey/yokak.png" title="Yükseköğretim Kalite Kurulu"/></a>
            <a href="https://yokak.gov.tr" target="_blank"><img className="img-top" src="img/link/yokak.png" title="Yükseköğretim Kalite Kurulu"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.kalder.org" target="_blank"><img className="link-img" src="img/grey/kalder.png" title="Türkiye Kalite Derneği"/></a>
            <a href="https://www.kalder.org" target="_blank"><img className="img-top" src="img/link/kalder.png" title="Türkiye Kalite Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.mudek.org.tr" target="_blank"><img className="link-img" src="img/grey/mudek.png" title="Mühendislik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="https://www.mudek.org.tr" target="_blank"><img className="img-top" src="img/link/mudek.png" title="Mühendislik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://tepdad.org.tr" target="_blank"><img className="link-img" src="img/grey/tepdad.png" title="Tıp Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="http://tepdad.org.tr" target="_blank"><img className="img-top" src="img/link/tepdad.png" title="Tıp Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://epdad.org.tr" target="_blank"><img className="link-img" src="img/grey/epdad.png" title="Öğretmenlik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="https://epdad.org.tr" target="_blank"><img className="img-top" src="img/link/epdad.png" title="Öğretmenlik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://iledak.ilad.org.tr" target="_blank"><img className="link-img" src="img/grey/iledak.png" title="İletişim Eğitimi Değerlendirme Akreditasyon Kurulu"/></a>
            <a href="http://iledak.ilad.org.tr" target="_blank"><img className="img-top" src="img/link/iledak.png" title="İletişim Eğitimi Değerlendirme Akreditasyon Kurulu"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://www.sabak.org.tr" target="_blank"><img className="link-img" src="img/grey/sabak.png" title="Sağlık Bilimleri Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="http://www.sabak.org.tr" target="_blank"><img className="img-top" src="img/link/sabak.png" title="Sağlık Bilimleri Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://www.turak.org" target="_blank"><img className="link-img" src="img/grey/turak.png" title="Turizm Eğitimi Değerlendirme ve Akreditasyon Kurulu"/></a>
            <a href="http://www.turak.org" target="_blank"><img className="img-top" src="img/link/turak.png" title="Turizm Eğitimi Değerlendirme ve Akreditasyon Kurulu"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://www.iaa.org.tr" target="_blank"><img className="link-img" src="img/grey/iaa.png" title="İlahiyat Akreditasyon Ajansı"/></a>
            <a href="http://www.iaa.org.tr" target="_blank"><img className="img-top" src="img/link/iaa.png" title="İlahiyat Akreditasyon Ajansı"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://pemder.org.tr" target="_blank"><img className="link-img" src="img/grey/pemder.png" title="Peyzaj Mimarlığı Eğitim ve Bilim Derneği"/></a>
            <a href="http://pemder.org.tr" target="_blank"><img className="img-top" src="img/link/pemder.png" title="Peyzaj Mimarlığı Eğitim ve Bilim Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://audak.org" target="_blank"><img className="link-img" src="img/grey/audak.png" title="Açık ve Uzaktan Öğretim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="http://audak.org" target="_blank"><img className="img-top" src="img/link/audak.png" title="Açık ve Uzaktan Öğretim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="http://www.depad.org" target="_blank"><img className="link-img" src="img/grey/depad.png" title="Diş Hekimliği Eğitimi Programları Akreditasyon Derneği"/></a>
            <a href="http://www.depad.org" target="_blank"><img className="img-top" src="img/link/depad.png" title="Diş Hekimliği Eğitimi Programları Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.sporbilimleri.org.tr" target="_blank"><img className="link-img" src="img/grey/sbd.png" title="Spor Bilimleri Derneği"/></a>
            <a href="https://www.sporbilimleri.org.tr" target="_blank"><img className="img-top" src="img/link/sbd.png" title="Spor Bilimleri Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.eczakder.org.tr" target="_blank"><img className="link-img" src="img/grey/eczakder.png" title="Eczacılık Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="https://www.eczakder.org.tr" target="_blank"><img className="img-top" src="img/link/eczakder.png" title="Eczacılık Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.fedek.org.tr" target="_blank"><img className="link-img" src="img/grey/fedek.png" title="Fen, Edebiyat, Fen-Edebiyat, Dil ve Tarih - Coğrafya Fakülteleri Öğretim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="https://www.fedek.org.tr" target="_blank"><img className="img-top" src="img/link/fedek.png" title="Fen, Edebiyat, Fen-Edebiyat, Dil ve Tarih - Coğrafya Fakülteleri Öğretim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.hemed.org.tr" target="_blank"><img className="link-img" src="img/grey/hemed.png" title="Hemşirelik Eğitimi Derneği"/></a>
            <a href="https://www.hemed.org.tr" target="_blank"><img className="img-top" src="img/link/hemed.png" title="Hemşirelik Eğitimi Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.psikolog.org.tr" target="_blank"><img className="link-img" src="img/grey/turk-psikolog.png" title="Türk Psikologlar Derneği"/></a>
            <a href="https://www.psikolog.org.tr" target="_blank"><img className="img-top" src="img/link/turk-psikolog.png" title="Türk Psikologlar Derneği"/></a>
          </div>    
          <div className="bottom-img">
            <a href="https://www.vedek.org.tr" target="_blank"><img className="link-img" src="img/grey/vedek.png" title="Veteriner Hekimliği Eğitim Kurumları ve Programları Değerlendirme ve Akreditasyon Derneği"/></a>
            <a href="https://www.vedek.org.tr" target="_blank"><img className="img-top" src="img/link/vedek.png" title="Veteriner Hekimliği Eğitim Kurumları ve Programları Değerlendirme ve Akreditasyon Derneği"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.nln.org" target="_blank"><img className="link-img" src="img/grey/nln-org.png" title="National League for Nursing"/></a>
            <a href="https://www.nln.org" target="_blank"><img className="img-top" src="img/link/nln-org.png" title="National League for Nursing"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.aacnnursing.org" target="_blank"><img className="link-img" src="img/grey/aacn.png" title="American Association of Colloges of Nursing"/></a>
            <a href="https://www.aacnnursing.org" target="_blank"><img className="img-top" src="img/link/aacn.png" title="American Association of Colloges of Nursing"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.aacnnursing.org/CCNE" target="_blank"><img className="link-img" src="img/grey/ccne.png" title="Commision on Collegiate Nursing Education"/></a>
            <a href="https://www.aacnnursing.org/CCNE" target="_blank"><img className="img-top" src="img/link/ccne.png" title="Commision on Collegiate Nursing Education"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.casn.ca" target="_blank"><img className="link-img" src="img/grey/casn-ca-new.png" title="Canadian Association of Schools of Nursing"/></a>
            <a href="https://www.casn.ca" target="_blank"><img className="img-top" src="img/link/casn-ca-new.png" title="Canadian Association of Schools of Nursing"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.chea.org" target="_blank"><img className="link-img" src="img/grey/chea-org.png" title="Council for Higher Education Accreditation"/></a>
            <a href="https://www.chea.org" target="_blank"><img className="img-top" src="img/link/chea-org.png" title="Council for Higher Education Accreditation"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.acenursing.org" target="_blank"><img className="link-img" src="img/grey/acen.png" title="Accreditation Commision for Education in Nursing"/></a>
            <a href="https://www.acenursing.org" target="_blank"><img className="img-top" src="img/link/acen.png" title="Accreditation Commision for Education in Nursing"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.enqa.eu" target="_blank"><img className="link-img" src="img/grey/enqa-eu.png" title="European Association for Quality Assurance for Higher Education"/></a>
            <a href="https://www.enqa.eu" target="_blank"><img className="img-top" src="img/link/enqa-eu.png" title="European Association for Quality Assurance for Higher Education"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.qaa.ac.uk" target="_blank"><img className="link-img" src="img/grey/qaa-ac-uk.png" title="Quality Assurance Agency for Higher Education"/></a>
            <a href="https://www.qaa.ac.uk" target="_blank"><img className="img-top" src="img/link/qaa-ac-uk.png" title="Quality Assurance Agency for Higher Education"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.eqar.eu" target="_blank"><img className="link-img" src="img/grey/eqar-eu.png" title="European Quality Assurance Register for Higher Education"/></a>
            <a href="https://www.eqar.eu" target="_blank"><img className="img-top" src="img/link/eqar-eu.png" title="European Quality Assurance Register for Higher Education"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.inqaahe.org" target="_blank"><img className="link-img" src="img/grey/inqaahe-org.png" title="International Network for Quality Assurance Agencies in Higher Education"/></a>
            <a href="https://www.inqaahe.org" target="_blank"><img className="img-top" src="img/link/inqaahe-org.png" title="International Network for Quality Assurance Agencies in Higher Education"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.eurashe.eu" target="_blank"><img className="link-img" src="img/grey/eurashe-eu-black.png" title="European Association of Institutions in Higher Education"/></a>
            <a href="https://www.eurashe.eu" target="_blank"><img className="img-top" src="img/link/eurashe-eu-black.png" title="European Association of Institutions in Higher Education"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.ceenqa.org" target="_blank"><img className="link-img" src="img/grey/ceenqa.png" title="Central and Eastern European Network of Quality Assurance Agencies in Higher Education"/></a>
            <a href="https://www.ceenqa.org" target="_blank"><img className="img-top" src="img/link/ceenqa.png" title="Central and Eastern European Network of Quality Assurance Agencies in Higher Education"/></a>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
)
export default Anasayfa
  
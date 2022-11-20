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
            <div><img className="main-bottom-tanınma" src="img/duyurular/YOKAK_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
          </li>
          <li className="nav-item">
            <div><img className="main-bottom-tanınma" src="img/duyurular/CEENQA_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
          </li>
          <li className="nav-item">
            <div><img className="main-bottom-tanınma" src="img/duyurular/INQAAHE_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="son">
          <div className="main-top-one">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="main-top-one-title">HEPDAK 4. Olağan Genel Kurulu</div>
                  <div className="main-top-one-content"><p>HEPDAK 4. Olağan Genel Kurulu 20 Ekim Perşembe günü saat 17.00&#39;de gerçekleştirilmiştir. Genel kurulda Manisa Celal Bayar Üniversitesinnden Prof. Dr. Dilek Özmen, İzmir Katip Çelebi Üniversitesi’nden Prof. Dr. Medine Yılmaz, İzmir Ekonomi Üniversitesinden Doç. Dr. Gülsüm Nihal Çürük, Ondokuz Mayıs Üniversitesinden Prof. Dr. Özen Kulakaç ve Ege Üniversitesinden Doç. Dr. Fatma Orgun HEPDAK Yönetim Kurulu’na seçilmişlerdir.</p></div>
                </div>
                <div className="carousel-item">
                  <Link href="/haberler/01-06-2022-belge"><a target="_blank">
                    <div className="main-top-one-title">Belge Töreni</div>
                    <div className="main-top-one-content">
                      <div className="main-top-one-content-side">
                        <div className="main-top-one-content-one">
                          <p>HEPDAK Akreditasyon değerlendirmeleri sonucu 2021-2022 döneminde akredite olmaya hak kazanan kurumlara belge takdim töreni düzenlenmiştir...</p>
                        </div>
                        <div className="main-top-one-content-two">
                          <img className="slider-img" src="/img/haberler/belge-toreni-2022/01.png"/>
                        </div>
                      </div>
                    </div>
                    <div className="main-top-one-continue">Devamı -></div>
                  </a></Link>
                </div>
                <div className="carousel-item">
                  <a href="/doc/hepdak_toplanti_takvim_2022.pdf" target="_blank">
                    <div className="main-top-one-title">HEPDAK 2022 Yılı Toplantı Takvimi</div>
                    <div className="main-top-one-content">HEPDAK tarafından  2022 yılında yapılacak toplantıların tarihlerine  buradan ulaşabilirsiniz.</div>
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="/doc/2022_egitim_takvim.pdf" target="_blank">
                    <div className="main-top-one-title">HEPDAK 2022 Eğitim Takvimi</div>
                    <div className="main-top-one-content">HEPDAK tarafından 2022 yılı içinde yapılacak eğitim takvimine ulaşmak için tıklayınız.</div>
                  </a>
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
      </div>
    </div>
  
    <div className="main-fast-akredite">
      <div className="fast-akredite-button col-md-4">
        <Link href="/doc/b1-basvuru-2023-2024.doc"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faCheck}/>Akreditasyon Başvurusu</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/akreditasyon-sureci"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faHourglassStart}/>Akreditasyon Süreci</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/ozdegerlendirme-belgeleri"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFileAlt}/>Özdeğerlendirme Belgeleri</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/doc/kurum-egitimine-basvuru-formu.doc"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faBalanceScale}/>Başvurular</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/rapor-hazirlama"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faPencilAlt}/>Rapor Hazırlama</button></a></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/belgeler"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFile}/>Diğer belgeler</button></a></Link>
      </div>
    </div>
    
    <div className="main-new">
      <div className="main-new-block col-md-4 col-sm-12">
        <div className="main-new-block-alt">
          <div className="main-block-title">
            <div className="block-title-main">Son Haberler</div>
            <div className="block-title-all"><a href="/tum-haberler">Tüm Haberler</a></div>
          </div>
          
          <Link href="/haberler/10-11-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">10</div>
              <div className="date-month">Kasım</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Webinar: Hemşirelik Eğitiminde Program Değerlendirme</div>
          </div>
          </Link>

          <Link href="/haberler/26-27-10-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">26-27</div>
              <div className="date-month">Ekim</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">HEPDAK Türkiye Yeterlilikler Çerçevesi Uluslararası Konferansı'na Katıldı</div>
          </div>
          </Link>

          <Link href="/haberler/23-09-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">23-24</div>
              <div className="date-month">Eylül</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">HEPDAK CEENQA Genel Kurulu ve Çalıştayına Katıldı</div>
          </div>
          </Link>

          <Link href="/haberler/25-06-2022-degerlendirici">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">25</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2022 yılı Değerlendirici Eğitimi tamamlandı</div>
          </div>
          </Link>

          <Link href="/haberler/02-06-2022-degerlendirici">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">02</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2022 yılı Değerlendirici Eğitimi başladı</div>
          </div>
          </Link>

          <Link href="/haberler/01-06-2022-belge">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">01</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Belge Töreni</div>
          </div>
          </Link>

          <Link href="/haberler/24-05-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">24</div>
              <div className="date-month">Mayıs</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi</div>
          </div>
          </Link>

          <Link href="/haberler/21-04-2022-webinar-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">21</div>
              <div className="date-month">Nisan</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri</div>
          </div>
          </Link>

          <Link href="/haberler/23-03-2022-webinar-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">23</div>
              <div className="date-month">Mart</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar</div>
          </div>
          </Link>

          <Link href="/haberler/16-03-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">16</div>
              <div className="date-month">Mart</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">CEENQA Paylaşım Toplantısı - 9</div>
          </div>
          </Link>

          <Link href="/haberler/15-03-2022-webinar-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">15</div>
              <div className="date-month">Mart</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Webinar: Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme</div>
          </div>
          </Link>

          <Link href="/haberler/15-03-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">15</div>
              <div className="date-month">Mart</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2021-2022 Dönemi Akreditasyon İçin Ziyaret Edilen Kurumlar ile Değerlendirme Toplantısı</div>
          </div>
          </Link>

          <Link href="/haberler/01-03-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">01</div>
              <div className="date-month">Mart</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı</div>
          </div>
          </Link>

          <Link href="/haberler/24-02-2022-haber">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">24</div>
              <div className="date-month">Şubat</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Hemşirelik Lisans Programı Yöneticileri Toplantısı</div>
          </div>
          </Link>

          <Link href="/haberler/08-02-2022-takim-baskanlari-standart-komisyon">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">08</div>
              <div className="date-month">Şubat</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı</div>
          </div>
          </Link>

          <Link href="/haberler/06-02-2022-ogrenci-calistayi">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">05-06</div>
              <div className="date-month">Şubat</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Öğrenci Değerlendirici Eğitim Çalıştayı</div>
          </div>

          </Link>
          <Link href="/haberler/18-01-2022-ogrenci-geribildirim">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">18</div>
              <div className="date-month">Ocak</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Öğrenci Değerlendiriciler ile Geribildirim Toplantısı</div>
          </div>
          </Link>

        </div>
      </div>
      <div className="main-new-block col-md-4 col-sm-12">
        <div className="main-new-block-alt">
          <div className="main-block-title">
            <div className="block-title-main">Son Duyurular</div>
            <div className="block-title-all"><a href="/tum-duyurular">Tüm Duyurular</a></div>
          </div>

          <Link href="/duyurular/15-06-2021-akreditasyon-takvimi">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">15</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2021</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
          </div>
          </Link>

        </div>
      </div>
      <div className="main-new-block col-md-4 col-sm-12">
        <div className="main-new-block-alt">
          <div className="main-block-title">
            <div className="block-title-main">Son Etkinlikler</div>
            <div className="block-title-all"><a href="/#">Tüm Etkinlikler</a></div>
          </div>

          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">23-24</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Değerlendirici Eğitim Çalıştayı</div>
          </div>

          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">15</div>
              <div className="date-month">Ekim</div>
              <div className="date-year">2022</div>
            </div>
            <div className="block-subtitle-text">Kurumlar İçin Eğitim Çalıştayı</div>
          </div>

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
  
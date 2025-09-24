import Head from 'next/head'
import Link from 'next/link'
import MasterPage from '../components/master-page'
import Header from '../components/header'
import Footer from '../components/footer'
import Navigation from '../components/navigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart,faCheck,faFileAlt,faFile,faImages,faChevronRight,faChevronLeft,faPencilAlt,faBalanceScale } from '@fortawesome/free-solid-svg-icons'

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
      
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossOrigin="anonymous"></script>
      <script src="js/bootstrap.js"></script>

    </Head>
    <Header/>
    <Navigation/>
    {/*
    <div className="home-duyuru">
      <Link href="https://www.hegk2025.com" target="_blank">
      <img className="slider-full-img" src="img/kongre.jpg"/>
      </Link>
    </div>
    */}
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
                  <Link href="/doc/2025-kurum-egitim-formu.docx" target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2025-kurum-egitim-duyuru.jpeg"/></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2025-duyuru.jpeg"/></div>
                </div>
                <div className="carousel-item">
                  <Link href="/doc/2025-2029-eylem-plani.pdf" target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2025-eylem-plani.jpeg"/></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link href="/doc/hepdak-hemed.pdf" target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2025-hepdak-hemed.jpeg"/></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link href="/doc/takvim/2025-egitim-takvim.pdf" target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2025-egitim-takvim.jpeg"/></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link href="/doc/danisma_kurulu_toplantilari/04.pdf" target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2024-duyuru-danisma-kurulu.jpeg"/></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <Link href="/doc/takvim/2025-toplanti-takvim.pdf" target="_blank">
                    <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2025-toplanti-takvim.jpeg"/></div>
                  </Link>
                </div>
                <div className="carousel-item">
                  <div className="main-top-one-content-full"><img className="slider-full-img" src="img/banner/2024-tescil-suresi.jpeg"/></div>
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
        <Link href="/doc/b1-basvuru-2024-2025.pdf"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faCheck}/>Akreditasyon Başvurusu</button></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/akreditasyon-sureci"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faHourglassStart}/>Akreditasyon Süreci</button></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/ozdegerlendirme-belgeleri"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFileAlt}/>Özdeğerlendirme Belgeleri</button></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/doc/kurum-egitimine-basvuru-formu.doc"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faBalanceScale}/>Başvurular</button></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/rapor-hazirlama"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faPencilAlt}/>Rapor Hazırlama</button></Link>
      </div>
      <div className="fast-akredite-button col-md-4">
        <Link href="/belgeler"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFile}/>Diğer belgeler</button></Link>
      </div>
    </div>
    
    <div className="main-new">
      <div className="main-new-block col-md-4 col-sm-12">
        <div className="main-new-block-alt">
          <div className="main-block-title">
            <div className="block-title-main">Haberler</div>
            <div className="block-title-all"><a href="/tum-haberler">Tüm Haberler</a></div>
          </div>
         
          <Link href="/haberler/2025-09-17-19-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">17-19</div>
              <div className="date-month">Eylül</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">2. Uluslararası Hemşirelik Eğitiminin Geleceği Kongresi</div>
          </div>
          </Link>

          <Link href="/haberler/2025-06-19-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">19</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2025 yılı Değerlendirme Takım Üyeleri Toplantısı</div>
          </div>
          </Link>

          <Link href="/haberler/2025-05-30-31-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">30-31</div>
              <div className="date-month">Mayıs</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2025 yılı Değerlendirici Eğitimi</div>
          </div>
          </Link>

          <Link href="/haberler/2025-05-27-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">27</div>
              <div className="date-month">Mayıs</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">HEPDAK Değerlendirici Eğitimi (Tazelenme) Çalıştayı</div>
          </div>
          </Link>

          <Link href="/haberler/2025-04-30-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">30</div>
              <div className="date-month">Nisan</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi</div>
          </div>
          </Link>

          <Link href="/haberler/2025-02-26-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">26</div>
              <div className="date-month">Şubat</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">Akredite edilmek üzere Başvuran Kurum Yöneticileri ile Toplantı</div>
          </div>
          </Link>

          <Link href="/haberler/2025-02-19-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">19</div>
              <div className="date-month">Şubat</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">Akreditasyon İçin Ziyaret Edilen Kurumlar ile Değerlendirme Toplantısı</div>
          </div>
          </Link>

          <Link href="/haberler/2025-01-07-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">07</div>
              <div className="date-month">Ocak</div>
              <div className="date-year">2025</div>
            </div>
            <div className="block-subtitle-text">HEPDAK Takım Başkanları Toplantısı - 8</div>
          </div>
          </Link>

          <Link href="/haberler/2024-12-26-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">26</div>
              <div className="date-month">Aralık</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">Webinar: Hemşirelikte değer temelli eğitim nasıl olmalı?</div>
          </div>
          </Link>

          <Link href="/haberler/2024-12-18-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">18</div>
              <div className="date-month">Aralık</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">Webinar: Yönetici Hemşireler Mezunlarımızın Yetkinliklerini Nasıl Değerlendiriyor?</div>
          </div>
          </Link>

          <Link href="/haberler/2024-11-26-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">26</div>
              <div className="date-month">Kasım</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">Hemşirelik Programlarında Uygulamalı Eğitim Çalıştayı</div>
          </div>
          </Link>

          <Link href="/haberler/2024-10-12-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">12</div>
              <div className="date-month">Ekim</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 4</div>
          </div>
          </Link>

          <Link href="/haberler/2024-10-03-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">03</div>
              <div className="date-month">Ekim</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">Webinar: 21. Yüzyıl Yetkinliklerine Erişimde Köprü: Program Dışı Öğrenme</div>
          </div>
          </Link>

          <Link href="/haberler/2024-09-19-20-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">19-20</div>
              <div className="date-month">Eylül</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 12. Kurumlar için Eğitim Çalıştayı</div>
          </div>
          </Link>

          <Link href="/haberler/2024-06-10-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">10</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi</div>
          </div>
          </Link>

          <Link href="/haberler/2024-06-08-haber" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">08</div>
              <div className="date-month">Haziran</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2024 Yılı Öğrenci Değerlendirici Eğitimi</div>
          </div>
          </Link>
          
        </div>
      </div>
      <div className="main-new-block col-md-4 col-sm-12">
        <div className="main-new-block-alt">
          <div className="main-block-title">
            <div className="block-title-main">Duyurular</div>
            <div className="block-title-all"><a href="/#">Tüm Duyurular</a></div>
          </div>
          {/*
          <Link href="/doc/takvim/2024-egitim-takvim.pdf">
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">16</div>
              <div className="date-month">Ocak</div>
              <div className="date-year">2024</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2024 Eğitim Takvimi</div>
          </div>
          </Link>
          */}

          <Link href="/doc/takvim/2025-egitim-takvim.pdf" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day"></div>
              <div className="date-month">25'</div>
              <div className="date-year">Takvim</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2025 Eğitim Takvimi</div>
          </div>
          </Link>

          <Link href="/doc/takvim/2025-toplanti-takvim.pdf" legacyBehavior>
          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day"></div>
              <div className="date-month">25'</div>
              <div className="date-year">Takvim</div>
            </div>
            <div className="block-subtitle-text">HEPDAK 2025 Toplantı Takvimi</div>
          </div>
          </Link>

        </div>
      </div>
      <div className="main-new-block col-md-4 col-sm-12">
        <div className="main-new-block-alt">
          <div className="main-block-title">
            <div className="block-title-main">Etkinlikler</div>
            <div className="block-title-all"><a href="/#">Tüm Etkinlikler</a></div>
          </div>

          {/*

          <div className="main-block-subtitle">
            <div className="block-subtitle-date">
              <div className="date-day">25-26</div>
              <div className="date-month">Mayıs</div>
              <div className="date-year">2023</div>
            </div>
            <div className="block-subtitle-text">Değerlendirici Eğitim Çalıştayı</div>
          </div>

          */}

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
  
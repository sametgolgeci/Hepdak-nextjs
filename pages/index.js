import Head from 'next/head'
import Link from 'next/link'
import MasterPage from '../components/master-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart,faCheck,faFileAlt,faImages,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'


const Anasayfa = () => (
  <MasterPage>
    <Head>
      <title>HEPDAK | Anasayfa</title>
    </Head>
    <div className="main-top">
      <div className="col-sm-12 col-md-12">
        <Link href="/corona-virus-pandemisi-sureci"><a><button className="main-top-button">!! Corona Virüs Pandemisi Sürecinde Hemşirelik Eğitim Programlarının Akreditasyonu için HEPDAK Planı !!</button></a></Link>
      </div>
      <div className="col-sm-12 col-md-12">
        <Link href="/hepdak-degerlendirme-2020-21"><a><button className="main-top-button">!! HEPDAK 2020-2021 Değerlendirme Planı !!</button></a></Link>
      </div>
      <div className="main-top-nav">
        <ul className="nav nav-pills nav-justified">
          <li className="nav-item">
            <a className="nav-link main-nav active" data-toggle="pill" href="#son">Son Duyurular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link main-nav" data-toggle="pill" href="#tum">Tüm Duyurular</a>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <div className="tab-pane active" id="son">
          <div className="main-top-one">
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="main-top-one-title">HEMŞİRELİK HAFTASI KUTLAMASI</div>
                  <div className="main-top-one-content"><p>Hemşireler, Covid-19 ile mücadele sürecinde en ön saflarda görev alarak hemşirelik mesleğinin tüm toplum için vazgeçilmez olduğunun kanıtladılar.</p><p>Tüm meslektaşlarımızın hemşirelik haftasını kutluyor, sağlıklı günler diliyoruz.</p><p><strong>HEPDAK Yönetim Kurulu</strong></p></div>
                </div>
                <div className="carousel-item">
                  <a href="yokak-saha-ziyareti">
                    <div className="main-top-one-title">YÖKAK SAHA ZİYARETİ</div>
                    <div className="main-top-one-content">Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır...</div>
                    <div className="main-top-one-continue">Devam -></div>
                  </a>
                </div>
                <div className="carousel-item">
                  <div className="main-top-one-title">DUYURU</div>
                  <div className="main-top-one-content">17-18 Nisan 2020 tarihinde yapılacağı duyurulan Değerlendirici Eğitimi korona virüs salgını sebebiyle ileri bir tarihe ertelenmiştir. Tarih yeniden duyurulacaktır.</div>
                </div>
                <div className="carousel-item">
                  <a href="https://yokak.gov.tr/akreditasyon-kuruluslari/tescil-suresi-devam-edenler" target="_blank">
                    <div className="main-top-one-title">HEPDAK, 2023 YILINA KADAR TESCİL EDİLDİ</div>
                    <div className="main-top-one-content">Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği (HEPDAK) Yükseköğretim Kalite Kurulu tarafından 25.12.2023 tarihine kadar beş yıllığına tescil edilmiştir.</div>
                  </a>
                </div>
                <div className="carousel-item">
                  <a href="/ucretler">
                    <div className="main-top-one-title">HEPDAK DEĞERLENDİRME VE AKREDİTASYON ÜCRETLERİ</div>
                    <div className="main-top-one-content">2020-2021 Değerlendirme Dönemi Akreditasyon Bedelleri Belirlenmiştir.</div>
                    <div className="main-top-one-continue">Devam -></div>
                  </a>
                </div>
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
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmi">2020</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#ondokuz">2019</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmi" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Haftası Kutlaması</div>
                <div className="main-top-second-content"><p>Hemşireler, Covid-19 ile mücadele sürecinde en ön saflarda görev alarak hemşirelik mesleğinin tüm toplum için vazgeçilmez olduğunun kanıtladılar.</p><p>Tüm meslektaşlarımızın hemşirelik haftasını kutluyor, sağlıklı günler diliyoruz.</p><p><strong>HEPDAK Yönetim Kurulu</strong></p></div>
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
                <div className="main-top-second-content"><img src="img/duyurular/29ekim2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">30 Ağustos Zafer Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/30ağustos2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Kurban Bayramınız Mübarek Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/kurban2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQUA'da Sempozyum Haberimiz</div>
                <div className="main-top-second-content">CEENQUA'nın Temmuz haber bülteninde HEPDAK&HEMED birlikteliği ile gerçekleştirilen sempozyum haberimiz yer aldı. Habere <Link href="doc/8_1_july_2018.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Ramazan Bayramınız Mübarek Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/ramazan2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">19 Mayıs Atütürk'ü Anma, Gençlik ve Spor Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/19mayis2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">12-18 Mayıs Hemşirelik Haftamız Kutlu Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/hemsire2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/23nisan2019.jpg" height="300px"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Eğitiminin Geleceği: 19-20 Haziran Akreditasyon, Standartlar, İyi Uygulama Örnekleri</div>
                <div className="main-top-second-content"><p>Bilimsel Program, Kayıt & Konaklama, Davet tüm bilgileri <a href="http://www.hemsirelikegitiminingelecegi.com"><strong>buradan</strong></a> erişebilirsiniz.</p> <h6>Sempozyum Yeri ve İletişim</h6><p>Ege Üniversitesi Hemşirelik Fakültesi<br/>Yasemin Şimşek<br/>Dalya Turizm, Kazım Dirik Mah. 372/8 Sk. No:1 Bornova-İzmir, TÜRKİYE<br/>+90 232 464 88 30<br/>yasemin@dalyatur.com</p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Olarak Yeni Yılınızı Kutlarız</div>
                <div className="main-top-second-content"><img src="img/duyurular/yeniyil2019.jpg" height="300px"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-middle">
      <div className="col-sm-12 col-md-3">
        <Link href="/surec"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faHourglassStart}/>Süreç</button></a></Link>
      </div>
      <div className="col-sm-12 col-md-3">
        <Link href="/doc/b1-basvuru-word_v5.doc"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faCheck}/>Başvuru</button></a></Link>
      </div>
      <div className="col-sm-12 col-md-3">
        <Link href="/belgeler"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFileAlt}/>Belgeler</button></a></Link>
      </div>
      <div className="col-sm-12 col-md-3">
        <a href="https://www.facebook.com/pg/hepdak/photos/"><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faImages}/>Albüm</button></a>
      </div>
    </div>
    <div className="main-bottom">
      <div className="main-bottom-title"><a href="akreditasyon#kurulus">İlgili Kuruluşlar</a></div>
      <div className="main-bottom-slider">
        <div className="main-bottom-img">
          <div className="bottom-img">
            <a href="https://www.yok.gov.tr" target="_blank"><img className="link-img" src="img/grey/yok.png" title="Yükseköğretim Kurulu"/></a>
            <a href="https://www.yok.gov.tr" target="_blank"><img className="img-top" src="img/link/yok.png" title="Yükseköğretim Kurulu"/></a>
          </div>
          <div className="bottom-img">
            <a href="https://www.yodek.org.tr" target="_blank"><img className="link-img" src="img/grey/yodek.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></a>
            <a href="https://www.yodek.org.tr" target="_blank"><img className="img-top" src="img/link/yodek.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></a>
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
        </div>
      </div>
    </div>
  </MasterPage>
)
export default Anasayfa


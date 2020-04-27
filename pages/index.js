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
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
              <div className="carousel-inner" data-interval="false">
                <div className="carousel-item active" data-interval="false">
                  <div className="main-top-one-title">YÖKAK SAHA ZİYARETİ</div>
                  <div className="main-top-one-content">Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır.</div>
                </div>
                <div className="carousel-item" data-interval="false">
                  <div className="main-top-one-title">DUYURU</div>
                  <div className="main-top-one-content">17-18 Nisan 2020 tarihinde yapılacağı duyurulan Değerlendirici Eğitimi korona virüs salgını sebebiyle ileri bir tarihe ertelenmiştir. Tarih yeniden duyurulacaktır.</div>
                </div>
                <div className="carousel-item" data-interval="false">
                  <div className="main-top-one-title">HEPDAK, 2023 YILINA KADAR TESCİL EDİLDİ</div>
                  <div className="main-top-one-content">Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği-HEPDAK Yükseköğretim Kalite Kurulu tarafından 25.12.2023 tarihine kadar beş yıllığına tescil edilmiştir.</div>
                </div>
                <div className="carousel-item" data-interval="false">
                  <div className="main-top-one-title">HEPDAK DEĞERLENDİRME VE AKREDİTASYON ÜCRETLERİ</div>
                  <div className="main-top-one-content">2020-2021 Değerlendirme Dönemi Akreditasyon Bedelleri Belirlenmiştir.</div>
                </div>
                <div className="carousel-item" data-interval="false">
                  <div className="main-top-one-title">CEENQUA'DA SEMPOZYUM HABERİMİZ</div>
                  <div className="main-top-one-content">CEENQUA'nın Temmuz haber bülteninde HEPDAK&HEMED birlikteliği ile gerçekleştirilen sempozyum haberimiz yer aldı.</div>
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
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#onsekiz">2018</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#onyedi">2017</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#onalti">2016</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#onbes">2015</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#ondort">2014</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmi" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">YÖKAK SAHA ZİYARETİ</div>
                <div className="main-top-second-content">Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır. Bu bağlamda, YÖKAK tarafından HEPDAK izleme yetkilisi olarak görevlendirilen YÖKAK Üyesi Prof. Dr. İlker Murat Ar, 17 Ocak 2020 tarihinde ofisimizde bir saha ziyareti gerçekleştirmiştir. Toplantıya, HEPDAK Yönetim Kurulu üyeleri yanı sıra, HEAK Başkanı ile bir HEAK üyesi ve bir HEPDAK değerlendiricisi olmak üzere toplam sekiz kişi katılmıştır. HEPDAK Başkanının yaptığı 2019 yılı faaliyetlerini içeren sunumun ardından izleme yetkilisi Prof. Dr. İlker Murat Ar, HEPDAK uygulamalarında güçlü ve geliştirmeye açık yönler konularında önerilerde bulunmuştur. Toplantı, katılımcılarla yapılan yararlı bir görüş alışverişiyle sona ermiştir. HEPDAK Yönetim Kurulu, ilk kez yapılan izleme ziyaretini, akreditasyon süreçlerinin iyileştirilmesi açısından yol gösterici olarak değerlendirmiştir.</div>
              </div>
            </div>
            <div id="ondokuz" className="container tab-pane fade">
              <h3>2019</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="onsekiz" className="container tab-pane fade">
              <h3>2018</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="onyedi" className="container tab-pane fade">
              <h3>2017</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="onalti" className="container tab-pane fade">
              <h3>2016</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="onbes" className="container tab-pane fade">
              <h3>2015</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="ondort" className="container tab-pane fade">
              <h3>2014</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-middle">
      <div className="col-3">
        <Link href="/akreditasyon#surec"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faHourglassStart}/>Süreç</button></a></Link>
      </div>
      <div className="col-3">
        <Link href="/akreditasyon#basvuru"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faCheck}/>Başvuru</button></a></Link>
      </div>
      <div className="col-3">
        <Link href="/akreditasyon#belgeler"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faFileAlt}/>Belgeler</button></a></Link>
      </div>
      <div className="col-3">
        <Link href="/#"><a><button className="main-middle-button"><FontAwesomeIcon className="main-middle-icon" icon={faImages}/>Albüm</button></a></Link>
      </div>
    </div>
    <div className="main-bottom">
      <div className="main-bottom-title">İlgili Kuruluşlar</div>
      <div className="main-bottom-img">
        <div className="bottom-img">
          <a href="https://www.yok.gov.tr" target="_blank"><img className="link-img" src="img/link/yok.png" title="Yükseköğretim Kurulu"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.yodek.org.tr" target="_blank"><img className="link-img" src="img/link/yodek.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.kalder.org" target="_blank"><img className="link-img" src="img/link/kalder.png" title="Türkiye Kalite Derneği"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.mudek.org.tr" target="_blank"><img className="link-img" src="img/link/mudek.png" title="Mühendislik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.eczakder.org.tr" target="_blank"><img className="link-img" src="img/link/eczakder.png" title="Eczacılık Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.fedek.org.tr" target="_blank"><img className="link-img" src="img/link/fedek.png" title="Fen, Edebiyat, Fen-Edebiyat, Dil ve Tarih - Coğrafya Fakülteleri Öğretim Programları Değerlendirme ve Akreditasyon Derneği "/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.hemed.org.tr" target="_blank"><img className="link-img" src="img/link/hemed.png" title="Hemşirelik Eğitimi Derneği"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.psikolog.org.tr" target="_blank"><img className="link-img" src="img/link/turk-psikolog.png" title="Türk Psikologlar Derneği"/></a>
        </div>    
        <div className="bottom-img">
          <a href="https://www.vedek.org.tr" target="_blank"><img className="link-img" src="img/link/vedek.png" title="Veteriner Hekimliği Eğitim Kurumları ve Programları Değerlendirme ve Akreditasyon Derneği"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.nln.org" target="_blank"><img className="link-img" src="img/link/nln-org.png" title="National League for Nursing"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.aacnnursing.org" target="_blank"><img className="link-img" src="img/link/aacn.png" title="American Association of Colloges of Nursing"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.aacnnursing.org/CCNE" target="_blank"><img className="link-img" src="img/link/ccne.png" title="Commision on Collegiate Nursing Education"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.casn.ca" target="_blank"><img className="link-img" src="img/link/casn-ca-new.png" title="Canadian Association of Schools of Nursing"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.chea.org" target="_blank"><img className="link-img" src="img/link/chea-org.png" title="Council for Higher Education Accreditation"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.enqa.eu" target="_blank"><img className="link-img" src="img/link/enqa-eu.png" title="European Association for Quality Assurance for Higher Education"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.qaa.ac.uk" target="_blank"><img className="link-img" src="img/link/qaa-ac-uk.png" title="Quality Assurance Agency for Higher Education"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.eqar.eu" target="_blank"><img className="link-img" src="img/link/eqar-eu.png" title="European Quality Assurance Register for Higher Education"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.inqaahe.org" target="_blank"><img className="link-img" src="img/link/inqaahe-org.png" title="International Network for Quality Assurance Agencies in Higher Education"/></a>
        </div>
        <div className="bottom-img">
          <a href="https://www.eurashe.eu" target="_blank"><img className="link-img" src="img/link/eurashe-eu-black.png" title="European Association of Institutions in Higher Education"/></a>
        </div>
      </div>
    </div>
  </MasterPage>
)
export default Anasayfa


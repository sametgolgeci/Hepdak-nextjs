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
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Son Duyurular</a>
          </li>
          <li className="nav-item">
            <a className="nav-link tum" href="#">Tüm Duyurular</a>
          </li>
        </ul>
      </div>
      <div className="main-top-one">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel" data-interval="false">
          <div className="carousel-inner" data-interval="false">
            <div className="carousel-item active" data-interval="false">
              <div className="main-top-one-title">YÖKAK SAHA ZİYARETİ</div>
              <div className="main-top-one-content">Yüksek Öğretim Kalite Kurulu (YÖKAK), Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz</div>
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
      <div className="main-bottom-title">
        <span>İlgili Kuruluşlar</span>
      </div>
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


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
        <ul class="nav nav-pills nav-justified">
          <li class="nav-item">
            <a class="nav-link main-nav active" data-toggle="pill" href="#son">Son Duyurular</a>
          </li>
          <li class="nav-item">
            <a class="nav-link main-nav" data-toggle="pill" href="#tum">Tüm Duyurular</a>
          </li>
        </ul>
      </div>
      <div class="tab-content">
        <div class="tab-pane active" id="son">
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
        <div class="tab-pane fade main-second-nav" id="tum">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a class="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmi">2020</a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-second-nav-item" data-toggle="pill" href="#ondokuz">2019</a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-second-nav-item" data-toggle="pill" href="#onsekiz">2018</a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-second-nav-item" data-toggle="pill" href="#onyedi">2017</a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-second-nav-item" data-toggle="pill" href="#onalti">2016</a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-second-nav-item" data-toggle="pill" href="#onbes">2015</a>
            </li>
            <li class="nav-item">
              <a class="nav-link main-second-nav-item" data-toggle="pill" href="#ondort">2014</a>
            </li>
          </ul>
          <div class="tab-content">
            <div id="yirmi" class="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">YÖKAK SAHA ZİYARETİ</div>
                <div className="main-top-second-content">Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır. Bu bağlamda, YÖKAK tarafından HEPDAK izleme yetkilisi olarak görevlendirilen YÖKAK Üyesi Prof. Dr. İlker Murat Ar, 17 Ocak 2020 tarihinde ofisimizde bir saha ziyareti gerçekleştirmiştir. Toplantıya, HEPDAK Yönetim Kurulu üyeleri yanı sıra, HEAK Başkanı ile bir HEAK üyesi ve bir HEPDAK değerlendiricisi olmak üzere toplam sekiz kişi katılmıştır. HEPDAK Başkanının yaptığı 2019 yılı faaliyetlerini içeren sunumun ardından izleme yetkilisi Prof. Dr. İlker Murat Ar, HEPDAK uygulamalarında güçlü ve geliştirmeye açık yönler konularında önerilerde bulunmuştur. Toplantı, katılımcılarla yapılan yararlı bir görüş alışverişiyle sona ermiştir. HEPDAK Yönetim Kurulu, ilk kez yapılan izleme ziyaretini, akreditasyon süreçlerinin iyileştirilmesi açısından yol gösterici olarak değerlendirmiştir.</div>
              </div>
            </div>
            <div id="ondokuz" class="container tab-pane fade">
              <h3>2019</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div id="onsekiz" class="container tab-pane fade">
              <h3>2018</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="onyedi" class="container tab-pane fade">
              <h3>2017</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="onalti" class="container tab-pane fade">
              <h3>2016</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="onbes" class="container tab-pane fade">
              <h3>2015</h3>
              <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
            </div>
            <div id="ondort" class="container tab-pane fade">
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
  </MasterPage>
)
export default Anasayfa


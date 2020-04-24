import MasterPage from '../components/master-page'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHourglassStart,faCheck,faFileAlt,faImages,faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'
import Link from 'next/link'

const Deneme = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Deneme</title>
	    </Head>
      <ul class="nav nav-pills nav-justified">
			  <li class="nav-item">
			    <a class="nav-link main-nav active" data-toggle="pill" href="#son">Son Duyurular</a>
			  </li>
			  <li class="nav-item">
			    <a class="nav-link main-nav" data-toggle="pill" href="#tum">Tüm Duyurular</a>
			  </li>
			</ul>

			<div class="tab-content">
			  <div class="tab-pane active" id="son">
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
			  <div class="tab-pane container fade" id="tum">
			  	<ul class="nav justify-content-center">
					  <li class="nav-item">
					    <a class="nav-link main-nav active" data-toggle="pill" href="#2020">2020</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link main-nav" data-toggle="pill" href="#2019">2019</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link main-nav" data-toggle="pill" href="#2018">2018</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link main-nav" data-toggle="pill" href="#2017">2017</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link main-nav" data-toggle="pill" href="#2016">2016</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link main-nav" data-toggle="pill" href="#2015">2015</a>
					  </li>
					  <li class="nav-item">
					    <a class="nav-link main-nav" data-toggle="pill" href="#2014">2014</a>
					  </li>
					</ul>
			  </div>
			</div>
    </MasterPage>
)
export default Deneme





import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Calistay = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Öğrenci Değerlendirici Eğitimi Çalıştayı</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
		<h1 id="ogrenci">Öğrenci Değerlendirici Eğitimi Çalıştayı</h1>
		<p>HEPDAK değerlendirmelerinde program değerlendiricisi olarak görev alacak olan öğrenci değerlendiricilerin daha önceden bir değerlendirici eğitiminden geçmeleri gerekmektedir. Öğrenci değerlendirici adaylarına bu eğitimlerde aşağıda belirtilen konularında bilgilendirme yapılmaktadır;</p>
		<p className="madde-p">• HEPDAK ve değerlendirme sürecini yakından tanıma</p>
		<p className="madde-p">• Değerlendirme becerisini geliştirme</p>
		<p className="madde-p">• Değerlendirici davranışını geliştirme</p>
		<p className="madde-p">• Öğrenci değerlendiricilerden değerlendirme sürecindeki beklentiler</p>
		<h6><span className="badge badge-custom">4</span> 28 Mart 2021</h6>
		<p>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/ogrenci_egitim_4/program.pdf" target="_blank">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/ogrenci_egitim_4/katilimcilar.pdf" target="_blank">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Sunumlar</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExampleFoto" role="button" aria-expanded="false" aria-controls="collapseExampleFoto">Fotoğraflar</a>
			  </li>
			{/*
			  <li className="nav-item">
			    <a className="nav-link calistay-button disable" href="#" target="_blank">Değerlendirme</a>
			  </li>
			  */}
			</ul>
		</p>
		<div className="collapse" id="collapseExample">
			<p><strong>-> Sunumlar</strong></p>
			<p className="madde-p">
				<a href="/doc/ogrenci_egitim_4/belge_1.ppt">1. Çalıştayın Amaçları</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_2.ppt">2. Akreditasyon Süreci</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_3.ppt">3. HEPDAK  Hemşirelik Lisans Eğitim Programı Standartları (Sürüm 4.0)</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_4.ppt">4. Öğrenci Değerlendirici Standartları</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_5.ppt">5. Öğrenci Değerlendiricilerin Sürece Katılımı</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_6.ppt">6. Davranışsal Boyut</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_7.ppt">7. Tutarlılık</a><br/>
				<a href="/doc/ogrenci_egitim_4/belge_8.ppt">8. Rapor Yazımı</a>
			</p>
		</div>
		<div className="collapse" id="collapseExampleFoto">
			<p><strong>-> Fotoğraflar</strong></p>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/1.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/1.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/2.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/2.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/3.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/3.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/4.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/4.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/5.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/5.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/6.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/6.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/7.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/7.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/8.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/8.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/9.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/9.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/10.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/10.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/11.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/11.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/12.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/12.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/13.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/13.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/14.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/14.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/15.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/15.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/ogrenci_egitim_4/16.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/16.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
				</div>
			</div>
		</div>
		<h6><span className="badge badge-custom">3</span> 22 Şubat 2020 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/ogrenci_egitim_3/22Subat2020_ogr_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/ogrenci_egitim_3/22Subat2020_ogr_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/ogrenci_egitim_3/22Subat2020_egitim_degerlendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">2</span> 31 Mart 2018 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/31Mart2018_ogr_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/31Mart2018_ogr_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/31Mart2018_egitim_degerlendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">1</span> 29 Ocak 2016 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/29Ocak2016_ogr_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/29Ocak2016_ogr_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		</ul>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Calistay

import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Calistay = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Uluslararası Toplantılar</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
		<h1>Uluslararası Toplantılar ve Faaliyetler</h1>
		<h4>- CEENQA Faaliyetleri</h4>
		<h6><span className="badge badge-custom">-</span> 19 Mayıs 2021 - CEENQA Toplantısı </h6>
			<p className="madde-p">
				<a href="/doc/uluslararasi-2/belge_1.pdf" target="_blank">1. 19 May 2021: Fifth bi-monthly CEENQA meeting</a><br/>
			</p>
		<h6><span className="badge badge-custom">-</span> CEENQA Çevrimiçi Değerlendirici Değişim Programı</h6>
			<p><strong>- Sunumlar</strong></p>
			<p className="madde-p">
				<a href="/doc/uluslararasi-1/belge_1.pdf" target="_blank">1. CEENQA Online Staff Exchange Program</a><br/>
				<a href="/doc/uluslararasi-1/belge_2.pdf" target="_blank">2. HEPDAK Association for Evaluation and Accreditation of Nursing Education Programs</a><br/>
				<a href="/doc/uluslararasi-1/belge_3.pdf" target="_blank">3. HEPDAK : Response to COVID-19 Pandemic QUALITY ASSURANCE ACTIVITIES OF HEPDAK FOR DISTANCE EVALUATION</a><br/>
				<a href="/doc/uluslararasi-1/belge_4.pdf" target="_blank">4. Council of Higher Education - Turkey</a><br/>
				<a href="/doc/uluslararasi-1/belge_5.pdf" target="_blank">5. Distance Evaluation AIC AIKA</a><br/>
				<a href="/doc/uluslararasi-1/belge_6.pdf" target="_blank">6. Introduction AIC AIKA</a><br/>
				<a href="/doc/uluslararasi-1/belge_7.pdf" target="_blank">7. Stakeholders AIC AIKA</a><br/>
				<a href="/doc/uluslararasi-1/belge_8.pdf" target="_blank">8. Steps of assessment procedures AIC AIKA</a><br/>
			</p>
			<p><strong>- Fotoğraflar</strong></p>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-1.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-1.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-2.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-2.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-3.png" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-3.png"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-4.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-4.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-5.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-5.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-6.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-6.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-7.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-7.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-8.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-8.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-9.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-9.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-10.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-10.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-11.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-11.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-12.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-12.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-13.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-13.jpg"/></a></div>
				</div>
			</div>
			<h6><span className="badge badge-custom">-</span> Uluslararası Çalışmalar </h6>
			<p className="madde-p">
				<a href="/doc/hepdak_sunumlari/belge_1.pdf" target="_blank">3. Prof.Dr. Ayla Bayık Temel - CEENQUA 2020 Aralık 2020 Bülten Yazısı</a><br/>
				<a href="/doc/hepdak_sunumlari/belge_3.pdf" target="_blank">2. Prof.Dr. Ayla Bayık Temel - CEENQUA 2020 Temmuz Bülten Yazısı</a><br/>
				<a href="/doc/Uluslararasi_Calismalar.pdf" target="_blank">1. HEPDAK’ın Üye Olduğu CEENQA İçindeki Faaliyetleri: 2020</a><br/>
			</p>
			<h4>- INQAAHE Faaliyetleri</h4>
		{/*
		<p>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/uluslararasi-1/foto-program.pdf" target="_blank">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/uluslararasi-1/foto-katilimcilar.pdf" target="_blank">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Sunumlar</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExampleFoto" role="button" aria-expanded="false" aria-controls="collapseExampleFoto">Fotoğraflar</a>
			  </li>
			
			  <li className="nav-item">
			    <a className="nav-link calistay-button disable" href="#" target="_blank">Değerlendirme</a>
			  </li>
			  
			</ul>
		</p>
		*/}
	{/*
		<div className="collapse" id="collapseExample">
			<p><strong>-> Sunumlar</strong></p>
			<p className="madde-p">
				<a href="/doc/uluslararasi-1/foto-belge_1.ppt">1. Çalıştayın Amaçları</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_2.ppt">2. Akreditasyon Süreci</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_3.ppt">3. HEPDAK  Hemşirelik Lisans Eğitim Programı Standartları (Sürüm 4.0)</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_4.ppt">4. Öğrenci Değerlendirici Standartları</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_5.ppt">5. Öğrenci Değerlendiricilerin Sürece Katılımı</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_6.ppt">6. Davranışsal Boyut</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_7.ppt">7. Tutarlılık</a><br/>
				<a href="/doc/uluslararasi-1/foto-belge_8.ppt">8. Rapor Yazımı</a>
			</p>
		</div>
		<div className="collapse" id="collapseExampleFoto">
			<p><strong>-> Fotoğraflar</strong></p>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-1.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-1.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-2.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-2.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-3.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-3.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-4.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-4.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-5.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-5.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-6.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-6.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-7.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-7.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-8.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-8.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-9.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-9.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-10.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-10.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-11.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-11.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-12.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-12.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-13.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-13.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-14.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-14.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-15.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-15.jpg"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/uluslararasi-1/foto-16.jpg" target="_blank"><img className="calistay-img" src="/doc/uluslararasi-1/foto-16.jpg"/></a></div>
				</div>
			</div>
		</div>
		*/}
		</div>
	</div>
</MasterPage>
)
export default Calistay

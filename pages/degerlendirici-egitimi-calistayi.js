import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Calistay = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Değerlendirici Eğitimi Çalıştayı</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
		<h1 id="degerlendirici">Değerlendirici Eğitimi Çalıştayı</h1>
		<p><strong>Değerlendirici eğitimi programının amacı :</strong>HEPDAK değerlendiricilerinin, akreditasyon sürecinde güvenilir, tutarlı ve uygun karar vermelerine yardımcı olmaktır.</p>
		<p><strong>Hedefler</strong></p>
		<p>Eğitim öncesi çalışmalarda ve eğitim sonunda katılımcıların şunları yapması beklenir:</p>
		<p className="madde-p">• Akreditasyon sürecini ve ilkelerini bilme ve tartışabilme</p>
		<p className="madde-p">• HEPDAK Hemşirelik Lisans Eğitimi Standartlarını kavrama</p>
		<p className="madde-p">• ÖDR ve eklerini eleştirel olarak değerlendirebilme</p>
		<p className="madde-p">• Değerlendiricinin sorumluluklarını duyarlılıkla yerine getirebilme</p>
		<p className="madde-p">• Ekiple birlikte değerlendirme çalışmalarını sürdürebilme</p>
		<p className="madde-p">• HEPDAK standartlarının karşılanma durumuna karar verebilme</p>
		<p className="madde-p">• Değerlendirme raporu hazırlayabilme</p>
		<p className="madde-p">• Yerinde ve sanal ziyaret  süreçlerini anlama</p>
		<h6><span className="badge badge-custom">6</span> HEPDAK Değerlendirici Eğitim Çalıştayı 10-12 Haziran 2021</h6>
		<p>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_6/program.pdf">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_6/katilim-listesi.pdf">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExampleFoto6" role="button" aria-expanded="false" aria-controls="collapseExampleFoto6">Fotoğraflar</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_6/degerlendirme.pdf">Değerlendirme</a>
			  </li>
			</ul>
		</p>
	{/*
		<div className="collapse" id="collapseExample">
		<p><strong>-> Sunumlar</strong></p>
		<p className="madde-p"><a href="/doc/degerlendirici_egitim_5/1.acılıs.pptx">1. Çalıştay Açılışı</a><br/>
		<a href="/doc/degerlendirici_egitim_5/2.akreditasyon_sureci.ppt">2. Akreditasyon Süreci</a><br/>
		<a href="/doc/degerlendirici_egitim_5/3.HEPDAK_hemsirelik_lisans_egitim_programı_standartları.ppt">3. Hemşirelik Lisans Eğitim Standartları</a><br/>
		<a href="/doc/degerlendirici_egitim_5/4.uzaktan_egitim_standartları.ppt">4. Uzaktan Eğitim Standartları</a><br/>
		<a href="/doc/degerlendirici_egitim_5/5.ziyaret_oncesi_planlama.ppt">5. Ziyaret Öncesi Planlama</a><br/>
		<a href="/doc/degerlendirici_egitim_5/6.ziyaret_sureci_ve_sonrası_etkinlikler.ppt">6. Ziyaret Süreci ve Sonrası Etkinlikler</a><br/>
		<a href="/doc/degerlendirici_egitim_5/7.takım_baskanının_sorumlulukları.pptx">7. Takım Başkanının Sorumlulukları</a><br/>
		<a href="/doc/degerlendirici_egitim_5/8.tutarlılık.ppt">8. Tutarlılık</a><br/>
		<a href="/doc/degerlendirici_egitim_5/9.davranıssal_boyut.ppt">9. Davranışsal Boyut</a><br/>
		<a href="/doc/degerlendirici_egitim_5/10.uzaktan_degerlendirme.ppt">10. Uzaktan Değerlendirme</a><br/>
		<a href="/doc/degerlendirici_egitim_5/11.degerlendirme_raporu_yazımı_ve_cıkıs_gorusmesi.ppt">11. Değerlendirme Raporu Yazımı ve Çıkış Görüşmesi</a></p>
		</div>
		*/}
		<div className="collapse" id="collapseExampleFoto6">
			<p><strong>-> Fotoğraflar</strong></p>
			<div className="container">
				<div className="row">
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/1.JPG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/1.JPG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/2.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/2.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/3.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/3.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/4.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/4.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/5.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/5.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/6.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/6.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/7.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/7.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/8.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/8.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/9.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/9.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/10.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/10.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/11.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/11.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/12.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/12.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/13.png" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/13.png" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/14.jpg" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/14.jpg" alt="Değerlendirici Eğitimi 6"/></a></div>
					<div className="col-md-3 col-sm-12"><a href="/doc/degerlendirici_egitim_6/15.jpg" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/15.jpg" alt="Değerlendirici Eğitimi 6"/></a></div>
				</div>
			</div>
		</div>
		<h6><span className="badge badge-custom">5</span> HEPDAK Değerlendirici Eğitim Çalıştayı 10-12 Ağustos 2020 (İzmir)</h6>
		<p>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_5/degerlendirici_egitim_5_program.pdf">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_5/degerlendirici_egitim_5_katilim_listesi.pdf">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Sunumlar</a>
			  </li>
			  <li className="nav-item" disabled>
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_5/degerlendirici_egitim_5_degerlendirme.pdf">Değerlendirme</a>
			  </li>
			</ul>
		</p>
		<div className="collapse" id="collapseExample">
		<p><strong>-> Sunumlar</strong></p>
		<p className="madde-p"><a href="/doc/degerlendirici_egitim_5/1.acılıs.pptx">1. Çalıştay Açılışı</a><br/>
		<a href="/doc/degerlendirici_egitim_5/2.akreditasyon_sureci.ppt">2. Akreditasyon Süreci</a><br/>
		<a href="/doc/degerlendirici_egitim_5/3.HEPDAK_hemsirelik_lisans_egitim_programı_standartları.ppt">3. Hemşirelik Lisans Eğitim Standartları</a><br/>
		<a href="/doc/degerlendirici_egitim_5/4.uzaktan_egitim_standartları.ppt">4. Uzaktan Eğitim Standartları</a><br/>
		<a href="/doc/degerlendirici_egitim_5/5.ziyaret_oncesi_planlama.ppt">5. Ziyaret Öncesi Planlama</a><br/>
		<a href="/doc/degerlendirici_egitim_5/6.ziyaret_sureci_ve_sonrası_etkinlikler.ppt">6. Ziyaret Süreci ve Sonrası Etkinlikler</a><br/>
		<a href="/doc/degerlendirici_egitim_5/7.takım_baskanının_sorumlulukları.pptx">7. Takım Başkanının Sorumlulukları</a><br/>
		<a href="/doc/degerlendirici_egitim_5/8.tutarlılık.ppt">8. Tutarlılık</a><br/>
		<a href="/doc/degerlendirici_egitim_5/9.davranıssal_boyut.ppt">9. Davranışsal Boyut</a><br/>
		<a href="/doc/degerlendirici_egitim_5/10.uzaktan_degerlendirme.ppt">10. Uzaktan Değerlendirme</a><br/>
		<a href="/doc/degerlendirici_egitim_5/11.degerlendirme_raporu_yazımı_ve_cıkıs_gorusmesi.ppt">11. Değerlendirme Raporu Yazımı ve Çıkış Görüşmesi</a></p>
		</div>
		<h6><span className="badge badge-custom">4</span> HEPDAK Değerlendirici Eğitim Çalıştayı 03-04 Eylül 2018 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/3-4eylul2018-deg-egitim-programi.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/2018_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/2018_degerlendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">3</span> HEPDAK Değerlendirici Eğitim Çalıştayı 19-20 Ocak 2017 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/19-20Ocak2017-program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/19-20Ocak2017-liste.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/19-20Ocak2017-degerlendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">2</span> HEPDAK Değerlendirici Eğitim Çalıştayı 04 Eylül 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/4Eylul2015_ogr_program.pdf">Program</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">1</span> HEPDAK Değerlendirici Eğitim Çalıştayı 28-29 Mart 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28-29Mart2015_ogr_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28-29Mart2015_ogr_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		</ul>
		</div>
	</div>
</MasterPage>
)
export default Calistay

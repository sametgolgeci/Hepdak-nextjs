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
		<p>HEPDAK değerlendirmelerinde program değerlendiricisi olarak görev alacak olanların değerlendirme öncesinde bir değerlendirici eğitiminden geçmeleri gerekmektedir.</p>
		<p>Program değerlendirici adaylarına aşağıdaki konularda bilgilendirmek ve eğitmek amaçlı çalıştaylar yapılmaktadır;</p>
		<p className="madde-p">• HEPDAK ve değerlendirme sürecini daha yakından tanıma</p>
		<p className="madde-p">• Değerlendirme becerisini geliştirme</p>
		<p className="madde-p">• Değerlendirici davranışını geliştirme</p>
		<p className="madde-p">• Değerlendirmeler arası tutarlılığı sağlama</p>
		<p className="madde-p">• Değerlendirme raporu yazma becerisini geliştirmee</p>
		<h6><span className="badge badge-custom">5</span> HEPDAK Değerlendirici Eğitim Çalıştayı 10-12 Ağustos 2020 (İzmir)</h6>
		<p>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_5/degerlendirici_egitim_5_program.docx">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/degerlendirici_egitim_5/degerlendirici_egitim_5_katilim_listesi.docx">Katılımcı Listesi</a>
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
		    <a className="nav-link calistay-button" href="doc/3-4eylul2018-deg-katilim-listesi.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/3-4eylul2018-degerlendirme-sonuclari.pdf">Değerlendirme</a>
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

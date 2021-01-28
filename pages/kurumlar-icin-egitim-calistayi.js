import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Calistay = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Kurumlar için Eğitim Çalıştayı</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
		<h1 id="kurumlar">Kurumlar için Eğitim Çalıştayı</h1>
		<p>HEPDAK akreditasyonuna başvurmayı ve/veya HEPDAK standartlarına göre programlarında iyileştirme yapmayı planlayan hemşirelik lisans programlarının yönetici ve öğretim kadrosuna aşağıda belirtilen konuları kapsayan çalıştaylar yapılmaktadır.</p>
		<p className="madde-p">• HEPDAK hakkında genel bilgiler ve hemşirelik lisans programlarının akreditasyonu hakkında bilgiler</p>
		<p className="madde-p">• HEPDAK akreditasyonundaki temel kavramlar</p>
		<p className="madde-p">• HEPDAK değerlendirme standartları ve açıklamaları</p>
		<p className="madde-p">• Standartlardaki çıktı odaklı sürekli iyileştirme yaklaşımının hemşirelik lisans programlarına uygulanması</p>
		<p className="madde-p">• Değerlendirme süreci; Fakülte ve Bölümlerin akreditasyon hazırlıkları</p>
		<p className="madde-p">• Özdeğerlendirme raporları</p>
		<p className="madde-p">• Değerlendirme takımlarınca yapılan kurum ziyaretleri</p>
		<h6><span className="badge badge-custom">8</span> 24 Ekim 2020</h6>
		<p>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/kurumlar_egitim_8/program.docx">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/kurumlar_egitim_8/katilimcilar.docx">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">Sunumlar</a>
			  </li>
			</ul>
		</p>
		<div className="collapse" id="collapseExample">
		<p><strong>-> Sunumlar</strong></p>
		<p className="madde-p"><a href="/doc/kurumlar_egitim_8/giris.pptx">1. Çalıştay Açılışı</a><br/>
		<a href="/doc/kurumlar_egitim_8/akreditasyon_sureci.ppt">2. Akreditasyon Süreci</a><br/>
		<a href="/doc/kurumlar_egitim_8/program_amaclari.ppt">3. Program Amaçları</a><br/>
		<a href="/doc/kurumlar_egitim_8/program_ciktilari.ppt">4. Program Çıktıları ve Eğitim Programı</a><br/>
		<a href="/doc/kurumlar_egitim_8/ogrenciler.ppt">5. Öğrenciler</a><br/>
		<a href="/doc/kurumlar_egitim_8/ogretim_elemanlari.ppt">6. Öğretim Elemanları ve Eğitim Yönetimi</a><br/>
		<a href="/doc/kurumlar_egitim_8/fiziksel_altyapi.ppt">7. Fiziksel Altyapı ve Sürekli İyileştirme</a><br/>
		<a href="/doc/kurumlar_egitim_8/uzaktan_egitim_standartlari.ppt">8. Uzaktan Eğitim Standartları</a><br/>
		<a href="/doc/kurumlar_egitim_8/uzaktan_degerlendirme.ppt">9. Uzaktan Değerlendirme</a><br/>
		<a href="/doc/kurumlar_egitim_8/ODR_hazırlamada_dikkat_edilecek_konular.ppt">10. Özdeğerlendirme İçeriğinin Hazırlaması ve Dikkat Edilecek Konular</a></p>
		</div>
		<h6><span className="badge badge-custom">7</span> 18 Ocak 2020 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/18ocak2020_egitim_calistayi.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/18ocak2020_egitim_calistayi_katlimcilar.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/kurum_egitim_slayt_18ocak2020.pdf">Eğitim İçeriği</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/kurum_egitim_degerlendirme_18ocak2020.pdf">Değerlendirme</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">6</span> 21 Aralık 2019 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/21Aralik2019_egitim_calistayi.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/21Aralik2019_egitim_calistayi_katlimcilar.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/21Aralik2019_egitim_calistayi_degerlendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">5</span> 1 Aralık 2018 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/1Aralik2018_kurum_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/1Aralik2018_katilim_listesi.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/1Aralik2018_degerelendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>	
		<h6><span className="badge badge-custom">4</span> 23 Aralık 2017 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/23Aralik2017_kurum_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/23Aralik2017_katilim_listesi.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/23Aralik2017_degerelendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>	
		<h6><span className="badge badge-custom">3</span> 17 Aralık 2016 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/17Aralik2016_kurum_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/17Aralik2016_katilim_listesi.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/17Aralik2016_degerelendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>	
		<h6><span className="badge badge-custom">2</span> 28 Kasım 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28Kasim2015_kurum_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28Kasim2015_kurum_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		</ul>	
		<h6><span className="badge badge-custom">1</span> 31 Ocak 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/31Ocak2015_kurum_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/31Ocak2015_kurum_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/31Ocak2015_kurum_degerlendirme.pdf">Değerlendirme</a>
		  </li>
		</ul>		
		</div>
	</div>
</MasterPage>
)
export default Calistay

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
		<p>HEPDAK akreditasyonuna başvurmayı ve/veya HEPDAK standartlarına göre programlarında iyileştirme yapmayı planlayan hemşirelik lisans programlarının yönetici ve öğretim kadrosuna çalıştaylar yapılmaktadır.</p>
		<p>Yapılan çalıştayların içeriğinde; HEPDAK hakkında genel bilgiler ve hemşirelik lisans programlarının akreditasyonu hakkında bilgiler verilmesi, HEPDAK akreditasyonundaki temel kavramlar, standartlardaki çıktı odaklı sürekli iyileştirme yaklaşımının hemşirelik lisans programlarına uygulanması, değerlendirme süreci, Fakülte ve Bölümlerin akreditasyon hazırlıkları, özdeğerlendirme raporları, değerlendirme takımlarınca yapılan kurum ziyaretleri yer almaktadır.</p>
		<h6><span className="badge badge-custom">7</span> 18 Ocak 2020 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/18ocak2020_egitim_calistayi.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/18ocak2020_egitim_calistayi_katlimcilar.pdf">Katılımcı Listesi</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/kurum_egitim_slayt_18ocak2020.pdf">Değerlendirme</a>
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

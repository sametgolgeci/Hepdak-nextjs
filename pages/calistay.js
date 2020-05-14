import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Calistay = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Calıştay</title>
	</Head>
	<div className="genel">
		<h3 id="kurumlar">HEPDAK Kurumlar için Eğitim Çalıştayı</h3>
		<p>HEPDAK akreditasyonuna başvurmayı ve/veya HEPDAK standartlarına göre programlarında iyileştirme yapmayı planlayan hemşirelik lisans programlarının yönetici ve öğretim kadrosuna çalıştaylar yapılmaktadır.</p>
		<p>Yapılan çalıştayların içeriğinde; HEPDAK hakkında genel bilgiler ve hemşirelik lisans programlarının akreditasyonu hakkında bilgiler verilmesi, HEPDAK akreditasyonundaki temel kavramlar, standartlardaki çıktı odaklı sürekli iyileştirme yaklaşımının hemşirelik lisans programlarına uygulanması, değerlendirme süreci, Fakülte ve Bölümlerin akreditasyon hazırlıkları, özdeğerlendirme raporları, değerlendirme takımlarınca yapılan kurum ziyaretleri yer almaktadır.</p>
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
		<h6><span className="badge badge-custom">2</span> 28 Kasım 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28Kasim2015_kurum_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28Kasim2015_kurum_katilimci.pdf">Katılımcı Listesi</a>
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
		<h6><span className="badge badge-custom">6</span> 21 Aralık 2019 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/21Aralik2019_egitim_calistayi.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/21Aralik2019_egitim_calistayi_katlimcilar.pdf">Katılımcı Listesi</a>
		  </li>
		</ul>			
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
		<h3 id="degerlendirici">HEPDAK Değerlendirici Eğitimi Çalıştayı</h3>
		<p>HEPDAK değerlendirmelerinde program değerlendiricisi olarak görev alacak olanların değerlendirme öncesinde bir değerlendirici eğitiminden geçmeleri gerekmektedir.</p>
		<p>Program değerlendirici adaylarına aşağıdaki konularda bilgilendirmek ve eğitmek amaçlı çalıştaylar yapılmaktadır;</p>
		<p>• HEPDAK ve değerlendirme sürecini daha yakından tanıma</p>
		<p>• Değerlendirme becerisini geliştirme</p>
		<p>• Değerlendirici davranışını geliştirme</p>
		<p>• Değerlendirmeler arası tutarlılığı sağlama</p>
		<p>• Değerlendirme raporu yazma becerisini geliştirme</p>
		<h6><span className="badge badge-custom">1</span> HEPDAK Değerlendirici Eğitim Çalıştayı 28-29 Mart 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28-29Mart2015_ogr_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/28-29Mart2015_ogr_katilimci.pdf">Katılımcı Listesi</a>
		  </li>
		</ul>
		<h6><span className="badge badge-custom">2</span> HEPDAK Değerlendirici Eğitim Çalıştayı 04 Eylül 2015 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/4Eylul2015_ogr_program.pdf">Program</a>
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
		<h3 id="ogrenci">HEPDAK Öğrenci Değerlendirici Eğitimi Çalıştayı</h3>
		<p>HEPDAK değerlendirmelerinde program değerlendiricisi olarak görev alacak olan öğrenci değerlendiricilerin daha önceden bir değerlendirici eğitiminden geçmeleri gerekmektedir. Öğrenci değerlendirici adaylarına bu eğitimlerde aşağıda belirtilen konularında bilgilendirme yapılmaktadır;</p>
		<p>• HEPDAK ve değerlendirme sürecini yakından tanıma</p>
		<p>• Değerlendirme becerisini geliştirme</p>
		<p>• Değerlendirici davranışını geliştirme</p>
		<p>• Öğrenci değerlendiricilerden değerlendirme sürecindeki beklentiler</p>
		<h6><span className="badge badge-custom">1</span> 29 Ocak 2016 (İzmir)</h6>
		<ul className="nav calistay-nav">
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/29Ocak2016_ogr_program.pdf">Program</a>
		  </li>
		  <li className="nav-item">
		    <a className="nav-link calistay-button" href="doc/29Ocak2016_ogr_katilimci.pdf">Katılımcı Listesi</a>
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
	</div>
</MasterPage>
)
export default Calistay

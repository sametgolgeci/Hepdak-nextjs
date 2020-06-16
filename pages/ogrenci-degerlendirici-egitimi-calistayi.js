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
		<p>• HEPDAK ve değerlendirme sürecini yakından tanıma</p>
		<p>• Değerlendirme becerisini geliştirme</p>
		<p>• Değerlendirici davranışını geliştirme</p>
		<p>• Öğrenci değerlendiricilerden değerlendirme sürecindeki beklentiler</p>
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

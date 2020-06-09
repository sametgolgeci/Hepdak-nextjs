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
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Calistay

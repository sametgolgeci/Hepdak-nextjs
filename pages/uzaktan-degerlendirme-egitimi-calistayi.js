import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Calistay = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Uzaktan Değerlendirme Eğitimi Çalıştayı</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="uzaktan">Değerlendiriciler ve Kurumlar için Uzaktan Değerlendirme Eğitimi Çalıştayı</h1>
	{/*
			<p>HEPDAK değerlendirmelerinde program değerlendiricisi olarak görev alacak olan öğrenci değerlendiricilerin daha önceden bir değerlendirici eğitiminden geçmeleri gerekmektedir. Öğrenci değerlendirici adaylarına bu eğitimlerde aşağıda belirtilen konularında bilgilendirme yapılmaktadır;</p>
			<p className="madde-p">• HEPDAK ve değerlendirme sürecini yakından tanıma</p>
			<p className="madde-p">• Değerlendirme becerisini geliştirme</p>
			<p className="madde-p">• Değerlendirici davranışını geliştirme</p>
			<p className="madde-p">• Öğrenci değerlendiricilerden değerlendirme sürecindeki beklentiler</p>
	*/}
			<h6><span className="badge badge-custom">1</span> 13 Kasım 2020</h6>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/uzaktan_calistay_1/13Kasım2020_uzaktan_calistay_program.pdf">Program</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/uzaktan_calistay_1/13Kasım2020_uzaktan_calistay_katilimci.pdf">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a className="nav-link calistay-button" href="doc/uzaktan_calistay_1/13Kasım2020_uzaktan_calistay_degerlendirme.pdf">Değerlendirme</a>
			  </li>
			</ul>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Calistay

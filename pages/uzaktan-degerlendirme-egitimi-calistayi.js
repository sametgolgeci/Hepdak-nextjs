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
			<p><strong>Eğitimin amacı,</strong> değerlendiricilerin sanal kurum ziyareti aşamalarını deneyimlemelerini sağlayarak uzaktan ziyaret sürecinin kolaylaştırılmasına katkıda bulunmaktır.</p>
			<h6><span className="badge badge-custom">1</span> 13 Kasım 2020</h6>
			<ul className="nav calistay-nav">
			  <li className="nav-item">
			    <a target="_blank" className="nav-link calistay-button" href="doc/uzaktan_calistay_1/13Kasım2020_uzaktan_calistay_program.pdf">Program</a>
			  </li>
			  <li className="nav-item">
			    <a target="_blank" className="nav-link calistay-button" href="doc/uzaktan_calistay_1/13Kasım2020_uzaktan_calistay_katilimci.pdf">Katılımcı Listesi</a>
			  </li>
			  <li className="nav-item">
			    <a target="_blank" className="nav-link calistay-button" href="doc/uzaktan_calistay_1/13Kasım2020_uzaktan_calistay_degerlendirme.pdf">Değerlendirme</a>
			  </li>
			  <li className="nav-item">
			    <a target="_blank" className="nav-link calistay-button" href="https://youtu.be/cKAATDtq0K0">Eğitim Videosu</a>
			  </li>
			</ul>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Calistay

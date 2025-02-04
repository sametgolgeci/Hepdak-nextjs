import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tescil = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Yetkilendirme ve Uluslararası Tanınırlık</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Yetkilendirme Süreci</h1>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2023 yılında Yükseköğretim Kalite Kurulu tarafından tekrar değerlendirilmiş, 23.11.2023 tarihli Kurul toplantısında Kalite Değerlendirme ve Tescil Belgesi’nin geçerlilik süresinin 25.12.2028 tarihine kadar  beş yıl süreyle uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/HEPDAK-2023-tescilbelge.jpeg">İlgili Tescil Belgesi için tıklayınız</Link></p>
	    		<p><Link href="doc/HEPDAK-2023-TESCIL.jpeg">İlgili YÖKAK yazısı için tıklayınız</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2018 yılında Yükseköğretim Kalite Kurulu tarafından tekrar değerlendirilmiş, 26.11.2018 tarihli Kurul toplantısında Kalite Değerlendirme ve Tescil Belgesi’nin geçerlilik süresinin 25.12.2023 tarihine kadar  beş yıl süreyle uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/HEPDAK-2019-tescilbelge.jpg">İlgili Tescil Belgesi için tıklayınız</Link></p>
	    		<p><Link href="doc/HEPDAK-2019-TESCIL.jpg">İlgili YÖKAK yazısı için tıklayınız</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2017 yılında YÖK tarafından tekrar değerlendirilmiş, 15.02.2017 tarihli Genel Kurul toplantısında, Yükseköğretim Kalite Kurulu’nun görüşü dikkate alınarak, Kalite Değerlendirme Tescil Belgesi’nin geçerlilik süresinin 25.12.2016 tarihinden itibaren iki yıl  uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/tescil_belgesi_2017.jpg">İlgili YÖK yazısı için tıklayınız</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK, YÖK tarafından ilk kez 2014 yılında değerlendirilmiş ve 25.12.2014 tarihinde yapılan YÖK Genel Kurulu toplantısında iki yıl süre ile hemşirelik programlarının akreditasyonu için ulusal bir kalite güvence kuruluşu olarak tanınmış ve iki yıl geçerlilik süresi ile Kalite Değerlendirme ve Tescil Belgesi verilmesi uygun bulunmuştur.</p>
	    		<p><Link href="doc/tescil_belgesi_2014.png">İlgili YÖK yazısı için tıklayınız</Link></p>
	    	</div>
	    	<h1>HEPDAK Tescil Başvuru Yazıları</h1>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2023-hepdak-ozdegerlendirme-raporu.pdf">2023 HEPDAK Öz Değerlendirme Raporu</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2018-hepdak-yokak-tescil-basvuru-raporu.pdf">2018 HEPDAK YÖKAK Tescil Başvuru Raporu</Link></p>
	    	</div>
			<div className="jumbotron">
	    		<p><Link href="doc/2018-hepdak-raporunda-yer-alan-belgeler.pdf">2018 HEPDAK Raporunda Yer Alan Belgeler</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2016-hepdak-tescil-basvuru-revize-raporu.pdf">2016 HEPDAK Tescil Başvuru Raporu</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2013-hepdak-tescil-basvuru-raporu.pdf">2013 YÖK HEPDAK Tescil Başvuru Raporu</Link></p>
	    	</div>
	    	<h1>HEPDAK Uluslararası Tanınırlık </h1>
	    	<div className="jumbotron">
	    		<p><Link href="doc/uluslararasi-taninirlik/CEENQA.pdf">Central and Eastern European Network of Quality Assurance Agencies in Higher Education (CEENQA) Üyeliği</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/uluslararasi-taninirlik/INQAAHE.pdf">International Network for Quality Assurance Agencies in Higher Education (INQAAHE) Üyeliği</Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/uluslararasi-taninirlik/APANE.pdf">Asian and Pasific Alliance for Nursing Education (APANE) Üyeliği</Link></p>
	    	</div>
	    </div>
    </MasterPage>
)
export default Tescil

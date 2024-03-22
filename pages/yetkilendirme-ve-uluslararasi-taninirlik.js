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
	    		<p><Link href="doc/HEPDAK-2023-tescilbelge.jpeg"><a>İlgili Tescil Belgesi için tıklayınız</a></Link></p>
	    		<p><Link href="doc/HEPDAK-2023-TESCIL.jpeg"><a>İlgili YÖKAK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2018 yılında Yükseköğretim Kalite Kurulu tarafından tekrar değerlendirilmiş, 26.11.2018 tarihli Kurul toplantısında Kalite Değerlendirme ve Tescil Belgesi’nin geçerlilik süresinin 25.12.2023 tarihine kadar  beş yıl süreyle uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/HEPDAK-2019-tescilbelge.jpg"><a>İlgili Tescil Belgesi için tıklayınız</a></Link></p>
	    		<p><Link href="doc/HEPDAK-2019-TESCIL.jpg"><a>İlgili YÖKAK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2017 yılında YÖK tarafından tekrar değerlendirilmiş, 15.02.2017 tarihli Genel Kurul toplantısında, Yükseköğretim Kalite Kurulu’nun görüşü dikkate alınarak, Kalite Değerlendirme Tescil Belgesi’nin geçerlilik süresinin 25.12.2016 tarihinden itibaren iki yıl  uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/tescil_belgesi_2017.jpg"><a>İlgili YÖK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK, YÖK tarafından ilk kez 2014 yılında değerlendirilmiş ve 25.12.2014 tarihinde yapılan YÖK Genel Kurulu toplantısında iki yıl süre ile hemşirelik programlarının akreditasyonu için ulusal bir kalite güvence kuruluşu olarak tanınmış ve iki yıl geçerlilik süresi ile Kalite Değerlendirme ve Tescil Belgesi verilmesi uygun bulunmuştur.</p>
	    		<p><Link href="doc/tescil_belgesi_2014.png"><a>İlgili YÖK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<h1>HEPDAK Tescil Başvuru Yazıları</h1>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2023-hepdak-ozdegerlendirme-raporu.pdf"><a>2023 HEPDAK Öz Değerlendirme Raporu</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2018-hepdak-yokak-tescil-basvuru-raporu.pdf"><a>2018 HEPDAK YÖKAK Tescil Başvuru Raporu</a></Link></p>
	    	</div>
			<div className="jumbotron">
	    		<p><Link href="doc/2018-hepdak-raporunda-yer-alan-belgeler.pdf"><a>2018 HEPDAK Raporunda Yer Alan Belgeler</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2016-hepdak-tescil-basvuru-revize-raporu.pdf"><a>2016 HEPDAK Tescil Başvuru Raporu</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/2013-hepdak-tescil-basvuru-raporu.pdf"><a>2013 YÖK HEPDAK Tescil Başvuru Raporu</a></Link></p>
	    	</div>
	    	<h1>HEPDAK Uluslararası Tanınırlık </h1>
	    	<div className="jumbotron">
	    		<p><Link href="doc/uluslararasi-taninirlik/CEENQA.pdf"><a>Central and Eastern European Network of Quality Assurance Agencies in Higher Education (CEENQA) Üyeliği</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/uluslararasi-taninirlik/INQAAHE.pdf"><a>International Network for Quality Assurance Agencies in Higher Education (INQAAHE) Üyeliği</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p><Link href="doc/uluslararasi-taninirlik/APANE.jpeg"><a>Asian and Pasific Alliance for Nursing Education (APANE) Üyeliği</a></Link></p>
	    	</div>
	    </div>
    </MasterPage>
)
export default Tescil

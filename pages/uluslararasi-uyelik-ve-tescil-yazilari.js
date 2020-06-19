import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tescil = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | HEPDAK Uluslararası Üyelik ve Tescil Yazıları</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Uluslararası Üyelik</h1>
	    	<div className="jumbotron"><p>HEPDAK, 12 Mayıs 2018 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın gözlemci üyesidir. İlgili döküman için <Link href="doc/uluslararasi-belge.pdf"><a target="_blank">tıklayınız</a></Link></p></div>
	    	<div className="jumbotron"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir. İlgili döküman için <Link href="doc/CEENQA_Application_HEPDAK_Decision.pdf"><a target="_blank">tıklayınız</a></Link></p></div>
	    	<h1>HEPDAK Tescil Yazıları</h1>
	    	<p className="madde-p">• <Link href="doc/2018-yokak-tescil-belgesi.jpg"><a>2018 YÖKAK Tescil Belgesi</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018_yokak_hepdak_degerlendirme_raporu.pdf"><a>2018 YÖKAK HEPDAK Değerlendirme Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018-hepdak-raporunda-yer-alan-belgeler.pdf"><a>2018 HEPDAK Raporunda Yer Alan Belgeler</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018-hepdak-yokak-tescil-basvuru-raporu.pdf"><a>2018 HEPDAK YÖKAK Tescil Başvuru Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2017-yokak-tescil-yazisi.jpg"><a>2017 YÖKAK Tescil Yazısı</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2016-yokak-hepdak-degerlendirme-raporu.pdf"><a>2016 YÖKAK HEPDAK Değerlendirme Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2016-hepdak-tescil-basvuru-revize-raporu.pdf"><a>2016 HEPDAK Tescil Başvuru Revize Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2015-yok-tescil-yazisi.jpg"><a>2015 YÖK Tescil Yazısı</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2013-hepdak-tescil-basvuru-raporu.pdf"><a>2013 HEPDAK Tescil Başvuru Raporu</a></Link></p>
	    	<div className="safe-two"></div>
	    	<h1>Kalite Değerlendirme Tescil Belgesi</h1>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2018 yılında Yükseköğretim Kalite Kurulu tarafından tekrar değerlendirilmiş, 26.12.2018 tarihli Kurul toplantısında Kalite Değerlendirme ve Tescil Belgesi’nin geçerlilik süresinin 25.12.2023 tarihine kadar  beş yıl süreyle uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/HEPDAK-2019-tescilbelge.jpg"><a>İlgili Yükseköğretim Kalite Kurulu yazısı için tıklayınız</a></Link></p>
	    		<p><Link href="doc/HEPDAK-2019-TESCIL.jpg"><a>İlgili YÖKAK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2017 yılında YÖK tarafından tekrar değerlendirilmiş, 15.02.2017 tarihli Genel Kurul toplantısında, Yükseköğretim Kalite Kurulu’nun görüşü dikkate alınarak, Kalite Değerlendirme Tescil Belgesi’nin geçerlilik süresinin 25.12.2016 tarihinden itibaren iki yıl  uzatılmasına karar verilmiştir. <Link href="doc/tescil_belgesi_2017.jpg"><a>İlgili YÖK yazısı için tıklayınız</a></Link></p>
	    		<p>HEPDAK, YÖK tarafından ilk kez 2014 yılında değerlendirilmiş ve 25.12.2014 tarihinde yapılan YÖK Genel Kurulu toplantısında iki yıl süre ile hemşirelik programlarının akreditasyonu için ulusal bir kalite güvence kuruluşu olarak tanınmış ve iki yıl geçerlilik süresi ile Kalite Değerlendirme ve Tescil Belgesi verilmesi uygun bulunmuştur. <Link href="doc/tescil_belgesi_2014.png"><a>İlgili YÖK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    </div>
    </MasterPage>
)
export default Tescil

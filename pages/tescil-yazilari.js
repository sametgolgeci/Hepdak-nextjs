import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tescil = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | HEPDAK Tescil Yazıları</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Yetkilendirme Süreci</h1>
	    	<div className="jumbotron">
	    		<p>HEPDAK, YÖK tarafından ilk kez 2014 yılında değerlendirilmiş ve 25.12.2014 tarihinde yapılan YÖK Genel Kurulu toplantısında iki yıl süre ile hemşirelik programlarının akreditasyonu için ulusal bir kalite güvence kuruluşu olarak tanınmış ve iki yıl geçerlilik süresi ile Kalite Değerlendirme ve Tescil Belgesi verilmesi uygun bulunmuştur.</p>
	    		<p><Link href="doc/tescil_belgesi_2014.png"><a>İlgili YÖK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2017 yılında YÖK tarafından tekrar değerlendirilmiş, 15.02.2017 tarihli Genel Kurul toplantısında, Yükseköğretim Kalite Kurulu’nun görüşü dikkate alınarak, Kalite Değerlendirme Tescil Belgesi’nin geçerlilik süresinin 25.12.2016 tarihinden itibaren iki yıl  uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/tescil_belgesi_2017.jpg"><a>İlgili YÖK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK 2018 yılında Yükseköğretim Kalite Kurulu tarafından tekrar değerlendirilmiş, 26.12.2018 tarihli Kurul toplantısında Kalite Değerlendirme ve Tescil Belgesi’nin geçerlilik süresinin 25.12.2023 tarihine kadar  beş yıl süreyle uzatılmasına karar verilmiştir.</p>
	    		<p><Link href="doc/HEPDAK-2019-tescilbelge.jpg"><a>İlgili Yükseköğretim Kalite Kurulu yazısı için tıklayınız</a></Link></p>
	    		<p><Link href="doc/HEPDAK-2019-TESCIL.jpg"><a>İlgili YÖKAK yazısı için tıklayınız</a></Link></p>
	    	</div>
	    	<h1>HEPDAK Tescil Başvuru Yazıları ve YÖKAK Değerlendirme Raporları</h1>
	    	<h6>2023</h6>
	    	<p className="madde-p">• <Link href="doc/hepdak_2022_izleme_raporu.pdf"><a>HEPDAK 2022 yılı İzleme Raporu</a></Link></p>	
	    	<h6>2022</h6>
	    	<p className="madde-p">• <Link href="doc/hepdak_2021_izleme_raporu.pdf"><a>HEPDAK 2021 yılı İzleme Raporu</a></Link></p>
	    	<h6>2021</h6>
	    	<p className="madde-p">• <Link href="doc/hepdak_2020_izleme_raporu.pdf"><a>HEPDAK 2020 yılı İzleme Raporu</a></Link></p>	
	    	<h6>2020</h6>
	    	<p className="madde-p">• <Link href="doc/hepdak_2019_izleme_raporu.pdf"><a>HEPDAK 2019 yılı İzleme Raporu</a></Link></p>		
	    	<h6>2018</h6>	
	    	<p className="madde-p">• <Link href="doc/2018_yokak_hepdak_degerlendirme_raporu.pdf"><a>YÖKAK HEPDAK Değerlendirme Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018-hepdak-yokak-tescil-basvuru-raporu.pdf"><a>HEPDAK YÖKAK Tescil Başvuru Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018-hepdak-raporunda-yer-alan-belgeler.pdf"><a>HEPDAK Raporunda Yer Alan Belgeler</a></Link></p>
	    	<h6>2016</h6>
	    	<p className="madde-p">• <Link href="doc/2016-yokak-hepdak-degerlendirme-raporu.pdf"><a>YÖK HEPDAK Değerlendirme Raporu</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2016-hepdak-tescil-basvuru-revize-raporu.pdf"><a>HEPDAK Tescil Başvuru Raporu</a></Link></p>
	    	<h6>2013</h6>
	    	<p className="madde-p">• <Link href="doc/2013-hepdak-tescil-basvuru-raporu.pdf"><a>YÖK HEPDAK Tescil Başvuru Raporu</a></Link></p>
	    </div>
    </MasterPage>
)
export default Tescil

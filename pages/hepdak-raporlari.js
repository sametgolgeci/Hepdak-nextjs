import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Rapor = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | HEPDAK Raporları</title>
	    </Head>
	    <div className="genel">
	    	<h3>Tematik Analiz Raporu</h3>
	    	<p>HEPDAK Tematik Analiz Raporu 2019 için <Link href="doc/hepdak_tematik_analiz_raporu_2019.pdf">tıklayınız</Link></p>
	    	<h3>HEPDAK Genel Kurulu ve Raporları</h3>
	    	<p>8 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_3.pdf">Gündem</Link></p>
	    	<p>8 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_4.pdf">Çalışma Raporu</Link></p>
	    	<p>8 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_5.pdf">Toplantı Raporu</Link></p>
	    	<p>13 Eylül 2013 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_1.pdf">Gündem</Link></p>
	    	<p>13 Eylül 2013 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_2.pdf">Toplantı Raporu</Link></p>
	    	<h3>Faaliyet Raporları</h3>
	    	<p>HEPDAK Faaliyet Raporu 2018 için <Link href="doc/hepdak-faaliyet-raporu-2018.pdf">tıklayınız</Link></p>
	    	<h3>Dernek Faaliyet Durumu</h3>
	    	<p>Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği Faaliyet Belgesi için <Link href="doc/hepdak-faaliyet-belgesi.pdf">tıklayınız</Link></p>
	    </div>
    </MasterPage>
)
export default Rapor

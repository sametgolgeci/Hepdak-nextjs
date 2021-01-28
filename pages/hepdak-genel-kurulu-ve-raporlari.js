import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Rapor = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Genel Kurul ve Raporları</title>
	    </Head>
	    <div className="genel">
	    	<h1>Genel Kurul ve Raporları</h1>
	    	<p className="madde-p">11 Ekim 2019 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_6.pdf"><a>Gündem</a></Link></p>
	    	<p className="madde-p">11 Ekim 2019 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_7.pdf"><a>Çalışma Raporu</a></Link></p>
	    	<p className="madde-p">11 Ekim 2019 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_8.pdf"><a>Toplantı Raporu</a></Link></p>
	    	<p className="madde-p">8 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_3.pdf"><a>Gündem</a></Link></p>
	    	<p className="madde-p">8 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_4.pdf"><a>Çalışma Raporu</a></Link></p>
	    	<p className="madde-p">8 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_5.pdf"><a>Toplantı Raporu</a></Link></p>
	    	<p className="madde-p">13 Eylül 2013 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_1.pdf"><a>Gündem</a></Link></p>
	    	<p className="madde-p">13 Eylül 2013 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_2.pdf"><a>Toplantı Raporu</a></Link></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Rapor

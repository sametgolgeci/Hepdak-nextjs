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
	    	<p className="madde-p">20 Ekim 2022 HEPDAK Genel Kurulu Raporları <Link href="doc/genel_kurul/2022-gundem.pdf" target="_blank">Gündem</Link></p>
	    	<p className="madde-p">20 Ekim 2022 HEPDAK Genel Kurulu Raporları <Link href="doc/genel_kurul/2022-calisma-raporu.pdf" target="_blank">Çalışma Raporu</Link></p>
	    	<p className="madde-p">20 Ekim 2022 HEPDAK Genel Kurulu Raporları <Link href="doc/genel_kurul/2022-toplanti-raporu.pdf" target="_blank">Toplantı Raporu</Link></p>
	    	<p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
	    	<p className="madde-p">11 Ekim 2019 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_6.pdf" target="_blank">Gündem</Link></p>
	    	<p className="madde-p">11 Ekim 2019 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_7.pdf" target="_blank">Çalışma Raporu</Link></p>
	    	<p className="madde-p">11 Ekim 2019 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_8.pdf" target="_blank">Toplantı Raporu</Link></p>
	    	<p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
	    	<p className="madde-p">08 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_3.pdf" target="_blank">Gündem</Link></p>
	    	<p className="madde-p">08 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_4.pdf" target="_blank">Çalışma Raporu</Link></p>
	    	<p className="madde-p">08 Eylül 2016 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_5.pdf" target="_blank">Toplantı Raporu</Link></p>
	    	<p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
	    	<p className="madde-p">13 Eylül 2013 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_1.pdf" target="_blank">Gündem</Link></p>
	    	<p className="madde-p">13 Eylül 2013 HEPDAK Genel Kurulu Raporları <Link href="doc/hepdak_toplanti_2.pdf" target="_blank">Toplantı Raporu</Link></p>
	    </div>
	    <div className="safe"></div>
    </MasterPage>
)
export default Rapor

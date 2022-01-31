import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Rapor = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Tematik Analiz Raporu</title>
	    </Head>
	    <div className="genel">
	    	<h1>Tematik Analiz Raporu</h1>
	    	<p className="madde-p">HEPDAK Tematik Analiz Raporu 2021 için <Link href="doc/hepdak_tematik_analiz_raporu_2021.pdf"><a>tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Tematik Analiz Raporu 2020 için <Link href="doc/hepdak_tematik_analiz_raporu_2020.pdf"><a>tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Tematik Analiz Raporu 2019 için <Link href="doc/hepdak_tematik_analiz_raporu_2019.pdf"><a>tıklayınız</a></Link></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Rapor

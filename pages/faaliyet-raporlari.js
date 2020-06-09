import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Rapor = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Faaliyet Raporları</title>
	    </Head>
	    <div className="genel">
	    	<h1>Faaliyet Raporları</h1>
	    	<p>HEPDAK Faaliyet Raporu 2018 için <Link href="doc/hepdak-faaliyet-raporu-2018.pdf"><a>tıklayınız</a></Link></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Rapor

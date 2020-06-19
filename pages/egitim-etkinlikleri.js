import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Gorus = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Eğitim Etkinlikleri</title>
	    </Head>
	    <div className="genel">
	    	<h1>Eğitim Etkinlikleri</h1>
	    	<p className="madde-p">HEPDAK, HEAK ve komisyon üyelerine çeşitli toplantılarda yapılan eğitimler için <Link href="doc/egitim_etkinlikleri.pdf"><a>tıklayınız</a></Link></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Gorus

import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Gorus = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Çağrılı Konuşmalar</title>
	    </Head>
	    <div className="genel">
	    	<h1>Çağrılı Konuşmalar</h1>
	    	<p className="madde-p">HEPDAK faaliyetlerinin tanıtımı ile ilgili çağrılı konuşmalar için <Link href="doc/cagrili_konusmalar_v3.pdf"><a>tıklayınız</a></Link></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Gorus

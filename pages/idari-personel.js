import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Gorus = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Paydaş İdari Personel</title>
	    </Head>
	    <div className="genel">
	    	<h1>İdari Personel</h1>
	    	<p className="madde-p"><strong>Ofis Sekteri</strong><br/>Ümran Yalçın</p>
	    	<p className="madde-p"><strong>HEMSİS Sorumlusu</strong><br/>Süleyman Yaşacan</p>
	    	<p className="madde-p"><strong>Mali Müşavir</strong><br/>Zekeriya Kanyılmaz</p>
	    	<p className="madde-p"><strong>Web Sorumlusu</strong><br/>Samet Gölgeci</p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Gorus

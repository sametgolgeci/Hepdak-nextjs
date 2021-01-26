import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynaklar = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Kaynaklar</title>
	    </Head>
	    <div className="genel">
	    	<h1>Kaynaklar</h1>
	    	<h6><Link href="doc/uzaktan_egitim_kaynaklari/virtual_visit.pdf"><a>Uzaktan Eğitim Kaynakları</a></Link></h6>
	    	<p className="madde-p"><span>belge_1</span><br/>
	    	<span>isim</span><br/>
	    	<span>isim</span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>

	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span><br/>
	    	<span></span></p>
	    	
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Kaynaklar

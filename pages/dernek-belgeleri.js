import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Dernek = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | HEPDAK Dernek Belgeleri</title>
	    </Head>
	    <div className="genel">
	    	
	    	<h1>HEPDAK Dernek Belgeleri</h1>		
	    	<p className="madde-p">• <Link href="#">Dernek Faaliyet Belgesi</Link></p>
	    	<p className="madde-p">• <Link href="#">İktisadi İşletme</Link></p>
	    	<p className="madde-p">• <Link href="#">Kira Sözleşmesi</Link></p>
	    </div>
    </MasterPage>
)
export default Dernek

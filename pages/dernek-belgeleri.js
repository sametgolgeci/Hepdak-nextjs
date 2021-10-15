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
	    	<p className="madde-p">• <Link href="/doc/hepdak-faaliyet-belgesi.pdf"><a>Dernek Faaliyet Belgesi</a></Link></p>
	    	<p className="madde-p">• <Link href="/doc/hepdak_iktisadi_isletme.pdf"><a>İktisadi İşletme</a></Link></p>
	    	<p className="madde-p">• <Link href="/doc/hepdak-kira-sozlesmesi.pdf"><a>Kira Sözleşmesi</a></Link></p>
	    </div>
    </MasterPage>
)
export default Dernek

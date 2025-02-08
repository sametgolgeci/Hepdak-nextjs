import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Gorus = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Stratejik Plan</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Stratejik Plan</h1>
	    	<p className="madde-p">HEPDAK Stratejik Plan 2025 - 2029 için <Link href="doc/stratejik_plan/2025-2029.pdf" target="_blank">tıklayınız</Link></p>
	    	<p className="madde-p">HEPDAK Stratejik Plan 2020 - 2024 için <Link href="doc/stratejik_plan/2020-2024.pdf" target="_blank">tıklayınız</Link></p>
	    </div>
	    <div className="safe"></div>
    </MasterPage>
)
export default Gorus

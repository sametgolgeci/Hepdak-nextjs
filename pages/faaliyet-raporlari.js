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
	    	<p className="madde-p">HEPDAK Faaliyet Raporu 2023 için <Link href="doc/hepdak-faaliyet-raporu-2023.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Faaliyet Raporu 2022 için <Link href="doc/hepdak-faaliyet-raporu-2022.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Faaliyet Raporu 2021 için <Link href="doc/hepdak-faaliyet-raporu-2021.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Faaliyet Raporu 2020 için <Link href="doc/hepdak-faaliyet-raporu-2020.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Faaliyet Raporu 2019 için <Link href="doc/hepdak-faaliyet-raporu-2019.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Faaliyet Raporu 2018 için <Link href="doc/hepdak-faaliyet-raporu-2018.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    </div>
	    <div className="safe"></div>
    </MasterPage>
)
export default Rapor

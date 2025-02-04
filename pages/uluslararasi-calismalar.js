import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Uluslararası = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | HEPDAK Uluslararası Çalışmalar</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Uluslararası Çalışmalar</h1>
	    	<div className="jumbotron"><p>HEPDAK, 12 Mayıs 2018 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın gözlemci üyesidir. İlgili döküman için <Link href="doc/uluslararasi-belge.pdf" target="_blank">tıklayınız</Link></p></div>
	    	<div className="jumbotron"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir. İlgili döküman için <Link href="doc/CEENQA_Application_HEPDAK_Decision.pdf" target="_blank">tıklayınız</Link></p></div>
	    </div>
    </MasterPage>
)
export default Uluslararası

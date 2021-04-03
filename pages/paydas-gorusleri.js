import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Gorus = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Paydaş Görüşleri</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Paydaş Görüşleri</h1>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2021 için <Link href="doc/paydas_gorus_2021.pdf"><a>tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2020 için <Link href="doc/paydas_gorus_2020.pdf"><a>tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2019 için <Link href="doc/paydas_gorus_2019.pdf"><a>tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2018 için <Link href="doc/kurumlardan_alinan_geribildirimler_v2.pdf"><a>tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2016 için <Link href="doc/standart_gelistirme_paydas_gorusler.pdf"><a>tıklayınız</a></Link></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Gorus

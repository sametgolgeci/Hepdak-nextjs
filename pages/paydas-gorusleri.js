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
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2023 için <Link href="doc/paydas_gorusleri/paydas_gorus_2023.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2022 için <Link href="doc/paydas_gorusleri/paydas_gorus_2022.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2021 için <Link href="doc/paydas_gorusleri/paydas_gorus_2021.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2020 için <Link href="doc/paydas_gorusleri/paydas_gorus_2020.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2019 için <Link href="doc/paydas_gorusleri/paydas_gorus_2019.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2018 için <Link href="doc/paydas_gorusleri/paydas_gorus_2018.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    	<p className="madde-p">HEPDAK Paydaş Görüşleri 2016 için <Link href="doc/paydas_gorusleri/paydas_gorus_2016.pdf"><a target="_blank">tıklayınız</a></Link></p>
	    </div>
	    <div className="safe"></div>
    </MasterPage>
)
export default Gorus

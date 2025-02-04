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
	    	<p className="madde-p"> Çağrılı Konuşmalar 2020 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2020.pdf" target="_blank">tıklayınız</Link></p>
	    	<p className="madde-p"> Çağrılı Konuşmalar 2019 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2019.pdf" target="_blank">tıklayınız</Link></p>
	    	<p className="madde-p"> Çağrılı Konuşmalar 2018 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2018.pdf" target="_blank">tıklayınız</Link></p>
	    	<p className="madde-p"> Çağrılı Konuşmalar 2017 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2017.pdf" target="_blank">tıklayınız</Link></p>
				<p className="madde-p"> Çağrılı Konuşmalar 2016 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2016.pdf" target="_blank">tıklayınız</Link></p>
				<p className="madde-p"> Çağrılı Konuşmalar 2015 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2015.pdf" target="_blank">tıklayınız</Link></p>
				<p className="madde-p"> Çağrılı Konuşmalar 2014 belgesi için <Link href="doc/cagrili_konusmalar/cagrili_konusmalar_2014.pdf" target="_blank">tıklayınız</Link></p>
	    </div>
    </MasterPage>
)
export default Gorus

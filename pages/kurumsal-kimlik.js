import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Gorus = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Kurumsal Kimlik</title>
	    </Head>
	    <div className="genel">
	    	<h1>Kurumsal Kimlik</h1>
	    	<div className="container">
	    		<div className="row">
	    			<div className="col-md-10 col-sm-12">
	    				<p><strong>Logo Uzun Yatay</strong></p>
	    				<img className="kurumsal-img" src="img/logo/logo-yatay.jpg" alt="Hepdak Logo"/>
	    			</div>
	    			<div className="col-md-5 col-sm-12">
	    				<p><strong>Logo Tek</strong></p>
	    				<img className="kurumsal-img kurumsal-img-blue" src="img/hepdak-logo.jpg" alt="Hepdak Logo"/>
	    			</div>
	    			{/*
	    			<div className="col-md-5 col-sm-12">
	    				<p><strong>Logo-2</strong></p>
	    				<img className="kurumsal-img" src="img/hepdak-logo-2.jpg" alt="Hepdak Logo"/>
	    			</div>
	    			*/}
	    		</div>
	    	</div>
	    </div>
	    <div className="safe"></div>
    </MasterPage>
)
export default Gorus

import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Webinar = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Webinar</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Webinar</h1>
	    	<p><a href="https://us02web.zoom.us/meeting/register/tZMsce6vrj4vEtLhsdzqJtHlAy6_3yRhbk7t"><img className="webinar-afis" src="/img/webinar/webinar_afis_1.png"></img></a></p>
	    	</div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default Webinar

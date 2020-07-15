import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Webinar = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Webinar</title>
	      <meta http-equiv="Refresh" content="0; URL=https://us02web.zoom.us/meeting/register/tZMvcOispjkuGt3Xv2sm9Pmj2WdlLTikMRwH"/>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Webinar</h1>
	    	<p><a href="https://us02web.zoom.us/meeting/register/tZElcO6vrTwpH9zra8_9HDH4XiWEunjGb5vA"><img className="webinar-afis" src="/img/webinar/webinar_afis_2.jpg"></img></a></p>
	    </div>
	    <div className="webinar-bottom" id="last">Tamamlanan Webinarlar</div>
	    <div className="webinar-bottom-up">
	    	<div className="webinar-bottom-up-title">- Covid-19 Sürecinde Hemşirelik Eğitimi (17 Haziran 2020) -</div>
	    	<iframe width="640" height="360" src="https://www.youtube.com/embed/BGs8vR3mzbE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    </div>
    </MasterPage>
)
export default Webinar

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
	    	<div className="webinar-genel">
	    		{/*<p><a href="https://us02web.zoom.us/meeting/register/tZMvcOispjkuGt3Xv2sm9Pmj2WdlLTikMRwH"><img className="webinar-afis" src="/img/webinar/webinar_afis_4.jpg"></img></a></p>*/}
	    	</div>
	    </div>
	    <div className="webinar-bottom" id="last">Tamamlanan Webinarlar</div>
	    <div className="webinar-bottom-up">
	    	<div className="webinar-bottom-up-title">- Uzaktan Eğitimde Öğrenci Merkezli Eğitimi Başarabilir Miyiz (22 Temmuz 2020) -</div>
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/VD9C3UzderE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    </div>
	    <div className="webinar-bottom-up">
	    	<div className="webinar-bottom-up-title">- Pandemi Sürecinde Hemşirelik Eğitimi (Teorik ve Uygulama): ABD Örnekleri (13 Temmuz 2020) -</div>
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/eh-QFSJ-WuE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    </div>
	    <div className="webinar-bottom-up">
	    	<div className="webinar-bottom-up-title">- Pandemi Sürecinde Üniversitelerde Dijital Dönüşüm (30 Haziran 2020) -</div>
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/2t3_5Sbsgi8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    </div>
	    <div className="webinar-bottom-up">
	    	<div className="webinar-bottom-up-title">- Covid-19 Sürecinde Hemşirelik Eğitimi (17 Haziran 2020) -</div>
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/BGs8vR3mzbE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    </div>
    </MasterPage>
)
export default Webinar


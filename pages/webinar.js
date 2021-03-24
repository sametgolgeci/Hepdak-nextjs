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
	    <div className="webinar-bottom">
	  {/*
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/VD9C3UzderE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    	<div className="webinar-bottom-title">- Uzaktan Eğitimde Öğrenci Merkezli Eğitimi Başarabilir Miyiz (22 Temmuz 2020) -</div>
	  */}
		  	<Link href="/doc/webinar/webinar-1.pptx"><a target="_blank">
		  		<img src="/doc/webinar/webinar-1.png" alt=""/>
		  		<div className="webinar-bottom-title">- Avustralya Hemşirelik ve Ebelik Akreditasyon Derneği ve Hemşirelik Okullarının Yükümlülükleri -</div>
		  	</a></Link>
	    </div>
	    <div className="row">
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VD9C3UzderE" allowFullScreen></iframe>
					</div>
					<div className="webinar-bottom-title">Uzaktan Eğitimde Öğrenci Merkezli Eğitimi Başarabilir Miyiz (22 Temmuz 2020)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/eh-QFSJ-WuE" allowFullScreen></iframe>
					</div>
					<div className="webinar-bottom-title">Pandemi Sürecinde Hemşirelik Eğitimi (Teorik ve Uygulama): ABD Örnekleri (13 Temmuz 2020)</div>
	     	</div>
      	<div className="col-md-4">
		     	<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/2t3_5Sbsgi8" allowFullScreen></iframe>
					</div>
					<div className="webinar-bottom-title">Pandemi Sürecinde Üniversitelerde Dijital Dönüşüm (30 Haziran 2020)</div>
	     	</div>
	     	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BGs8vR3mzbE" allowFullScreen></iframe>
					</div>
					<div className="webinar-bottom-title">Covid-19 Sürecinde Hemşirelik Eğitimi (17 Haziran 2020)</div>
	     	</div>
			</div>
    </MasterPage>
)
export default Webinar


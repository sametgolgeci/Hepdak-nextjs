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
	    		<h4>- Yaklaşan Webinarlar -</h4>
	    		<div className="row">
	    			<div className="col-md-6">
	    				<a href="https://us02web.zoom.us/meeting/register/tZApcO6pqjkuGtAsft4V5mUsYU3jb3BLpmDd"><img className="webinar-afis" src="/img/webinar/23mart2022.jpg"></img></a>
	    			</div>
	    		</div>
	    		
	    		<h4>- Tamamlanan Webinarlar -</h4>
	    	</div>
	    </div>
	    <div className="webinar-bottom">
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/SxLWLhF6fTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    	<div className="webinar-bottom-title">Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme - Değerlendirme (15 Mart 2022)</div>
	    </div>
	    <div className="row">
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/lk88f6wosCg" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Avustralya Hemşirelik ve Ebelik Akreditasyon Derneği ve Hemşirelik Okullarının Yükümlülükleri (13 Mart 2021)</div>
	     	</div>
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


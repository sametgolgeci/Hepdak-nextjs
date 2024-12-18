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
          		<div className="row justify-content-center">
          		  <div className="col-md-6">
          		    <a target="_blank" href="https://us02web.zoom.us/meeting/register/tZIldeyorTMpH9WvELyN5tVH69gzQ7-sQoVd"><img className="webinar-afis" src="img/webinar/webinar-14.jpeg"></img></a>
          		  </div>
          		</div>
	    
	    		<h4>- Tamamlanan Webinarlar -</h4> 
	    	</div>
	    </div>
	    <div className="webinar-bottom">
	    	<iframe width="560" height="315" src="https://www.youtube.com/embed/ZOFayPaPBfo?si=q3hBEWswcRLN-KMD" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	    	<div className="webinar-bottom-title">Yönetici Hemşireler Mezunlarımızın Yetkinliklerini Nasıl Değerlendiriyor? (18 Aralık 2024)</div>
		</div>
	    <div className="row">
	    	<div className="col-md-4">
          		<div className="embed-responsive embed-responsive-16by9">
            		<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Kq-C0KBWSJ4?si=fPTU5BeKn0kVt5IN" allowFullScreen></iframe>
          		</div>
        		<div className="webinar-bottom-title">21. YY. Yetkinliklerine Erişimde Köprü: Program Dışı Öğrenme (03 Ekim 2024)</div>
        	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hL9ivPF_v5U?si=FNtYUrKFAV_9cOE2" allowFullScreen></iframe>
				</div>
				<div className="webinar-bottom-title">Hemşirelik Eğitiminde Akran Yönderliği (30 Nisan 2024)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					 <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6CeRBZq7kRM?si=yoi_Yb-nS30y9ots" allowFullScreen></iframe>
				</div>
				<div className="webinar-bottom-title">Öğrenci Merkezli Eğitim Uygulamaları (06 Mart 2024)</div>
	     	</div>
	    	<div className="col-md-4">	   		
				<img className="webinar-afis-2" src="img/webinar/2024-02-28-2.png"></img>
				<div className="webinar-bottom-title">Doçentlik Değerlendirme Sürecinde Yaşanan Sorunlar (28 Şubat 2024)(Kayıt Alınmadı)</div>
	     	</div>
	     	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YBWlM0_Vp6w?si=0XDj4nlJUV7iHZ-E" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Akademisyenlerin Eğitim - Öğretim Performansının Değerlendirilmesi (07 Şubat 2024)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yZUSH3-PKcA?si=3mnLOsAFXydkOKf7" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Bakım Bilimine Hemşirelik Eğitimi: Güçlenmek ve Güçlendirmek için… (14 Aralık 2023)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/AKodE-uXUlM?si=ad-NGWxpE8MgzokF" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Deprem Felaketi Sonrası Hemşirelik Eğitimi ve Kriz Dönemleri için Planlama Çıkarımları: Deneyim Paylaşımları (01 Aralık 2023)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/z6OorFME2Aw" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Hemşirelik Programlarında Öğrenme ve Öğretme Destek Sistemeleri: Program Örnekleri (12 Nisan 2023)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/p4dcGYS3umI" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Hemşirelik Eğitiminde Program Değerlendirme (10 Kasım 2022)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1gM75nsUgp0" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri (21 Nisan 2022)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6gJUMWW9N_Y" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar (23 Mart 2022)</div>
	     	</div>
	    	<div className="col-md-4">
		   		<div className="embed-responsive embed-responsive-16by9">
					  <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/SxLWLhF6fTE" allowFullScreen></iframe>
					</div>
				<div className="webinar-bottom-title">Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme (15 Mart 2022)</div>
	     	</div>
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


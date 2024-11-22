import MasterPage from '../../components/masterpage-eng'
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
        {/*
          <h4>- Yaklaşan Webinarlar -</h4>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <a target="_blank" href="https://us02web.zoom.us/j/87261775628?pwd=kFNeWvDQlCFrEPt13pjTGsaS2aexVg.1"><img className="webinar-afis" src="img/webinar/webinar-12.jpeg"></img></a>
            </div>
          </div>
        */}
          <h4>- Completed Webinars -</h4> 
        </div>
      </div>
      <div className="webinar-bottom">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Kq-C0KBWSJ4?si=fPTU5BeKn0kVt5IN" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div className="webinar-bottom-title">21. YY. Yetkinliklerine Erişimde Köprü: Program Dışı Öğrenme (October 03, 2024)(in Turkish)</div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/hL9ivPF_v5U?si=FNtYUrKFAV_9cOE2" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Hemşirelik Eğitiminde Akran Yönderliği (April 30, 2024)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6CeRBZq7kRM?si=yoi_Yb-nS30y9ots" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Öğrenci Merkezli Eğitim Uygulamaları (March 06, 2024)(in Turkish)</div>
        </div>
        <div className="col-md-4">        
        <img className="webinar-afis-2" src="../img/webinar/2024-02-28-2.png"></img>
        <div className="webinar-bottom-title">Doçentlik Değerlendirme Sürecinde Yaşanan Sorunlar (February 28, 2024)(No Video Recording)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/YBWlM0_Vp6w?si=0XDj4nlJUV7iHZ-E" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Akademisyenlerin Eğitim - Öğretim Performansının Değerlendirilmesi (February 07, 2024)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/yZUSH3-PKcA?si=3mnLOsAFXydkOKf7" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Bakım Bilimine Hemşirelik Eğitimi: Güçlenmek ve Güçlendirmek için… (December 14, 2023)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/AKodE-uXUlM?si=ad-NGWxpE8MgzokF" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Deprem Felaketi Sonrası Hemşirelik Eğitimi ve Kriz Dönemleri için Planlama Çıkarımları: Deneyim Paylaşımları (December 01, 2023)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/z6OorFME2Aw" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Hemşirelik Programlarında Öğrenme ve Öğretme Destek Sistemeleri: Program Örnekleri (April 12, 2023)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/p4dcGYS3umI" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Hemşirelik Eğitiminde Program Değerlendirme (November 10, 2022)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1gM75nsUgp0" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri (April 21, 2022)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6gJUMWW9N_Y" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar (March 23, 2022)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/SxLWLhF6fTE" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme (March 15, 2022)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/lk88f6wosCg" allowFullScreen></iframe>
          </div>
        <div className="webinar-bottom-title">Avustralya Hemşirelik ve Ebelik Akreditasyon Derneği ve Hemşirelik Okullarının Yükümlülükleri (March 13, 2021)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/VD9C3UzderE" allowFullScreen></iframe>
          </div>
          <div className="webinar-bottom-title">Uzaktan Eğitimde Öğrenci Merkezli Eğitimi Başarabilir Miyiz (July 22, 2020)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/eh-QFSJ-WuE" allowFullScreen></iframe>
          </div>
          <div className="webinar-bottom-title">Pandemi Sürecinde Hemşirelik Eğitimi (Teorik ve Uygulama): ABD Örnekleri (July 13, 2020)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/2t3_5Sbsgi8" allowFullScreen></iframe>
          </div>
          <div className="webinar-bottom-title">Pandemi Sürecinde Üniversitelerde Dijital Dönüşüm (June 30, 2020)(in Turkish)</div>
        </div>
        <div className="col-md-4">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/BGs8vR3mzbE" allowFullScreen></iframe>
          </div>
          <div className="webinar-bottom-title">Covid-19 Sürecinde Hemşirelik Eğitimi (June 17, 2020)(in Turkish)</div>
        </div>
      </div>
    </MasterPage>
)
export default Webinar

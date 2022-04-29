import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar (23 Mart 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
            <div className="main-top-second-title">Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri (21 Nisan 2022)</div>
                <div className="main-top-second-content">
                  <p>Moderatörlüğünü Prof. Dr. Ayla BAYIK TEMEL'in yürüttüğü toplantıda Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi Öğretim Üyesi Prof. Dr. Özen KULAKAÇ ve mezun öğrenci Fatih DİLEK mezun izlemi ile ilgili görüşlerini paylaşmışlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-21Nisan2022/1.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-21Nisan2022/1.jpg" alt="Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-21Nisan2022/2.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-21Nisan2022/2.jpg" alt="Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri"/></a></div>
                  </div>
                </div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1gM75nsUgp0" allowFullScreen></iframe>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

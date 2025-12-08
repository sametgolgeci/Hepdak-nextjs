import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Webinar: Sağlığın Sosyal Belirleyicileri ve Hemşirelik Eğitimi (03 Aralık 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">Webinar: Sağlığın Sosyal Belirleyicileri ve Hemşirelik Eğitimi (03 Aralık 2025)</div> 
                <div className="main-top-second-content">
                  <p>03 Aralık 2025 tarihinde HEPDAK-HEMED işbirliğiyle gerçekleştirilen XV’ci webinarda, “Sağlığın sosyal belirleyicileri ve Hemşirelik Eğitimi konusu ele alınmıştır. Moderatörlüğünü Prof. Dr. Ayla BAYIK TEMEL’in yaptığı Webinarın konuşmacısı Ege Üniversitesi Hemşirelik Fakültesinden Prof. Dr. Aynur UYSAL TORAMAN olmuştur. Toplantıya Türkiye'nin farklı üniversitelerinden 208 öğretim elemanı katılmıştır. Webinar sorularının yanıtlanması ve katılımcıların iyi dilekleriyle sona ermiştir.</p>
                </div>
                <div className="webinar-bottom">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/K1ZRvSCj-SM?si=KfXB8hq2K-3nwad1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/webinar-15/01.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/webinar-15/01.png" alt="Webinar: Sağlığın Sosyal Belirleyicileri ve Hemşirelik Eğitimi (03 Aralık 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/webinar-15/02.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/webinar-15/02.png" alt="Webinar: Sağlığın Sosyal Belirleyicileri ve Hemşirelik Eğitimi (03 Aralık 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/webinar-15/03.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/webinar-15/03.png" alt="Webinar: Sağlığın Sosyal Belirleyicileri ve Hemşirelik Eğitimi (03 Aralık 2025)"/></a></div>
                  </div>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
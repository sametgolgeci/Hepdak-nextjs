import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Hemşirelik Fakülteleri Dekanlar Konseyi (HEMDEK) Toplantısı (12 Aralık 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">Hemşirelik Fakülteleri Dekanlar Konseyi (HEMDEK) Toplantısı (12 Aralık 2025)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK başkanı Prof. Dr. Dilek ÖZMEN 12 Aralık 2025 tarihinde gerçekleştirilen Hemşirelik Fakülteleri Dekanlar Konseyi (HEMDEK) Toplantısına katıldı. Gazi Üniversitesi ev sahipliğinde gerçekleştirilen toplantıda akreditasyon süreçleri ile ilgili sorun ve öneriler de görüşüldü.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/hemdek/01.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/2025/hemdek/01.jpeg" alt="HEMDEK Genel Kurul Toplantısı"/></a></div>
                  </div>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
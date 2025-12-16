import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | SABDEK Genel Kurul Toplantısı (28-29 Kasım 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">SABDEK Genel Kurul Toplantısı (28-29 Kasım 2025)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK başkanı Prof. Dr. Dilek ÖZMEN 28-29 Kasım 2025 tarihleri arasında gerçekleştirilen Doğu Akdeniz Üniversitesi ev sahipliğinde KKTC’de gerçekleşen 18. SABDEK Genel Kurul Toplantısına katıldı. SABAK ve EPDAK başkanlarının yanı sıra 140 Dekan, Dekan vekili ve Bölüm Başkanının katıldığı toplantıda HEPDAK başkanı Dr. ÖZMEN “ Kaliteyi Birlikte Tasarlamak, Geleceği Birlikte Kurmak” başlıklı sunumunu gerçekleştirdi.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/sabdek/01.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/2025/sabdek/01.jpeg" alt="SABDEK Genel Kurul Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/sabdek/02.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/2025/sabdek/02.jpeg" alt="SABDEK Genel Kurul Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/sabdek/03.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/2025/sabdek/03.jpeg" alt="SABDEK Genel Kurul Toplantısı"/></a></div>
                  </div>
                </div>

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | STAR Akreditasyon Ajansı Konferansı (17 Ekim 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">STAR Akreditasyon Ajansı Konferansı (17 Ekim 2025)</div> 
                <div className="main-top-second-content">
                  <p>STAR tarafından 7 Ekim 2025 tarihinde yapılan ”Uygunluk ve Açıklık İçin ESG’yi Yeniden Değerlendirmek-Revisiting the ESG for Improved Relevance and Clarity” başlıklı uluslararası konferansa HEAK başkanı Prof. Dr. Gülseren KOCAMAN katılmıştır. Avrupa Yükseköğretim Alanı’nda kalite güvencesi standartlarının güncelliği ve uygulanabilirliği üzerine kapsamlı bilgilendirmenin yapıldıeferans Çevrim içi gerçekleştirilmiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/star-akreditasyon/01.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/star-akreditasyon/01.png" alt="STAR Akreditasyon Ajansı Konferansı (17 Ekim 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/star-akreditasyon/02.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/star-akreditasyon/02.png" alt="STAR Akreditasyon Ajansı Konferansı (17 Ekim 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/star-akreditasyon/03.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/star-akreditasyon/03.png" alt="STAR Akreditasyon Ajansı Konferansı (17 Ekim 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/star-akreditasyon/04.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/star-akreditasyon/04.png" alt="STAR Akreditasyon Ajansı Konferansı (17 Ekim 2025)"/></a></div>
                  </div>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
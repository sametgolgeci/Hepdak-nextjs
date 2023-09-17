import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | YÖKAK Başkanı Ziyareti (17 Temmuz 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">YÖKAK Başkanı Ziyareti (17 Temmuz 2023)</div> 
                <div className="main-top-second-content">
                  <p>Akreditasyon kuruluşları temsilcileri 17.07.2023 tarihinde YÖKAK yeni başkanı Prof. Dr.
Ümit KOCABIÇAK’ı makamında ziyaret etti. Ziyarete HEPDAK adına HEAK üyesi Prof.
Dr. Ümit SEVİĞ katıldı. Sayın KOCABIÇAK en kısa zamanda akreditasyon dernekleri ile
sorunlar ve çözümlerinin konuşulacağı bir toplantı yapılacağını belirtti. Toplantı katılımcıların
iyi dilekleriyle sona erdi.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2023-yokak-baskan-ziyaret/01.jpeg" target="_blank"><img className="calistay-img" src="img/haberler/2023-yokak-baskan-ziyaret/01.jpeg" alt="YÖKAK Başkanı Ziyaret"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2023-yokak-baskan-ziyaret/02.jpeg" target="_blank"><img className="calistay-img" src="img/haberler/2023-yokak-baskan-ziyaret/02.jpeg" alt="YÖKAK Başkanı Ziyaret"/></a></div>
                  </div>
                </div>  
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

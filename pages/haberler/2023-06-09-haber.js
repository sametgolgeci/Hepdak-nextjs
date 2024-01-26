import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Akreditasyonun Eğitimin İyileştirme Sürecine Katkısı Paneli (09 Haziran 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">Akreditasyonun Eğitimin İyileştirme Sürecine Katkısı Paneli (09 Haziran 2023)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK Başkanı Prof. Dr. Dilek ÖZMEN ve HEAK Başkanı Prof. Dr. Gülseren KOCAMAN Erzincan Binali
Yıldırım Üniversitesi Sağlık Bilimleri Fakültesi’nde “Akreditasyonun Eğitimin İyileştirme Sürecine
Katkısı” paneline katıldı. Hemşirelik Eğitim Programları Akreditasyon Kurulu Başkanı Prof. Dr.
Gülseren Kocaman’ın moderatörlüğünde düzenlenen program, konuşmacılar Prof. Dr. Dilek Özmen,
Prof. Dr. Seçkin Özden ve Prof. Dr. Dinçay Köksal’ın sunumlarının ardından sona erdi.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2023-akreditasyon-panel/01.jpg" target="_blank"><img className="calistay-img" src="../img/haberler/2023-akreditasyon-panel/01.jpg" alt="Akreditasyonun Eğitimin İyileştirme Sürecine Katkısı Paneli"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2023-akreditasyon-panel/02.jpg" target="_blank"><img className="calistay-img" src="../img/haberler/2023-akreditasyon-panel/02.jpg" alt="Akreditasyonun Eğitimin İyileştirme Sürecine Katkısı Paneli"/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

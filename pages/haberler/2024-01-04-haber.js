import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Webinar: Bakım Bilimine Dayalı Hemşirelik Müfredatı: Güçlenmek ve Güçlendirmek için (14 Aralık 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-12 col-sm-12"><img className="calistay-img" src="../img/haberler/2024-paydas-toplantisi.jpg" alt="2024 Paydaş Toplantısı"/></div>
                  </div>
                </div>
                <div className="main-top-second-title">Yükseköğretim Kalite Kurulu (YÖKAK) Paydaş Toplantısı (04 Ocak 2024)</div> 
                <div className="main-top-second-content">
                  <p>Yükseköğretim Kalite Kurulu (YÖKAK) tarafından YÖKAK Başkanı Prof. Dr. Ümit Kocabıçak
başkanlığında gerçekleştirilen paydaş toplantılarına yükseköğretim kurumlarından
akademisyenler ile ulusal akreditasyon kuruluşlarından temsilcileri katıldı. 28 Aralık 2023 ve
04 Ocak 2024 tarihlerinde iki oturum şeklinde çevrimiçi gerçekleşen toplantılardan ikincisine
HEPDAK başkanı Prof. DR. Dilek ve HEAK başkanı Prof. Dr. Gülseren Kocaman
katıldı. Toplantıda yükseköğretimde program akreditasyonu uygulaması ele alındı ve ulusal
akreditasyon kuruluşlarından beklentiler, program akreditasyonunun teşviki, akreditasyon
süreçlerinde yaşanan sorunlar ve çözüm önerileri konuşuldu.</p>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

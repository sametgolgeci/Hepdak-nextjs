import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Yükseköğretim Kalite Kurulu (YÖKAK) Paydaş Toplantısı (14 Ekim 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">Yükseköğretim Kalite Kurulu (YÖKAK) Paydaş Toplantısı (14 Ekim 2025)</div> 
                <div className="main-top-second-content">
                  <p>Yükseköğretim Kalite Kurulu (YÖKAK) tarafından YÖKAK Başkanı Prof. Dr. Ümit Kocabıçak başkanlığında gerçekleştirilen paydaş toplantılarına yükseköğretim kurumlarından akademisyenler ile ulusal akreditasyon kuruluşlarından temsilcileri katıldı. Toplantıya HEPDAK adına HEPDAK başkanı Prof. Dr. Dilek Özmen, HEAK başkanı Prof. Dr. Gülseren Kocaman, HEAK üyesi Prof. Dr. Ümit Seviğ ve Doç. Dr. Gülten Koç, katıldı. Toplantıda yükseköğretimde program akreditasyonu, ulusal akreditasyon kuruluşlarından beklentiler, ve akreditasyon süreçleri konuşuldu.</p>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | INQAAHE Konuşmaları Webinar Toplantısı (16 Kasım 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">INQAAHE Konuşmaları Webinar Toplantısı (16 Kasım 2022)</div>
                <div className="main-top-second-content">
                  <p>Güney Afrika Kalite Güvenliği Ağı (Southern African Quality Assurance Network)
(SAQAN) ve INQAAHE işbirliği ile düzenlenen Yüksek Öğretimde Uzaktan ve
Harmanlanmış Eğitimin Kalite Güvenliği- Güney Afrika Deneyimi konulu webinara
HEPDAK’ı temsilen Prof.Dr.Ayla BAYIK TEMEL ve Doç. Dr. Fatoş KORKMAZ
katılmışlardır. Oturumda, Güney Afrika'daki Yüksek Öğretim Konseyi'nden (CHE) Dr
Whitfield Green öğrencilerin Covid-19 salgını sırasında öğrenme materyallerine nasıl
eriştikleri ve kullandıklarına ilişkin bir anket raporundan elde edilen bulguları paylaşmıştır.
Zambiya Açık Üniversitesi'nden Prof Richard Siaciwena Güney Afrika perspektifinden
çevrimiçi öğrenmenin kalite güvencesi hakkında bilgiler vermiştir. Botsvana Açık
Üniversitesi'nden Dr Godson Gatsha, çevrimiçi ve harmanlanmış öğrenmenin akademik
güvenirlik ve kalite güvencesi hakkında görüşlerini paylaşmıştır. Son olarak Dr. Deb Adair,
çevrimiçi ve uzaktan eğitimde küresel eğilimler ve en iyi uygulamalar konusunda bilgi
vermiştir.</p>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

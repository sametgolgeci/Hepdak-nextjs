import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK Yönetim Kurulu, 07 Ocak 2025 tarihinde Takım Başkanları ile çevrimiçi değerlendirme toplantısını gerçekleştirmiştir. Toplantıya HEPDAK yönetim kurulu üyeleri, Standartları Belirleme ve Geliştirme Komisyonu temsilcileri ve takım başkanları olmak üzere 26 kişi katılmıştır. Toplantıda takım başkanları 2024 yılında ilk kez uygulanan HEPDAK Dereceli Değerlendirme Aracı kullanımına ilişkin görüşler, sorunlar ve öneriler başta olmak üzere kurum değerlendirme ziyaretleri ve değerlendirme sürecine deneyimlerini paylaşmışlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/takim-baskanlari-toplantisi/01.png" target="_blank"><img className="calistay-img" src="../img/haberler/2025/takim-baskanlari-toplantisi/01.png" alt="HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/takim-baskanlari-toplantisi/02.png" target="_blank"><img className="calistay-img" src="../img/haberler/2025/takim-baskanlari-toplantisi/02.png" alt="HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/takim-baskanlari-toplantisi/03.png" target="_blank"><img className="calistay-img" src="../img/haberler/2025/takim-baskanlari-toplantisi/03.png" alt="HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/takim-baskanlari-toplantisi/04.png" target="_blank"><img className="calistay-img" src="../img/haberler/2025/takim-baskanlari-toplantisi/04.png" alt="HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/takim-baskanlari-toplantisi/05.png" target="_blank"><img className="calistay-img" src="../img/haberler/2025/takim-baskanlari-toplantisi/05.png" alt="HEPDAK Takım Başkanları Toplantısı - 8 (07 Ocak 2025)"/></a></div>
                  </div>
                </div>

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
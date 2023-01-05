import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK 2023 yılı Takım Başkanları Toplantısı - 5 (04 Ocak 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">HEPDAK 2023 yılı Takım Başkanları Toplantısı - 5 (04 Ocak 2023)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK Yönetim Kurulu, 04 Ocak 2023 tarihinde Takım Başkanları ile çevrimiçi
değerlendirme toplantısını gerçekleştirmiştir. Toplantıya 11’i takım başkanı olmak
üzere 17 kişi katılmıştır. Toplantıda takım başkanları kurum değerlendirme
ziyaretleri ve değerlendirme sürecine ilişkin deneyimlerini ve görüş ve önerilerini
paylaşmışlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-6 col-sm-12"><a href="/img/haberler/2023-takim-baskanlari-toplantisi/01.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-takim-baskanlari-toplantisi/01.png" alt="Takım Başkanları Toplantısı 5"/></a></div>
                    <div className="col-md-6 col-sm-12"><a href="/img/haberler/2023-takim-baskanlari-toplantisi/02.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-takim-baskanlari-toplantisi/02.png" alt="Takım Başkanları Toplantısı 5"/></a></div>
                  </div>
                </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Takım Başkanları Toplantısı (4 Ocak 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">Takım Başkanları Toplantısı (4 Ocak 2022)</div>
                <div className="main-top-second-content">
                  <p>2022 yılı akreditasyon sürecinde yer alan takım başkanları ile 4 Ocak 2022 tarihinde
çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda takım başkanlarının Hemşirelik
Lisans Eğitim Programı Standartlarına, uzaktan ve yerinde ziyaret planı ve işleyişine,
akreditasyon süreçlerinde kullanılan formlara yönelik görüş ve önerileri alınmıştır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-toplantisi-2022/1.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-toplantisi-2022/1.jpeg" alt="Takım Başkanları Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-toplantisi-2022/2.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-toplantisi-2022/2.jpeg" alt="Takım Başkanları Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-toplantisi-2022/3.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-toplantisi-2022/3.jpeg" alt="Takım Başkanları Toplantısı"/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

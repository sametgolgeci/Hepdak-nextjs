import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Değerlendirme Takım Üyeleri ile Toplantı (6 Ocak 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">Değerlendirme Takım Üyeleri ile Toplantı (6 Ocak 2022)</div>
                <div className="main-top-second-content">
                  <p>2022 yılı akreditasyon sürecinde yer alan değerlendirme takım üyeleri ile 6 Ocak 2022
tarihinde çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda değerlendirme
takımında yer alan değerlendiricilerin Hemşirelik Lisans Eğitim Programı
Standartlarına, uzaktan ve yerinde ziyaret planı ve işleyişine, akreditasyon
süreçlerine yönelik görüş ve önerileri alınmıştır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/degerlendirme-takimi-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/degerlendirme-takimi-2022/1.png" alt="Değerlendirme Takımı 2022"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/degerlendirme-takimi-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/degerlendirme-takimi-2022/2.png" alt="Değerlendirme Takımı 2022"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/degerlendirme-takimi-2022/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/degerlendirme-takimi-2022/3.png" alt="Değerlendirme Takımı 2022"/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

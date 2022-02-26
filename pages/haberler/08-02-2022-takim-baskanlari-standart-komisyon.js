import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı (8 Şubat 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı (8 Şubat 2022)</div>
                <div className="main-top-second-content">
                  <p>Takım Başkanları ile Standart Komisyonu Üyeleri toplantısı 8 Şubat 2022 tarihinde çevrimiçi olarak gerçekleştirilmiştir. 2022 Akreditasyon takımlarında yer alan takım başkanları Hemşirelik Lisans Eğitim Programı Standartlarına yönelik takım üyelerinden de alınan görüş ve önerileri paylaşmıştır. Standart Komisyonu gelen görüş ve önerileri komisyonda değerlendireceklerini iletmiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-standart-komisyonu-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-standart-komisyonu-2022/1.png" alt="Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-standart-komisyonu-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-standart-komisyonu-2022/2.png" alt="Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-standart-komisyonu-2022/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-standart-komisyonu-2022/3.png" alt="Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı"/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

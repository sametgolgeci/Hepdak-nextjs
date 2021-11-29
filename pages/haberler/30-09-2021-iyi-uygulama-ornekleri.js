import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | CEENQA'nın Yıllık Genel Kurulu ve Çalıştayı (13 Ekim 2021)</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">İyi Uygulama Örnekleri</div>
        <div className="main-top-second-content">27-29 Eylül 2021 tarihleri arasında düzenlenen “Hemşirelik Eğitiminin Geleceği 3” Sempozyumunda sunulan “İyi Uygulama Örnekleri: Pandemi Sürecinde Çevrimiçi Teorik ve Uygulama Eğitimi” sunumlarına buradan ulaşabilirsiniz.</div>
        <div className="main-top-second-content">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MhYcF-1ucy0" allowFullScreen></iframe>
          </div>
        </div>
        <div className="main-top-second-content">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/qge5DtnNH0A" allowFullScreen></iframe>
          </div>
        </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

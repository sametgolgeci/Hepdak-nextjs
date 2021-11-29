import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı (28 Mart 2021)</div>
        <div className="main-top-second-content">Öğrenci Değerlendirici Eğitim programı çevrimiçi olarak 28 Mart 2021 tarihinde yürütülecektir.</div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

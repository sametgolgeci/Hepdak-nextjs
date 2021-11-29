import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK Değerlendirici Eğitimi</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Haziran 2021)</div>
        <div className="main-top-second-content">Eğitim programı çevrimiçi olarak 10-12 Haziran 2021 tarihleri arasında yürütülecektir.</div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

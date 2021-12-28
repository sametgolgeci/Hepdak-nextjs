import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | INQAAHE Üyeliği Hakkında</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">INQAAHE Üyeliği Hakkında</div>
        <div className="main-top-second-content">HEPDAK'ın, Yükseköğrenimde Uluslararası Kalite Güvence Ajansları Ağı olarak bilinen <strong>The International Network for Quality Assurance Agencies in Higher Education (INQAAHE)</strong>'a tam üyelik başvurusu kabul edilmiştir.</div>      
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

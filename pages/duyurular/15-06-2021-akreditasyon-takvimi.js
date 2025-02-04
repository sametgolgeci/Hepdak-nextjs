import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | 2021-2022 Dönemi Akreditasyon Takvimi</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
        <div className="main-top-second-content">HEPDAK 2021-2022 dönemi akreditasyon takvimine ulaşmak için <Link href="/doc/2021_takvim.pdf" target="_blank"><strong>tıklayınız</strong></Link>.</div>      
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

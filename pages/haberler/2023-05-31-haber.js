import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | INQAAHE Genel Kurulu (31 Mayıs 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">INQAAHE Genel Kurulu (31 Mayıs 2023)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK uluslararası ilişkiler komisyonu üyeleri INQAAHE tarafından 31 Mayıs 2023
tarihinde Astana / Kazakistan da düzenlenen General Assembly Board of Elections’da online
oylamaya çevrimiçi katılmışlardır.</p>
                </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

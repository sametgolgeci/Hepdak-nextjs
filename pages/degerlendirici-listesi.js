import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Uye = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Değerlendiriciler Listesi</title>
	    </Head>
      <div className="genel">
        <h1>HEPDAK Değerlendiriciler Listesi</h1>
        <div className="jumbotron">
          <p>HEPDAK Değerlendirici Listesine  <Link
            href="doc/degerlendiriciler_listesi/degerlendirici-listesi.pdf"
            target="_blank">buradan</Link> ulaşabilirsiniz. <strong>(18 Nisan 2026)</strong></p>
        </div>
        <div className="jumbotron">
          <p>HEPDAK Öğrenci Değerlendirici Listesine  <Link
            href="doc/degerlendiriciler_listesi/ogrenci-degerlendirici-listesi.pdf"
            target="_blank">buradan</Link> ulaşabilirsiniz. <strong>(10 Nisan 2026)</strong></p>
        </div>
      </div>
    </MasterPage>
)
export default Uye

import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Uye = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | List of Evaluators</title>
	    </Head>
      <div className="genel">
	     <h1>HEPDAK List of Evaluators</h1>
        <div className="jumbotron">
          <p><Link
            href="../doc/degerlendiriciler_listesi/degerlendirici-listesi.pdf"
            target="_blank">HEPDAK Evaluator List</Link> - (Last Update - May 31, 2025)</p>
        </div>
        <div className="jumbotron">
          <p><Link
            href="../doc/degerlendiriciler_listesi/ogrenci-degerlendirici-listesi.pdf"
            target="_blank">HEPDAK Student Evaluator List</Link> - (Last Update - October 04, 2024)</p>
        </div>
      </div>
    </MasterPage>
)
export default Uye

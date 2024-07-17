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
          <p><Link href="../doc/degerlendiriciler_listesi/degerlendirici-listesi.pdf"><a target="_blank">HEPDAK Evaluator List</a></Link> - (Last Update - 13 May 2024)</p>
        </div>
        <div className="jumbotron">
          <p><Link href="../doc/degerlendiriciler_listesi/ogrenci-degerlendirici-listesi.pdf"><a target="_blank">HEPDAK Student Evaluator List</a></Link> - (Last Update - 13 October 2023)</p>
        </div>
      </div>
    </MasterPage>
)
export default Uye

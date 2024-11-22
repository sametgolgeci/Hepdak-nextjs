import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Thematic Analysis Reports</title>
	    </Head>
      <div className="genel">
        <h1>Thematic Analysis Reports</h1>
        <p className="madde-p"><Link href="../doc/hepdak_tematik_analiz_raporu_2023.pdf"><a target="_blank">HEPDAK Thematic Analysis Report 2023 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/hepdak_tematik_analiz_raporu_2021.pdf"><a target="_blank">HEPDAK Thematic Analysis Report 2021 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/hepdak_tematik_analiz_raporu_2020.pdf"><a target="_blank">HEPDAK Thematic Analysis Report 2020 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/hepdak_tematik_analiz_raporu_2019.pdf"><a target="_blank">HEPDAK Thematic Analysis Report 2019 (in Turkish)</a></Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
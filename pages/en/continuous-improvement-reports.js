import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Continuous  Improvement Reports</title>
      </Head>
      <div className="genel">
        <h1>Continuous Improvement Reports</h1>
        <p className="madde-p"><Link href="../doc/surekli_iyilestirme_raporlari/2023.pdf"><a target="_blank">HEPDAK Continuous Improvement Report 2023 (in Turkish)</a></Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
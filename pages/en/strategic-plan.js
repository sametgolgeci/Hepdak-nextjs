import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Strategic Plan</title>
	    </Head>
      <div className="genel">
        <h1>HEPDAK Strategic Plan</h1>
        <p className="madde-p"><Link href="../doc/stratejik_plan/2025-2029.pdf" target="_blank">HEPDAK Strategic Plan 2025 - 2029 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/stratejik_plan/2020-2024.pdf" target="_blank">HEPDAK Strategic Plan 2020 - 2024 (in Turkish)</Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
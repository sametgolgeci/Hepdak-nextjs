import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Activity Reports/Annual Reports</title>
      </Head>
      <div className="genel">
        <h1>Activity Reports/Annual Reports</h1>
        <p className="madde-p"><Link href="../doc/hepdak-faaliyet-raporu-2023.pdf" target="_blank">HEPDAK Activity Report 2023 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/en/hepdak-annual-report-2022.pdf" target="_blank">HEPDAK Activity Report 2022</Link></p>
        <p className="madde-p"><Link href="../doc/hepdak-faaliyet-raporu-2021.pdf" target="_blank">HEPDAK Activity Report 2021 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/hepdak-faaliyet-raporu-2020.pdf" target="_blank">HEPDAK Activity Report 2020 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/hepdak-faaliyet-raporu-2019.pdf" target="_blank">HEPDAK Activity Report 2019 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/hepdak-faaliyet-raporu-2018.pdf" target="_blank">HEPDAK Activity Report 2018 (in Turkish)</Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Monitoring Reports</title>
      </Head>
      <div className="genel">
        <h1>Monitoring Reports</h1>
        <p className="madde-p"><Link href="../doc/izleme-raporu/hepdak_2024_izleme_raporu.pdf" target="_blank">HEPDAK Monitoring Report 2024 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/izleme-raporu/hepdak_2023_izleme_raporu.pdf" target="_blank">HEPDAK Monitoring Report 2023 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/izleme-raporu/hepdak_2022_izleme_raporu.pdf" target="_blank">HEPDAK Monitoring Report 2022 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/izleme-raporu/hepdak_2021_izleme_raporu.pdf" target="_blank">HEPDAK Monitoring Report 2021 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/izleme-raporu/hepdak_2020_izleme_raporu.pdf" target="_blank">HEPDAK Monitoring Report 2020 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/izleme-raporu/hepdak_2019_izleme_raporu.pdf" target="_blank">HEPDAK Monitoring Report 2019 (in Turkish)</Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
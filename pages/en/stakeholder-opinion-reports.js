import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Stakeholder Opinion Reports</title>
      </Head>
      <div className="genel">
        <h1>Stakeholder Opinion Reports</h1>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2023.pdf" target="_blank">HEPDAK Stakeholder Opinions 2023 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2022.pdf" target="_blank">HEPDAK Stakeholder Opinions 2022 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2021.pdf" target="_blank">HEPDAK Stakeholder Opinions 2021 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2020.pdf" target="_blank">HEPDAK Stakeholder Opinions 2020 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2019.pdf" target="_blank">HEPDAK Stakeholder Opinions 2019 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2018.pdf" target="_blank">HEPDAK Stakeholder Opinions 2018 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2016.pdf" target="_blank">HEPDAK Stakeholder Opinions 2016 (in Turkish)</Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
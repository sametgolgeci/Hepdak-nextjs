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
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2023.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2023 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2022.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2022 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2021.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2021 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2020.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2020 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2019.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2019 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2018.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2018 (in Turkish)</a></Link></p>
        <p className="madde-p"><Link href="../doc/paydas_gorusleri/paydas_gorus_2016.pdf"><a target="_blank">HEPDAK Stakeholder Opinions 2016 (in Turkish)</a></Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
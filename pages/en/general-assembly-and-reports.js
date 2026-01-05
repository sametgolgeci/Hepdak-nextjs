import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | General Assembly and Reports</title>
	    </Head>
      <div className="genel">
        <h1>General Assembly and Reports</h1>
        <p className="madde-p">October 17, 2025 HEPDAK General Assembly Reports <Link href="../doc/genel_kurul/2025-gundem.pdf" target="_blank">Agenda (in Turkish)</Link></p>
        <p className="madde-p">October 17, 2025 HEPDAK General Assembly Reports <Link href="../doc/genel_kurul/2025-calisma-raporu.pdf" target="_blank">Working Report (in Turkish)</Link></p>
        <p className="madde-p">October 17, 2025 HEPDAK General Assembly Reports <Link href="../doc/genel_kurul/2025-toplanti-raporu.pdf" target="_blank">Meeting Report (in Turkish)</Link></p>
        <p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <p className="madde-p">October 20, 2022 HEPDAK General Assembly Reports <Link href="../doc/genel_kurul/2022-gundem.pdf" target="_blank">Agenda (in Turkish)</Link></p>
        <p className="madde-p">October 20, 2022 HEPDAK General Assembly Reports <Link href="../doc/genel_kurul/2022-calisma-raporu.pdf" target="_blank">Working Report (in Turkish)</Link></p>
        <p className="madde-p">October 20, 2022 HEPDAK General Assembly Reports <Link href="../doc/genel_kurul/2022-toplanti-raporu.pdf" target="_blank">Meeting Report (in Turkish)</Link></p>
        <p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <p className="madde-p">October 11, 2019 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_6.pdf" target="_blank">Agenda (in Turkish)</Link></p>
        <p className="madde-p">October 11, 2019 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_7.pdf" target="_blank">Working Report (in Turkish)</Link></p>
        <p className="madde-p">October 11, 2019 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_8.pdf" target="_blank">Meeting Report (in Turkish)</Link></p>
        <p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <p className="madde-p">September 08, 2016 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_3.pdf" target="_blank">Agenda (in Turkish)</Link></p>
        <p className="madde-p">September 08, 2016 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_4.pdf" target="_blank">Working Report (in Turkish)</Link></p>
        <p className="madde-p">September 08, 2016 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_5.pdf" target="_blank">Meeting Report (in Turkish)</Link></p>
        <p className="madde-p">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -</p>
        <p className="madde-p">September 13, 2013 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_1.pdf" target="_blank">Agenda (in Turkish)</Link></p>
        <p className="madde-p">September 13, 2013 HEPDAK General Assembly Reports <Link href="../doc/hepdak_toplanti_2.pdf" target="_blank">Meeting Report (in Turkish)</Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
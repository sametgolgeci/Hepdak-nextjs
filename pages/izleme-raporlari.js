import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | İzleme Raporları</title>
	</Head>
		<div className="genel">
	    <h1>İzleme Raporları</h1>
	    <p className="madde-p">HEPDAK İzleme Raporu 2023 için <Link href="doc/izleme-raporu/hepdak_2023_izleme_raporu.pdf" target="_blank">tıklayınız</Link></p>
	    <p className="madde-p">HEPDAK İzleme Raporu 2022 için <Link href="doc/izleme-raporu/hepdak_2022_izleme_raporu.pdf" target="_blank">tıklayınız</Link></p>
	    <p className="madde-p">HEPDAK İzleme Raporu 2021 için <Link href="doc/izleme-raporu/hepdak_2021_izleme_raporu.pdf" target="_blank">tıklayınız</Link></p>
	    <p className="madde-p">HEPDAK İzleme Raporu 2020 için <Link href="doc/izleme-raporu/hepdak_2020_izleme_raporu.pdf" target="_blank">tıklayınız</Link></p>
	    <p className="madde-p">HEPDAK İzleme Raporu 2019 için <Link href="doc/izleme-raporu/hepdak_2019_izleme_raporu.pdf" target="_blank">tıklayınız</Link></p>
		</div>
		<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

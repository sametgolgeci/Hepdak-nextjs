import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Sürekli İyileştirme Raporları</title>
	</Head>
		<div className="genel">
	    <h1>Sürekli İyileştirme Raporları</h1>
	    <p className="madde-p">HEPDAK Sürekli İyileştirme Raporu 2023 için <Link href="doc/surekli_iyilestirme_raporlari/2023.pdf" target="_blank">tıklayınız</Link></p>
		</div>
		<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

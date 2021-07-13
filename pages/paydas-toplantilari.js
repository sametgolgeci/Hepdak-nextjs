import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Paydas = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Paydaş Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1>Paydaş Toplantıları</h1>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row">3</th>
	          <td><Link href="doc/paydas_toplantilari/belge_3.pdf"><a target="_blank">2021 - 2022 Dönemi Başvuran Kurumlarla Toplantı (18.03.2021)</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td><Link href="doc/paydas_toplantilari/belge_2.pdf"><a target="_blank">2020 - 2021 Dönemi Değerlendirici Toplantısı (10.03.2021)</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td><Link href="doc/paydas_toplantilari/belge_1.pdf"><a target="_blank">2020 - 2021 Dönemi Ziyaret Yapılan Kurum Temsilcileri ile Toplantı (08.03.2021)</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Paydas

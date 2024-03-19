import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | İzleme Raporları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="heak">İzleme Raporları</h1>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="10px">4</th>
	          <td>HEPDAK İzleme Raporu - <Link href="doc/izleme-raporu/hepdak_2022_izleme_raporu.pdf"><a>2022</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>HEPDAK İzleme Raporu - <Link href="doc/izleme-raporu/hepdak_2021_izleme_raporu.pdf"><a>2021</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>HEPDAK İzleme Raporu - <Link href="doc/izleme-raporu/hepdak_2020_izleme_raporu.pdf"><a>2020</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>HEPDAK İzleme Raporu - <Link href="doc/izleme-raporu/hepdak_2019_izleme_raporu.pdf"><a>2019</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

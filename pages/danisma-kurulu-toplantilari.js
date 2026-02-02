import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Danışma Kurulu Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="heak">Danışma Kurulu Toplantıları</h1>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="10px"></th>
	          <td><Link href="doc/danisma_kurulu_toplantilari/05.pdf" target="_blank">HEPDAK Danışma Kurulu Toplantısı - 5 (04 Aralık 2025)</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px"></th>
	          <td><Link href="doc/danisma_kurulu_toplantilari/04.pdf" target="_blank">HEPDAK Danışma Kurulu Toplantısı - 4 (08 Ekim 2024)</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px"></th>
	          <td><Link href="doc/danisma_kurulu_toplantilari/03.pdf" target="_blank">HEPDAK Danışma Kurulu Toplantısı - 3 (27 Haziran 2024)</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px"></th>
	          <td><Link href="doc/danisma_kurulu_toplantilari/02.pdf" target="_blank">HEPDAK Danışma Kurulu Toplantısı - 2 (16 Mart 2023)</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px"></th>
	          <td><Link href="doc/danisma_kurulu_toplantilari/01.pdf" target="_blank">HEPDAK Danışma Kurulu Toplantısı - 1 (26 Ocak 2023)</Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

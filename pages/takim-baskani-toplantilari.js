import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Takım Başkanı Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="heak">Takım Başkanı Toplantıları</h1>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="10px">5</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2023.pdf" target="_blank">4 Ocak 2023</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">4</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2022.pdf" target="_blank">4 Ocak 2022</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">3</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2021.pdf" target="_blank">7 Ocak 2021</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">2</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2019.pdf" target="_blank">25 Ocak 2019</Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2018.pdf" target="_blank">16 Ocak 2018</Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

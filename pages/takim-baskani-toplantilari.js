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
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2023.pdf"><a target="_blank">4 Ocak 2023</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">4</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2022.pdf"><a target="_blank">4 Ocak 2022</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">3</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2021.pdf"><a target="_blank">7 Ocak 2021</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">2</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2019.pdf"><a target="_blank">25 Ocak 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2018.pdf"><a target="_blank">16 Ocak 2018</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

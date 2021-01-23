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
	          <th scope="row" width="10px">3</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_3.docx"><a>7 Ocak 2021</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">2</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_2.docx"><a>25 Ocak 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim/heak_takim_komisyon_1.pdf"><a>16 Ocak 2018</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

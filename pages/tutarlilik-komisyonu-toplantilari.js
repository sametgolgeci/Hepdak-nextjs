import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Tutarlılık Komisyonu Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="heak">Tutarlılık Komisyonu Toplantıları</h1>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="10px">9</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/09.pdf"><a>14 Mart 2024</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">8</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/08.pdf"><a>16-17 Mart 2023</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">7</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/07.pdf"><a>17-18 Mart 2022</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">6</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/06.pdf"><a>15-16 Mart 2021</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">5</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/05.pdf"><a>14 Mart 2020</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">4</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/04.pdf"><a>02 Mart 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/03.pdf"><a>05 Mart 2018</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/02.pdf"><a>05 Mart 2017</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/01.pdf"><a>06 Mart 2016</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

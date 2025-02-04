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
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/09.pdf">14 Mart 2024</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">8</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/08.pdf">16-17 Mart 2023</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">7</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/07.pdf">17-18 Mart 2022</Link></td>
	        </tr>
	      	<tr>
	          <th scope="row" width="10px">6</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/06.pdf">15-16 Mart 2021</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">5</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/05.pdf">14 Mart 2020</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">4</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/04.pdf">02 Mart 2019</Link></td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/03.pdf">05 Mart 2018</Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/02.pdf">05 Mart 2017</Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarlilik/01.pdf">06 Mart 2016</Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

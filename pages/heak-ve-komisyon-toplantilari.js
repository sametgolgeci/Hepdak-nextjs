import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | HEAK ve Komisyon Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="heak">HEAK ve Komisyon Toplantıları</h1>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="10px">17</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_17.docx"><a>1-2 Nisan 2021</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">16</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_16.docx"><a>30 Eylül 2020</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">15</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_15.docx"><a>1 Nisan 2020</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="10px">14</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_14.pdf"><a>3 Eylül 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">13</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_13.pdf"><a>4 Nisan 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">12</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_12.pdf"><a>10 Eylül 2018</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">11</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_11.pdf"><a>11 Nisan 2018</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">10</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_10.pdf"><a>8 Eylül 2017</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">9</th>	          
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_9.pdf"><a>6 Nisan 2017</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">8</th>	          
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_8.pdf"><a>8 Eylül 2016</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">7</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_7.pdf"><a>29 Nisan 2016</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">6</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak/heak_komisyon_6.pdf"><a>4 Eylül 2015</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">5</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak/heak_komisyon_5.pdf"><a>22 Mart 2013</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">4</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak/heak_komisyon_4.pdf"><a>6-7 Aralık 2012</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak/heak_komisyon_3.pdf"><a>6-7 Eylül 2012</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak/heak_komisyon_2.pdf"><a>10 Ekim 2011</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">1</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak/heak_komisyon_1.pdf"><a>4 Nisan 2011</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
	</div>
</MasterPage>
)
export default Toplantilar

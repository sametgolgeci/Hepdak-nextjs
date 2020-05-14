import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Toplantılar</title>
	</Head>
	<div className="row">
		<div className="genel col-md-6 col-sm-12">
			<h3 id="heak">HEAK ve Komisyon Toplantıları</h3>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="10px">1</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_14.pdf"><a>3 Eylül 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_13.pdf"><a>4 Nisan 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_12.pdf"><a>10 Eylül 2018</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">4</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_11.pdf"><a>11 Nisan 2018</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">5</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_10.pdf"><a>8 Eylül 2017</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">6</th>	          
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_9.pdf"><a>6 Nisan 2017</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">7</th>	          
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_8.pdf"><a>8 Eylül 2016</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">8</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_7.pdf"><a>29 Nisan 2016</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">9</th>
	          <td>HEAK Toplantısı - <Link href="doc/heak_komisyon_6.pdf"><a>4 Eylül 2015</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">10</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak_komisyon_5.pdf"><a>22 Mart 2013</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">11</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak_komisyon_4.pdf"><a>6-7 Aralık 2012</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">12</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak_komisyon_3.pdf"><a>6-7 Eylül 2012</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">13</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak_komisyon_2.pdf"><a>10 Ekim 2011</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">14</th>
	          <td>HEAK ve Komisyon Toplantısı - <Link href="doc/heak_komisyon_1.pdf"><a>4 Nisan 2011</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
		</div>
		<div className="genel col-md-6 col-sm-12">
			<h3 id="tutarlilik">Tutarlılık Komisyonu Toplantıları</h3>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="10px">1</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarli_komisyon_4.pdf"><a>2 Mart 2019</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarli_komisyon_3.pdf"><a>5 Mart 2018</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">3</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarli_komisyon_2.pdf"><a>5 Mart 2017</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">4</th>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/heak_tutarli_komisyon_1.pdf"><a>6 Mart 2016</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
	    <h3 id="takim">Takım Başkanları Toplantıları</h3>
	    <table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="10px">1</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim_komisyon_2.pdf"><a>25 Ocak 2019 </a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row">2</th>
	          <td>Takım Başkanları Toplantısı - <Link href="doc/heak_takim_komisyon_1.pdf"><a>16 Ocak 2018</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
	    <h3>Standartları Belirleme ve Geliştirme Komisyonu Toplantıları</h3>
	    <table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="140px">2 Kasım 2019 (İzmir)</th>
	          <td>Hemşirelik Lisans Eğitim Programı Standardının yeni sürümüne (Sürüm 4.0)  ve Özdeğerlendirme Raporu Hazırlama (ÖDR) Kılavuzunun yeni sürümüne  (Sürüm 5.0) son şeklinin verilmesi</td>
	        </tr>
	        <tr>
	          <th scope="row">17 Haziran 2019 (Ankara)</th>
	          <td>Hemşirelik Lisans Eğitim Programı Standardının yeni sürümünün (Sürüm 4.0)  ve Özdeğerlendirme Raporu Hazırlama (ÖDR) Kılavuzunun yeni sürümünün  (Sürüm 5.0) oluşturulması</td>
	        </tr>
	        <tr>
	          <th scope="row" >1 Mart 2019 (İzmir)</th>
	          <td>Her bir Hemşirelik Lisans Eğitim Programı Standardının (Sürüm 3.0) ve Özdeğerlendirme Raporu Hazırlama (ÖDR) Kılavuzunun (Sürüm 4.0) gözden geçirilmesi ve güncellenmesi</td>
	        </tr> 
	      </tbody>
	    </table>
		</div>
	</div>
</MasterPage>
)
export default Toplantilar

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
	          <th scope="row">9</th>
	          <td>
	          	<Link href="doc/paydas_toplantilari/belge_9_1.pdf"><a target="_blank">2023-2024 Dönemi HEPDAK Akreditasyon için Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı (20.03.2023)</a></Link><br/>
	          	<Link href="doc/paydas_toplantilari/belge_9_2.pdf"><a target="_blank">Özdeğerlendirme İçeriğinin Raporu Hazırlanması (20.03.2023)</a></Link>
	          </td>
	        </tr>
	      	<tr>
	          <th scope="row">8</th>
	          <td><Link href="doc/paydas_toplantilari/belge_8.pdf"><a target="_blank">2022-2023 Dönemi Akreditasyon İçin Ziyaret Yapılan Kurumlar ile Toplantı (13.03.2023)</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row">7</th>
	          <td>
		          <Link href="doc/paydas_toplantilari/belge_7_1.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 2.1 (13.10.2022)</a></Link><br/>
		          <Link href="doc/paydas_toplantilari/belge_7_2.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 2.2 (13.10.2022)</a></Link>
	          </td>
	        </tr>
	      	<tr>
	          <th scope="row">6</th>
	          <td><Link href="doc/paydas_toplantilari/belge_6.pdf"><a target="_blank">2021-2022 Dönemi Akreditasyon İçin Ziyaret Yapılan Kurumlar ile Toplantı (15.03.2022)</a></Link></td>
	        </tr>
	      	<tr>
	          <th scope="row">5</th>
	          <td>
		          <Link href="doc/paydas_toplantilari/belge_5.pdf"><a target="_blank">2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı (01.03.2022)</a></Link><br/>
		          <Link href="doc/paydas_toplantilari/belge_5.ppt"><a target="_blank">2022-2023 Dönemi Akreditasyona Başvuran Kurumlar Sunumu (01.03.2022)</a></Link>
	          </td>
	        </tr>
	      	<tr>
	          <th scope="row">4</th>
	          <td><Link href="doc/paydas_toplantilari/belge_4.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı (24.02.2022)</a></Link></td>
	        </tr>
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

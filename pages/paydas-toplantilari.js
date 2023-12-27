import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Paydas = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Paydaş Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12 komisyon-paydas">
			<h1>Paydaş Toplantıları</h1>
			<h5><a data-toggle="collapse" href="#HLPYT" role="button" aria-expanded="false" aria-controls="HLPYT">Hemşirelik Lisans Programı Yöneticileri ile Toplantılar</a></h5>
			<div className="collapse" id="HLPYT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<th scope="row" width="10px"></th>
	          	<td><Link href="doc/paydas_toplantilari/belge_10.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 3 (19 Ekim 2023)</a></Link></td>
	        	</tr>
	        	<tr>
		          <th scope="row" width="10px"></th>
		          <td>
			          <Link href="doc/paydas_toplantilari/belge_7_1.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 2.1 (13 Ekim 2022)</a></Link><br/>
			          <Link href="doc/paydas_toplantilari/belge_7_2.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 2.2 (13 Ekim 2022)</a></Link>
		          </td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/paydas_toplantilari/belge_4.pdf"><a target="_blank">Hemşirelik Lisans Programı Yöneticileri Toplantısı - 1 (24 Şubat 2022)</a></Link></td>
		        </tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#BKYT" role="button" aria-expanded="false" aria-controls="BKYT">Başvuran Kurum Yöneticileri ile Toplantılar</a></h5>
			<div className="collapse" id="BKYT">
				<table className="table table-striped">
					<tbody>
						<tr>
		          <th scope="row" width="10px"></th>
		          <td>
		          	<Link href="doc/paydas_toplantilari/belge_9_1.pdf"><a target="_blank">2023-2024 Dönemi HEPDAK Akreditasyon için Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı (20 Mart 2023)</a></Link><br/>
		          	<Link href="doc/paydas_toplantilari/belge_9_2.pdf"><a target="_blank">Özdeğerlendirme İçeriğinin Raporu Hazırlanması (20 Mart 2023)</a></Link>
		          </td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td>
			          <Link href="doc/paydas_toplantilari/belge_5.pdf"><a target="_blank">2022-2023 Dönemi HEPDAK Akreditasyon için Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı (01 Mart 2022)</a></Link><br/>
			          <Link href="doc/paydas_toplantilari/belge_5.ppt"><a target="_blank">2022-2023 Dönemi Akreditasyon için Başvuran Kurumlar Sunumu (01 Mart 2022)</a></Link>
		          </td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/paydas_toplantilari/belge_3.pdf"><a target="_blank">2021-2022 Dönemi HEPDAK Akreditasyon için Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı (18 Mart 2021)</a></Link></td>
		        </tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#AZEKYT" role="button" aria-expanded="false" aria-controls="AZEKYT">Akreditasyon İçin Ziyaret Edilen Kurum Yöneticileri ile Toplantılar</a></h5>
			<div className="collapse" id="AZEKYT">
				<table className="table table-striped">
					<tbody>
						<tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/paydas_toplantilari/belge_8.pdf"><a target="_blank">2022-2023 Dönemi Akreditasyon İçin Ziyaret Yapılan Kurumlar ile Toplantı (13 Mart 2023)</a></Link></td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/paydas_toplantilari/belge_6.pdf"><a target="_blank">2021-2022 Dönemi Akreditasyon İçin Ziyaret Yapılan Kurumlar ile Toplantı (15 Mart 2022)</a></Link></td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/paydas_toplantilari/belge_1.pdf"><a target="_blank">2020-2021 Dönemi Ziyaret Yapılan Kurum Temsilcileri ile Toplantı (08 Mart 2021)</a></Link></td>
		        </tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#TBT" role="button" aria-expanded="false" aria-controls="TBT">Takım Başkanı Toplantıları</a></h5>
			<div className="collapse" id="TBT">
				<table className="table table-striped">
					<tbody>
						<tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/heak_takim/heak_takim_komisyon_2023.pdf"><a target="_blank">Takım Başkanları Toplantısı - 5 (04 Ocak 2023)</a></Link></td>
		        </tr>
		      	<tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/heak_takim/heak_takim_komisyon_2022.pdf"><a target="_blank">Takım Başkanları Toplantısı - 4 (04 Ocak 2022)</a></Link></td>
		        </tr>
		      	<tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/heak_takim/heak_takim_komisyon_2021.pdf"><a target="_blank">Takım Başkanları Toplantısı - 3 (07 Ocak 2021)</a></Link></td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/heak_takim/heak_takim_komisyon_2019.pdf"><a target="_blank">Takım Başkanları Toplantısı - 2 (25 Ocak 2019)</a></Link></td>
		        </tr>
		        <tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/heak_takim/heak_takim_komisyon_2018.pdf"><a target="_blank">Takım Başkanları Toplantısı - 1 (16 Ocak 2018)</a></Link></td>
		        </tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#DTT" role="button" aria-expanded="false" aria-controls="DTT">Değerlendirme Takımları ile Toplantılar</a></h5>
			<div className="collapse" id="DTT">
				<table className="table table-striped">
					<tbody>
						<tr>
		          <th scope="row" width="10px"></th>
		          <td><Link href="doc/paydas_toplantilari/belge_2.pdf"><a target="_blank">2020-2021 Dönemi Değerlendirici Toplantısı (10 Mart 2021)</a></Link></td>
		        </tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#ODT" role="button" aria-expanded="false" aria-controls="ODT">Öğrenci Değerlendiriciler ile Toplantılar</a></h5>
			<div className="collapse" id="ODT">
				<table className="table table-striped">
					<tbody>
						
					</tbody>
				</table>
			</div>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Paydas

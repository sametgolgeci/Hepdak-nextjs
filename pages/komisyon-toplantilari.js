import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Paydas = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Komisyon Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12 komisyon-paydas">
			<h1>Komisyon Toplantıları</h1>
			<h5><a data-toggle="collapse" href="#SBGKT" role="button" aria-expanded="false" aria-controls="SBGKT">Standartları Belirleme ve Geliştirme Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="SBGKT">
			<h6>2023</h6>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="160px">Ekim<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-04.pdf"><a>Hemşirelik Lisans Eğitim Programı Standartları Dereceli Değerlendirme Aracına (Sürüm 6.0) Yönelik Alınan Paydaş Görüşlerinin Değerlendirilmesi ve Gerekli Düzenlemelerin Yapılması</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="160px">Mayıs - Temmuz<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-03.pdf"><a>HEPDAK Standartları Belirleme ve Geliştirme Komisyonu (SBGK) çalışma yönergesinin hazırlanması</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="160px">Mart<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-02.pdf"><a>T.S.7’nin güncellenmesi</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="160px">Ocak - Şubat<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-01.pdf"><a>T.S.4, T.S.5 ve T.S.6’nın güncellenmesi</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
	    <h6>2022</h6>
	    <table className="table table-striped">
	    	<tbody> 
	        <tr>
	          <th scope="row" width="160px">Şubat<br/>2022</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2022-01.pdf"><a>2021-2022 yılı Akreditasyon Değerlendirme Takım Başkanları ile Standart Belirleme ve Geliştirme Komisyonu üyeleri ile Hemşirelik Lisans Eğitim Programı Standartları Son Sürümleri Hakkında Görüşülmesi</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
	    <h6>2019</h6>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="160px">02 Kasım 2019 (İzmir)</th>
	          <td>Hemşirelik Lisans Eğitim Programı Standardının yeni sürümüne (Sürüm 4.0)  ve Özdeğerlendirme Raporu Hazırlama (ÖDR) Kılavuzunun yeni sürümüne  (Sürüm 5.0) son şeklinin verilmesi</td>
	        </tr>
	        <tr>
	          <th scope="row">17 Haziran 2019 (Ankara)</th>
	          <td>Hemşirelik Lisans Eğitim Programı Standardının yeni sürümünün (Sürüm 4.0)  ve Özdeğerlendirme Raporu Hazırlama (ÖDR) Kılavuzunun yeni sürümünün  (Sürüm 5.0) oluşturulması</td>
	        </tr>
	        <tr>
	          <th scope="row" >01 Mart 2019 (İzmir)</th>
	          <td>Her bir Hemşirelik Lisans Eğitim Programı Standardının (Sürüm 3.0) ve Özdeğerlendirme Raporu Hazırlama (ÖDR) Kılavuzunun (Sürüm 4.0) gözden geçirilmesi ve güncellenmesi</td>
	        </tr> 
	      </tbody>
	    </table>
			</div>
			<h5><a data-toggle="collapse" href="#SIKT" role="button" aria-expanded="false" aria-controls="SIKT">Sürekli İyileştirme Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="SIKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2024-02.pdf"><a>HEPDAK Sürekli İyileştirme Komisyonu Temmuz - Aralık 2024 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2024-01.pdf"><a>HEPDAK Sürekli İyileştirme Komisyonu Ocak - Haziran 2024 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2023-02.pdf"><a>HEPDAK Sürekli İyileştirme Komisyonu Temmuz - Aralık 2023 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2023-01.pdf"><a>HEPDAK Sürekli İyileştirme Komisyonu Ocak - Haziran 2023 Dönemi Raporu</a></Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#EKT" role="button" aria-expanded="false" aria-controls="EKT">Eğitim Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="EKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2024-02.pdf"><a>HEPDAK Eğitim Komisyonu Temmuz - Aralık 2024 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2024-01.pdf"><a>HEPDAK Eğitim Komisyonu Ocak - Haziran 2024 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2023-02.pdf"><a>HEPDAK Eğitim Komisyonu Temmuz - Aralık 2023 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2023-01.pdf"><a>HEPDAK Eğitim Komisyonu Ocak - Haziran 2023 Dönemi Raporu</a></Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#WBKT" role="button" aria-expanded="false" aria-controls="WBKT">Web Tasarım Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="WBKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/web_tasarim_komisyonu/2024-02.pdf"><a>HEPDAK Web Tasarım Komisyonu Temmuz - Aralık 2024 Dönemi Raporu</a></Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#UIKT" role="button" aria-expanded="false" aria-controls="UIKT">Uluslararası İlişkiler Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="UIKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/uluslararasi_iliskiler_komisyonu/2024-01.pdf"><a>Uluslararası İlişkiler Komisyonu Ocak - Haziran 2024 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/uluslararasi_iliskiler_komisyonu/2023-02.pdf"><a>Uluslararası İlişkiler Komisyonu Temmuz - Aralık 2023 Dönemi Raporu</a></Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/uluslararasi_iliskiler_komisyonu/2023-01.pdf"><a>Uluslararası İlişkiler Komisyonu Ocak - Haziran 2023 Dönemi Raporu</a></Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#YAHKT" role="button" aria-expanded="false" aria-controls="YAHKT">Yükseklisans Akreditasyonuna Hazırlık Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="YAHKT">
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

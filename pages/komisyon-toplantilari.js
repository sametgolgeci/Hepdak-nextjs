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
			<h6>2024</h6>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="160px">Ocak - Aralık<br/>2024</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2024-01.pdf">Standartları Belirleme ve Geliştirme Komisyonu 2024 yılı Toplantı Raporu</Link></td>
	        </tr>
	      </tbody>
	    </table>
			<h6>2023</h6>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="160px">Ekim<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-04.pdf">Hemşirelik Lisans Eğitim Programı Standartları Dereceli Değerlendirme Aracına (Sürüm 6.0) Yönelik Alınan Paydaş Görüşlerinin Değerlendirilmesi ve Gerekli Düzenlemelerin Yapılması</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="160px">Mayıs - Temmuz<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-03.pdf">HEPDAK Standartları Belirleme ve Geliştirme Komisyonu (SBGK) çalışma yönergesinin hazırlanması</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="160px">Mart<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-02.pdf">T.S.7’nin güncellenmesi</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="160px">Ocak - Şubat<br/>2023</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2023-01.pdf">T.S.4, T.S.5 ve T.S.6’nın güncellenmesi</Link></td>
	        </tr>
	      </tbody>
	    </table>
	    <h6>2022</h6>
	    <table className="table table-striped">
	    	<tbody> 
	        <tr>
	          <th scope="row" width="160px">Şubat<br/>2022</th>
	          <td><Link href="doc/komisyon_toplantilari/standart_belirleme_komisyonu/2022-01.pdf">2021-2022 yılı Akreditasyon Değerlendirme Takım Başkanları ile Standart Belirleme ve Geliştirme Komisyonu üyeleri ile Hemşirelik Lisans Eğitim Programı Standartları Son Sürümleri Hakkında Görüşülmesi</Link></td>
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
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2024-02.pdf">HEPDAK Sürekli İyileştirme Komisyonu Temmuz - Aralık 2024 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2024-01.pdf">HEPDAK Sürekli İyileştirme Komisyonu Ocak - Haziran 2024 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2023-02.pdf">HEPDAK Sürekli İyileştirme Komisyonu Temmuz - Aralık 2023 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/surekli_iyilestirme_komisyonu/2023-01.pdf">HEPDAK Sürekli İyileştirme Komisyonu Ocak - Haziran 2023 Dönemi Raporu</Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#EKT" role="button" aria-expanded="false" aria-controls="EKT">Eğitim Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="EKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2024-02.pdf">HEPDAK Eğitim Komisyonu Temmuz - Aralık 2024 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2024-01.pdf">HEPDAK Eğitim Komisyonu Ocak - Haziran 2024 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2023-02.pdf">HEPDAK Eğitim Komisyonu Temmuz - Aralık 2023 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/egitim_komisyonu/2023-01.pdf">HEPDAK Eğitim Komisyonu Ocak - Haziran 2023 Dönemi Raporu</Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#TKT" role="button" aria-expanded="false" aria-controls="TKT">Tutarlılık Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="TKT">
				<table className="table table-striped">
					<tbody>
	      	<tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/09.pdf">14 Mart 2024</Link></td>
	        </tr>
	      	<tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/08.pdf">16-17 Mart 2023</Link></td>
	        </tr>
	      	<tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/07.pdf">17-18 Mart 2022</Link></td>
	        </tr>
	      	<tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/06.pdf">15-16 Mart 2021</Link></td>
	        </tr>
	        <tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/05.pdf">14 Mart 2020</Link></td>
	        </tr>
	        <tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/04.pdf">02 Mart 2019</Link></td>
	        </tr>
	        <tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/03.pdf">05 Mart 2018</Link></td>
	        </tr>
	        <tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/02.pdf">05 Mart 2017</Link></td>
	        </tr>
	        <tr>
	          <td>Tutarlılık Komisyonu Toplantısı - <Link href="doc/komisyon_toplantilari/tutarlilik_komisyonu/01.pdf">06 Mart 2016</Link></td>
	        </tr>
	      </tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#WBKT" role="button" aria-expanded="false" aria-controls="WBKT">Web Tasarım Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="WBKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/web_tasarim_komisyonu/2024-02.pdf">HEPDAK Web Tasarım Komisyonu Temmuz - Aralık 2024 Dönemi Raporu</Link></td>
	        	</tr>
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#UIKT" role="button" aria-expanded="false" aria-controls="UIKT">Uluslararası İlişkiler Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="UIKT">
				<table className="table table-striped">
					<tbody>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/uluslararasi_iliskiler_komisyonu/2024-01.pdf">Uluslararası İlişkiler Komisyonu Ocak - Haziran 2024 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/uluslararasi_iliskiler_komisyonu/2023-02.pdf">Uluslararası İlişkiler Komisyonu Temmuz - Aralık 2023 Dönemi Raporu</Link></td>
	        	</tr>
						<tr>
	          	<td><Link href="doc/komisyon_toplantilari/uluslararasi_iliskiler_komisyonu/2023-01.pdf">Uluslararası İlişkiler Komisyonu Ocak - Haziran 2023 Dönemi Raporu</Link></td>
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

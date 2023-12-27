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
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="140px">Ekim 2023</th>
	          <td><Link href="doc/standart_belirleme_toplanti/02.pdf"><a>Hemşirelik Lisans Eğitim Programı Standartları Dereceli Değerlendirme Aracına (Sürüm 6.0) Yönelik Alınan Paydaş Görüşlerinin Değerlendirilmesi ve Gerekli Düzenlemelerin Yapılması</a></Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="140px">08 Şubat 2022</th>
	          <td><Link href="doc/standart_belirleme_toplanti/01.pdf"><a>2021-2022 yılı Akreditasyon Değerlendirme Takım Başkanları ile Standart Belirleme ve Geliştirme Komisyonu üyeleri ile Hemşirelik Lisans Eğitim Programı Standartları Son Sürümleri Hakkında Görüşülmesi</a></Link></td>
	        </tr>
	      </tbody>
	    </table>
			<table className="table table-striped">
	      <tbody>
	        <tr>
	          <th scope="row" width="140px">02 Kasım 2019 (İzmir)</th>
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
						
					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#EKT" role="button" aria-expanded="false" aria-controls="EKT">Eğitim Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="EKT">
				<table className="table table-striped">
					<tbody>

					</tbody>
				</table>
			</div>
			<h5><a data-toggle="collapse" href="#UIKT" role="button" aria-expanded="false" aria-controls="UIKT">Uluslararası İlişkiler Komisyonu Toplantıları</a></h5>
			<div className="collapse" id="UIKT">
				<table className="table table-striped">
					<tbody>

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

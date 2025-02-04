import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Toplantilar = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Standard Belirleme ve Geliştirme Komisyonu Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12">
			<h1 id="heak">Standard Belirleme ve Geliştirme Komisyonu Toplantıları</h1>
			<table className="table table-striped">
	      <tbody>
	      	<tr>
	          <th scope="row" width="140px">Ekim 2023</th>
	          <td><Link href="doc/standart_belirleme_toplanti/02.pdf">Hemşirelik Lisans Eğitim Programı Standartları Dereceli Değerlendirme Aracına (Sürüm 6.0) Yönelik Alınan Paydaş Görüşlerinin Değerlendirilmesi ve Gerekli Düzenlemelerin Yapılması</Link></td>
	        </tr>
	        <tr>
	          <th scope="row" width="140px">08 Şubat 2022</th>
	          <td><Link href="doc/standart_belirleme_toplanti/01.pdf">2021-2022 yılı Akreditasyon Değerlendirme Takım Başkanları ile Standart Belirleme ve Geliştirme Komisyonu üyeleri ile Hemşirelik Lisans Eğitim Programı Standartları Son Sürümleri Hakkında Görüşülmesi</Link></td>
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
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Toplantilar

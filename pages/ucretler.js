import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Ucretler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Ücretler</title>
	    </Head>
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
          <div id="ucretler" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-title">Ücretler</div>
            <div className="akreditasyon-content-subtitle">2021-2022 Değerlendirme Dönemi Akreditasyon Bedelleri</div>
            <p>2021-2022 döneminde değerlendirilecek programlar için akreditasyon değerlendirme bedelleri aşağıdaki tabloda yer almaktadır.</p>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Değerlendirme Türü</th>
                  <th scope="col">Normal Öğretim</th>
                  <th scope="col">İkinci Öğretim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Genel Değerlendirme(1)</th>
                  <td>25.000 TL + KDV*</td>
                  <td>15.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Ziyaretle Ara Değerlendirme(2)</th>
                  <td>10.000 TL + KDV*</td>
                  <td>10.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Raporla Ara Değerlendirme(2)</th>
                  <td>6.000 TL + KDV*</td>
                  <td>6.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Ziyaretle Kanıt Göster(3)</th>
                  <td>10.000 TL + KDV*</td>
                  <td>10.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Raporla Kanıt Göster(3)</th>
                  <td>6.000 TL + KDV*</td>
                  <td>6.000 TL + KDV*</td>
                </tr>
              </tbody>
            </table>
            <p>(1) İlk kez değerlendirmesi yapılacak programların veya akreditasyonu olan programların genellikle beş yılda bir yapılan değerlendirmesidir.</p>
            <p>(2) Daha önce yapılan genel değerlendirmesi sonucunda kısa süreli akreditasyon verilmiş olan programların değerlendirmesidir.</p>
            <p>(3) Daha önce yapılan ara veya genel değerlendirmesi sonucunda bir yıl süreli akreditasyon verilmiş olan programların değerlendirmesidir.</p>
            <p>* KDV miktarı %18 üzerinden hesaplanır.</p>
            <div className="akreditasyon-content-subtitle">2021-2022 Değerlendirme Dönemi Akreditasyon Bedelleri Ödeme Planı</div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Genel Değerlendirme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2021 Taksiti</th>
                  <td>2.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Eylül 2021 Taksiti</th>
                  <td>7.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2021 Taksiti</th>
                  <td>7.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2021 Taksiti</th>
                  <td>7.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>25.000 TL.+ KDV</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Ziyaretle Ara Değerlendirme/Ziyaretle Kanıt Göster*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2021 Taksiti</th>
                  <td>3.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2021 Taksiti</th>
                  <td>3.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2021 Taksiti</th>
                  <td>4.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>10.000 TL.+ KDV**</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Raporla Ara Değerlendirme/Raporla Kanıt Göster* </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2021 Taksiti</th>
                  <td>2.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2021 Taksiti</th>
                  <td>2.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2021 Taksiti</th>
                  <td>2.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>6.000 TL.+ KDV**</td>
                </tr>
              </tbody>
            </table>
            <p>* Ödeme planını takip etmek kurumun sorumluluğudur.</p>
            <p>** Programların talep etmesi durumunda akreditasyon bedeli Kasım ayında tek seferde tahsil edilebilir.</p>
            <div className="akreditasyon-content-subtitle">İkinci Öğretim Akreditasyon Bedeli Ödeme Planı</div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Genel Değerlendirme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2021 Taksiti</th>
                  <td>2.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Eylül 2021 Taksiti</th>
                  <td>5.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2021 Taksiti</th>
                  <td>5.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2021 Taksiti</th>
                  <td>2.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>15.000 TL.+ KDV</td>
                </tr>
              </tbody>
            </table>
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Ucretler
import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Ucretler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Ücretler</title>
	    </Head>
      <div className="genel"><h1>Ücretler</h1></div>
    
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
          <div id="ucretler" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-subtitle">2023-2024 Değerlendirme Dönemi Akreditasyon Bedelleri</div>
            <p>2023-2024 döneminde değerlendirilecek programlar için akreditasyon değerlendirme bedelleri aşağıdaki tabloda yer almaktadır.</p>
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
                  <td>79.000 TL + KDV*</td>
                  <td>60.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Ziyaretle Ara Değerlendirme(2)</th>
                  <td>35.000 TL + KDV*/**</td>
                  <td>30.000 TL + KDV*/**</td>
                </tr>
                <tr>
                  <th scope="row">Raporla Ara Değerlendirme(2)</th>
                  <td>35.000 TL + KDV*</td>
                  <td>30.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Ziyaretle Kanıt Göster(3)</th>
                  <td>30.000 TL + KDV*/**</td>
                  <td>25.000 TL + KDV*/**</td>
                </tr>
                <tr>
                  <th scope="row">Raporla Kanıt Göster(3)</th>
                  <td>35.000 TL + KDV*</td>
                  <td>20.000 TL + KDV*</td>
                </tr>
              </tbody>
            </table>
            <p>(1) İlk kez değerlendirmesi yapılacak programların veya akreditasyonu olan programların genellikle beş yılda bir yapılan değerlendirmesidir.</p>
            <p>(2) Daha önce yapılan genel değerlendirmesi sonucunda kısa süreli akreditasyon verilmiş olan programların değerlendirmesidir.</p>
            <p>(3) Daha önce yapılan ara veya genel değerlendirmesi sonucunda bir yıl süreli akreditasyon verilmiş olan programların değerlendirmesidir.</p>
            <p>* KDV miktarı %18 üzerinden hesaplanır.</p>
            <p>** Programın genel değerlendirmesi yüz yüze yapıldı ise, bu değerlendirmesi çevrimiçi yapılabilir. Fakat değerlendirme
takımının gereksinim belirtmesi durumunda ziyaretin bir bölümü yüz yüze yapılabilir.</p>
            <div className="akreditasyon-content-subtitle">2023-2024 Değerlendirme Dönemi Akreditasyon Bedelleri Ödeme Planı*/**</div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Genel Değerlendirme</th>
                  <th scope="col">Normal Öğretim</th>
                  <th scope="col">İkinci Öğretim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Haziran 2023 Taksiti</th>
                  <td>10.000 TL.+ KDV</td>
                  <td>10.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ağustos 2023 Taksiti</th>
                  <td>30.000 TL.+ KDV</td>
                  <td>15.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2023 Taksiti</th>
                  <td>20.000 TL.+ KDV</td>
                  <td>15.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2023 Taksiti</th>
                  <td>19.000 TL.+ KDV</td>
                  <td>20.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>79.000 TL.+ KDV</td>
                  <td>60.000 TL.+ KDV</td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Ziyaretle Ara Değerlendirme/Ziyaretle Kanıt Göster</th>
                  <th scope="col">Normal Öğretim</th>
                  <th scope="col">İkinci Öğretim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Haziran 2023 Taksiti</th>
                  <td>10.000 TL.+ KDV</td>
                  <td>10.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ağustos 2022 Taksiti</th>
                  <td>15.000 TL.+ KDV</td>
                  <td>10.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2022 Taksiti</th>
                  <td>10.000 TL.+ KDV</td>
                  <td>10.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>35.000 TL.+ KDV**</td>
                  <td>30.000 TL.+ KDV**</td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Raporla Ara Değerlendirme/Raporla Kanıt Göster</th>
                  <th scope="col">Normal Öğretim</th>
                  <th scope="col">İkinci Öğretim</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Haziran 2023 Taksiti</th>
                  <td>10.000 TL.+ KDV</td>
                  <td>10.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ağustos 2022 Taksiti</th>
                  <td>15.000 TL.+ KDV</td>
                  <td>10.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2022 Taksiti</th>
                  <td>10.000 TL.+ KDV</td>
                  <td>5.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>35.000 TL.+ KDV**</td>
                  <td>25.000 TL.+ KDV**</td>
                </tr>
              </tbody>
            </table>
            <p>* Ödeme planını takip etmek kurumun sorumluluğudur.</p>
            <p>** Öninceleme sonrası ziyaret edilmeme kararı alınan programların ödemiş oldukları Haziran taksit tutarı geri ödenmez.</p>
            <p>- Toplu ödeme yapmak isteyen programların, HEPDAK Saymanı ile iletişime geçmesi gerekmektedir.</p>
          </div>
	    	</div>
	    </div>
      {/*
      <div className="update-page">2022-2023  Değerlendirme Dönemi Akreditasyon Ücretleri Güncellenmektedir.</div>
      */}
    </MasterPage>
)
export default Ucretler
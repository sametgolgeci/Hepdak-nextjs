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
            <div className="akreditasyon-content-subtitle">2025-2026 Değerlendirme Dönemi Akreditasyon Bedelleri</div>
            <p>2025-2026 döneminde değerlendirilecek programlar için akreditasyon değerlendirme bedelleri aşağıdaki tabloda yer almaktadır.</p>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" width="50%">Değerlendirme Türü</th>
                  <th scope="col">Akreditasyon Bedeli</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Genel Değerlendirme(1)</th>
                  <td>230.000 TL + KDV*</td>
                </tr>
                <tr>
                  <th scope="row">Ara Değerlendirme(2)</th>
                  <td>170.000 TL + KDV*/**</td>
                </tr>
              </tbody>
            </table>
            <p>(1) İlk kez değerlendirmesi yapılacak programların veya yeniden akredite olmak için başvuru yapan programların genellikle beş yılda bir yapılan değerlendirmesidir.</p>
            <p>(2) Daha önce yapılan genel değerlendirme sonucunda kısa süreli akreditasyon verilmiş olan programların değerlendirmesidir.</p>
            <p>* KDV miktarı %20 üzerinden hesaplanır.</p>
            <p>** Programın genel değerlendirmesi yüz yüze yapıldı ise, bu değerlendirmesi çevrimiçi yapılabilir. Fakat değerlendirme takımının gereksinim belirtmesi durumunda HEAK onayı ile ziyaretin bir bölümü yüz yüze yapılabilir.</p>
            <div className="akreditasyon-content-subtitle">2024-2025 Değerlendirme Dönemi Akreditasyon Bedelleri Ödeme Planı*/**</div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" width="50%">Genel Değerlendirme</th>
                  <th scope="col">Akreditasyon Bedeli</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2024 Taksiti</th>
                  <td>35.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Eylül 2024 Taksiti</th>
                  <td>50.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2024 Taksiti</th>
                  <td>50.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>135.000 TL.+ KDV</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" width="50%">Ara Değerlendirme</th>
                  <th scope="col">Akreditasyon Bedeli</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2024 Taksiti</th>
                  <td>25.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Eylül 2024 Taksiti</th>
                  <td>30.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2024 Taksiti</th>
                  <td>30.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>85.000 TL.+ KDV**</td>
                </tr>
              </tbody>
            </table>
            <p>* Ödeme planını takip etmek kurumun sorumluluğudur.</p>
            <p>** Ön inceleme sonrası ziyaret edilmeme kararı alınan programların ödemiş oldukları Mart taksit tutarı geri ödenmez.</p>
            <p>Toplu ödeme yapmak isteyen programların, HEPDAK Saymanı ile iletişime geçmesi gerekmektedir.</p>
          </div>
	    	</div>
	    </div>
      {/*
      <div className="update-page">2022-2023  Değerlendirme Dönemi Akreditasyon Ücretleri Güncellenmektedir.</div>
      */}
    </MasterPage>
)
export default Ucretler
import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Uzaktan Eğitim Kaynakları</title>
	    </Head>
	       <div className="genel">
            <h1>Uzaktan Eğitim Kaynakları</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">1</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_1.pdf"><a>Virtual Visit</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_2.pdf"><a>Uzaktan Eğitimde Kalite Standartları</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_3.pdf"><a>Uzaktan Eğitimde Değerlendirme</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_4.pdf"><a>Uzaktan Eğitimde Değerlendirme - Üç Program Örneği</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_5.pdf"><a>Uzaktan Eğitimde Değerlendirme Stratejileri</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_6.pdf"><a>Uzaktan Eğitimde Akreditasyon</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_7.pdf"><a>Uzaktan Eğitimde Akreditasyon Program Örneği</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_8.pdf"><a>Uzaktan Eğitimde Akreditasyon için Değerlendirme Aracı Örneği</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_9.pdf"><a>Uzaktan Eğitim Ölçme ve Değerlendirme - Tez</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_10.pdf"><a>Uzaktan Egitimde Kalite Güvencesi ve Akr. - Kitap Bölümü</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_11.pdf"><a>Türkiye'de Uzaktan Eğitim Sorunları</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_12.pdf"><a>Türkiye'de Ögrenme Akreditasyon</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_13.pdf"><a>Quality Assurance for Distance Learning in Nursing</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_14.pdf"><a>Pandemic and Nursing Education</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_15.pdf"><a>Hemşirelikte Uzaktan Eğitim - Brezilya Örneği</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_16.pdf"><a>Hemşirelikte Uzaktan Eğitim Müfredatı</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_17.pdf"><a>Handbook of Distane Education</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_18.pdf"><a>Distance Learning - National States of Nursing Boards</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_19.pdf"><a>Distance Education in Nursing - Book</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_20.pdf"><a>AUDAK - DegerlendirmeÖlçütleri</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
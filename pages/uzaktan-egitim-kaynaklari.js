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
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_1.pdf">Virtual Visit</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_2.pdf">Uzaktan Eğitimde Kalite Standartları</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_3.pdf">Uzaktan Eğitimde Değerlendirme</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_4.pdf">Uzaktan Eğitimde Değerlendirme - Üç Program Örneği</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_5.pdf">Uzaktan Eğitimde Değerlendirme Stratejileri</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_6.pdf">Uzaktan Eğitimde Akreditasyon</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_7.pdf">Uzaktan Eğitimde Akreditasyon Program Örneği</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_8.pdf">Uzaktan Eğitimde Akreditasyon için Değerlendirme Aracı Örneği</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_9.pdf">Uzaktan Eğitim Ölçme ve Değerlendirme - Tez</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_10.pdf">Uzaktan Egitimde Kalite Güvencesi ve Akr. - Kitap Bölümü</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_11.pdf">Türkiye'de Uzaktan Eğitim Sorunları</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_12.pdf">Türkiye'de Ögrenme Akreditasyon</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">13</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_13.pdf">Quality Assurance for Distance Learning in Nursing</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_14.pdf">Pandemic and Nursing Education</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_15.pdf">Hemşirelikte Uzaktan Eğitim - Brezilya Örneği</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_16.pdf">Hemşirelikte Uzaktan Eğitim Müfredatı</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_17.pdf">Handbook of Distane Education</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_18.pdf">Distance Learning - National States of Nursing Boards</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_19.pdf">Distance Education in Nursing - Book</Link></td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td><Link href="doc/uzaktan_egitim_kaynaklari/belge_20.pdf">AUDAK - DegerlendirmeÖlçütleri</Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
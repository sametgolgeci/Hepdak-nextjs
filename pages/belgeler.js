import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Belgeler</title>
	    </Head>
      <div className="genel"><h1>Belgeler</h1></div>
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
          <div id="belgeler" className="akreditasyon-content-item">         
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Tüzük,Yönetmelik ve Yönergeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td>HEPDAK Tüzüğü <Link href="doc/a1_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a1_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/a1_v3.pdf"><a>Sürüm 3.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Çalışma Yönetmeliği <Link href="doc/a2.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>HEPDAK Değerlendirme ve Akreditasyon Uygulama Esasları Yönergesi <Link href="doc/a3_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a3_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/a3_v3.pdf"><a>Sürüm 3.0</a></Link> | <Link href="doc/a3_v4.pdf"><a>Sürüm 4.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>HEPDAK Standartları Belirleme ve Geliştirme Komisyonu Çalışma Yönergesi <Link href="doc/a4.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>HEPDAK Eğitim Komisyonu Çalışma Yönergesi <Link href="doc/a5_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a5_v2.pdf"><a>Sürüm 2.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>HEPDAK Program Değerlendirme ve İzleme Komisyonu Çalışma Yönergesi <Link href="doc/a6.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>HEPDAK Arşivleme Yönergesi <Link href="doc/a7_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a7_v2.pdf"><a>Sürüm 2.0</a></Link></td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Kurumlar ve Değerlendiriciler için Belgeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><p>HEPDAK 2021-2022 Dönemi Program Değerlendirme Başvuru Formu <Link href="doc/b1-basvuru-2021-2022.doc"><a>Word</a></Link></p></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Değerlendirme ve Akreditasyon Süreci <Link href="doc/b2_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Hemşirelik Lisans Eğitim Programı Standartları <Link href="doc/b3_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b3_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b3_v3.pdf"><a>Sürüm 3.0</a></Link> | <Link href="doc/b3_v4.pdf"><a>Sürüm 4.0</a></Link> | <Link href="doc/b3_v4_1.doc"><a>Sürüm 4.1  <span className="belge-span">Güncel</span></a></Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>HEPDAK Özdeğerlendirme Raporu Hazırlama Kılavuzu <Link href="doc/b4_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b4_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b4_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b4_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 4.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b4_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v4_1.doc"><a>Word</a></Link>) | <strong>Sürüm 5.0</strong> (<Link href="doc/b4_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v5.doc"><a>Word</a></Link>) | <strong>Sürüm 5.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b4_v5_1.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v5_1.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>HEPDAK Değerlendirme Kılavuzu <Link href="doc/b5_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b5_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b5_v3.pdf"><a>Sürüm 3.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Program Değerlendiricisi Raporu <Link href="doc/b6_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b6_v2.pdf"><a>Sürüm 2.0</a></Link> | <strong>Sürüm 3.0</strong> (<Link href="doc/b6_v3.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v3.doc"><a>Word</a></Link>) | <strong>Sürüm 4.0</strong> (<Link href="doc/b6_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 4.1</strong> (<Link href="doc/b6_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v4_1.docx"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Program Değerlendirme Çizelgesi <Link href="doc/b7_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b7_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b7_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b7_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 5.0</strong> (<Link href="doc/b7_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v5.doc"><a>Word</a></Link>) | <strong>Sürüm 5.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b7_v5_1.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v5_1.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Ara Rapor Hazirlarken Dikkat Edilmesi Gereken Konular <Link href="doc/b8_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b8_v2.pdf"><a>Sürüm 2.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Özdeğerlendirme Raporu Hazırlarken Dikkat Edilmesi Gereken Noktalar <Link href="doc/b9_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b9_v2.pdf"><a>Sürüm 2.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td> Değerlendirme Takım Üyelerinin Değerlendirilmesi <Link href="doc/b10_v1.pdf"><a>Sürüm 1.0</a></Link> | <strong>Sürüm 2.0</strong> (<Link href="doc/b10_v2.pdf"><a>PDF</a></Link> | <Link href="doc/b10_v2.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">11</th>
                  <td>HEPDAK Değerlendirmelerine Öğrenci Değerlendirici Katılımı Uygulama Esasları <Link href="doc/b11_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b11_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b11_v3.pdf"><a>Sürüm 3.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">12</th>
                  <td>HEPDAK Öğrenci Değerlendirici Raporu <Link href="doc/b12_v1.pdf"><a>Sürüm 1.0</a></Link> | <strong>Sürüm 2.0</strong> (<Link href="doc/b12_v2.pdf"><a>PDF</a></Link> | <Link href="doc/b12_v2.doc"><a>Word</a></Link>) | <strong>Sürüm 3.0</strong> (<Link href="doc/b12_v3.pdf"><a>PDF</a></Link> | <Link href="doc/b12_v3.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">13</th>
                  <td>HEPDAK Akredite Eğitim Programları İçin Gelişim Raporu Hazırlama Rehberi <strong>Sürüm 1.0</strong> (<Link href="doc/b13_v1.pdf"><a>PDF</a></Link> | <Link href="doc/b13_v1.doc"><a>Word</a></Link>) | <strong>Sürüm 2.0</strong> (<Link href="doc/b13_v2.pdf"><a>PDF</a></Link> | <Link href="doc/b13_v2.docx"><a>Word</a></Link>) | <strong>Sürüm 2.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b13_v2_1.pdf"><a>PDF</a></Link> | <Link href="doc/b13_v2_1.docx"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">14</th>
                  <td>HEPDAK Uzaktan Eğitim Standartları <strong>Sürüm 1.0</strong> (<Link href="doc/b14_v1.pdf"><a>PDF</a></Link> | <Link href="doc/b14_v1.docx"><a>Word</a></Link>) | <strong>Sürüm 1.1</strong> (<Link href="doc/b14_v1_1.pdf"><a>PDF</a></Link> | <Link href="doc/b14_v1_1.docx"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">15</th>
                  <td>HEPDAK Uzaktan Eğitim Program Değerlendirme Çizelgesi <strong>Sürüm 1.0</strong> (<Link href="doc/b15_v1.pdf"><a>PDF</a></Link> | <Link href="doc/b15_v1.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">16</th>
                  <td>HEPDAK Uzaktan Değerlendirme ve Saha Ziyareti Yönergesi <strong>Sürüm 1.0</strong> (<Link href="doc/b16_v1.pdf"><a>PDF</a></Link> | <Link href="doc/b16_v1.docx"><a>Word</a></Link>)</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Değerlendirme Süreçleri ile İlgili Akış Şemaları</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td>HEPDAK Akreditasyon Süreci Akış Şeması <Link href="doc/d1_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Genel Değerlendirme - Ziyaret Öncesi Süreçler - Akış <Link href="doc/d2_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Genel Değerlendirme - Ziyaret Sırasındaki Süreçler - İş Akışı <Link href="doc/d3_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Genel Değerlendirme Kontrol Listesi <Link href="doc/d4_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>HEPDAK Tutarlılık Süreci <Link href="doc/d5_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Diğer Belgeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td> HEPDAK Raporları Yazım Kuralları <Link href="doc/c1_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Etik Kuralları <Link href="doc/c2_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
              </tbody>
            </table>
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Belgeler
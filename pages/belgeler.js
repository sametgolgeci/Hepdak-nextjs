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
                  <td>
                    HEPDAK Tüzüğü - <Link href="doc/a1_v3.pdf">Sürüm 3.0</Link> - <a data-toggle="collapse" href="#a01" role="button" aria-expanded="false" aria-controls="a01">↓</a>
                    <div className="collapse" id="a01">
                      <p>- <Link href="doc/a1_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/a1_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    HEPDAK Çalışma Yönetmeliği - <Link href="doc/a2_v2.pdf">Sürüm 2.0</Link> - <a data-toggle="collapse" href="#a02" role="button" aria-expanded="false" aria-controls="a02">↓</a>
                    <div className="collapse" id="a02">
                      <p>- <Link href="doc/a2_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    HEPDAK Değerlendirme ve Akreditasyon Uygulama Esasları Yönergesi - <Link href="doc/a3_v6.pdf">Sürüm 6.0</Link> - <a data-toggle="collapse" href="#a03" role="button" aria-expanded="false" aria-controls="a03">↓</a>
                    <div className="collapse" id="a03">
                      <p>- <Link href="doc/a3_v5.pdf">Sürüm 5.0</Link><br/>- <Link href="doc/a3_v4.pdf">Sürüm 4.0</Link><br/>- <Link href="doc/a3_v3.pdf">Sürüm 3.0</Link><br/>- <Link href="doc/a3_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/a3_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    HEPDAK Standartları Belirleme ve Geliştirme Komisyonu Çalışma Yönergesi - <Link href="doc/a4_v2.pdf">Sürüm 2.0</Link> - <a data-toggle="collapse" href="#a04" role="button" aria-expanded="false" aria-controls="a04">↓</a>
                    <div className="collapse" id="a04">
                      <p>- <Link href="doc/a4_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>HEPDAK Uzaktan Değerlendirme ve Saha Ziyareti Yönergesi <strong>Sürüm 1.0</strong> (<Link href="doc/b16_v1.pdf">PDF</Link> | <Link href="doc/b16_v1.docx">Word</Link>)</td>
                </tr>
               <tr>
                  <th scope="row">6</th>
                  <td>
                    HEPDAK Eğitim Komisyonu Çalışma Yönergesi - <Link href="doc/a5_v2_1.pdf">Sürüm 2.1</Link> - <a data-toggle="collapse" href="#a05" role="button" aria-expanded="false" aria-controls="a05">↓</a>
                    <div className="collapse" id="a05">
                      <p>- <Link href="doc/a5_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/a5_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>HEPDAK Sürekli İyileştirme Komisyonu Yönergesi <Link href="doc/a6_v1.pdf">Sürüm 1.0</Link></td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>HEPDAK Uluslararası İlişkiler Komisyonu Yönergesi <Link href="doc/a7_v1.pdf">Sürüm 1.0</Link></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>
                    HEPDAK Arşivleme Yönergesi - <Link href="doc/a8_v2_1.pdf">Sürüm 2.1</Link> - <a data-toggle="collapse" href="#a08" role="button" aria-expanded="false" aria-controls="a08">↓</a>
                    <div className="collapse" id="a08">
                      <p>- <Link href="doc/a8_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/a8_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>HEPDAK Web Tasarım Komisyonu Çalışma ve Usul ve Esasları Yönergesi <Link href="doc/a10_v1.pdf">Sürüm 1.0</Link></td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Kurumlar için Belgeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><p>HEPDAK Program Değerlendirme Başvuru Formu <Link href="doc/b1-basvuru-2024-2025.pdf">PDF</Link></p></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    HEPDAK Hemşirelik Lisans Eğitim Programı Standartları - <strong>Sürüm 6.0</strong> (<Link href="doc/b3_v6.pdf">PDF</Link> | <Link href="doc/b3_v6.doc">Word</Link>) - <a data-toggle="collapse" href="#b02" role="button" aria-expanded="false" aria-controls="b02">↓</a>
                    <div className="collapse" id="b02">
                      <p>- <strong>Sürüm 4.1</strong> (<Link href="doc/b3_v4_1.pdf">PDF</Link> | <Link href="doc/b3_v4_1.doc">Word</Link>)<br/>- <strong>Sürüm 4.0</strong> (<Link href="doc/b3_v4.pdf">PDF</Link> | <Link href="doc/b3_v4.doc">Word</Link>)<br/>- <Link href="doc/b3_v3.pdf">Sürüm 3.0</Link><br/>- <Link href="doc/b3_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/b3_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    HEPDAK Özdeğerlendirme Raporu Hazırlama Kılavuzu - <strong>Sürüm 6.0</strong> (<Link href="doc/b4_v6.pdf">PDF</Link> | <Link href="doc/b4_v6.doc">Word</Link>) - <a data-toggle="collapse" href="#b03" role="button" aria-expanded="false" aria-controls="b03">↓</a>
                    <div className="collapse" id="b03">
                      <p>- <strong>Sürüm 5.1</strong> (<Link href="doc/b4_v5_1.pdf">PDF</Link> | <Link href="doc/b4_v5_1.doc">Word</Link>)<br/>- <strong>Sürüm 5.0</strong> (<Link href="doc/b4_v5.pdf">PDF</Link> | <Link href="doc/b4_v5.doc">Word</Link>)<br/>- <strong>Sürüm 4.1</strong> (<Link href="doc/b4_v4_1.pdf">PDF</Link> | <Link href="doc/b4_v4_1.doc">Word</Link>)<br/>- <strong>Sürüm 4.0</strong> (<Link href="doc/b4_v4.pdf">PDF</Link> | <Link href="doc/b4_v4.doc">Word</Link>)<br/>- <Link href="doc/b4_v3.pdf">Sürüm 3.0</Link><br/>- <Link href="doc/b4_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/b4_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>
                    HEPDAK Akredite Eğitim Programları İçin Gelişim Raporu Hazırlama Rehberi - <strong>Sürüm 2.3</strong> (<Link href="doc/b13_v2_3.pdf">PDF</Link> | <Link href="doc/b13_v2_3.docx">Word</Link>) - <a data-toggle="collapse" href="#b04" role="button" aria-expanded="false" aria-controls="b04">↓</a>
                    <div className="collapse" id="b04">
                      <p>- <strong>Sürüm 2.2</strong> (<Link href="doc/b13_v2_2.pdf">PDF</Link> | <Link href="doc/b13_v2_2.docx">Word</Link>)<br/>- <strong>Sürüm 2.1</strong> (<Link href="doc/b13_v2_1.pdf">PDF</Link> | <Link href="doc/b13_v2_1.docx">Word</Link>)<br/>- <strong>Sürüm 2.0</strong> (<Link href="doc/b13_v2.pdf">PDF</Link> | <Link href="doc/b13_v2.docx">Word</Link>)<br/>- <strong>Sürüm 1.0</strong> (<Link href="doc/b13_v1.pdf">PDF</Link> | <Link href="doc/b13_v1.doc">Word</Link>)</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Değerlendirme Takımları için Belgeler</th>
                </tr>
                <tr>
                  <th scope="col" colSpan="2" className="table-alt-baslik">- Öğretim Üyeleri</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>
                    HEPDAK Değerlendirme Kılavuzu - <strong>Sürüm 4.0</strong> (<Link href="doc/b5_v4.pdf">PDF</Link> | <Link href="doc/b5_v4.docx">Word</Link>) - <a data-toggle="collapse" href="#c01" role="button" aria-expanded="false" aria-controls="c01">↓</a>
                    <div className="collapse" id="c01">
                      <p>- <Link href="doc/b5_v3.pdf">Sürüm 3.0</Link><br/>- <Link href="doc/b5_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/b5_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    HEPDAK Program Değerlendiricisi Raporu - <strong>Sürüm 6.0</strong> (<Link href="doc/b6_v6.pdf">PDF</Link> | <Link href="doc/b6_v6.docx">Word</Link>) - <a data-toggle="collapse" href="#c02" role="button" aria-expanded="false" aria-controls="c02">↓</a>
                    <div className="collapse" id="c02">
                      <p>- <strong>Sürüm 4.1</strong> (<Link href="doc/b6_v4_1.pdf">PDF</Link> | <Link href="doc/b6_v4_1.docx">Word</Link>)<br/>- <strong>Sürüm 4.0</strong> (<Link href="doc/b6_v4.pdf">PDF</Link> | <Link href="doc/b6_v4.doc">Word</Link>)<br/>- <strong>Sürüm 3.1</strong> (<Link href="doc/b6_v3_1.pdf">PDF</Link> | <Link href="doc/b6_v3_1.doc">Word</Link>)<br/>- <strong>Sürüm 3.0</strong> (<Link href="doc/b6_v3.pdf">PDF</Link> | <Link href="doc/b6_v3.doc">Word</Link>)<br/>- <Link href="doc/b6_v2.pdf">Sürüm 2.0</Link><br/>- <Link href="doc/b6_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    HEPDAK Değerlendirme Takım Üyelerinin Değerlendirilmesi - <strong>Sürüm 2.1</strong> (<Link href="doc/b10_v2_1.pdf">PDF</Link> | <Link href="doc/b10_v2_1.docx">Word</Link>) - <a data-toggle="collapse" href="#c03" role="button" aria-expanded="false" aria-controls="c03">↓</a>
                    <div className="collapse" id="c03">
                      <p>- <strong>Sürüm 2.0</strong> (<Link href="doc/b10_v2.pdf">PDF</Link> | <Link href="doc/b10_v2.doc">Word</Link>)<br/>- <Link href="doc/b10_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2" className="table-alt-baslik">- Öğrenci</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td>HEPDAK Öğrenci Değerlendirici Kılavuzu <Link href="doc/b19_v6.pdf">Sürüm 6.0</Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>
                    HEPDAK Öğrenci Değerlendirici Raporu - <Link href="doc/b12_v6.pdf">Sürüm 6.0</Link> - <a data-toggle="collapse" href="#c04" role="button" aria-expanded="false" aria-controls="c04">↓</a>
                    <div className="collapse" id="c04">
                      <p>- <strong>Sürüm 4.0</strong> (<Link href="doc/b12_v4.pdf">PDF</Link> | <Link href="doc/b12_v4.doc">Word</Link>)<br/>- <strong>Sürüm 3.0</strong> (<Link href="doc/b12_v3.pdf">PDF</Link> | <Link href="doc/b12_v3.doc">Word</Link>)<br/>- <strong>Sürüm 2.0</strong> (<Link href="doc/b12_v2.pdf">PDF</Link> | <Link href="doc/b12_v2.doc">Word</Link>)<br/>- <Link href="doc/b6_v1.pdf">Sürüm 1.0</Link></p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Öğrenci Değerlendirici Genel İşler Kontrol Listesi <strong>Sürüm 1.0</strong> (<Link href="doc/d6_v1.pdf">PDF</Link> | <Link href="doc/d6_v1.docx">Word</Link>)</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Öğrenci Değerlendirici Yerinde Ziyaret Takvimi <strong>Sürüm 1.0</strong> (<Link href="doc/d7_v1.pdf">PDF</Link> | <Link href="doc/d7_v1.docx">Word</Link>)</td>
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
                  <td>HEPDAK Tutarlılık Süreci <Link href="doc/d5_v1.pdf">Sürüm 1.0</Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Hemşirelik Eğitimi Programları Akreditasyon Süreci Akış Şeması <Link href="doc/d1_v1.pdf">Sürüm 1.0</Link> | <strong>Sürüm 1.1</strong> (<Link href="doc/d1_v1_1.pdf">PDF</Link> | <Link href="doc/d1_v1_1.docx">Word</Link>) | <Link href="doc/d1_v1_2.pdf">Sürüm 1.2</Link> | <strong>Sürüm 1.3</strong> (<Link href="doc/d1_v1_3.pdf">PDF</Link> | <Link href="doc/d1_v1_3.docx">Word</Link>)</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Genel Değerlendirme - Ziyaret Öncesi Hazırlıklar - İş Akış Şeması <Link href="doc/d2_v1.pdf">Sürüm 1.0</Link> | <strong>Sürüm 2.0</strong> (<Link href="doc/d2_v2.pdf">PDF</Link> | <Link href="doc/d2_v2.docx">Word</Link>)</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Genel Değerlendirme - Ziyaret Sırasındaki Süreçler - İş Akışı Şeması <Link href="doc/d3_v1.pdf">Sürüm 1.0</Link> | <strong>Sürüm 2.0</strong> (<Link href="doc/d3_v2.pdf">PDF</Link> | <Link href="doc/d3_v2.docx">Word</Link>)</td>
                </tr>
                {/*
                <tr>
                  <th scope="row">5</th>
                  <td>Genel Değerlendirme için Kontrol Listesi <Link href="doc/d4_v1.pdf"><a>Sürüm 1.0</a></Link> | <strong>Sürüm 2.0</strong> (<Link href="doc/d4_v2.pdf"><a>PDF</a></Link> | <Link href="doc/d4_v2.docx"><a>Word</a></Link>)</td>
                </tr>
                */}
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Diğer Formlar / Belgeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td>HEPDAK Değerlendirici Başvuru Formu <Link href="doc/b17_v1.doc">Word</Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Öğrenci Değerlendirici Başvuru Formu <Link href="doc/b18_v1.docx">Word</Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>
                    HEPDAK Uzaktan Eğitim Standartları - <strong>Sürüm 1.1</strong> (<Link href="doc/b14_v1_1.pdf">PDF</Link> | <Link href="doc/b14_v1_1.doc">Word</Link>) - <a data-toggle="collapse" href="#e03" role="button" aria-expanded="false" aria-controls="e03">↓</a>
                    <div className="collapse" id="e03">
                      <p>- <strong>Sürüm 1.0</strong> (<Link href="doc/b14_v1.pdf">PDF</Link> | <Link href="doc/b14_v1.doc">Word</Link>)</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>HEPDAK Uzaktan Eğitim Program Değerlendirme Çizelgesi <strong>Sürüm 1.0</strong> (<Link href="doc/b15_v1.pdf">PDF</Link> | <Link href="doc/b15_v1.doc">Word</Link>)</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>HEPDAK Etik Kuralları <Link href="doc/c2_v1.pdf">Sürüm 1.0</Link></td>
                </tr>
              </tbody>
            </table>           
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Belgeler
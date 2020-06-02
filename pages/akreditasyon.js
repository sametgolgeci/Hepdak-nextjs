import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Akreditasyon = () => (
	<MasterPage>
		<Head>
			<title>HEPDAK | Akreditasyon</title>
		</Head>
		<div className="row">
        <nav className="col-md-3 d-none d-sm-none d-md-block" id="myScrollspy">
          <ul className="nav nav-pills flex-column akreditasyon-sidebar">
            <li className="nav-item">
              <a className="nav-link akreditasyon-button" href="#surec">Süreç</a>
            </li>
            <li className="nav-item">
              <a className="nav-link akreditasyon-button" href="#basvuru">Başvuru</a>
            </li>
            <li className="nav-item">
              <a className="nav-link akreditasyon-button" href="#belgeler">Belgeler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link akreditasyon-button" href="#ucretler">Ücretler</a>
            </li>
            <li className="nav-item">
              <a className="nav-link akreditasyon-button" href="#akredite">Akredite Edilen Kurumlar</a>
            </li>
            <li className="nav-item">
              <a className="nav-link akreditasyon-button" href="#kurulus">İlgili Kuruluşlar</a>
            </li>
          </ul>
        </nav>
        <div className="col-md-9 col-sm-12 akreditasyon-content">
          <div id="surec" className="akreditasyon-content-item">    
            <div className="akreditasyon-content-title">Süreç</div>
            <div>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01 Ocak-31 Ocak</th>
                    <td>Kurumların HEPDAK'a yazılı başvurusu</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Şubat-28 Şubat</th>
                    <td>Başvurunun değerlendirilmesi, kabul edilenlere maliyetin bildirilmesi</td>
                  </tr>
                  <tr>
                    <th scope="row">1 - 31 Mart</th>
                    <td>Kurumların, imzalı kabul mektubunu <strong>ozmendilek@yahoo.com</strong> mail adresi aracılığı ile HEPDAK'a yollaması</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Nisan – 10 Temmuz</th>
                    <td>Kurumların öz değerlendirme raporlarını (ÖDR) hazırlaması, basılı ve flash bellek ile HEPDAK’a yollaması</td>
                  </tr>
                  <tr>
                    <th scope="row">10 Temmuz – 31 Ağustos</th>
                    <td><p>HEPDAK'ın ÖDR ön incelemesini yapması;</p>
                    <p>Format ve içerik uygunsuzluğu varsa; yetersizlikler, kurum tarafından 15 gün içinde giderilir</p>
                    <p>Eksikliklerini bu sürede gidermeyen programların başvurusu geri çekilmiş sayılır</p>
                    <p>Standart yetersizlikleri olan kurumlar bir sonraki dönem başvurabilir</p></td>
                  </tr>
                  <tr>
                    <th scope="row">1 Eylül – 30 Eylül</th>
                    <td><p>HEAK'ın, akreditasyon başvurusu yapan programların değerlendirmeye alınıp alınmayacaklarına karar vermesi</p>
                    <p>HEAK'ın, değerlendirilebilir kararı alınan kurumlar için değerlendirme takımlarını oluşturması</p>
                    <p>Raporların flash bellek ile kurumlar tarafından değerlendiricilere ulaştırılması</p></td>
                  </tr>
                  <tr>
                    <th scope="row">1 Ekim – 15 Kasım</th>
                    <td>ÖDR’nun takımlar tarafından değerlendirilmesi</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Kasım – 20 Aralık</th>
                    <td>Kurum ziyareti</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Ocak – 15 Nisan</th>
                    <td>Değerlendirme raporunun HEAK'a teslimi, HEAK tarafından incelenmesi, kesin kararın alınması, kararın duyurulması</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div id="basvuru" className="akreditasyon-content-item"> 
            <div className="akreditasyon-content-title">Başvuru</div>
            <p>2020-2021 Dönemi Program Değerlendirme Başvuru Formu <button className="btn akreditasyon-indir-button"><Link href="doc/b1-basvuru-word_v5.doc"><a>İndir</a></Link></button></p>
          </div>        
          <div id="belgeler" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-title">Belgeler</div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Tüzük,Yönetmelik ve Yönergeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td>HEPDAK Tüzüğü <Link href="doc/a1_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a1_v3.pdf"><a>Sürüm 3.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Çalışma Yönetmeliği <Link href="doc/a2.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>HEPDAK Değerlendirme ve Akreditasyon Uygulama Esasları Yönergesi <Link href="doc/a3_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a3_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/a3_v3.pdf"><a>Sürüm 3.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Standartları Belirleme ve Geliştirme Komisyonu Çalışma Yönergesi <Link href="doc/a4.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Danışmanlık ve Eğitim Komisyonu Çalışma Yönergesi <Link href="doc/a5_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a5_v2.pdf"><a>Sürüm 2.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Program Değerlendirme ve İzleme Komisyonu Çalışma Yönergesi <Link href="doc/a6.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>HEPDAK Arşivleme Yönergesi <Link href="doc/a7_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/a7_v2.pdf"><a>Sürüm 2.0</a></Link></td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Kurumlar ve Değerlendiriciler için Belgeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td><p>HEPDAK 2018 Yılı Program Değerlendirme Başvuru Formu <Link href="doc/b1-basvuru-pdf_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b1-basvuru-word_v4.doc"><a>Word</a></Link></p>
                  <p>HEPDAK 2019 Yılı Program Değerlendirme Başvuru Formu <Link href="doc/b1-basvuru-2018_pdf_v1.pdf"><a>PDF</a></Link> | <Link href="doc/b1-basvuru-2018_doc_v1.doc"><a>Word</a></Link></p>
                  <p>HEPDAK 2020-2021 Dönemi Program Değerlendirme Başvuru Formu <Link href="doc/b1-basvuru-pdf_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b1-basvuru-word_v5.doc"><a>Word</a></Link></p></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Değerlendirme ve Akreditasyon Süreci Şeması <Link href="doc/b2-pdf.pdf"><a>PDF</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Hemşirelik Lisans Eğitim Programı Standartları <Link href="doc/b3_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b3_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b3_v3.pdf"><a>Sürüm 3.0</a></Link> | <Link href="doc/b3_v4.pdf"><a>Sürüm 4.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Hemşirelik Lisans Eğitim Programı Standartları <Link href="doc/b4_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b4_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b4_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b4_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 5.0</strong> (<Link href="doc/b4_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v5.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>HEPDAK Değerlendirme Kılavuzu <Link href="doc/b5_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b5_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b5_v3.pdf"><a>Sürüm 3.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Program Değerlendiricisi Raporu <Link href="doc/b6_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b6_v2.pdf"><a>Sürüm 2.0</a></Link> | <strong>Sürüm 3.0</strong> (<Link href="doc/b6_v3.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v3.doc"><a>Word</a></Link>) | <strong>Sürüm 4.0</strong> (<Link href="doc/b6_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v3.doc"><a>Word</a></Link>)</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Program Değerlendirme Çizelgesi <Link href="doc/b7_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b7_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b7_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b7_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 5.0</strong> (<Link href="doc/b7_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v5.doc"><a>Word</a></Link>)</td>
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
                  <td>HEPDAK Akredite Eğitim Programları İçin Gelişim Raporu Hazırlama Rehberi Sürüm <strong>Sürüm 1.0</strong> (<Link href="doc/b13_v1.pdf"><a>PDF</a></Link> | <Link href="doc/b13_v1.doc"><a>Word</a></Link>)</td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Diğer Belgeler</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td> HEPDAK Raporları Yazım Kuralları <Link href="doc/c1_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>HEPDAK Etik Kuralları <Link href="doc/c2_v1.pdf"><a>Sürüm 1.0</a></Link></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="ucretler" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-title">Ücretler</div>
            <div className="akreditasyon-content-subtitle">2020-2021 Değerlendirme Dönemi Akreditasyon Bedelleri</div>
            <p>2020-2021 döneminde değerlendirilecek programlar için akreditasyon değerlendirme bedelleri aşağıdaki tabloda yer almaktadır.</p>
            <table className="table table-striped">
              <thead className="thead-light">
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
            <div className="akreditasyon-content-subtitle">2020-2021 Değerlendirme Dönemi Akreditasyon Bedelleri Ödeme Planı</div>
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col" colSpan="2">Genel Değerlendirme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2020 Taksiti</th>
                  <td>2.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Eylül 2020 Taksiti</th>
                  <td>7.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2020 Taksiti</th>
                  <td>7.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2020 Taksiti</th>
                  <td>17.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>25.000 TL.+ KDV</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col" colSpan="2">Ziyaretle Ara Değerlendirme/Ziyaretle Kanıt Göster*</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2020 Taksiti</th>
                  <td>3.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2020 Taksiti</th>
                  <td>3.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2020 Taksiti</th>
                  <td>4.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>10.000 TL.+ KDV**</td>
                </tr>
              </tbody>
            </table>
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col" colSpan="2">Raporla Ara Değerlendirme/Raporla Kanıt Göster* </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2020 Taksiti</th>
                  <td>2.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2020 Taksiti</th>
                  <td>2.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2020 Taksiti</th>
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
              <thead className="thead-light">
                <tr>
                  <th scope="col" colSpan="2">Genel Değerlendirme</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Mart 2020 Taksiti</th>
                  <td>2.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Eylül 2020 Taksiti</th>
                  <td>5.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Ekim 2020 Taksiti</th>
                  <td>5.000 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">Kasım 2020 Taksiti</th>
                  <td>2.500 TL.+ KDV</td>
                </tr>
                <tr>
                  <th scope="row">TOPLAM</th>
                  <td>15.000 TL.+ KDV</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="akredite" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-title">Akredite Edilen Kurumlar</div>
            <div className="akreditasyon-content-subtitle">HEPDAK Tarafından Akredite Edilen Hemşirelik Lisans Programları (04.04. 2020 itibariyle)</div>
            <table className="table table-striped">
              <thead className="thead-light">
                <tr>
                  <th scope="col">Fakülte/Yüksekokul</th>
                  <th scope="col">Akreditasyon Tarihi</th>
                  <th scope="col">Akreditasyon Bitiş Tarihi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Atatürk Üniversitesi Hemşirelik Fakültesi</th>
                  <td>01.05.2016</td>
                  <td>01.05.2016</td>
                </tr>
                <tr>
                  <th scope="row">Ege Üniversitesi Hemşirelik Fakültesi</th>
                  <td><p>01.05.2016</p>
                  <p>30.09.2018</p></td>
                  <td><p>30.09.2018</p>
                  <p>30.09.2021</p></td>
                </tr>
                <tr>
                  <th scope="row">Erciyes Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td><p>01.05.2016</p>
                  <p>30.09.2018</p></td>
                  <td><p>01.05.2016</p>
                  <p>30.09.2018</p></td>
                </tr>
                <tr>
                  <th scope="row">Sakarya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link  href="doc/rapor-sakarya.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>06.04.2017</p>
                  <p>04.04.2019</p></td>
                  <td><p>01.04.2019</p>
                  <p>30.09.2022</p></td>
                </tr>
                <tr>
                  <th scope="row">Hacettepe Üniversitesi Hemşirelik Fakültesi</th>
                  <td><p>01.04.2018</p>
                  <p>04.04.2020</p></td>
                  <td><p>30.09.2020</p>
                  <p>30.09.2023</p></td>
                </tr>
                <tr>
                  <th scope="row">İstanbul Medipol Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td><p>01.04.2018</p>
                  <p>04.04.2020</p></td>
                  <td><p>30.09.2020</p>
                  <p>30.09.2023</p></td>
                </tr>
                <tr>
                  <th scope="row">Dokuz Eylül Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor-dokuz-eylul.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td>04.04.2019</td>
                  <td>30.09.2021</td>
                </tr>
                <tr>
                  <th scope="row">Acıbadem Mehmet Ali Aydınlar Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor-acibadem.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td>04.04.2019</td>
                  <td>30.09.2021</td>
                </tr>
                <tr>
                  <th scope="row">Trakya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor-trakya.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td>04.04.2019</td>
                  <td>30.09.2021</td>
                </tr>
                <tr>
                  <th scope="row">Marmara Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td>04.04.2010</td>
                  <td>30.09.2022</td>
                </tr>
                <tr>
                  <th scope="row">Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td>04.04.2010</td>
                  <td>30.09.2022</td>
                </tr>
                <tr>
                  <th scope="row">Akdeniz Üniversitesi Hemşirelik Fakültesi</th>
                  <td>04.04.2010</td>
                  <td>30.09.2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div id="kurulus" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-title">İlgili Kuruluşlar</div>
            <div className="akreditasyon-bottom-img">
              <div className="bottom-img">
                <a href="https://www.yok.gov.tr" target="_blank"><img className="link-img" src="img/link/yok.png" title="Yükseköğretim Kurulu"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.yodek.org.tr" target="_blank"><img className="link-img" src="img/link/yodek.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.kalder.org" target="_blank"><img className="link-img" src="img/link/kalder.png" title="Türkiye Kalite Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.mudek.org.tr" target="_blank"><img className="link-img" src="img/link/mudek.png" title="Mühendislik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://tepdad.org.tr" target="_blank"><img className="link-img" src="img/link/tepdad.png" title="Tıp Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://epdad.org.tr" target="_blank"><img className="link-img" src="img/link/epdad.png" title="Öğretmenlik Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://iledak.ilad.org.tr" target="_blank"><img className="link-img" src="img/link/iledak.png" title="İletişim Eğitimi Değerlendirme Akreditasyon Kurulu"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://www.sabak.org.tr" target="_blank"><img className="link-img" src="img/link/sabak.png" title="Sağlık Bilimleri Eğitim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://www.turak.org" target="_blank"><img className="link-img" src="img/link/turak.png" title="Turizm Eğitimi Değerlendirme ve Akreditasyon Kurulu"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://www.iaa.org.tr" target="_blank"><img className="link-img" src="img/link/iaa.png" title="İlahiyat Akreditasyon Ajansı"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://pemder.org.tr" target="_blank"><img className="link-img" src="img/link/pemder.png" title="Peyzaj Mimarlığı Eğitim ve Bilim Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://audak.org" target="_blank"><img className="link-img" src="img/link/audak.png" title="Açık ve Uzaktan Öğretim Programları Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="http://www.depad.org" target="_blank"><img className="link-img" src="img/link/depad.png" title="Diş Hekimliği Eğitimi Programları Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.sporbilimleri.org.tr" target="_blank"><img className="link-img" src="img/link/sbd.png" title="Spor Bilimleri Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.eczakder.org.tr" target="_blank"><img className="link-img" src="img/link/eczakder.png" title="Eczacılık Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.fedek.org.tr" target="_blank"><img className="link-img" src="img/link/fedek.png" title="Fen, Edebiyat, Fen-Edebiyat, Dil ve Tarih - Coğrafya Fakülteleri Öğretim Programları Değerlendirme ve Akreditasyon Derneği "/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.hemed.org.tr" target="_blank"><img className="link-img" src="img/link/hemed.png" title="Hemşirelik Eğitimi Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.psikolog.org.tr" target="_blank"><img className="link-img" src="img/link/turk-psikolog.png" title="Türk Psikologlar Derneği"/></a>
              </div>    
              <div className="bottom-img">
                <a href="https://www.vedek.org.tr" target="_blank"><img className="link-img" src="img/link/vedek.png" title="Veteriner Hekimliği Eğitim Kurumları ve Programları Değerlendirme ve Akreditasyon Derneği"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.nln.org" target="_blank"><img className="link-img" src="img/link/nln-org.png" title="National League for Nursing"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.aacnnursing.org" target="_blank"><img className="link-img" src="img/link/aacn.png" title="American Association of Colloges of Nursing"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.aacnnursing.org/CCNE" target="_blank"><img className="link-img" src="img/link/ccne.png" title="Commision on Collegiate Nursing Education"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.casn.ca" target="_blank"><img className="link-img" src="img/link/casn-ca-new.png" title="Canadian Association of Schools of Nursing"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.chea.org" target="_blank"><img className="link-img" src="img/link/chea-org.png" title="Council for Higher Education Accreditation"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.enqa.eu" target="_blank"><img className="link-img" src="img/link/enqa-eu.png" title="European Association for Quality Assurance for Higher Education"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.qaa.ac.uk" target="_blank"><img className="link-img" src="img/link/qaa-ac-uk.png" title="Quality Assurance Agency for Higher Education"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.eqar.eu" target="_blank"><img className="link-img" src="img/link/eqar-eu.png" title="European Quality Assurance Register for Higher Education"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.inqaahe.org" target="_blank"><img className="link-img" src="img/link/inqaahe-org.png" title="International Network for Quality Assurance Agencies in Higher Education"/></a>
              </div>
              <div className="bottom-img">
                <a href="https://www.eurashe.eu" target="_blank"><img className="link-img" src="img/link/eurashe-eu-black.png" title="European Association of Institutions in Higher Education"/></a>
              </div>
            </div>
          </div>
        </div>
      </div>
	</MasterPage>
)
export default Akreditasyon
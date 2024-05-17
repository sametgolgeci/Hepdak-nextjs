import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Akredite = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Akredite Edilen Kurumlar</title>
	    </Head>
      <div className="genel"><h1>Akredite Edilen Kurumlar</h1></div>
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
          <div id="akredite" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-subtitle">HEPDAK Tarafından Akredite Edilen Hemşirelik Lisans Programları (27.03.2024 itibariyle)</div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Fakülte/Yüksekokul</th>
                  <th scope="col">Akreditasyon Tarihi</th>
                  <th scope="col">Akreditasyon Bitiş Tarihi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Atatürk Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-ataturk-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>01.05.2016</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2018</p>
                  <p>27.03.2024</p></td>
                </tr>
                <tr>
                  <th scope="row">Ege Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-ege-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>01.05.2016</p>
                  <p>01.05.2018</p>
                  <p>02.04.2021</p></td>
                  <td><p>30.09.2018</p>
                  <p>30.09.2021</p>
                  <p>30.09.2026</p></td>
                </tr>
                <tr>
                  <th scope="row">Erciyes Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-erciyes-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-erciyes-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>01.05.2016</p>
                  <p>01.05.2018</p>
                  <p>02.04.2021</p>
                  <p>07.04.2023</p></td>
                  <td><p>30.09.2018</p>
                  <p>30.09.2021</p>
                  <p>30.09.2023</p>
                  <p>30.09.2026</p></td>
                </tr>
                <tr>
                  <th scope="row">Sakarya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-sakarya-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-sakarya-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>
                    <p>06.04.2017</p>
                    <p>04.04.2019</p>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>01.04.2019</p>
                    <p>30.09.2022</p>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hacettepe Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-hacettepe-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>01.04.2018</p>
                  <p>04.04.2020</p>
                  <p>07.04.2023</p></td>
                  <td><p>30.09.2020</p>
                  <p>30.09.2023</p>
                  <p>30.09.2028</p></td>
                </tr>
                <tr>
                  <th scope="row">İstanbul Medipol Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-medipol-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>01.04.2018</p>
                  <p>04.04.2020</p>
                  <p>07.04.2023</p></td>
                  <td><p>30.09.2020</p>
                  <p>30.09.2023</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Dokuz Eylül Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-dokuz-eylul-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-dokuz-eylul.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>04.04.2019</p>
                  <p>01.04.2021</p>
                  <p>30.09.2024</p></td>
                  <td><p>30.09.2021</p>
                  <p>30.09.2024</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Acıbadem Mehmet Ali Aydınlar Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-acibadem-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-acibadem.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>04.04.2019</p>
                  <p>01.04.2021</p>
                  <p>30.09.2024</p></td>
                  <td><p>30.09.2021</p>
                  <p>30.09.2024</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Trakya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-trakya-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-trakya.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>04.04.2019</p>
                  <p>01.04.2021</p>
                  <p>30.09.2024</p></td>
                  <td><p>30.09.2021</p>
                  <p>30.09.2024</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Marmara Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-marmara-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-marmara.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>04.04.2020</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2022</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-ondokuz-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-omu.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>04.04.2020</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2022</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Akdeniz Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-akdeniz-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-akdeniz.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td><p>04.04.2020</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2022</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Başkent Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-baskent-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>04.04.2022</td>
                  <td>30.09.2027</td>
                </tr>
                <tr>
                  <th scope="row">İstanbul Üniversitesi Cerrahpaşa Florence Nightingale Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-cerrahpasa-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-cerrahpasa-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Gazi Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-gazi-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-gazi-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Maltepe Üniversitesi Hemşirelik Yüksekokulu | <Link href="doc/rapor/rapor-maltepe-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
                <tr>
                  <th scope="row">Tekirdağ Namık Kemal Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-tekirdag-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-tekirdag-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Bezmialem Vakıf Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-bezmialem-ara.pdf"><a className="akreditasyon-rapor">Ara Rapor</a></Link> | <Link href="doc/rapor/rapor-bezmialem-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Erzincan Binali Yıldırım Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-erzincan-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Sağlık Bilimleri Üniversitesi Gülhane Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-gata-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">İzmir Katip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-izmir-katip-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">İnönü Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-inonu-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Karadeniz Teknik Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-karadeniz-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Manisa Celal Bayar Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-manisa-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Necmettin Erbakan Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-erbakan-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">SANKO Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-sanko-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Sivas Cumhuriyet Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor/rapor-sivas-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Yeditepe Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü (İngilizce) | <Link href="doc/rapor/rapor-yeditepe-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Sağlık Bilimleri Üniversitesi Hamidiye Hemşirelik Fakültesi | <Link href="doc/rapor/rapor-hamidiye-genel.pdf"><a className="akreditasyon-rapor">Genel Rapor</a></Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2028</td>
                </tr>
              </tbody>
            </table>
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Akredite

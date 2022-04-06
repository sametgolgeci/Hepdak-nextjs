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
            <div className="akreditasyon-content-subtitle">HEPDAK Tarafından Akredite Edilen Hemşirelik Lisans Programları (04.04.2022 itibariyle)</div>
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
                  <th scope="row">Atatürk Üniversitesi Hemşirelik Fakültesi</th>
                  <td><p>01.05.2016</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2018</p>
                  <p>30.09.2024</p></td>
                </tr>
                <tr>
                  <th scope="row">Ege Üniversitesi Hemşirelik Fakültesi</th>
                  <td><p>01.05.2016</p>
                  <p>01.05.2018</p>
                  <p>02.04.2021</p></td>
                  <td><p>30.09.2018</p>
                  <p>30.09.2021</p>
                  <p>30.09.2026</p></td>
                </tr>
                <tr>
                  <th scope="row">Erciyes Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td><p>01.05.2016</p>
                  <p>01.05.2018</p>
                  <p>02.04.2021</p></td>
                  <td><p>30.09.2018</p>
                  <p>30.09.2021</p>
                  <p>30.09.2023</p></td>
                </tr>
                <tr>
                  <th scope="row">Sakarya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link  href="doc/rapor-sakarya.pdf"><a className="akreditasyon-rapor">Ara Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>06.04.2017</p>
                  <p>04.04.2019</p>
                  <p>04.04.2022</p></td>
                  <td><p>01.04.2019</p>
                  <p>30.09.2022</p>
                  <p>30.09.2024</p></td>
                </tr>
                <tr>
                  <th scope="row">Hacettepe Üniversitesi Hemşirelik Fakültesi | <Link  href="doc/rapor-hacettepe.pdf"><a className="akreditasyon-rapor">Ara Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>01.04.2018</p>
                  <p>04.04.2020</p></td>
                  <td><p>30.09.2020</p>
                  <p>30.09.2023</p></td>
                </tr>
                <tr>
                  <th scope="row">İstanbul Medipol Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link  href="doc/rapor-medipol.pdf"><a className="akreditasyon-rapor">Ara Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>01.04.2018</p>
                  <p>04.04.2020</p></td>
                  <td><p>30.09.2020</p>
                  <p>30.09.2023</p></td>
                </tr>
                <tr>
                  <th scope="row">Dokuz Eylül Üniversitesi Hemşirelik Fakültesi | <Link href="doc/rapor-dokuz-eylul.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>04.04.2019</p>
                  <p>01.04.2021</p></td>
                  <td><p>30.09.2021</p>
                  <p>30.09.2024</p></td>
                </tr>
                <tr>
                  <th scope="row">Acıbadem Mehmet Ali Aydınlar Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor-acibadem.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>04.04.2019</p>
                  <p>01.04.2021</p></td>
                  <td><p>30.09.2021</p>
                  <p>30.09.2024</p></td>
                </tr>
                <tr>
                  <th scope="row">Trakya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link href="doc/rapor-trakya.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>04.04.2019</p>
                  <p>01.04.2021</p></td>
                  <td><p>30.09.2021</p>
                  <p>30.09.2024</p></td>
                </tr>
                <tr>
                  <th scope="row">Marmara Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link  href="doc/rapor-marmara.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>04.04.2020</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2022</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü | <Link  href="doc/rapor-omu.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>04.04.2020</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2022</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Akdeniz Üniversitesi Hemşirelik Fakültesi | <Link  href="doc/rapor-akdeniz.pdf"><a className="akreditasyon-rapor">Genel Değerlendirme Kesin Raporu İçin</a></Link></th>
                  <td><p>04.04.2020</p>
                  <p>04.04.2022</p></td>
                  <td><p>30.09.2022</p>
                  <p>30.09.2025</p></td>
                </tr>
                <tr>
                  <th scope="row">Başkent Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td>04.04.2022</td>
                  <td>30.09.2027</td>
                </tr>
                <tr>
                  <th scope="row">İstanbul Üniversitesi Cerrahpaşa Florance Nightingale Hemşirelik Fakültesi</th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
                <tr>
                  <th scope="row">Gazi Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
                <tr>
                  <th scope="row">Maltepe Üniversitesi Hemşirelik Yüksekokulu</th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
                <tr>
                  <th scope="row">Tekirdağ Namık Kemal Üniversitesi Sağlık Yüksekokulu Hemşirelik Bölümü</th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
                <tr>
                  <th scope="row">Bezmialem Vakıf Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü</th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
              </tbody>
            </table>
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Akredite

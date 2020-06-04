import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Akredite = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Akredite Edilen Kurumlar</title>
	    </Head>
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
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
	    	</div>
	    </div>
    </MasterPage>
)
export default Akredite

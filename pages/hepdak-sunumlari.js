import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Hepdak Sunumları</title>
	    </Head>
	       <div className="genel">
            <h1>HEPDAK Sunumları</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">1</th>
                    <td><Link href="doc/hepdak_sunumlari/belge_1.pdf"><a target="_blank">Prof. Dr. Ayla Bayık - CEENQA Aralık 2020 Bülten Yazısı</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><Link href="doc/hepdak_sunumlari/belge_2.pdf"><a target="_blank">Prof. Dr. Gülseren Kocaman - EPDAD IV Uluslararası Öğretmen Eğitimi ve Akreditasyon Kongresi Sunumu (19.12.2020)</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><Link href="doc/hepdak_sunumlari/belge_3.pdf"><a target="_blank">Prof. Dr. Ayla Bayık - HEPDAK Short Presentation - General Assambly</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><Link href="doc/hepdak_sunumlari/belge_4.pdf"><a target="_blank">Prof. Dr. Gülseren Kocaman - Pandemide Hemşirelik Eğitim Programlarının Akreditasyonu</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><Link href="doc/hepdak_sunumlari/belge_5.pdf"><a target="_blank">Doç. Dr. Şenay Ünsal Atan - Hemşirelik Haftası Etkinliği (12.05.2021)</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><Link href="doc/hepdak_sunumlari/belge_6.pdf"><a target="_blank">Doç. Dr. Dilek Özmen - EPDAD Kongre Sunumu (05.06.2021)</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
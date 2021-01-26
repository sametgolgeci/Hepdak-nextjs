import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Akreditasyon Kaynakları</title>
	    </Head>
	       <div className="genel">
            <h1>Akreditasyon Kaynakları</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">1</th>
                    <td><Link href="doc/hemsirelikte_akreditasyon_kaynaklari/belge_1.pdf"><a>Hemşirelikte Akreditasyon Sürecini Geliştirme</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td><Link href="doc/hemsirelikte_akreditasyon_kaynaklari/belge_2.pdf"><a>Hemşirelik, Ebelik Eğitiminde Kalite Güvencesi - İngiltere Örneği</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td><Link href="doc/hemsirelikte_akreditasyon_kaynaklari/belge_3.pdf"><a>Hemşirelik Eğitim Programını Değerlendirme Stratejileri</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td><Link href="doc/hemsirelikte_akreditasyon_kaynaklari/belge_4.pdf"><a>CCNE Akreditasyon Sürecini Geliştirme</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td><Link href="doc/hemsirelikte_akreditasyon_kaynaklari/belge_5.pdf"><a>Akreditasyon ve Öğrenci Sonuçları</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td><Link href="doc/hemsirelikte_akreditasyon_kaynaklari/belge_6.pdf"><a>Acreditation for Nursing Education</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
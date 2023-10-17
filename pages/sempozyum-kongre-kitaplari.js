import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Sempozyum / Kongre Kitapları</title>
	    </Head>
	       <div className="genel">
            <h1>Sempozyum / Kongre Kitapları</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="doc/sempozyum_kongre_kitaplari/HEGK2023.pdf"><a target="_blank">1.Uluslararası Hemşirelik Eğitiminin Geleceği Kongresi Kitabı</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="doc/sempozyum_kongre_kitaplari/HEGS2019.pdf"><a target="_blank">Hemşirelik Eğitiminin Geleceği Sempozyumu 2</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
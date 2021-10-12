import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Sempozyum Kitapları</title>
	    </Head>
	       <div className="genel">
            <h1>Sempozyum Kitapları</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">1</th>
                    <td><Link href="doc/HEGS_2.pdf"><a target="_blank">Hemşirelik Eğitiminin Geleceği Sempozyumu 2</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
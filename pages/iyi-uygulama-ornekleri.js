import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | İyi Uygulama Örnekleri</title>
	    </Head>
	       <div className="genel">
            <h1>İyi Uygulama Örnekleri</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="https://www.youtube.com/watch?v=qge5DtnNH0A"><a target="_blank">Hemşirelik Eğitiminin Geleceği 3</a></Link></td>
                  </tr>
                  {/*
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="https://www.youtube.com/watch?v=qge5DtnNH0A"><a target="_blank">HEGK 2023</a></Link></td>
                  </tr>
                  */}
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
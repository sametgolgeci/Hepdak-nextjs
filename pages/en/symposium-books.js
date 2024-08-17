import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Symposium = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Symposium Books</title>
	    </Head>
	       <div className="genel">
            <h1>Symposium Books</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="../doc/sempozyum_kongre_kitaplari/HEGK2023.pdf"><a target="_blank">1st International Congress on the Future of Nursing Education, Congress Book(in Turkish)</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="../doc/sempozyum_kongre_kitaplari/HEGS2019.pdf"><a target="_blank">Symposium on the Future of Nursing Education 2, Symposium Book(in Turkish)</a></Link></td>
                  </tr>
                  <tr>
                    <th scope="row" width="10px">-</th>
                    <td><Link href="../doc/sempozyum_kongre_kitaplari/HEGS2018.xlsx"><a target="_blank">Symposium on the Future of Nursing Education: Accreditation, Standards, Good Practice Examples, Symposium Program(in Turkish)</a></Link></td>
                  </tr>
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Symposium

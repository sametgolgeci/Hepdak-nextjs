import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Symposium = () => (
<MasterPage>
	  <Head>
    <title>HEPDAK | Advisory Board Meetings</title>
  </Head>
  <div className="row">
    <div className="genel col-md-12 col-sm-12">
      <h1 id="heak">Advisory Board Meetings</h1>
      <table className="table table-striped">
        <tbody>
          <tr>
            <th scope="row" width="10px"></th>
            <td><Link href="../doc/danisma_kurulu_toplantilari/04.pdf"><a target="_blank">HEPDAK Advisory Board Meeting - 4 (October 08, 2024)(in Turkish)</a></Link></td>
          </tr>
          <tr>
            <th scope="row" width="10px"></th>
            <td><Link href="../doc/danisma_kurulu_toplantilari/03.pdf"><a target="_blank">HEPDAK Advisory Board Meeting - 3 (June 27, 2024)(in Turkish)</a></Link></td>
          </tr>
          <tr>
            <th scope="row" width="10px"></th>
            <td><Link href="../doc/danisma_kurulu_toplantilari/02.pdf"><a target="_blank">HEPDAK Advisory Board Meeting - 2 (March 16, 2023)(in Turkish)</a></Link></td>
          </tr>
          <tr>
            <th scope="row" width="10px"></th>
            <td><Link href="../doc/danisma_kurulu_toplantilari/01.pdf"><a target="_blank">HEPDAK Advisory Board Meeting - 1 (January 26, 2023)(in Turkish)</a></Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <div className="safe"></div>
</MasterPage>
)
export default Symposium

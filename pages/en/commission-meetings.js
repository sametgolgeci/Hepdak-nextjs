import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Commission Meetings</title>
      </Head>
      <div className="genel komisyon-paydas">
        <h1>Commission Meetings</h1>
        <h5><a data-toggle="collapse" href="#SSDC" role="button" aria-expanded="false" aria-controls="SSDC">Standards Setting and Development Commission (SSDC)</a></h5>
        <div className="collapse" id="SSDC">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td><Link href="doc/en/commission_meetings/SSDC/2024.pdf">2024 Annual Report</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5><a data-toggle="collapse" href="#CIC" role="button" aria-expanded="false" aria-controls="CIC">Continuous Improvement Commission (CIC)</a></h5>
        <div className="collapse" id="CIC">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td><Link href="doc/en/commission_meetings/CIC/2024.pdf">2024 Annual Report</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5><a data-toggle="collapse" href="#WDC" role="button" aria-expanded="false" aria-controls="WDC">Web Design Commission (WDC)</a></h5>
        <div className="collapse" id="WDC">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td><Link href="doc/en/commission_meetings/WDC/2024-02.pdf">2024 Annual Report for the Period July-December</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <h5><a data-toggle="collapse" href="#EC" role="button" aria-expanded="false" aria-controls="EC">Education Commission (EC)</a></h5>
        <div className="collapse" id="EC">
          <table className="table table-striped">
            <tbody>
              <tr>
                <td><Link href="doc/en/commission_meetings/EC/2024.pdf">2024 Annual Report for the Period July-December</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belgeler
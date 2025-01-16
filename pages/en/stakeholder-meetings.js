import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
<MasterPage>
  <Head>
    <title>HEPDAK | Stakeholder Meetings</title>
  </Head>
  <div className="row">
    <div className="genel col-md-12 col-sm-12 komisyon-paydas">
      <h1>Stakeholder Meetings</h1>
      <h5><a data-toggle="collapse" href="#UNPTE" role="button" aria-expanded="false" aria-controls="UNPTE">Meetings with Undergraduate Nursing Programs Top Executives</a></h5>
      <div className="collapse" id="UNPTE">
        <table className="table table-striped">
          <tbody>

          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#AID" role="button" aria-expanded="false" aria-controls="AID">Meetings with Applicant Institution Directors</a></h5>
      <div className="collapse" id="AID">
        <table className="table table-striped">
          <tbody>
    
          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#ITEVA" role="button" aria-expanded="false" aria-controls="ITEVA">Meetings with Institutions Top Executives Visited for Accreditation</a></h5>
      <div className="collapse" id="ITEVA">
        <table className="table table-striped">
          <tbody>

          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#TL" role="button" aria-expanded="false" aria-controls="TL">Meetings with Team Leaders</a></h5>
      <div className="collapse" id="TL">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td scope="row" width="10px">-</td>
              <td><Link href="doc/en/stakeholder-meetings/TL/01.pdf"><a target="_blank">January 7, 2025</a></Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#ET" role="button" aria-expanded="false" aria-controls="ET">Meetings with Evaluation Teams</a></h5>
      <div className="collapse" id="ET">
        <table className="table table-striped">
          <tbody>

          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#SE" role="button" aria-expanded="false" aria-controls="SE">Meetings with Student Evaluators</a></h5>
      <div className="collapse" id="SE">
        <table className="table table-striped">
          <tbody>

          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="safe"></div>
</MasterPage>
)
export default Belgeler
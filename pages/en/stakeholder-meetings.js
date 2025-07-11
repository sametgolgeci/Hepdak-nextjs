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
            <tr>
              <td scope="row" width="110px">February 26, 2025</td>
              <td>
                <Link href="../doc/paydas_toplantilari/basvuran_kurum_yoneticileri_toplanti/06_1.pdf" target="_blank">HEPDAK 2025-2026 Meeting Announcement with Applicant Institution Directors (in Turkish)</Link><br/>
                <Link href="../doc/paydas_toplantilari/basvuran_kurum_yoneticileri_toplanti/06_2.pdf" target="_blank">HEPDAK 2025-2026 Meeting with Applicant Institution Directors (in Turkish)</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#ITEVA" role="button" aria-expanded="false" aria-controls="ITEVA">Meetings with Institutions Top Executives Visited for Accreditation</a></h5>
      <div className="collapse" id="ITEVA">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td scope="row" width="120px">February 19, 2025</td>
              <td><Link href="../doc/paydas_toplantilari/akreditasyon_ziyaret_edilen_kurum_yonetici_toplanti/05.pdf" target="_blank">HEPDAK 2024-2025 Period Institutions Visited for Accreditation Meeting Announcement (in Turkish)</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#TL" role="button" aria-expanded="false" aria-controls="TL">Meetings with Team Leaders</a></h5>
      <div className="collapse" id="TL">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td scope="row" width="10px">-</td>
              <td><Link href="../doc/en/stakeholder-meetings/TL/01.pdf" target="_blank">January 7, 2025</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
      <h5><a data-toggle="collapse" href="#ET" role="button" aria-expanded="false" aria-controls="ET">Meetings with Evaluation Teams</a></h5>
      <div className="collapse" id="ET">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td scope="row" width="110px">June 19, 2025</td>
              <td><Link href="../doc/paydas_toplantilari/degerlendirme_takimlari_toplanti/06.pdf" target="_blank">HEPDAK Evaluation Team Members Preliminary Review Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">June 14, 2024</td>
              <td><Link href="../doc/paydas_toplantilari/degerlendirme_takimlari_toplanti/05.pdf" target="_blank">HEPDAK Evaluation Team Members Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">January 24, 2024</td>
              <td><Link href="../doc/paydas_toplantilari/degerlendirme_takimlari_toplanti/04.pdf" target="_blank">HEPDAK Evaluation Team Members Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">January 11, 2023</td>
              <td><Link href="../doc/paydas_toplantilari/degerlendirme_takimlari_toplanti/03.pdf" target="_blank">HEPDAK Evaluation Team Members Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">January 06, 2022</td>
              <td><Link href="../doc/paydas_toplantilari/degerlendirme_takimlari_toplanti/02.pdf" target="_blank">HEPDAK Evaluation Team Members Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">March 10, 2021</td>
              <td><Link href="../doc/paydas_toplantilari/degerlendirme_takimlari_toplanti/01.pdf" target="_blank">HEPDAK Evaluation Team Members Meeting (in Turkish)</Link></td>
            </tr>
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
      <h5><a data-toggle="collapse" href="#CM" role="button" aria-expanded="false" aria-controls="CM">Consulting Meetings</a></h5>
      <div className="collapse" id="CM">
        <table className="table table-striped">
          <tbody>
            <tr>
              <td scope="row" width="110px">March 25, 2025</td>
              <td><Link href="../doc/paydas_toplantilari/danisman_toplantilari/03.pdf" target="_blank">Consulting Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">March 04, 2024</td>
              <td><Link href="../doc/paydas_toplantilari/danisman_toplantilari/02.pdf" target="_blank">Consulting Meeting (in Turkish)</Link></td>
            </tr>
            <tr>
              <td scope="row" width="110px">March 22, 2023</td>
              <td><Link href="../doc/paydas_toplantilari/danisman_toplantilari/01.pdf" target="_blank">Consulting Meeting (in Turkish)</Link></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  <div className="safe"></div>
</MasterPage>
)
export default Belgeler
import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Documents</title>
	    </Head>
      <div className="genel"><h1>Documents</h1></div>

      <div className="row akreditasyon">
        <div className="col-md-12 akreditasyon-content">
          <div id="belgeler" className="akreditasyon-content-item">         
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Statutes, Regulations and Guidelines</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link href="../doc/en/doc-hepdak-operational-regulations.pdf" target="_blank">HEPDAK Operational Regulations</Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><Link
                    href="../doc/en/doc-international-relations-committee.pdf"
                    target="_blank">HEPDAK International Relations Committee Working Directive</Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td><Link href="../doc/en/doc-archiving-directive.pdf" target="_blank">HEPDAK Archiving Directive</Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td><Link href="../doc/en/doc-sbgk.pdf" target="_blank">HEPDAK Standards Setting and Development Committee (SBGK) Working Directive</Link></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td><Link href="../doc/en/doc-cicwp.pdf" target="_blank">HEPDAK Continuous Improvement Commission Working Procedures And Principles</Link></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td><Link href="../doc/en/doc-tcwd.pdf" target="_blank">HEPDAK Training Commission Working Directive</Link></td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td><Link href="../doc/en/doc-hepdak-bylaw.docx" target="_blank">Bylaw of the HEPDAK</Link></td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td><Link href="../doc/en/doc-hepdak-principles.docx" target="_blank">HEPDAK Directive of Evaluation and Accreditation Implementation Principles</Link></td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td><Link href="../doc/en/doc-wdcwpp.pdf" target="_blank">HEPDAK Web Design Commission Working Procedures and Principles</Link></td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Documents for Institutions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link href="../doc/en/doc-hepdak-standards.docx" target="_blank">HEPDAK Nursing Undergraduate Education Program Standards</Link></td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Documents for Evaluation Teams</th>
                </tr>
                <tr>
                  <th scope="col" colSpan="2" className="table-alt-baslik">-> Faculties</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link href="../doc/en/doc-hepdak-program-evaluator-report.pdf" target="_blank">HEPDAK Program Evaluator Report (Version 6.0)</Link></td>
                </tr>
                <tr>
                  <th scope="row" width="10px">2</th>
                  <td><Link href="../doc/en/documents/hepdak-evaluation-guide.pdf" target="_blank">HEPDAK Evaluation Guide</Link></td>
                </tr>
              </tbody>
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2" className="table-alt-baslik">-> Students</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link
                    href="../doc/en/doc-student-interim-evaluation-process.pdf"
                    target="_blank">Student Evaluator in the General Interim Evaluation Process (Version 1.0)</Link></td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Flowcharts Related to Evaluation Processes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link href="../doc/en/doc-flow-chart.pdf" target="_blank">Nursing Education Programs Accreditation Process Flow Chart (Version 1.3)</Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><Link href="../doc/en/doc-general-evaluation.pdf" target="_blank">General Evaluation - On-site Visit Process Workflow Chart</Link></td>
                </tr>
              </tbody>
            </table>

            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col" colSpan="2">Other Forms / Documents</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link href="../doc/en/doc-hepdak-pes.docx" target="_blank">HEPDAK Program Evaluation Schedule</Link></td>
                </tr>
                <tr>
                  <th scope="row" width="10px">2</th>
                  <td><Link
                    href="../doc/en/documents/hepdak-academic-evaluator-application-form.pdf"
                    target="_blank">HEPDAK Acedemic Evaluator Candidate Application Form</Link></td>
                </tr>
              </tbody>
            </table>           
          </div>
        </div>
      </div>
    </MasterPage>
)
export default Belgeler
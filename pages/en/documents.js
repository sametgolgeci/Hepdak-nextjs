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
              <tbody>
                <tr>
                  <th scope="row" width="10px">1</th>
                  <td><Link href="../doc/en/doc-hepdak-bylaw.docx"><a target="_blank">Bylaw of the HEPDAK</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td><Link href="../doc/en/doc-hepdak-standards.docx"><a target="_blank">HEPDAK Nursing Undergraduate Education Program Standards</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td><Link href="../doc/en/doc-hepdak-pes.docx"><a target="_blank">HEPDAK Program Evaluation Schedule</a></Link></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td><Link href="../doc/en/doc-hepdak-principles.docx"><a target="_blank">HEPDAK Directive of Evaluation and Accreditation Implementation Principles</a></Link></td>
                </tr>
              </tbody>
            </table>       
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Belgeler
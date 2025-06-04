import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Uye = () => (
    <MasterPage>
	    <Head>
        <title>HEPDAK | Evaluator Training Workshop</title>
      </Head>
      <div className="row">
        <div className="genel col-md-12 col-sm-12">
          <h1 id="kurumlar">Evaluator Training Workshop</h1>
          <p>The aim of the assessor training programme is to help HEPDAK assessors to make reliable, consistent and appropriate decisions in the accreditation process.</p>
          <p className="madde-p">• Know and discuss the accreditation process and principles</p>
          <p className="madde-p">• Understanding HEPDAK Nursing Undergraduate Education Standards</p>
          <p className="madde-p">• To be able to critically evaluate the PDR and its annexes</p>
          <p className="madde-p">• To be able to fulfil the responsibilities of the assessor with sensitivity</p>
          <p className="madde-p">• To be able to continue evaluation studies with the team</p>
          <p className="madde-p">• To be able to decide whether HEPDAK standards are met</p>
          <p className="madde-p">• To be able to prepare an evaluation report</p>
          <p className="madde-p">• Understanding on-site and virtual visit processes</p>
          {/*   2025 Değerlendirici Çalıştayı   */}
          <h6><span className="badge badge-custom">-</span> April 29 / May 30 - 31 2025 HEPDAK Evaluator Training </h6>
          <p>
            <ul className="nav calistay-nav">
              <li className="nav-item">
                <a className="nav-link calistay-button" href="../doc/degerlendirici_egitim_12/en-program.pdf">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link calistay-button" href="../doc/degerlendirici_egitim_12/en-participant-list.pdf">Participant List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExampleFoto12" role="button" aria-expanded="false" aria-controls="collapseExampleFoto12">Photos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link calistay-button" href="../doc/degerlendirici_egitim_12/en-evaluation.pdf">Evaluation</a>
              </li>
            </ul>
          </p>
          <div className="collapse" id="collapseExampleFoto12">
            <p><strong>- Fotoğraflar</strong></p>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12"><a href="../doc/degerlendirici_egitim_12/01.jpeg" target="_blank"><img className="calistay-img" src="../doc/degerlendirici_egitim_12/01.jpeg" alt="HEPDAK 2025 yılı Değerlendirici Eğitimi"/></a></div>
                <div className="col-md-3 col-sm-12"><a href="../doc/degerlendirici_egitim_12/02.png" target="_blank"><img className="calistay-img" src="../doc/degerlendirici_egitim_12/02.png" alt="HEPDAK 2025 yılı Değerlendirici Eğitimi"/></a></div>
                <div className="col-md-3 col-sm-12"><a href="../doc/degerlendirici_egitim_12/03.png" target="_blank"><img className="calistay-img" src="../doc/degerlendirici_egitim_12/03.png" alt="HEPDAK 2025 yılı Değerlendirici Eğitimi"/></a></div>
              </div>
            </div>
          </div>
          {/*   2025 Tazelenme Çalıştayı   */}
          <h6><span className="badge badge-custom">-</span> May 27 2025 HEPDAK Evaluator Training (Refresher) Workshop</h6>
          <p>
            <ul className="nav calistay-nav">
              <li className="nav-item">
                <a className="nav-link calistay-button" href="../doc/degerlendirici_egitim_11/en-program.pdf">Program</a>
              </li>
              <li className="nav-item">
                <a className="nav-link calistay-button" href="../doc/degerlendirici_egitim_11/en-participant-list.pdf">Participant List</a>
              </li>
              <li className="nav-item">
                <a className="nav-link calistay-button" data-toggle="collapse" href="#collapseExampleFoto11" role="button" aria-expanded="false" aria-controls="collapseExampleFoto11">Photos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link calistay-button" href="../doc/degerlendirici_egitim_11/en-evaluation.pdf">Evaluation</a>
              </li>
            </ul>
          </p>
          <div className="collapse" id="collapseExampleFoto11">
            <p><strong>- Fotoğraflar</strong></p>
            <div className="container">
              <div className="row">
                <div className="col-md-3 col-sm-12"><a href="../doc/degerlendirici_egitim_11/01.jpeg" target="_blank"><img className="calistay-img" src="../doc/degerlendirici_egitim_11/01.jpeg" alt="HEPDAK 2025 yılı Tazelenme Değerlendirici Eğitimi"/></a></div>
                <div className="col-md-3 col-sm-12"><a href="../doc/degerlendirici_egitim_11/02.jpeg" target="_blank"><img className="calistay-img" src="../doc/degerlendirici_egitim_11/02.jpeg" alt="HEPDAK 2025 yılı Tazelenme Değerlendirici Eğitimi"/></a></div>
                <div className="col-md-3 col-sm-12"><a href="../doc/degerlendirici_egitim_11/03.png" target="_blank"><img className="calistay-img" src="../doc/degerlendirici_egitim_11/03.png" alt="HEPDAK 2025 yılı Tazelenme Değerlendirici Eğitimi"/></a></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </MasterPage>
)
export default Uye

import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Tum = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | All News</title>
      </Head>
      <div className="genel">
        <h1>All News</h1>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#twentyfour">2024</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="twentyfour" className="container tab-pane active">
              <div className="main-top-second" id="12october2024">
                <div className="main-top-second-title">HEPDAK Nursing Undergraduate Program Managers Meeting - 4 (October 12, 2024)</div> 
                <div className="main-top-second-content">
                  <p>The fourth Nursing Undergraduate Program Managers Meeting organized by HEPDAK within the scope of stakeholder meetings, was held online on October 12, 2024. The meeting, attended by 114 managers/faculty members from undergraduate programs, began with an informative presentation by HEPDAK board chair Prof. Dr. Dilek ÖZMEN on HEPDAK activities, and continued with a presentation by Erciyes University Health Sciences Faculty Nursing Department faculty member Prof. Dr. Sultan TAŞÇI on “Leadership and Quality Assurance Culture”. The meeting ended with goodwill wishes after discussing the expectations of nursing undergraduate program managers from HEPDAK and answering participant questions.</p>
                </div> 
              </div>
              <div className="main-top-second" id="03october2024">
                <div className="main-top-second-title">Webinar: Bridge to Access 21st Century Competencies: Extracurricular Learning (October 03, 2024)</div> 
                <div className="main-top-second-content">
                  <p>The subject of the 12th webinar held on April 30, 2024 with the HEPDAK-HEMED collaboration was “Bridge to Access 21st Century Competencies: Extracurricular Learning”. Dr. Gülsüm ÇONOĞLU from Çankırı Karatekin University, Faculty of Health Sciences, Department of Nursing was the speaker of the webinar, which was moderated by Prof. Dr. Ayla KEÇECİ. From different universities in Turkey, 215 faculty members attended the meeting. The questions and contributions of the participants were included in the last part of the webinar. The webinar ended with the good wishes of the participants.</p>
                </div> 
              </div>
              <div className="main-top-second" id="1920september2024">
                <div className="main-top-second-title">HEPDAK 12th Training Workshop for Institutions (September 19-20, 2024)</div> 
                <div className="main-top-second-content">
                  <p>The fourth Nursing Undergraduate Program Managers Meeting organized by HEPDAK within the scope of stakeholder meetings, was held online on October 12, 2024. The meeting, attended by 114 managers/faculty members from undergraduate programs, began with an informative presentation by HEPDAK board chair Prof. Dr. Dilek ÖZMEN on HEPDAK activities, and continued with a presentation by Erciyes University Health Sciences Faculty Nursing Department faculty member Prof. Dr. Sultan TAŞÇI on “Leadership and Quality Assurance Culture”. The meeting ended with goodwill wishes after discussing the expectations of nursing undergraduate program managers from HEPDAK and answering participant questions.</p>
                </div> 
              </div>
              <div className="main-top-second" id="10june2024">
                <div className="main-top-second-title">A monitoring visit organized by YÖKAK was held (June 10, 2024)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK activities are monitored by the Higher Education Quality Board (YÖKAK). The 2023 monitoring meeting was held on June 10, 2024 by YÖKAK Monitoring Officer Prof Hüseyin Kara. Dr. In the first session After meeting with the monitoring officer Prof. Dr. Hüseyin Kara, HEPDAK President Prof. Dr. Dilek ÖZMEN made a presentation about the HEPDAK activities carried out for 2023. In the next session, focus group discussions were held with stakeholders consisting of HEPDAK members, academic and student evaluators, representing the accreditation board and commissions</p>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    <div className="safe"></div>
    </MasterPage>
)
export default Tum

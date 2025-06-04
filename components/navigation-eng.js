import Link from 'next/link'

const Navigation = () => (
<div className="navigation">
	<div className="navigation-items">
		<div className="navigation-nav">
			<ul className="nav nav-pills">
				<li className="nav-item">
	        <Link href="/en/" className="nav-link header-nav-link">HOME</Link>
	      </li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ABOUT US</a>
					<div className="dropdown-menu">
						<Link href="/en/mission-vision" className="dropdown-item">Mission, Vision</Link>
						<Link href="/en/strategic-plan" className="dropdown-item">Strategic Plan</Link>
						<Link href="/en/objective-activities" className="dropdown-item">Objective and Activities</Link>
						<Link href="/en/quality-policy" className="dropdown-item">Quality Policy</Link>
						<Link
                            href="../doc/en/hepdak-organizational-structure.pdf"
                            className="dropdown-item"
                            target="_blank">HEPDAK Organizational Structure</Link>
						<Link href="/en/boards-commissions" className="dropdown-item">Boards and Commissions</Link>
						<Link href="/en/member-list" className="dropdown-item">Member List</Link>
						<Link href="/en/evaluator-list" className="dropdown-item">Evaluator List</Link>
						{/*<Link href="/idari-personel"><a className="dropdown-item">Administrative Staff</a></Link>*/}
						<Link href="/en/registry-letters" className="dropdown-item">Registration/Registry Letters</Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ACCREDITATION</a>
					<div className="dropdown-menu">
						<Link href="../doc/en/application.pdf" className="dropdown-item">Application</Link>
						<Link href="/en/documents" className="dropdown-item">Documents</Link>
						<Link href="../doc/en/fees-2025.pdf" className="dropdown-item">Fees</Link>
						<Link href="/en/accredited-institutions" className="dropdown-item">Accredited Programs</Link>
						<Link href="/en/related-organizations" className="dropdown-item">Related Organizations</Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">WORKSHOPS</a>
					<div className="dropdown-menu">
						<Link href="/en/training-workshop-for-institutions" className="dropdown-item">Training Workshop for Institutions</Link>
						<Link href="en/evaluator-training-workshop" className="dropdown-item">Evaluator Training Workshop</Link>
						<Link href="../doc/en/student-evaluator-training-workshop.pdf" className="dropdown-item">Student Evaluator Training Workshop</Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">REPORTS</a>
					<div className="dropdown-menu">
						<Link href="/en/general-assembly-and-reports" className="dropdown-item">General Assembly and Reports</Link>
						<Link href="/en/thematic-analysis-reports" className="dropdown-item">Thematic Analysis Report</Link>
						<Link href="/en/activity-reports" className="dropdown-item">Activity Reports/Annual Reports</Link>
						<Link href="/en/stakeholder-opinion-reports" className="dropdown-item">Stakeholder Opinion Reports</Link>
						<Link href="/en/monitoring-reports" className="dropdown-item">Monitoring Reports</Link>
						<Link href="/en/continuous-improvement-reports" className="dropdown-item">Continious Improvement Reports</Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">MEETINGS</a>
					<div className="dropdown-menu">
						<Link href="/en/heak-meetings" className="dropdown-item">HEAK Meetings</Link>
						<Link href="/en/advisory-board-meetings" className="dropdown-item">Advisory Board Meetings</Link>
						<Link href="/en/commission-meetings" className="dropdown-item">Commission Meetings</Link>
						<Link href="/en/international-meetings" className="dropdown-item">International Meetings and Activities</Link>
						<Link href="/en/stakeholder-meetings" className="dropdown-item">Stakeholder Meetings</Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">EDUCATIONS</a>
					<div className="dropdown-menu">
						<Link href="/en/webinar" className="dropdown-item">Webinars</Link>
						<Link href="/en/symposiums" className="dropdown-item">Symposiums</Link>
						<Link href="/en/educational-activities" className="dropdown-item">Educational Activities</Link>
						<Link href="/en/good-practice-examples" className="dropdown-item">Good Practice Examples</Link>
					</div>
				</li>
	      <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">PUBLICATIONS</a>
					<div className="dropdown-menu">
						<Link href="/en/hepdak-presentations" className="dropdown-item">HEPDAK Presentations</Link>
						<Link href="/en/resources" className="dropdown-item">Resources</Link>
						<Link href="/en/symposium-books" className="dropdown-item">Symposium Books</Link>
					</div>
				</li>
	      <li className="nav-item">
	        <Link href="/en/contact" className="nav-link header-nav-link">CONTACT</Link>
	      </li>
	      <li className="nav-item">
	        <Link href="http://hemsis.hepdak.org.tr/" className="nav-link header-nav-link">HEMSIS</Link>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




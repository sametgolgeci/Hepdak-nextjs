import Link from 'next/link'

const Navigation = () => (
<div className="navigation">
	<div className="navigation-items">
		<div className="navigation-nav">
			<ul className="nav nav-pills">
				<li className="nav-item">
	        <Link href="/en/"><a className="nav-link header-nav-link">HOME</a></Link>
	      </li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ABOUT US</a>
					<div className="dropdown-menu">
						<Link href="/en/mission-vision"><a className="dropdown-item">Mission, Vision</a></Link>
						<Link href="../doc/en/hepdak-strategic-plan.pdf"><a className="dropdown-item" target="_blank">Strategic Plan</a></Link>
						<Link href="/en/objective-activities"><a className="dropdown-item">Objective and Activities</a></Link>
						<Link href="/en/quality-policy"><a className="dropdown-item">Quality Policy</a></Link>
						<Link href="../doc/en/hepdak-organizational-structure.pdf"><a className="dropdown-item" target="_blank">HEPDAK Organizational Structure</a></Link>
						<Link href="/en/boards-commissions"><a className="dropdown-item">Boards and Commissions</a></Link>
						<Link href="/en/member-list"><a className="dropdown-item">Member List</a></Link>
						<Link href="/en/evaluator-list"><a className="dropdown-item">Evaluator List</a></Link>
						{/*<Link href="/idari-personel"><a className="dropdown-item">Administrative Staff</a></Link>*/}
						<Link href="/en/registry-letters"><a className="dropdown-item">Registration/Registry Letters</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ACCREDITATION</a>
					<div className="dropdown-menu">
						<Link href="../doc/en/application.pdf"><a className="dropdown-item">Application</a></Link>
						<Link href="/en/documents"><a className="dropdown-item">Documents</a></Link>
						<Link href="../doc/en/fees-2025.pdf"><a className="dropdown-item">Fees</a></Link>
						<Link href="../doc/en/accredited-programs.pdf"><a className="dropdown-item">Accredited Programs</a></Link>
						<Link href="/en/related-organizations"><a className="dropdown-item">Related Organizations</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">WORKSHOPS</a>
					<div className="dropdown-menu">
						<Link href="/en/training-workshop-for-institutions"><a className="dropdown-item">Training Workshop for Institutions</a></Link>
						<Link href="../doc/en/evaluator-training-workshop.pdf"><a className="dropdown-item">Evaluator Training Workshop</a></Link>
						<Link href="../doc/en/student-evaluator-training-workshop.pdf"><a className="dropdown-item">Student Evaluator Training Workshop</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">REPORTS</a>
					<div className="dropdown-menu">
						<Link href="/en/general-assembly-and-reports"><a className="dropdown-item">General Assembly and Reports</a></Link>
						<Link href="/en/thematic-analysis-reports"><a className="dropdown-item">Thematic Analysis Report</a></Link>
						<Link href="/en/activity-reports"><a className="dropdown-item">Activity Reports/Annual Reports</a></Link>
						<Link href="/en/stakeholder-opinion-reports"><a className="dropdown-item">Stakeholder Opinion Reports</a></Link>
						<Link href="/en/monitoring-reports"><a className="dropdown-item">Monitoring Reports</a></Link>
						<Link href="/en/continuous-improvement-reports"><a className="dropdown-item">Continious Improvement Reports</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">MEETINGS</a>
					<div className="dropdown-menu">
						<Link href="/en/heak-meetings"><a className="dropdown-item">HEAK Meetings</a></Link>
						<Link href="/en/advisory-board-meetings"><a className="dropdown-item">Advisory Board Meetings</a></Link>
						<Link href="/en/commission-meetings"><a className="dropdown-item">Commission Meetings</a></Link>
						<Link href="/en/international-meetings"><a className="dropdown-item">International Meetings and Activities</a></Link>
						<Link href="/en/stakeholder-meetings"><a className="dropdown-item">Stakeholder Meetings</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">EDUCATIONS</a>
					<div className="dropdown-menu">
						<Link href="/en/webinar"><a className="dropdown-item">Webinars</a></Link>
						<Link href="/en/symposiums"><a className="dropdown-item">Symposiums</a></Link>
						<Link href="/en/educational-activities"><a className="dropdown-item">Educational Activities</a></Link>
						<Link href="/en/good-practice-examples"><a className="dropdown-item">Good Practice Examples</a></Link>
					</div>
				</li>
	      <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">PUBLICATIONS</a>
					<div className="dropdown-menu">
						<Link href="/en/hepdak-presentations"><a className="dropdown-item">HEPDAK Presentations</a></Link>
						<Link href="/en/resources"><a className="dropdown-item">Resources</a></Link>
						<Link href="/en/symposium-books"><a className="dropdown-item">Symposium Books</a></Link>
					</div>
				</li>
	      <li className="nav-item">
	        <Link href="/en/contact"><a className="nav-link header-nav-link">CONTACT</a></Link>
	      </li>
	      <li className="nav-item">
	        <Link href="http://hemsis.hepdak.org.tr/"><a className="nav-link header-nav-link">HEMSIS</a></Link>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




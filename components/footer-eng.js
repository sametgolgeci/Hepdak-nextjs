import Link from 'next/link'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarkerAlt,faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
<div className="footer">
	<div className="footer-items">
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-logo">
				
				<Link href="/"><img className="footer-img" src="../img/hepdak-logo-white.png" title="HEPDAK"></img></Link>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faPhone}/></div>
					<div className="footer-info-color"><Link href="tel:+90-553-986-4302">+90 (553) 986 43 02</Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faEnvelope}/></div>
					<div className="footer-info-color"><Link href="mailto:info@hepdak.org.tr">info@hepdak.org.tr</Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faYoutube}/></div>
					<div className="footer-info-color"><Link href="https://www.youtube.com/channel/UC96oXHHypl1WFXpOkvwwj9A/featured">HEPDAK TV</Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faInstagram}/></div>
					<div className="footer-info-color"><Link href="https://www.instagram.com/hepdak/">HEPDAK</Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt}/></div>
					<div className="footer-info-color"><Link href="/iletisim">Konak Mah. 858 Sok.<br/>No: 9 Daire: 706<br/>Konak - İzmir</Link></div>
				</div>
			</div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>About Us</strong></div> 
			<div className="footer-item-link"><Link href="/en/mission-vision">Mission, Vision</Link></div>
			<div className="footer-item-link"><Link href="/en/strategic-plan" target="_blank">Strategic Plan</Link></div>
			<div className="footer-item-link"><Link href="/en/objective-activities">Objective and Activities</Link></div>
			<div className="footer-item-link"><Link href="/en/quality-policy">Quality Policy</Link></div>
			<div className="footer-item-link"><Link href="/doc/en/hepdak-organizational-structure.pdf" target="_blank">HEPDAK Organizational Structure</Link></div>
			<div className="footer-item-link"><Link href="/en/boards-commissions">Boards and Commissions</Link></div>
			<div className="footer-item-link"><Link href="/en/member-list">Member List</Link></div>
			<div className="footer-item-link"><Link href="/en/evaluator-list">Evaluator List</Link></div>
			<div className="footer-item-link"><Link href="/en/registry-letters">Registration/Registry Letters</Link></div>
		</div>	
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Accreditation</strong></div>
			<div className="footer-item-link"><Link href="/doc/en/application.pdf">Application</Link></div>
			<div className="footer-item-link"><Link href="/en/documents">Documents</Link></div>
			<div className="footer-item-link"><Link href="/doc/en/fees-2025.pdf">Fees</Link></div>
			<div className="footer-item-link"><Link href="/en/accredited-institutions">Accredited Programs</Link></div>
			<div className="footer-item-link"><Link href="/en/related-organizations">Related Organizations</Link></div>
			<div className="footer-item-title footer-item-title-calistay"><strong>Workshops</strong></div>
			<div className="footer-item-link"><Link href="/en/training-workshop-for-institutions">Training Workshop for Institutions</Link></div>
			<div className="footer-item-link"><Link href="/en/evaluator-training-workshop">Evaluator Training Workshop</Link></div>
			<div className="footer-item-link"><Link href="/doc/en/student-evaluator-training-workshop.pdf">Student Evaluator Training Workshop</Link></div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Reports</strong></div>
			<div className="footer-item-link"><Link href="/en/general-assembly-and-reports">General Assembly and Reports</Link></div>
			<div className="footer-item-link"><Link href="/en/thematic-analysis-reports">Thematic Analysis Report</Link></div>
			<div className="footer-item-link"><Link href="/en/activity-reports">Activity Reports/Annual Reports</Link></div>
			<div className="footer-item-link"><Link href="/en/stakeholder-opinion-reports">Stakeholder Opinion Reports</Link></div>	
			<div className="footer-item-title footer-item-title-calistay"><strong>Meetings</strong></div>
			<div className="footer-item-link"><Link href="/en/heak-meetings">HEAK Meetings</Link></div>
			<div className="footer-item-link"><Link href="/en/advisory-board-meetings">Advisory Board Meetings</Link></div>
			<div className="footer-item-link"><Link href="/en/commission-meetings">Commission Meetings</Link></div>
			<div className="footer-item-link"><Link href="/en/international-meetings">International Meetings and Activities</Link></div>
			<div className="footer-item-link"><Link href="/en/stakeholder-meetings">Stakeholder Meetings</Link></div>
		</div>		
	</div>
	<div className="footer-copy">
		<span>© 2020-2025 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - All Rights Reserved - Desinged by sametgolgeci</span>
	</div>
</div>
)
export default Footer
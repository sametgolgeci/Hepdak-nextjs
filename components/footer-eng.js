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
				
				<Link href="/"><a><img className="footer-img" src="../img/hepdak-logo-white.png" title="HEPDAK"></img></a></Link>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faPhone}/></div>
					<div className="footer-info-color"><Link href="tel:+90-553-986-4302"><a>+90 (553) 986 43 02</a></Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faEnvelope}/></div>
					<div className="footer-info-color"><Link href="mailto:info@hepdak.org.tr"><a>info@hepdak.org.tr</a></Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faYoutube}/></div>
					<div className="footer-info-color"><Link href="https://www.youtube.com/channel/UC96oXHHypl1WFXpOkvwwj9A/featured"><a>HEPDAK TV</a></Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faInstagram}/></div>
					<div className="footer-info-color"><Link href="https://www.instagram.com/hepdak/"><a>HEPDAK</a></Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt}/></div>
					<div className="footer-info-color"><Link href="/iletisim"><a>Konak Mah. 858 Sok.<br/>No: 9 Daire: 706<br/>Konak - İzmir</a></Link></div>
				</div>
			</div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>About Us</strong></div> 
			<div className="footer-item-link"><Link href="/mission-vision"><a>Mission, Vision</a></Link></div>
			<div className="footer-item-link"><Link href="/doc/en/hepdak-strategic-plan.pdf"><a target="_blank">Strategic Plan</a></Link></div>
			<div className="footer-item-link"><Link href="/objective-activities"><a>Objective and Activities</a></Link></div>
			<div className="footer-item-link"><Link href="/quality-policy"><a>Quality Policy</a></Link></div>
			<div className="footer-item-link"><Link href="doc/en/hepdak-organizational-structure.pdf"><a target="_blank">HEPDAK Organizational Structure</a></Link></div>
			<div className="footer-item-link"><Link href="/en/boards-commissions"><a>Boards and Commissions</a></Link></div>
			<div className="footer-item-link"><Link href="/en/member-list"><a>Member List</a></Link></div>
			<div className="footer-item-link"><Link href="/en/evaluator-list"><a>Evaluator List</a></Link></div>
			<div className="footer-item-link"><Link href="/en/registry-letters"><a>Registration/Registry Letters</a></Link></div>
		</div>	
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Accreditation</strong></div>
			<div className="footer-item-link"><Link href="/doc/b1-basvuru-2024-2025.pdf"><a>Application</a></Link></div>
			<div className="footer-item-link"><Link href="/en/documents"><a>Documents</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Fees</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Accredited Programs</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Related Organizations</a></Link></div>
			<div className="footer-item-title footer-item-title-calistay"><strong>Workshops</strong></div>
			<div className="footer-item-link"><Link href="#"><a>Training Workshop for Institutions</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Evaluator Training Workshop</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Student Evaluator Training Workshop</a></Link></div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Reports</strong></div>
			<div className="footer-item-link"><Link href="#"><a>General Assembly and Reports</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Thematic Analysis Report</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Activity Reports/Annual Reports</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Stakeholder Opinion Reports</a></Link></div>	
			<div className="footer-item-title footer-item-title-calistay"><strong>Meetings</strong></div>
			<div className="footer-item-link"><Link href="#"><a>HEAK and Commission Meetings</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Consistency Committee Meetings</a></Link></div>
			<div className="footer-item-link"><Link href="#"><a>Team Leader Meetings</a></Link></div>
		</div>		
	</div>
	<div className="footer-copy">
		<span>© 2020-2023 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - Tüm Hakları Saklıdır / All Rights Reserved - Desinged by sametgolgeci</span>
	</div>
</div>
)
export default Footer
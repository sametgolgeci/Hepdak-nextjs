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
			<div className="footer-item-link"><Link href="/misyon-vizyon"><a>Mission, Vision</a></Link></div>
			<div className="footer-item-link"><Link href="/doc/HEPDAK_STRATEJİK_PLAN_2020.pdf"><a>Strategic Plan</a></Link></div>
			<div className="footer-item-link"><Link href="/amac-ve-faaliyetler"><a>Purpose and Activities</a></Link></div>
			<div className="footer-item-link"><Link href="/kalite-politikasi"><a>Quality Policy</a></Link></div>
			<div className="footer-item-link"><Link href="/doc/hepdak_org_sema.pdf"><a>HEPDAK Organizational Structure</a></Link></div>
			<div className="footer-item-link"><Link href="/kurul-ve-komisyonlar"><a>Boards and Commissions</a></Link></div>
			<div className="footer-item-link"><Link href="/uye-listesi"><a>Member List</a></Link></div>
			<div className="footer-item-link"><Link href="/tescil-yazilari"><a>Registration/Registry Letters</a></Link></div>
		</div>	
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Accreditation</strong></div>
			<div className="footer-item-link"><Link href="/doc/b1-basvuru-2023-2024.doc"><a>Application</a></Link></div>
			<div className="footer-item-link"><Link href="/belgeler"><a>Documents</a></Link></div>
			<div className="footer-item-link"><Link href="/ucretler"><a>Fees</a></Link></div>
			<div className="footer-item-link"><Link href="/akredite-edilen-kurumlar"><a>Accredited Programs</a></Link></div>
			<div className="footer-item-link"><Link href="/ilgili-kuruluslar"><a>Related Organizations</a></Link></div>
			<div className="footer-item-title footer-item-title-calistay"><strong>Workshops</strong></div>
			<div className="footer-item-link"><Link href="/kurumlar-icin-egitim-calistayi"><a>Training Workshop for Institutions</a></Link></div>
			<div className="footer-item-link"><Link href="/degerlendirici-egitimi-calistayi"><a>Evaluator Training Workshop</a></Link></div>
			<div className="footer-item-link"><Link href="/ogrenci-degerlendirici-egitimi-calistayi"><a>Student Evaluator Training Workshop</a></Link></div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Reports</strong></div>
			<div className="footer-item-link"><Link href="/hepdak-genel-kurulu-ve-raporlari"><a>General Assembly and Reports</a></Link></div>
			<div className="footer-item-link"><Link href="/tematik-analiz-raporu"><a>Thematic Analysis Report</a></Link></div>
			<div className="footer-item-link"><Link href="/faaliyet-raporlari"><a>Activity Reports/Annual Reports</a></Link></div>
			<div className="footer-item-link"><Link href="/paydas-gorusleri"><a>Stakeholder Opinion Reports</a></Link></div>	
			<div className="footer-item-title footer-item-title-calistay"><strong>Meetings</strong></div>
			<div className="footer-item-link"><Link href="/heak-ve-komisyon-toplantilari"><a>HEAK and Commission Meetings</a></Link></div>
			<div className="footer-item-link"><Link href="/tutarlilik-komisyonu-toplantilari"><a>Consistency Committee Meetings</a></Link></div>
			<div className="footer-item-link"><Link href="/takim-baskani-toplantilari"><a>Team Leader Meetings</a></Link></div>
		</div>		
	</div>
	<div className="footer-copy">
		<span>© 2020-2022 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - Tüm Hakları Saklıdır / All Rights Reserved - Desinged by sametgolgeci</span>
	</div>
</div>
)
export default Footer
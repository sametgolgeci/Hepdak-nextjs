import Link from 'next/link'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Footer = () => (
<div className="footer">
	<div className="footer-items">
		<div className="col-3">
			<div className="footer-logo">
				<Link href="/"><a><img className="footer-img" src="img/logowhite.png" title="HEPDAK"></img></a></Link>
			</div>
		</div>
		<div className="col-3">
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
		</div>
		<div className="col-3">
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
			Kısayol
		</div>
		<div className="col-3">
			<div className="footer-info">
				<div className="footer-info-item"> 
					<div className="footer-info-icon">
						<FontAwesomeIcon className="footer-icon" icon={faPhone}/>
					</div>
					<div>
						<span>+90 (553) 986 43 02</span>
					</div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon">
						<FontAwesomeIcon className="footer-icon" icon={faEnvelope}/>
					</div>
					<div>
						<span>info@hepdak.org.tr</span>
					</div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon">
						<FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt}/>
					</div>
					<div>
						<span>Konak Mah. 858 Sok. No:9 Daire:706 Konak/İZMİR</span>
					</div>
				</div>
			</div>
		</div>			
	</div>
</div>
)
export default Footer
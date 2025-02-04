import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarkerAlt,faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Iletisim = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Contact</title>
	</Head>
	<div className="genel"><h1>Contact</h1></div>
	<div className="row">
		<div className="col-md-6 col-sm-12 iletisim iletisim-adres">
			<p><iframe className="iletisim-harita" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.9192711010137!2d27.128350414853763!3d38.42023048253444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3a0ca3187%3A0x391e99ccfd008d0!2sKonak%2C%20858.%20Sk.%20No%3A9%20D%3A706%2C%2035250%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1588444441179!5m2!1str!2str" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></p>
			<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faPhone}/></div>
					<div className="iletisim-info-color"><Link href="tel:+90-553-986-4302">+90 (553) 986 43 02</Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faEnvelope}/></div>
					<div className="iletisim-info-color"><Link href="mailto:info@hepdak.org.tr">info@hepdak.org.tr</Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt}/></div>
					<div className="iletisim-info-color">Konak Mah. 858 Sok.<br/>No: 9 Daire: 706<br/>Konak - İzmir</div>
				</div>
		</div>
		<div className="col-md-5 col-sm-12 iletisim iletisim-info">
			<p><strong>Chair</strong><br/>Prof. Dr. Dilek ÖZMEN<br/><Link href="mailto:ozmendilek@yahoo.com">ozmendilek@yahoo.com</Link></p>
			<p><strong>General Secretary</strong><br/>Prof. Dr. Medine Yılmaz<br/><Link href="mailto:medine.caliskanyilmaz@gmail.com">medine.caliskanyilmaz@gmail.com</Link></p>
			<p><strong>Accountant</strong><br/>Prof. Dr. Gülsüm Nihal Çürük<br/><Link href="mailto:guleser38@gmail.com">guleser38@gmail.com</Link></p>
			<p><strong>Secretary</strong><br/>Ümran Yalçın<br/><Link href="mailto:hepdak2013@gmail.com">hepdak2013@gmail.com</Link></p>
		</div>
	</div>

</MasterPage>
)
export default Iletisim

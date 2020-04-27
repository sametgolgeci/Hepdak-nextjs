import Link from 'next/link'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'


const Footer = () => (
<div className="footer">
	<div className="footer-items">
		<div className="col-3 footer-item">
			<div className="footer-logo">
				<Link href="/"><a><img className="footer-img" src="img/logowhite.png" title="HEPDAK"></img></a></Link>
			</div>
		</div>
		<div className="col-3 footer-item">
			<div><Link href="/akreditasyon"><a><strong>Akreditasyon</strong></a></Link></div>
			<div><Link href="/akreditasyon#surec"><a>Süreç</a></Link></div>
			<div><Link href="/akreditasyon#basvuru"><a>Başvuru</a></Link></div>
			<div><Link href="/akreditasyon#belgeler"><a>Belgeler</a></Link></div>
			<div><Link href="/akreditasyon#ucretler"><a>Ücretler</a></Link></div>
		</div>
		<div className="col-3 footer-item">
			<div><strong>Hakkımızda</strong></div>
			<div><Link href="/yonetim-ve-denetleme-kurulu"><a>Yönetim ve Denetleme Kurulu</a></Link></div>
			<div><Link href="/kurul-ve-komisyonlar"><a>Kurul ve Komisyonlar</a></Link></div>
			<div><Link href="/calistay"><a><strong>Çalıştay</strong></a></Link></div>
			<div><Link href="/toplantilar"><a><strong>Toplantılar</strong></a></Link></div>
		</div>
		<div className="col-3 footer-item">
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
		<div className="footer-copy">
			<span>© 2020 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - Tüm Hakları Saklıdır / All Rights Reserved</span>
		</div>
	</div>
)
export default Footer
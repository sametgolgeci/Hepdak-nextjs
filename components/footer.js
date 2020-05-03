import Link from 'next/link'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarkerAlt,faChevronRight } from '@fortawesome/free-solid-svg-icons'


const Footer = () => (
<div className="footer">
	<div className="footer-items">
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-logo">
				<Link href="/"><a><img className="footer-img" src="img/logowhite.png" title="HEPDAK"></img></a></Link>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faPhone}/></div>
					<div><span>+90 (553) 986 43 02</span></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faEnvelope}/></div>
					<div><span>info@hepdak.org.tr</span></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt}/></div>
					<div><span>Konak Mah. 858 Sok. No:9 Daire:706 Konak/İZMİR</span></div>
				</div>
			</div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Hakkımızda</strong></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/misyon"><a>Misyon</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/amac-ve-faaliyetler"><a>Amaç ve Faaliyetler</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/kalite-politikasi"><a>Kalite Politikası</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/yonetim-ve-denetleme-kurulu"><a>Yönetim ve Denetleme Kurulu</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/kurul-ve-komisyonlar"><a>Kurul ve Komisyonlar</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/hepdak-raporlari"><a>HEPDAK Raporları</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/uluslararasi-uyelik-ve-tescil-yazilari"><a>Uluslararası Üyelik ve Tescil Yazıları</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/uye-listesi"><a>Üye Listesi</a></Link></div>
		</div>	
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Akreditasyon</strong></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/akreditasyon#surec"><a>Süreç</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/akreditasyon#basvuru"><a>Başvuru</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/akreditasyon#belgeler"><a>Belgeler</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/akreditasyon#ucretler"><a>Ücretler</a></Link></div>
			<div className="footer-item-title"><strong>Çalıştay</strong></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/calistay#kurumlar"><a>Kurumlar için Eğitim Çalıştayı</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/calistay#degerlendirici"><a>Değerlendirici Eğitimi Çalıştayı</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/calistay#ogrenci"><a>Öğrenci Değerlendirici Eğitimi Çalıştayı</a></Link></div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Toplantılar</strong></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/toplantilar#heak"><a>HEAK ve Komisyon Toplantıları</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/toplantilar#tutarlilik"><a>Tutarlılık Komisyonu Toplantıları</a></Link></div>
			<div className="footer-item-link"><div className="footer-item-icon"><FontAwesomeIcon className="footer-icon" icon={faChevronRight}/></div><Link href="/toplantilar#takim"><a>Takım Başkanları Toplantıları</a></Link></div>
		</div>		
	</div>
	<div className="footer-copy">
		<span>© 2020 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - Tüm Hakları Saklıdır / All Rights Reserved</span>
	</div>
</div>
)
export default Footer
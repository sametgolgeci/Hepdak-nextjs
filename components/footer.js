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
				
				<Link href="/"><img className="footer-img" src="img/hepdak-logo-white.png" title="HEPDAK"></img></Link>
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
			<div className="footer-item-title"><strong>Kurumsal</strong></div> 
			<div className="footer-item-link"><Link href="/misyon-vizyon">Misyon, Vizyon</Link></div>
			<div className="footer-item-link"><Link href="/stratejik-plan">Stratejik Plan</Link></div>
			<div className="footer-item-link"><Link href="/amac-ve-faaliyetler">Amaç ve Faaliyetler</Link></div>
			<div className="footer-item-link"><Link href="/kalite-politikasi">Kalite Politikası</Link></div>
			<div className="footer-item-link"><Link href="/doc/hepdak_org_sema.pdf">HEPDAK Organizasyon Şeması</Link></div>
			<div className="footer-item-link"><Link href="/kurul-ve-komisyonlar">Kurul ve Komisyonlar</Link></div>
			<div className="footer-item-link"><Link href="/uye-listesi">Üye Listesi</Link></div>
			<div className="footer-item-link"><Link href="/degerlendirici-listesi">Değerlendiriciler Listesi</Link></div>
			<div className="footer-item-link"><Link href="/yetkilendirme-ve-uluslararasi-taninirlik">Yetkilendirme ve Uluslararası Tanınırlık</Link></div>
			<div className="footer-item-link"><Link href="/kurumsal-kimlik">Kurumsal Kimlik</Link></div>
		</div>	
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Akreditasyon</strong></div>
			<div className="footer-item-link"><Link href="/doc/b1-basvuru-2024-2025.pdf">Başvuru</Link></div>
			<div className="footer-item-link"><Link href="/belgeler">Belgeler</Link></div>
			<div className="footer-item-link"><Link href="/ucretler">Ücretler</Link></div>
			<div className="footer-item-link"><Link href="/akredite-edilen-kurumlar">Akredite Edilen Kurumlar</Link></div>
			<div className="footer-item-link"><Link href="/ilgili-kuruluslar">İlgili Kuruluşlar</Link></div>
			<div className="footer-item-title footer-item-title-calistay"><strong>Çalıştaylar</strong></div>
			<div className="footer-item-link"><Link href="/kurumlar-icin-egitim-calistayi">Kurumlar için Eğitim Çalıştayı</Link></div>
			<div className="footer-item-link"><Link href="/degerlendirici-egitimi-calistayi">Değerlendirici Eğitimi Çalıştayı</Link></div>
			<div className="footer-item-link"><Link href="/ogrenci-degerlendirici-egitimi-calistayi">Öğrenci Değerlendirici Eğitimi Çalıştayı</Link></div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Raporlar</strong></div>
			<div className="footer-item-link"><Link href="/hepdak-genel-kurulu-ve-raporlari">Genel Kurul ve Raporları</Link></div>
			<div className="footer-item-link"><Link href="/tematik-analiz-raporu">Tematik Analiz Raporu</Link></div>
			<div className="footer-item-link"><Link href="/faaliyet-raporlari">Faaliyet Raporları</Link></div>
			<div className="footer-item-link"><Link href="/paydas-gorusleri">Paydaş Görüşü Raporları</Link></div>
			<div className="footer-item-link"><Link href="/izleme-raporlari">İzleme Raporları</Link></div>		
			<div className="footer-item-title footer-item-title-calistay"><strong>Toplantılar</strong></div>
			<div className="footer-item-link"><Link href="/heak-toplantilari">HEAK Toplantıları</Link></div>
			<div className="footer-item-link"><Link href="/komisyon-toplantilari">Komisyon Toplantıları</Link></div>
			<div className="footer-item-link"><Link href="/uluslararasi-toplantilar">Uluslararası Toplantılar ve Faaliyetler</Link></div>
			<div className="footer-item-link"><Link href="/paydas-toplantilari">Paydaş Toplantıları</Link></div>
		</div>		
	</div>
	<div className="footer-copy">
		<span>© 2020-2026 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - Tüm Hakları Saklıdır / All Rights Reserved - Desinged by sametgolgeci</span>
	</div>
</div>
)
export default Footer
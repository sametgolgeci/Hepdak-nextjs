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
			<div className="footer-item-title"><strong>Kurumsal</strong></div> 
			<div className="footer-item-link"><Link href="/misyon-vizyon"><a>Misyon, Vizyon</a></Link></div>
			<div className="footer-item-link"><Link href="/doc/HEPDAK_STRATEJİK_PLAN_2020.pdf"><a>Stratejik Plan</a></Link></div>
			<div className="footer-item-link"><Link href="/amac-ve-faaliyetler"><a>Amaç ve Faaliyetler</a></Link></div>
			<div className="footer-item-link"><Link href="/kalite-politikasi"><a>Kalite Politikası</a></Link></div>
			<div className="footer-item-link"><Link href="/doc/hepdak_org_sema.pdf"><a>HEPDAK Organizasyon Şeması</a></Link></div>
			<div className="footer-item-link"><Link href="/kurul-ve-komisyonlar"><a>Kurul ve Komisyonlar</a></Link></div>
			<div className="footer-item-link"><Link href="/uye-listesi"><a>Üye Listesi</a></Link></div>
			<div className="footer-item-link"><Link href="/tescil-yazilari"><a>Tescil Yazıları</a></Link></div>
			<div className="footer-item-link"><Link href="/dernek-belgeleri"><a>Dernek Belgeleri</a></Link></div>
			<div className="footer-item-link"><Link href="/kurumsal-kimlik"><a>Kurumsal Kimlik</a></Link></div>
		</div>	
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Akreditasyon</strong></div>
			<div className="footer-item-link"><Link href="/doc/b1-basvuru-2023-2024.doc"><a>Başvuru</a></Link></div>
			<div className="footer-item-link"><Link href="/belgeler"><a>Belgeler</a></Link></div>
			<div className="footer-item-link"><Link href="/ucretler"><a>Ücretler</a></Link></div>
			<div className="footer-item-link"><Link href="/akredite-edilen-kurumlar"><a>Akredite Edilen Kurumlar</a></Link></div>
			<div className="footer-item-link"><Link href="/ilgili-kuruluslar"><a>İlgili Kuruluşlar</a></Link></div>
			<div className="footer-item-title footer-item-title-calistay"><strong>Çalıştaylar</strong></div>
			<div className="footer-item-link"><Link href="/kurumlar-icin-egitim-calistayi"><a>Kurumlar için Eğitim Çalıştayı</a></Link></div>
			<div className="footer-item-link"><Link href="/degerlendirici-egitimi-calistayi"><a>Değerlendirici Eğitimi Çalıştayı</a></Link></div>
			<div className="footer-item-link"><Link href="/ogrenci-degerlendirici-egitimi-calistayi"><a>Öğrenci Değerlendirici Eğitimi Çalıştayı</a></Link></div>
			<div className="footer-item-link"><Link href="/uzaktan-degerlendirme-egitimi-calistayi"><a>Uzaktan Değerlendirme Eğitimi Çalıştayı</a></Link></div>
		</div>
		<div className="col-sm-12 col-md-3 footer-item">
			<div className="footer-item-title"><strong>Raporlar</strong></div>
			<div className="footer-item-link"><Link href="/hepdak-genel-kurulu-ve-raporlari"><a>Genel Kurul ve Raporları</a></Link></div>
			<div className="footer-item-link"><Link href="/tematik-analiz-raporu"><a>Tematik Analiz Raporu</a></Link></div>
			<div className="footer-item-link"><Link href="/faaliyet-raporlari"><a>Faaliyet Raporları</a></Link></div>
			<div className="footer-item-link"><Link href="/paydas-gorusleri"><a>Paydaş Görüşü Raporları</a></Link></div>	
			<div className="footer-item-title footer-item-title-calistay"><strong>Toplantılar</strong></div>
			<div className="footer-item-link"><Link href="/heak-ve-komisyon-toplantilari"><a>HEAK ve Komisyon Toplantıları</a></Link></div>
			<div className="footer-item-link"><Link href="/tutarlilik-komisyonu-toplantilari"><a>Tutarlılık Komisyonu Toplantıları</a></Link></div>
			<div className="footer-item-link"><Link href="/takim-baskani-toplantilari"><a>Takım Başkanları Toplantıları</a></Link></div>
			{/*
			<div className="footer-item-title footer-item-title-calistay"><strong>Eğitimler</strong></div>
			<div className="footer-item-link"><Link href="/webinar"><a>Webinarlar</a></Link></div>
			<div className="footer-item-link"><Link href="/sempozyumlar"><a>Sempozyumlar</a></Link></div>
			<div className="footer-item-link"><Link href="/egitim-etkinlikleri"><a>Eğitim Etkinlikleri</a></Link></div>
			<div className="footer-item-link"><Link href="/cagrili-konusmalar"><a>Çağrılı Konuşmalar</a></Link></div>
			*/}
		</div>		
	</div>
	<div className="footer-copy">
		<span>© 2020-2022 Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği - Tüm Hakları Saklıdır / All Rights Reserved - Desinged by sametgolgeci</span>
	</div>
</div>
)
export default Footer
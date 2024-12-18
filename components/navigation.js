import Link from 'next/link'

const Navigation = () => (
<div className="navigation">
	<div className="navigation-items">
		<div className="navigation-nav">
			<ul className="nav nav-pills">
				<li className="nav-item">
	        <Link href="/"><a className="nav-link header-nav-link">ANASAYFA</a></Link>
	      </li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">KURUMSAL</a>
					<div className="dropdown-menu">
						<Link href="/misyon-vizyon"><a className="dropdown-item">Misyon, Vizyon</a></Link>
						<Link href="/doc/hepdak_stratejik_plan.pdf"><a className="dropdown-item">Stratejik Plan</a></Link>
						<Link href="/amac-ve-faaliyetler"><a className="dropdown-item">Amaç ve Faaliyetler</a></Link>
						<Link href="/kalite-politikasi"><a className="dropdown-item">Kalite Politikası</a></Link>
						<Link href="/doc/hepdak_org_sema.pdf"><a className="dropdown-item">HEPDAK Organizasyon Şeması</a></Link>
						<Link href="/kurul-ve-komisyonlar"><a className="dropdown-item">Kurul ve Komisyonlar</a></Link>
						<Link href="/uye-listesi"><a className="dropdown-item">Üye Listesi</a></Link>
						<Link href="/degerlendirici-listesi"><a className="dropdown-item">Değerlendiriciler Listesi</a></Link>
						<Link href="/idari-personel"><a className="dropdown-item">İdari Personel</a></Link>
						<Link href="/yetkilendirme-ve-uluslararasi-taninirlik"><a className="dropdown-item">Yetkilendirme ve Uluslararası Tanınırlık</a></Link>
			      <Link href="/doc/iktisadi-isletme.docx"><a className="dropdown-item">İktisadi İşletme</a></Link>
			      <Link href="/kurumsal-kimlik"><a className="dropdown-item">Kurumsal Kimlik</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">AKREDİTASYON</a>
					<div className="dropdown-menu">
						<Link href="/doc/b1-basvuru-2024-2025.pdf"><a className="dropdown-item">Başvuru</a></Link>
						<Link href="/belgeler"><a className="dropdown-item">Belgeler</a></Link>
						<Link href="/doc/ucretler-2025.pdf"><a className="dropdown-item">Ücretler</a></Link>
						<Link href="/akredite-edilen-kurumlar"><a className="dropdown-item">Akredite Edilen Kurumlar</a></Link>
						<Link href="/ilgili-kuruluslar"><a className="dropdown-item">İlgili Kuruluşlar</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ÇALIŞTAYLAR</a>
					<div className="dropdown-menu">
						<Link href="/kurumlar-icin-egitim-calistayi"><a className="dropdown-item">Kurumlar için Eğitim Çalıştayı</a></Link>
						<Link href="/degerlendirici-egitimi-calistayi"><a className="dropdown-item">Değerlendirici Eğitimi Çalıştayı</a></Link>
						<Link href="/ogrenci-degerlendirici-egitimi-calistayi"><a className="dropdown-item">Öğrenci Değerlendirici Eğitimi Çalıştayı</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">RAPORLAR</a>
					<div className="dropdown-menu">
						<Link href="/hepdak-genel-kurulu-ve-raporlari"><a className="dropdown-item">Genel Kurul ve Raporları</a></Link>
						<Link href="/tematik-analiz-raporu"><a className="dropdown-item">Tematik Analiz Raporu</a></Link>
						<Link href="/faaliyet-raporlari"><a className="dropdown-item">Faaliyet Raporları</a></Link>
						<Link href="/paydas-gorusleri"><a className="dropdown-item">Paydaş Görüşü Raporları</a></Link>
						<Link href="/izleme-raporlari"><a className="dropdown-item">İzleme Raporları</a></Link>
						<Link href="/surekli-iyilestirme-raporlari"><a className="dropdown-item">Sürekli İyileştirme Raporları</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">TOPLANTILAR</a>
					<div className="dropdown-menu">
						<Link href="/heak-toplantilari"><a className="dropdown-item">HEAK Toplantıları</a></Link>
						<Link href="/danisma-kurulu-toplantilari"><a className="dropdown-item">Danışma Kurulu Toplantıları</a></Link>
						<Link href="/tutarlilik-komisyonu-toplantilari"><a className="dropdown-item">Tutarlılık Komisyonu Toplantıları</a></Link>
						<Link href="/komisyon-toplantilari"><a className="dropdown-item">Komisyon Toplantıları</a></Link>
						<Link href="/uluslararasi-toplantilar"><a className="dropdown-item">Uluslararası Toplantılar ve Faaliyetler</a></Link>
						<Link href="/paydas-toplantilari"><a className="dropdown-item">Paydaş Toplantıları</a></Link>
					</div>
				</li>
			
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">EĞİTİMLER</a>
					<div className="dropdown-menu">
						<Link href="/webinar"><a className="dropdown-item">Webinarlar</a></Link>
						<Link href="/sempozyumlar-kongreler"><a className="dropdown-item">Sempozyumlar / Kongreler</a></Link>
						<Link href="/egitim-etkinlikleri"><a className="dropdown-item">Eğitim Etkinlikleri</a></Link>
						<Link href="/iyi-uygulama-ornekleri"><a className="dropdown-item">İyi Uygulama Örnekleri</a></Link>
					</div>
				</li>
	      <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">YAYINLAR</a>
					<div className="dropdown-menu">
						<Link href="/hepdak-sunumlari"><a className="dropdown-item">HEPDAK Sunumları</a></Link>
						<Link href="/kaynaklar"><a className="dropdown-item">Kaynaklar</a></Link>
						<Link href="/sempozyum-kongre-kitaplari"><a className="dropdown-item">Sempozyum / Kongre Kitapları</a></Link>
					</div>
				</li>
	      <li className="nav-item">
	        <Link href="/iletisim"><a className="nav-link header-nav-link">İLETİŞİM</a></Link>
	      </li>
	      <li className="nav-item">
	        <Link href="http://hemsis.hepdak.org.tr/"><a className="nav-link header-nav-link">HEMSİS</a></Link>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




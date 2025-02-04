import Link from 'next/link'

const Navigation = () => (
<div className="navigation">
	<div className="navigation-items">
		<div className="navigation-nav">
			<ul className="nav nav-pills">
				<li className="nav-item">
	        <Link href="/" className="nav-link header-nav-link">ANASAYFA</Link>
	      </li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">KURUMSAL</a>
					<div className="dropdown-menu">
						<Link href="/misyon-vizyon" className="dropdown-item">Misyon, Vizyon</Link>
						<Link href="/doc/hepdak_stratejik_plan.pdf" className="dropdown-item">Stratejik Plan</Link>
						<Link href="/amac-ve-faaliyetler" className="dropdown-item">Amaç ve Faaliyetler</Link>
						<Link href="/kalite-politikasi" className="dropdown-item">Kalite Politikası</Link>
						<Link href="/doc/hepdak_org_sema.pdf" className="dropdown-item">HEPDAK Organizasyon Şeması</Link>
						<Link href="/kurul-ve-komisyonlar" className="dropdown-item">Kurul ve Komisyonlar</Link>
						<Link href="/uye-listesi" className="dropdown-item">Üye Listesi</Link>
						<Link href="/degerlendirici-listesi" className="dropdown-item">Değerlendiriciler Listesi</Link>
						<Link href="/idari-personel" className="dropdown-item">İdari Personel</Link>
						<Link
                            href="/yetkilendirme-ve-uluslararasi-taninirlik"
                            className="dropdown-item">Yetkilendirme ve Uluslararası Tanınırlık</Link>
			      <Link href="/doc/iktisadi-isletme.docx" className="dropdown-item">İktisadi İşletme</Link>
			      <Link href="/kurumsal-kimlik" className="dropdown-item">Kurumsal Kimlik</Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">AKREDİTASYON</a>
					<div className="dropdown-menu">
						<Link href="/doc/b1-basvuru-2024-2025.pdf" className="dropdown-item">Başvuru</Link>
						<Link href="/belgeler" className="dropdown-item">Belgeler</Link>
						<Link href="/doc/ucretler-2025.pdf" className="dropdown-item">Ücretler</Link>
						<Link href="/akredite-edilen-kurumlar" className="dropdown-item">Akredite Edilen Kurumlar</Link>
						<Link href="/ilgili-kuruluslar" className="dropdown-item">İlgili Kuruluşlar</Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ÇALIŞTAYLAR</a>
					<div className="dropdown-menu">
						<Link href="/kurumlar-icin-egitim-calistayi" className="dropdown-item">Kurumlar için Eğitim Çalıştayı</Link>
						<Link href="/degerlendirici-egitimi-calistayi" className="dropdown-item">Değerlendirici Eğitimi Çalıştayı</Link>
						<Link
                            href="/ogrenci-degerlendirici-egitimi-calistayi"
                            className="dropdown-item">Öğrenci Değerlendirici Eğitimi Çalıştayı</Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">RAPORLAR</a>
					<div className="dropdown-menu">
						<Link href="/hepdak-genel-kurulu-ve-raporlari" className="dropdown-item">Genel Kurul ve Raporları</Link>
						<Link href="/tematik-analiz-raporu" className="dropdown-item">Tematik Analiz Raporu</Link>
						<Link href="/faaliyet-raporlari" className="dropdown-item">Faaliyet Raporları</Link>
						<Link href="/paydas-gorusleri" className="dropdown-item">Paydaş Görüşü Raporları</Link>
						<Link href="/izleme-raporlari" className="dropdown-item">İzleme Raporları</Link>
						<Link href="/surekli-iyilestirme-raporlari" className="dropdown-item">Sürekli İyileştirme Raporları</Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">TOPLANTILAR</a>
					<div className="dropdown-menu">
						<Link href="/heak-toplantilari" className="dropdown-item">HEAK Toplantıları</Link>
						<Link href="/danisma-kurulu-toplantilari" className="dropdown-item">Danışma Kurulu Toplantıları</Link>
						<Link href="/komisyon-toplantilari" className="dropdown-item">Komisyon Toplantıları</Link>
						<Link href="/uluslararasi-toplantilar" className="dropdown-item">Uluslararası Toplantılar ve Faaliyetler</Link>
						<Link href="/paydas-toplantilari" className="dropdown-item">Paydaş Toplantıları</Link>
					</div>
				</li>
			
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">EĞİTİMLER</a>
					<div className="dropdown-menu">
						<Link href="/webinar" className="dropdown-item">Webinarlar</Link>
						<Link href="/sempozyumlar-kongreler" className="dropdown-item">Sempozyumlar / Kongreler</Link>
						<Link href="/egitim-etkinlikleri" className="dropdown-item">Eğitim Etkinlikleri</Link>
						<Link href="/iyi-uygulama-ornekleri" className="dropdown-item">İyi Uygulama Örnekleri</Link>
					</div>
				</li>
	      <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">YAYINLAR</a>
					<div className="dropdown-menu">
						<Link href="/hepdak-sunumlari" className="dropdown-item">HEPDAK Sunumları</Link>
						<Link href="/kaynaklar" className="dropdown-item">Kaynaklar</Link>
						<Link href="/sempozyum-kongre-kitaplari" className="dropdown-item">Sempozyum / Kongre Kitapları</Link>
					</div>
				</li>
	      <li className="nav-item">
	        <Link href="/iletisim" className="nav-link header-nav-link">İLETİŞİM</Link>
	      </li>
	      <li className="nav-item">
	        <Link href="http://hemsis.hepdak.org.tr/" className="nav-link header-nav-link">HEMSİS</Link>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




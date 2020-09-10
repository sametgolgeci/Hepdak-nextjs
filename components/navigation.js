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
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">HAKKIMIZDA</a>
					<div className="dropdown-menu">
						<Link href="/misyon"><a className="dropdown-item">Misyon</a></Link>
						<Link href="/amac-ve-faaliyetler"><a className="dropdown-item">Amaç ve Faaliyetler</a></Link>
						<Link href="/kalite-politikasi"><a className="dropdown-item">Kalite Politikası</a></Link>
						<Link href="/yonetim-ve-denetleme-kurulu"><a className="dropdown-item">Yönetim ve Denetleme Kurulu</a></Link>
						<Link href="/kurul-ve-komisyonlar"><a className="dropdown-item">Kurul ve Komisyonlar</a></Link>
						<Link href="/uluslararasi-uyelik-ve-tescil-yazilari"><a className="dropdown-item">Uluslararası Üyelik ve Tescil Yazıları</a></Link>
			      <Link href="/uye-listesi"><a className="dropdown-item">Üye Listesi</a></Link>
			      <Link href="/hepdak-genel-kurulu-ve-raporlari"><a className="dropdown-item">Genel Kurul ve Raporları</a></Link>
						<Link href="/tematik-analiz-raporu"><a className="dropdown-item">Tematik Analiz Raporu</a></Link>
						<Link href="/faaliyet-raporlari"><a className="dropdown-item">Faaliyet Raporları</a></Link>
						<Link href="/paydas-gorusleri"><a className="dropdown-item">Paydaş Görüşleri</a></Link>
						<Link href="/doc/hepdak-faaliyet-belgesi.pdf"><a className="dropdown-item">Dernek Faaliyet Durumu</a></Link>
			      <Link href="/doc/hepdak_vergi_levhası_2019.pdf"><a className="dropdown-item">İktisadi İşletme</a></Link>
			      <Link href="/doc/hepdak-kira-sozlesmesi.pdf"><a className="dropdown-item">Kira Sözleşmesi</a></Link>
			      <Link href="https://www.facebook.com/pg/hepdak/photos/"><a className="dropdown-item">Fotoğraf Albümü</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">AKREDİTASYON</a>
					<div className="dropdown-menu">
						<Link href="/surec"><a className="dropdown-item">Süreç</a></Link>
						<Link href="/doc/b1-basvuru-word_v5.doc"><a className="dropdown-item">Başvuru</a></Link>
						<Link href="/belgeler"><a className="dropdown-item">Belgeler</a></Link>
						<Link href="/ucretler"><a className="dropdown-item">Ücretler</a></Link>
						<Link href="/akredite-edilen-kurumlar"><a className="dropdown-item">Akredite Edilen Kurumlar</a></Link>
						<Link href="/ilgili-kuruluslar"><a className="dropdown-item">İlgili Kuruluşlar</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ÇALIŞTAY</a>
					<div className="dropdown-menu">
						<Link href="/kurumlar-icin-egitim-calistayi"><a className="dropdown-item">Kurumlar için Eğitim Çalıştayı</a></Link>
						<Link href="/degerlendirici-egitimi-calistayi"><a className="dropdown-item">Değerlendirici Eğitimi Çalıştayı</a></Link>
						<Link href="/ogrenci-degerlendirici-egitimi-calistayi"><a className="dropdown-item">Öğrenci Değerlendirici Eğitimi Çalıştayı</a></Link>
					</div>
				</li>
				<li className="nav-item">
	        <Link href="/webinar"><a className="nav-link header-nav-link">WEBİNAR</a></Link>
	      </li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">TOPLANTILAR</a>
					<div className="dropdown-menu">
						<Link href="/heak-ve-komisyon-toplantilari"><a className="dropdown-item">HEAK ve Komisyon Toplantıları</a></Link>
						<Link href="/tutarlilik-komisyonu-toplantilari"><a className="dropdown-item">Tutarlılık Komisyonu Toplantıları</a></Link>
						<Link href="/takim-baskani-toplantilari"><a className="dropdown-item">Takım Başkanı Toplantıları</a></Link>
						<Link href="/standart-belirleme-ve-gelistirme-komisyonu-toplantilari"><a className="dropdown-item">Standart Belirleme ve Geliştirme Komisyonu Toplantıları</a></Link>
						<Link href="/sempozyumlar"><a className="dropdown-item">Sempozyumlar</a></Link>
						<Link href="/egitim-etkinlikleri"><a className="dropdown-item">Eğitim Etkinlikleri</a></Link>
						<Link href="/cagrili-konusmalar"><a className="dropdown-item">Çağrılı Konuşmalar</a></Link>
					</div>
				</li>
        <li className="nav-item">
	        <Link href="/yayinlar"><a className="nav-link header-nav-link disabled">YAYINLAR</a></Link>
	      </li>
	      <li className="nav-item">
	        <Link href="/iletisim"><a className="nav-link header-nav-link">İLETİŞİM</a></Link>
	      </li>
	      <li className="nav-item">
	        <Link href="/sss"><a className="nav-link header-nav-link disabled">SSS</a></Link>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




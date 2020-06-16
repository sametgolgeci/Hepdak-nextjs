import Link from 'next/link'

const Navigation = () => (
<div className="navigation">
	<div className="navigation-items">
		<div className="navigation-nav">
			<ul className="nav nav-pills">
				<li className="nav-item">
	        <a className="nav-link header-nav-link" href="/">Anasayfa</a>
	      </li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">Hakkımızda</a>
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
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">Akreditasyon</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="/surec">Süreç</a>
						<a className="dropdown-item" href="/doc/b1-basvuru-word_v5.doc">Başvuru</a>
						<a className="dropdown-item" href="/belgeler">Belgeler</a>
						<a className="dropdown-item" href="/ucretler">Ücretler</a>
						<a className="dropdown-item" href="/akredite-edilen-kurumlar">Akredite Edilen Kurumlar</a>
						<a className="dropdown-item" href="/ilgili-kuruluslar">İlgili Kuruluşlar</a>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">Çalıştay</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="/kurumlar-icin-egitim-calistayi">Kurumlar için Eğitim Çalıştayı</a>
						<a className="dropdown-item" href="/degerlendirici-egitimi-calistayi">Değerlendirici Eğitimi Çalıştayı</a>
						<a className="dropdown-item" href="/ogrenci-degerlendirici-egitimi-calistayi">Öğrenci Değerlendirici Eğitimi Çalıştayı</a>
					</div>
				</li>
				<li className="nav-item">
	        <a className="nav-link header-nav-link" href="/webinar">Webinar</a>
	      </li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">Toplantılar</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="/heak-ve-komisyon-toplantilari">HEAK ve Komisyon Toplantıları</a>
						<a className="dropdown-item" href="/tutarlilik-komisyonu-toplantilari">Tutarlılık Komisyonu Toplantıları</a>
						<a className="dropdown-item" href="/takim-baskani-toplantilari">Takım Başkanı Toplantıları</a>
						<a className="dropdown-item" href="/standart-belirleme-ve-gelistirme-komisyonu-toplantilari">Standart Belirleme ve Geliştirme Komisyonu Toplantıları</a>
						<a className="dropdown-item" href="/sempozyumlar">Sempozyumlar</a>
						<a className="dropdown-item" href="/egitim-etkinlikleri">Eğitim Etkinlikleri</a>
						<a className="dropdown-item" href="/cagrili-konusmalar">Çağrılı Konuşmalar</a>
					</div>
				</li>
        <li className="nav-item">
	        <a className="nav-link header-nav-link disabled" href="/yayinlar">Yayınlar</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link header-nav-link" href="/iletisim">İletişim</a>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link header-nav-link disabled" href="/sss">SSS</a>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




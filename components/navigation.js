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
						<a className="dropdown-item" href="/misyon">Misyon</a>
						<a className="dropdown-item" href="/amac-ve-faaliyetler">Amaç ve Faaliyetler</a>
						<a className="dropdown-item" href="/kalite-politikasi">Kalite Politikası</a>
						<a className="dropdown-item" href="/yonetim-ve-denetleme-kurulu">Yönetim ve Denetleme Kurulu</a>
						<a className="dropdown-item" href="/kurul-ve-komisyonlar">Kurul ve Komisyonlar</a>
						<a className="dropdown-item" href="/uluslararasi-uyelik-ve-tescil-yazilari">Uluslararası Üyelik ve Tescil Yazıları</a>
			      <a className="dropdown-item" href="/uye-listesi">Üye Listesi</a>
			      <a className="dropdown-item" href="/hepdak-genel-kurulu-ve-raporlari">Genel Kurul ve Raporları</a>
						<a className="dropdown-item" href="/tematik-analiz-raporu">Tematik Analiz Raporu</a>
						<a className="dropdown-item" href="/faaliyet-raporlari">Faaliyet Raporları</a>
						<a className="dropdown-item" href="/paydas-gorusleri">Paydaş Görüşleri</a>
						<a className="dropdown-item" href="/doc/hepdak-faaliyet-belgesi.pdf">Dernek Faaliyet Durumu</a>
			      <a className="dropdown-item" href="doc/hepdak_vergi_levhasi-v2.pdf">İktisadi İşletme</a>
			      <a className="dropdown-item" href="doc/hepdak-kira-sozlesmesi.pdf">Kira Sözleşmesi</a>
			      <a className="dropdown-item" href="https://www.facebook.com/pg/hepdak/photos/">Fotoğraf Albümü</a>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">Akreditasyon</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="/surec">Süreç</a>
						<a className="dropdown-item" href="doc/b1-basvuru-word_v5.doc">Başvuru</a>
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
	        <a className="nav-link header-nav-link" href="https://us02web.zoom.us/meeting/register/tZMsce6vrj4vEtLhsdzqJtHlAy6_3yRhbk7t">Webinar</a>
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




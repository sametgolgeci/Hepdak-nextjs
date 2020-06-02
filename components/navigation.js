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
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown" href="/hakkimizda">Hakkımızda</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="/misyon">Misyon</a>
						<a className="dropdown-item" href="/amac-ve-faaliyetler">Amaç ve Faaliyetler</a>
						<a className="dropdown-item" href="/kalite-politikasi">Kalite Politikası</a>
						<a className="dropdown-item" href="/yonetim-ve-denetleme-kurulu">Yönetim ve Denetleme Kurulu</a>
						<a className="dropdown-item" href="/kurul-ve-komisyonlar">Kurul ve Komisyonlar</a>
						<a className="dropdown-item" href="/hepdak-raporlari">Hepdak Raporları</a>
						<a className="dropdown-item" href="/uluslararasi-uyelik-ve-tescil-yazilari">Uluslararası Üyelik ve Tescil Yazıları</a>
			      <a className="dropdown-item" href="/uye-listesi">Üye Listesi</a>
			      <a className="dropdown-item" href="doc/hepdak_vergi_levhasi-v2.pdf">İktisadi İşletme</a>
			      <a className="dropdown-item" href="https://www.facebook.com/pg/hepdak/photos/">Fotoğraf Albümü</a>
					</div>
				</li>
				<li className="nav-item">
	        <a className="nav-link header-nav-link" href="/akreditasyon">Akreditasyon</a>
	      </li>
        <li className="nav-item">
          <a className="nav-link header-nav-link" href="/calistay">Çalıştay</a>
        </li>
			  <li className="nav-item">
          <a className="nav-link header-nav-link" href="/toplantilar">Toplantılar</a>
        </li>
	      <li className="nav-item">
	        <a className="nav-link header-nav-link" href="/iletisim">İletişim</a>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




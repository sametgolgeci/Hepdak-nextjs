import Link from 'next/link'

const Header = () => (
<div className="header">
	<div className="header-items">
		<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="img/logoblue.png" title="HEPDAK"></img></a></Link>
		</div>
		<div className="header-nav">
			<ul className="nav nav-pills">
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss" data-toggle="dropdown" href="/hakkimizda">Hakkımızda</a>
					<div className="dropdown-menu">
						<a className="dropdown-item" href="/misyon">Misyon</a>
						<a className="dropdown-item" href="/amac-ve-faaliyetler">Amaç ve Faaliyetler</a>
						<a className="dropdown-item" href="/kalite-politikasi">Kalite Politakası</a>
						<a className="dropdown-item" href="/yonetim-ve-denetleme-kurulu">Yönetim ve Denetleme Kurulu</a>
						<a className="dropdown-item" href="/kurul-ve-komisyonlar">Kurul ve Komisyonlar</a>
						<a className="dropdown-item" href="/hepdak-raporlari">Hepdak Raporları</a>
						<a className="dropdown-item" href="/uluslararasi-uyelik-ve-tescil-yazilari">Uluslararası Üyelik ve Tescil Yazıları</a>
			      <a className="dropdown-item" href="/uye-listesi">Üye Listesi</a>
			      <a className="dropdown-item" href="doc/hepdak_vergi_levhasi-v2.pdf">İktisadi İşletme</a>
					</div>
				</li>
				<li className="nav-item">
	        <a className="nav-link" href="/akreditasyon">Akreditasyon</a>
	      </li>
			  <li className="nav-item dropdown">
	        <a className="nav-link dropdown-toggle diss" data-toggle="dropdown" href="#">Çalıştay</a>
	        <div className="dropdown-menu">
	          <a className="dropdown-item" href="#">Kurumlar için Eğitim Çalıştayı</a>
	          <a className="dropdown-item" href="#">Değerlendirici Eğitim Çalıştayı</a>
            <a className="dropdown-item" href="#">Öğrenci Değerlendirici Eğitimi Çalıştayı</a>
          </div>
	      </li>
			  <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss" data-toggle="dropdown" href="#">Toplantılar</a>
	        <div className="dropdown-menu">
	          <a className="dropdown-item" href="#">HEAK Toplantıları</a>
	          <a className="dropdown-item" href="#">Tutarlılık Komisyonu Toplantıları</a>
	          <a className="dropdown-item" href="#">Standartları Belirleme ve Geliştirme Komisyonu Toplantıları</a>
	          <a className="dropdown-item" href="#">Takım Başkanları Toplantıları</a>
					</div>
	      </li>
	      <li className="nav-item">
	        <a className="nav-link" href="/hakkimizda">İletişim</a>
	      </li>
			</ul>
		</div>
		<div>
			<img className="header-ataturk" src="img/ataturk.png"></img>
		</div>
	</div>
</div>
)
export default Header
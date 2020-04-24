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
						<a className="dropdown-item" href="/">Misyon</a>
						<a className="dropdown-item" href="/">Amaç ve Faaliyetler</a>
						<a className="dropdown-item" href="#">Kalite Politakası</a>
						<a className="dropdown-item" href="#">Yönetim Kurulu</a>
						<a className="dropdown-item" href="#">Denetleme Kurulu</a>
						<a className="dropdown-item" href="#">Kurul ve Komisyonlar</a>
						<a className="dropdown-item" href="#">Hepdak Raporları**</a>
						<a className="dropdown-item" href="#">Tescil Yazıları</a>
			      <a className="dropdown-item" href="#">Uluslararası Üyelik</a>
			      <a className="dropdown-item" href="#">Üye Listesi</a>
			      <a className="dropdown-item" href="#">İktisadi İşletme</a>
			      <a className="dropdown-item" href="#">Dernek Faaliyet Durumu</a>
			      <a className="dropdown-item" href="#">Kalite Değerlendirme Tescil Belgesi</a>
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
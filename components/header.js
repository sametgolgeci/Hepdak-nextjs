import Link from 'next/link'

const Header = () => (
<div className="header">
	<div className="header-items">
		<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="img/logoblue.png" title="HEPDAK"></img></a></Link>
		</div>
		<div>
			<div className="header-name">Hemşirelik Eğitim Programları Değerlendirme ve Akreditasyon Derneği</div>
			<div className="header-ingname">Association for Evaluation and Accreditation of Nursing Programs</div>
		</div>
		<div>
			<img className="header-ataturk" src="img/ataturk.png"></img>
		</div>
	</div>
</div>
)
export default Header
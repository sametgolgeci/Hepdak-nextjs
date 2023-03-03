import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
<div className="header">
	<div className="header-up">
		<div className="header-up-item"><Link href="https://www.instagram.com/hepdak/"><a><FontAwesomeIcon className="header-icon" icon={faInstagram}/>HEPDAK</a></Link></div>
		<div className="header-up-item"><Link href="https://www.youtube.com/channel/UC96oXHHypl1WFXpOkvwwj9A/featured"><a><FontAwesomeIcon className="header-icon" icon={faYoutube}/>HEPDAK TV</a></Link></div>
		<div className="header-up-item"><Link href="/sss"><a>SSS</a></Link></div>
		<div className="header-up-item"><Link href="/"><a>TR</a></Link></div>
	</div>
	<div className="header-items">
		<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="../img/logo/logo-tek.jpg" title="HEPDAK"></img></a></Link>
			<Link href="/"><a><img className="header-logo-img" src="../img/logo/logo-yazi.jpg" title="HEPDAK"></img></a></Link>
			<Link href="/"><a><img className="header-logo-img" src="../img/logo/logo-100.jpg" title="HEPDAK" style={{padding: 0.5 + 'rem'}}></img></a></Link>
		</div>
	</div>
</div>
)
export default Header
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Header = () => (
<div className="header">
	<div className="header-up">
		<div className="header-up-item"><Link href="https://www.instagram.com/hepdak/"><FontAwesomeIcon className="header-icon" icon={faInstagram}/>HEPDAK</Link></div>
		<div className="header-up-item"><Link href="https://www.youtube.com/channel/UC96oXHHypl1WFXpOkvwwj9A/featured"><FontAwesomeIcon className="header-icon" icon={faYoutube}/>HEPDAK TV</Link></div>
		<div className="header-up-item"><Link href="/sss">SSS</Link></div>
		<div className="header-up-item"><Link href="/en">EN</Link></div>
	</div>
	<div className="header-items">
		<div className="header-logo">
			<Link href="/"><img className="header-logo-img" src="../img/logo/logo-tek.jpg" title="HEPDAK"></img></Link>
			<Link href="/"><img className="header-logo-img header-logo-text" src="../img/logo/logo-yazi.jpg" title="HEPDAK"></img></Link>
		</div>
	</div>
</div>
)
export default Header
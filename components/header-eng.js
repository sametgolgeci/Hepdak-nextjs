import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { useRouter } from "next/router";
import { trToEn, enToTr } from "../public/utils/languageRoutes";

const Header = () => {
  	const router = useRouter();

  	const switchLanguage = (e) => {
    	e.preventDefault();

    	const currentPath = router.pathname;

    	const target =
      	trToEn[currentPath] ||
      	enToTr[currentPath] ||
      	"/";

    	router.push(target);
  	};

  	return (
	<div className="header">
		<div className="header-up">
			<div className="header-up-item"><Link href="https://www.instagram.com/hepdak/"><FontAwesomeIcon className="header-icon" icon={faInstagram}/>HEPDAK</Link></div>
			<div className="header-up-item"><Link href="https://www.youtube.com/channel/UC96oXHHypl1WFXpOkvwwj9A/featured"><FontAwesomeIcon className="header-icon" icon={faYoutube}/>HEPDAK TV</Link></div>
			<div className="header-up-item"><Link href="/sss">SSS</Link></div>
			<div className="header-up-item"><a href="#" onClick={switchLanguage}>TR</a></div>
		</div>
		<div className="header-items">
			<div className="header-logo">
				<Link href="/en"><img className="header-logo-img" src="../img/logo/logo-tek.jpg" title="HEPDAK"></img></Link>
				<Link href="/en"><img className="header-logo-img header-logo-text" src="../img/logo/logo-yazi.jpg" title="HEPDAK"></img></Link>
			</div>
		</div>
	</div>
  	);
};

export default Header;
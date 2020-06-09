import Link from 'next/link'

const Header = () => (
<div className="header">
	<div className="header-items">
		{/*<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="img/logoblue.png" title="HEPDAK"></img></a></Link>
		</div>
		<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="img/hepdaklogouzun.png" title="HEPDAK"></img></a></Link>
		</div>
		<div>
			<img className="header-ataturk" src="img/ataturk.png"></img>
		</div>*/}
		<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="img/hepdak-logo.png" title="HEPDAK"></img></a></Link>
		</div>
	</div>
</div>
)
export default Header
import Link from 'next/link'

const Header = () => (
<div className="header">
	<div className="header-items">
		<div className="header-logo">
			<Link href="/"><a><img className="header-logo-img" src="img/hepdak-yatay.jpg" title="HEPDAK"></img></a></Link>
		</div>
	</div>
</div>
)
export default Header
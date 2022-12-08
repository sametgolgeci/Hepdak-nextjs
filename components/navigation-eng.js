import Link from 'next/link'

const Navigation = () => (
<div className="navigation">
	<div className="navigation-items">
		<div className="navigation-nav">
			<ul className="nav nav-pills">
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ABOUT US</a>
					<div className="dropdown-menu">
						<Link href="/misyon-vizyon"><a className="dropdown-item">Mission, Vision</a></Link>
						<Link href="/doc/hepdak_stratejik_plan.pdf"><a className="dropdown-item">Strategic Plan</a></Link>
						<Link href="/amac-ve-faaliyetler"><a className="dropdown-item">Purpose and Activities</a></Link>
						<Link href="/kalite-politikasi"><a className="dropdown-item">Quality Policy</a></Link>
						<Link href="/doc/hepdak_org_sema.pdf"><a className="dropdown-item">HEPDAK Organizational Structure</a></Link>
						<Link href="/kurul-ve-komisyonlar"><a className="dropdown-item">Boards and Commissions</a></Link>
						<Link href="/uye-listesi"><a className="dropdown-item">Member List</a></Link>
						<Link href="/idari-personel"><a className="dropdown-item">Administrative Staff</a></Link>
						<Link href="/tescil-yazilari"><a className="dropdown-item">Registration/Registry letters</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">ACCREDITATION</a>
					<div className="dropdown-menu">
						<Link href="/doc/b1-basvuru-2023-2024.doc"><a className="dropdown-item">Application</a></Link>
						<Link href="/belgeler"><a className="dropdown-item">Documents</a></Link>
						<Link href="/ucretler"><a className="dropdown-item">Fees</a></Link>
						<Link href="/akredite-edilen-kurumlar"><a className="dropdown-item">Accredited Programs</a></Link>
						<Link href="/ilgili-kuruluslar"><a className="dropdown-item">Related Organizations</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">WORKSHOPS</a>
					<div className="dropdown-menu">
						<Link href="/kurumlar-icin-egitim-calistayi"><a className="dropdown-item">Training Workshop for Institutions</a></Link>
						<Link href="/degerlendirici-egitimi-calistayi"><a className="dropdown-item">Evaluator Training Workshop</a></Link>
						<Link href="/ogrenci-degerlendirici-egitimi-calistayi"><a className="dropdown-item">Student Evaluator Training Workshop</a></Link>
					</div>
				</li>
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">REPORTS</a>
					<div className="dropdown-menu">
						<Link href="/hepdak-genel-kurulu-ve-raporlari"><a className="dropdown-item">General Assembly and Reports</a></Link>
						<Link href="/tematik-analiz-raporu"><a className="dropdown-item">Thematic Analysis Report</a></Link>
						<Link href="/faaliyet-raporlari"><a className="dropdown-item">Activity Reports/Annual Reports</a></Link>
						<Link href="/paydas-gorusleri"><a className="dropdown-item">Stakeholder Opinion Reports</a></Link>
					</div>
				</li>
        <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">MEETINGS</a>
					<div className="dropdown-menu">
						<Link href="/heak-ve-komisyon-toplantilari"><a className="dropdown-item">HEAK and Commission Meetings</a></Link>
						<Link href="/tutarlilik-komisyonu-toplantilari"><a className="dropdown-item">Consistency Committee Meetings</a></Link>
						<Link href="/takim-baskani-toplantilari"><a className="dropdown-item">Team Leader Meetings</a></Link>
						<Link href="/standart-belirleme-ve-gelistirme-komisyonu-toplantilari"><a className="dropdown-item">Standard Setting and Development Committee Meetings</a></Link>
						<Link href="/uluslararasi-toplantilar"><a className="dropdown-item">International Meetings and Activities</a></Link>
						<Link href="/paydas-toplantilari"><a className="dropdown-item">Stakeholder Meetings</a></Link>
					</div>
				</li>
			
				<li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">EDUCATİONS</a>
					<div className="dropdown-menu">
						<Link href="/webinar"><a className="dropdown-item">Webinars</a></Link>
						<Link href="/sempozyumlar"><a className="dropdown-item">Symposiums</a></Link>
						<Link href="/egitim-etkinlikleri"><a className="dropdown-item">Educational Activities</a></Link>
					</div>
				</li>
	      <li className="nav-item dropdown">
					<a className="nav-link dropdown-toggle diss header-nav-link" data-toggle="dropdown">PUBLICATIONS</a>
					<div className="dropdown-menu">
						<Link href="/hepdak-sunumlari"><a className="dropdown-item">HEPDAK Presentations</a></Link>
						<Link href="/kaynaklar"><a className="dropdown-item">Resources</a></Link>
						<Link href="/sempozyum-kitaplari"><a className="dropdown-item">Symposium Books</a></Link>
					</div>
				</li>
	      <li className="nav-item">
	        <Link href="/iletisim"><a className="nav-link header-nav-link">CONTACT</a></Link>
	      </li>
	      <li className="nav-item">
	        <Link href="http://hemsis.hepdak.org.tr/"><a className="nav-link header-nav-link">HEMSİS</a></Link>
	      </li>
			</ul>
		</div>
	</div>
</div>
)
export default Navigation




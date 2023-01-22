import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Tescil = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | HEPDAK Registration/Registry Letters</title>
	    </Head>
	    <div className="genel">
	    	<h1>HEPDAK Authorization Process</h1>
	    	<div className="jumbotron">
	    		<p>HEPDAK was evaluated by the Council of Higher Education (YÖK) for the first
time in 2014 and was recognized as a national quality assurance institution for the
accreditation of nursing programs for a period of two years at the meeting of the
Council of Higher Education General Assembly held on 25.12.2014 and it was
found appropriate to give HEPDAK a Quality Assessment and Registration
Certificate with a validity period of two years.</p>
	    		<p><Link href="doc/tescil_belgesi_2014.png"><a>Click for the relevant YOK notification</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK was re-evaluated by YÖK in 2017, and at the meeting of General
Assembly held on 15.02.2017, it was decided to extend the validity period of the
Quality Assessment Registration Certificate for two years as of 25.12.2016 by
considering the opinion of the Turkish Higher Education Quality Council(THEQC).</p>
	    		<p><Link href="doc/tescil_belgesi_2017.jpg"><a>Click for the relevant YÖK notification</a></Link></p>
	    	</div>
	    	<div className="jumbotron">
	    		<p>HEPDAK was re-evaluated by the THEQC in 2018, and at the meeting of the
Board held on 26.12.2018, it was decided to extend the validity period of the
Quality Assessment and Registration Certificate for five years till 25.12.2023.</p>
	    		<p><Link href="doc/HEPDAK-2019-tescilbelge.jpg"><a>Click for the relevant Higher Education Quality Board letter</a></Link></p>
	    		<p><Link href="doc/HEPDAK-2019-TESCIL.jpg"><a>Click for the related THEQC article</a></Link></p>
	    	</div>
	    	<h1>HEPDAK Registration Application Letters
and THEQC evaluation Reports</h1>
	    	<h6>2022</h6>
	    	<p className="madde-p">• <Link href="doc/hepdak_2021_izleme_raporu.pdf"><a>HEPDAK Monitoring Report for 2021</a></Link></p>	
	    	<h6>2018</h6>	
	    	<p className="madde-p">• <Link href="doc/2018_yokak_hepdak_degerlendirme_raporu.pdf"><a>THEQC, HEPDAK Evaluation Report</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018-hepdak-yokak-tescil-basvuru-raporu.pdf"><a>THEQC, Registration Application Report</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2018-hepdak-raporunda-yer-alan-belgeler.pdf"><a>Documents Included in the HEPDAK Report</a></Link></p>
	    	<h6>2016</h6>
	    	<p className="madde-p">• <Link href="doc/2016-yokak-hepdak-degerlendirme-raporu.pdf"><a>YÖK, HEPDAK Evaluation Report</a></Link></p>
	    	<p className="madde-p">• <Link href="doc/2016-hepdak-tescil-basvuru-revize-raporu.pdf"><a>HEPDAK Registration Application Report</a></Link></p>
	    	<h6>2013</h6>
	    	<p className="madde-p">• <Link href="doc/2013-hepdak-tescil-basvuru-raporu.pdf"><a>YÖK, HEPDAK Registration Application Report</a></Link></p>
	    </div>
    </MasterPage>
)
export default Tescil

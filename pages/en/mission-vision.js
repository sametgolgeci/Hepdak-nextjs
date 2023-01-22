import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Misyon = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Mission, Vision</title>
	    </Head>
	    <div className="genel"><h1>Mission, Vision</h1></div>
	    <div className="jumbotron">
	    	<p><strong>Mission of HEPDAK </strong>is to assure quality and innovation in the development of
nursing science, education, care, and public health by evaluating and monitoring
undergraduate and graduate nursing education programs according to the ever-
evolving standards.</p>
	    </div>
	    <div className="jumbotron">
	    	<p><strong>Vision of HEPDAK; </strong>is to contribute to the transformation of health services and
health promotion by nurses through enhancing the quality of nursing education in
Turkey.</p>
	    </div>
    </MasterPage>
)
export default Misyon

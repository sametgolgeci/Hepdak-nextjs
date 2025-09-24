import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Symposium = () => (
    <MasterPage>
	    <Head>
        <title>HEPDAK | Symposiums</title>
      </Head>
      <div className="genel">
        <h1>Symposiums</h1>
        <h4 className="sempozyum-title sempozyum-alt">The 2nd International Congress on the Future of Nursing Education (September 17-19, 2025)</h4>
        <h4 className="sempozyum-title sempozyum-alt">1st International Congress on the Future of Nursing Education: Innovations Brought by Accreditation and the Transformation of Nursing Education (September 20-22, 2023)</h4>
        <h4 className="sempozyum-title sempozyum-alt">The Future of Nursing Education 3: Approaches to Improving Education During the Pandemic Symposium (September 27-29, 2021)</h4>
        <h4 className="sempozyum-title sempozyum-alt">Future of Nursing Education Symposium 2: Assessment, Evaluation, Program Evaluation and Continuous Improvement (September 04-06, 2019)</h4>
        <h4 className="sempozyum-title sempozyum-alt">The Future of Nursing Education: Accreditation, Standards, Good Practice Examples (June 19-20, 2018)</h4>
        <div className="safe"></div>
      </div>
    </MasterPage>
)
export default Symposium

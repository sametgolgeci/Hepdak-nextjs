import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Symposium = () => (
    <MasterPage>
	    <Head>
        <title>HEPDAK | Good Practice Examples</title>
      </Head>
      <div className="genel">
        <h1>Good Practice Examples</h1>
        <p className="madde-p"><Link href="https://vimeo.com/user208483267/review/875876969/c6feebe682"><a target="_blank">HEGK 2023 (September 20-22, 2023)</a></Link></p>
        <p className="madde-p"><Link href="https://www.youtube.com/watch?v=qge5DtnNH0A"><a target="_blank">The Future of Nursing Education 3 (September 27-29, 2021)</a></Link></p>
      </div>
    </MasterPage>
)
export default Symposium

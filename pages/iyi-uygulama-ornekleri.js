import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | İyi Uygulama Örnekleri</title>
	    </Head>
      <div className="genel">
        <h1>İyi Uygulama Örnekleri</h1>
        <p className="madde-p"><Link href="https://vimeo.com/user208483267/review/875876969/c6feebe682"><a target="_blank">HEGK 2023 (20-22 Eylül 2023)</a></Link></p>
        <p className="madde-p"><Link href="https://www.youtube.com/watch?v=qge5DtnNH0A"><a target="_blank">Hemşirelik Eğitiminin Geleceği 3 (27-29 Eylül 2021)</a></Link></p>        
      </div>
    </MasterPage>
)
export default Kaynak
import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Basvuru = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Başvurular</title>
      </Head>
      <div className="genel">
        <h1>Başvurular</h1>
        <p className="madde-p">HEPDAK Değerlendirme ve Akreditasyon Süreci <Link href="doc/b2_v1.pdf">Sürüm 1.0</Link></p>
        <p className="madde-p">HEPDAK Akreditasyon Süreci Akış Şeması <Link href="doc/d1_v1.pdf">Sürüm 1.0</Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Basvuru

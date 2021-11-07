import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Belge = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Diğer Belgeler</title>
      </Head>
      <div className="genel">
        <h1>Diğer Belgeler</h1>
        <p className="madde-p">Değerlendirme Takım Üyelerinin Değerlendirilmesi <Link href="doc/b10_v1.pdf"><a>Sürüm 1.0</a></Link> | <strong>Sürüm 2.0</strong> (<Link href="doc/b10_v2.pdf"><a>PDF</a></Link> | <Link href="doc/b10_v2.doc"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Değerlendirmelerine Öğrenci Değerlendirici Katılımı Uygulama Esasları <Link href="doc/b11_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b11_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b11_v3.pdf"><a>Sürüm 3.0</a></Link> | <Link href="doc/b11_v4.pdf"><a>Sürüm 4.0</a></Link></p>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Belge

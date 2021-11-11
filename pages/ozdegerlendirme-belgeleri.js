import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Belge = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Özdeğerlendirme Belgeleri</title>
      </Head>
      <div className="genel">
        <h1>Özdeğerlendirme Belgeleri</h1>
        <p className="madde-p">Hemşirelik Lisans Eğitim Programı Standartları <strong>Sürüm 4.1 </strong> (<Link href="doc/b3_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b3_v4_1.doc"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Özdeğerlendirme Raporu Hazırlama Kılavuzu <strong>Sürüm 5.1 </strong> (<Link href="doc/b4_v5_1.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v5_1.doc"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Değerlendirme Kılavuzu <Link href="doc/b5_v3.pdf"><a>Sürüm 3.0</a></Link></p>
        <p className="madde-p">Program Değerlendiricisi Raporu <strong>Sürüm 4.1</strong> (<Link href="doc/b6_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v4_1.docx"><a>Word</a></Link>)</p>
        <p className="madde-p">Program Değerlendirme Çizelgesi <strong>Sürüm 5.1</strong> (<Link href="doc/b7_v5_1.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v5_1.doc"><a>Word</a></Link>)</p>
        </div>
        <div className="safe"></div>
    </MasterPage>
)
export default Belge

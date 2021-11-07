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
        <p className="madde-p">Hemşirelik Lisans Eğitim Programı Standartları <Link href="doc/b3_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b3_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b3_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b3_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b3_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 4.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b3_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b3_v4_1.doc"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Özdeğerlendirme Raporu Hazırlama Kılavuzu <Link href="doc/b4_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b4_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b4_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b4_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 4.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b4_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v4_1.doc"><a>Word</a></Link>) | <strong>Sürüm 5.0</strong> (<Link href="doc/b4_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v5.doc"><a>Word</a></Link>) | <strong>Sürüm 5.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b4_v5_1.pdf"><a>PDF</a></Link> | <Link href="doc/b4_v5_1.doc"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Değerlendirme Kılavuzu <Link href="doc/b5_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b5_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b5_v3.pdf"><a>Sürüm 3.0</a></Link></p>
        <p className="madde-p">Program Değerlendiricisi Raporu <Link href="doc/b6_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b6_v2.pdf"><a>Sürüm 2.0</a></Link> | <strong>Sürüm 3.0</strong> (<Link href="doc/b6_v3.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v3.doc"><a>Word</a></Link>) | <strong>Sürüm 3.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b6_v3_1.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v3_1.doc"><a>Word</a></Link>) | <strong>Sürüm 4.0</strong> (<Link href="doc/b6_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 4.1</strong> (<Link href="doc/b6_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b6_v4_1.docx"><a>Word</a></Link>)</p>
        <p className="madde-p">Program Değerlendirme Çizelgesi <Link href="doc/b7_v1.pdf"><a>Sürüm 1.0</a></Link> | <Link href="doc/b7_v2.pdf"><a>Sürüm 2.0</a></Link> | <Link href="doc/b7_v3.pdf"><a>Sürüm 3.0</a></Link> | <strong>Sürüm 4.0</strong> (<Link href="doc/b7_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v4.doc"><a>Word</a></Link>) | <strong>Sürüm 4.1 <span className="belge-span">Güncel</span></strong>  (<Link href="doc/b7_v4_1.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v4_1.docx"><a>Word</a></Link>) | <strong>Sürüm 5.0</strong> (<Link href="doc/b7_v5.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v5.doc"><a>Word</a></Link>) | <strong>Sürüm 5.1 <span className="belge-span">Güncel</span></strong> (<Link href="doc/b7_v5_1.pdf"><a>PDF</a></Link> | <Link href="doc/b7_v5_1.doc"><a>Word</a></Link>)</p>
        </div>
        <div className="safe"></div>
    </MasterPage>
)
export default Belge

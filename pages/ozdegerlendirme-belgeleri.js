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
        <p className="madde-p">Hemşirelik Lisans Eğitim Programı Standartları <strong>Sürüm 6.0 </strong> (<Link href="doc/b3_v6.pdf">PDF</Link> | <Link href="doc/b3_v6.doc">Word</Link>)</p>
        <p className="madde-p">HEPDAK Özdeğerlendirme Raporu Hazırlama Kılavuzu <strong>Sürüm 6.0 </strong> (<Link href="doc/b4_v6.pdf">PDF</Link> | <Link href="doc/b4_v6.docx">Word</Link>)</p>
        <p className="madde-p">HEPDAK Değerlendirme Kılavuzu <Link href="doc/b5_v6.pdf">Sürüm 6.0</Link></p>
        <p className="madde-p">Program Değerlendiricisi Raporu <strong>Sürüm 6.0</strong> (<Link href="doc/b6_v6.pdf">PDF</Link> | <Link href="doc/b6_v6.docx">Word</Link>)</p>
        <p className="madde-p">Program Değerlendirme Çizelgesi <strong>Sürüm 6.0</strong> (<Link href="doc/b7_v6.pdf">PDF</Link> | <Link href="doc/b7_v6.doc">Word</Link>)</p>
        </div>
        <div className="safe"></div>
    </MasterPage>
)
export default Belge

import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Rapor = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Rapor Hazırlama</title>
      </Head>
      <div className="genel">
        <h1>Rapor Hazırlama</h1>
        <p className="madde-p">Ara Rapor Hazirlarken Dikkat Edilmesi Gereken Konular <Link href="doc/b8_v2.pdf"><a>Sürüm 2.0</a></Link></p>
        <p className="madde-p">Özdeğerlendirme Raporu Hazırlarken Dikkat Edilmesi Gereken Noktalar <Link href="doc/b9_v2.pdf"><a>Sürüm 2.0</a></Link></p>
        <p className="madde-p">HEPDAK Öğrenci Değerlendirici Raporu <strong>Sürüm 4.0</strong> (<Link href="doc/b12_v4.pdf"><a>PDF</a></Link> | <Link href="doc/b12_v4.doc"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Akredite Eğitim Programları İçin Gelişim Raporu Hazırlama Rehberi <strong>Sürüm 2.1</strong> (<Link href="doc/b13_v2_1.pdf"><a>PDF</a></Link> | <Link href="doc/b13_v2_1.docx"><a>Word</a></Link>)</p>
        <p className="madde-p">HEPDAK Raporları Yazım Kuralları <Link href="doc/c1_v1.pdf"><a>Sürüm 1.0</a></Link></p>  
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Rapor

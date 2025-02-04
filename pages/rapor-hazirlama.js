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
        <p className="madde-p">Ara Rapor Hazirlarken Dikkat Edilmesi Gereken Konular <Link href="doc/b8_v2.pdf">Sürüm 2.0</Link></p>
        <p className="madde-p">Özdeğerlendirme Raporu Hazırlarken Dikkat Edilmesi Gereken Noktalar <Link href="doc/b9_v2.pdf">Sürüm 2.0</Link></p>
        <p className="madde-p">HEPDAK Öğrenci Değerlendirici Raporu <strong>Sürüm 4.0</strong> (<Link href="doc/b12_v4.pdf">PDF</Link> | <Link href="doc/b12_v4.doc">Word</Link>)</p>
        <p className="madde-p">HEPDAK Akredite Eğitim Programları İçin Gelişim Raporu Hazırlama Rehberi <strong>Sürüm 2.2</strong> (<Link href="doc/b13_v2_2.pdf">PDF</Link> | <Link href="doc/b13_v2_2.docx">Word</Link>)</p>
        <p className="madde-p">HEPDAK Raporları Yazım Kuralları <Link href="doc/c1_v1.pdf">Sürüm 1.0</Link></p>  
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Rapor

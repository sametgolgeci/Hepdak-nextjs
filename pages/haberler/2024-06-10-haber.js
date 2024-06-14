import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi (10 Haziran 2024)</title>
      </Head>
      <div className="main-top-second hover-out">
                <div className="main-top-second-title">YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi (10 Haziran 2024)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK faaliyetleri Yükseköğretim Kalite Kurulu (YÖKAK)
tarafından izlenmektedir. 2023 yılı izleme toplantısı YÖKAK
İzleme Yetkilisi Prof. Dr. Hüseyin Kara tarafından 10 Haziran
2024 tarihinde gerçekleştirilmiştir. İlk oturumda izleme yetkilisi
Prof. Dr. Hüseyin Kara ile tanışma sonrası HEPDAK Başkanı
Prof. Dr. Dilek ÖZMEN 2023 yılına ilişkin yürütülen HEPDAK
faaliyetleri hakkında bir sunum yapmıştır. Sonraki oturumda
akreditasyon kurulu ve komisyonlarını temsilen HEPDAK
üyeleri, akademik ve öğrenci değerlendiriciden oluşan paydaşlar
ile odak grup görüşmeleri gerçekleştirilmiştir.</p>
                </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

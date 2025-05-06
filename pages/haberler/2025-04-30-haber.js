import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi (30 Nisan 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi (30 Nisan 2025)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK 2024 yılı faaliyetlerinin Yükseköğretim Kalite Kurulu (YÖKAK) tarafından izlemi YÖKAK İzleme Yetkilisi Prof. Dr. Hüseyin Ağır tarafından 30 Nisan 2025 tarihinde gerçekleştirilmiştir. İlk oturumda, izleme yetkilisi Prof. Dr. Hüseyin Ağır ile tanışma sonrası HEPDAK Başkanı Prof. Dr. Dilek ÖZMEN 2024 yılına ilişkin yürütülen HEPDAK faaliyetleri hakkında bir sunum yapmıştır. Yönetim Kurulu Başkanı ve Yönetim Kurulu Üyeleri ile gerçekleşen görüşmenin ardından akreditasyon kurulu üyeleri ve i komisyon/komite üyeleri (Standart, İtiraz, Tutarlılık, vb.) idari personel ile görüşmeler gerçekleştirilmiştir. İzleme ziyareti YÖKAK İzleme Yetkilisi Prof. Dr. Hüseyin Ağır’ın değerlendiriciler ile yaptığı görüşme ile sona ermiştir.</p>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | 2025 HEPDAK Değerlendirme Takım Üyeleri Toplantısı (19 Haziran 2025)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">2025 HEPDAK Değerlendirme Takım Üyeleri Toplantısı (19 Haziran 2025)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK Yönetim Kurulu, 19 Haziran 2025 tarihinde 2025-2026 dönemi HEPDAK değerlendirme takım üyeleri ile çevrimiçi toplantı gerçekleştirmiştir. Toplantıya HEPDAK yönetim kurulu üyeleri ve takım üyeleri olmak üzere toplam 37 kişi katılmıştır. Toplantıda 2025-2026 akreditasyon değerlendirme sürecinde değerlendirme takımları ve paydaşlardan alınan geri bildirimler doğrultusunda değerlendirme sürecinde yapılan değişikliklere, ÖDR kılavuzu 6.0’ın değerlendirilmesinde tutarlığı artıracak dikkat edilmesi gereken noktalar ve değerlendirme sürecinin tümüne ilişkin hatırlatmalar yapılmıştır. Toplantıda değerlendirme takım üyelerinden gelen sorular HEPDAK yönetim kurulu üyeleri tarafından yanıtlanmıştır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/degerlendirme-takim-uyeleri/01.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/degerlendirme-takim-uyeleri/01.png" alt="2025 HEPDAK Değerlendirme Takım Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/degerlendirme-takim-uyeleri/02.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/degerlendirme-takim-uyeleri/02.png" alt="2025 HEPDAK Değerlendirme Takım Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/degerlendirme-takim-uyeleri/03.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/degerlendirme-takim-uyeleri/03.png" alt="2025 HEPDAK Değerlendirme Takım Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2025/degerlendirme-takim-uyeleri/04.png" target="_blank"><img className="calistay-img" src="/img/haberler/2025/degerlendirme-takim-uyeleri/04.png" alt="2025 HEPDAK Değerlendirme Takım Üyeleri Toplantısı"/></a></div>
                  </div>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK 2023 yılı Değerlendiriciler Toplantısı - 5 (11 Ocak 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">HEPDAK 2023 yılı Değerlendiriciler Toplantısı - 5 (11 Ocak 2023)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK Yönetim Kurulu, 11 Ocak 2023 tarihinde değerlendiricilerle çevrimiçi
değerlendirme toplantısını gerçekleştirmiştir. Toplantıya 17’si takım başkanı olmak
üzere 22 kişi katılmıştır. Toplantıda katılımcılar değerlendirme süreci (çevrim içi ve
yüz yüze süreçler dahil) değerlendirilmiş ve süreçlerin iyileştirilmesi, standartlar ve
program değerlendirme çizelgesine ilişkin önerilerini paylaşmışlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-6 col-sm-12"><a href="/img/haberler/2023-degerlendiriciler-toplantisi/01.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-degerlendiriciler-toplantisi/01.png" alt="Değerlendiriciler Toplantısı 5"/></a></div>
                    <div className="col-md-6 col-sm-12"><a href="/img/haberler/2023-degerlendiriciler-toplantisi/02.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-degerlendiriciler-toplantisi/02.png" alt="Değerlendiriciler Toplantısı 5"/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK 2023 yılı Öğrenci Değerlendirici Toplantısı - 5 (25 Ocak 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">HEPDAK 2023 yılı Öğrenci Değerlendirici Toplantısı - 5 (25 Ocak 2023)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK değerlendirme sürecinin iyileştirilmesi için takım üyelerinin geri bildirimlerini
almaya öğrenci değerlendiricilerle devam etmiştir. HEPDAK Yönetim Kurulu, 25
Ocak 2023 tarihinde öğrenci değerlendiriciler ile çevrimiçi değerlendirme
toplantısını gerçekleştirmiştir. Toplantıya 11 öğrenci değerlendirici katılmıştır.
Toplantıda öğrenci değerlendiriciler kurum değerlendirme ziyaretleri ve
değerlendirme sürecine ilişkin deneyimlerini, görüş ve önerilerini paylaşmışlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-3 col-sm-12"><a href="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/01.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/01.png" alt="Öğrenci Değerlendirici Toplantısı"/></a></div>
                    <div className="col-md-3 col-sm-12"><a href="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/02.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/02.png" alt="Öğrenci Değerlendirici Toplantısı"/></a></div>
                    <div className="col-md-3 col-sm-12"><a href="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/03.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/03.png" alt="Öğrenci Değerlendirici Toplantısı"/></a></div>
                    <div className="col-md-3 col-sm-12"><a href="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/04.png" target="_blank"><img className="calistay-img" src="/img/haberler/2023-ogrenci-degerlendirici-toplantisi/04.png" alt="Öğrenci Değerlendirici Toplantısı"/></a></div>
                  </div>
                </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

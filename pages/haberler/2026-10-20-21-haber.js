import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK, SABDEK’in 20. Toplantısına Katıldı (20-21 Ekim 2026)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">HEPDAK, SABDEK’in 20. Toplantısına Katıldı (20-21 Ekim 2026)</div> 
                <div className="main-top-second-content">
                  <p>Sağlık Bilimleri Fakülteleri Dekanlar Konseyi’nin (SABDEK) 20.
toplantısı, 20–21 Ekim 2026 tarihlerinde İnönü Üniversitesi Kongre ve Kültür
Merkezi’nde gerçekleştirildi. Toplantıya HEPDAK’ı temsilen Prof. Dr. Dilek
Özmen katıldı. Programın ilk gününde, “2030’a Doğru Türk Yükseköğretim
Yol Haritası” başlıklı oturumun ardından sağlık bilimleri fakültelerinin yapısal,
stratejik ve dijital dönüşümü ile mikro-yeterlilikler konulu çalıştaylar
düzenlendi. “Sağlık Bilimleri Alanında Akreditasyonun Geleceği” başlıklı
oturum, Prof. Dr. Adile Öniz Özgören’in moderatörlüğünde gerçekleştirildi.
Oturumda Prof. Dr. Dilek Özmen konuşmacı olarak yer aldı. Toplantının ikinci
gününde çalıştay sonuçları değerlendirildi ve ortak kararlar oluşturuldu.
Program, SABDEK Genel Kurulu, dilek ve temenniler ile kapanış oturumunun
ardından sona erdi.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-3 col-sm-12"><a href="../img/haberler/2026/sabdek/01.png" target="_blank"><img className="calistay-img" src="../img/haberler/2026/sabdek/01.png" alt="HEPDAK, SABDEK’in 20. Toplantısına Katıldı"/></a></div>
                    <div className="col-md-3 col-sm-12"><a href="../img/haberler/2026/sabdek/02.png" target="_blank"><img className="calistay-img" src="../img/haberler/2026/sabdek/02.png" alt="HEPDAK, SABDEK’in 20. Toplantısına Katıldı"/></a></div>
                    <div className="col-md-3 col-sm-12"><a href="../img/haberler/2026/sabdek/03.png" target="_blank"><img className="calistay-img" src="../img/haberler/2026/sabdek/03.png" alt="HEPDAK, SABDEK’in 20. Toplantısına Katıldı"/></a></div>
                  </div>
                </div>

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Dünya Akreditasyon Günü Eğitimde Akreditasyon Süreçleri Üzerine Söyleşi (09 Haziran 2023)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">Dünya Akreditasyon Günü Eğitimde Akreditasyon Süreçleri Üzerine Söyleşi (09 Haziran 2023)</div> 
                <div className="main-top-second-content">
                  <p>HEPDAK Başkanı Prof. Dr. Dilek ÖZMEN, HEAK Başkanı Prof. Dr. Gülseren KOCAMAN ve HEAK üyesi
Prof. Dr. Hülya OKUMUŞ Erzincan Binali Yıldırım Üniversitesi Sağlık Bilimleri Fakültesi’nde “9 Haziran
Dünya Akreditasyon Günü Eğitimde Akreditasyon Süreçleri Üzerine” konulu söyleşi gerçekleştirdi.
Söyleşi Fakülte Dekanı Prof. Dr. Nadiye ÖZER, Dekan Yardımcıları, akademik ve idari personelin
katılımıyla gerçekleşti. Söyleşi de Hemşirelik Bölümü akreditasyon hazırlık sürecine ilişkin
paylaşımlarda bulunuldu.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2023-dunya-akreditasyon-gunu/01.jpg" target="_blank"><img className="calistay-img" src="../img/haberler/2023-dunya-akreditasyon-gunu/01.jpg" alt="Dünya Akreditasyon Günü Eğitimde Akreditasyon Süreçleri Üzerine Söyleşi"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/2023-dunya-akreditasyon-gunu/02.jpg" target="_blank"><img className="calistay-img" src="../img/haberler/2023-dunya-akreditasyon-gunu/02.jpg" alt="Dünya Akreditasyon Günü Eğitimde Akreditasyon Süreçleri Üzerine Söyleşi"/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

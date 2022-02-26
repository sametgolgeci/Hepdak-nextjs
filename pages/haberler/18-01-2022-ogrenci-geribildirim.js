import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Öğrenci Değerlendiriciler ile Geribildirim Toplantısı (18 Ocak 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
          <div className="main-top-second-title">Öğrenci Değerlendiriciler ile Geribildirim Toplantısı (18 Ocak 2022)</div>
                <div className="main-top-second-content">
                  <p>2022 yılı akreditasyon süreçlerine katılan öğrenci değerlendiriciler ile 18 Ocak 2022 tarihinde
çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda değerlendirme takımlarında yer alan
öğrenciler değerlendirme süreçleri, yerinde ziyaret planı ve öğrenci standartlarına ilişkin
görüş ve öneri paylaşımında bulunmuşlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/1.png" alt="Öğrenci Değerlendiriciler ile Geribildirim Toplantısı "/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/2.png" alt="Öğrenci Değerlendiriciler ile Geribildirim Toplantısı "/></a></div>
                  </div>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

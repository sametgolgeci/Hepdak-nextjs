import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | APANE Üyeliği Hakkında</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-12 col-sm-12"><img className="calistay-img" src="../img/haberler/2024/hepdak-apane.jpeg" alt="Hepdak Apane"/></div>
                  </div>
                </div>
                <div className="main-top-second-title">APANE Üyeliği Hakkında</div> 
                <div className="main-top-second-content">
                  <p>APANE Üyeliği Hakkında
HEPDAK, 25 Kasım 2023 tarihinden itibaren APANE – Asian and Pasific Alliance
for Nursing Education'ın üyesidir. İlgili dökümana <a href="../img/haberler/2024/apane-onay.jpeg">buradan</a> ulaşabilirsiniz</p>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

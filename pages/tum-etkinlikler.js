{/*
import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tum = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Tüm Etkinlikler</title>
      </Head>
      <div className="genel">
        <h1>Tüm Etkinlikler</h1>
        <div>
          <ul className="nav justify-content-center">
           <li className="nav-item">
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmibir">2021</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmibir" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Eğitiminin Geleceği Sempozyumu - 27-29 Eylül 2021</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK/HEMED WEBINAR: “Avustralya Hemşirelik ve Ebelik Akreditasyon Dernekleri ve Hemşirelik Okullarının Yükümlülükleri” - 20 Mart 2021</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Tum
*/}

import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tum = () => (
<MasterPage>
  <Head>
    <title>HEPDAK | Tüm Etkinlikler</title>
  </Head>
  <div className="row">
    <div className="genel col-md-12 col-sm-12">
    <h1>Tüm Etkinlikler</h1>
    <h5><span className="badge badge-custom">-</span> Hemşirelik Eğitiminin Geleceği Sempozyumu - 27-29 Eylül 2021</h5>
    <h5><span className="badge badge-custom">-</span> HEPDAK/HEMED WEBINAR: “Avustralya Hemşirelik ve Ebelik Akreditasyon Dernekleri ve Hemşirelik Okullarının Yükümlülükleri” - 20 Mart 2021</h5>
    </div>
  </div>
</MasterPage>
)
export default Tum

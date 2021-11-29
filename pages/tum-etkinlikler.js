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

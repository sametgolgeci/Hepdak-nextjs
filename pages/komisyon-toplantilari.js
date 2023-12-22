import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Paydas = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | Komisyon Toplantıları</title>
	</Head>
	<div className="row">
		<div className="genel col-md-12 col-sm-12 komisyon-paydas">
			<h1>Komisyon Toplantıları</h1>
			<h5><Link href="standart-belirleme-ve-gelistirme-komisyonu-toplantilari"> - Standartları Belirleme ve Geliştirme Komisyonu Toplantıları</Link></h5>
			<h5><Link href="#">- Sürekli İyileştirme Komisyonu Toplantıları</Link></h5>
			<h5><Link href="#">- Eğitim Komisyonu Toplantıları Toplantıları</Link></h5>
			<h5><Link href="#">- Uluslararası İlişkiler  Komisyonu Toplantıları</Link></h5>
			<h5><Link href="#">- Yükseklisans Akreditasyonuna Hazırlık Komisyonu Toplantıları</Link></h5>
		</div>
	</div>
	<div className="safe"></div>
</MasterPage>
)
export default Paydas

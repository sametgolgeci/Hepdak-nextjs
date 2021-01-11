import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Yonetim= () => (
	<MasterPage>
		<Head>
			<title>HEPDAK | Yönetim ve Denetleme Kurulu</title>
		</Head>
		<div className="genel">	
			<h1>HEPDAK Yönetim Kurulu Üyeleri</h1>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Prof. Dr. Gülseren Kocaman<br/><strong>Başkan</strong></p>
			</div>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Prof. Dr. Ayla Bayık Temel<br/><strong>Başkan Yardımcısı</strong></p>
			</div>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Doç. Dr. Dilek Özmen<br/><strong>Sekreter</strong></p>
			</div>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Doç. Dr. Şenay Ünsal Atan<br/><strong>Sayman</strong></p>
			</div>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Prof. Dr. Ayten Zaybak<br/><strong>Üye</strong></p>
			</div>
			
			<h1>HEPDAK Denetleme Kurulu Üyeleri</h1>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Doç. Dr. Fatma Orgun</p>
			</div>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Uz. Hem. Sevil Uncu</p>
			</div>
			<div className="col-md-4 col-xs-12">
				<p className="yonetim-text">Uz. Hem. Serap İleri</p>
			</div>
		</div>
	</MasterPage>
)
export default Yonetim

import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Yonetim= () => (
	<MasterPage>
		<Head>
			<title>HEPDAK | Yönetim ve Denetleme Kurulu</title>
		</Head>
		<div className="genel yonetim-text">	
			<h3>HEPDAK Yönetim Kurulu Üyeleri</h3>
			<div className="col-12 yonetim-text">
				<p>Prof. Dr. Gülseren Kocaman<br/><strong>Başkan</strong></p>
			</div>
			<div className="row">
				<div className="col-3 yonetim-text">
					<p>Prof. Dr. Ayla Bayık Temel<br/><strong>Başkan Yardımcısı</strong></p>
				</div>
				<div className="col-3 yonetim-text">
					<p>Doç. Dr. Dilek Özmen<br/><strong>Sekreter</strong></p>
				</div>
				<div className="col-3 yonetim-text">
					<p>Doç. Dr. Şenay Ünsal Atan<br/><strong>Sayman</strong></p>
				</div>
				<div className="col-3 yonetim-text">
					<p>Prof. Dr. Ayten Zaybak<br/><strong>Üye</strong></p>
				</div>
			</div>
			<h3>HEPDAK Denetleme Kurulu Üyeleri</h3>
			<div className="row">
				<div className="col-4 yonetim-text">
					<p>Doç. Dr. Fatma Orgun</p>
				</div>
				<div className="col-4 yonetim-text">
					<p>Uz. Hem. Sevil Uncu</p>
				</div>
				<div className="col-4 yonetim-text">
					<p>Uz. Hem. Serap İleri</p>
				</div>
			</div>
		</div>
	</MasterPage>
)
export default Yonetim

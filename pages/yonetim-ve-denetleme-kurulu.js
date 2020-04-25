import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Yonetim= () => (
	<MasterPage>
		<Head>
			<title>HEPDAK | Yönetim ve Denetleme Kurulu</title>
		</Head>
		<div className="genel">	
			<h3>HEPDAK Yönetim Kurulu Üyeleri</h3>
			<p>Prof. Dr. Gülseren Kocaman (Başkan) </p>
			<p>Prof. Dr. Ayla Bayık Temel (Başkan Yardımcısı)</p>
			<p>Doç. Dr. Dilek Özmen (Sekreter)</p>
			<p>Doç. Dr. Şenay Ünsal Atan (Sayman)</p>
			<p>Prof. Dr. Ayten Zaybak (Üye)</p>
			<h3>HEPDAK Denetleme Kurulu Üyeleri</h3>
			<p>Doç. Dr. Fatma Orgun</p>
			<p>Uz. Hem. Sevil Uncu</p>
			<p>Uz. Hem. Serap İleri</p>
		</div>
	</MasterPage>
)
export default Yonetim

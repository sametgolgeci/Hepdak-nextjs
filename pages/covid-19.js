import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Covid = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Covid-19 Haberleri</title>
	    </Head>
	    <div className="genel">
	    	<h1>Covid-19 Haberleri</h1>
	    	<div className="covid-p">• 30 Haziran 2020 - <Link href="https://www.thder.org.tr/uploads/files/uzaktan-egitim-aciklama.pdf"><a>Türk Hemşireler Derneği ve Özel Dal Derneklerinden Yaz Okulu Açıklaması</a></Link></div>
	    	<div className="covid-p">• 29 Haziran 2020 - <Link href="/doc/HEMED_uzaktan_eğitim_görüş_yazısı.pdf"><a>HEMED Uzaktan Eğitim Konusunda Görüşü</a></Link></div>
	    	<div className="covid-p">• 19 Haziran 2020 - <Link href="/doc/b14_v1.docx"><a>HEPDAK Uzaktan Eğitim Standartları</a></Link></div>
	    	<div className="covid-p">• 4 Mayıs 2020 - <Link href="/corona-virus-pandemisi-sureci"><a>Corona Virüs Pandemisi Sürecinde Hemşirelik Eğitim Programlarının Akreditasyonu için HEPDAK Planı</a></Link></div>
	    	<div className="covid-p">• 4 Mayıs 2020 - <Link href="/hepdak-degerlendirme-2020-21"><a>HEPDAK 2020-2021 Değerlendirme Planı</a></Link></div>
	    </div>
	    <div className="safe"></div>
    </MasterPage>
)
export default Covid

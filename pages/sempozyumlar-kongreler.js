import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const sempozyum = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Sempozyumlar / Kongreler</title>
	    </Head>
	    <div className="genel">
	    	<h1>Sempozyumlar / Kongreler</h1>
	    	<h4 className="sempozyum-title sempozyum-alt">1.Uluslararası Hemşirelik Eğitiminin Geleceği Kongresi: Akreditasyonun Getirdiği Yenilikler ve Hemşirelik Eğitiminin Dönüşümü (20-22 Eylül 2023)</h4>
	    	<h4 className="sempozyum-title sempozyum-alt">Hemşirelik Eğitiminin Geleceği 3:Pandemi Sürecinde Eğitimi İyileştirme Yaklaşımları Sempozyumu (27-29 Eylül 2021)</h4>
	    	<h4 className="sempozyum-title sempozyum-alt">Hemşirelik Eğitiminin Geleceği Sempozyum 2: Ölçme Değerlendirme, Program Değerlendirme ve Sürekli İyileştirme (04-06 Eylül 2019)</h4>
	    	<h4 className="sempozyum-title sempozyum-alt">Hemşirelik Eğitiminin Geleceği: Akreditasyon, Standartlar, İyi Uygulama Örnekleri (19-20 Haziran 2018)</h4>
	    	<div className="safe"></div>
	    </div>
    </MasterPage>
)
export default sempozyum

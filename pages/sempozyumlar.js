import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const sempozyum = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Sempozyumlar</title>
	    </Head>
	    <div className="genel">
	    	<h1>Sempozyumlar</h1>
	    	<h3 className="sempozyum-title">Hemşirelik Eğitiminin Geleceği Sempozyum 2: 4-6 Eylül 2019 Ölçme Değerlendirme, Program Değerlendirme ve Sürekli İyileştirme</h3>
	    	<p>Bilimsel Program, Kayıt & Konaklama, Davet tüm bilgileri <a href="/doc/HEGS_2.pdf"><strong>buradan</strong></a> erişebilirsiniz.</p><h5>Sempozyum Yeri ve İletişim</h5><p>Ege Üniversitesi Hemşirelik Fakültesi<br/>Yasemin Şimşek<br/>Dalya Turizm, Kazım Dirik Mah. 372/8 Sk. No:1 Bornova - İzmir, TÜRKİYE<br/>+90 232 464 88 30<br/>yasemin@dalyatur.com</p>
	    	<h3 className="sempozyum-title sempozyum-alt">Hemşirelik Eğitiminin Geleceği: 19-20 Haziran 2018 Akreditasyon, Standartlar, İyi Uygulama Örnekleri</h3>
	    	<p>Bilimsel Program, Kayıt & Konaklama, Davet tüm bilgileri <a href="http://www.hemsirelikegitiminingelecegi.com"><strong>buradan</strong></a> erişebilirsiniz.</p><h5>Sempozyum Yeri ve İletişim</h5><p>Ege Üniversitesi Hemşirelik Fakültesi<br/>Yasemin Şimşek<br/>Dalya Turizm, Kazım Dirik Mah. 372/8 Sk. No:1 Bornova - İzmir, TÜRKİYE<br/>+90 232 464 88 30<br/>yasemin@dalyatur.com</p></div>
	    	<div className="safe"></div>
    </MasterPage>
)
export default sempozyum

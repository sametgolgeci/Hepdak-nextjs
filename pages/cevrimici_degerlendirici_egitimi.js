import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kalite = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Çevrimiçi Değerlendirici Eğitimi</title>
	    </Head>
	    <div className="genel">
	    	<h1>Çevrimiçi Değerlendirici Eğitimi</h1>
	    	<p>HEPDAK, tarafından 10-12 Ağustos 2020 tarihinde Zoom üzerinden “Çevrimiçi Değerlendirici Eğitimi” yapılmıştır. Eğitime 15 eski değerlendirici, 17 yeni değerlendirici adayı olmak üzere toplam 32 öğretim üyesi katılmıştır. Üç günlük eğitimde daha önceki yıllarda HEPDAK tarafından değerlendirilen hemşirelik lisans programlardan  birinin ÖDR üzerinden hazırlanan senaryo ile küçük grup çalışmaları yapılmıştır. Grup çalışmalarına Prof. Dr. Gülseren Kocaman, Prof. Dr. Ayla Bayık Temel, Prof. Dr. Hülya Okumuş, Prof. Dr. Ayten Zaybak, Prof. Dr. Medine Yılmaz, Doç. Dr. Dilek Özmen ve Doç. Dr. Şenay Ünsal Atan mentorlük yapmıştır. Eğitimin ayrıntılı programı için <strong><a href="/doc/degerlendirici_egitim_5/degerlendirici_egitim_5_program.docx">tıklayınız.</a></strong></p>
	    	<p><img className="slider-img" src="img/degerlendirici_egitim_5/toplanti_1.png" title="Değerlendirici Eğitim Toplantısı"/></p>
	    	<p><img className="slider-img" src="img/degerlendirici_egitim_5/toplanti_2.png" title="Değerlendirici Eğitim Toplantısı"/></p>
	    	<p><img className="slider-img" src="img/degerlendirici_egitim_5/toplanti_3.png" title="Değerlendirici Eğitim Toplantısı"/></p>
	    	<p><img className="slider-img" src="img/degerlendirici_egitim_5/toplanti_4.png" title="Değerlendirici Eğitim Toplantısı"/></p>
	    	</div>
    </MasterPage>
)
export default Kalite
import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kurul = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Kurul ve Komisyonlar</title>
	    </Head>
	    <div className="genel">
	    <h1>Kurullar</h1>
	    	<h3 className="kurul-title">HEPDAK Yönetim Kurulu</h3>
	    	<span className="madde-span">• Prof. Dr. Dilek Özmen (Başkan), Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Fatma Orgun (Başkan Yardımcısı), Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz (Genel Sekreter), İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Gülsüm Nihal Çürük (Sayman), İzmir Ekonomi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Özen Kulakaç (Üye), Ondokuz Mayıs Üniversitesi</span>
	    	
	    	<h3 className="kurul-title">HEPDAK Denetleme Kurulu</h3>
	    	<span className="madde-span">• Prof. Dr. Hatice Yıldırım Sarı (Başkan), İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Uzm. Hem. Dr. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	
	    	<h3 className="kurul-title">Hemşirelik Eğitim Programları Akreditasyon Kurulu (HEAK)</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Başkan), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Dilek Özmen (Başkan Yardımcısı), Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ümit Seviğ, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Sevgi Hatipoğlu, Karatay Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu, Akdeniz Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Okumuş, (Hemşirelik Eğitimi Derneği Temsilcisi) Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Dilek Özmen, Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• <strong>Türk Hemşireler Derneği:</strong> Dr. Hümeyra Zengin, Hacettepe Üniversitesi Erişkin Hastanesi Hemşire Müdürü</span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Leman Kutlu, Haliç Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Hem. Sevil Erken Uncu, Sağlık Bakanlığı Hastaneleri Temsilcisi</span>
	    	<span className="madde-span">• <strong>Hemşire:</strong> Uzm. Hem. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	<span className="madde-span">• <strong>Toplum Temsilcisi:</strong> Hadiye Akçay, Kadın Haklarını Koruma Derneği</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Şerife Cingiz, Akdeniz Üniversitesi</span>
	    	
	    	<h3 className="kurul-title">Danışma Kurulu</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Koordinatör), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayişe Karadağ, Koç Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Şeyda Seren İntepeler, Dokuz Eylül Üniversitesi, Hemşirelik Fakülteleri Dekanlar Konseyi Başkanı</span>
	    	<span className="madde-span">• Doç. Dr. Memnun Seven,, Assistant Professor University of Massachusetts Amherst, ABD</span>
	    	<span className="madde-span">• Dr. Oya Gümüşkaya, Lecturer, The University of Newcastle, Avustralya</span>
	    
	    <h1>Komisyonlar</h1>

	    	<h3 className="kurul-title">Standartları Belirleme ve Geliştirme Komisyonu (SBGK)</h3>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu (Başkan), Akdeniz Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Emine Türkmen (Sekreter), İstinye Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Kaya, İstanbul Üniversitesi - Cerrahpaşa</span>
	    	<span className="madde-span">• Dr. Hümeyra Zengin, Hacettepe Üniversitesi Erişkin Hastanesi Hemşire Müdürü</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Gülçin Uyanık,, İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Demet Gökmen Kavak, Türkiye Sağlık Hizmetleri Kalite Ve Akreditasyon Enstitüsü Standart Geliştirme Birim Sorumlusu</span>
	    	<span className="madde-span">• Uzm. Hem. Gülnur Gül, İzmir SBÜ Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğitim ve Araştırma Hastanesi</span>
	    	<span className="madde-span">• Öğ. Gör. Dr. Yasin Çetin, Adıyaman Üniversitesi</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Mervenur Doğan, Manisa Celal Bayar Üniversitesi</span>

	    	<h3 className="kurul-title">Eğitim Komisyonu (EK)</h3>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz (Başkan), Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Fatma Orgun (Sekreter), Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Okumuş, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Özen Kulakaç, Ondokuz Mayıs Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Hale Sezer, Bakırçay Üniversitesi</span>
	    	<span className="madde-span">• Öğrenci Talha Muhammed Sabah, Başkent Üniversitesi</span>
	    	<span className="madde-span">• Öğrenci Gizem Tunç, Hacettepe Üniversitesi</span>	    	

	    	<h3 className="kurul-title">Sürekli İyileştirme Komisyonu</h3>
	    	<span className="madde-span">• Prof. Dr. Ayla Keçeci (Başkan), Düzce Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Gülsüm Nihal Çürük (Sekreter), İzmir Ekonomi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Şeyda Seren İntepeler, Dokuz Eylül Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi. Hatice Şen, Uluslararası Kıbrıs Üniversitesi</span>
	    	<span className="madde-span">• Ar. Gör. İbrahim Kavaslar, Düzce Üniversitesi</span>
	    	
	    	<h3 className="kurul-title">Uluslararası İlişkiler Komisyonu</h3>
	    	<span className="madde-span">• Doç. Dr. Fatoş Korkmaz (Başkan), Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. İmatullah Akyar (Sekreter), Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Vesile Ünver, Acıbadem Mehmet Ali Aydınlar Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayhan Lash, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Doç. Dr. İlkay Boz, Akdeniz Üniversitesi</span>

	    	<h3 className="kurul-title">Yükseklisans Akreditasyonuna Hazırlık Komisyonu</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Başkan), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayhan Lash, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Oya Kavlak, Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülengün Türk, Adnan Menderes Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Hatice Çamveren, Kütahya Sağlık Bilimleri Üniversitesi</span>
	    </div>
    </MasterPage>
)
export default Kurul
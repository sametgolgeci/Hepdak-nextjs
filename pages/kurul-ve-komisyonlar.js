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
	    	<span className="madde-span">• Prof. Dr. Özen Kulakaç (Başkan Yardımcısı), Ondokuz Mayıs Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz (Genel Sekreter), İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülsüm Nihal Çürük (Sayman), İzmir Ekonomi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Oya Kavlak (Üye), Ege Üniversitesi</span>
	    	<span className="madde-span"><h6><Link href="/yonetim-kurullari">Önceki Dönemlerdeki Yönetim Kurulları</Link></h6></span>
	    	
	    	<h3 className="kurul-title">HEPDAK Denetleme Kurulu</h3>
	    	<span className="madde-span">• Prof. Dr. Hatice Yıldırım Sarı (Başkan), İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Uzm. Hem. Dr. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	
	    	<h3 className="kurul-title">Hemşirelik Eğitim Programları Akreditasyon Kurulu (HEAK)</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Başkan), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Dilek Özmen (Başkan Yardımcısı), Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ümit Seviğ, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu, Akdeniz Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Aynur Uysal Toraman, Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Okumuş, (Hemşirelik Eğitimi Derneği Temsilcisi) Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• <strong>Türk Hemşireler Derneği:</strong> Doç. Dr. Gülten Koç, Hacettepe Üniversitesi Hemşirelik Fakültesi</span>
	    	<span className="madde-span">• Uzm. Hem. Pınar Akçay, Sağlık Bakanlığı Hastaneleri Temsilcisi</span>
	    	<span className="madde-span">• Dr. Ögr. Üyesi Ahu Çırlak, Selçuk Üniversitesi Kulu Sağlık Bilimleri Fakültesi</span>
	    	<span className="madde-span">• <strong>Hemşire:</strong> Melek Gülcük, İzmir Buca Seyfi Demirsoy EAH, Eğitim Birimi (Hemşire Temsilcisi)</span>
	    	<span className="madde-span">• <strong>Toplum Temsilcisi:</strong> Dr. Öğr. Üyesi Leman Kutlu, Atlas Üniversitesi</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Şerife Aplay, Ankara Yıldırım Beyazıt Üniversitesi</span>
	    	
	    	<h3 className="kurul-title">Danışma Kurulu</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Koordinatör), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayişe Karadağ, Koç Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Merdiye Şendir, Sağlık Bilimleri Üniversitesi, Hemşirelik Fakülteleri Dekanlar Konseyi Başkanı</span>
	    	<span className="madde-span">• Prof. Dr. Sultan Taşçı, SABDEK Yürütme Kurulu Üyesi</span>
	    	<span className="madde-span">• Doç. Dr. Havva Arslan Yürümezoğlu, HEMED Yönetim Kurulu Başkanı</span>
	    	<span className="madde-span">• Doç. Dr. Memnun Seven, Assistant Professor University of Massachusetts Amherst, ABD</span>
	    	<span className="madde-span">• Dr. Oya Gümüşkaya, Lecturer, The University of Newcastle, Avustralya</span>
	    
	    <h1>Komisyonlar</h1>

	    	<h3 className="kurul-title">Standartları Belirleme ve Geliştirme Komisyonu (SBGK)</h3>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu (Başkan), Akdeniz Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Emine Türkmen (Sekreter), İstinye Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Kaya, Bezmialem Vakıf Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Gülten Koç,  Hacettepe Üniversitesi, THD Temsilcisi</span>
	    	<span className="madde-span">• Doç. Dr. Demet İnangil, Sağlık Bilimleri Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Yasin Çetin, Adıyaman Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Gülçin Uyanık, İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Demet Gökmen Kavak, Türkiye Sağlık Hizmetleri Kalite Ve Akreditasyon Enstitüsü Standart Geliştirme Birim Sorumlusu</span>  	
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Uzm. Hem. Özlem Bakan Demirel, İzmir Katip Çelebi Üniversitesi Kalite Koordinatörlüğü</span>

	    	<h3 className="kurul-title">Eğitim Komisyonu (EK)</h3>
	    	<span className="madde-span">• Prof. Dr. Fatma Orgun (Başkan), Ege Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Hale Sezer (Sekreter), Bakırçay Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz, İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hatice Mert, Dokuz Eylül Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülsüm Nihal Çürük, İzmir Ekonomi Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Aydan Baysan, Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• Dr. Ögr. Üyesi Gülsüm Çonoğlu, Çankırı Karatekin Üniversitesi</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Jale Atak, Manisa Celal Bayar Üniversitesi</span>    	

	    	<h3 className="kurul-title">Sürekli İyileştirme Komisyonu (SÜİK)</h3>
	    	<span className="madde-span">• Prof. Dr. Ayla Keçeci (Başkan), Düzce Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülsüm Nihal Çürük (Sekreter), İzmir Ekonomi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Şeyda Seren İntepeler, Dokuz Eylül Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Zeynep Özer, Akdeniz Üniversitesi</span>	
	    	<span className="madde-span">• Dr. Öğr. Üyesi. Hatice Şen, Uluslararası Kıbrıs Üniversitesi</span>
	    	<span className="madde-span">• Ar. Gör. İbrahim Kavaslar, Düzce Üniversitesi</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Başak Yazıcı, Ege Üniversitesi</span> 
	    	
	    	<h3 className="kurul-title">Uluslararası İlişkiler Komisyonu</h3>
	    	<span className="madde-span">• Doç. Dr. Fatoş Korkmaz (Başkan), Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. İmatullah Akyar (Sekreter), Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz, İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Vesile Ünver, Acıbadem Mehmet Ali Aydınlar Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayhan Lash, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. İlkay Boz, Akdeniz Üniversitesi</span>

	    	<h3 className="kurul-title">Yükseklisans Akreditasyonuna Hazırlık Komisyonu</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Başkan), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayhan Lash, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Oya Kavlak, Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülengün Türk, Adnan Menderes Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Damla Çamveren, Kütahya Sağlık Bilimleri Üniversitesi</span>

	    	<h3 className="kurul-title">WEB Tasarım Komisyonu</h3>
	    	<span className="madde-span">• Prof. Dr. Özen Kulakaç (Başkan), Ondokuz Mayıs Üniversitesi</span>
	    	<span className="madde-span">• Ümran Yalçın (Sekreter), HEPDAK Sekreteri</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Gürkan Özden, İnönü Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğretim Üyesi Çiğdem Gamze Özkan, Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• Ar. Gör. Selcan Zeynep Ergöz Aksoy, İzmir Ekonomi Üniversitesi</span>
	    	<span className="madde-span">• Ar. Gör. Hilal Ersan Yaman, Hacettepe Üniversitesi</span>
	    </div>
    </MasterPage>
)
export default Kurul
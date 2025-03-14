import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Kurul = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Boards and Commissions</title>
	    </Head>
	    <div className="genel">
	    <h1>Boards</h1>
	    	<h3 className="kurul-title">HEPDAK Board of Directors</h3>
	    	<span className="madde-span">• Prof. Dr. Dilek Özmen (Chair), Manisa Celal Bayar University</span>
	    	<span className="madde-span">• Doç. Dr. Fatma Orgun (Vise Chair), Ege University</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz (General Secretary), İzmir Katip Çelebi University</span>
	    	<span className="madde-span">• Prof. Dr. Gülsüm Nihal Çürük (Accountant), İzmir University of Economics</span>
	    	<span className="madde-span">• Prof. Dr. Özen Kulakaç (Member), Ondokuz Mayıs University</span>

	    	<h3 className="kurul-title">Auditing Board</h3>
	    	<span className="madde-span">• Prof. Dr. Hatice Yıldırım Sarı (Chair), İzmir Katip Çelebi University</span>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Uzm. Hem. Dr. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	
	    	<h3 className="kurul-title">Nursing Education Programs Accreditation Board (HEAK)</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Chair), Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. Dilek Özmen (Vise Chair), Manisa Celal Bayar University</span>
	    	<span className="madde-span">• Prof. Dr. Ümit Seviğ, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu, Akdeniz University</span>
	    	<span className="madde-span">• Prof. Dr. Aynur Uysal Toraman, Ege University</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Okumuş (Hemşirelik Eğitimi Derneği Temsilcisi), Retired Faculty Member</span>
	    	<span className="madde-span">• <strong>Türk Hemşireler Derneği:</strong> Dr. Hümeyra Zengin, Hacettepe Üniversitesi Erişkin Hastanesi Hemşire Müdürü</span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Leman Kutlu, Haliç Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Hem. Pınar Akçay, Sağlık Bakanlığı Hastaneleri Temsilcisi</span>
	    	<span className="madde-span">• <strong>Hemşire:</strong> Uzm. Hem. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	<span className="madde-span">• <strong>Toplum Temsilcisi:</strong> Hadiye Akçay, Kadın Haklarını Koruma Derneği</span>
	    	<span className="madde-span">• <strong>Student:</strong> Gizem Tunç, Hacettepe University</span>
	    	
	    	<h3 className="kurul-title">Advisory Board</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Coordinator), Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. Ayişe Karadağ, Koç University</span>
	    	<span className="madde-span">• Prof. Dr. Merdiye Şendir, Sağlık Bilimleri University, Hemşirelik Fakülteleri Dekanlar Konseyi Başkanı</span>
	    	<span className="madde-span">• Doç. Dr. Memnun Seven, Massachusetts Amherst University, ABD</span>
	    	<span className="madde-span">• Dr. Oya Gümüşkaya, The University of Newcastle, Avustralya</span>
	    
	    <h1>Commissions</h1>

	    	<h3 className="kurul-title">Standards Setting and Development Committee (SBGK) Working Directive</h3>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu (Chair), Akdeniz University</span>
	    	<span className="madde-span">• Prof. Dr. Emine Türkmen (Secretary), İstinye University</span>
	    	<span className="madde-span">• Prof. Dr. Sergül Duygulu, Hacettepe University</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Kaya, İstanbul University - Cerrahpaşa</span>
	    	<span className="madde-span">• Doç. Dr. Gülten Koç,  Hacettepe University, THD Temsilcisi</span>
	    	<span className="madde-span">• Doç. Dr. Demet İnangil, Sağlık Bilimleri University</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Gülçin Uyanık, İzmir Katip Çelebi University</span>
	    	<span className="madde-span">• Uzm. Demet Gökmen Kavak, Türkiye Sağlık Hizmetleri Kalite Ve Akreditasyon Enstitüsü Standart Geliştirme Birim Sorumlusu</span>
	    	<span className="madde-span">• Uzm. Hem. Gülnur Gül, İzmir SBÜ Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğitim ve Araştırma Hastanesi</span>
	    	<span className="madde-span">• Öğ. Gör. Dr. Yasin Çetin, Adıyaman University</span>
	    	<span className="madde-span">• <strong>Student:</strong> Uz. Hem. Özlem Bakan Demirel, İzmir Katip Çelebi University Kalite Koordinatörlüğü</span>

	    	<h3 className="kurul-title">Training Comission</h3>
	    	<span className="madde-span">• Assoc. Dr. Fatma Orgun (Chair), Ege University</span>
	    	<span className="madde-span">• Assoc. Dr. Hale Sezer (Secretary), Bakırçay University</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz, İzmir Katip Çelebi University</span>
	    	<span className="madde-span">• Prof. Dr. Hatice Mert, Dokuz Eylül University</span>
	    	<span className="madde-span">• Prof. Dr. Gülsüm Nihal Çürük, İzmir University of Economics</span>
	    	<span className="madde-span">• Asst. Prof. Aydan Baysan, Manisa Celal Bayar University</span>
	    	<span className="madde-span">• R. A. Dr. Gülsüm Çonoğlu, Çankırı Karatekin University</span>
	    	<span className="madde-span">• <strong>Student:</strong> Jale Atak, Manisa Celal Bayar University</span> 	

	    	<h3 className="kurul-title">Continuous Improvement Commission</h3>
	    	<span className="madde-span">• Prof. Dr. Ayla Keçeci (Chair), Düzce University</span>
	    	<span className="madde-span">• Prof. Dr. Gülsüm Nihal Çürük (Secretary), İzmir Ekonomi University</span>
	    	<span className="madde-span">• Prof. Dr. Şeyda Seren İntepeler, Dokuz Eylül University</span>
	    	<span className="madde-span">• Prof. Dr. Zeynep Özer, Akdeniz University</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi. Hatice Şen, Uluslararası Kıbrıs University</span>
	    	<span className="madde-span">• R. A. İbrahim Kavaslar, Düzce University</span>
	    	<span className="madde-span">• <strong>Student:</strong> Başak Yazıcı, Ege University</span> 
	    	
	    	<h3 className="kurul-title">International Relations Committee Working Directive</h3>
	    	<span className="madde-span">• Doç. Dr. Fatoş Korkmaz (Chair), Hacettepe University</span>
	    	<span className="madde-span">• Doç. Dr. İmatullah Akyar (Secretary), Hacettepe University</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz, İzmir Katip Çelebi University</span>
	    	<span className="madde-span">• Prof. Dr. Vesile Ünver, Acıbadem Mehmet Ali Aydınlar University</span>
	    	<span className="madde-span">• Doç. Dr. Sergül Duygulu, Hacettepe University</span>
	    	<span className="madde-span">• Prof. Dr. Ayhan Lash, Northern Illinois University Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. İlkay Boz, Akdeniz University</span>

	    	<h3 className="kurul-title">Preparation Commission for Postgraduate Accreditation</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Chair), Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. Ayhan Lash, Northern Illinois University Retired Faculty Member</span>
	    	<span className="madde-span">• Prof. Dr. Oya Kavlak, Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Gülengün Türk, Adnan Menderes University</span>
	    	<span className="madde-span">• Dr. Öğr. Üyesi Damla Çamveren, Kütahya Sağlık Bilimleri University</span>

	    	<h3 className="kurul-title">WEB Design Commission</h3>
	    	<span className="madde-span">• Prof. Dr. Özen Kulakaç (Chair), Ondokuz Mayıs University</span>
	    	<span className="madde-span">• Ümran Yalçın (Secretary), HEPDAK Secretary</span>
	    	<span className="madde-span">• Asst. Prof. Gürkan Özden, İnönü University</span>
	    	<span className="madde-span">• R. A. Selcan Zeynep Ergöz Aksoy, Izmir University of Economics</span>
	    	<span className="madde-span">• R. A. Hilal Ersan Yaman, Hacettepe University</span>
	    </div>
    </MasterPage>
)
export default Kurul
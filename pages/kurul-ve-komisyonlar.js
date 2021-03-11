import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kurul = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Kurul ve Komisyonlar</title>
	    </Head>
	    <div className="genel">
	    <h1>Kurul ve Komisyonlar</h1>
	    	<h3 className="kurul-title">Hemşirelik Eğitim Programları Akreditasyon Kurulu (HEAK)</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Başkan), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ümit Seviğ, Yakın Doğu Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Sevgi Hatipoğlu, Karatay Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu, Akdeniz Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Okumuş, (Hemşirelik Eğitimi Derneği Temsilcisi) Emekli Öğretim Üyesi,<strong> Türk Hemşireler Derneği ve Özel Hastaneler Temsilcisi</strong></span>
	    	<span className="madde-span">• Uzm. Hem. Saliha Koç, Acı Badem Hastaneleri Hemşire Direktörü,<strong> Hemşirelik Hizmetleri Yöneticileri</strong></span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Leman Kutlu, Haliç Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Hem. Sevil Erken Uncu, Sağlık Bakanlığı Hastaneleri Temsilcisi</span>
	    	<span className="madde-span">• <strong>Hemşire:</strong> Uzm. Hem. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	<span className="madde-span">• <strong>Toplum Temsilcisi:</strong> Hadiye Akçay, Kadın Haklarını Koruma Derneği</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Aslı Kayar, Acıbadem Mehmet Ali Aydınlar</span>

	    	<h3 className="kurul-title">Standartları Belirleme ve Geliştirme Komisyonu (SBGK)</h3>
	    	<span className="madde-span">• Prof. Dr. Kadriye Buldukoğlu (Başkan), Akdeniz Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Emine Türkmen (Başkan Yard. - Sekreter), Koç Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Yava, Hasan Kalyoncu Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Kaya, İstanbul Üniversitesi - Cerrahpaşa</span>
	    	<span className="madde-span">• Ar. Gör. Dr. Gülçin Uyanık, İzmir Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Demet Gökmen Kavak, Türkiye Sağlık Hizmetleri Kalite Ve Akreditasyon Enstitüsü Standart Geliştirme Birim Sorumlusu</span>
	    	<span className="madde-span">• Uzm. Hem. Gülnur Gül, İzmir SBÜ Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğitim ve Araştırma Hastanesi</span>
	    	<span className="madde-span">• Öğ. Gör. Dr. Yasin Çetin, Adıyaman Üniversitesi</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Mervenur Doğan, Ondokuz Mayıs Üniversitesi</span>

	    	<h3 className="kurul-title">Program Değerlendirme ve İzleme Komisyonu (PDİK)</h3>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel (Başkan), Ege Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Serap Sökmen (Başkan Yard. - Sekreter), Erzincan Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Dilek Özmen, Manisa Celal Bayar Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Aklime Sarıkaya, Sebahattin Zaim Üniversitesi</span>
	    	<span className="madde-span">• Öğ. Gör. Dr. Yasin Çetin, Adıyaman Üniversitesi</span>
	    	<span className="madde-span">• <strong>Öğrenci:</strong> Şerife Cingiz, Akdeniz Üniversitesi</span>

	    	<h3 className="kurul-title">Danışmanlık ve Eğitim Komisyonu (DEK)</h3>
	    	<span className="madde-span">• Prof. Dr. Ayten Zaybak (Başkan), Ege Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Şenay Ünsal (Başkan Yard. - Sekreter), Ege Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Keçeci, Düzce Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Hülya Okumuş, Dokuz Eylül Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Salime Mucuk, Erciyes Üniversitesi</span>
	    	<span className="madde-span">• Prof. Dr. Medine Yılmaz, Katip Çelebi Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Fatma Orgun, Ege Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Yıldız Tulum Denat, Adnan Menderes Üniversitesi</span>
	    	<span className="madde-span">• Uzm. Hem. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Hale Sezer, Bakırçay Üniversitesi</span>

	    	<h3 className="kurul-title">Uluslararası Dış Değerlendirme Çalışma Grubu</h3>
	    	<span className="madde-span">• Prof. Dr. İnci Erefe (Başkan), Ege Üniversitesi, Emekli</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Ayhan Lash Professor, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Doç. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Fatoş Korkmaz, Hacettepe Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Merlinda Aluş Tokat, Dokuz Eylül Üniversitesi</span>
	    	<span className="madde-span">• Dr. Öğ. Üyesi Nilay Özkütük, Ege Üniversitesi</span>

	    	<h3 className="kurul-title">Yükseklisans Akreditasyonuna Hazırlık Komisyonu</h3>
	    	<span className="madde-span">• Prof. Dr. Gülseren Kocaman (Başkan), Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Ayla Bayık Temel, Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Ayhan Lash Professor, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span className="madde-span">• Prof. Dr. Oya Kavlak, Ege Üniversitesi</span>
	    	<span className="madde-span">• Doç. Dr. Gülengün Türk, Adnan Menderes Üniversitesi</span>
	    	<span className="madde-span">• Ar. Gör. Hatice Çamveren, Ege Üniversitesi</span>
	    </div>
    </MasterPage>
)
export default Kurul
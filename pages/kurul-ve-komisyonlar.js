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
	    	<h3 className="kurul-title">Hemşirelik Eğitim Programları Akreditasyon Kurulu</h3>
	    	<span>• Prof. Dr. Ayla Keçeci (Başkan), Düzce Üniversitesi</span>
	    	<span>• Prof. Dr. Gülseren Kocaman (Başkan Yard. - Sekreter), Dokuz Eylül Üniversitesi</span>
	    	<span>• Prof. Dr. Ümit Seviğ, Yakın Doğu Üniversitesi</span>
	    	<span>• Prof. Dr. Sevgi Hatipoğlu, Lefke Üniversitesi</span>
	    	<span>• Prof. Dr. Kadriye Buldukoğlu, Akdeniz Üniversitesi</span>
	    	<span>• Prof. Dr. Ayla Bayık Temel, Ege Üniversitesi</span>
	    	<span>• Prof. Dr. Hülya Okumuş, (Hemşirelik Eğitimi Derneği Temsilcisi) Dokuz Eylül Üniversitesi, Türk Hemşireler Derneği ve Özel Hastaneler Temsilcisi</span>
	    	<span>• Uzm. Hem. Saliha Koç, Acı Badem Hastaneleri Hemşire Direktörü Hemşirelik Hizmetleri Yöneticileri</span>
	    	<span>• Dr. Öğ. Üyesi Leman Kutlu, Haliç Üniversitesi</span>
	    	<span>• Uzm. Hem. Sevil Erken Uncu, Sağlık Bakanlığı Hastaneleri Temsilcisi</span>
	    	<span>• Hemşire: Uzm. Hem. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	<span>• Toplum Temsilcisi: Hadiye Akçay, Kadın Haklarını Koruma Derneği</span>
	    	<span>• Öğrenci: Elif Demirdelen, Dokuz Eylül Üniversitesi</span>
	    	<h3 className="kurul-title">Standartları Belirleme ve Geliştirme Komisyonu (SBGK)</h3>
	    	<span>• Prof. Dr. Kadriye Buldukoğlu (Başkan), Akdeniz Üniversitesi</span>
	    	<span>• Doç. Dr. Emine Türkmen (Başkan Yard. - Sekreter), Koç Üniversitesi</span>
	    	<span>• Prof. Dr. Ayla Yava, Hasan Kalyoncu Üniversitesi</span>
	    	<span>• Doç. Dr. Sergül Duygulu, Hacettepe Üniversitesi</span>
	    	<span>• Uzm. Demet Gökmen Kavak, Türkiye Sağlık Hizmetleri Kalite Ve Akreditasyon Enstitüsü Standart Geliştirme Birim Sorumlusu</span>
	    	<span>• Uzm. Hem. Gülnur Gül, İzmir SBÜ Dr. Suat Seren Göğüs Hastalıkları ve Cerrahisi Eğitim ve Araştırma Hastanesi</span>
	    	<span>• Öğrenci: Çigdem Sabıkma, Manisa Celal Bayar Üniversitesi</span>
	    	<h3 className="kurul-title">Program Değerlendirme ve İzleme Komisyonu (PDİK)</h3>
	    	<span>• Prof. Dr. Ayla Bayık Temel (Başkan), Ege Üniversitesi</span>
	    	<span>• Dr. Öğ. Üyesi Serap Sökmen (Başkan Yard. - Sekreter), Erzincan Üniversitesi</span>
	    	<span>• Doç. Dr. Dilek Özmen, Manisa Celal Bayar Üniversitesi</span>
	    	<span>• Doç. Dr. Aklime Sarıkaya, Sebahattin Zaim Üniversitesi</span>
	    	<span>• Öğrenci: Şengül İbci, Ege Üniversitesi</span>
	    	<h3 className="kurul-title">Danışmanlık ve Eğitim Komisyonu (DEK)</h3>
	    	<span>• Prof. Dr. Ayten Zaybak (Başkan), Ege Üniversitesi</span>
	    	<span>• Doç. Dr. Şenay Ünsal (Başkan Yard. - Sekreter), Ege Üniversitesi</span>
	    	<span>• Prof. Dr. Ayla Keçeci, Düzce Üniversitesi</span>
	    	<span>• Prof. Dr. Hülya Okumuş, Dokuz Eylül Üniversitesi</span>
	    	<span>• Doç. Dr. Salime Mucuk, Erciyes Üniversitesi</span>
	    	<span>• Doç. Dr. Medine Yılmaz, Katip Çelebi Üniversitesi</span>
	    	<span>• Doç. Dr. Fatma Orgun, Ege Üniversitesi</span>
	    	<span>• Dr. Öğ. Üyesi Yıldız Tulum Denat, Adnan Menderes Üniversitesi</span>
	    	<span>• Uzm. Hem. Serap İleri, Dokuz Eylül Üniversitesi Hastanesi</span>
	    	<span>• Dr. Öğ. Üyesi Hale Sezer, Bakırçay Üniversitesi</span>
	    	<h3 className="kurul-title">Uluslararası Dış Değerlendirme Çalışma Grubu</h3>
	    	<span>• Prof. Dr. İnci Erefe (Başkan), Ege Üniversitesi, Emekli</span>
	    	<span>• Prof. Dr. Ayla Bayık, Ege Üniversitesi</span>
	    	<span>• Ayhan Lash Professor, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span>• Prof. Dr. Ayla Keçeci, Düzce Üniversitesi</span>
	    	<span>• Dr. Öğ. Üyesi Nilay Özkütük, Ege Üniversitesi</span>
	    	<h3 className="kurul-title">Yükseklisans Akreditasyonuna Hazırlık Komisyonu</h3>
	    	<span>• Prof. Dr. Gülseren Kocaman (Başkan Yard-Sekreter), Dokuz Eylül Üniversitesi</span>
	    	<span>• Prof. Dr. Ayla Bayık Temel, Ege Üniversitesi</span>
	    	<span>• Ayhan Lash Professor, Northern Illinois Üniversitesi Emekli Öğretim Üyesi</span>
	    	<span>• Prof. Dr. Oya Kavlak, Ege Üniversitesi</span>
	    	<span>• Doç. Dr. Gülengün Türk, Adnan Menderes Üniversitesi</span>
	    	<span>• Ar. Gör. Hatice Çamveren, Ege Üniversitesi</span>
	    </div>
    </MasterPage>
)
export default Kurul
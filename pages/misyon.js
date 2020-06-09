import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Misyon = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Misyon</title>
	    </Head>
	    <div className="genel"><h1>Misyon</h1></div>
	    <div className="jumbotron">
	    	<p><strong>HEPDAK olarak misyonumuz;</strong> sürekli geliştirilen standartlar doğrultusunda lisans ve lisansüstü hemşirelik eğitim programlarının değerlendirilmesi ve izlenmesi ile hemşirelik biliminin, eğitiminin, bakımının ve toplum sağlığının gelişiminde kalite ve yeniliğin güvencesidir.</p>
	    </div>
	    <div className="genel">
	    	<p>HEPDAK, lisans ve lisansüstü eğitim programlarının değerlendirme ve akredite etme sürecinde aşağıdaki değerleri ilke edinmiştir. Bu değerlere göre;</p>
	    	<p>• HEPDAK'ın; tutarlı, doğru ve dürüst akreditasyon süreçleri meslektaşlarına ve topluma güven sağlar.</p>
	    	<p>• Hemşirelik eğitim programları ve çıktılarında sürekli kalite gelişimini destekler.</p>
	    	<p>• Akreditasyon süreci ile ilgili etkinliklerin uygulamasında tüm paydaşların görüşlerine açıktır.</p>
	    	<p>• Akreditasyon süreçlerinde yeniliğe değer verir ve programları da bu yönde teşvik eder.</p>
	    	<p>• Kurumlara, eğitim programlarının öz değerlendirmesini yapmada yardımcı olur.</p>
	    	<p>• Eğitim programlarında; öğrencilerin, mezunların ve öğretim üyelerinin yaşam boyu öğrenme süreçlerini destekleyen bir eğitim ortamını güdüler.</p>
	    	<p>• Sağlık bakımı alanlar, öğrenciler, işverenler, programlar ve yükseköğretim kurumlarını içermek üzere tüm topluma karşı sorumluluk üstlenir.</p>
	    	<p>• Mezunların etkili meslek üyesi ve sosyal sorumluluğu olan vatandaşlar olarak gelişimi için programları destekler.</p>
	    	<p>• Akreditasyon süreçlerinde karar vermede bağımsızlığı garanti eder.</p>
	    </div>
    </MasterPage>
)
export default Misyon

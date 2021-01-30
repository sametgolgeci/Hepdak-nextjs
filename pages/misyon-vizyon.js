import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Misyon = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Misyon, Vizyon</title>
	    </Head>
	    <div className="genel"><h1>Misyon, Vizyon</h1></div>
	    <div className="jumbotron">
	    	<p><strong>HEPDAK’ın misyonu; </strong>sürekli geliştirilen standartlar doğrultusunda lisans ve lisansüstü hemşirelik eğitim programlarının değerlendirilmesi ve izlenmesi ile hemşirelik biliminin, eğitiminin, bakımının ve toplum sağlığının gelişiminde kalite ve yeniliğin güvencesi olmaktır.</p>
	    </div>
	    <div className="jumbotron">
	    	<p><strong>HEPDAK’ın vizyonu; </strong>Türkiye’de hemşirelik eğitiminin kalitesini yükselterek, hemşirelerin sağlık hizmetlerini dönüştürmesine ve sağlığı geliştirmesine katkıda bulunmaktır.</p>
	    </div>
    </MasterPage>
)
export default Misyon

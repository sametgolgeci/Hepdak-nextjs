import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kurum = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Kurum Tanıtım Eğitimi 8</title>
	    </Head>
	    <div className="genel">
	    	<h1>Kurum Tanıtım Eğitimi (24 Ekim 2020)</h1>
	    	<p>HEPDAK değerlendirmesine başvurmayı planlayan hemşirelik lisans programlarının sorumlularına ve eğiticilerine HEPDAK akreditasyonu ile ilgili temel kavramları, HEPDAK standartları ve anlamları, HEPDAK uzaktan eğitim standartları, eğitim amaçları, program çıktıları ve sürekli iyileştirme yaklaşımları, değerlendirme süreci, uzaktan değerlendirme süreci, değerlendirme hazırlıkları ve öz değerlendirme raporları konularında bilgi vermek ve kurumların akreditasyon hazırlıklarına yardımcı olmak amacı ile 24 Ekim 2020 tarihinde çevrimiçi olarak Kurum Tanıtım Eğitimi yapılmıştır. Eğitim programına 27 farklı kurumdan 64 öğretim elemanı katılmıştır. Standartlara yönelik vakaların tartışıldığı programda eğitimciler tarafından katılımcıların soruları da yanıtlanmıştır.</p>
	    	<p><img className="slider-img" src="img/kurum_egitim_8/photo_1.PNG" title="Kurum Eğitim Toplantısı"/></p>
	    	<p><img className="slider-img" src="img/kurum_egitim_8/photo_2.PNG" title="Kurum Eğitim Toplantısı"/></p>
	    	<p><img className="slider-img" src="img/kurum_egitim_8/photo_3.PNG" title="Kurum Eğitim Toplantısı"/></p>
	    	<p><img className="slider-img" src="img/kurum_egitim_8/photo_4.PNG" title="Kurum Eğitim Toplantısı"/></p>
	    	</div>
    </MasterPage>
)
export default Kurum
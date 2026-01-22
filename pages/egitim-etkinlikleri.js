import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Eğitim Etkinlikleri</title>
	    </Head>
	       <div className="genel">
            <h1>Eğitim Etkinlikleri</h1>
            <h5>HEPDAK Faaliyetlerinin Tanıtımı ile İlgili Etkinlikler</h5>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2025.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2025</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2024.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2024</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2023.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2023</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2022.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2022</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2021.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2021</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2020.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2020</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2019.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2019</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2018.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2018</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2017.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2017</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2016.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2016</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2015.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2015</Link></p>
            <p className="madde-p"><Link href="doc/egitim_etkinlikleri/faaliyet-2014.pdf" target="_blank">HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2014</Link></p>
            
            <Link href="doc/egitim_etkinlikleri/toplanti-1.pdf" target="_blank"><h5>- HEPDAK, HEAK ve Komisyon Üyelerine Çeşitli Toplantılarda Yapılan Eğitimler</h5></Link>    
        </div>
    </MasterPage>
)
export default Kaynak
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
            <h5>HEPDAK Faaliyetleri Tanıtımı ile İlgili Etkinlikler</h5>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2021.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2021</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2020.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2020</a></Link></td>
                  </tr> 
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2019.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2019</a></Link></td>
                  </tr> 
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2018.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2018</a></Link></td>
                  </tr> 
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2017.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2017</a></Link></td>
                  </tr> 
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2016.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2016</a></Link></td>
                  </tr> 
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2015.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2015</a></Link></td>
                  </tr> 
                  <tr>
                    <td><Link href="doc/egitim_etkinlikleri/faaliyet-2014.pdf"><a target="_blank">- HEPDAK Faaliyetleri Tanıtımı ile İlgili Çağrılı Konuşmalar 2014</a></Link></td>
                  </tr>               
                </tbody>
              </table>
            <Link href="doc/egitim_etkinlikleri/toplanti-1.pdf"><a target="_blank"><h5>- HEPDAK, HEAK ve Komisyon Üyelerine Çeşitli Toplantılarda Yapılan Eğitimler</h5></a></Link>    
        </div>
    </MasterPage>
)
export default Kaynak
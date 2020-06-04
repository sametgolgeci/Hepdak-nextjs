import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kuruluslar = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | İlgili Kuruluşlar</title>
	    </Head>
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
          <div id="surec" className="akreditasyon-content-item">    
            <div className="akreditasyon-content-title">İlgili Kuruluşlar</div>
            <div>
              <table className="table table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" colSpan="2">Ulusal Kuruluşlar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><a href="https://www.yok.gov.tr" target="_blank">YÖK</a></th>
                    <td>Yükseköğretim Kurulu, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.yodek.org.tr" target="_blank">Yükseköğretim Kalite Kurulu</a></th>
                    <td>Yükseköğretim Kalite Kurulu, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.kalder.org" target="_blank">KalDer</a></th>
                    <td>Türkiye Kalite Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.mudek.org.tr" target="_blank">MÜDEK</a></th>
                    <td>Mühendislik Eğitim Programları Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://tepdad.org.tr" target="_blank">TEPDAD</a></th>
                    <td>Tıp Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.fedek.org.tr" target="_blank">FEDEK</a></th>
                    <td>Fen, Edebiyat, Fen-Edebiyat, Dil ve Tarih-Coğrafya Fakülteleri Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.vedek.org.tr" target="_blank">VEDEK</a></th>
                    <td>Veteriner Hekimliği Eğitim Kurumları ve Programları Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://epdad.org.tr" target="_blank">EPDAD</a></th>
                    <td>Öğretmenlik Eğitim Programları Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://iledak.ilad.org.tr" target="_blank">İLEDAK</a></th>
                    <td>İletişim Araştırmaları Derneği (İletişim Eğitimi Değerlendirme Akreditasyon Kurulu), Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://www.sabak.org.tr" target="_blank">SABAK</a></th>
                    <td>Sağlık Bilimleri Eğitim Programları Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://www.turak.org" target="_blank">TURAK</a></th>
                    <td>Turizm Akademisyenleri Derneği (Turizm Eğitimi Değerlendirme ve Akreditasyon Kurulu), Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.eczakder.org.tr" target="_blank">ECZAKDER</a></th>
                    <td>Eczacılık Eğitimi Programlarını Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.psikolog.org.tr" target="_blank">Türk Psikologlar Derneği</a></th>
                    <td>Türk Psikologlar Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://www.iaa.org.tr" target="_blank">İAA</a></th>
                    <td>İlahiyat Akreditasyon Ajansı, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.sporbilimleri.org.tr" target="_blank">SPORAK</a></th>
                    <td>Spor Bilimleri Derneği (Spor Bilimleri Eğitim Programları Değerlendirme ve Akreditasyon Kurulu), Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://www.depad.org" target="_blank">DEPAD</a></th>
                    <td>Diş Hekimliği Eğitimi Programları Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://audak.org" target="_blank">AUDAK</a></th>
                    <td>Açık ve Uzaktan Öğretim Programları Değerlendirme ve Akreditasyon Derneği, Türkiye</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="http://pemder.org.tr" target="_blank">PEMDER</a></th>
                    <td>Peyzaj Mimarlığı Eğitim ve Bilim Derneği, Türkiye</td>
                  </tr>
                  </tbody>
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col" colSpan="3">Uluslararası Kuruluşlar</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th scope="row"><a href="https://www.nln.org" target="_blank">NLN</a></th>
                    <td>National League for Nursing, ABD</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.aacnnursing.org" target="_blank">AACN</a></th>
                    <td>American Association of Colloges of Nursing, ABD</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.aacnnursing.org/CCNE" target="_blank">CCNE</a></th>
                    <td>Commision on Collegiate Nursing Education, ABD</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.casn.ca" target="_blank">CASN</a></th>
                    <td>Canadian Association of Schools of Nursing, Kanada</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.chea.org" target="_blank">CHEA</a></th>
                    <td>Council for Higher Education Accreditation, ABD</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.enqa.eu" target="_blank">ENQA</a></th>
                    <td>European Association for Quality Assurance for Higher Education, Finlandiya</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.qaa.ac.uk" target="_blank">QAA</a></th>
                    <td>Quality Assurance Agency for Higher Education, İngiltere</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.eqar.eu" target="_blank">EQAR</a></th>
                    <td>European Quality Assurance Register for Higher Education, Belçika</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.inqaahe.org" target="_blank">INQAAHE</a></th>
                    <td>International Network for Quality Assurance Agencies in Higher Education, Hollanda</td>
                  </tr>
                  <tr>
                    <th scope="row"><a href="https://www.eurashe.eu" target="_blank">EURASHE</a></th>
                    <td>European Association of Institutions in Higher Education, Belçika</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Kuruluslar
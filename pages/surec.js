import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Surec = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Süreç</title>
	    </Head>
	    <div className="row akreditasyon">
	    	<div className="col-md-12 akreditasyon-content">
          <div id="surec" className="akreditasyon-content-item">    
            <div className="akreditasyon-content-title">Süreç</div>
            <div>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row">01 Ocak-31 Ocak</th>
                    <td>Kurumların HEPDAK'a yazılı başvurusu</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Şubat-28 Şubat</th>
                    <td>Başvurunun değerlendirilmesi, kabul edilenlere maliyetin bildirilmesi</td>
                  </tr>
                  <tr>
                    <th scope="row">1 - 31 Mart</th>
                    <td>Kurumların, imzalı kabul mektubunu <strong>ozmendilek@yahoo.com</strong> mail adresi aracılığı ile HEPDAK'a yollaması</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Nisan – 10 Temmuz</th>
                    <td>Kurumların öz değerlendirme raporlarını (ÖDR) hazırlaması, basılı ve flash bellek ile HEPDAK’a yollaması</td>
                  </tr>
                  <tr>
                    <th scope="row">10 Temmuz – 31 Ağustos</th>
                    <td><p>HEPDAK'ın ÖDR ön incelemesini yapması;</p>
                    <p>Format ve içerik uygunsuzluğu varsa; yetersizlikler, kurum tarafından 15 gün içinde giderilir</p>
                    <p>Eksikliklerini bu sürede gidermeyen programların başvurusu geri çekilmiş sayılır</p>
                    <p>Standart yetersizlikleri olan kurumlar bir sonraki dönem başvurabilir</p></td>
                  </tr>
                  <tr>
                    <th scope="row">1 Eylül – 30 Eylül</th>
                    <td><p>HEAK'ın, akreditasyon başvurusu yapan programların değerlendirmeye alınıp alınmayacaklarına karar vermesi</p>
                    <p>HEAK'ın, değerlendirilebilir kararı alınan kurumlar için değerlendirme takımlarını oluşturması</p>
                    <p>Raporların flash bellek ile kurumlar tarafından değerlendiricilere ulaştırılması</p></td>
                  </tr>
                  <tr>
                    <th scope="row">1 Ekim – 15 Kasım</th>
                    <td>ÖDR’nun takımlar tarafından değerlendirilmesi</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Kasım – 20 Aralık</th>
                    <td>Kurum ziyareti</td>
                  </tr>
                  <tr>
                    <th scope="row">1 Ocak – 15 Nisan</th>
                    <td>Değerlendirme raporunun HEAK'a teslimi, HEAK tarafından incelenmesi, kesin kararın alınması, kararın duyurulması</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
	    	</div>
	    </div>
    </MasterPage>
)
export default Surec
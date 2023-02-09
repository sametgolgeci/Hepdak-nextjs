import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | Hepdak Sunumları</title>
	    </Head>
	       <div className="genel">
            <h1>HEPDAK Sunumları</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HemsirelikEgitimindeDonusum.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel Hemşirelik Eğitiminde Dönüşüm Hemşirelik Eğitimini Güçlendirme (24-26 Kasım 2022)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.DilekOzmen-HemsirelikLisansProgramlarındaEgitim-OgretimSurecleri.pdf"><a target="_blank">- Prof. Dr. Dilek Özmen - Hemşirelik Lisans Programlarında Eğitim - Öğretim Süreçleri (22-25 Eylül 2022)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HemsirelikEgitimindeAkreditasyon.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - Türkiye'de Hemşirelik Eğitiminde Akreditasyon (16-18 Aralık 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.GulserenKocaman-YuksekogretimdeKaliteKulturu.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - Yükseköğretimde Kalite Kültürü (27 Kasım 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.GulserenKocaman-HemsirelikEgitimindeAkreditasyon.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - Hemşirelik Eğitiminde Akreditasyon (17 Kasım 2021)</a></Link></td>
                  </tr>  
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HEPDAK’SExperiences.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - HEPDAK’S Experiences with Virtual Training Workshops (21 Temmuz 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Doc.Dr.SergulDuygulu-PresentationofHEPDAK.pdf"><a target="_blank">- Doç. Dr. Sergül Duygulu - Presentation of HEPDAK (21 Temmuz 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_6.pdf"><a target="_blank">- Prof. Dr. Dilek Özmen - EPDAD Kongre Sunumu (05 Haziran 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-19.UlusalHemsirelikOgrencileriKongresiSunumu.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - 19. Ulusal Hemşirelik Öğrencileri Kongresi Sunumu (04 Haziran 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_4.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - Pandemide Hemşirelik Eğitim Programlarının Akreditasyonu (28 Mayıs 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_5.pdf"><a target="_blank">- Prof. Dr. Şenay Ünsal Atan - Hemşirelik Haftası Etkinliği (12 Mayıs 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HEPDAKResponsetoCOVID-19Pandemic.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - HEPDAK Response to COVID-19 Pandemic (28 Nisan 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Doc.Dr.SergulDuygulu-HEPDAK-AIC.pdf"><a target="_blank">- Doç. Dr. Sergül Duygulu - HEPDAK - AIC Staff Exchange Program (27-28 Nisan 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Doc.Dr.FatosKorkmaz-CouncilofHigherEducation.pdf"><a target="_blank">- Doç. Dr. Fatoş Korkmaz - Council of Higher Education (27 Nisan 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_2.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - EPDAD IV Uluslararası Öğretmen Eğitimi ve Akreditasyon Kongresi Sunumu (19 Aralık 2020)</a></Link></td>
                  </tr>                 
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
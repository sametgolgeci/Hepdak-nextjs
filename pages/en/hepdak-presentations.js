import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Kaynak = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | HEPDAK Presentations</title>
	    </Head>
	       <div className="genel">
            <h1>HEPDAK Presentations</h1>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.DilekOzmen-HemsirelikLisansProgramlarındaEgitim-OgretimSurecleri.pdf"><a target="_blank">- Prof. Dr. Dilek Özmen - Learning - Teaching Processes in Nursing Undergraduate Programs (22-25 September 2022)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HemsirelikEgitimindeAkreditasyon.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - Accreditation in Nursing Education in Türkiye (16-18 December 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.GulserenKocaman-YuksekogretimdeKaliteKulturu.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - Quality Culture in Higher Education (27 November 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.GulserenKocaman-HemsirelikEgitimindeAkreditasyon.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - Accreditation in Nursing Education (17 November 2021)</a></Link></td>
                  </tr>  
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HEPDAK’SExperiences.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - HEPDAK’S Experiences with Virtual Training Workshops (21 July 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Doc.Dr.SergulDuygulu-PresentationofHEPDAK.pdf"><a target="_blank">- Assoc. Dr. Sergül Duygulu - Presentation of HEPDAK (21 July 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_6.pdf"><a target="_blank">- Prof. Dr. Dilek Özmen - EPDAD Congress Presentation (05 June 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-19.UlusalHemsirelikOgrencileriKongresiSunumu.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - 19th National Nursing Students Congress Presentation (04 June 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_4.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - Accreditation of Nursing Education Programs in the Pandemic (28 May 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_5.pdf"><a target="_blank">- Prof. Dr. Şenay Ünsal Atan - Nursing Week Event (12 May 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Prof.Dr.AylaBayikTemel-HEPDAKResponsetoCOVID-19Pandemic.pdf"><a target="_blank">- Prof. Dr. Ayla Bayık Temel - HEPDAK Response to COVID-19 Pandemic (28 April 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Doc.Dr.SergulDuygulu-HEPDAK-AIC.pdf"><a target="_blank">- Assoc. Dr. Sergül Duygulu - HEPDAK - AIC Staff Exchange Program (27-28 April 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/Doc.Dr.FatosKorkmaz-CouncilofHigherEducation.pdf"><a target="_blank">- Assoc. Dr. Fatoş Korkmaz - Council of Higher Education (27 April 2021)</a></Link></td>
                  </tr>
                  <tr>
                    <td><Link href="doc/hepdak_sunumlari/belge_2.pdf"><a target="_blank">- Prof. Dr. Gülseren Kocaman - EPDAD IV International Teacher Education and Accreditation Congress Presentation (19 December 2020)</a></Link></td>
                  </tr>                 
                </tbody>
              </table>
            </div>
    </MasterPage>
)
export default Kaynak
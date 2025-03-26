import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Akredite = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Accredited Institutions</title>
      </Head>
      <div className="genel"><h1>Accredited Institutions</h1></div>
      <div className="row akreditasyon">
        <div className="col-md-12 akreditasyon-content">
          <div id="akredite" className="akreditasyon-content-item">         
            <div className="akreditasyon-content-subtitle"></div>
            <table className="table table-striped">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">Faculty/College</th>
                  <th scope="col">Accreditation Date</th>
                  <th scope="col">Accreditation End Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Acıbadem Mehmet Ali Aydınlar University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-acibadem-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-acibadem.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2019</p>
                    <p>01.04.2021</p>
                    <p>30.09.2024</p>
                  </td>
                  <td>
                    <p>30.09.2021</p>
                    <p>30.09.2024</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Akdeniz University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-akdeniz-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-akdeniz.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2020</p>
                    <p>04.04.2022</p>
                  </td>
                  <td>
                    <p>30.09.2022</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ataturk University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-ataturk-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>01.05.2016</p>
                    <p>04.04.2022</p>
                  </td>
                  <td>
                    <p>30.09.2018</p>
                    <p>27.03.2024</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Başkent University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-baskent-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>04.04.2022</td>
                  <td>30.09.2027</td>
                </tr>
                <tr>
                  <th scope="row">Bezmialem Vakıf University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-bezmialem-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-bezmialem-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Dokuz Eylül University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-dokuz-eylul-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-dokuz-eylul.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2019</p>
                    <p>01.04.2021</p>
                    <p>30.09.2024</p>
                  </td>
                  <td>
                    <p>30.09.2021</p>
                    <p>30.09.2024</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Ege University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-ege-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>01.05.2016</p>
                    <p>01.05.2018</p>
                    <p>02.04.2021</p>
                  </td>
                  <td>
                    <p>30.09.2018</p>
                    <p>30.09.2021</p>
                    <p>30.09.2026</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Erciyes University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-erciyes-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-erciyes-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>01.05.2016</p>
                    <p>01.05.2018</p>
                    <p>02.04.2021</p>
                    <p>07.04.2023</p>
                  </td>
                  <td>
                    <p>30.09.2018</p>
                    <p>30.09.2021</p>
                    <p>30.09.2023</p>
                    <p>30.09.2026</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Erzincan Binali Yıldırım University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-erzincan-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Gazi University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-gazi-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-gazi-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Hacettepe University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-hacettepe-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>01.04.2018</p>
                    <p>04.04.2020</p>
                    <p>07.04.2023</p>
                  </td>
                  <td>
                    <p>30.09.2020</p>
                    <p>30.09.2023</p>
                    <p>30.09.2028</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">İnönü University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-inonu-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Istanbul Medipol University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-medipol-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>01.04.2018</p>
                    <p>04.04.2020</p>
                    <p>07.04.2023</p>
                  </td>
                  <td>
                    <p>30.09.2020</p>
                    <p>30.09.2023</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Istanbul University Cerrahpaşa Florence Nightingale Faculty of Nursing<br/><Link href="../doc/rapor/rapor-cerrahpasa-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-cerrahpasa-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Izmir Katip Çelebi University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-izmir-katip-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Karadeniz Technical University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-karadeniz-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Maltepe University School of Nursing<br/><Link href="../doc/rapor/rapor-maltepe-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>04.04.2022</td>
                  <td>30.09.2024</td>
                </tr>
                <tr>
                  <th scope="row">Manisa Celal Bayar University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-manisa-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Marmara University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-marmara-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-marmara.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2020</p>
                    <p>04.04.2022</p>
                  </td>
                  <td>
                    <p>30.09.2022</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Necmettin Erbakan University Faculty of Nursing<br/><Link href="../doc/rapor/rapor-erbakan-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Ondokuz Mayıs University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-ondokuz-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-omu.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2020</p>
                    <p>04.04.2022</p>
                  </td>
                  <td>
                    <p>30.09.2022</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">University of Health Sciences Gülhane Faculty of Nursing<br/><Link href="../doc/rapor/rapor-gata-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Health Sciences University Hamidiye Faculty of Nursing<br/><Link href="../doc/rapor/rapor-hamidiye-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2028</td>
                </tr>
                <tr>
                  <th scope="row">Sakarya University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-sakarya-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-sakarya-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>06.04.2017</p>
                    <p>04.04.2019</p>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>01.04.2019</p>
                    <p>30.09.2022</p>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">SANKO University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-sanko-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Sivas Cumhuriyet University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-sivas-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>30.09.2025</td>
                </tr>
                <tr>
                  <th scope="row">Tekirdağ Namık Kemal University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-tekirdag-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-tekirdag-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2022</p>
                    <p>27.03.2024</p>
                  </td>
                  <td>
                    <p>30.09.2024</p>
                    <p>30.09.2027</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Trakya University Faculty of Health Sciences Department of Nursing<br/><Link href="../doc/rapor/rapor-trakya-ara.pdf" className="akreditasyon-rapor">Interim Report</Link> | <Link href="../doc/rapor/rapor-trakya.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>
                    <p>04.04.2019</p>
                    <p>01.04.2021</p>
                    <p>30.09.2024</p>
                  </td>
                  <td>
                    <p>30.09.2021</p>
                    <p>30.09.2024</p>
                    <p>30.09.2025</p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">Yeditepe University Faculty of Health Sciences Department of Nursing (English)<br/><Link href="../doc/rapor/rapor-yeditepe-genel.pdf" className="akreditasyon-rapor">General Report</Link></th>
                  <td>07.04.2023</td>
                  <td>03.09.2024</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MasterPage>
)
export default Akredite
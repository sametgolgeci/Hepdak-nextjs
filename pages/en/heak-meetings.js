import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Belgeler = () => (
    <MasterPage>
      <Head>
	      <title>HEPDAK | HEAK Meetings</title>
	    </Head>
      <div className="row">
        <div className="genel col-md-12 col-sm-12">
          <h1 id="heak">HEAK Meetings</h1>
          <table className="table table-striped">
            <tbody>
              <tr>
                <th scope="row" width="10px">23</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_23.pdf"><a>March 27, 2024(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">22</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_22.pdf"><a>August 31, 2023(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">21</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_21.pdf"><a>April 03-06, 2023(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">20</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_20.pdf"><a>September 02-03, 2022(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">19</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_19.pdf"><a>April 01-03, 2022(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">18</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_18.pdf"><a>September 02-03, 2021(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">17</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_17.pdf"><a>April 01-02, 2021(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">16</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_16.pdf"><a>September 30, 2020(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">15</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_15.pdf"><a>April 01, 2020(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row" width="10px">14</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_14.pdf"><a>September 03, 2019(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">13</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_13.pdf"><a>April 04, 2019(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">12</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_12.pdf"><a>September 10, 2018(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">11</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_11.pdf"><a>April 11, 2018(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">10</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_10.pdf"><a>September 08, 2017(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">9</th>            
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_9.pdf"><a>April 06, 2017(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">8</th>            
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_8.pdf"><a>September 08, 2016(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_7.pdf"><a>April 29, 2016(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_6.pdf"><a>September 04, 2015(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_5.pdf"><a>March 22, 2013(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_4.pdf"><a>December 06-07, 2012(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_3.pdf"><a>September 06-07, 2012(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_2.pdf"><a>October 10, 2011(in Turkish)</a></Link></td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>HEAK Meeting - <Link href="doc/heak/heak_komisyon_1.pdf"><a>April 04, 2011(in Turkish)</a></Link></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </MasterPage>
)
export default Belgeler
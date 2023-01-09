import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Uye = () => (
    <MasterPage>
	    <Head>
	      <title>HEPDAK | Değerlendirici Listesi</title>
	    </Head>
      <div className="genel">
	    <h1>HEPDAK Değerlendirici Listesi</h1>
	    <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">1</th>
                    <td width="350px">Prof. Dr. Esra Akın</td>
                    <td>İzmir Kâtip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Prof .Dr. Semiha Akın</td>
                    <td>Sağlık Bilimleri Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Doç. Dr. Burcu Akpınar Söylemez</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Doç. Dr. Betül Aktaş</td>
                    <td>İzmir Kâtip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Doç. Dr. İmatullah Akyar</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Doç. Dr. Sevil Albayrak</td>
                    <td>Kırıkkale Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Prof. Dr. Naime Altay</td>
                    <td>Gazi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Doç. Dr. Merlinda Aluş Tokat</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Prof. Dr. Melek Ardahan</td>
                    <td>İzmir Kâtip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Doç. Dr. Havva Arslan Yürümezoğlu</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Doç. Dr. Manar Aslan</td>
                    <td>Trakya Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Doç. Dr. Kerime Bademli</td>
                    <td>Akdeniz Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                   <tr>
                    <th scope="row">13</th>
                    <td>Doç. Dr. Tülay Başak</td>
                    <td>Sağlık Bilimleri Üniversitesi Gülhane Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td>Prof. Dr. Ülkü Baykal</td>
                    <td>İstanbul Üniversitesi Cerrahpaşa Florence Nightingale Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td>Doç. Dr. Gönül Bodur</td>
                    <td>İstanbul Üniversitesi Cerrahpaşa Florence Nightingale Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td>Prof. Dr. Kadriye Buldukoğlu</td>
                    <td>Akdeniz Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Prof. Dr. Funda Büyükyılmaz</td>
                    <td>İstanbul Üniversitesi Cerrahpaşa Florence Nightingale Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>Dr. Öğr. Üyesi Ümran Çevik</td>
                    <td>Tokat Gaziosmanpaşa Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Doç. Dr. Gülsüm Nihal Çürük</td>
                    <td>İzmir Ekonomi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td>Doç. Dr. Yıldız Denat</td>
                    <td>Aydın Adnan Menderes Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td>Doç. Dr. Melike Dişsiz</td>
                    <td>Sağlık Bilimleri Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td>Doç. Dr. Aylin Durmaz Edeer</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>Doç. Dr. Sergül Duygulu</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>Doç. Dr. Ayfer Ekim</td>
                    <td>İstanbul Bilgi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Doç. Dr. Sevilay Erden</td>
                    <td>Çukurova Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">26</th>
                    <td>Doç. Dr. Seher Ergüney</td>
                    <td>Atatürk Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>Prof. Dr. Kafiye Eroğlu</td>
                    <td>Koç Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">28</th>
                    <td>Doç. Dr. Hülya Fırat Kılıç</td>
                    <td>Doğu Akdeniz Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">29</th>
                    <td>Doç. Dr. Nilgün Göktepe</td>
                    <td>Ordu Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">30</th>
                    <td>Doç. Dr. Zehra Gök Metin</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">31</th>
                    <td>Prof. Dr. Nuran Güler</td>
                    <td>Sivas Cumhuriyet Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">32</th>
                    <td>Doç. Dr. Sevil Güler</td>
                    <td>Gazi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">33</th>
                    <td>Prof. Dr. Perihan Güner</td>
                    <td>Koç Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">34</th>
                    <td>Doç. Dr. Kamer Gür</td>
                    <td>Marmara Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">35</th>
                    <td>Prof. Dr. Gülten Güvenç</td>
                    <td>Sağlık Bilimleri Üniversitesi Gülhane Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">36</th>
                    <td>Prof. Dr. Sevgi Hatipoğlu</td>
                    <td>Karatay Üniversitesi Sağlık Bilimleri Yüksekokulu</td>
                  </tr>
                  <tr>
                    <th scope="row">37</th>
                    <td>Doç. Dr. Duygu Hiçdurmaz</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">38</th>
                    <td>Dr. Öğrt. Üyesi Burçin Işık</td>
                    <td>Gaziantep İslam Bilim Ve Teknoloji Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">39</th>
                    <td>Doç. Dr. Zehra Işık Çalışkan</td>
                    <td>Nevşehir Hacı Bektaş Veli Üniversitesi Semra Ve Vefa Küçük Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">40</th>
                    <td>Dr. Öğr. Üyesi Demet İnangil</td>
                    <td>Sağlık Bilimleri Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">41</th>
                    <td>Doç. Dr. Nur İzgü</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">42</th>
                    <td>Prof. Dr. Hasibe Kadıoğlu</td>
                    <td>Marmara Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                   <tr>
                    <th scope="row">43</th>
                    <td>Doç. Dr. Gülendam Karadağ</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">44</th>
                    <td>Doç. Dr. Songül Karadağ</td>
                    <td>Çukurova Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">45</th>
                    <td>Prof. Dr. Ayfer Karadakovan</td>
                    <td>Ege Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">46</th>
                    <td>Prof. Dr. Azize Karahan</td>
                    <td>Başkent Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">47</th>
                    <td>Dr. Öğr. Üyesi Gülten Karahan Okuroğlu</td>
                    <td>Marmara Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">48</th>
                    <td>Doç. Dr. Zeynep Karaman Özlü</td>
                    <td>Atatürk Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">49</th>
                    <td>Doç.Dr. Hülya Karataş</td>
                    <td>Harran Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">50</th>
                    <td>Prof. Dr. Sultan Kav</td>
                    <td>Başkent Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">51</th>
                    <td>Prof. Dr. Oya Kavlak</td>
                    <td>Ege Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">52</th>
                    <td>Prof. Dr. Hülya Kaya</td>
                    <td>İstanbul Üniversitesi Cerrahpaşa Florence Nightingale Hemşirelik</td>
                  </tr>
                   <tr>
                    <th scope="row">53</th>
                    <td>Prof. Dr. Ayla Keçeci</td>
                    <td>Düzce Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">54</th>
                    <td>Prof. Dr. Meral Kelleci</td>
                    <td>Sivas Cumhuriyet Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">55</th>
                    <td>Doç. Dr. Gülten Koç</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">56</th>
                    <td>Dr. Öğr. Üyesi Medine Koç</td>
                    <td>Tokat Gaziosmanpaşa Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">57</th>
                    <td>Doç. Dr. Emine Kol</td>
                    <td>Akdeniz Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">58</th>
                    <td>Doç. Dr. Fatoş Korkmaz</td>
                    <td>Hacettepe Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">59</th>
                    <td>Doç. Dr. Gülbahar Korkmaz Aslan</td>
                    <td>Pamukkale Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">60</th>
                    <td>Prof. Dr. Özen Kulakaç</td>
                    <td>Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">61</th>
                    <td>Prof. Dr. Hatice Mert</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">62</th>
                    <td>Prof. Dr. Hülya Okumuş</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi - Emekli</td>
                  </tr>
                   <tr>
                    <th scope="row">63</th>
                    <td>Doç. Dr. Fatma Orgun</td>
                    <td>Ege Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">64</th>
                    <td>Prof. Dr. Özlem Ovayolu</td>
                    <td>Gaziantep Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">65</th>
                    <td>Doç. Dr. Gülçin Özalp Gerçeker</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">66</th>
                    <td>Doç. Dr. Birgül Özkan</td>
                    <td>Yıldırım Beyazıt Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">67</th>
                    <td>Prof. Dr. Dilek Özmen</td>
                    <td>Manisa Celal Bayar Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">68</th>
                    <td>Prof. Dr. Candan Öztürk</td>
                    <td>Yakın Doğu Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">69</th>
                    <td>Dr. Öğr. Üyesi Berrin Pazar</td>
                    <td>Lokman Hekim Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">70</th>
                    <td>Doç. Dr.Selda Rızalar</td>
                    <td>Sağlık Bilimleri Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">71</th>
                    <td>Doç. Dr. Aklime Sarıkaya</td>
                    <td>İstanbul Sabahattin Zaim Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">72</th>
                    <td>Prof. Dr. Ümit Seviğ</td>
                    <td>Emekli Öğretim Üyesi</td>
                  </tr>
                   <tr>
                    <th scope="row">73</th>
                    <td>Dr. Öğr. Üyesi Hale Sezer</td>
                    <td>İzmir Bakırçay Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">74</th>
                    <td>Doç. Dr. Özlem Sinan</td>
                    <td>Ankara Yıldırım Beyazıt Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">75</th>
                    <td>Doç. Dr. Gülten Sucu Dağ</td>
                    <td>Doğu Akdeniz Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">76</th>
                    <td>Dr. Öğr. Üyesi Hatice Şen</td>
                    <td>Uluslararası Kıbrıs Üniversitesi Sağlık Bilimleri Yüksekokulu</td>
                  </tr>
                  <tr>
                    <th scope="row">77</th>
                    <td>Doç. Dr. Emine Şenyuva</td>
                    <td>İstanbul Üniversitesi Cerrahpaşa Florence Nightingale Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">78</th>
                    <td>Doç. Dr. Banu Terzi</td>
                    <td>Akdeniz Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">79</th>
                    <td>Doç. Dr. Betül Tosun</td>
                    <td>Hasan Kalyoncu Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">80</th>
                    <td>Prof. Dr. Gülengün Türk</td>
                    <td>Aydın Adnan Menderes Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">81</th>
                    <td>Doç. Dr. Emine Türkmen</td>
                    <td>İstinye Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">82</th>
                    <td>Doç. Dr. Esra Uğur</td>
                    <td>Acıbadem Mehmet Ali Aydınlar Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                   <tr>
                    <th scope="row">83</th>
                    <td>Doç. Dr. Sevim Ulupınar</td>
                    <td>İstanbul Üniversitesi Florence Nightingale Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">84</th>
                    <td>Prof. Dr. Aynur Uysal Toraman</td>
                    <td>Ege Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">85</th>
                    <td>Prof. Dr. Elif Ünsal Avdal</td>
                    <td>İzmir Kâtip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">86</th>
                    <td>Prof. Dr. Şenay Ünsal Atan</td>
                    <td>Ege Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">87</th>
                    <td>DProf. Dr. Vesile Ünver</td>
                    <td>Acıbadem Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">88</th>
                    <td>Doç. Dr. Bahar Vardar İnkaya</td>
                    <td>Ankara Yıldırım Beyazıt Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">89</th>
                    <td>Doç. Dr. Fatma Vural</td>
                    <td>Dokuz Eylül Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">90</th>
                    <td>Doç. Dr. Emriye Hilal Yayan</td>
                    <td>İnönü Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">91</th>
                    <td>Doç. Dr. Kerziban Yenal</td>
                    <td>Lefke Avrupa Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">92</th>
                    <td>Prof. Dr. Hatice Yıldırım Sarı</td>
                    <td>İzmir Katip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                   <tr>
                    <th scope="row">93</th>
                    <td>Prof. Dr. Hicran Yıldız</td>
                    <td>DUludağ Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">94</th>
                    <td>Prof. Dr. Medine Yılmaz</td>
                    <td>İzmir Katip Çelebi Üniversitesi Sağlık Bilimleri Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">95</th>
                    <td>Doç Dr. Afife Yurttaş</td>
                    <td>Sağlık Bilimleri Üniversitesi Hamidiye Hemşirelik Fakültesi</td>
                  </tr>
                  <tr>
                    <th scope="row">96</th>
                    <td>Prof. Dr. Ayten Zaybak</td>
                    <td>Ege Üniversitesi Hemşirelik Fakültesi</td>
                  </tr>
                </tbody>
              </table>
      <h1>HEPDAK Öğrenci Değerlendirici Listesi</h1>
      <table className="table table-striped">
                <tbody>
                  <tr>
                    <th scope="row" width="10px">1</th>
                    <td width="350px">Berfin Akbulut</td>
                    <td>Marmara Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Beyza Akgün</td>
                    <td>İstanbul Medipol Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Melek Alaçam</td>
                    <td>Dokuz Eylül Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Dilan Altıntaş</td>
                    <td>Başkent Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Özlem Aleyna Arslan</td>
                    <td>Hacettepe Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>Teslime Aybüke Ay</td>
                    <td>Başkent Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>Zeynep Ayan</td>
                    <td>Sakarya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">8</th>
                    <td>Beyza Nur Aydın</td>
                    <td>Erciyes Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">9</th>
                    <td>Remziye Aydoğdu</td>
                    <td>Tekirdağ Namık Kemal Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">10</th>
                    <td>Simge Ayık</td>
                    <td>Dokuz Eylül Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">11</th>
                    <td>Nupelda Azboy</td>
                    <td>Acıbadem Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">12</th>
                    <td>Cansu Babadağ</td>
                    <td>Hacettepe Üniversitesi</td>
                  </tr>
                   <tr>
                    <th scope="row">13</th>
                    <td>Zeynep Balık</td>
                    <td>Bezmialem Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">14</th>
                    <td>Öykü Balkaya</td>
                    <td>Başkent Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">15</th>
                    <td>Nilay Baltalı</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">16</th>
                    <td>Yasemin Nur Barutçu</td>
                    <td>Karabük Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">17</th>
                    <td>Kübra Battal</td>
                    <td>Ondokuz Mayıs Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">18</th>
                    <td>Zeynep Sude Beşikçi</td>
                    <td>İstanbul Medipol Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">19</th>
                    <td>Firdevs Birinci</td>
                    <td>Medipol Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">20</th>
                    <td>Deniz Calda</td>
                    <td>Bezmialem Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">21</th>
                    <td>Şerife Cingiz</td>
                    <td>Akdeniz Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">22</th>
                    <td>Nazan Çakır</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">23</th>
                    <td>Fatih Mehmet Çakıroğlu</td>
                    <td>Dokuz Eylül Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">24</th>
                    <td>Emine Çileli</td>
                    <td>Trakya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">25</th>
                    <td>Yağmur Şeyma Demir</td>
                    <td>İzmir Katip Çelebi Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">26</th>
                    <td>Mervenur Doğan</td>
                    <td>Mcbü Mezunu</td>
                  </tr>
                  <tr>
                    <th scope="row">27</th>
                    <td>Neslihan Nur Dursun</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">28</th>
                    <td>Gözde Eser</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">29</th>
                    <td>Simanur Güler</td>
                    <td>Hacettepe Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">30</th>
                    <td>Elif Seden Gürel</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">31</th>
                    <td>Melisa Güven</td>
                    <td>Marmara Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">32</th>
                    <td>Ezgi İpek</td>
                    <td>Marmara Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">33</th>
                    <td>Aslı Kaynar</td>
                    <td>Acıbadem Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">34</th>
                    <td>Mahmut Keskin</td>
                    <td>Atatürk Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">35</th>
                    <td>Mertcan Kırış</td>
                    <td>İstanbul Üniversitesi (Cerrahpaşa)</td>
                  </tr>
                  <tr>
                    <th scope="row">36</th>
                    <td>Bilal Kutlu</td>
                    <td>Trakya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">37</th>
                    <td>Ceyda Mutlu</td>
                    <td>Trakya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">38</th>
                    <td>Duygu Mutlu</td>
                    <td>Trakya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">39</th>
                    <td>Büşra Nur</td>
                    <td>Celal Bayar Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">40</th>
                    <td>Beyza Özsoy</td>
                    <td>Gazi Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">41</th>
                    <td>Güzin Öztürk</td>
                    <td>Dokuz Eylül Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">42</th>
                    <td>Talha Muhammed Sabah</td>
                    <td>Başkent Üniversitesi</td>
                  </tr>
                   <tr>
                    <th scope="row">43</th>
                    <td>Halime Sağlamdemir</td>
                    <td>Sakarya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">44</th>
                    <td>Ayşe Nur Saray</td>
                    <td>Akdeniz Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">45</th>
                    <td>Rabia Nur Serbest</td>
                    <td>Sakarya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">46</th>
                    <td>Sude Sever</td>
                    <td>İstanbul Üniversitesi (Cerrahpaşa)</td>
                  </tr>
                  <tr>
                    <th scope="row">47</th>
                    <td>Feyzullah Şahin</td>
                    <td>Trakya Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">48</th>
                    <td>Kübra Şahin</td>
                    <td>Erciyes Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">49</th>
                    <td>Yasemin Şahin</td>
                    <td>Akdeniz Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">50</th>
                    <td>Cihan Şeker</td>
                    <td>Tekirdağ Namık Kemal Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">51</th>
                    <td>Emre Şerefoğlu</td>
                    <td>Ondokuz Mayıs Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">52</th>
                    <td>Tuğçe Tan</td>
                    <td>İstanbul Üniversitesi (Cerrahpaşa)</td>
                  </tr>
                   <tr>
                    <th scope="row">53</th>
                    <td>Kübra Taşar</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">54</th>
                    <td>Sude Nur Tekin</td>
                    <td>Medipol Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">55</th>
                    <td>İrem Tiftik</td>
                    <td>Acıbadem Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">56</th>
                    <td>Gizem Tunç</td>
                    <td>Hacettepe Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">57</th>
                    <td>Beyza Üstündağ</td>
                    <td>Hacettepe Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">58</th>
                    <td>Ece Yavaş</td>
                    <td>Katip Çelebi Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">59</th>
                    <td>Ecem Nur Yavaş</td>
                    <td>Celal Bayar Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">60</th>
                    <td>Başak Yazıcı</td>
                    <td>Ege Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">61</th>
                    <td>Lamia Nurevsa Yıldız</td>
                    <td>Atatürk Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">62</th>
                    <td>Beste Yıldız</td>
                    <td>Sakarya Üniversitesi</td>
                  </tr>
                   <tr>
                    <th scope="row">63</th>
                    <td>Ömer Faruk Yiğit</td>
                    <td>Acıbadem Üniversitesi</td>
                  </tr>
                  <tr>
                    <th scope="row">64</th>
                    <td>Şevval Yolcu</td>
                    <td>Dokuz Eylül Üniversitesi</td>
                  </tr>
                </tbody>
              </table>
              </div>
    </MasterPage>
)
export default Uye

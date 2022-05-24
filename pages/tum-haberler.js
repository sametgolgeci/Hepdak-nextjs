import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tum = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Tüm Haberler</title>
      </Head>
      <div className="genel">
        <h1>Tüm Haberler</h1>
        <div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmiiki">2022</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#yirmibir">2021</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item " data-toggle="pill" href="#yirmi">2020</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item " data-toggle="pill" href="#ondokuz">2019</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmiiki" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi (24 Mayıs 2022)</div>
                <div className="main-top-second-content">
                  <p>HEPDAK faaliyetleri her yıl Yükseköğretim Kalite Kurulu (YÖKAK) tarafından izlenmektedir. 2022 yılı izleme toplantısı 24 Mayıs 2022 tarihinde gerçekleştirilmiştir. İlk oturumda izleme yetkilisi ile tanışma sonrası HEPDAK Başkanı Prof. Dr. Gülseren KOCAMAN 2021 yılına ilişkin yürütülen HEPDAK faaliyetleri hakkında bir sunum yapmıştır. Sonraki iki oturumda akreditasyon kurulu ve komisyonlarını temsilen HEPDAK üyeleri ve öğrenci değerlendiriciden oluşan paydaşlar ile odak grup görüşmeleri gerçekleştirilmiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/yokak-ziyaret-2022/1.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/yokak-ziyaret-2022/1.PNG" alt="YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/yokak-ziyaret-2022/2.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/yokak-ziyaret-2022/2.PNG" alt="YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/yokak-ziyaret-2022/3.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/yokak-ziyaret-2022/3.PNG" alt="YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/yokak-ziyaret-2022/4.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/yokak-ziyaret-2022/4.PNG" alt="YÖKAK tarafından düzenlenen izleme ziyareti gerçekleştirildi"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri (21 Nisan 2022)</div>
                <div className="main-top-second-content">
                  <p>Moderatörlüğünü Prof. Dr. Ayla BAYIK TEMEL'in yürüttüğü toplantıda Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi Öğretim Üyesi Prof. Dr. Özen KULAKAÇ ve mezun öğrenci Fatih DİLEK mezun izlemi ile ilgili görüşlerini paylaşmışlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-21Nisan2022/1.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-21Nisan2022/1.jpg" alt="Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-21Nisan2022/2.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-21Nisan2022/2.jpg" alt="Webinar: Hemşirelik Programları Mezunlarını Neden İzlemelidir? : Öğretim Üyesi ve Mezun Görüşleri"/></a></div>
                  </div>
                </div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/1gM75nsUgp0" allowFullScreen></iframe>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar (23 Mart 2022)</div>
                <div className="main-top-second-content">
                  <p>Moderatörlüğünü Prof. Dr. Dilek ÖZMEN'in yaptığı toplantıda Ege Üniversitesi Hemşirelik Fakültesi Dekanı Prof. Dr. Ayşegül DÖNMEZ, Başkent Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölüm Başkanı Azize KARAHAN ve Tekirdağ Namık Kemal Üniversitesi Sağlık Yüksekokulu Müdürü Doç.Dr. Tülin YILDIZ, kurumlarının akreditasyon süreçlerinde karşılaştıkları güçlükleri, güçlüklere yönelik girişimleri, akreditasyon sürecinin kuruma, öğrencilere, öğretim elemanlarına ve kuruma katkılarını içeren sunumlarını paylaşmışlardır. Toplantıya Türkiye'nin farklı üniversitelerinden 341 öğretim elemanı katılım göstermiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/1.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/1.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/2.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/2.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/3.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/3.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/4.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/4.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/5.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/5.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/6.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/6.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/7.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/7.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-23Mart2022/8.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-23Mart2022/8.PNG" alt="Webinar: Hemşirelik Eğitim Programlarında Akreditasyon Yolculuğu: Güçlükler-Kazanımlar"/></a></div>
                  </div>
                </div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6gJUMWW9N_Y" allowFullScreen></iframe>
                  </div>
                </div>  
              </div>
              <div className="main-top-second" id="ceenqa">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 9 (16 Mart 2022)</div>
                <div className="main-top-second-content">
                  <p>CEENQA'NIN iki ayda bir yapılan 10.toplantısı 16 Mart 2022 tarihinde gerçekleştirilmiştir.Bu
toplantıya HEPDAK’ı temsilen Prof. Dr. Ayla BAYIK TEMEL, Doç. Dr. Fatoş Korkmaz ve Doç. Dr.
Merlinda Aluş katılmışlardır.</p>
                  <p>Toplantının bu oturumunda CEENQA’ya üye Kazakistan akreditasyon kuruluşu Independent Agency
For Accreditaiton and Rating (IAAR) temsilcisi Aikyz Bauyrzhankyzy kuruluşun yapısı, faaliyet alanları
ve uluslararası akreditasyon süreçlerini paylaşmıştır.</p>
                  <p>Estonya kuruluşu Estonian Quality Agency for Higher and Vocational Education (EKKA) temsilcisi Liia
Lauri 2009 yılından beri faaliyet gösteren kuruluşun yapısı, ülkenin yükseköğrenim sistemi ve
derneğin faaliyet alanlarını uzaktan eğitim sürecinde zorluklar ve uzaktan eğitimde kalite etiketi
konularını katılımcılar ile paylaşmıştır.</p>
                  <p>Oturumun son sunumunu Romanya kuruluşu olan The Romanıan Agency For Qualıty Assurance In
Hıgher Educatıon (ARACIS) Octavian Mădălin Bunoıu temsilcisi gerçekleştirmiştir. Sunumda bu
kapsamda ülkede akreditasyon süreçlerinin alt yapısını tamamlayan yasal düzenlemeler,
yükseköğrenim sistemi ve ARACIS’in faaliyet alanları ile kuruluş yapısı sunulmuştur.</p>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Webinar: Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme (15 Mart 2022)</div>
                <div className="main-top-second-content">
                  <p>"Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme" başlıklı  webinar 15 Mart 2022 tarihinde gerçekleştirilmiştir.</p><p>Moderatörlüğünü Prof. Dr. Gülseren KOCAMAN'ın yaptığı toplantıda Başkent Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü öğretim üyesi Prof. Dr. Ebru AKGÜN ÇITAK ve Akdeniz Üniversitesi Hemşirelik Fakültesi öğretim üyesi Doç. Dr. Serpil İNCE kurumlarında ölçme ve değerlendirme süreçlerindeki uygulamaları sunmuşlardır. Toplantıya Türkiye'nin farklı üniversitelerinden 402 öğretim elemanı katılım göstermiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-15Mart2022/1.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-15Mart2022/1.jpg" alt="Webinar: Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-15Mart2022/2.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-15Mart2022/2.jpg" alt="Webinar: Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-15Mart2022/3.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-15Mart2022/3.jpg" alt="Webinar: Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/webinar-15Mart2022/4.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/webinar-15Mart2022/4.jpg" alt="Webinar: Hemşirelik Eğitiminde İyi Uygulama Örnekleri: Ölçme-Değerlendirme"/></a></div>
                  </div>
                </div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/SxLWLhF6fTE" allowFullScreen></iframe>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK 2021-2022 Dönemi Akreditasyon İçin Ziyaret Edilen Kurumlar ile Değerlendirme Toplantısı (15 Mart 2022)</div>
                <div className="main-top-second-content">
                  <p>HEPDAK 2022 yılında akreditasyon için ziyaret edilen 11 kurum ile 15 Mart 2022 tarihinde çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda kurum yöneticileri veya temsilcileri ile akreditasyon süreçlerine ve standartlara ilişkin görüş alışverişinde bulunulmuştur.</p>
                </div>
                <div className="main-top-second-content"><a href="doc/paydas_toplantilari/belge_6.pdf" target="_blank">- 2021-2022 Dönemi Akreditasyon İçin Ziyaret Yapılan Kurumlar ile Toplantı</a></div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ziyaret-edilen-kurumlar-degerlendirme-2022/1.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/ziyaret-edilen-kurumlar-degerlendirme-2022/1.jpg" alt="HEPDAK 2021-2022 Dönemi Akreditasyon İçin Ziyaret Edilen Kurumlar ile Değerlendirme Toplantısı (15 Mart 2022)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ziyaret-edilen-kurumlar-degerlendirme-2022/2.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/ziyaret-edilen-kurumlar-degerlendirme-2022/2.jpg" alt="HEPDAK 2021-2022 Dönemi Akreditasyon İçin Ziyaret Edilen Kurumlar ile Değerlendirme Toplantısı (15 Mart 2022)"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ziyaret-edilen-kurumlar-degerlendirme-2022/3.jpg" target="_blank"><img className="calistay-img" src="/img/haberler/ziyaret-edilen-kurumlar-degerlendirme-2022/3.jpg" alt="HEPDAK 2021-2022 Dönemi Akreditasyon İçin Ziyaret Edilen Kurumlar ile Değerlendirme Toplantısı (15 Mart 2022)"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı (1 Mart 2022)</div>
                <div className="main-top-second-content">
                  <p>2022-2023 dönemi akreditasyon için başvuran kurumlara yönelik bilgilendirme toplantısı 1 Mart 2022 tarihinde çevrimiçi olarak gerçekleştirilmiştir. Toplantıda HEPDAK değerleri, tematik analiz ve HEPDAK beklentileri, HEPDAK değerlendirme süreci ve özdeğerlendirme rehberi içeriğinin hazırlanması, HEMSİS kullanımı ile ilgili konulara yer verilmiştir.</p>
                </div>
                <div className="main-top-second-content"><a href="/doc/kurumlara-bilgilendirme-toplantisi-2022/belge-1.pdf" target="_blank">- 2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı</a></div>
                <div className="main-top-second-content"><a href="/doc/kurumlara-bilgilendirme-toplantisi-2022/belge-2.pdf" target="_blank">- Özdeğerlendirme İçeriğinin Hazırlaması</a></div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/1.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/1.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/2.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/2.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/3.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/3.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/4.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/4.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/5.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/5.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/6.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/6.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/7.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/7.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/8.PNG" target="_blank"><img className="calistay-img" src="/img/haberler/kurumlara-bilgilendirme-toplantisi-2022/8.PNG" alt="2022-2023 Dönemi Akreditasyon İçin Başvuran Kurumlara Yönelik Bilgilendirme Toplantısı"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Lisans Programı Yöneticileri Toplantısı (24 Şubat 2022)</div>
                <div className="main-top-second-content">
                  <p>Hemşirelik Lisans Programı Yöneticileri Toplantısı 24 Şubat 2022 tarihinde çevrimiçi olarak gerçekleştirilmiştir. Toplantı ile ilgili sunum içeriğine <a href="doc/paydas_toplantilari/belge_4.pdf">buradan</a> ulaşabilirsiniz.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/1.png" alt="Hemşirelik Lisans Programı Yöneticileri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/2.png" alt="Hemşirelik Lisans Programı Yöneticileri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/3.png" alt="Hemşirelik Lisans Programı Yöneticileri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/4.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/4.png" alt="Hemşirelik Lisans Programı Yöneticileri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/5.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/5.png" alt="Hemşirelik Lisans Programı Yöneticileri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/6.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-lisans-programi-yoneticileri-toplantisi-2022/6.png" alt="Hemşirelik Lisans Programı Yöneticileri Toplantısı"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı (8 Şubat 2022)</div>
                <div className="main-top-second-content">
                  <p>Takım Başkanları ile Standart Komisyonu Üyeleri toplantısı 8 Şubat 2022 tarihinde çevrimiçi olarak gerçekleştirilmiştir. 2022 Akreditasyon takımlarında yer alan takım başkanları Hemşirelik Lisans Eğitim Programı Standartlarına yönelik takım üyelerinden de alınan görüş ve önerileri paylaşmıştır. Standart Komisyonu gelen görüş ve önerileri komisyonda değerlendireceklerini iletmiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-standart-komisyonu-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-standart-komisyonu-2022/1.png" alt="Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-standart-komisyonu-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-standart-komisyonu-2022/2.png" alt="Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-standart-komisyonu-2022/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-standart-komisyonu-2022/3.png" alt="Takım Başkanları ile Standart Komisyonu Üyeleri Toplantısı"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Öğrenci Değerlendirici Eğitim Çalıştayı (5-6 Şubat 2022)</div>
                <div className="main-top-second-content">
                  <p>Öğrenci Değerlendirici Eğitim Çalıştayı 5-6 şubat 2022 tarihlerinde çevrimiçi olarak
gerçekleştirilmiştir. Onaltı üniversiteden toplam 33 öğrenci çalıştaya katılım sağlamıştır. İki
günlük çalıştayda ilk gün akreditasyon süreçleri ve öğrenci standartları ile ilgili sunumlar,
ikinci gün küçük grup çalışmaları ve grup sunumları şeklinde gerçekleştirilmiştir.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/1.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/2.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/3.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/4.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/4.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/5.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/5.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/6.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/6.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/7.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/7.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-calistay-2022/8.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-calistay-2022/8.png" alt="Öğrenci Değerlendirici Eğitim Çalıştayı"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Öğrenci Değerlendiriciler ile Geribildirim Toplantısı (18 Ocak 2022)</div>
                <div className="main-top-second-content">
                  <p>2022 yılı akreditasyon süreçlerine katılan öğrenci değerlendiriciler ile 18 Ocak 2022 tarihinde
çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda değerlendirme takımlarında yer alan
öğrenciler değerlendirme süreçleri, yerinde ziyaret planı ve öğrenci standartlarına ilişkin
görüş ve öneri paylaşımında bulunmuşlardır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/1.png" alt="Öğrenci Değerlendiriciler ile Geribildirim Toplantısı "/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/ogrenci-degerlendirici-geribildirim-2022/2.png" alt="Öğrenci Değerlendiriciler ile Geribildirim Toplantısı "/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Değerlendirme Takım Üyeleri ile Toplantı (6 Ocak 2022)</div>
                <div className="main-top-second-content">
                  <p>2022 yılı akreditasyon sürecinde yer alan değerlendirme takım üyeleri ile 6 Ocak 2022
tarihinde çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda değerlendirme
takımında yer alan değerlendiricilerin Hemşirelik Lisans Eğitim Programı
Standartlarına, uzaktan ve yerinde ziyaret planı ve işleyişine, akreditasyon
süreçlerine yönelik görüş ve önerileri alınmıştır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/degerlendirme-takimi-2022/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/degerlendirme-takimi-2022/1.png" alt="Değerlendirme Takımı 2022"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/degerlendirme-takimi-2022/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/degerlendirme-takimi-2022/2.png" alt="Değerlendirme Takımı 2022"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/degerlendirme-takimi-2022/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/degerlendirme-takimi-2022/3.png" alt="Değerlendirme Takımı 2022"/></a></div>
                  </div>
                </div>  
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Takım Başkanları Toplantısı (4 Ocak 2022)</div>
                <div className="main-top-second-content">
                  <p>2022 yılı akreditasyon sürecinde yer alan takım başkanları ile 4 Ocak 2022 tarihinde
çevrimiçi bir toplantı gerçekleştirilmiştir. Toplantıda takım başkanlarının Hemşirelik
Lisans Eğitim Programı Standartlarına, uzaktan ve yerinde ziyaret planı ve işleyişine,
akreditasyon süreçlerinde kullanılan formlara yönelik görüş ve önerileri alınmıştır.</p>
                </div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-toplantisi-2022/1.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-toplantisi-2022/1.jpeg" alt="Takım Başkanları Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-toplantisi-2022/2.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-toplantisi-2022/2.jpeg" alt="Takım Başkanları Toplantısı"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/takim-baskanlari-toplantisi-2022/3.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/takim-baskanlari-toplantisi-2022/3.jpeg" alt="Takım Başkanları Toplantısı"/></a></div>
                  </div>
                </div>  
              </div>
            </div>
            <div id="yirmibir" className="container tab-pane fade">
              <div className="main-top-second" id="ceenqa">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 8 (17 Kasım 2021)</div>
                <div className="main-top-second-content">
                  <p>CEENQA'NIN iki ayda bir yapılan sekizinci toplantısı 17 Kasım 2021 tarihinde
gerçekleştirildi. Bu toplantıya HEPDAK’ı temsilen Prof. Dr. Ayla BAYIK TEMEL katıldı.</p>
                  <p>Azerbeycan da faaliyet gösteren kalite ajansı TİKTA’yı temsilen Ilham Humbatov,
kuruluşun yapısı, uluslararası üyelikleri, amaçları, kurum değerlendirmeleri konusunda
bilgiler verdi.</p>
                  <p>Montenegro (Karadağ) da faaliyet gösteren kalite ajansı AKOKVO,( Agency For Control
And Quality Assurance Of Higher Education Montenegro ) temsilen Tijana Stanković
“Quality Assurance of Higher Education in Montenegro -achievements and chalenges”
konulu sunumunda ajansın yapısı, ülkede yükseköğrenim sistemi, paydaşlar, misyon, vizyon,
istatistikler, kalite değerlendirme süreçleri ve yaşanan zorluklar konusunda açıklamalar yaptı.</p>
                  <p>Milica Kavedžić AKOKVO da yürütülen BAQUAL (Better Academıc Qualıfıcatıons
Through Qualıty Assurance) konulu yaşam boyu öğrenmenin kazandırılması ile ilgili ortak
projenin planlamalarını açıkladı. <a href="https://www.ceenqa.org/ceenqa-bi-monthly-meetings/">CEENQA Bi-Monthly Meetings</a></p>
                </div>
              </div>
              <div className="main-top-second" id="ceenqa">
                <div className="main-top-second-title">CEENQA'nın Yıllık Genel Kurulu ve Çalıştayı (13 Ekim 2021)</div>
                <div className="main-top-second-content">
                  <p>CEENQA'nın yıllık Genel Kurulu ve beraberindeki çalıştayı 13 Ekim 2021'de online gerçekleşmiştir.Toplantıya HEPDAK’ı temsilen Prof. Dr. Ayla BAYIK TEMEL, Doç. Dr. Sergül DUYGULU katılmıştır. CEENQA yeni dönem yönetim kurulu üye seçimi için tam üye olarak oylamaya katılım sağlanmıştır. Genel Kurulda Olgun Çiçek (YÖDAK, Kuzey Kıbrıs) CEENQA'nın yeni Başkan Yardımcısı, Simona Lache (ARACIS, Romanya) ve Benjamin Muhamedbegoviç (HEA, Bosna Hersek) yeni yönetim kurulu üyeleri olarak seçilmişlerdir.</p>
                  <p>“Çevrimiçi Değerlendirmeler ve Dış Kalite Güvencesi” konulu çalıştayda, pandeminin getirdiği değerlendirme prosedürlerinde yapılan değişiklikler ele alınmıştır. Çeşitli Avrupa ülkelerindeki ajansların deneyimlerine dayanarak, hangi deneyimlerin kazanıldığı, değişen koşullara uyum sağlamak için nelerin geliştirilebileceği ve gelecekte kalite güvence prosedürlerinin nasıl yürütüleceği tartışılmıştır. Çalıştayda bu kapsamda Anca Prisacariu “Dış Değerlendirme Güvenliği Süreçlerinin Online Formatta Uyarlanması” konulu sunumunda online değerlendirmede sınırlılıklar, etik durumlar konusunda görüşlerini paylaşmıştır. Nataliia Stukalo, NAQA’nin Ukrayna’da pandemi döneminde kalite güvenliği ile ilgili deneyimlerini açıklamış, bu kapsamda olumlu ve olumsuz denyimler, kalite güvenliği süreçlerinde dijitalizasyon konularında bilgi vermiştir. Klemen Šubic CEENQA adına Olgun Çiçek ile birlikte hazırladıkları HEPDAK’ında öneriler verdiği “Uzaktan Değerlendirmeler İçin Rehber”in (Guidelines For Distance Evaluation) hazırlanma amacı, online değerlendirmede ziyaret öncesi ve ziyaret sürecinde dikkat edilecek hususlar hakkında bilgi vermiştir. Jolanta Silka (AIKA) sunumunda online değerlendirmelerde iletişimin ve geri bildirimin önemi konusunda bilgiler vermiştir. Ayrıca genel kurulda Türkiye’den DEPAD (Diş Hekimliği Eğitimi Programları Akreditasyon Derneği) gözlemci üye ve Azerbeycan’dan TKTA (Azerbaycan Kalite Ajansı) – tam üyelik başvurusu kabul edilmiştir.</p>
                </div>
              </div>
              <div className="main-top-second" id="iyi">
                <div className="main-top-second-title">İyi Uygulama Örnekleri</div>
                <div className="main-top-second-content">27-29 Eylül 2021 tarihleri arasında düzenlenen “Hemşirelik Eğitiminin Geleceği 3” Sempozyumunda sunulan “İyi Uygulama Örnekleri: Pandemi Sürecinde Çevrimiçi Teorik ve Uygulama Eğitimi” sunumlarına buradan ulaşabilirsiniz.</div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/MhYcF-1ucy0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/qge5DtnNH0A" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="main-top-second" id="hemsire">
                <div className="main-top-second-title">Hemşirelik Eğitiminin Geleceği 3” Sempozyumu gerçekleştirildi</div>
                <div className="main-top-second-content">HEPDAK ve HEMED iş birliği ile <strong>“Hemşirelik Eğitiminin Geleceği 3: Pandemi Sürecinde Eğitimi İyileştirme Yaklaşımları”</strong> temalı sempozyum <strong>27-29 Eylül 2021</strong> tarihlerinde çevrim içi olarak gerçekleştirilmiştir. Üç gün süren sempozyumda beş kursa toplam 197, sempozyuma 290 kişi katılım göstermiştir.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-egitiminin-gelecegi-3/1.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-egitiminin-gelecegi-3/1.png" alt="Hemşirelik Eğitiminin Geleceği 3"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-egitiminin-gelecegi-3/2.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-egitiminin-gelecegi-3/2.png" alt="Hemşirelik Eğitiminin Geleceği 3"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/img/haberler/hemsirelik-egitiminin-gelecegi-3/3.png" target="_blank"><img className="calistay-img" src="/img/haberler/hemsirelik-egitiminin-gelecegi-3/3.png" alt="Hemşirelik Eğitiminin Geleceği 3"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second" id="ceenqayedi">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 7</div>
                <div className="main-top-second-content">
                  <p>Kalite güvencesi alanında CEENQA’ya üye ajansların kurumlarını ve faaliyetlerini tanıttığı, yenilikçi çalışmaların paylaşıldığı periyodik toplantıların yedincisi <strong>15 Eylül 2021</strong> gerçekleştirilmiştir. Çevrimiçi gerçekleştirilen toplantıya HEPDAK’ı temsilen Prof. Dr. Ayla BAYIK TEMEL, Doç. Dr. Sergül DUYGULU, Doç.Dr. Merlinda ALUŞ TOKAT ve Doç. Dr Fatoş KORKMAZ katılmıştır.</p>
                  <p>Toplantıda Stela Guvir,Moldova Cumhuriyeti eğitim ve Araştırma Kalite Güvenliği Ajansı (Ulusal National Agency for Quality Assurance in Education and Research, Republic of Moldova) (ANACIP-ANACEC) ile ilgili organizasyon yapısı, görevler, dış değerlendirme süreci ve standartları, uluslararası işbirliği ve tanınırlık, projeleri konusunda bilgiler vermiştir. Emita Blackdan, Hırvatistan Yüksek Öğrenim ve Bilim için Kalite Ajansı ve Kalite Güvenliği Sistemi (Croatian Agency for Science and Higher Education and QA System in Croatia) AZVO -ASHE ile ilgili olarak Hırvatistan’da yüksek öğretim sistemi, kalite güvenlik sistemi,faaliyetleri, misyon, vizyon ve stratejileri, pandemi sürecinde iş organizasyonu ve geleceğe yönelik planlamalar, uluslararası ilişkileri konusunda açıklamalar yapmıştır.</p>
                  <p>Colin Tück, Avrupa Yüksek Öğrenim İçin Kalite Güvenliği Ağı (European Quality Assurance Register for Higher Education) (EQAR DEQAR) temsilen Avrupa Yüksek Öğrenim Alanı ve Bologna Süreci (The European Higher Education Area -EHEA) kapsamında uluslararası şeffaflık ve otomatik tanınmanın desteklenmesi konusunda bilgiler vermiştir. Sunumlar ile ilgili ayrıntılı bilgilere <a href="https://www.ceenqa.org/ceenqa-bi-monthly-meetings/">https://www.ceenqa.org/ceenqa-bi-monthly-meetings/</a> linkindenulaşabilir.</p>
                </div>
              </div>
              <div className="main-top-second" id="kurum">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 9-10 Eylül 2021 tarihlerinde çevrimiçi olarak gerçekleştirilmiştir. Eğitime 45 kurumdan 122 öğretim elemanı katılım göstermiştir. İki günlük çalıştay ilk gün tartışmaya dayalı anlatımlar, ikinci gün küçük grup çalışmaları ile interaktif olarak yürütülmüştür.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-1.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-1.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-2.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-2.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-3.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-3.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-4.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-4.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-5.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-5.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-6.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-6.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-7.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-7.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-8.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-8.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-9.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-9.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/kurumlar_egitim_9/photo-10.PNG" target="_blank"><img className="calistay-img" src="/doc/kurumlar_egitim_9/photo-10.PNG" alt="Kurumlar için Eğitim Çalıştayı 9"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 6</div>
                <div className="main-top-second-content">Kalite güvencesi alanında CEENQA’ya üye ajansların kurumlarını, faaliyetlerini tanıttığı ve yenilikçi çalışmaların periodik olarak paylaşıldığı altıncı topplantı 21 Temmuz 2021 tarihinde çevrimiçi olarak gerçekleştirildi.HEPDAK’ı temsilen bu online toplantıya Prof. Dr. Ayla Bayık Temel, Doç. Dr. Sergül Duygulu, Doç. Dr Fatoş Korkmaz ve Doç. Dr. Merlinda Aluş Tokat katılmışlardır. Bu toplantıda Doç. Dr. Sergül Duygulu HEPDAK’IN misyonu, amaçları, değerleri, yapısı program değerlendirme süreçleri, standartları ve geleceğe yönelik planlarını açıklamıştır. Nataliia Stukalo Ukrayna ‘daYüksek Öğrenimde Kalite Güvenliği konulu sunumunda; NAQA ajansının misyonu, amaçları, Ukrayna’da yüksek öğrenim, ajansın üyelikleri, Covid 19 pandemi sürecinde faaliyetler ve ülkeler arası faaliyetleri hakkından açıklamalar yapmıştır. Prof. Dr. Ayla Bayık Temel uzaktan değerlendirme ve uzaktan ziyaretler açısından iyi uygulama örneği olarak HEPDAK’ın değerlendirmeciler için düzenlediği uzaktan eğitim çalıştayı hakkında bilgiler vermiştir.</div>
                <div className="main-top-second-content"><a href="/doc/ceenqa-6/sunum-1.pdf" target="_blank">- Prof. Dr. Ayla Bayık Temel CEENQA Sunumu</a></div>
                <div className="main-top-second-content"><a href="/doc/ceenqa-6/sunum-2.pdf" target="_blank">- Doç. Dr. Sergül Duygulu CEENQA Sunumu</a></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Otomasyon Sistemine Geçiş</div>
                <div className="main-top-second-content">HEPDAK Temmuz 2021 itibariyle 2021-2022 Akreditasyon dönemi için otomasyon sistemine geçmiştir. Otomasyon sistemine kullanıcı adı ve şifre ile <a href="https://hemsis.hepdak.org.tr/admin/auth/login">https://hemsis.hepdak.org.tr/admin/auth/login</a> adresinden giriş yapılmaktadır. Akredite olmak için başvuran kurumlar öninceleme sürecinde belgelerini ve ilgili kanıtlarını sisteme yüklemişlerdir. Değerlendirme takımları da sistem üzerinden öninceleme süreçlerini tamamlamışlardır. Sistemin işleyişine ilişkin başvuran kurumlara ve değerlendirme takımlarına çevrimiçi eğitimler gerçekleştirilmiştir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Prof. Dr. Gülseren KOCAMAN’ın Pandeminin Hemşirelik Eğitimine Etkileri</div>
                <div className="main-top-second-content">Yeni Yüzyıl Üniversitesi Sağlık Bilimleri Fakültesi tarafından düzenlenen Ulusal Hemşirelik Kongresi - 1 14 Haziran 2021 tarihinde düzenlenmiş, HEPDAK Yönetim Kurulu Başkanı Prof.Dr. Gülseren KOCAMAN davetli konuşmacı olarak katılmıştır. Prof.Dr. Kocaman “Pandeminin Hemşirelik Eğitimine Etkileri” konulu bir sunum yapmıştır.</div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/ZqxOfyOE4bs?start=6025" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Adayı Eğitimi Çalıştayı</div>
                <div className="main-top-second-content">HEPDAK Değerlendirici Adayı Eğitimi Çalıştayı 10-12 Haziran 2021 tarihleri arasında çevrimiçi olarak gerçekleştirilmiştir. Çalıştaya 21 yeni değerlendirici adayı katılmıştır. Eğitimde grup çalışmalarında takım başkanı olarak dört, grup çalışmaları gözlemcisi olarak iki deneyimli HEPDAK değerlendiricisi yer almıştır. Üç günlük çalıştay küçük grup ve ana salon çalışmaları ile interaktif olarak yürütülmüştür.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/1.JPG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/1.JPG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/2.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/2.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/3.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/3.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/4.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/4.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/5.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/5.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/6.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/6.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/7.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/7.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/8.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/8.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/9.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/9.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/10.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/10.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/11.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/11.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/12.PNG" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/12.PNG" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/13.png" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/13.png" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/14.jpg" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/14.jpg" alt="Değerlendirici Eğitimi 6"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/degerlendirici_egitim_6/15.jpg" target="_blank"><img className="calistay-img" src="/doc/degerlendirici_egitim_6/15.jpg" alt="Değerlendirici Eğitimi 6"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Prof. Dr. Ayla Bayık’ın Hemşirelik Öğrencileri Kongre Konuşması</div>
                <div className="main-top-second-content">2001 yılından beri her yıl farklı bir üniversitenin ev sahipliğinde düzenlenen, bu yıl 3-4 Haziran 2021 tarihleri arasında düzenlenen 19.Ulusal Hemşirelik Öğrencileri Kongresi, Edirne Trakya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü ev sahipliği ile E- Kongre olarak çevrimiçi platformda gerçekleşmiştir. Bu kongre kapsamında HEPDAK’ı temsilen Prof. Dr. Ayla Bayık Temel 4 Haziran 2021 tarihinde “Hemşirelik Eğitimi ve Akreditasyon Öğrencilerin Akreditasyon Sürecine Katılımı “konulu bir konferans vermiştir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Doç.Dr.Dilek Özmen’in Öğretmen Eğitimi Ve Akreditasyon Kongresi Konuşması</div>
                <div className="main-top-second-content">HEPDAK Yönetim Kurulu Sekreteri Doç. Dr. Dilek Özmen 4-6 Haziran 2021 tarihleri arasında çevrimiçi olarak gerçekleştirilen V. Uluslararası Öğretmen Eğitimi Ve Akreditasyon Kongresi’ne davetli konuşmacı olarak katılmış, “HEPDAK 2020-2021 Yılı Program Değerlendirme Ve Akreditasyon Deneyimler” başlıklı bir konuşma gerçekleştirmiştir. Doç.Dr. Özmen HEPDAK tarafından 2020-2021 yılı akreditasyon süreçlerine ilişkin ayrıntılı bilgiler vermiştir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Doç.Dr.Şenay ÜNSAL ATAN’ın Sağlık Profesyonelleri ile Hemşireliğin Dünü, Bugünü, Yarını Konuşması</div>
                <div className="main-top-second-content">Etkin Kampüs Hemşirelik Haftası Özel Etkinliği kapsamında 16 Mayıs 2021 tarihinde düzenlenen 21.YY MESLEĞİ: HEMŞİRELİK paneline HEPDAK Yönetim Kurulu üyesi Doç. Dr. Şenay ÜNSAL ATAN davetli konuşmacı olarak katılmış ve “Sağlık Profesyonelleri ile Hemşireliğin Dünü, Bugünü, Yarını” başlıklı bir konuşma gerçekleştirmiştir.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-6 col-sm-12"><a href="/img/haberler/genel/hemsireligin-dunu-bugunu-yarini.jpeg" target="_blank"><img className="calistay-img" src="/img/haberler/genel/hemsireligin-dunu-bugunu-yarini.jpeg" alt="Hemşireliğin Dünü Bugünü Yarını"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Akreditasyon Belge Takdim Törenleri</div>
                <div className="main-top-second-content"><p>HEPDAK Akreditasyon değerlendirmeleri sonucu  2021 yılında akredite olmaya hak kazanan kurumlardan Ege Üniversitesi Hemşirelik Fakültesi ve Erciyes Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümüne  31 Mayıs 2021, Dokuz Eylül Üniversitesi Hemşirelik Fakültesi ve Acıbadem Üniversitesi  Sağlık Bilimleri Fakültesi Hemşirelik Bölümüne 1 Haziran 2021, Trakya Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümüne 2 Haziran 2021 tarihlerinde yapılan online toplantı ile akreditasyon belgeleri takdim edilmiştir.</p>
                  <div className="row">
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Acibadem.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Acibadem.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/DokuzEylul.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/DokuzEylul.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Ege.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Ege.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Erciyes.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Erciyes.PNG"/></a></div>
                    <div className="col-md-4"><a href="img/duyurular/akreditasyon-2021/Trakya.PNG" target="_blank"><img className="second-content-img" src="img/duyurular/akreditasyon-2021/Trakya.PNG"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Uluslararası Değerlendirmeci Seçimi</div>
                <div className="main-top-second-content">HEPDAK değerlendiricilerimizden Doç. Dr. Sergül Duygulu ve Doç. Dr. Fatoş Korkmaz  ARACİS- Romanya Yüksek Öğretim Kalite Güvenlik Kurumu (Romanian Agency for Quality Assurance in Higher Education) tarafından Uluslararası Değerlendirmeci olarak seçilmişlerdir. Değerlendirmecilerimizi kutluyor, başarılar diliyoruz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Prof. Dr. Gülseren KOCAMAN’ın Pandemide Hemşirelik Eğitim Programlarının Akreditasyonu Konuşması</div>
                <div className="main-top-second-content">Ondokuz Mayıs Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü tarafından 28 Ocak 2021 tarihinde düzenlenen IV. Hemşireliği Güçlendirme Sempozyumu’na HEPDAK Yönetim Kurulu Başkanı Prof.Dr. Gülseren KOCAMAN davetli konuşmacı olarak katılmış, “Pandemide Hemşirelik Eğitim Programlarının Akreditasyonu” konulu bir sunum yapmıştır.</div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/WfUFV-aq9Iw?start=4237" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Dış Değerlendirici Seçimi</div>
                <div className="main-top-second-content">HEPDAK Değerlendiricilerimizden ve aynı zamanda HEPDAK Uluslararası Dış Değerlendirme Çalışma Grubu üyelerimizden Doç.Dr.Sergül Duygulu ve Doç.Dr.Fatoş Korkmaz HEPDAK’ın üyesi olduğu CEENQA’nın (Orta ve Doğu Avrupa Yükseköğretim Kalite Güvence Ajansları Ağı) bir diğer üyesi olan ve HEPDAK’ın Değerlendirici Değişim Programı (CEENQA Staff Exchange Program) gerçekleştirdiği Letonya Akreditasyon Ajansı AIC (Academic Information Center)-/AIKA (Quality Agency for Higher Education ) yönetim kurulu tarafından 12.05.2021 tarihinde Dış Değerlendirici olarak seçilmiştir. Değerlendirici hocalarımızı tebrik eder başarılı çalışmalar yürütmelerini dileriz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 5</div>
                <div className="main-top-second-content">CEENQA tarafından 2021 yılı etkinlikleri kapsamında iki ayda bir yürütülen 5. bilimsel toplantı 19 Mayıs 2021 tarihinde gerçekleştirilmiş olup, toplantıya HEPDAK’ı temsilen Prof.Dr. Ayla Bayık Temel, Doç. Dr. Sergül Duygulu ve Doç. Dr. Fatoş Korkmaz katılmışlardır.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Uluslararası Çevrimiçi Değerlendirici Değişim Programı</div>
                <div className="main-top-second-content">HEPDAK, üyesi olduğu CEENQA (Orta ve Doğu Avrupa Yükseköğretim Kalite Güvence Ajansları Ağı) tarafından 2018 yılından beri üyesi olan ajansları arasında gerçekleştirilen, Personel Değişim Programı (CEENQA Staff Exchange Program) kapsamında 2020 yılında Letonya Riga da yer alan AIC (Academic Information Center)-/AIKA (Quality Agency for Higher Education ) ile eşleştirilmiş ancak 2020 yılı içinde tamamlanması planlanan yüzyüze ziyaret Covid 19 pandemisi nedeni ile ertelenmiş ve 27-28 Nisan 2021 tarihleri arasında online olarak tamamlanmıştır. Toplantı HEPDAK’dan /Türkiye 21, AIC/AIKA’dan/Letonya 14 kişinin katılımı ile gerçekleştirilmiştir. Toplantı, AIC/AIKA başkanı Jolanta Silca, HEPDAK başkanı Prof.Dr. Gülseren Kocaman ve CEENQA Personel Değişim Programı koordinatörü Prof.Dr. Olgun Çiçek’in açılış konuşmaları ile başlamıştır. İkili iş birliğinin yapılandırıldığı toplantıda ilk oturumda; Türkiye’de Yüksek Öğrenim ve Akreditasyon Sistemi (Doç. Dr. Fatoş Korkmaz), HEPDAK’ın amaçları, değerleri, misyonu, akreditasyon süreci (Doç. Dr. Sergül Duygulu) ile ilgili bilgiler paylaşıldı. Toplantının ikinci oturumunda; Letonya’da Yüksek Öğrenim ve Akreditasyon Sistemi ve ajansın rolleri, yapı ve işlevleri, uluslararası işbirliği faaliyetleri, değerlendirme sürecinin adımları, hazırlık, kurum ziyaretleri, rapor yazma ve karar süreçleri hakkında bilgiler paylaşıldı (Ketija ANDERSONE ve Ilva GRIGORJEVA). Üçüncü oturumda; Jolanta SILKA kurumun paydaşlarını tanıtarak paydaşlarla iletişim yollarını açıkladı. Son oturumda; Prof. Ayla BAYIK TEMEL, COVID-19 pandemisi sürecinde HEPDAK’ın akreditasyon faaliyetlerini, uzaktan eğitim yoluyla yürütülen hemşirelik eğitim programlarının akreditasyonunun değerlendirilmesi için hazırlanan uzaktan eğitim standartlarını ve yönergesini tanıtmıştır. Ayrıca hemşirelik eğitim program yöneticilerine yönelik gerçekleştirilen eğitim çalıştayı, HEPDAK değerlendiricilerinin uzaktan değerlendirme sürecine hazırlanmaları için düzenlenen eğitim çalıştayı ve online paydaş görüşlerinin tematik analiz sonuçlarını sunmuştur. Bu oturumda Letonya’da Yüksek Öğretim Kurumlarının dış değerlendirilmesi, tüm yükseköğretim programlarının akreditasyonu, program açma ya da programlardaki her türlü değişikliklerde onay verme ile ilgili faaliyetler, pandemi döneminde uzaktan değerlendirmede yürütülen süreçler Laila LEMKO ve Olga ŠŅUCINA tarafından aktarılmıştır.Toplantının sonunda her iki ajansın katılımcıları HEPDAK ve AIKA/ AIC arasında bu değişim programı ile başlayan iletişimin gelecekte sürdürülmesi konularında görüş birliğine vardılar. Toplantı ikili işbirliğine yönelik kapanış dilekleri ile sonlandırıldı.</div>
                <div className="main-top-second-content">
                  <a href="/doc/uluslararasi-1/belge_1.pdf" target="_blank">- CEENQA Online Staff Exchange Program</a><br/>
                  <a href="/doc/uluslararasi-1/belge_2.pdf" target="_blank">- HEPDAK Association for Evaluation and Accreditation of Nursing Education Programs</a><br/>
                  <a href="/doc/uluslararasi-1/belge_3.pdf" target="_blank">- HEPDAK : Response to COVID-19 Pandemic QUALITY ASSURANCE ACTIVITIES OF HEPDAK FOR DISTANCE EVALUATION</a><br/>
                  <a href="/doc/uluslararasi-1/belge_4.pdf" target="_blank">- Council of Higher Education - Turkey</a><br/>
                  <a href="/doc/uluslararasi-1/belge_5.pdf" target="_blank">- Distance Evaluation AIC AIKA</a><br/>
                  <a href="/doc/uluslararasi-1/belge_6.pdf" target="_blank">- Introduction AIC AIKA</a><br/>
                  <a href="/doc/uluslararasi-1/belge_7.pdf" target="_blank">- Stakeholders AIC AIKA</a><br/>
                  <a href="/doc/uluslararasi-1/belge_8.pdf" target="_blank">- Steps of assessment procedures AIC AIKA</a><br/>              
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı (28 Mart 2021)</div>
                <div className="main-top-second-content">Öğrenci Değerlendirici Eğitim programı çevrimiçi olarak 28 Mart 2021 tarihinde gerçekleştirilmiştir.Oniki farklı üniversiteden 24 öğrenci ile gerçekleştirilen eğitim grup çalışmaları ile interaktif olarak yürütülmüştür.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/1.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/1.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/2.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/2.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/3.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/3.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/4.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/4.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/5.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/5.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/6.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/6.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/7.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/7.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/8.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/8.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/9.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/9.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/10.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/10.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/11.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/11.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/12.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/12.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/13.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/13.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/14.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/14.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/15.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/15.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                    <div className="col-md-4 col-sm-12"><a href="/doc/ogrenci_egitim_4/16.jpg" target="_blank"><img className="calistay-img" src="/doc/ogrenci_egitim_4/16.jpg" alt="Öğrenci Eğitimi 28 Mart 2021"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Akreditasyonun Hemşirelik Eğitimindeki Önemi</div>
                <div className="main-top-second-content">HEPDAK ve HEMED işbirliği ile düzenlenen ve moderatörlüğünü HEPDAK Yönetim Kurulu Sekreteri Doç.Dr.Dilek Özmen’in yaptığı webinar 20 Mart 2021 tarihinde çevrimiçi olarak gerçekleştirilmiştir. &quot;Avustralya Hemşirelik ve Ebelik Akreditasyon Dernekleri ve Hemşirelik Okullarının Yükümlülükleri” konulu webinarda University of Newcastle College of Health, Medicine and Wellbeing School of Nursing and Midwifery ‘da görev yapan Oya Gümüşkaya bir sunum gerçekleştirmiştir.</div>
                <div className="main-top-second-content">
                  <div className="embed-responsive embed-responsive-16by9">
                    <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/lk88f6wosCg" allowFullScreen></iframe>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Kurumlar İçin Bilgilendirme Toplantısı (18 Mart 2021)</div>
                <div className="main-top-second-content">2021-2022 dönemi HEPDAK akreditasyonu için başvuran kurumlar için bilgilendirme toplantısı 18 Mart 2021 tarihinde gerçekleştirilmiştir. Dokuz üniversiteden 20 katılımcı ile gerçekleştirilen toplantıda “HEPDAK değerleri, Tematik analiz ve HEPDAK beklentileri, ÖDR hazırlarken dikkat edilmesi gerekenler, Eğitim planı analizi, Değerlendirme özeti ve PDÇ tablosu , HEPDAK desteği ve HEPDAK değerlendirme süreci” hakkında HEPDAK Başkanı Prof.Dr. Gülseren KOCAMAN tarafından bir sunum yapılmış, kurum temsilcilerinin soruları yanıtlanmıştır.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-6 col-sm-12"><a href="/img/haberler/genel/HEMSİS-bilgilendirme-2021.png" target="_blank"><img className="calistay-img" src="/img/haberler/genel/HEMSİS-bilgilendirme-2021.png" alt="HEMSİS Bilgilendirme 2021"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Yükseköğretim Kalite Kurulu 2021 Yılı HEPDAK İzleme Ziyareti</div>
                <div className="main-top-second-content">YÖKAK Dış Değerlendirme ve Akreditasyon Kuruluşlarını İzleme çalışmaları kapsamında 2020 yılı faaliyetlerimizi izlemek üzere görevlendirilen YÖKAK izleme yetkilisi Sayın Prof. Dr. Sina Ercan 25 Şubat 2021 tarihinde Derneğimize çevrimiçi izleme ziyaretini gerçekleştirmiştir. Dernek yönetim kurulu üyelerinin de (Prof. Dr. Ayla Bayık Temel, Doç. Dr. Dilek Özmen, Doç. Dr. Şenay Ünsal Atan, Prof. Dr. Ayten Zaybak) katıldığı ilk oturumda Yönetim Kurulu Başkanımız Prof. Dr. Gülseren Kocaman 2020 yılı HEPDAK faaliyetlerine yönelik bir sunum yapmıştır. İkinci oturumda ise, yönetim kurulu üyelerinin yanı sıra, HEAK üyeleri (Prof. Dr. Sevgi Hatipoğlu, Prof. Dr. Hülya Okumuş), Standartları Belirleme ve Geliştirme Komisyonu üyeleri (Prof. Dr. Kadriye Buldukoğlu, Doç. Dr. Sergül Duygulu), Tutarlılık Komisyonu üyeleri (Doç. Dr. Dilek Özmen, Doç. Dr. Şenay Ünsal Atan), öğrenci değerlendiriciler (Öğ. Aslı Kayar, Öğ. Mervenur Doğan) ve 2020 yılı faaliyetlerinde görev almış 2 değerlendiricinin (Prof. Dr. Ümit Seviğ, Prof. Dr. Medine Yılmaz) katılımı ile odak grup görüşmeleri yapılmıştır. Karşılıklı bilgi alışverişinin olduğu toplantı öneriler ve iyi dilekler ile tamamlanmıştır.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-6 col-sm-12"><a href="img/yok_ziyaret_2021/photo_1.jpg" target="_blank"><img className="calistay-img" src="img/yok_ziyaret_2021/photo_1.jpg" alt="YÖK Ziyaret"/></a></div>
                    <div className="col-md-6 col-sm-12"><a href="img/yok_ziyaret_2021/photo_2.jpg" target="_blank"><img className="calistay-img" src="img/yok_ziyaret_2021/photo_2.jpg" alt="YÖK Ziyaret"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Prof. Dr. Gülseren KOCAMAN’ın Yükseköğretimde Akreditasyon ve Hemşirelik Örneği Konuşması</div>
                <div className="main-top-second-content">Erzincan Binali Yıldırım Üniversitesi Sağlık Bilimleri Fakültesi Hemşirelik Bölümü tarafından 18 Ocak 2021 tarihinde düzenlenen akreditasyon etkinliklerine HEPDAK Yönetim Kurulu Başkanı Prof.Dr. Gülseren KOCAMAN davetli konuşmacı olarak katılmış ve “Yükseköğretimde Akreditasyon ve Hemşirelik Örneği” konulu bir sunum yapmıştır.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 3</div>
                <div className="main-top-second-content">19 Ocak 2021 tarihinde düzenlenen CEENQA’nın iki aylık toplantılarının üçüncüsüne HEPDAK ‘ı temsilen Prof. Dr. Ayla Bayık Temel ve Prof. Dr. Medine Yılmaz katılmıştır. ASIIN - Almanya temsilcisi Dr. Iring Wasser ve AIKA - Letonya temsilcisi Jolanta Silka faaliyetlerine ilişkin sunum yapmışlardır. ASIIN Ajansından Arne Thielenhaus veri ve kayıt yönetim sistemi ile ilgili kullandıkları kapsamlı çok dilli bilgisayar programı hakkında bilgi vermiştir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Takım Başkanları Toplantısı - 2021</div>
                <div className="main-top-second-content">2020-2021 HEPDAK Akreditasyon sürecinde çevrimiçi olarak gerçekleştirilen ziyaretlerdeki beş takım başkanı ve HEPDAK Yönetim Kurulu üyeleri 07 Ocak 2021 tarihinde çevrimiçi olarak yapılan toplantıda bir araya geldi. Takım başkanları ve Yönetim Kurulu üyeleri özellikle çevrimiçi ziyaret sürecinin yanı sıra tüm ziyaret süreci ile ilgili olarak karşılıklı bilgi alışverişinde bulundu.</div>
              </div>
            </div>
            <div id="yirmi" className="container tab-pane fade">
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantıları - 2</div>
                <div className="main-top-second-content">İki ayda bir düzenlenen CEENQA toplantılarının ikincisi 17 Kasım 2020 tarihinde çevrimiçi olarak gerçekleştirilmiştir. HEPDAK’ı temsilen toplantıya Prof. Dr. Ayla Bayık Temel, Prof. Dr. Hülya Okumuş ve Prof. Dr. Medine Yılmaz katılmışlardır. Toplantıda Çek Cumhuriyetinden NAB adına Martina Vidlakova ve Sırbistan’dan AHERS ajansı adına Duska Radmonavic sunum yapmışlardır.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Değerlendiriciler ve Kurumlar İçin Uzaktan Değerlendirme Eğitimi Çalıştayı (13 Kasım 2020)</div>
                <div className="main-top-second-content">Değerlendiriciler ve Kurumlar İçin Uzaktan Değerlendirme Eğitimi Çalıştayı 13 Kasım 2020 tarihinde çevrimiçi olarak gerçekleştirilmiştir. Uzaktan değerlendirme sürecine ilişkin eğitimler ile birlikte rol-play yöntemleri ile yürütülen eğitime 30 değerlendirici, akreditasyon için başvuran kurumlardan beş temsilci ve 4 öğrenci katılım göstermiştir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Paylaşım Toplantıları - 1</div>
                <div className="main-top-second-content">CEENQA genel kurulunda alınan karar doğrultusunda iki ayda bir düzenlenecek olan paylaşım toplantılarının ilki 15 Ekim 2020 tarihinde düzenlenmiş olup HEPDAK’ı temsilen Prof. Dr. Ayla Bayık Temel ve Prof. Dr. Hülya Okumuş katılmışlardır. Toplantıda QAA (NAKVIS), Slovenya’dan başkan Franci Demšar ve Kuzey Kıbrıs YÖDAK’ temsilen Akile Gürsoy sunumlar yapmışlardır.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Ağustos 2020)</div>
                <div className="main-top-second-content">Pandemi sürecinde HEPDAK Değerlendirici Eğitimi 10-12 Ağustos 2020 tarihleri arasında çevrimiçi olarak yürütülmüştür. Eğitime 15 değerlendirici olan / değerlendiricilik eğitim almış (tazelenme eğitimi amacıyla), 17 yeni değerlendirici adayı katılım göstermiştir. Üç günlük programda çeşitli çevrimiçi platformlar kullanılarak interaktif grup çalışmaları yürütülmüştür.</div>
                <div className="main-top-second-content">
                  <div className="row">
                    <div className="col-md-6 col-sm-12"><a href="img/haberler/hepdak-degerlendirici-egitimi-2020/1.jpg" target="_blank"><img className="calistay-img" src="img/haberler/hepdak-degerlendirici-egitimi-2020/1.jpg" alt="HEPDAK Değerlendirici Eğitimi 2020"/></a></div>
                    <div className="col-md-6 col-sm-12"><a href="img/haberler/hepdak-degerlendirici-egitimi-2020/2.jpg" target="_blank"><img className="calistay-img" src="img/haberler/hepdak-degerlendirici-egitimi-2020/2.jpg" alt="HEPDAK Değerlendirici Eğitimi 2020"/></a></div>
                  </div>
                </div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Uzaktan Eğitim Standartları (19 Haziran 2020)</div>
                <div className="main-top-second-content">HEPDAK Uzaktan Eğitim Standartları hazırlandı. İlgili dosyaya <Link href="/doc/b14_v1.docx"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">YÖKAK Saha Ziyareti</div>
                <div className="main-top-second-content">Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır. Bu bağlamda, YÖKAK tarafından HEPDAK izleme yetkilisi olarak görevlendirilen YÖKAK Üyesi Prof. Dr. İlker Murat Ar, 17 Ocak 2020 tarihinde ofisimizde bir saha ziyareti gerçekleştirmiştir. Toplantıya, HEPDAK Yönetim Kurulu üyeleri yanı sıra, HEAK Başkanı ile bir HEAK üyesi ve bir HEPDAK değerlendiricisi olmak üzere toplam sekiz kişi katılmıştır. HEPDAK Başkanının yaptığı 2019 yılı faaliyetlerini içeren sunumun ardından izleme yetkilisi Prof. Dr. İlker Murat Ar, HEPDAK uygulamalarında güçlü ve geliştirmeye açık yönler konularında önerilerde bulunmuştur. Toplantı, katılımcılarla yapılan yararlı bir görüş alışverişiyle sona ermiştir. HEPDAK Yönetim Kurulu, ilk kez yapılan izleme ziyaretini, akreditasyon süreçlerinin iyileştirilmesi açısından yol gösterici olarak değerlendirmiştir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Üyeliği Hakkında</div>
                <div className="main-top-second-content"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir.İlgili dökümana <Link href="doc/CEENQA_Application_HEPDAK_Decision.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</p></div>
              </div>
            </div>
            <div id="ondokuz" className="container tab-pane fade">     
              <div className="main-top-second">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 1 Aralık 2018 Cumartesi günü Anemon Ege Otel (İzmir)'de gerçekleştirilecektir. Çalıştay programına <Link href="doc/kurumlar-icin-egitim-calistayi-1aralik-2018-programi_v2.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQUA'da Sempozyum Haberimiz</div>
                <div className="main-top-second-content">CEENQUA'nın Temmuz haber bülteninde HEPDAK&HEMED birlikteliği ile gerçekleştirilen sempozyum haberimiz yer aldı. Habere <Link href="doc/8_1_july_2018.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Eğitiminin Geleceği: 19-20 Haziran 2018 Akreditasyon, Standartlar, İyi Uygulama Örnekleri</div>
                <div className="main-top-second-content"><p>Bilimsel Program, Kayıt & Konaklama, Davet tüm bilgileri <a href="http://www.hemsirelikegitiminingelecegi.com"><strong>buradan</strong></a> erişebilirsiniz.</p> <h6>Sempozyum Yeri ve İletişim</h6><p>Ege Üniversitesi Hemşirelik Fakültesi<br/>Yasemin Şimşek<br/>Dalya Turizm, Kazım Dirik Mah. 372/8 Sk. No:1 Bornova-İzmir, TÜRKİYE<br/>+90 232 464 88 30<br/>yasemin@dalyatur.com</p></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Tum

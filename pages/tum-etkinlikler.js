import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const Tum = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Tüm Etkinlikler</title>
      </Head>
      <div className="genel">
        <h1>Tüm Etkinlikler</h1>
        <div>
          <ul className="nav justify-content-center">
           <li className="nav-item">
              <a className="nav-link main-second-nav-item active" data-toggle="pill" href="#yirmibir">2021</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item " data-toggle="pill" href="#yirmi">2020</a>
            </li>
            <li className="nav-item">
              <a className="nav-link main-second-nav-item" data-toggle="pill" href="#ondokuz">2019</a>
            </li>
          </ul>
          <div className="tab-content">
            <div id="yirmibir" className="container tab-pane active">
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK 2021-2022 Dönemi Akreditasyon Takvimi</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/2021_takvim.pdf"><a target="_blank"><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 9-10 Eylül 2021 tarihlerinde çevrimiçi olarak gerçekleştirilecektir. <a href="doc/2021_kurum_program.pdf"><strong>Çalıştay Programı</strong></a>, <a href="doc/2021_kurum_form.doc"><strong>Başvuru Formu</strong></a> ve <a href="doc/2021_kurum_duyuru.pdf"><strong>Duyuru Metni</strong></a>'ne buradan ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content">HEPDAK Değerlendirici Adayı Eğitimi Çalıştayı 10-12 Haziran 2021 tarihleri arasında çevrimiçi olarak gerçekleştirilmiştir. Çalıştaya 21 yeni değerlendirici adayı katılmıştır. Eğitimde grup çalışmalarında takım başkanı olarak dört, grup çalışmaları gözlemcisi olarak iki deneyimli HEPDAK değerlendiricisi yer almıştır. Üç günlük çalıştay küçük grup ve ana salon çalışmaları ile interaktif olarak yürütülmüştür.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
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
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content">HEPDAK değerlendiricilerimizden Doç. Dr. Sergül Duygulu ve Doç. Dr. Fatoş Korkmaz  ARACİS- Romanya Yüksek Öğretim Kalite Güvenlik Kurumu (Romanian Agency for Quality Assurance in Higher Education) tarafından Uluslararası Değerlendirmeci olarak seçilmişlerdir. Değerlendirmecilerimizi kutluyor, başarılar diliyoruz.<h6>HEPDAK Yönetim Kurulu</h6></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Duyuru</div>
                <div className="main-top-second-content">HEPDAK Değerlendiricilerimizden ve aynı zamanda HEPDAK Uluslararası Dış Değerlendirme Çalışma Grubu üyelerimizden Doç.Dr.Sergül Duygulu ve Doç.Dr.Fatoş Korkmaz HEPDAK’ın üyesi olduğu CEENQA’nın (Orta ve Doğu Avrupa Yükseköğretim Kalite Güvence Ajansları Ağı) bir diğer üyesi olan ve HEPDAK’ın Değerlendirici Değişim Programı (CEENQA Staff Exchange Program) gerçekleştirdiği Letonya Akreditasyon Ajansı AIC (Academic Information Center)-/AIKA (Quality Agency for Higher Education ) yönetim kurulu tarafından 12.05.2021 tarihinde Dış Değerlendirici olarak seçilmiştir. Değerlendirici hocalarımızı tebrik eder başarılı çalışmalar yürütmelerini dileriz.<p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">12-18 Mayıs 2021 Hemşirelik Haftamız Kutlu Olsun.</div>
                <div className="main-top-second-content"><img src="img/duyurular/hemsire2021.png"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/23nisan2021.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Yükseköğretim Kalite Kurulu 2021 Yılı HEPDAK İzleme Ziyareti</div>
                <div className="main-top-second-content">YÖKAK Dış Değerlendirme ve Akreditasyon Kuruluşlarını İzleme çalışmaları kapsamında 2020 yılı faaliyetlerimizi izlemek üzere görevlendirilen YÖKAK izleme yetkilisi Sayın Prof. Dr. Sina Ercan 25 Şubat 2021 tarihinde Derneğimize çevrimiçi izleme ziyaretini gerçekleştirmiştir. Dernek yönetim kurulu üyelerinin de (Prof. Dr. Ayla Bayık Temel, Doç. Dr. Dilek Özmen, Doç. Dr. Şenay Ünsal Atan, Prof. Dr. Ayten Zaybak) katıldığı ilk oturumda Yönetim Kurulu Başkanımız Prof. Dr. Gülseren Kocaman 2020 yılı HEPDAK faaliyetlerine yönelik bir sunum yapmıştır. İkinci oturumda ise, yönetim kurulu üyelerinin yanı sıra, HEAK üyeleri (Prof. Dr. Sevgi Hatipoğlu, Prof. Dr. Hülya Okumuş), Standartları Belirleme ve Geliştirme Komisyonu üyeleri (Prof. Dr. Kadriye Buldukoğlu, Doç. Dr. Sergül Duygulu), Tutarlılık Komisyonu üyeleri (Doç. Dr. Dilek Özmen, Doç. Dr. Şenay Ünsal Atan), öğrenci değerlendiriciler (Öğ. Aslı Kayar, Öğ. Mervenur Doğan) ve 2020 yılı faaliyetlerinde görev almış 2 değerlendiricinin (Prof. Dr. Ümit Seviğ, Prof. Dr. Medine Yılmaz) katılımı ile odak grup görüşmeleri yapılmıştır. Karşılıklı bilgi alışverişinin olduğu toplantı öneriler ve iyi dilekler ile tamamlanmıştır.</div>
                <div className="main-top-second-content"><img src="img/yok_ziyaret_2021/photo_1.jpg"/></div>
                <div className="main-top-second-content"><img src="img/yok_ziyaret_2021/photo_2.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Haziran 2021)</div>
                <div className="main-top-second-content">Eğitim programı çevrimiçi olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Öğrenci Değerlendiricileri Eğitimi Çalıştayı (28 Mart 2021)</div>
                <div className="main-top-second-content">Eğitim programı çevrimiçi olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Takım Başkanları Toplantısı 2021</div>
                <div className="main-top-second-content">2020-2021 HEPDAK Akreditasyon sürecinde çevrimiçi olarak gerçekleştirilen ziyaretlerdeki beş takım başkanı ve HEPDAK Yönetim Kurulu üyeleri 07 Ocak 2021 tarihinde çevrimiçi olarak yapılan toplantıda bir araya geldi. Takım başkanları ve Yönetim Kurulu üyeleri özellikle çevrimiçi ziyaret sürecinin yanı sıra tüm ziyaret süreci ile ilgili olarak karşılıklı bilgi alışverişinde bulundu.</div>
              </div>
            </div>
            <div id="yirmi" className="container tab-pane fade">
              <div className="main-top-second">
                <div className="main-top-second-title">SABDEK Uzaktan Eğitim Çalışmaları ve Yaz Okulu Açıklaması (02 Temmuz 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/SABDEK_covid.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Türk Hemşireler Derneği ve Özel Dal Derneklerinden Yaz Okulu Açıklaması (30 Haziran 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="https://www.thder.org.tr/uploads/files/uzaktan-egitim-aciklama.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEMED Uzaktan Eğitim Konusunda Görüşü (29 Haziran 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/HEMED_uzaktan_eğitim_görüş_yazısı.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Değerlendirici Eğitimi (10-12 Ağustos 2020)</div>
                <div className="main-top-second-content">Eğitim programı online olarak yürütülecektir.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Uzaktan Eğitim Standartları (19 Haziran 2020)</div>
                <div className="main-top-second-content">İlgili dosyaya <Link href="/doc/b14_v1.docx"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Corona Virüs Pandemisi Sürecinde Hemşirelik Eğitim Programlarının Akreditasyonu için HEPDAK Planı (4 Mayıs 2020)</div>
                <div className="main-top-second-content">
                <p>HEPDAK, ülkemizde CORONA virüs mücadele sürecinde, üniversitelerde hemşirelik eğitiminin aksamaması için uzaktan eğitim uygulamaları kapsamında yürüttükleri planları ve çabaları izlemektedir. Akreditasyon için başvuran ve halen değerlendirme sürecinde olan hemşirelik programlarının kuramsal ve uygulamalı eğitimleri için HEPDAK önerileri aşağıda belirtilmiştir. HEPDAK olarak kurumlardan beklentimiz eğitim programlarının yürütülmesinde eğitim faaliyetlerinin HEPDAK standartları ile uyumunu korumalarıdır.</p>
                <p>Aşağıdaki bilgilerin, eğitim programlarınızı gözden geçirmede rehberlik edeceğini umarız. HEPDAK, hemşirelik eğitiminde meslek derslerinin uzaktan yapılmasını desteklememektedir. Bu nedenle, uzaktan eğitimle ilgili önerilerimizin, pandemi sürecinde yaşanan eğitim sorunlarının çözümüne katkı amacı taşıdığını ve bir geçiş süreci planı olduğunu vurgulamak isteriz.</p>
                <p><h5>Kuramsal dersler, klinik/alan uygulamaları ve ölçme-değerlendirme</h5></p>
                <p>Hemşirelik programları, eğitimlerini YÖK’ün ve kendi üniversitelerinin aldığı kararlar doğrultusunda planlayacaklardır. Uygulanacak çevrimiçi eğitimlerde, YÖK’ün tanımladığı “uzaktan öğretim faaliyetlerinde uyulacak hususlar” çerçevesine uyulmalıdır (18 Mart 2020).</p>
                <p>Kurumlar, öğrencilerin program çıktılarına ulaşmaları koşuluyla öğrenmelerini sağlayacak uzaktan öğretim yöntemlerini kullanabilirler. COVID-19 konusu ile ilgili teorik ve uygulamalı eğitimler müfredata entegre edilmelidir. Eğiticiler ve özellikle mezuniyet aşamasındaki öğrenciler COVID-19 salgın ve bakım yönetimi, kişisel koruyucu ekipmanların uygun kullanımı ve bulaş konusunda gerekli yetkinliklere sahip olmalıdırlar. Uygulama eğitimi için simülasyon, sanal gerçeklik, klinik bakım öğretimi için online kaynaklar etkili bir şekilde kullanılmalıdır.</p>
                <p>Uzaktan eğitim yöntemi ile 1, 2. ve 3. sınıf uygulamalarını yürüten programlar, uygulamalarını 2019- 2020 ya da 2020-2021 öğretim yılında sıkıştırılmış programlarla güz ve bahar döneminde sağlık kuruluşlarında ve yüz yüze eğitim ile tekrarlamalıdır. Bu klinik deneyimler öğrencilerin program çıktılarına ulaşmalarını sağlamalıdır.</p>
                <p>Kuramsal ve klinik eğitim becerilerini kazanma ve program çıktılarına ulaşma durumu uygun ölçme ve değerlendirme yöntemleri ile değerlendirilmelidir.</p>
                <p>2019-2020 bahar dönemi ile gelecek öğretim yılı/yılları için yapılan planlamalar ve uygulamalar konusunda “karar alma süreçleri, teorik ve uygulamaların nasıl yürütüldüğü, eğitimcilerin uzaktan öğretim becerilerini desteklemek için yapılan eğitici eğitimleri, ölçme değerlendirme ve program çıktılarına ulaşıldığını” gösteren kanıtlar sunulmalıdır.</p>
                <p><h5>Uzaktan eğitimin değerlendirilmesi</h5>Uzaktan yapılan eğitimler kayıt altına alınarak kanıtları sunulmalıdır. Uzaktan öğretimle yürütülen derslerde YÖKAK’ın belirlediği “uzaktan eğitimde kalite güvencesi” ölçütleri göz önüne alınmalıdır <a href="https://portal.yokak.gov.tr/makale/uzaktan-egitim-ve-kalite-guvence-sistemi/">(https://portal.yokak.gov.tr/makale/uzaktan-egitim-ve-kalite-guvence-sistemi/)</a>. HEPDAK, uzaktan eğitimin nasıl değerlendirileceği konusunda daha ayrıntılı çalışmalarını sürdürmektedir ve sizlere ayrıca bildirecektir.</p>
                <p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hepdak 2020-2021 Değerlendirme Planı (4 Mayıs 2020)</div>
                <div className="main-top-second-content"><p><h5>Ara değerlendirme için başvuran programlar</h5>İlgili programların, mevcut akreditasyon süreçlerinin kesintiye uğramaması için uzaktan değerlendirme yapılması planlanmıştır. Takımların, bu programların özdeğerlendirme raporlarını incelemesinden sonra saha ziyaretleri uzaktan yapılacak ve gerekirse pandemi sonrası ileri bir tarihte kurum ziyareti planlanacaktır.</p>
                <p><h5>Yeniden genel değerlendirme için başvuran programlar</h5>İlgili programların, mevcut akreditasyon süreçlerinin devamını desteklemek üzere yeniden değerlendirme yapılacak olan programlara özdeğerlendirme raporlarının incelenmesinden sonra uzaktan ziyaret yapılacak ve pandemi koşullarına göre ileri bir tarihte kurum ziyareti planlanacaktır.</p>
                <p>Ara değerlendirme ve yeniden genel değerlendirme sürecine devam etmeme kararı alan programların akreditasyon tarihi dolduktan sonra programın akreditasyonu devam etmez.</p>
                <p>Ara değerlendirme ve yeniden genel değerlendirme için başvuran programların, 2020-2021 dönemi değerlendirme takvimi olası engeller göz önüne alınarak ve bu yıla özgü olmak üzere aşağıdaki şekilde planlanmıştır</p>
                <p>o Kurumların özdeğerlendirme raporlarını HEPDAK’a yollaması: 10 Eylül 2020<br/>
                o Rapor önincelemelerinin HEPDAK tarafından yapılması: 11-14 Eylül 2020<br/>
                o Kurumların ÖDR eksikliklerini tamamlaması: 15-20 Eylül 2020<br/>
                o HEAK toplantısı: 29 Eylül 2020<br/>
                o ÖDR’lerin takımlara yollanması: 1-7 Ekim 2020<br/>
                o ÖDR’lerin takımlar tarafından incelenmesi: 7 Ekim-30 Kasım 2020<br/>
                o Programların uzaktan ziyareti: 1-31 Aralık 2020<br/>
                o Kurumların 30. Gün yanıtlarının gönderilmesi: 1-30 Ocak 2021<br/>
                o Takımların 60. Gün raporlarını HEPDAK’a yollaması: 1- 28 Şubat 2021<br/>
                o Tutarlılık toplantısı: 1-15 Mart 2021<br/>
                o HEAK karar toplantısı: 1 Nisan 2021</p>
                <p><h5>2020-2021 dönemi için ilk kez başvuran programlar</h5>Bu dönem, ilk kez başvuran programların değerlendirme süreçleri 2021-2022 dönemine aktarılacaktır. Olağan koşullarda, yeni dönem başvuru tarihi 1-31 Ocak 2021 olmakla birlikte, pandemi durumuna göre başvuru tarihi ve akreditasyon süreci yeniden gözden geçirilebilecektir. Bu dönem için yapılacak diğer başvurularla birlikte olası bir yığılma söz konusu olduğunda 2020 döneminde başvuran kurumlara öncelik verilerek, yeni başvuranların sayısı sınırlandırılabilecektir.</p>
                <p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQA Üyeliği Hakkında</div>
                <div className="main-top-second-content"><p>HEPDAK, 15 Mayıs 2020 tarihinden itibaren CEENQA - Central and Eastern European Network of Quality Assurance Agencies in Higher Education'ın tam üyesidir.İlgili dökümana <Link href="doc/CEENQA_Application_HEPDAK_Decision.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</p><p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Haftası Kutlaması</div>
                <div className="main-top-second-content"><p>Hemşireler, Covid-19 ile mücadele sürecinde en ön saflarda görev alarak hemşirelik mesleğinin tüm toplum için vazgeçilmez olduğunun kanıtladılar.</p><p>Tüm meslektaşlarımızın hemşirelik haftasını kutluyor, sağlıklı günler diliyoruz.</p><p><h6>HEPDAK Yönetim Kurulu</h6></p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">YÖKAK Saha Ziyareti</div>
                <div className="main-top-second-content"><p>Yüksek Öğretim Kalite Kurulu (YÖKAK), "Dış Değerlendirme ve Akreditasyon Kuruluşlarının Yetkilendirilmesi, Tanınması ve İzlenmesine İlişkin Kılavuz, 2019" kapsamında Kalite Değerlendirme Tescil Belgesi'ne sahip ulusal akreditasyon kuruluşları için 2020 yılından itibaren saha ziyareti uygulamasını başlatmıştır. Bu bağlamda, YÖKAK tarafından HEPDAK izleme yetkilisi olarak görevlendirilen YÖKAK Üyesi Prof. Dr. İlker Murat Ar, 17 Ocak 2020 tarihinde ofisimizde bir saha ziyareti gerçekleştirmiştir. Toplantıya, HEPDAK Yönetim Kurulu üyeleri yanı sıra, HEAK Başkanı ile bir HEAK üyesi ve bir HEPDAK değerlendiricisi olmak üzere toplam sekiz kişi katılmıştır. HEPDAK Başkanının yaptığı 2019 yılı faaliyetlerini içeren sunumun ardından izleme yetkilisi Prof. Dr. İlker Murat Ar, HEPDAK uygulamalarında güçlü ve geliştirmeye açık yönler konularında önerilerde bulunmuştur. Toplantı, katılımcılarla yapılan yararlı bir görüş alışverişiyle sona ermiştir.</p><p>HEPDAK Yönetim Kurulu, ilk kez yapılan izleme ziyaretini, akreditasyon süreçlerinin iyileştirilmesi açısından yol gösterici olarak değerlendirmiştir.</p></div>
              </div>
            </div>
            <div id="ondokuz" className="container tab-pane fade">
              <div className="main-top-second">
                <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı</div>
                <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 1 Aralık 2018 Cumartesi günü Anemon Ege Otel (İzmir)'de gerçekleştirilecektir. Çalıştay programına <Link href="doc/kurumlar-icin-egitim-calistayi-1aralik-2018-programi_v2.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">29 Ekim Cumhuriyet Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/29ekim2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">30 Ağustos Zafer Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/30ağustos2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Kurban Bayramınız Mübarek Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/kurban2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">CEENQUA'da Sempozyum Haberimiz</div>
                <div className="main-top-second-content">CEENQUA'nın Temmuz haber bülteninde HEPDAK&HEMED birlikteliği ile gerçekleştirilen sempozyum haberimiz yer aldı. Habere <Link href="doc/8_1_july_2018.pdf"><a><strong>buradan</strong></a></Link> ulaşabilirsiniz.</div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Ramazan Bayramınız Mübarek Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/ramazan2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">19 Mayıs Atütürk'ü Anma, Gençlik ve Spor Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/19mayis2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">12-18 Mayıs Hemşirelik Haftamız Kutlu Olsun</div>
                <div className="main-top-second-content"><img src="img/duyurular/hemsire2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">23 Nisan Ulusal Egemenlik ve Çocuk Bayramı Kutlaması</div>
                <div className="main-top-second-content"><img src="img/duyurular/23nisan2019.jpg"/></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">Hemşirelik Eğitiminin Geleceği: 19-20 Haziran 2018 Akreditasyon, Standartlar, İyi Uygulama Örnekleri</div>
                <div className="main-top-second-content"><p>Bilimsel Program, Kayıt & Konaklama, Davet tüm bilgileri <a href="http://www.hemsirelikegitiminingelecegi.com"><strong>buradan</strong></a> erişebilirsiniz.</p> <h6>Sempozyum Yeri ve İletişim</h6><p>Ege Üniversitesi Hemşirelik Fakültesi<br/>Yasemin Şimşek<br/>Dalya Turizm, Kazım Dirik Mah. 372/8 Sk. No:1 Bornova-İzmir, TÜRKİYE<br/>+90 232 464 88 30<br/>yasemin@dalyatur.com</p></div>
              </div>
              <div className="main-top-second">
                <div className="main-top-second-title">HEPDAK Olarak Yeni Yılınızı Kutlarız</div>
                <div className="main-top-second-content"><img src="img/duyurular/yeniyil2019.jpg"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default Tum

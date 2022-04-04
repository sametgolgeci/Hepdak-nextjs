import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | CEENQA Paylaşım Toplantısı - 9 (16 Mart 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
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
      <div className="safe"></div>
    </MasterPage>
)
export default News

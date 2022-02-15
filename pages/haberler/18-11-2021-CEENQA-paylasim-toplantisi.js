import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | CEENQA Paylaşım Toplantısı - 8</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 8</div>
        <div className="main-top-second-content">
          <p>CEENQA'NIN iki ayda bir yapılan sekizinci toplantısı <strong>17 Kasım 2021</strong> tarihinde
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
      <div className="safe"></div>
    </MasterPage>
)
export default News

import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | CEENQA Paylaşım Toplantısı - 12 (16 Kasım 2022)</title>
      </Head>
      <div className="main-top-second hover-out">
         <div className="main-top-second-title">CEENQA Paylaşım Toplantısı - 12 (16 Kasım 2022)</div>
                <div className="main-top-second-content">
                  <p>CEENQA tarafından iki ayda bir yapılan 12. toplantı 16 Kasım 2022 tarihinde gerçekleşmiştir.
HEPDAK’ı temsilen toplantıya Prof. Dr. Ayla BAYIK TEMEL ve Doç. Dr. Fatoş
KORKMAZ katılmışlardır. Toplantının bu oturumunda CEENQA’ya üye Bulgaristan
akreditasyon kuruluşu National Evaluation and Accreditation Agency (NEAA) temsilcisi
kuruluşun yapısı, misyonu, amaçları, faaliyet alanları ve ulusal/uluslararası akreditasyon
süreçlerini paylaşmıştır. Kosova kuruluşu Kosovo Accreditation Agency (KAA) temsilcisi
FlamarAbazaj kuruluşun yapısı, ülkenin yükseköğrenim sistemi ve derneğin faaliyet alanlarını
uzaktan eğitim sürecinde zorluklar ve uzaktan eğitimde digitalizasyon konularını katılımcılar
ile paylaşmıştır.</p>
                  <p>Oturumun son sunumunu Uluslararası İş Yönetimi Akreditasyonu Kuruluşunu (Foundation
for International Business Administration FIBAA) temsilen Diane Freiberger, tematik
konu olarak uzaktan eğitimde kalite güvenliği konusu ile ilgili sunum yapmıştır. Kurumun
proje çalışması kapsamında beş temel standart hakkında bilgiler vermiştir.</p>
                </div> 
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

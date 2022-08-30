import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | HEPDAK 2022 Kurumlar için Eğitim Çalıştayı</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">HEPDAK 2022 Kurumlar için Eğitim Çalıştayı 15 Ekim 2022 tarihinde çevrimiçi olarak gerçekleştirilecektir</div>
        <div className="main-top-second-content"><p>Eğitime başvuru formuna <Link href="/doc/2022_kurum_egitimi_basvuru_formu.doc"><a target="_blank"><strong>buradan</strong></a></Link> ulaşabilirsiniz.<strong> Son başvuru tarihi 30 Eylül 2022'dir. Son başvuru tarihinden itibaren kayıt alınmayacaktır.</strong></p><p><strong>Önemli Not:</strong> 2023 yılında akreditasyona başvurmayı planlayan programdan en az bir yönetici/öğretim elemanının Kurum Tanıtım Eğitimine katılması Yönetim Kurulu kararı ile zorunluluk olarak belirlenmiştir.<strong> Eğitime katılmayan programların başvuruları kabul edilmeyecektir.</strong></p></div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

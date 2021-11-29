import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Kurumlara Yönelik Eğitim Çalıştayı - 2021</title>
      </Head>
      <div className="main-top-second hover-out">
        <div className="main-top-second-title">Kurumlara Yönelik Eğitim Çalıştayı - 2021</div>
        <div className="main-top-second-content">Hemşirelik Lisans Eğitimi Veren Yükseköğretim Kurumlarına Yönelik Eğitim Çalıştayı 9-10 Eylül 2021 tarihlerinde çevrimiçi olarak gerçekleştirilecektir. <a href="doc/2021_kurum_program.pdf"><strong>Çalıştay Programı</strong></a>, <a href="doc/2021_kurum_form.doc"><strong>Başvuru Formu</strong></a>, <a href="doc/2021_kurum_duyuru.pdf"><strong>Duyuru Metni</strong></a></div>
      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News

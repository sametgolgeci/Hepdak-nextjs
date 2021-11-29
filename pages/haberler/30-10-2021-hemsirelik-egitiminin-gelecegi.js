import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Hemşirelik Eğitiminin Geleceği 3” Sempozyumu gerçekleştirildi</title>
      </Head>
      <div className="main-top-second hover-out">
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
      <div className="safe"></div>
    </MasterPage>
)
export default News

import MasterPage from '../../components/masterpagealt'
import Head from 'next/head'
import Link from 'next/link'

const News = () => (
    <MasterPage>
      <Head>
        <title>HEPDAK | Hemşirelik Programlarında Uygulamalı Eğitim Çalıştayı (26 Kasım 2024)</title>
      </Head>
      <div className="main-top-second hover-out">

      {/* Haber Aralığı Başlangıç*/}

                <div className="main-top-second-title">Hemşirelik Programlarında Uygulamalı Eğitim Çalıştayı (26 Kasım 2024)</div> 
                <div className="main-top-second-content">
                  <p>HEMDEK, HEPDAK ve HEMED iş birliği
ile düzenlenen, ‘Hemşirelik Programlarında
Uygulamalı Eğitim Çalıştayı’ 26 Kasım
2024 tarihinde online olarak
gerçekleştirilmiştir. İstanbul Üniversitesi
Hemşirelik Fakültesi ev sahipliğinde
gerçekleştirilen çalıştaya 179 hemşirelik
yöneticisi ve akademisyen katılmıştır.</p>
                  <p>Çalıştayın açılış konuşmaları HEMDEK
Başkanı Prof. Dr. Merdiye Şendir,
HEPDAK Başkanı Prof. Dr. Dilek Özmen
ve HEMED Başkanı Doç. Dr. Havva Arslan
Yürümezoğlu tarafından yapılmıştır. Açılış
konuşmalarının ardından önce İstanbul
Üniversitesi Hemşirelik Fakültesi Dekanı
Prof. Dr. Ayfer Aydın nın ‘Uygulamalı
Eğitim Anket Sonuçlarının Paylaşılması’
konusunda konuşmalarını yapmış, oturum
‘Uygulamalı Eğitim Örneklerinin
Paylaşılması ile devam etmiştir. Doç. Dr.
Selda Arslan Necmettin Erbakan
Üniversitesi Hemşirelik Fakültesi, Dr. Öğr.
Üyesi Esra Ardahan Akgül İzmir Katip
Çelebi Üniversitesi Sağlık Bilimleri
Fakültesi, Prof. Dr. Sonay Göktaş Sağlık
Bilimleri Üniversitesi Hamidiye Hemşirelik
Fakültesi uygulamalı eğitim örneklerini
sunmuştur. Toplantı moderatörlüğünü Prof.
Dr. Merdiye Şendir, Prof. Dr. Ayfer Aydın
ve Prof. Dr. Gülseren Kocaman’ın yaptığı
katılımcıların sorularının tartışmaya
açıldığı oturumla son bulmuştur.</p>
                </div> 

        {/* Haber Aralığı Bitiş*/}     

      </div>
      <div className="safe"></div>
    </MasterPage>
)
export default News
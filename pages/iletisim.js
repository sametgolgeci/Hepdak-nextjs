import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone,faEnvelope,faMapMarkerAlt,faChevronRight } from '@fortawesome/free-solid-svg-icons'

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('gmail', 'template_4hcz6rf', e.target, 'user_5aJ4lAyl6aNUxJkcF6atP')
    .then((result) => {
      console.log(result.text);
      alert('Mesajınız gönderilmiştir!');
    }, (error) => {
      console.log(error.text);
      alert('Bir hata oluştu');
  });
  e.target.reset();
}

const Iletisim = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | İletişim</title>
	</Head>
	<div className="genel"><h1>İletişim</h1></div>
	<div className="row">
		<div className="col-md-6 col-sm-12 iletisim iletisim-adres">
			<p><iframe className="iletisim-harita" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.9192711010137!2d27.128350414853763!3d38.42023048253444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3a0ca3187%3A0x391e99ccfd008d0!2sKonak%2C%20858.%20Sk.%20No%3A9%20D%3A706%2C%2035250%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1588444441179!5m2!1str!2str" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe></p>
			<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faPhone}/></div>
					<div className="iletisim-info-color"><Link href="tel:+90-553-986-4302"><a>+90 (553) 986 43 02</a></Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faEnvelope}/></div>
					<div className="iletisim-info-color"><Link href="mailto:info@hepdak.org.tr"><a>info@hepdak.org.tr</a></Link></div>
				</div>
				<div className="footer-info-item"> 
					<div className="footer-info-icon"><FontAwesomeIcon className="footer-icon" icon={faMapMarkerAlt}/></div>
					<div className="iletisim-info-color">Konak Mah. 858 Sok.<br/>No: 9 Daire: 706<br/>Konak - İzmir</div>
				</div>
		</div>
		<div className="col-md-5 col-sm-12 iletisim iletisim-info">
			<p><strong>Başkan</strong><br/>Prof. Dr. Gülseren KOCAMAN<br/><Link href="mailto:gulseren.kocaman@gmail.com"><a>gulseren.kocaman@gmail.com</a></Link></p>
			<p><strong>Genel Sekreter</strong><br/>Doç. Dr. Dilek ÖZMEN<br/><Link href="mailto:ozmendilek@yahoo.com"><a>ozmendilek@yahoo.com</a></Link></p>
			<p><strong>Sayman</strong><br/>Doç. Dr. Şenay Ünsal ATAN<br/><Link href="mailto:senay.unsal.atan@gmail.com"><a>senay.unsal.atan@gmail.com</a></Link></p>
			<p><strong>Sekreter</strong><br/>Ümran Yalçın<br/><Link href="mailto:hepdak2013@gmail.com"><a>hepdak2013@gmail.com</a></Link></p>
		</div>
	</div>
	
		<h5 className="iletisim-h5">Şikayet ve Öneriler</h5>
		<div className="iletisim-mesaj">
	    <form action="" method="post" onSubmit={sendEmail}>
	      <div className="row">
	        <div className="col-md-6 col-sm-12">
	          <div className="form-group">
	            <label for="exampleInputEmail">Ad Soyad</label>
	            <input type="text" className="form-control form-control-sm" name="name"/>
	          </div>
	          <div className="form-group">
	            <label for="exampleInputEmail">Mail Adresiniz</label>
	            <input type="email" className="form-control form-control-sm" id="exampleInputEmail1" aria-describedby="emailHelp" name="mail"/>
	          </div>
	        </div>
	        <div className="col-md-6 col-sm-12">
	          <div className="form-group">
	            <label for="exampleFormControlTextarea1">Mesaj</label>
	            <textarea className="form-control" id="exampleFormControlTextarea1" rows="4" name="message"></textarea>
	          </div>
	        </div>
	      </div>
	      <button type="submit" className="iletisim-button btn">Gönder</button>
	    </form>
	    <div className="col-md-4 col-sm-12 iletisim-mesaj-logo-mobil">
	      <div><img className="main-bottom-tanınma" src="img/duyurular/YOKAK_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
	      <div><img className="main-bottom-tanınma" src="img/duyurular/CEENQA_tescil.png" title="Yükseköğretim Akademik Değerlendirme ve Kalite Geliştirme Komisyonu"/></div>
	    </div>
	  </div>

	{/* This is a comment */}
</MasterPage>
)
export default Iletisim

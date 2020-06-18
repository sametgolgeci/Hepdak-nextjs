import MasterPage from '../components/master-page'
import Head from 'next/head'
import Link from 'next/link'

const İletisim = () => (
<MasterPage>
	<Head>
		<title>HEPDAK | İletişim</title>
	</Head>
	<div className="genel"><h1>İletişim</h1></div>
	<div className="row">
		<div className="col-md-6 col-sm-12 row iletisim-adres">
			<div className="col-5">
			<p>Konak Mah. 858 Sok. No:9 Daire: 706 Konak/İZMİR</p>
			<p>hepdak2013@gmail.com</p>
			<p>+90 (553) 986 43 02</p>
			</div>
			<div className="col-7">
				<iframe className="iletisim-harita" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.9192711010137!2d27.128350414853763!3d38.42023048253444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bbd8e3a0ca3187%3A0x391e99ccfd008d0!2sKonak%2C%20858.%20Sk.%20No%3A9%20D%3A706%2C%2035250%20Konak%2F%C4%B0zmir!5e0!3m2!1str!2str!4v1588444441179!5m2!1str!2str" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
			</div>
		</div>
		
		<div className="col-md-6 col-sm-12 iletisim-info">
			<p><strong>Başkan : </strong>Prof. Dr. Gülseren KOCAMAN<br/>gulseren.kocaman@gmail.com</p>
			<p><strong>Sekreter : </strong>Doç. Dr. Dilek ÖZMEN<br/>ozmendilek@yahoo.com</p>
			<p><strong>Sayman : </strong>Doç. Dr. Şenay Ünsal ATAN<br/>senay.unsal.atan@gmail.com</p>
		</div>
	</div>
	{/* This is a comment */}
</MasterPage>
)
export default İletisim

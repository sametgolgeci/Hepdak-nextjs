import Header from '../components/header'
import Footer from '../components/footer'
import Head from 'next/head'



function MasterPage ({children})  {  
	return <div>
		<Head>
      <title>HEPDAK</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
      <link rel="icon" href="img/faviconnew.png"/>
  		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
      <script src="js/bootstrap.js"></script>
    </Head>
    <Header/>
		<div className="main">
			{children}
		</div>
		<Footer/>
	</div>
}
export default MasterPage 
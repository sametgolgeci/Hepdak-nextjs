import MasterPage from '../../components/masterpage-eng'
import Head from 'next/head'
import Link from 'next/link'

const Symposium = () => (
    <MasterPage>
	    <Head>
        <title>HEPDAK | Educational Activities</title>
      </Head>
      <div className="genel">
        <h1>Educational Activities</h1>
        <h5>Events Related to the Promotion of HEPDAK Activities</h5>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2024.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2024 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2023.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2023 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2022.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2022 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2021.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2021 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2020.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2020 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2019.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2019 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2018.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2018 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2017.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2017 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2016.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2016 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2015.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2015 (in Turkish)</Link></p>
        <p className="madde-p"><Link href="../doc/egitim_etkinlikleri/faaliyet-2014.pdf" target="_blank">Invited Speeches on the Promotion of HEPDAK Activities 2014 (in Turkish)</Link></p>
        
        <Link href="../doc/egitim_etkinlikleri/toplanti-1.pdf" target="_blank"><h5>- Trainings Given to HEPDAK, HEAK and Commission Members in Various Meetings (in Turkish)</h5></Link>    
      </div>
    </MasterPage>
)
export default Symposium

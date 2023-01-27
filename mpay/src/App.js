import './App.css';
// Header
import Header from './Header/Header'
// Odenish
import Odenish from './Odenish/Odenish'
// Qeydiyyatsiz
import Qeydiyyatsiz from './Qeydiyyatsiz/Qeydiyyatsiz'
// Üstünluklər
import Ustunluk from './Ustunluk/Ustunluk'
// Tez-Tez Verilən Suallar
import Questions from './Questions/Questions'
// Mobil Köçürmə
import MobilKocurme from './MobilKocurme/MobilKocurme'
// Seçilmiş Odənişlər
import SecilmisOdenis from './SecilmisOdenis/SecilmisOdenis'
// Fəqrli Ödəniş
import FerqliOdenis from './FerqliOdenis/FerqliOdenis'
// Footer
import Footer from './Footer/Footer'
// Contact
import Contact from './Contact/Contact'
// Mobil Tətbiq
import MobilTetbiq from './MobilTetbiq/MobilTetbiq'
// Responive Navbar
import ResNav from './ResNav/ResNav'


function App() {
  return (
    <div className="App">
      <Header/>
      <Odenish/>
      <Qeydiyyatsiz/>
      <Ustunluk/>
      <MobilKocurme/>
      <SecilmisOdenis/>
      <FerqliOdenis/>
      <Questions/>
      <MobilTetbiq/>
      <Footer/>
      <Contact/>
      <ResNav/>
    </div>
  );
}

export default App;

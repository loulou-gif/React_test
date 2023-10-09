import Banner from './pages/Banner';
import NavBar from './menu/NavBar';
import Service from './services/Services';
import About from './about/About';
import Pro from './Professional/Pro';
import Footer from './Footer/Footer';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner />
      <Service/>
      <About/>
      <Pro/>
      <Footer/>
    </div>
  )
}

export default App;

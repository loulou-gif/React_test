import Banner from './pages/Banner';
import NavBar from './menu/NavBar';
import Service from './services/Services';
import About from './about/About';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner />
      <Service/>
      <About/>
    </div>
  )
}

export default App;

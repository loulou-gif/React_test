import Banner from '../Banner/Banner';
import About from '../about/About';
import Service from '../services/Services';
import Pro from '../Professional/Pro';
import Footer from '../Footer/Footer'
import NavBar from "../menu/NavBar";

function Accueil() {
    return(
        <div>
            <NavBar />
            <Banner />
            <Service/>
            <About />
            <Pro/>
            <Footer/>
        </div>
    )
}

export default Accueil
import { Link } from 'react-router-dom';

function NavBar() {
    // Ajoutez cet écouteur d'événements dans votre fichier JavaScript ou votre composant React
    window.addEventListener("scroll", function () {
        const navbar = document.querySelector(".sticky");
        // const text = document.querySelector(".navbar");
    
        if (window.scrollY > 100) {
        // L'utilisateur a commencé à faire défiler, donc mettez l'arrière-plan en gris
        navbar.classList.remove("bg-transparent");
        // navbar.classList.remove("h-40")
        navbar.classList.remove('opacity-75');
        navbar.classList.add("bg-gray-500");
        navbar.classList.add("text-white");
        // navbar.classList.add("h-20")
        
        } else {
        // L'utilisateur n'a pas encore fait défiler, donc gardez l'arrière-plan transparent
        navbar.classList.remove("bg-gray-500");
        // navbar.classList.remove("h-20")
        navbar.classList.add("bg-transparent");
        navbar.classList.add('opacity-75');
        // navbar.classList.add("h-40")
        }
    });
  
    return (
        <div className="flex sticky top-0 bg-transparent text-white p-5 h-30 shadow-lg shadow-black-500">
    <div className="flex items-center justify-between w-full">
        <div className="ml-4">
            <h1 className="text-5xl">LOGO</h1>
        </div>
        <nav className="flex text-3xl">
            <Link to="/" className="pr-4 text-white no-underline hover:underline">Accueil</Link>
            <Link to="/#contact" className="pr-4 no-underline text-white hover:underline">Contact</Link>
            <Link to="/#service" className="pr-4 no-underline text-white hover:underline">Service</Link>
            <Link to="/signin" className="pr-4 no-underline text-white hover:underline">S'inscrire</Link>
            <Link to="/signup" className="no-underline text-white hover:underline">Connexion</Link>
        </nav>
    </div>
</div>
        
    );    
}
export default NavBar
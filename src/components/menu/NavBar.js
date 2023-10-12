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
        <div className="sticky text-white top-0 bg-transparent transition-all duration-300 p-5 h-30 shadow-lg shadow-black-500 ">
            <div className="">
                <h1 className="text-5xl ml-10 mt-3">LOGO</h1>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light p-lg-0 grid justify-items-end">
                <div className="navbar-nav text-2xl h-10 flex space-x-2.5 > * + *">
                    <div className="pr-10 hover:underline">Accueil</div>
                    <div className="pr-10 hover:underline">Emplacement </div>
                    <div className="pr-10 hover:underline">Service </div>
                    <div className="pr-10 hover:underline">S'inscrire </div>
                    <div className="pr-10 hover:underline">Connexion </div>
                </div>
            </nav>
            
        </div>
    );    
}
export default NavBar
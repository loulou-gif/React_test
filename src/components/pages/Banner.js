import '../../styles/Banner.css';

function Banner() {
    const style = {
        width: 'auto', // Remplacez par la largeur souhaitée
        height: '700px', // Remplacez par la hauteur souhaitée
    };

    return (
        <div className="Container-fluid">

            <div className="Content bg-cover bg-no-repeat" style={style}>
                {/* <div >
                    <h1 className="text-center text-neutral-100 text-2xl">Trouvez les meilleurs professionnels pour tous vos besoins domestiques en un clic - votre guichet unique pour les services à domicile.</h1>
                </div> */}
                <div className="flex justify-center items-center h-screen">
                    <input className="w-2/5 h-10 rounded outline-inherit" name="text" id="search" placeholder="    Services (Électricité)" />
                    <input className="w-48 h-10 rounded  text-neutral-100 bg-slate-500 hover:bg-slate-600 " type="submit" value="Recherche" />
                </div>
            </div>
        </div>
    );
}

export default Banner;

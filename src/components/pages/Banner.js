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
                    <h1 className="text-center text-neutral-100 text-3xl">Trouvez les meilleurs professionnels pour tous vos besoins domestiques en un clic - votre guichet unique pour les services à domicile.</h1>
                </div> */}
                <div className="flex justify-center items-center h-screen">
                    <div className='bg-white rounded-3xl w-6/12 h-14 flex justify-center items-center shadow-lg'>
                        <input className="w-full rounded-3xl pl-5 focus:outline-none h-14 bg-inherte" name="text" id="search" placeholder="Services (Électricité)" />
                        <input className="w-48 h-10 rounded-3xl h-14  text-neutral-100 bg-slate-500 hover:bg-slate-600 " type="submit" value="Recherche" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;

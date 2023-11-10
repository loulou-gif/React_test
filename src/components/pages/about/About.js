import { AboutList } from "./AboutList"

function About() {
    const aPropos = AboutList.map(props =>(
        <div className="" key={props.id}>
            <ul>
                <li  className="mt-8 mb-8 m-20 text-stone-600" >{props.name}</li>
            </ul>
        </div>
    ) )
    return(
        <div className="">
            <h1 className="text-center text-5xl text-stone-600 mt-8">N'hesitez plus!</h1>
            <div className="flex justify-center items-center">
                <div className="bg-stone-200 mt-8 mb-5 flex justify-center items-center border w-11/12">
                    <div className="w-7/12">
                        <img className="w-screen" src="/pexels-emmanuel-ikwuegbu-8005400.jpg" alt=""/>
                    </div>
                    <div className="w-7/12 mt-8 text-stone-600">
                        <p className="ml-6 mt-6 ">Découvrez une plateforme révolutionnaire qui simplifie votre quotidien
                            en mettant à votre disposition une multitude de services domestiques. 
                            Trouvez, réservez et profitez de services de qualité, le tout en un seul
                            endroit pratique et sécurisé.</p><br/>
                        <p className="ml-7">Profiter de :</p>
                        <ul >
                            <li>{aPropos}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default About
import { Teams } from "./ProList"

function Pro() {
    const Team = Teams.map(pro =>(
        <div className="col-span-1 gap-4 justify-center items-center bg-stone-200  rounded-lg border w-11/12 shadow-lg shadow-black-500 mb-5 ">
            <img className="" src={pro.image} alt=""/>
            <div className="mt-5  mb-10 mr-5">
                <p><span className="ml-5 font-bold" >Nom: </span>{pro.name}</p>
                <p><span className="ml-5 font-bold">Métier: </span>{pro.metier}</p>
                <p className="ml-5  "><span className="font-bold" >Description: </span> <br/> "{pro.description}"</p>
            </div>
            
        </div>
    ) );
    return(
        <div className="flex justify-center items-center h-screen mt-10">
            <div className="w-11/12 ">
                <h1 className="text-center text-5xl text-stone-600 mt-8">Nos Professionnels</h1>
                <div className="flex justify-center items-center h-screen">
                    <div className=" mt-8 flex  justify-center items-center">
                        <div className="grid grid-cols-2 gap-4 ml-10">
                            {Team}
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Pro
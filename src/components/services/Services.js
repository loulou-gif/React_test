import { ServiceList } from "./ServiceList"

function Service() {
    const services = ServiceList.map(service => (
        <div className=" flex flex-col items-center rounded-lg  w-80 shadow-lg shadow-black-500 " key={service.id}>
            <img src={service.image} alt="test" className="rounded-lg" />
            <div className="h-10 mt-4">{service.name}</div>
        </div>
    ));

    return (
        <div className="">
            <h1 className="text-center text-5xl text-stone-600 mt-8">Nos Services</h1>
            <div className=" mt-8 flex justify-center items-center">
                <div className="grid grid-cols-3 gap-4">
                    {services}
                </div>
            </div>
        </div>
    );
}

export default Service;

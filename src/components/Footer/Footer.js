import { Contact } from "./FooterList";

function Footer() {
    const contacts = Contact.map((contact, index) => (
        <div key={index} className="flex justify-center items-center m-10">
            <div className="text-white w-80  p-4">
                <div>
                    <h1 className="text-center underline font-bold">Contacts</h1>
                    <p className="ml-20 mt-3"><span className="underline font-bold">Mail: </span>{contact.mail} </p>
                    <p className="ml-20 mt-3"><span className="underline font-bold">Téléphone: </span>{contact.tel}</p>
                    <p className="ml-20 mt-3"><span className="underline font-bold">Localisation: </span>{contact.lieu}</p>
                </div>
                
            </div>
        </div>
    ));

    return (
        <div className="mt-10">
            <div className="h-1/5 bg-gray-600   flex justify-center items-center">
                {contacts}
            </div>
            <div className="bg-gray-800 text-center text-white h-10 ">copyright Digital Renov Tout droit reservé </div>
        </div>
    );
}

export default Footer;

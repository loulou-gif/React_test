import '../../styles/signin.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function SignIn() {
    return (
        <div className='form'>
            
            <form method = "#_" className="container g-3 needs-validation text-center mt-5 rounded">
                <div className='Element'>
                    <div className='content mt-5 border rounded'>
                        <h1 className='title texte-center white'>Inscription</h1>
                        <div className='row rounded'>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <input className="form-control form-control-sm" type = "text" placeholder="Nom & Prénom" name="Nom & Prénom" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <input className="form-control form-control-sm" type = "email" placeholder="Email" name="Email" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <input className="form-control form-control-sm" type = "password" placeholder="Mots de passe" name="Mot de passe" />
                                </div>
                                
                            </div>

                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <input className="form-control form-control-sm" type = "password" placeholder="Confirmer le mot de passe" name="Confirmer le mot de passe" />
                                </div>
                            </div>    
                        </div>
            
                        <button className="bouton">ENREGISTRER</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignIn;
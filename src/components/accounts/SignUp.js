import '../../styles/signin.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function SignUp() {
    return (
        <div className='form'>
            
            <form method = "POST" className="container g-3 needs-validation text-center mt-5">
                <div className='Element'>
                    <div className='content mt-5 border rounded'>
                        <h1 className='texte-center'>Connexion</h1>
                        <div className='row rounded'>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <input className="form-control form-control-sm" type = "text" placeholder="Username" name="username" />
                                </div>
                            </div>
                            <div className='col-md-12'>
                                <div className='mb-3'>
                                    <input className="form-control form-control-sm" type = "password" placeholder="password" name="password" />
                                </div>
                                
                            </div>  
                        </div>
            
                        <button className="btn btn-primary"> ENREGISTRER</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp;
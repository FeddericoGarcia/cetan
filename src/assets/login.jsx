import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
import './css/style.css'

const Login = () =>{
    return (
        <div className='App'>
            <Header />
            <div className="container bg-form my-5 mb-4 shadow justify-content-center flex-column rounded p-3">
                <h1 className='text-center m-2'>CETAN SAS</h1>
                <h5 className='m-2 py-3'>Ingresá tus credenciales</h5>
                <form>
                    <div className="form-group">
                        <input type="email" id="userInput" className="input-field" placeholder='' required
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$"></input>
                        <label htmlFor="userInput" className="input-label">Corréo electrónico</label>
                        <div className="invalid-feedback">
                            Por favor, verificá los datos ingresados
                        </div>
                    </div>  
                    <div className="form-group">
                        <input type="password" id="passInput" className="input-field" placeholder='' required></input>
                        <label htmlFor="passInput" className="input-label">Contraseña</label>
                        <div className="invalid-feedback">
                            Por favor, verificá los datos ingresados
                        </div>
                    </div>  
                    <a href="/src/passwordRecovery" id='recoveryPass' className='text-muted text-decoration-none'>
                        <small>¿Olvidaste la contraseña?</small>
                    </a>
                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-dark w-100">Ingresar</button>
                    </div>
                </form>
            </div>
            < Footer />
        </div>
    )
}

export default Login;
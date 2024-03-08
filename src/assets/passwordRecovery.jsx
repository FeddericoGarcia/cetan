import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
import './css/style.css'

const PasswordRecovery = () =>{
    return (
        <div className='App'>
            <Header />
            <div className="container bg-form my-5 mb-4 shadow justify-content-center flex-column rounded p-3">
                <h3 className='text-center m-2'>¿Has olvidad la contraseña?</h3>
                <p className='m-2 py-3'>Ingresá el correo electrónico con el cual te registras, a continuación, 
                recibirás un mail detallando los pasos a seguir. </p>
                <form>
                    <div className="form-group">
                        <input type="email" id="userInput" className="input-field" placeholder='' required
                        pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$"></input>
                        <label htmlFor="userInput" className="input-label">Correo electrónico</label>
                        <div className="invalid-feedback">
                            Por favor, verificá los datos ingresados
                        </div>
                    </div>  
                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-dark w-100">Enviar</button>
                    </div>
                </form>
            </div>
            < Footer />
        </div>
    )
}

export default PasswordRecovery;
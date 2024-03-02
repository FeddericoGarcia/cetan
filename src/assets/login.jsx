import Header from '../components/header/header.jsx'
import './css/style.css'

const Login = () =>{
    return (
        
        <div>
            <Header />
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" id="bg-svg">
                <svg class="w-full h-full" viewBox="0 0 400 400">
                    <defs>
                        <pattern id="bg_pattern" width="100" height="100" patternUnits="userSpaceOnUse">
                            <rect x="0" y="0" width="100" height="100" fill="#18191c" opacity="1"></rect> 
                            <rect x="10" y="10" width="80" height="80" fill="#000000" opacity="1"></rect> 
                            <rect x="20" y="20" width="60" height="60" fill="#18191c" opacity="1"></rect> 
                            <rect x="30" y="30" width="40" height="40" fill="#000000" opacity="1"></rect> 
                            <rect x="40" y="40" width="20" height="20" fill="#18191c" opacity="1"></rect> 
                            <rect x="0" y="0" width="50" height="50" fill="#18191c" opacity="1"></rect>
                            <rect x="0" y="0" width="40" height="40" fill="#000000" opacity="1"></rect>
                            <rect x="0" y="0" width="30" height="30" fill="#18191c" opacity="1"></rect>
                            <rect x="0" y="0" width="20" height="20" fill="#000000" opacity="1"></rect>
                            <rect x="0" y="0" width="10" height="10" fill="#18191c" opacity="1"></rect>
                            <rect x="50" y="50" width="50" height="50" fill="#18191c" opacity="1"></rect>
                            <rect x="60" y="60" width="40" height="40" fill="#000000" opacity="1"></rect>
                            <rect x="70" y="70" width="30" height="30" fill="#18191c" opacity="1"></rect>
                            <rect x="80" y="80" width="20" height="20" fill="#000000" opacity="1"></rect>
                            <rect x="90" y="90" width="10" height="10" fill="#18191c" opacity="1"></rect>
                        </pattern>
                    </defs>
                    <rect x="0" y="0" width="100%" height="100%" fill="#f9f9ff" opacity="1"></rect>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#bg_pattern)" opacity="1"></rect>
                </svg>
            </svg>
            {/* <div id='bg-svg'></div> */}
            <div className="container bg-white mt-4 shadow d-flex justify-content-center flex-column rounded p-3">
                <h1 className='text-center m-2'>CETAN SAS</h1>
                {/* <img src='./images/log-cetan.png' alt='Logo Cetan SaS' width={100} height={100}></img> */}
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
                    <a href="/src/passwordRecovery" id='pass' className='text-muted text-decoration-none'>
                        <small>¿Olvidaste la contraseña?</small>
                    </a>
                    <div className="form-group mt-4">
                        <button type="submit" className="btn btn-dark w-100">Ingresar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;
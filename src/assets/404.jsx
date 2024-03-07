import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Svg from "../components/svg/svg404";

const PageNotFound = () =>{
    return (
        <div className="App">
            <Header />
            <div className="m-5">
                <div className="container body-404 mt-4 p-4 shadow d-flex justify-content-around flex-column rounded">
                    <h1 className='text-center m-2 z-3 text-shadow'>Oops! Error 404</h1>
                    <h5 className='m-2 py-3 z-3 text-shadow'>La página a la que intentas acceder no se encuentra disponible, 
                    por favor, verifica los datos de busqueda ingresada o volvé al inicio de sesión.</h5>
                    <div className="z-1">
                        <a href="/">
                            <button className="btn btn-outline-dark">Volver al inicio</button>
                        </a>
                    </div>
                    < Svg />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default PageNotFound;
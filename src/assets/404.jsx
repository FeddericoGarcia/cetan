import Header from "../components/header/header";
import Svg from "../components/svg/svg404";

const PageNotFound = () =>{
    return (
        <div>
            <Header />
            <div className="d-flex flex-row">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" id="bg-svg">
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
                <div className="container body-404 mt-4 p-4 shadow d-flex justify-content-around flex-column rounded">
                    <h1 className='text-center m-2 z-3 text-shadow'>Oops! Error 404</h1>
                    <h5 className='m-2 py-3 z-3 text-shadow'>La página a la que intentas acceder no se encuentra disponible, 
                    por favor, verifica los datos de busqueda ingresada</h5>
                    <div className="z-1">
                        <a href="/">
                            <button className="btn btn-outline-dark">Volver al inicio</button>
                        </a>
                    </div>
                    < Svg />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound;
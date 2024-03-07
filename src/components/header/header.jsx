import React, { useState } from "react";
import './css/header.css'
// import './navbar.js'
// import 'bootstrap/dist/js/bootstrap.bundle.js'
// import 'bootstrap-icons'

const Header = () =>{
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return(
        <div className="nav-header container-fluid">
            <nav className="navbar navbar-dark bg-dark">
                <a href="/" className="text-decoration-none fw-bold">
                    <span className="text-white px-3 h5">CETAN SAS</span>
                </a>
                <button 
                className="navbar-toggler collapsed mx-3 border-0" 
                type="button" 
                data-toggle="collapse" 
                data-target="#toggle-navbar" 
                aria-controls="toggle-navbar" 
                aria-expanded="false" 
                aria-label="Toggle navigation" 
                onClick={toggleNavbar}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="toggle-navbar">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <button className="nav-link px-3" href="#">
                                Usuario 
                                <span className="id-usuario"></span>
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link px-3" href="/changePassword">
                                Cambiar contraseña
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link px-3" href="#">
                                Cerrar Sesión
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Header;
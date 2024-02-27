import React from "react";
// import './assets/css/header.css';
import '../../assets/css/header.css'


const Header = () =>{
    return(
        <div className="nav-header container-fluid">
            <nav className="navbar navbar-dark bg-dark">
                <img src="../../assets/images/log-cetan.png" alt="logo CETAN"></img>
                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarsExample01" 
                aria-controls="navbarsExample01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse collapse" id="navbarsExample01">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <button className="nav-link" href="#">Usuario <span className="sr-only">(current)</span></button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" href="#">Cerrar Sesión</button>
                    </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Header;
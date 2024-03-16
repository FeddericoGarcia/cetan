import React, { useState, useRef } from "react";

const Header = () =>{
    // const [isOpen, setIsOpen] = useState(true);
    // let num = 0;

    // // TODO: VERIFICAR EL CIERRE DEL NAVBAR
    // const toggleNavbar = () => {
    //     // e.preventDefault();
    //     setIsOpen(!isOpen);
    // //     // !isOpen ? setIsOpen(isOpen) : setIsOpen(!isOpen); 
        
    //     console.log(isOpen);
    //     console.log(!setIsOpen);
    //     console.log(num += 1)
    // };

    // const [menuState, setMenuState] = useState("closed");

    // const toggleNavbar = () => {
    //     setMenuState(menuState === "closed" ? "open" : "closed");
    // };

    const [menuState, setMenuState] = useState(false);
    const menuRef = useRef(null);

    const toggleNavbar = () => {
        setMenuState(!menuState);
        if (menuRef.current) {
            if (!menuState) {
                menuRef.current.classList.add("show");
            } else {
                menuRef.current.classList.remove("show");
            }
        }
    };

    return(
        <div className="nav-header container-fluid bg-dark">
            <nav className="navbar navbar-dark">
                <a href="/" className="text-decoration-none fw-bold">
                    <span className="text-white px-3 h5">CETAN SAS</span>
                </a>
                <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false"
                aria-label="navbarSupportedContent"
                onClick={toggleNavbar}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div ref={menuRef} className={`navbar-collapse ${menuState === "open" ? "show" : "collapse"}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto align-items-end">
                        <li className="nav-item active">
                            <button className="nav-link px-3" href="#">
                                Usuario 
                                <span className="id-usuario text-uppercase">
                                {` JOHN Doe `}
                                </span>
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
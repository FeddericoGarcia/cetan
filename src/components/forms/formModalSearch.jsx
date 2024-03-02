import React from "react";
import Header from "../header/header.jsx";
// import '../../assets/css/form.css';
// import '../../assets/js/input.js';


const FormDB = () =>{
    return(
        <div className="App">
            < Header />
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
            <div className="container-fluid bg-white mt-4 p-3 shadow rounded">
                <h3 className="text-center">Ingresá los datos de busqueda</h3>
                <div className="mt-2 p-3">
                    <form id="form">
                        <div className="form-group">
                            <input type="text" id="nombreInput" className="input-field" placeholder=''></input>
                            <label htmlFor="nombreInput" className="input-label rounded">Nombre de Asesor</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="date" id="dateInput" className="input-field" placeholder=''></input>
                            <label htmlFor="dateInput" className="input-label rounded">Fecha</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="text" id="nombreInput" className="input-field" placeholder=''></input>
                            <label htmlFor="nombreInput" className="input-label rounded">Nombre de Cliente</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number" id="telefonoInput" className="input-field " placeholder=''></input>
                            <label htmlFor="telefonoInput" className="input-label rounded">Teléfono</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number" id="comprobanteInput" className="input-field " placeholder=''></input>
                            <label htmlFor="comprobanteInput" className="input-label rounded">N° de Comprobante</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number" id="importeInput" className="input-field " placeholder=''></input>
                            <label htmlFor="importeInput" className="input-label rounded">Importe de comprobante</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>                        
                        <div className="col-12 btn-group">
                            <div>
                                <button className=" btn btn-warning btn-lg" type="reset" id="btn_delete">Borrar</button>
                            </div>
                            <div>
                                <button className="btn btn-success btn-lg" type="button" id="btn_submit">Enviar</button>  
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
)};

export default FormDB;
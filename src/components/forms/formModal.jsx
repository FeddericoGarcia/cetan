import React from "react";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import './css/form.css';

const FormDB = () =>{
    return(
        <div className="App">
            < Header />
            <div className="container-fluid bg-form my-5 p-3 shadow rounded">
                <h3 className="text-center">Ingresá los datos del cliente</h3>
                <div className="mt-2 p-3">
                    <form id="form">
                        <div className="form-group">
                            <input type="text" id="nombreInput" className="input-field" placeholder='' required></input>
                            <label htmlFor="nombreInput" className="input-label rounded">Nombre y Apellido</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number" id="telefonoInput" className="input-field " placeholder='' required></input>
                            <label htmlFor="telefonoInput" className="input-label rounded">Teléfono</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number" id="comprobanteInput" className="input-field " placeholder='' required></input>
                            <label htmlFor="comprobanteInput" className="input-label rounded">N° de Comprobante</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <input type="number" id="importeInput" className="input-field " placeholder='' required></input>
                            <label htmlFor="importeInput" className="input-label rounded">Importe de comprobante</label>
                            <div className="invalid-feedback">
                                Por favor, completá éste campo
                            </div>
                        </div>
                        <div className="form-group">
                            <textarea typle="text" id="comentarioInput" className="input-field " placeholder=''></textarea>
                            <label htmlFor="comentarioInput" className="input-label rounded">Comentarios</label>
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
            < Footer />
        </div>
)};

export default FormDB;
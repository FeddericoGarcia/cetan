import React from 'react';

const ButtomForm = () =>{
    return (
        <td>
            {/* TODO: Agregar los path cuando este el backend */}
            <button className="btn btn-warning m-1" type='button'>Editar</button>
            <button className="btn btn-danger m-1" type='delete'>Eliminar</button>
        </td>
    )
}

export default ButtomForm;
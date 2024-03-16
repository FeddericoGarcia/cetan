import ButtomForm from "../buttom-form/Buttom-form";    
import '../table-clients/css/style.css'

    const SearchTable = () => {

    let clientList = [
        {"name": "EZEQUIEL",
        "email": "EZEQUIEL@GMAIL.COM",
        "phone": "1234688",
        "receipt": "12345678905441",
        "amount": 123,
        "info": "Mazo QWERTYU",
        "date": "15/03/2024 - 20:30"
    },


        {"name": "GABRIEL",
        "email": "GARBIEL@GMAIL.COM",
        "phone": "1234688",
        "receipt": "12345678905441",
        "amount": 33,
        "info": "Mazo QWERTYU",
        "date": "15/03/2024 - 20:30"
    },


        {"name": "LORENZO",
        "email": "",
        "phone": "1234688",
        "receipt": "12345678905441",
        "amount": 123,
        "info": "Mazo QWERTYU",
        "date": "15/03/2024 - 20:30"
    },


        {"name": "ARIEL",
        "email": "ARI@GMAIL.COM",
        "phone": "1234688",
        "receipt": "12345678905441",
        "amount": 1,
        "info": "Mazo QWERTYU",
        "date": "15/03/2024 - 20:30"
    },


        {"name": "GUSTAVO",
        "email": "ASD@GMAIL.COM",
        "phone": "1234688",
        "receipt": "12345678905441",
        "amount": 11121,
        "info": "Mazo ssss",
        "date": "15/03/2024 - 20:30"
    },


    ]

    let totalImporte = () =>{
        let total = 0;
        clientList.map(client => {
            total += parseInt(client.amount)
            return total;
        })
        return total
    }

    return (
        <div className=''>
            <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Email</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Número Comprobante</th>
                    <th scope="col">Importe</th>
                    <th scope="col">Info</th>
                    <th scope="col">Fecha</th>
                    <th scope="col">Editar / Eliminar</th>
                </tr>
            </thead>
            <tbody>
                { clientList.map((client, index) =>(
                    <tr key={index}>
                        <th scope="col" className='th-font'>{index + 1}</th>
                        <th scope="col" className='th-font text-uppercase'>{client.name}</th>
                        <th scope="col" className='th-font text-uppercase'>{!client.email ? "SIN/INFO" : client.email}</th>
                        <th scope="col" className='th-font'>{client.phone}</th>
                        <th scope="col" className='th-font'>{client.receipt}</th>
                        <th scope="col" className='th-font'>${client.amount}</th>
                        <th scope="col" className='th-font text-break w-15'>{client.info}</th>
                        <th scope="col" className='th-font'>{client.date}</th>
                        < ButtomForm />
                    </tr>
                ))}
                </tbody>
            </table>
            <div className="text-center">
                <div className="bg-white">
                    <div className="col fs-4">TOTAL IMPORTE = <span className="fw-bold">${totalImporte()}</span></div>
                </div>
            </div>
        </div>
)
}

export default SearchTable;
import ButtomForm from "../buttom-form/Buttom-form";    
import '../table-clients/css/style.css'

// TODO: TERMINAR TABLA DE ASESORES

    const SearchResultAdvisor = () => {

    let advisorList = [
        {"name": "EZEQUIEL",
        "email": "EZEQUIEL@GMAIL.COM",
        "dni": "1234688",
        "password": "12345678905441",
        "admin": false,
        "date": "00/00/0000 - 00:00"
    },


        {"name": "GABRIEL",
        "email": "GARBIEL@GMAIL.COM",
        "dni": "1234688",
        "password": "12345678905441",
        "admin": false,
        "date": "00/00/0000 - 00:00"
    },


        {"name": "LORENZO",
        "email": "",
        "dni": "1234688",
        "password": "12345678905441",
        "admin": false,
        "date": "00/00/0000 - 00:00"
    },


        {"name": "ARIEL",
        "email": "ARI@GMAIL.COM",
        "dni": "1234688",
        "password": "12345678905441",
        "admin": false,
        "date": "00/00/0000 - 00:00"
    },


        {"name": "GUSTAVO",
        "email": "ASD@GMAIL.COM",
        "dni": "1234688",
        "password": "12345678905441",
        "admin": false,
        "date": "00/00/0000 - 00:00"
    },


    ]

    let totalImporte = () =>{
        let total = 0;
        advisorList.map(advisor => {
            total += parseInt(advisor.amount)
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
                    <th scope="col">DNI</th>
                    <th scope="col">Password</th>
                    <th scope="col">Fecha Ingreso</th>
                    <th scope="col">Admin</th>
                </tr>
            </thead>
            <tbody>
                { advisorList.map((advisor, index) =>(
                    <tr key={index}>
                        <th scope="col" className='th-font'>{index + 1}</th>
                        <th scope="col" className='th-font text-uppercase'>{advisor.name}</th>
                        <th scope="col" className='th-font text-uppercase'>{!advisor.email ? "SIN/INFO" : advisor.email}</th>
                        <th scope="col" className='th-font'>{advisor.dni}</th>
                        <th scope="col" className='th-font'>{advisor.password}</th>
                        <th scope="col" className='th-font'>${advisor.date}</th>
                        <th scope="col" className='th-font'>${advisor.admin}</th>
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

export default SearchResultAdvisor;
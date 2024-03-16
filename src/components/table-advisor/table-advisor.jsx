import ButtomForm from "../buttom-form/Buttom-form";    
import '../table-clients/css/style.css'

    const SearchAdvisor = () => {

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
        "admin": true,
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
                    <th scope="col">Editar / Eliminar</th>
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
                        <th scope="col" className='th-font'>{advisor.date}</th>
                        <th scope="col" className='th-font'>{advisor.admin ? "Si" : "No"}</th>
                        < ButtomForm />
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
)
}

export default SearchAdvisor;
import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
import './css/style.css'

const SearchResult= () =>{
    return (
        <div className='App'>
            <Header />
            <div className="container bg-form my-5 mb-4 shadow justify-content-center flex-column rounded p-3">
                <h3 className='text-center m-2'>CETAN SAS</h3>
                <p className='m-2 py-3'>Resultados de la búsqueda</p>
                {/*TODO: CREAR TABLA PARA RETORNAR LOS VALORES DE LA DB */}
                <table>
                    <tbody>
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            < Footer />
        </div>
    )
}

export default SearchResult;
import Header from '../components/header/header.jsx'
import Footer from '../components/footer/footer.jsx'
import SearchTable from '../components/table-clients/table-ctes.jsx'
import './css/style.css'

const SearchResult= () =>{
    return (
        <div className='App'>
            <Header />
            <div className="container-table my-5 mb-4 shadow justify-content-center flex-column rounded p-3">
                <h3 className='text-center m-2'>CETAN SAS</h3>
                <p className='m-2 py-3'>Resultados de la búsqueda de Clientes</p>
                <SearchTable/>
            </div>
            < Footer />
        </div>
    )
}

export default SearchResult;
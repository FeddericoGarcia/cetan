import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormModal from './components/forms/formModal.jsx';
import FormModalSearch from './components/forms/formModalSearch.jsx'
import Login from './assets/login.jsx';
import PasswordRecovery from './assets/passwordRecovery.jsx';
import SearchResult from './assets/searchResult.jsx';
import SearchAdvisor  from './assets/searchAdvisor.jsx'
import PageNotFound from './assets/404.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<FormModal />} />
        <Route path="/formBusqueda" element={<FormModalSearch />}  />
        <Route path="/resultadosBusqueda" element={<SearchResult />}  />
        <Route path="/buscarAsesor" element={<SearchAdvisor />}  />
        <Route path="/restablecerContraseña" element={<PasswordRecovery />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
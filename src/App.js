import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormModal from './components/forms/formModal.jsx';
import FormModalSearch from './components/forms/formModalSearch.jsx'
import Login from './assets/login.jsx';
import PasswordRecovery from './assets/passwordRecovery.jsx';
import SearchResult from './assets/searchResult.jsx';
import SearchResultAdvisor  from './components/table-advisor/table-advisor.jsx'
import PageNotFound from './assets/404.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/form" element={<FormModal />} />
        <Route path="/form-search" element={<FormModalSearch />}  />
        <Route path="/search-result" element={<SearchResult />}  />
        <Route path="/search-advisor" element={<SearchResultAdvisor />}  />
        <Route path="/restablecer-contraseña" element={<PasswordRecovery />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
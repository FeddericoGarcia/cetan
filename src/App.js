import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap';
import './assets/css/form.css';
import FormModal from './components/forms/formModal.jsx';
import FormModalSearch from './components/forms/formModalSearch.jsx'
import Login from './assets/login.jsx';
import PageNotFound from './assets/404.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<FormModal />} />
        <Route path="/form-search" element={<FormModalSearch />}  />
      </Routes>
    </Router>
  );
}

export default App;
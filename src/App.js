import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './assets/css/form.css';
import FormModal from './components/forms/formModal.jsx';
// import FormModalSearch from './components/forms/formModalSearch.jsx'
import Login from './assets/login.jsx';
// import Header from './components/header/header.jsx';
// import Footer from './components/footer/footer.jsx';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="/form" element={<FormModal />} />
    //     <Route path="/form" element={<FormModalSearch />}  />
    //   </Routes>
    // </Router>
    < FormModal />
  );
}

export default App;
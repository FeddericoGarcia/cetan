import React from 'react';
import '../../assets/css/footer.css'


const Footer = () => {
  return (
      <div className='container-fluid'>
        <footer className="container-fluid">
          <div className="box-contact text-muted">
            <div>
              <i className="fa-solid fa-circle-info pe-2" aria-hidden="true"></i>
              Información de contacto
            </div>
            <div className="ms-1">
              <i className="fa-solid fa-location-dot pe-2" aria-hidden="true"></i>
              Barrio General Paz, Córdoba Capital, Argentina, CP 5000
            </div>
            <div>
              <i className="fa-solid fa-phone pe-2" aria-hidden="true"></i>
              Teléfono: 01 234 567 89
            </div>
            <div>
              <i className="fa-solid fa-envelope pe-2" aria-hidden="true"></i>
              Email: cetanGroup@gmail.com
            </div>
          </div>
        <div className="container d-flex">
          <div className="col-6 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-muted">
                Grupo CETAN © 2022 - All rights reserved, in association with
              <a href="https://www.almatawa.com/" className="linkStyle text-muted">
                AlmaTawa
              </a> |
              <a href="https://www.almatawa.com/" className="linkStyle text-muted">
                Terms and Conditions
              </a> | 
              <a href="https://www.almatawa.com/" className="linkStyle text-muted">
                Notice of Privacy
              </a>  
              <br></br>
              <small>
                Developed by  
                <a href="https://www.almatawa.com/" className="linkStyle text-muted">
                   FeddeGarcia
                </a>
              </small>
            </span>
          </div>

          {/* <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li className="ms-3"><a className="text-muted" href="https://www.twitter.com/">
              <svg className="bi effectLink">
                <use xlinkHref="#twitter"></use>
              </svg>
            </a>
          </li>
            <li className="ms-3">
              <a className="text-muted" href="https://www.instagram.com/">
                <svg className="bi effectLink">
                  <use xlinkHref="#instagram"></use>
                </svg>
              </a>
            </li>
            <li className="ms-3">
              <a className="text-muted" href="https://www.facebook.com/">
                <svg className="bi effectLink">
                  <use xlinkHref="#facebook"></use>
                </svg>
              </a>
            </li>
          </ul> */}
        </div>
      </footer>
    </div>
  );
};


export default Footer;
import React from 'react';
import './css/footer.css'

const Footer = () => {
  return (
    <div className="container-fluid container-footer">
      <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 footer-component">
        <div className="col mb-3 mt-1">
          <h5 className="txt-white">Grupo <b>CETAN</b> © 2024</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <div className='nav-link p-0 txt-white'>
                Todos los derechos reservardos
              </div>  
            </li> 
            <li className="nav-item mb-2">
              <div className='nav-link p-0 txt-white'>
                En asociación con  
                <a href="https://www.almatawa.com/" className="linkStyle txt-white p-1" target='_blank' rel="noreferrer">
                   AlmaTawa
                </a>
              </div>  
            </li> 
            <li className="nav-item mb-2">
              <div className='nav-link p-0 txt-white'>
                <a href="https://www.almatawa.com/" className="linkStyle txt-white" target='_blank' rel="noreferrer">
                  Terminos y Condiciones
                </a>
              </div>  
            </li> 
            <li className="nav-item mb-2">
              <div className='nav-link p-0 txt-white'>
                <a href="https://www.almatawa.com/" className="linkStyle txt-white" target='_blank' rel="noreferrer">
                  Aviso de privacidad
                </a> 
              </div>  
            </li>
          </ul>
        </div>

        <div className="col mb-3">
        </div>

        <div className="col mb-3">
          <h5 className='txt-white'>
            Información de contacto
          </h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <div href="#" className="nav-link p-0 txt-white">
                <i className="fa-solid fa-location-dot pe-2" aria-hidden="true"></i>
                    Barrio General Paz, Córdoba Capital, Argentina, CP 5000  
              </div>
            </li>
            <li className="nav-item mb-2">
              <div href="#" className="nav-link p-0 txt-white">
                <i className="fa-solid fa-phone pe-2" aria-hidden="true"></i>
                    Teléfono: +54 9 351 872-4751
              </div>
            </li>
            <li className="nav-item mb-2">
              <div href="#" className="nav-link p-0 txt-white">
                <i className="fa-solid fa-envelope pe-2" aria-hidden="true"></i>
                    Email: cetan.grupo@gmail.com
              </div>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
        </div>

        <div className="col mb-3">
          <h5 className="txt-white">
            Nuestra redes sociales
          </h5>
          <ul className="nav">
            <li className="nav-item mb-2">
              <div className='nav-link text-center'>
                <a className="text-muted" href='https://api.whatsapp.com/send?phone=5493513821374&text=Enlace%3A%0A
                https%3A%2F%2Ffb.me%2F1U5UL7DRf%0A%0A%C2%A1Hola!%20Me%20gustar%C3%ADa%20conseguir%20m%C3%A1s%20
                informaci%C3%B3n%20sobre%20esto.&source_url=https%3A%2F%2Ffb.me%2F1U5UL7DRf&icebreaker=%C2%A1Hola!
                %20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20servicio...&app=facebook&
                entry_point=post_cta&jid=5493516803058%40s.whatsapp.net&show_keyboard=1&show_ad_attribution=1&
                context=ARDAFflQz5Ye-pfeAr4Kl9PhQ7AMR9SFEBhZUxaOTOP_XnCwEztpiMTgiQpMCTSWZXs1yjJQAZnf-vipGOxzacT9Oh6Xbc0b_
                xtFxYaQhlXvworq8l8p8QQL3PZ7S6-TeuTZvHnEOE8oxGUdhipZN7tDUuNsRP_ICEF8uzurz6tmKsWcpRy57XDYCrFXMYBT0hsaN-EO9wiJr8Cae_
                YobPU5WDU9xz1UcbanpRQByiJBRsGv1OQQB54c3LceVjIGcTx2-Je3YmyHjlZJwaj_t2qZh_m-atwOsZVH4zC0BYSnVlFcw3cpr
                IHhnwU1jtscsYVTN36XDtIxB5XG&token=eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjEyNSJ9.eyJleHAiOjE3
                MDk4NTcxMTMsInBob25lIjoiNTQ5MzUxNjgwMzA1OCIsInRleHQiOiJFbmxhY2U6XG5odHRwczpcL1wvZmIubWVcLzFVNVVMN0R
                SZlxuXG5cdTAwYTFIb2xhISBNZSBndXN0YXJcdTAwZWRhIGNvbnNlZ3VpciBtXHUwMGUxcyBpbmZvcm1hY2lcdTAwZjNuIHNvYn
                JlIGVzdG8uIiwic291cmNlX3VybCI6Imh0dHBzOlwvXC9mYi5tZVwvMVU1VUw3RFJmIiwiaWNlYnJlYWtlciI6Ilx1MDBhMUhvb
                GEhIE1lIGd1c3Rhclx1MDBlZGEgY29uc2VndWlyIG1cdTAwZTFzIGluZm9ybWFjaVx1MDBmM24gc29icmUgZXN0by4iLCJhcHAi
                OiJmYWNlYm9vayIsImVudHJ5X3BvaW50IjoicG9zdF9jdGEiLCJqaWQiOiI1NDkzNTE2ODAzMDU4XHUwMDQwcy53aGF0c2FwcC5u
                ZXQiLCJzaG93X2tleWJvYXJkIjoxLCJzaG93X2FkX2F0dHJpYnV0aW9uIjoxfQ.8FyGeL7lt6jBxvfg2en-qoQPdkkNcGzciCdE
                4M9YbU_9avZTdqyuXjh90_5kkQGb9jYFXBCctR9Jh1Agx7Y0bQ' target='_blank' rel="noreferrer">
                  <i class="fa-brands fa-whatsapp"></i>
                </a>
              </div>  
            </li>
            {/* <li className="nav-item mb-2">
              <div className='nav-link text-center'>
                <a className="text-muted" href="https://www.twitter.com/cetan" target='_blank' rel="noreferrer">
                  <i class="fa-brands fa-twitter"></i>
                </a>
              </div>  
            </li> */}
            <li className="nav-item mb-2">
              <div href="#" className="nav-link text-center">
                <a className="text-muted" href="https://www.instagram.com/tarot.cetan" target='_blank' rel="noreferrer">
                  <i class="fa-brands fa-instagram"></i>
                </a>
              </div>
            </li>
            <li className="nav-item mb-2">
              <div href="#" className="nav-link text-center">
                <a className="text-muted" href="https://www.facebook.com/cetanestudio" target='_blank' rel="noreferrer">
                  <i class="fa-brands fa-facebook"></i>
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div className="col mb-3">
        </div>
        
        <div className="col mb-3">
        </div>

        <div class="col-12 txt-white">
          <small>
            Developed by  
            <a href="https://github.com/FeddericoGarcia" className="linkStyle txt-white p-1" target='_blank' rel="noreferrer">
              FeddeGarcia
            </a>
          </small>
        </div>
      </footer>
    </div>
  );
};


export default Footer;
import React from "react";

const Reference = ({ language }) => {
  return (
    <>
      <div className="testimonials-box">
        <h2 className="heading">Referencia</h2>
        <div className="wrapper">
          <div className="testimonial-item">
            <h1>Banco de Crédito - BCP</h1>
            <img src="user_generic.jpg" alt="" />
            <div>
              <h2>Braian</h2>
              <p>Supervisor – Analista Técnico I</p>
            </div>
          </div>
          <div className="testimonial-item">
            <h1>Banco Nacional de Bolivia - BNB</h1>
            <img src="user_generic.jpg" alt="" />
            <div>
              <h2>Seiji</h2>
              <p>Gerente Centro de Innovación</p>
            </div>
          </div>
          <div className="testimonial-item">
            <h1>Banco Mercantil Santa Cruz - BMSC</h1>
            <img src="user_generic.jpg" alt="" />
            <div>
              <h2>Rodmy</h2>
              <p>Subgerente de Análisis y Programación - Proyecto Renovar</p>
            </div>
            {/* <div className="rating">
                  <i className="bx bxs-star" id="star"></i>
                  <i className="bx bxs-star" id="star"></i>
                  <i className="bx bxs-star" id="star"></i>
                  <i className="bx bxs-star" id="star"></i>
                  <i className="bx bxs-star" id="star"></i>
                </div> */}
            {/* <p>pero que carajos paso por aca</p> */}
          </div>
          <div className="testimonial-item">
            <h1>Banco Ganadero</h1>
            <img src="user_generic.jpg" alt="" />
            <div>
              <h2>Maria Heredia Sandoval</h2>
              <p>Gerente de TI</p>
            </div>
          </div>
        </div>
        <footer footer className="footer">
          {/* <div className="social">
                <a href="#"><i className="bx bx1-linkedin"></i></a>
                <a href="#"><i className="bx bx1-linkedin"></i></a>
                <a href="#"><i className="bx bx1-linkedin"></i></a>
                <a href="#"><i className="bx bx1-linkedin"></i></a>
              </div> */}
          {/* <ul className="list">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">About Me</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul> */}
          <p className="copyright">th4or.dev | v1.0.2</p>
        </footer>
      </div>
    </>
  );
};

export default Reference;

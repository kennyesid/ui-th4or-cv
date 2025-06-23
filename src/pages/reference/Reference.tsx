import dataInformation from "../../features/home/services/dataInformation"; // adjust path if needed
type LanguageType = typeof dataInformation.english;

interface ReferenceProps {
  language: LanguageType;
}

const Reference: React.FC<ReferenceProps> = ({ language }) => {
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
        <footer className="footer">
          <p className="copyright">th4or.dev | v2.0.0</p>
        </footer>
      </div>
    </>
  );
};

export default Reference;

import dataInformation from "../../features/home/services/dataInformation"; // adjust path if needed
type LanguageType = typeof dataInformation.english;

interface ServicesProps {
  language: LanguageType;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  return (
    <>
      <h2 className="heading">Services</h2>
      <div className="services-container">
        <div>
          <div className="service-background-react">
            {/* Enlace Posicionado en la esquina superior izquierda */}
            <a
              href="https://restaurant-web-murex-eight.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir a la página"
              className="visit-button-icon absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-all duration-300 backdrop-blur-md flex items-center justify-center hover:scale-110"
            >
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-white"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
            <div className="texts-containers">
              <ul className="texts-containers-ul">
                <li>Vite</li>
                <li>React JS</li>
                <li>Javascript</li>
                <li>React Redux</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="service-background-react-2">
            <div className="texts-containers">
              <ul className="texts-containers-ul">
                <li>Vite</li>
                <li>React JS</li>
                <li>Typescript</li>
                <li>React Router</li>
                <li>Jest</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="service-background-net-core">
            <div className="texts-containers">
              <ul className="texts-containers-ul">
                <li>Sha256</li>
                <li>Net core 8</li>
                <li>Lambda Expression</li>
                <li>NUnit</li>
                <li>Swagger</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="service-background-bootstrap">
            <div className="texts-containers">
              <ul className="texts-containers-ul">
                <li>JWT</li>
                <li>Spring Boot 3.1</li>
                <li>Java 17</li>
                <li>Lombok</li>
                <li>Docker</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="service-box">
              <div className="service-info">
                <h4>UI Design</h4>
                <p>pero que carajos</p>
                <img width='80%' height='auto' src="/portafolio-spring-boot.png" type="image/svg+xml">
  
                </img>
  
              </div>
            </div>
            <div className="service-box">
              <div className="service-info">
                <h4>UI Design</h4>
                <p>pero que carajos</p>
                <div className='imageToInsert'></div>
              </div>
            </div>
            <div className="service-box">
              <div className="service-info">
                <h4>UI Design</h4>
                <p>pero que carajos</p>
              </div>
            </div>
            <div className="service-box">
              <div className="service-info">
                <h4>UI Design</h4>
                <p>pero que carajos</p>
              </div>
            </div> */}
      </div>
    </>
  );
};

export default Services;

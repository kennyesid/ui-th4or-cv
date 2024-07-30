import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
// import dataInformation from '@/src/data/dataInformation';
import dataInformation from './data/dataInformation';

function App() {
  const [count, setCount] = useState(0);
  const [language, setLanguage] = useState(dataInformation.spanish);
  const [languageFlag, setLanguageFlag] = useState(true);
  const [loading, setloading] = useState(true);

  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');
  let selections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    selections.forEach(sec => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header nav a [href*=' + id + ']').classList.add('active');
        })
      }
    })
  }

  useEffect(() => {
    console.log('timeout');

    setTimeout(() => {
      setloading(false);
    }, 5000)
  }, [])


  // menuIcon.onclick = () => {
  //   menuIcon.classList.toggle('bx-x');
  //   navbar.classList.toggle('active');
  // }

  function redirectPageWhatsapp(event) {
    event.preventDefault();
    window.open("https://wa.me/qr/AWRIQJUT6PYBN1/", "_blank");
  }
  function redirectPageLinkedin(event) {
    event.preventDefault();
    window.open("https://www.linkedin.com/in/yesid-alejandro-sacaca-carrasco-656831155/", "_blank");
  }
  function redirectPageGitHub(event) {
    event.preventDefault();
    window.open("https://github.com/kennyesid/kennyesid", "_blank");
  }

  function changelenguage() {
    console.log('changelenguage:', languageFlag);
    console.log('changelenguage:', language)
    setLanguageFlag(!languageFlag);
    setLanguage(languageFlag ? dataInformation.spanish : dataInformation.english);
  }

  if (loading) {
    return (
      <div className='divPadre'>
        <div className='divHijo'>
          <img src="loading-logo-2.gif" alt="v1.0.1" width='150px' height='auto' />
        </div>
      </div>
    )
  } else {
    return (
      <>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>
        <div className="firefly"></div>

        <header className="header">
          <a href="#home" className="logo">th4or
            <span className='logoExtencion'>.dev</span>
          </a>
          {/* <a onClick={() => changelenguage()} className='language'>.Español</a> */}


          {/* <i className="bx bx-menu" id="menu-icon"></i> */}
          {/* <button>asdf</button> */}

          {/* <button onClick={() => changelenguage()}>
            {languageFlag ? 'ES' : 'EN'}
          </button> */}

          <nav className="navbar">
            <a href="#home" className="active">{language.navbar.home}</a>
            <a href="#job">{language.navbar.job}</a>
            <a href="#services">{language.navbar.service}</a>
            <a href="#reference">{language.navbar.reference}</a>
            {/* <a href="#contact">Contact</a> */}
          </nav>
        </header>

        <section className="home" id="home">
          <div className="home-img">
            <h1>{language.home.title} <span>Yesid</span></h1>
            <h3><span>FullStack</span> Developer</h3>
            <img className='home-img-principal' src="/me-portafolio.png" alt="" />
            <div className='social-icons'>
              <h2 className='social-icons-h2'>{language.home.contactMe}</h2>
              <h3>Favor de contactarse con mi persona por los siguientes medios para poder enviarle mi CV con las respectivas referencias.</h3>
              <img onClick={redirectPageWhatsapp} href="https://icons8.com/icons/set/whatsapp" src="/icon-whatsapp-4.svg" />
              <img onClick={redirectPageLinkedin} href="https://icons8.com/icons/set/whatsapp" src="/icons8-linkedin-4.svg" />
              <img onClick={redirectPageGitHub} href="https://icons8.com/icons/set/whatsapp" src="/icon-github.svg" />
            </div>
          </div>

          <div className="home-content">
            {/* <h1>Hi, It's <span>Amelia</span></h1>
            <h3 className="text-animation">I'm a <span></span></h3> */}
            {/* <h2 className="home-content-h22">{language.home.descriptionTitle}</h2> */}
            <h2 className="home-content-description-me">{language.home.descriptionTitle}</h2>
            <h3>{language.home.descriptionBodyOne}</h3>
            <h3>{language.home.descriptionBodyTwo}</h3>
            <h3>{language.home.descriptionBodyThree}</h3>
            <h3>{language.home.descriptionBodyFor}</h3>
            <div className="social-icons">
              {/* <a href="#"><i className='bx bxl-github'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a> */}
              <img src="/icon-react.svg" type="image/svg+xml">
              </img>
              <img src="/icon-typescript.svg" type="image/svg+xml">
              </img>
              <img src="/icon-javascript.svg" type="image/svg+xml">
              </img>
              <img src="/icon-html5.svg" type="image/svg+xml">
              </img>
              <img src="/icon-css3-2.svg" type="image/svg+xml">
              </img>
              <img src="/icon-bootstrap.svg" type="image/svg+xml">
              </img>
              <img src="/icon-material.svg" type="image/svg+xml">
              </img>
              {/* <object name='sadasd' alt="Girl in a jacket" data="/icon-microsoft-sql-server.svg" type="image/svg+xml">
              </object> */}
            </div>
            <div className='social-icons'>
              <img src="/icon-c-2.svg" type="image/svg+xml">
              </img>
              <img src="/icon-dot-net-2.svg" type="image/svg+xml">
              </img>
              <img src="/icon-nodejs.svg" type="image/svg+xml">
              </img>
              <img src="/icon-nestjs.svg" type="image/svg+xml">
              </img>
              <img src="/icon-spring-boot.svg" type="image/svg+xml">
              </img>
            </div>
            <div className='social-icons'>
              <img src="/icons8-oracle-pl-sql.svg" type="image/svg+xml">
              </img>
              <img src="/icon-postgres.svg" type="image/svg+xml">
              </img>
              <img src="/microsoft-sql-server-1.svg" type="image/svg+xml" />
              <img src="/icon-mongodb.svg" type="image/svg+xml" />
            </div>
            <div className='social-icons'>
              <img src="/icon-postman.svg" type="image/svg+xml">
              </img>
              <img src="/icon-jira.svg" type="image/svg+xml">
              </img>
            </div>
            {/* <div className="btn-group">
              <a href="#" className="btn">Hire</a>
              <a href="#contact" className="btn">Contact</a>
            </div> */}

            {/* <object href="https://icons8.com/icons/set/whatsapp" data="/icon-whatsapp-4.svg" type="image/svg+xml">
            </object> */}
          </div>

        </section >
        <section className="education" id="job">
          <h2 className="heading">Job</h2>
          <div className="timeline-items">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2021/10 - Hoy</div>
              <div className="timeline-content">
                <div>
                  <h3 className='timeline-content-right'>Banco Ganadero</h3>
                  <h1 className='timeline-content-right timeline-content-cargo'>Desarrollador de Software</h1>
                </div>
                <p>Lo más importante que realice es desarrollar un servicio rest con spring boot el cual interactúa con el core del banco, este servicio fue creado en la interacción con el<span className='span-relieve'> Banco Central de Bolivia </span> el cual realiza abonos masivos de múltiples clientes, donde se controló el estado de la cuenta, actualización de saldos, horario en el que se puede realizar este tipo de transacciones, seguridad con jwt, Sha256 y mas…</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2019/03 - 2021/10</div>
              <div className="timeline-content">
                <h3>Banco Mercantil Santa Cruz </h3>
                <h1 className='timeline-content-cargo'>Analista de Sistemas</h1>
                <p>Estuve a cargo de los <span className='span-relieve'>ATM’s</span> del Banco el cual en su momento se migro el core bancario para lo cual se contrató una empresa externa el cual realizo un servicio rest y yo era el encargado de controlar todo el flujo del ATM como ser consultas, extracto, retiro, depósito y demás.</p>
                <p>Obviamente todas respuestas que el ATM visualiza al cliente se las controlo con el documento ISO 8586.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2018/04 - 2018/10</div>
              <div className="timeline-content">
                <h3 className='timeline-content-right'>Banco Nacional de Bolivia</h3>
                <h1 className='timeline-content-right timeline-content-cargo'>Analista Soluciones Digitales</h1>
                <p>La principal función que realice es realizar un dashboard donde mostraba todas las transacciones realizadas en plataforma, ATM, BNB Movil y demás canales. </p>
                <p>Este dashboard mostraba en torta y barra de porcentajes las transacciones realizadas por día, semana, mes y año.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2015/03 - 2018/04</div>
              <div className="timeline-content">
                <h3>Banco de Crédito de Bolivia</h3>
                <h1 className='timeline-content-cargo'>Analista tecnico III</h1>
                <p>El BCP fue mi maestra y dio pie a aprender todas las tecnologías que hoy en día conozco y también tuve un muy buen mentor que me enseñó a manejar correctamente las variables, acá realice muchas cosillas pero lo más sobresaliente fue de ser parte del backend de la aplicación Soli BCP el cual al principio se realizó entre 5 integrantes y se utilizó la modalidad de la Orquestación para Backend, al final mi persona fue el encargado principal de manejar todo el servicio rest que realiza las transacciones bancarias, pagos a servicios y demás.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="services" id="services">
          <h2 className="heading">Services</h2>
          <div className="services-container">
            <div>
              <div className="service-background-react">
                <div className='texts-containers'>
                  <ul className='texts-containers-ul'>
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
                <div className='texts-containers'>
                  <ul className='texts-containers-ul'>
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
                <div className='texts-containers'>
                  <ul className='texts-containers-ul'>
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
                <div className='texts-containers'>
                  <ul className='texts-containers-ul'>
                    <li>JWT</li>
                    <li>Spring Boot 3.1</li>
                    <li>Java 17</li>
                    <li>Lombok</li>
                    <li>pendejo</li>
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
        </section>
        <section className="testimonials" id="reference">
          <div className="testimonials-box">
            <h2 className="heading">Referencia</h2>
            <div className="wrapper">
              <div className="testimonial-item">
                <h1>Banco Mercantil Santa Cruz - BMSC</h1>
                <img src="/user_generic.jpg" alt="" />
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
                <h1>Banco Nacional de Bolivia - BNB</h1>
                <img src="/user_generic.jpg" alt="" />
                <div>
                  <h2>Seiji</h2>
                  <p>Gerente Centro de Innovación</p>
                </div>
              </div>
              <div className="testimonial-item">
                <h1>Banco de Crédito - BCP</h1>
                <img src="/user_generic.jpg" alt="" />
                <div>
                  <h2>Braian</h2>
                  <p>Supervisor – Analista Técnico I</p>
                </div>
              </div>
            </div>
            <footer footer className="footer" >
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
              <p className="copyright">
                th4or.dev | v1.0.0
              </p>
            </footer >
          </div>
        </section >
        {/* <section className="contact" id="contact">
          <h2 className="heading">Contact <span>Me</span></h2>
          <form action="">
            <div className="input-group">
              <div className="input-box">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-box">
                <input type="number" placeholder="Phone Number" />
                <input type="text" placeholder="Subject" />
              </div>
            </div>
            <div className="input-group-2">
              <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
              <input type="submit" value="send message" className="btn" />
            </div>
          </form>
        </section> */}

        {/* <footer footer className="footer" >
          <div className="social">
            <a href="#"><i className="bx bx1-linkedin"></i></a>
            <a href="#"><i className="bx bx1-linkedin"></i></a>
            <a href="#"><i className="bx bx1-linkedin"></i></a>
            <a href="#"><i className="bx bx1-linkedin"></i></a>
          </div>
          <ul className="list">
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
          </ul>
          <p className="copyright">
            th4or.dev | v1.0.0
          </p>
        </footer > */}
      </>
    )
  }


}

export default App

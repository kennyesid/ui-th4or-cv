import { useEffect, useState } from "react";

import dataInformation from "./data/dataInformation";

import Education from "./pages/education/Education";
import HomeHeader from "./pages/home/HomeHeader";
import Services from "./pages/services/Services";
import Reference from "./pages/reference/Reference";

import "./App.css";
import "./index.css";

// const onChangeLanguage = dataInformation.spanish;

function App() {
  const [languageDb, setLanguageDb] = useState();
  const [language, setLanguage] = useState();
  // const [language, setLanguage] = useState(dataInformation.spanish);
  const [languageFlag, setLanguageFlag] = useState(true);
  const [loading, setloading] = useState(true);

  let menuIcon = document.querySelector("#menu-icon");
  let navbar = document.querySelector(".navbar");
  let selections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  window.onscroll = () => {
    selections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          links.classList.remove("active");
          document
            .querySelector("header nav a [href*=" + id + "]")
            .classList.add("active");
        });
      }
    });
  };

  useEffect(() => {
    setLanguageDb(dataInformation);
    setLanguage(dataInformation.english);
    setTimeout(() => {
      setloading(false);
    }, 4000);
  }, []);

  function redirectPageWhatsapp(event) {
    event.preventDefault();
    // window.open("https://wa.link/wekog1", "_blank");
    window.open("https://wa.link/ucwfpv", "_blank");
  }
  function redirectPageLinkedin(event) {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/yesid-alejandro-sacaca-carrasco-656831155/",
      "_blank"
    );
  }
  function redirectPageGitHub(event) {
    event.preventDefault();
    window.open("https://github.com/kennyesid/kennyesid", "_blank");
  }
  function changelenguage(event) {
    event.preventDefault();
    // debugger;
    const ln =
      language.navbar.home == "Inicio"
        ? languageDb.english
        : languageDb.spanish;
    setLanguage(ln);
    // setLanguage(setLanguage(language.navbar.home = 'Inicio' ? languageDb.english : languageDb.spanish));
    // console.log('changelenguage:', languageFlag);
    // console.log('changelenguage:', language)

    // setLanguage(language.navbar.home = 'Inicio' ? dataInformation.english : dataInformation.spanish)

    // setLanguageFlag(!languageFlag);
    // setLanguage(languageFlag ? dataInformation.spanish : dataInformation.english);
  }

  if (loading) {
    return (
      <div className="divPadre">
        <div className="divHijo">
          <img
            src="loading-logo-2.gif"
            alt="v1.0.1"
            width="150px"
            height="auto"
          />
        </div>
      </div>
    );
  } else {
    return (
      <>
        <header className="header">
          <a onClick={(e) => changelenguage(e)} className="logo">
            th4or
            <span className="logoExtencion">.dev</span>
            <a>.{language.language}</a>
            <img src="icon-touch.svg" type="image/svg+xml"></img>
            <a
              style={{
                fontSize: "12px",
                fontWeight: "bold",
                position: "absolute",
              }}
            >
              {language.click}
            </a>
          </a>
          {/* <a onClick={() => changelenguage()} className='language'>.Español</a> */}

          {/* <i className="bx bx-menu" id="menu-icon"></i> */}
          {/* <button>asdf</button> */}

          {/* <button onClick={() => changelenguage()}>
            {languageFlag ? 'ES' : 'EN'}
          </button> */}

          <nav className="navbar">
            {/* <a href="#home" className="active">{language.navbar.home}</a> */}
            <a href="#home">{language.navbar.home}</a>
            <a href="#job">{language.navbar.job}</a>
            <a href="#services">{language.navbar.service}</a>
            <a href="#reference">{language.navbar.reference}</a>
          </nav>
        </header>
        {/* <h1>holas</h1> */}
        <section className="home" id="home">
          <HomeHeader
            language={language}
            redirectPageWhatsapp={redirectPageWhatsapp}
            redirectPageLinkedin={redirectPageLinkedin}
            redirectPageGitHub={redirectPageGitHub}
          />
        </section>
        <section className="education" id="job">
          <Education language={language} />
        </section>
        <section className="services" id="services">
          <Services language={language} />
        </section>
        <section className="testimonials" id="reference">
          <Reference />
        </section>
      </>
    );
  }
}

export default App;

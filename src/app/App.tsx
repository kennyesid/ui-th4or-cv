import React, { useEffect, useState } from "react";

import dataInformation from "../features/home/services/dataInformation";

import Education from "../pages/education/Education";
import HomeHeader from "../pages/home/HomeHeader";
import Services from "../pages/services/Services";
import Reference from "../pages/reference/Reference";
//const apiWhatsapp = import.meta.env.VITE_API_API_WHATSAPP;

type LanguageType = typeof dataInformation.english;
type DataInformationType = typeof dataInformation;

import "../styles/App.css";
import "../styles/index.css";
import Loading from "../pages/loading/Loading";

function App(): JSX.Element {
  const [languageDb, setLanguageDb] =
    useState<DataInformationType>(dataInformation);
  const [language, setLanguage] = useState<LanguageType>(
    dataInformation.english
  );

  const [loading, setloading] = useState(true);

  let selections = document.querySelectorAll("section");
  let navLinks = document.querySelectorAll("header nav a");

  // const apiWhatsapp = process.env.VITE_API_API_WHATSAPP;

  window.onscroll = () => {
    selections.forEach((sec) => {
      let top = window.scrollY;
      let offset = sec.offsetTop - 150;
      let height = sec.offsetHeight;
      let id = sec.getAttribute("id");

      if (top >= offset && top < offset + height) {
        navLinks.forEach((links) => {
          const activeLink = document.querySelector(
            "header nav a [href*=" + id + "]"
          );
          if (activeLink) {
            activeLink.classList.add("active");
          }
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

  function redirectPageWhatsapp(event: { preventDefault: () => void }) {
    event.preventDefault();
    window.open("https://wa.link/ucwfpv", "_blank");
  }

  function redirectPageLinkedin(event: { preventDefault: () => void }) {
    event.preventDefault();
    window.open(
      "https://www.linkedin.com/in/yesid-alejandro-sacaca-carrasco-656831155/",
      "_blank"
    );
  }
  function redirectPageGitHub(event: { preventDefault: () => void }) {
    event.preventDefault();
    window.open("https://github.com/kennyesid/kennyesid", "_blank");
  }
  function changelenguage(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    const ln =
      language.navbar.home == "Inicio"
        ? languageDb.english
        : languageDb.spanish;
    setLanguage(ln);
  }

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <header className="header">
          <a onClick={(e) => changelenguage(e)} className="logo">
            th4or
            <span className="logoExtencion">.dev</span>
            <a>.{language.language}</a>
            <img src="icon-touch.svg" alt="touch icon" />
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
          <nav className="navbar">
            <a href="#home">{language.navbar.home}</a>
            <a href="#job">{language.navbar.job}</a>
            <a href="#services">{language.navbar.service}</a>
            <a href="#reference">{language.navbar.reference}</a>
          </nav>
        </header>
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
          <Reference language={language} />
        </section>
      </>
    );
  }
}

export default App;

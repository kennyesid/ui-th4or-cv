import { useEffect } from "react";
import { firestore } from "../backgroundFound/Senddb";
import { addDoc, collection } from "firebase/firestore";

import dataInformation from "../../features/home/services/dataInformation";

type LanguageType = typeof dataInformation.english;

interface HomeHeaderProps {
  language: LanguageType;
  redirectPageWhatsapp: (event: React.MouseEvent<HTMLImageElement>) => void;
  redirectPageLinkedin: (event: React.MouseEvent<HTMLImageElement>) => void;
  redirectPageGitHub: (event: React.MouseEvent<HTMLImageElement>) => void;
}

const HomeHeader: React.FC<HomeHeaderProps> = ({
  language,
  redirectPageWhatsapp,
  redirectPageLinkedin,
  redirectPageGitHub,
}) => {
  const getAllDate = new Date();
  const getDate = getAllDate.getDate();
  const getMonth = getAllDate.getMonth();

  const ref = collection(
    firestore,
    getDate.toString() + "-" + getMonth.toString() + "-" + "2024"
  );

  function redirectPageInstagram(event: React.MouseEvent<HTMLImageElement>) {
    event.preventDefault();
    window.open("https://www.instagram.com/kennyesid/", "_blank");
  }

  useEffect(() => {
    const xmas95 = new Date();
    let data = {
      message: xmas95,
    };
    try {
      addDoc(ref, data);
    } catch (ex) {
      if (ex instanceof Error) {
        console.log("exception: ", ex.message);
      } else {
        console.log("exception: ", ex);
      }
    }
  }, []);

  return (
    <>
      <div className="home-img">
        <h1>
          {language.initHome.title} <span>Alejandro</span>
        </h1>
        <h3>
          <span>FullStack</span> Developer
        </h3>
        <img className="home-img-principal" src="me-portafolio.png" alt="" />
        <div className="social-icons">
          <h2 className="social-icons-h2">{language.initHome.contactMe}</h2>
          <h3>{language.initHome.contactMeDescription}</h3>
          <img onClick={redirectPageLinkedin} src="icons8-linkedin-4.svg" />
          <img onClick={redirectPageGitHub} src="icon-github.svg" />
          <img onClick={redirectPageInstagram} src="icon-instagram.svg" />
        </div>
      </div>
      <div className="home-content">
        <h2 className="home-content-description-me">
          {language.initHome.descriptionTitle}
        </h2>
        <h3>{language.initHome.descriptionBodyOne}</h3>
        <div className="social-icons">
          <img src="icon-react.svg" alt="react" />
          <img src="icon-typescript.svg" alt="react"></img>
          <img src="icon-javascript.svg" alt="react"></img>
          <img src="icon-html5.svg" alt="react"></img>
          <img src="icon-css3-2.svg" alt="react"></img>
          <img src="icon-bootstrap.svg" alt="react"></img>
          <img src="icon-material.svg" alt="react"></img>
        </div>
        <div className="social-icons">
          <img src="icon-c-2.svg" alt="react"></img>
          <img src="icon-dot-net-2.svg" alt="react"></img>
          <img src="icon-nodejs.svg" alt="react"></img>
          <img src="icon-nestjs.svg" alt="react"></img>
          <img src="icon-spring-boot.svg" alt="react"></img>
        </div>
        <div className="social-icons">
          <img src="icons8-oracle-pl-sql.svg" alt="react"></img>
          <img src="icon-postgres.svg" alt="react"></img>
          <img src="microsoft-sql-server-1.svg" alt="react" />
          <img src="icon-mongodb.svg" alt="react" />
        </div>
        <div className="social-icons">
          <img src="icon-postman.svg" alt="react"></img>
          <img src="icon-jira.svg" alt="react"></img>
        </div>
      </div>
    </>
  );
};

export default HomeHeader;

import React from "react";

import dataInformation from "../../features/home/services/dataInformation"; // adjust path if needed
type LanguageType = typeof dataInformation.english;

interface EducationProps {
  language: LanguageType;
}

const Education: React.FC<EducationProps> = ({ language }) => {
  console.log(language);
  return (
    <>
      <h2 className="heading">Job</h2>
      <div className="timeline-items">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2021/10 - 2024/07</div>
          <div className="timeline-content">
            <div>
              <h3 className="timeline-content-right">Banco Ganadero</h3>
              <h1 className="timeline-content-right timeline-content-cargo">
                {language.job.jobGanadero.jobTitle}
              </h1>
            </div>
            <ul>
              <li>{language.job.jobGanadero.one}</li>
              <li>{language.job.jobGanadero.two}</li>
              <li>{language.job.jobGanadero.three}</li>
              <li>{language.job.jobGanadero.for}</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2019/03 - 2021/10</div>
          <div className="timeline-content">
            <h3>Banco Mercantil Santa Cruz</h3>
            <h1 className="timeline-content-cargo">
              {language.job.jobBMSC.jobTitle}
            </h1>
            <ul>
              <li>{language.job.jobBMSC.one}</li>
              <li>{language.job.jobBMSC.two}</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2018/04 - 2018/10</div>
          <div className="timeline-content">
            <h3 className="timeline-content-right">
              Banco Nacional de Bolivia
            </h3>
            <h1 className="timeline-content-right timeline-content-cargo">
              {language.job.jobBnb.jobTitle}
            </h1>
            <ul>
              <li>{language.job.jobBnb.one}</li>
              <li>{language.job.jobBnb.two}</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-date">2015/03 - 2018/04</div>
          <div className="timeline-content">
            <h3>Banco de Crédito de Bolivia</h3>
            <h1 className="timeline-content-cargo">
              {language.job.jobBCP.jobTitle}
            </h1>
            <ul>
              <li>{language.job.jobBCP.one}</li>
              <li>{language.job.jobBCP.two}</li>
              <li>{language.job.jobBCP.three}</li>
              <li>{language.job.jobBCP.for}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;

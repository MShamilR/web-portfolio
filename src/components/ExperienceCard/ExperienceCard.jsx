import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = ({ title, company, timeline, languages, logo, logoWhiteBg }) => {
  return (
    <div className="repository-card">
      {logo && (
        <div className={`company-logo-wrap${logoWhiteBg ? " white-bg" : ""}`}>
          <img src={logo} alt={company} className="company-logo" />
        </div>
      )}
      <div className="title">
        <h4>{title}</h4>
        <div className="date-capsule">{timeline}</div>
      </div>
      <p>{company}</p>
      <div className="repo-details">
        <span>
          {languages.map(({ color, name }) => (
            <React.Fragment key={name}>
              <span style={{ color }}>⬤&nbsp;</span>
              <span>{name}&nbsp;&nbsp;&nbsp;</span>
            </React.Fragment>
          ))}
        </span>
      </div>
    </div>
  );
};

export default ExperienceCard;

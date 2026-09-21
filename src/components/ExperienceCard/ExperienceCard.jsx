import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = ({ title, company, timeline, description, languages, logo, logoWhiteBg, logoFlush }) => {
  return (
    <div className="repository-card">
      <div className="experience-topline">
        <div className="experience-identity">
          {logo && (
            <div className={`company-logo-wrap${logoWhiteBg ? " white-bg" : ""}${logoFlush ? " flush" : ""}`}>
              <img src={logo} alt={company} className="company-logo" />
            </div>
          )}
          <div className="experience-heading">
            <h4>{title}</h4>
            <p>{company}</p>
            <span className="date-capsule">{timeline}</span>
          </div>
        </div>
      </div>
      {description && <p className="experience-summary">{description}</p>}
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

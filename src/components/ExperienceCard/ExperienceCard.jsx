import React from "react";
import "./ExperienceCard.scss";

const ExperienceCard = ({ title, company, timeline, languages, stars }) => {
  return (
    <div className="repository-card">
      <div className="title">
        <h4>{title}</h4>
        <div className="date-capsule">{timeline}</div>
      </div>

      <p>{company}</p>
      <div className="repo-details">
        <span>
          {languages.map(({ color, name }) => {
            return (
              <>
                <span style={{ color: color }}>⬤&nbsp;</span>
                <span>{name}&nbsp;&nbsp;&nbsp;</span>
              </>
            );
          })}
        </span>
        {/* <span>{languages}</span> */}
        {/* <span>⭐ {stars}</span> */}
      </div>
    </div>
  );
};

export default ExperienceCard;

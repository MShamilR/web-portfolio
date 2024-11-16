import React from "react";
import "./EducationCard.scss";

const EducationCard = ({ institute, course, timeline, language, stars }) => {
  return (
    <div className="repository-card">
      <div className="title">
        <h4>{institute}</h4>
        <div className="date-capsule">{timeline}</div>
      </div>

      <p>{course}</p>
      {/* <div className="repo-details">
        <span>{language}</span>
        <span>⭐ {stars}</span>
      </div> */}
    </div>
  );
};

export default EducationCard;

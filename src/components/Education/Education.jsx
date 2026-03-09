import React from "react";
import EducationCard from "../EducationCard/EducationCard";
import "./Education.scss";
import uocLogo from "../../assets/education/uoc.png";
import calceyLogo from "../../assets/education/calcey.webp";

const Education = () => {
  const educations = [
    {
      institute: "University of Colombo, School of Computing",
      course: "Bachelor of Information Technology",
      timeline: "2023",
      logo: uocLogo,
      logoWhiteBg: true,
    },
    {
      institute: "Calcey Technologies",
      course: "Calcey Springboard",
      timeline: "2023 - 2024",
      logo: calceyLogo,
      logoWhiteBg: true,
    },
  ];

  return (
    <div className="edu-repositories-list">
      <h3>Education & Bootcamps</h3>
      <div className="edu-repo-grid">
        {educations.map((repo, index) => (
          <EducationCard key={index} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default Education;

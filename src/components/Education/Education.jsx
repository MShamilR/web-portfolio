import React from "react";
import EducationCard from "../EducationCard/EducationCard";
import "./Education.scss";

const Education = () => {
  const educations = [
    {
      institute: "University of Colombo, School of Computing",
      course: "Bachelor of Information Technology",
      timeline: "Reading",
      language: "Spring Boot, React",
      stars: 1,
    },
    {
      institute: "Calcey Technologies",
      course: "Calcey Springboard",
      timeline: "2023 - 2024",
      language: "SpringBoot, React",
      stars: 2,
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

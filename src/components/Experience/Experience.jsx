import React from "react";
import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./Experience.scss";

const Experience = () => {
  const repositories = [
    {
      title: "Associate Software Engineer",
      company: "Thyaga (thyaga.lk)",
      timeline: "Jul 2024 - Present",
      language: "SpringBoot, React",
      languages: [
        { color: "#3b8413", name: "Spring Boot" },
        { color: "#60c7de", name: "React" },
      ],
      stars: 2,
    },
    {
      title: "Junior Software Engineer",
      company: "Thyaga (thyaga.lk)",
      timeline: "Nov 2023 - Jun 2024",
      language: "Spring Boot, React",
      languages: [
        { color: "#3b8413", name: "Spring Boot" },
        { color: "#60c7de", name: "React" },
      ],
      stars: 1,
    },
    {
      title: "Software Developer - Internship",
      company: "Thyaga (thyaga.lk)",
      timeline: "Feb 2023 - Oct 2023",
      language: "⬤ Spring Boot, React",
      languages: [
        { color: "#3b8413", name: "Spring Boot" },
        { color: "#60c7de", name: "React" },
      ],
      stars: 1,
    },
  ];

  return (
    <div className="exp-repositories-list">
      <h3>Professional Experience</h3>
      <div className="exp-repo-grid">
        {repositories.map((repo, index) => (
          <ExperienceCard key={index} {...repo} />
        ))}
      </div>
    </div>
  );
};

export default Experience;

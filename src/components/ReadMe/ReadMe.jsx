import React from "react";
import './ReadMe.scss'
import digitalOcean from '../../assets/technologies/digital-ocean.svg'
import express from '../../assets/technologies/express.svg'
import git from '../../assets/technologies/git.svg'
import github from '../../assets/technologies/github.svg'
import react from "../../assets/technologies/react.svg";
import springBoot from "../../assets/technologies/spring-boot.png";
// import digitalOcean from '../../assets/technologies/digital-ocean.svg'
// import digitalOcean from '../../assets/technologies/digital-ocean.svg'
// import digitalOcean from '../../assets/technologies/digital-ocean.svg'
// import digitalOcean from "../../assets/technologies/digital-ocean.svg";

const ReadMe = () => {
  const icons = [
    { src: springBoot, alt: "Spring Boot" },
    { src: react, alt: "React" },
    { src: digitalOcean, alt: "Digital Ocean" },
    { src: express, alt: "Express" },
    { src: git, alt: "Git" },
    { src: github, alt: "Github" },
  ];
  return (
    <div className="readme-section">
      <small className="mono-text">MShamilR / README.md</small>
      <h2>Hola 👋</h2>
      <hr className="divider" />
      <p>
        ⚙️ Backend Buff | Frontend Flair | Self-Taught Maverick on a Tech
        Odyssey 🛠️
      </p>
      <div className="icon-strip">
        {icons.map((icon, index) => (
          <img key={index} src={icon.src} alt={icon.alt} className="icon" />
        ))}
      </div>
    </div>
  );
};

export default ReadMe;

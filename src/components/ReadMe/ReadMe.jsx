import React from "react";
import "./ReadMe.scss";
import { logEvent } from "../../analytics";
import digitalOcean from "/assets/technologies/digital-ocean.svg";
import express from "/assets/technologies/express.svg";
import git from "/assets/technologies/git.svg";
import github from "/assets/technologies/github.svg";
import gitlab from "/assets/technologies/gitlab.svg";
import react from "/assets/technologies/react.svg";
import springBoot from "/assets/technologies/spring-boot.png";
import nest from "/assets/technologies/nest.svg";
// import java from "../../assets/technologies/java.svg";
// import javaScript from "../../assets/technologies/javascript.svg";
import typeScript from "/assets/technologies/typescript.svg";
// import nodeJS from "../../assets/technologies/node-js.svg";
import portainer from "/assets/technologies/portainer.svg";
import sass from "/assets/technologies/sass.svg";
import jenkins from "/assets/technologies/jenkins.svg";

// import digitalOcean from '../../assets/technologies/digital-ocean.svg'
// import digitalOcean from '../../assets/technologies/digital-ocean.svg'
// import digitalOcean from '../../assets/technologies/digital-ocean.svg'
// import digitalOcean from "../../assets/technologies/digital-ocean.svg";

const ReadMe = () => {
  const icons = [
    { src: nest, alt: "Nest" },
    { src: springBoot, alt: "Spring Boot" },
    //{ src: nodeJS, alt: "Node JS" },
    { src: express, alt: "Express" },
    { src: react, alt: "React" },
    { src: sass, alt: "Sass" },
    // { src: java, alt: "Java" },
    // { src: javaScript, alt: "JavaScript" },
    { src: typeScript, alt: "TypeScript" },
    { src: digitalOcean, alt: "Digital Ocean" },
    { src: jenkins, alt: "Jenkins" },
    { src: portainer, alt: "Portainer" },
    { src: git, alt: "Git" },
    { src: github, alt: "Github" },
    { src: gitlab, alt: "Gitlab" },
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
      <div className="resume-button-container" style={{ paddingTop: "1rem" }}>
        <a
          href="https://drive.google.com/file/d/1rvIOAm5E8QDguJRTKYzdyd6jbSOZW63x/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
          onClick={() => logEvent("Resume", "View", "Click on View Resume")}
        >
          📄 View Resume
        </a>
      </div>
    </div>
  );
};

export default ReadMe;

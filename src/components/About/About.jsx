import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBriefcase, faEnvelope, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "./About.scss";

const About = () => (
  <aside className="profile-header">
    <div className="profile-image">
      <img src="/assets/photo.jpg" alt="Mohammed Shamil" />
    </div>
    <div className="profile-details">
      <div className="profile-title">
        <h3>Mohammed Shamil</h3>
        <h4>Founder &amp; Software Engineer</h4>
      </div>
      <p className="profile-bio">
        Engineering products, shaping strategy, and taking early-stage ideas to market.
      </p>
      <div className="profile-summary">
        <div>
          <span className="summary-icon"><FontAwesomeIcon icon={faBriefcase} /></span>
          Founder at Klokd
        </div>
        <div>
          <span className="summary-icon"><FontAwesomeIcon icon={faLocationDot} /></span>
          Sri Lanka
        </div>
      </div>
      <div className="profile-links" aria-label="Contact links">
        <a href="https://www.linkedin.com/in/mshamilr" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="mailto:mohammedshamil0300@gmail.com" aria-label="Email" title="mohammedshamil0300@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="https://github.com/MShamilR" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  </aside>
);

export default About;

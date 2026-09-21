import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        <span>&copy; {new Date().getFullYear()} MShamilR.</span>
        <span className="github-note">
          Inspired by GitHub <FontAwesomeIcon icon={faGithub} aria-label="GitHub" />
        </span>
      </p>
    </footer>
  );
};

export default Footer;

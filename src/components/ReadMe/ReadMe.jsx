import React from "react";
import "./ReadMe.scss";
import { logEvent } from "../../analytics";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ReadMe = ({ theme, toggleTheme, onContact }) => {
  return (
    <div className="readme-section">
      <div className="readme-header">
        <small className="mono-text">MShamilR / README.md</small>
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          <FontAwesomeIcon icon={theme === "dark" ? faSun : faMoon} />
        </button>
      </div>
      <h2>Hola 👋</h2>
      <hr className="divider" />
      <p>
        I know the full stack and where it hurts. Shipped real products, scaled
        real systems. Let's build yours.
      </p>
      <div style={{ paddingTop: "1.2rem" }}>
        <button
          className="cal-button"
          onClick={() => {
            logEvent("Contact", "Open", "Click Lets Build Something");
            onContact();
          }}
        >
          Let's Build Something Great
        </button>
      </div>
    </div>
  );
};

export default ReadMe;

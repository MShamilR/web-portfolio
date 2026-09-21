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
      <p className="eyebrow">FOUNDER · PRODUCT · ENGINEERING · GTM</p>
      <h2>I build products from zero to market.</h2>
      <hr className="divider" />
      <p>
        I&apos;m a software engineer and startup operator working across product,
        growth, and go-to-market. I turn early ideas into focused products,
        ship the technology, and help them find their first path to growth.
      </p>
      <div style={{ paddingTop: "1.2rem" }}>
        <button
          className="cal-button"
          onClick={() => {
            logEvent("Contact", "Open", "Click Lets Build Something");
            onContact();
          }}
        >
          Start a conversation
        </button>
      </div>
    </div>
  );
};

export default ReadMe;

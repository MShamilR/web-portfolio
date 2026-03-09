import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>
        <span>&copy; {new Date().getFullYear()} MShamilR.</span>
        <span>&nbsp;</span>
        <span>
          Inspired by{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;

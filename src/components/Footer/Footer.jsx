import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        textAlign: "center",
        color: "#8b949e",
        fontSize: "0.9rem",
      }}
    >
      <p>
        <span>&copy; {new Date().getFullYear()} MShamilR.</span>
        <span>&nbsp;</span>
        <span>
          Inspired by{" "}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#58a6ff" }}
          >
            GitHub
          </a>
        </span>
      </p>
    </footer>
  );
};

export default Footer;

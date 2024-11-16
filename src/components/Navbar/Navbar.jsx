import React from "react";
import './NavBar.scss'

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <ul>
        <li>Overview</li>
        <li>Repositories</li>
        <li>Projects</li>
        <li>Packages</li>
        <li>Stars</li>
      </ul>
    </nav>
  );
};

export default NavBar;

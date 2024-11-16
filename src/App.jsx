import React from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
// import NavBar from "./components/Navbar/Navbar";
import ReadMe from "./components/ReadMe/ReadMe";
import "./App.scss";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="main-profile-page">
      <div className="body">
        <div className="left">
          <About />
        </div>
        <div className="gap"></div>
        <div className="right">
          <ReadMe />
          <Experience />
          <Education />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;

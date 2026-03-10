import React, { useState, useEffect } from "react";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
// import NavBar from "./components/Navbar/Navbar";
import ReadMe from "./components/ReadMe/ReadMe";
import Services from "./components/Services/Services";
import ContactModal from "./components/ContactModal/ContactModal";
import "./App.scss";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import AnnouncementBanner from "./components/AnnouncementBanner/AnnouncementBanner";

const App = () => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark"
  );
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("light-mode", theme === "light");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <div className="main-profile-page">
      <AnnouncementBanner />
      <div className="body">
        <div className="left">
          <About />
        </div>
        <div className="gap"></div>
        <div className="right">
          <ReadMe
            theme={theme}
            toggleTheme={toggleTheme}
            onContact={() => setModalOpen(true)}
          />
          <Services />
          <Experience />
          <Education />
        </div>
      </div>
      <Footer />
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default App;

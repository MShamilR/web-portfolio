import React, { useState } from "react";
import "./AnnouncementBanner.scss";

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="announcement-banner">
      <span className="announcement-badge">Upcoming</span>
      <p>
        I&apos;m building{" "}
        <a href="https://klokd.app" target="_blank" rel="noopener noreferrer">
          klokd.app
        </a>{" "}
        — stay tuned!
      </p>
      <button
        className="announcement-close"
        onClick={() => setDismissed(true)}
        aria-label="Dismiss"
      >
        ×
      </button>
    </div>
  );
};

export default AnnouncementBanner;

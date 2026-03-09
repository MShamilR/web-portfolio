import "./EducationCard.scss";

const EducationCard = ({ institute, course, timeline, logo, logoWhiteBg }) => {
  return (
    <div className="repository-card">
      {logo && (
        <div className={`company-logo-wrap${logoWhiteBg ? " white-bg" : ""}`}>
          <img src={logo} alt={institute} className="company-logo" />
        </div>
      )}
      <div className="title">
        <h4>{institute}</h4>
        <div className="date-capsule">{timeline}</div>
      </div>
      <p>{course}</p>
    </div>
  );
};

export default EducationCard;

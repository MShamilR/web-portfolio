import "./EducationCard.scss";

const EducationCard = ({ institute, course, timeline }) => {
  return (
    <div className="repository-card">
      <div className="title">
        <h4>{institute}</h4>
        <div className="date-capsule">{timeline}</div>
      </div>

      <p>{course}</p>
    </div>
  );
};

export default EducationCard;

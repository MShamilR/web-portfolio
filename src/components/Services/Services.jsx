import "./Services.scss";

const services = [
  "MVP Development",
  "Technical Co-Founder",
  "Custom Development",
  "AI-Assisted Development",
  "Vibe Code Cleanup",
];

const Services = () => {
  return (
    <div className="services-strip">
      <h3>What I Do</h3>
      <div className="services-box">
        {services.map((s, i) => (
          <span key={s}>
            <span className="service-label">{s}</span>
            {i < services.length - 1 && <span className="sep"> · </span>}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Services;

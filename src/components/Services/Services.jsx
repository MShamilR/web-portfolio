import "./Services.scss";

const services = [
  "0→1 Product Strategy",
  "MVP Development",
  "Go-to-Market",
  "Growth Experiments",
  "Full-Stack Engineering",
  "Technical Due Diligence",
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

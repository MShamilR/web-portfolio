import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./Experience.scss";

const Experience = () => {
  const companies = [
    {
      company: "TOGGLE",
      experiences: [
        {
          title: "Software Engineer",
          timeline: "Jun 2025 - Present",
          language: "Express, Nest",
          languages: [
            { color: "#ffffff", name: "Express" },
            { color: "#ea2845", name: "Nest" },
          ],
          stars: 1,
        },
      ],
    },
    {
      company: "Thyaga (thyaga.lk)",
      experiences: [
        {
          title: "Associate Software Engineer",
          timeline: "Jul 2024 - Jun 2025",
          language: "Spring Boot, React",
          languages: [
            { color: "#3b8413", name: "Spring Boot" },
            { color: "#60c7de", name: "React" },
          ],
          stars: 2,
        },
        {
          title: "Junior Software Engineer",
          timeline: "Nov 2023 - Jun 2024",
          language: "Spring Boot, React",
          languages: [
            { color: "#3b8413", name: "Spring Boot" },
            { color: "#60c7de", name: "React" },
          ],
          stars: 1,
        },
        {
          title: "Software Developer - Internship",
          timeline: "Feb 2023 - Oct 2023",
          language: "Spring Boot, React",
          languages: [
            { color: "#3b8413", name: "Spring Boot" },
            { color: "#60c7de", name: "React" },
          ],
          stars: 1,
        },
      ],
    },
  ];

  return (
    <div className="exp-repositories-list">
      <h3>Professional Experience</h3>
      {companies.map((companyGroup, idx) => (
        <div key={idx} className="company-block">
          {/* <div className="company-name">{companyGroup.company}</div> */}
          <div className="exp-repo-grid">
            {companyGroup.experiences.map((exp, i) => (
              <ExperienceCard key={i} {...exp} company={companyGroup.company} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

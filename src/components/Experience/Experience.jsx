import ExperienceCard from "../ExperienceCard/ExperienceCard";
import "./Experience.scss";
import thyagaLogo from "../../assets/companies/thyaga.png";

const toggleLogo = "/assets/toggle.png";

const Experience = () => {
  const companies = [
    {
      company: "Crittiks (via Toggle)",
      logo: toggleLogo,
      logoFlush: true,
      experiences: [
        {
          title: "Founding Software Engineer",
          timeline: "Jun 2025 - Present",
          description:
            "Own product and engineering delivery for an agency management platform, turning business needs into scalable features and workflows.",
          languages: [
            { color: "#3178c6", name: "TypeScript" },
            { color: "#8b949e", name: "Next.js" },
            { color: "#ea2845", name: "Nest" },
          ],
          stars: 1,
        },
      ],
    },
    {
      company: "Thyaga (thyaga.lk)",
      logo: thyagaLogo,
      logoWhiteBg: true,
      experiences: [
        {
          title: "Associate Software Engineer",
          timeline: "Jul 2024 - Jun 2025",
          description:
            "Led product features across global gifting, payments, and order operations, bridging business requirements with technical execution.",
          languages: [
            { color: "#3b8413", name: "Spring Boot" },
            { color: "#60c7de", name: "React" },
          ],
          stars: 2,
        },
        {
          title: "Junior Software Engineer",
          timeline: "Nov 2023 - Jun 2024",
          description:
            "Owned front-end delivery for key partnerships and improved customer and admin workflows across the platform.",
          languages: [
            { color: "#3b8413", name: "Spring Boot" },
            { color: "#60c7de", name: "React" },
          ],
          stars: 1,
        },
        {
          title: "Software Developer - Internship",
          timeline: "Feb 2023 - Oct 2023",
          description:
            "Built customer and admin features while contributing to partner integrations across the full stack.",
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
              <ExperienceCard key={i} {...exp} company={companyGroup.company} logo={companyGroup.logo} logoWhiteBg={companyGroup.logoWhiteBg} logoFlush={companyGroup.logoFlush} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;

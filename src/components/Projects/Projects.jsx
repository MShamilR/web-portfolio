import "./Projects.scss";

const ventures = [
  {
    title: "Klokd",
    logo: "/assets/klokd.png",
    insetLogo: true,
    role: "Founder · Product · GTM",
    description: "Building the company from the ground up—from product direction and hands-on development to positioning, launch, and go-to-market.",
    link: "https://klokd.app",
    linkLabel: "Visit klokd.app",
    status: "Building",
  },
  {
    title: "Wondidoo",
    logo: "/assets/wondidoo.png",
    role: "Product & Growth Strategist",
    description: "Shaping product priorities and growth strategy, connecting user needs with clear experiments and measurable commercial outcomes.",
    link: "https://wondidoo.com",
    linkLabel: "Visit wondidoo.com",
    status: "Strategy",
  },
  {
    title: "Cooktoki",
    logo: "/assets/cooktoki.png",
    role: "Product & Growth Strategist",
    description: "Supporting product direction and growth with a focus on customer needs, focused experiments, and practical execution.",
    link: "https://cooktoki.com",
    linkLabel: "Visit cooktoki.com",
    status: "Strategy",
  },
];

const Projects = () => (
  <section className="projects-list">
    <div className="projects-heading">
      <div>
        <p className="section-kicker">PRODUCTS &amp; ADVISORY</p>
        <h3>Selected Work</h3>
      </div>
      <p className="section-intro">Where I apply engineering judgment to product and commercial problems.</p>
    </div>
    <div className="projects-grid">
      {ventures.map((venture) => (
        <article key={venture.title} className="project-card">
          <div className="project-topline">
            <div className="venture-identity">
              <span className={`venture-logo-wrap${venture.insetLogo ? " inset-logo" : ""}`}>
                <img className="venture-logo" src={venture.logo} alt="" />
              </span>
              <h4>{venture.title}</h4>
            </div>
            <span className="status">{venture.status}</span>
          </div>
          <p className="role">{venture.role}</p>
          <p>{venture.description}</p>
          {venture.link && (
            <a href={venture.link} target="_blank" rel="noopener noreferrer" className="project-link">
              {venture.linkLabel} <span aria-hidden="true">↗</span>
            </a>
          )}
        </article>
      ))}
    </div>
  </section>
);

export default Projects;

import "./Projects.scss";

const Projects = () => {
  const projects = [
    {
      title: "Project Title One", // TODO: replace with actual project name
      description:
        "A short description of what this project does and the problem it solves.", // TODO
      link: "https://github.com/MShamilR/project-one", // TODO: replace with actual link
      linkLabel: "View on GitHub",
    },
    {
      title: "Project Title Two", // TODO
      description:
        "A short description of what this project does and the problem it solves.", // TODO
      link: "https://github.com/MShamilR/project-two", // TODO
      linkLabel: "View on GitHub",
    },
    {
      title: "Project Title Three", // TODO
      description:
        "A short description of what this project does and the problem it solves.", // TODO
      link: "https://your-live-project.com", // TODO
      linkLabel: "Live Site",
    },
  ];

  return (
    <div className="projects-list">
      <h3>Projects</h3>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h4>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {project.title}
              </a>
            </h4>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              {project.linkLabel} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

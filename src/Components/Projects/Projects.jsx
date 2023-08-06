import "../Projects/Projects.scss";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects__header">
        <div className="projects__header-line"></div>
        <h3 className="projects__header-title">PROJECTS</h3>
        <div className="projects__header-line"></div>
      </div>
      <div className="projects__samples">
        <div className="projects__samples-featured">
          <div className="projects__samples-featured-info card card--1">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
        </div>
        <div className="projects__samples-list">
          <div className="projects__samples-list-info card card--2">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
          <div className="projects__samples-list-info card card--3">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
          <div className="projects__samples-list-info card card--4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

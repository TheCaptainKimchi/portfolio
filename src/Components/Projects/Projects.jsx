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
          <div className="projects__samples-featured-info card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
        </div>
        <div className="projects__samples-list">
          <div className="projects__samples-list-info projects__samples-list-info--1 card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
          <div className="projects__samples-list-info projects__samples-list-info--2 card">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            <a href="/">
              <button>Visit Project</button>
            </a>
          </div>
          <div className="projects__samples-list-info projects__samples-list-info--3 card">
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

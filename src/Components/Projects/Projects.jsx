import "../Projects/Projects.scss";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <div className="projects__header">
        <div className="projects__header-line"></div>
        <h3 className="projects__header-title">PROJECTS</h3>
        <div className="projects__header-line"></div>
      </div>
      <div className="projects__samples">
        <div className="projects__samples-featured">
          <div className="projects__samples-featured-info card card--1">
            <p>SparkGG - A data analytics tool for the video game Valorant.</p>
            <a href="https://github.com/TheCaptainKimchi/raul-calero-capstone-client">
              <button>Visit Project</button>
            </a>
          </div>
        </div>
        <div className="projects__samples-list">
          <div className="projects__samples-list-info card card--2">
            <p>
              Weather Report - A weather app to determine the weather in your
              location.
            </p>
            <a href="https://github.com/TheCaptainKimchi/weather-report">
              <button>Visit Project</button>
            </a>
          </div>
          <div className="projects__samples-list-info card card--3">
            <p>Portfolio - Visit the Github repository of the portfolio.</p>
            <a href="https://github.com/TheCaptainKimchi/portfolio">
              <button>Visit Project</button>
            </a>
          </div>
          <div className="projects__samples-list-info card card--4">
            <p>Brainflix - A clone of the website YouTube.</p>
            <a href="https://github.com/TheCaptainKimchi/raul-calero-brainflix">
              <button>Visit Project</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

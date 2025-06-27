import React from "react";
import {
  FaDatabase,
  FaCss3Alt,
  FaNodeJs,
  FaReact,
  FaJava,
  FaNetworkWired,
} from "react-icons/fa";
import "../styles/projects.scss";
import projects from "../const/Projects.json";

const techIcons = {
  "React.js": <FaReact />,
  "Express.js": <FaNodeJs />,
  MySQL: <FaDatabase />,
  "Spring Boot": <FaJava />,
  Bootstrap: <FaCss3Alt />,
  RestAPI: <FaNetworkWired />,
};

const Projects = () => {
  const renderTechIcons = (techStack) =>
    techStack.map((tech, index) => (
      <div key={index} className="tech-icon">
        {techIcons[tech] && <span className="icon">{techIcons[tech]}</span>}
        <span className="tech-name">{tech}</span>
      </div>
    ));

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tech-stack">
                {renderTechIcons(project.techStack)}
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

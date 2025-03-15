import React from "react";
import { 
  FaReact, FaNodeJs, FaDatabase, 
  FaJava, FaCode, FaGit 
} from "react-icons/fa";
import "../styles/skills.scss";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>
      
      <div className="skills-list">
        <div className="skill">
          <FaCode className="skill-icon" />
          <h4>Code Languages</h4>
          <p>
            Experience with <strong>JavaScript</strong>, <strong>Java</strong>, and <strong>TypeScript</strong>.
          </p>
        </div>

        <div className="skill">
          <FaNodeJs className="skill-icon" />
          <h4>Express.js / Nest.js</h4>
          <p>
            Backend development with <strong>JWT</strong>,<strong> Axios</strong>, <strong>Passport</strong>, <strong>Nodemailer</strong>, 
            <strong>Cloudinary</strong>, <strong>multer</strong>, and ORM.
          </p>
        </div>

        <div className="skill">
          <FaJava className="skill-icon" />
          <h4>Spring Boot</h4>
          <p>
            Building secure applications with <strong>MVC</strong>, <strong>JPA</strong>, <strong>Security</strong>, and <strong>JWT</strong>.
          </p>
        </div>

        <div className="skill">
          <FaReact className="skill-icon" />
          <h4>React.js</h4>
          <p>
            Frontend development with <strong>React Hooks</strong>, <strong>Redux</strong>, <strong>Bootstrap</strong>, and state management.
          </p>
        </div>

        <div className="skill">
          <FaDatabase className="skill-icon" />
          <h4>SQL Databases</h4>
          <p>
            Experienced with <strong>SQL</strong> for structured data management.
          </p>
        </div>

        <div className="skill">
          <FaGit className="skill-icon" />
          <h4>Version Control</h4>
          <p>
            Managing code with <strong>Git</strong> and <strong>GitHub</strong>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;

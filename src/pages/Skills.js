import React from "react";
import "../styles/skills.scss";
import skills from "../const/Skills.json";

import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaJava,
  FaCode,
  FaGit,
  FaServer,
} from "react-icons/fa";

const iconMap = {
  FaReact: <FaReact className="skill-icon" />,
  FaNodeJs: <FaNodeJs className="skill-icon" />,
  FaDatabase: <FaDatabase className="skill-icon" />,
  FaJava: <FaJava className="skill-icon" />,
  FaCode: <FaCode className="skill-icon" />,
  FaGit: <FaGit className="skill-icon" />,
  FaServer: <FaServer className="skill-icon" />,
};

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-title">My Skills</h2>

      <div className="skills-list">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            {iconMap[skill.icon]}
            <h4>{skill.category}</h4>
            <p dangerouslySetInnerHTML={{ __html: skill.description }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

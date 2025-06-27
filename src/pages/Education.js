import React from "react";
import "../styles/education.scss";
import educationData from "../const/Education.json";

import logohaui from "../assets/logohaui.jpg";

const logoMap = {
  "logohaui.jpg": logohaui,
};

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">My Education</h2>

      {educationData.map((edu, index) => (
        <div key={index} className="education-item">
          <div className="education-header">
            <img
              src={logoMap[edu.logo]}
              alt={`${edu.institution} Logo`}
              className="education-logo"
            />
            <div className="education-info">
              <p className="institution">{edu.institution}</p>
              <p className="date">{edu.date}</p>
            </div>
          </div>
          <p className="description">{edu.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Education;

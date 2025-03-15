import React from "react";
import "../styles/education.scss";
import logohaui from "../assets/logohaui.jpg";

const Education = () => {
  return (
    <div className="education-container">
      <h2 className="education-title">My Education</h2>

      <div className="education-item">
        <div className="education-header">
          <img 
            src={logohaui} 
            alt="HAUI Logo" 
            className="education-logo" 
          />
          <div className="education-info">
            <p className="institution">Trường Đại học Công nghiệp Hà Nội (HAUI)</p>
            <p className="date">2021 - Now</p>
          </div>
        </div>
        <p className="description">
          Currently in the 4th year, studying at the Faculty of Information Technology.
        </p>
      </div>
    </div>
  );
};

export default Education;

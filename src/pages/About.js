import React from "react";
import "../styles/about.scss";
import infor from "../const/Infor.json";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>

      {infor.bio.map((paragraph, index) => (
        <p key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
      ))}

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-item">
            <p>Phone: {infor.phone}</p>
          </div>
          <div className="contact-item">
            <p>Email: {infor.email}</p>
          </div>
          <div className="contact-item">
            <p>
              Facebook:{" "}
              <a
                href={infor.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {infor.facebook.name}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="social-links">
      <a href="https://github.com/MeanHoang" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/minh-hoang-trinh-9a984b303/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </a>
      <a href="https://www.facebook.com/mhoag.10/" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </div>
  );
};

export default SocialLinks;

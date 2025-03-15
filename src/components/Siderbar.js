import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.scss";
import avatar from "../assets/avatar.png";
import SocialLinks from "./SocialLinks.js";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* Avatar */}
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>

      <h1 className="name">Trinh Minh Hoang</h1>
      <h2 className="title">Fullstack Deverloper</h2>
      <p className="description">
        I build accessible, pixel-perfect digital experiences for the web.
      </p>

      {/* Navigation Links */}
      <nav className="nav-links">
        <NavLink to="/about" activeClassName="active">
          <span className="line"></span> ABOUT
        </NavLink>
        <NavLink to="/skills" activeClassName="active">
          <span className="line"></span> SKILLS
        </NavLink>
        <NavLink to="/projects" activeClassName="active">
          <span className="line"></span> PROJECTS
        </NavLink>
        <NavLink to="/educations" activeClassName="active">
          <span className="line"></span> EDUCATIONS
        </NavLink>
      </nav>

      <SocialLinks/>
    </aside>
  );
};

export default Sidebar;

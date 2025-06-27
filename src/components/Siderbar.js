import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.scss";
import avatarImg from "../assets/avatar.png";
import infor from "../const/Infor.json";
import SocialLinks from "./SocialLinks";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="avatar">
        <img src={avatarImg} alt="Avatar" />
      </div>

      <h1 className="name">{infor.name}</h1>
      <h2 className="title">{infor.title}</h2>
      <p className="description">{infor.description}</p>

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
        {/* <NavLink to="/education" activeClassName="active">
          <span className="line"></span> EDUCATIONS
        </NavLink> */}
      </nav>

      <SocialLinks />
    </aside>
  );
};

export default Sidebar;

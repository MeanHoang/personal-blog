import React from "react";

const Projects = () => {
  const projects = [
    {
      title: "WahnShop - E-commerce Website",
      techStack: "Express.js, React.js, MySQL",
      description: "A full-stack e-commerce platform with authentication, product management, and an admin dashboard.",
      links: [
        { label: "View Backend", url: "https://github.com/MeanHoang/be-wahnshop" },
        { label: "View Admin Panel", url: "https://github.com/MeanHoang/fe-admin" }
      ]
    },
    {
      title: "BookingCare - Online Medical Booking",
      techStack: "Spring Boot, Bootstrap, MySQL",
      description: "Led a team of 3 to develop a booking platform for medical consultations.",
      links: [
        { label: "View Project", url: "https://github.com/MeanHoang/bookingcare" }
      ]
    },
    {
      title: "WahnStore - E-commerce Website",
      techStack: "C# ASP.NET, Bootstrap, SQL Server",
      description: "A team project where I worked on database design and full-stack development.",
      links: [
        { label: "View Project", url: "https://github.com/MeanHoang/WahnStore_GROUP13" }
      ]
    }
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p><strong>Tech Stack:</strong> {project.techStack}</p>
            <p>{project.description}</p>
            <div className="project-links">
              {project.links.map((link, idx) => (
                <a key={idx} href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

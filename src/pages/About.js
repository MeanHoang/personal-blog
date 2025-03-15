import React from "react";
import "../styles/about.scss";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <p>
        Hello! I'm Trinh Minh Hoang, a passionate Fullstack Developer who enjoys
        building <strong>scalable</strong>, <strong>efficient</strong>, and <strong>user-friendly</strong> web applications.
        I always strive to write <strong>clean code</strong> and develop solutions that are both maintainable and high-performing.
      </p>
      <p>
        I specialize in <strong>backend development</strong>, using <strong>Node.js with Express.js</strong> and <strong>Java Spring</strong>
        to build <strong>RESTful APIs</strong>. I have experience working with technologies like <strong>JWT, Cloud, Nodemailer, and Passport</strong>.
        Recently, I have been exploring <strong>TypeScript and NestJS</strong> to enhance my backend expertise.
      </p>
      <p>
        On the frontend side, I create interactive user interfaces using <strong>React.js</strong> and improve UI/UX
        with <strong>Bootstrap and SCSS</strong>. I also ensure efficient state management using <strong>React Hooks and Redux</strong>.
        Lately, I have been learning <strong>Next.js</strong> and experimenting with modern styling libraries like <strong>TailwindCSS</strong>.
      </p>

      <div class="contact-container">
  <div class="contact-info">
    <div class="contact-item">
      <p>Phone: 0399 991 384</p>
    </div>
    <div class="contact-item">
      <p>Email: viethoangxtpro08@gamil.com</p>
    </div>
    <div class="contact-item">
      <p>Facebook: <a href="https://www.facebook.com/mhoag.10">Việt Hoàng</a></p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;

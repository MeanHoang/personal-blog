import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Siderbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import "./styles/main.scss";

function App() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-12 p-0 sidebar">
          <Sidebar />
        </div>

        <div className="col-lg-8 col-md-8 col-sm-12 main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            {/* <Route path="/education" element={<Education />} /> */}
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

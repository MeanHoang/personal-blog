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
<div className="container">
    <aside className="sidebar">
        <Sidebar/>
    </aside>
    <main className="main-content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        </main>

      </div>
  );
}

export default App;

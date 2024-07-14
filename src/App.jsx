import React from 'react';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import Projects from './pages/Projects';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-6 sm:px-12 lg:px-20">
        <Routes>
          <Route exact path="/" element={ <Home /> } />
          <Route exact path="/projects" element={ <Projects /> } />
          <Route exact path="/project/:id" element={ <ProjectDetails /> } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
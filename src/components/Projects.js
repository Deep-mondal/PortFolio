import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-cards">
        <div className="project-card">
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
        </div>
        <div className="project-card">
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;

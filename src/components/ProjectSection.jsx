import React from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection = ({ title, projects, isGameJam = false, className = "" }) => {
  return (
    <section className={`section ${className}`.trim()}>
      <h2 className="section-title">{title}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isGameJam={isGameJam}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;

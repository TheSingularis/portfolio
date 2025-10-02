import React from 'react';

const ProjectCard = ({ project, isGameJam = false }) => {
  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      {isGameJam && project.event && (
        <div className="project-event">{project.event}</div>
      )}
      <p className="project-description">{project.description}</p>
      <div className="project-technologies">
        {project.technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
            Code
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

import React from 'react';

const ProjectCard = ({ project, isGameJam = false, onProjectClick }) => {
  const handleCardClick = () => {
    if (onProjectClick) {
      onProjectClick(project);
    }
  };

  return (
    <div 
      className={`project-card ${project.image ? 'project-card--with-image' : ''}`}
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      {project.image && (
        <div className="project-image-section">
          <img 
            src={project.image} 
            alt={`${project.title} screenshot`}
            className="project-image"
            loading="lazy"
          />
        </div>
      )}
      <div className="project-content-section">
        <h3 className="project-title">{project.title}</h3>
        {isGameJam && project.event && (
          <div className="project-event">{project.event}</div>
        )}
        <p className="project-description">
          {project.description.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              {index < project.description.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
        <div className="project-technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
        <div className="project-links">
          {/* {project.links && project.links.map((link, index) => {
            const linkType = Object.keys(link)[0];
            const linkUrl = link[linkType];
            const linkLabel = linkType.charAt(0).toUpperCase() + linkType.slice(1);
            
            return (
              <a 
                key={index}
                href={linkUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                {linkLabel}
              </a>
            );
          })} */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

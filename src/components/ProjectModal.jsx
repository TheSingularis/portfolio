import React from 'react';
import Modal from './Modal';
import ImageCarousel from './ImageCarousel';

const ProjectModal = ({ isOpen, onClose, project, isGameJam = false }) => {
  if (!project) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={project.title} size="large">
      <div className="project-modal-content">
        <div className="project-modal-image">
          <ImageCarousel 
            project={project} 
            className="modal-carousel"
          />
        </div>
        
        <div className="project-modal-details">
          {isGameJam && project.event && (
            <div className="project-modal-event">
              <strong>Game Jam Event:</strong> {project.event}
            </div>
          )}
          
          <div className="project-modal-description">
            <h3>About This Project</h3>
            <div className="description-text">
              {project.description.split('\n').map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < project.description.split('\n').length - 1 && <br />}
                </React.Fragment>
              ))}
            </div>
          </div>

          {project.detailedDescription && (
            <div className="project-modal-detailed-description">
              <h3>Technical Details</h3>
              <div className="description-text">
                {project.detailedDescription.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < project.detailedDescription.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {project.challenges && (
            <div className="project-modal-challenges">
              <h3>Challenges & Solutions</h3>
              <div className="description-text">
                {project.challenges.split('\n').map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    {index < project.challenges.split('\n').length - 1 && <br />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          )}

          {project["key-lessons-learned"] && project["key-lessons-learned"].length > 0 && (
            <div className="project-modal-lessons">
              <h3>Key Lessons Learned</h3>
              <div className="lessons-container">
                {project["key-lessons-learned"].map((lesson, index) => (
                  <div key={index} className="lesson-item">
                    <h4 className="lesson-title">{lesson.lesson}</h4>
                    <p className="lesson-description">{lesson.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="project-modal-technologies">
            <h3>Technologies Used</h3>
            <div className="modal-tech-grid">
              {project.technologies.map((tech, index) => (
                <span key={index} className="modal-tech-tag">{tech}</span>
              ))}
            </div>
          </div>

          {((project.link || project.live) || (project.links && project.links.length > 0)) && (
            <div className="project-modal-links">
              <h3>Links</h3>
              <div className="modal-links-container">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-project-link">
                    <span>View Code</span>
                  </a>
                )}
                {project.live && (
                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="modal-project-link">
                    <span>Live Demo</span>
                  </a>
                )}
                {project.links && project.links.map((link, index) => {
                  const linkType = Object.keys(link)[0];
                  const linkUrl = link[linkType];
                  const linkLabel = linkType.charAt(0).toUpperCase() + linkType.slice(1);
                  
                  return (
                    <a key={index} href={linkUrl} target="_blank" rel="noopener noreferrer" className="modal-project-link">
                      <span>{linkLabel}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          )}

          {project.duration && (
            <div className="project-modal-duration">
              <h3>Development Time</h3>
              <p>{project.duration}</p>
            </div>
          )}

          {project.teamSize && (
            <div className="project-modal-team">
              <h3>Team Size</h3>
              <p>{project.teamSize}</p>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default ProjectModal;

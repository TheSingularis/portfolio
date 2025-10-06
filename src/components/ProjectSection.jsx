import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';

const ProjectSection = ({ title, projects, isGameJam = false, className = "" }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <section className={`section ${className}`.trim()}>
      <h2 className="section-title">{title}</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id} 
            project={project} 
            isGameJam={isGameJam}
            onProjectClick={handleProjectClick}
          />
        ))}
      </div>
      
      <ProjectModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        isGameJam={isGameJam}
      />
    </section>
  );
};

export default ProjectSection;

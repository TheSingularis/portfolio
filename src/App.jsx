import React from 'react';
import ProjectSection from './components/ProjectSection.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';
import portfolioData from './data/portfolio.json';

function App() {
  const { personal, skills, featuredProjects, gameJamProjects } = portfolioData;

  return (
    <div className="app">
      <ThemeToggle />
      <main className="main-content">
        {/* Hero/Intro Section */}
        <section className="section hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-name">{personal.name}</h1>
              <h2 className="hero-title">{personal.title}</h2>
              <p className="hero-intro">{personal.intro}</p>
            </div>
            {personal.profileImage && (
              <div className="profile-image-container">
                <img 
                  src={personal.profileImage} 
                  alt={`${personal.name} profile`}
                  className="profile-image"
                />
              </div>
            )}
          </div>
        </section>

        {/* About Me (blurb) first */}
        <section className="section section-divider">
          <h2 className="section-title">About Me</h2>
          <div className="about-single-column">
            {personal.about ? (
              <div className="about-background">
                <p>{personal.about}</p>
                {personal.location && (
                  <p className="location">Based in {personal.location}</p>
                )}
              </div>
            ) : (
              <p>No about information available.</p>
            )}
          </div>
        </section>

        {/* Experience: Work then Education */}
        <section className="section section-divider">
          <h2 className="section-title">Experience</h2>
          <div className="about-single-column">
            <div className="about-work">
              <h3 className="about-subtitle">Work Experience</h3>
              {personal.experience && personal.experience.length > 0 ? (
                personal.experience.map((e, idx) => (
                  <div key={idx} className="experience-item">
                    <div className="experience-head">
                      <strong className="experience-role">{e.role}</strong>
                      <span className="experience-company"> — {e.company}</span>
                    </div>
                    <div className="experience-dates">{e.dates}</div>
                    {e.description && <div className="experience-desc">{e.description}</div>}
                  </div>
                ))
              ) : (
                <p>No work experience listed.</p>
              )}
            </div>

            <div className="about-education">
              <h3 className="about-subtitle">Education & Background</h3>
              {personal.education && personal.education.length > 0 ? (
                personal.education.map((ed, idx) => (
                  <div key={idx} className="education-item">
                    <div className="education-head">
                      <strong className="education-degree">{ed.degree}</strong>
                      <span className="education-institution"> — {ed.institution}</span>
                    </div>
                    <div className="education-dates">{ed.dates}</div>
                    {ed.description && <div className="education-desc">{ed.description}</div>}
                  </div>
                ))
              ) : (
                <p>No education listed.</p>
              )}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <ProjectSection 
          title="Featured Projects" 
          projects={featuredProjects}
          className="section-divider"
        />

        {/* Game Jam / Side Projects */}
        {gameJamProjects && gameJamProjects.length > 0 && (
          <ProjectSection 
            title="Game Jam / Side Projects" 
            projects={gameJamProjects} 
            isGameJam={true}
            className="section-divider"
          />
        )}

        {/* Skills Section */}
        <section className="section section-divider">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => {
              // Handle both string skills and object skills with links
              if (typeof skill === 'object' && skill.link) {
                return (
                  <a 
                    key={index} 
                    href={skill.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="skill-item skill-link"
                  >
                    {skill.name}
                  </a>
                );
              } else {
                const skillName = typeof skill === 'object' ? skill.name : skill;
                return (
                  <span key={index} className="skill-item">{skillName}</span>
                );
              }
            })}
          </div>
        </section>

        {/* Contact */}
        <section className="section section-divider contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p>Get in touch:</p>
            <a href={`mailto:${personal.email}`} className="email-link">
              {personal.email}
            </a>
            
            {/* Social and Professional Links */}
            <div className="contact-links">
              {personal.github && (
                <a 
                  href={personal.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  GitHub
                </a>
              )}
              {personal.linkedin && (
                <a 
                  href={personal.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  LinkedIn
                </a>
              )}
              {personal.itchio && (
                <a 
                  href={personal.itchio} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="contact-link"
                >
                  Itch.io
                </a>
              )}
            </div>

            {personal.resume && (
              <div className="resume-download">
                <a 
                  href={personal.resume} 
                  download 
                  className="resume-link"
                >
                    Download Resume
                </a>
              </div>
            )}
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 {personal.name}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

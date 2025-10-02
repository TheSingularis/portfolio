import React from 'react';
import ProjectSection from './components/ProjectSection.jsx';
import portfolioData from './data/portfolio.json';

function App() {
  const { personal, skills, featuredProjects, gameJamProjects } = portfolioData;

  return (
    <div className="app">
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

        {/* Featured Projects */}
        <ProjectSection 
          title="Featured Projects" 
          projects={featuredProjects}
          className="section-divider"
        />

        {/* Game Jam / Side Projects */}
        <ProjectSection 
          title="Game Jam / Side Projects" 
          projects={gameJamProjects} 
          isGameJam={true}
          className="section-divider"
        />

        {/* Skills Section */}
        <section className="section section-divider">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </section>

        {/* About / Background */}
        <section className="section section-divider">
          <h2 className="section-title">About / Background</h2>
          <div className="about-content">
            <p>{personal.about}</p>
            {personal.location && (
              <p className="location">Based in {personal.location}</p>
            )}
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

import React from 'react';
import ProjectSection from './components/ProjectSection';
import portfolioData from './data/portfolio.json';

function App() {
  const { personal, skills, featuredProjects, gameJamProjects } = portfolioData;

  return (
    <div className="app">
      <main className="main-content">
        {/* Hero/Intro Section */}
        <section className="section hero">
          <h1 className="hero-name">{personal.name}</h1>
          <h2 className="hero-title">{personal.title}</h2>
          <p className="hero-intro">{personal.intro}</p>
        </section>

        {/* Featured Projects */}
        <ProjectSection 
          title="Featured Projects" 
          projects={featuredProjects} 
        />

        {/* Game Jam / Side Projects */}
        <ProjectSection 
          title="Game Jam / Side Projects" 
          projects={gameJamProjects} 
          isGameJam={true}
        />

        {/* Skills Section */}
        <section className="section">
          <h2 className="section-title">Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <span key={index} className="skill-item">{skill}</span>
            ))}
          </div>
        </section>

        {/* About / Background */}
        <section className="section">
          <h2 className="section-title">About / Background</h2>
          <div className="about-content">
            <p>{personal.about}</p>
            {personal.location && (
              <p className="location">Based in {personal.location}</p>
            )}
          </div>
        </section>

        {/* Contact */}
        <section className="section contact">
          <h2 className="section-title">Contact</h2>
          <div className="contact-content">
            <p>Get in touch:</p>
            <a href={`mailto:${personal.email}`} className="email-link">
              {personal.email}
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <p>&copy; 2025 {personal.name}. Built with React & Vite.</p>
        </footer>
      </main>
    </div>
  );
}

export default App;

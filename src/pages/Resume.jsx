import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resume = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsLoaded(true);
  }, []);

  const skills = [
    { name: 'React', icon: '⚛️' },
    { name: 'TypeScript', icon: 'TS' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'PHP', icon: '🐘' },
    { name: 'JavaScript', icon: 'JS' },
    { name: 'Redux', icon: '⚛' },
    { name: 'Tailwind', icon: '🌊' },
    { name: 'Node', icon: '⬢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Vite', icon: '⚡' },
    { name: 'Git', icon: '⎇' },
    { name: 'GitHub', icon: '' },
  ];

  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Full-Stack Web Application',
      technologies: 'React • Node.js • MongoDB',
      year: '2026',
      link: 'https://plantify-5uta.vercel.app/',
      features: [
        'Built a fully responsive online shopping platform with cart functionality.',
        'Implemented secure payment integration with Stripe API.',
        'Created an admin dashboard for inventory and order management.',
      ],
    },
    {
  title: 'Wallstreet One',
  category: 'Financial Web Application',
  technologies: 'React • Tailwind CSS',
  year: '2026 (In Progress)',
  link: 'https://wallstreet-one.vercel.app/',
  features: [
    'Designing modern UI components using Tailwind CSS for clean, scalable layouts.',
    'Structuring reusable React components to ensure maintainability and performance.',
  ],
},
  ];

  return (
    <>
    <Navbar/>
      <div className="resume-page">
        <div className={`resume-content ${isLoaded ? 'loaded' : ''}`}>
          <h1 className="resume-title fade-in-up">My Resume / Past Work</h1>
          <p className="resume-intro fade-in-up delay-1">
            I build modern full-stack web applications that combine functionality, performance, and user-focused design. My work spans both frontend and backend development, where I craft seamless, scalable, and maintainable solutions. On this page, you can explore the technologies I work with, the projects I've developed, and the approaches I take to solve real-world problems through code. I am constantly learning and experimenting with new tools and techniques to create efficient and impactful web experiences.
          </p>

          <div className="wave-divider fade-in delay-2">
            <svg viewBox="0 0 120 10" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5 T110,5 T120,5"
                stroke="#FFA500"
                strokeWidth="2"
                fill="none" />
            </svg>
          </div>

          <section className="skills-section fade-in-up delay-3">
            <h2 className="section-heading">Skills</h2>
            <p className="section-description">
              Here are the frameworks, libraries, services and runtimes I have experience
              with. This is not a complete list I'm constantly gaining new skills, and hence it
              can be a little bit outdated.
            </p>

            <div className="skills-grid">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="skill-badge"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="work-history-section fade-in-up delay-4">
            <h2 className="section-heading">Portfolio Projects</h2>
            <p className="section-description">
              Below you will find a showcase of websites and applications I have built.
              Click on any project title to visit the live website.
            </p>

            <div className="timeline">
              {projects.map((project, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                      <h3 className="job-title">{project.title}</h3>
                    </a>
                    <div className="job-meta">
                      <span className="job-company">{project.category}</span>
                      <span className="job-separator">•</span>
                      <span className="job-location">{project.technologies}</span>
                      <span className="job-separator">•</span>
                      <span className="job-type">{project.year}</span>
                    </div>
                    <div className="project-link-wrapper">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-website">
                        Visit Website →
                      </a>
                    </div>
                    <ul className="job-responsibilities">
                      {project.features.map((feature, idx) => (
                        <li key={idx}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Resume
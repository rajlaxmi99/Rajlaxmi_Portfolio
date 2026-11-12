import "./App.css";

function App() {
  const skills = [
    "Python",
    "Django",
    "JavaScript",
    "React.js",
    "Node.js",
    "HTML",
    "CSS",
    "Bootstrap",
    "MySQL",
    "Git & GitHub",
  ];

  const projects = [
    {
      title: "College ERP System",
      image: "/images/college-erp.png",
      description:
        "A role-based college management system for students, teachers and administrators.",
      technologies:
        "Python • Django • HTML • CSS • Bootstrap • SQLite",
      github: "https://github.com/rajlaxmi99/Python_Django_Project/tree/main",
    },
    {
      title: "Online Library Management System",
      image: "/images/library-system.png",
      description:
        "A web-based library application with book search, user accounts and borrowed-book tracking.",
      technologies:
        "PHP • MySQL • HTML • CSS • Bootstrap • JavaScript",
      github: "#",
    },
    {
      title: "Online Banquet Booking System",
      image: "/images/OBB-system.png",
      description:
        "Developed an Online Banquet Booking System with venue booking and additional services like Wedding DJ, Party DJ, Ceremony music, Photo Booth, Karaoke, & Uplighters",
      technologies:
        "PHP • MySQL • HTML • CSS • Bootstrap • JavaScript",
      github: "#",
    },
    {
      title: "MyTask - React Todo App",
      image: "/images/mytask.png",
      description:
        "A task management application for adding and organizing tasks using React.",
      technologies: "React.js • JavaScript • Vite • CSS",
      github: "https://github.com/rajlaxmi99/React-JS/tree/main/ToDo_App",
    },
    {
      title: "React - Counter App",
      image: "/images/counter_app.png",
      description:
        "An Interactive Counter App built with React.js that allows users to increment,decrement, and reset the count.",
      technologies: "React.js • JavaScript • Vite • HTML • CSS",
      github: "https://github.com/rajlaxmi99/React-JS/tree/main/Counter_App",
    },
  ];

  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            Rajlaxmi<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-content">
          <p className="hero-small">Hello, I'm</p>

          <h1>
            Rajlaxmi Bhujbal
          </h1>

          <h2>Python / Django, Frontend, Backend Developer</h2>

          <p className="hero-description">
            I build responsive and practical web applications using Python,
            Django, React.js and modern web technologies.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary-btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary-btn">
              Contact Me
            </a>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/rajlaxmi99"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/rajlaxmi-b-723811205"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">A little about me</h2>

          <div className="about-content">
            <div className="about-text">
              <p>
                I am an M.Sc. Computer Science graduate with hands-on
                experience in web development and software development.
              </p>

              <p>
                During my internship at Elite Softwares, I worked on a College
                ERP System using Python and Django. I gained practical
                experience with backend development, database management,
                authentication and CRUD operations.
              </p>

              <p>
                I am currently focused on strengthening my skills in Python,
                Django, React.js, JavaScript and full-stack web development.
              </p>
            </div>

            <div className="about-card">
              <div className="about-item">
                <strong>Education</strong>
                <span>M.Sc. Computer Science</span>
              </div>

              <div className="about-item">
                <strong>Role</strong>
                <span>Software Engineer Intern</span>
              </div>

              <div className="about-item">
                <strong>Focus</strong>
                <span>Python & Web Development</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section skills-section">
        <div className="section-container">
          <p className="section-label">MY SKILLS</p>

          <h2 className="section-title">Technical Skills</h2>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-container">
          <p className="section-label">MY WORK</p>

          <h2 className="section-title">Featured Projects</h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <div className="project-card" key={index}>
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                />
              </div>
            
              <div className="project-number">
                0{index + 1}
              </div>
            
              <h3>{project.title}</h3>
            
              <p>{project.description}</p>
            
              <div className="technologies">
                {project.technologies}
              </div>
            
              <div className="project-buttons">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                >
                  GitHub →
                </a>
            
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section experience-section">
        <div className="section-container">
          <p className="section-label">EXPERIENCE</p>

          <h2 className="section-title">My Experience</h2>

          <div className="experience-card">
            <div>
              <h3>Software Engineer Intern</h3>
              <h4>Elite Softwares</h4>
            </div>

            <span className="experience-date">
              Dec 2024 – Aug 2025
            </span>

            <p>
              Worked on web development using Python and Django and
              contributed to the development of a College ERP System.
              Worked with role-based dashboards, authentication, CRUD
              operations, attendance, marks, leave management and feedback
              modules.
            </p>

            <div className="experience-tech">
              Python • Django • HTML • CSS • Bootstrap • SQLite
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="section">
        <div className="section-container">
          <p className="section-label">EDUCATION</p>

          <h2 className="section-title">Education</h2>


          <div className="education-card">
          <div>
              <h3>B.Sc. Computer Science</h3>
              <p>St. Mira's College for Girls, Pune</p>
            </div>
            <span>Completed 2023</span>
            <p></p><p></p>
            <div>
              <h3>M.Sc. Computer Science</h3>
              <p>St. Mira's College for Girls, Pune</p>
            </div>
            <span>Completed 2025</span>
           
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <div className="section-container contact-container">
          <p className="section-label">CONTACT</p>

          <h2 className="section-title">Let's Connect</h2>

          <p className="contact-text">
            I am currently looking for opportunities in Python, Django,
            frontend, backend and junior full-stack development.
          </p>

          <div className="contact-buttons">
            <a
              href="mailto:your-rajlaxmibhujbal99@gmail.com"
              className="btn primary-btn"
            >
              Email Me
            </a>

            <a
              href="https://github.com/rajlaxmi99"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              GitHub
            </a>

            <a
              href="https://linkedin.com/in/rajlaxmi-b-723811205"
              target="_blank"
              rel="noreferrer"
              className="btn secondary-btn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>
          © {new Date().getFullYear()} Rajlaxmi Bhujbal. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}

export default App
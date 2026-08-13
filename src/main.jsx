import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, Download, ExternalLink,
  Code2, Database, Cloud, Server, Brain, Menu, X
} from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Resume Assistant",
    label: "Full-Stack Application",
    description:
      "A Python-based chatbot that lets users upload a resume and job description, then ask questions or request tailored responses.",
    stack: ["Python", "Flask", "SQLite", "REST API", "Gemini API"],
    github: "https://github.com/Ishitakharde/resume_assistant",
  },
  {
    title: "DocuShield",
    label: "AI Document Verification",
    description:
      "An end-to-end document verification system combining object detection, OCR and semantic validation to identify potentially forged academic documents.",
    stack: ["Python", "YOLOv8n", "OCR", "REST API", "Gemini API"],
    github: "https://github.com/Ishitakharde",
  },
  {
    title: "Brain Tumor Detection",
    label: "IIT Bombay Project",
    description:
      "A CNN-based MRI classification system using the Xception architecture to classify scans into four categories.",
    stack: ["Python", "Xception", "CNN", "Deep Learning"],
    github: "https://github.com/Ishitakharde",
  },
];

const skills = [
  ["Programming", "Java, Python", Code2],
  ["Software Engineering", "OOP, DSA, DBMS, SDLC", Server],
  ["Backend & APIs", "Flask, REST APIs, API integration", Server],
  ["Databases", "MySQL, SQLite, SQL", Database],
  ["Cloud", "AWS — EC2, S3, Lambda fundamentals", Cloud],
  ["Tools", "Git, GitHub, Eclipse, VS Code", Code2],
];

function App() {
  const [open, setOpen] = React.useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="site">
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>Ishita Kharde</button>

        <nav className={open ? "navlinks open" : "navlinks"}>
          {["about", "skills", "projects", "experience", "contact"].map((id) => (
            <button key={id} onClick={() => go(id)}>
              {id[0].toUpperCase() + id.slice(1)}
            </button>
          ))}
        </nav>

        <a className="nav-cta" href="/IshitaKharde_Resume.pdf" download>
          Resume <Download size={15} />
        </a>

        <button className="menu" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <p className="eyebrow">SOFTWARE ENGINEER · JAVA · PYTHON</p>
            <h1>Building software that is <em>useful, reliable,</em> and built to last.</h1>
            <p className="hero-text">
              I'm Ishita Kharde, an engineering graduate with a strong foundation in
              software development, APIs, databases, data structures and cloud fundamentals.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => go("projects")}>
                View my work <ArrowUpRight size={17} />
              </button>
              <button className="secondary" onClick={() => go("contact")}>
                Get in touch <Mail size={17} />
              </button>
            </div>
          </div>

          <div className="hero-card">
            <div className="terminal-top">
              <span></span><span></span><span></span>
            </div>
            <div className="terminal">
              <p><b>ishita</b>@portfolio:~$ whoami</p>
              <p className="muted">software-engineer</p>
              <p><b>ishita</b>@portfolio:~$ stack</p>
              <p className="accent">Java · Python · SQL · REST · AWS</p>
              <p><b>ishita</b>@portfolio:~$ status</p>
              <p className="success">open to opportunities<span className="cursor">_</span></p>
            </div>
          </div>
        </section>

        <section id="about" className="section split">
          <div>
            <p className="eyebrow">01 / ABOUT</p>
            <h2>Engineer with a builder's mindset.</h2>
          </div>
          <div className="about-text">
            <p>
              I enjoy turning ideas into working software — from designing REST APIs
              and database-backed applications to integrating external services and
              building end-to-end solutions.
            </p>
            <p>
              My background includes an IIT Bombay project internship, independent
              software projects, AI/ML applications, research publication and technical
              presentation experience.
            </p>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="eyebrow">02 / SKILLS</p>
          <h2>My technical toolkit.</h2>
          <div className="skill-grid">
            {skills.map(([title, text, Icon]) => (
              <article className="skill-card" key={title}>
                <Icon size={23} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">03 / PROJECTS</p>
              <h2>Things I've built.</h2>
            </div>
            <a href="https://github.com/Ishitakharde" target="_blank" rel="noreferrer">
              GitHub <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="project-grid">
            {projects.map((project, i) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{i + 1}</div>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <a href={project.github} target="_blank" rel="noreferrer">
                  View on GitHub <Github size={15} />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section">
          <p className="eyebrow">04 / EXPERIENCE</p>
          <div className="timeline">
            <div className="timeline-dot"></div>
            <div>
              <p className="date">OCT 2024 — MAR 2025</p>
              <h2>Project Intern · IIT Bombay</h2>
              <p className="timeline-text">
                Built a CNN-based medical image classification system in Python using
                the Xception architecture. Worked across preprocessing, model training,
                evaluation and validation while coordinating with faculty stakeholders.
              </p>
              <div className="result">99% training accuracy · 82.74% test accuracy</div>
            </div>
          </div>

          <div className="research">
            <Brain size={23} />
            <div>
              <h3>Research & publication</h3>
              <p>
                Published the underlying DocuShield framework in IJARSCT (Feb 2026)
                and presented the system at ICTSD-26.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="section contact">
          <p className="eyebrow">05 / CONTACT</p>
          <h2>Let's build something meaningful.</h2>
          <p>
            I'm interested in software engineering opportunities where I can keep
            learning, contribute to real products and solve practical problems.
          </p>
          <div className="contact-links">
            <a href="mailto:khardeishita@gmail.com"><Mail size={18}/> Email</a>
            <a href="https://github.com/Ishitakharde" target="_blank" rel="noreferrer"><Github size={18}/> GitHub</a>
            <a href="https://www.linkedin.com/in/ishita-kharde-0ab60a258" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn</a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Ishita Kharde</span>
        <span>Built with React · Designed for software engineering</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);

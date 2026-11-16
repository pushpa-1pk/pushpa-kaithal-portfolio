import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Download,
  FileText,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Smartphone,
  Layers3,
  ExternalLink,
  Menu,
} from "lucide-react";
import { educationData } from "./data/education";
import { skillSummary } from "./data/skills";
import "./styles.css";

const projects = [
  {
    n: "01",
    name: "TechBazaar",
    type: "E-COMMERCE · FULL-STACK WEB",
    color: "peach",
    desc: "E-commerce storefront with product listing, search, cart flow, JWT authentication and order notifications.",
    stack: ["HTML", "CSS", "Bootstrap", "Node.js", "Express", "MongoDB"],
    role: "Full-stack project development",
    visual: "techbazaar",
    image: "/images/TechBazaar.png",
    live: "https://tech-bazaar-theta.vercel.app/",
    repo: "https://github.com/pushpa-1pk/TechBazaar",
  },
  {
    n: "02",
    name: "Jay Malhar Restaurant",
    type: "RESTAURANT · FOOD ORDERING",
    color: "yellow",
    desc: "Online food-ordering platform with menu browsing, cart flow, user accounts and order placement.",
    stack: ["React", "Node.js", "Express", "MongoDB"],
    role: "Full-stack project development",
    visual: "restaurant",
    image: "/images/jay.png",
    live: "https://food-delivery-app-client-three.vercel.app/",
    repo: "https://github.com/pushpa-1pk/Food_delivery_app",
  },
  {
    n: "03",
    name: "StayHub",
    type: "ACCOMMODATION · FULL-STACK WEB",
    color: "blue",
    desc: "Airbnb-style booking app with property listings and Passport.js authentication, server-rendered with EJS.",
    stack: ["Node.js", "Express", "MongoDB", "EJS", "JavaScript"],
    role: "Full-stack project development",
    visual: "stayhub",
    image: "/images/stayhub-project.png",
    live: "https://stayhub-property-rental-platform.onrender.com/listings",
    repo: "https://github.com/pushpa-1pk/stayhub-property-rental-platform",
    coldStartNote: true,
  },
  {
    n: "04",
    name: "FloraVision",
    type: "PLANT STORE · FRONTEND",
    color: "green",
    desc: "A modern plant-store interface where I implemented responsive product-focused screens and reusable React components styled with Tailwind CSS.",
    stack: ["React", "JavaScript", "Tailwind CSS"],
    role: "Frontend development",
    visual: "flora",
    image: "/images/plant.png",
    live: "https://react-plantweb-xu1a.vercel.app/",
    repo: "https://github.com/pushpa-1pk/React_plantweb",
  },
];
const skills = [
  [
    "Frontend",
    ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Material UI"],
  ],
  ["Backend", ["Node.js", "Express.js", "REST APIs", "Mongoose", "EJS"]],
  [
    "Data & Infrastructure",
    ["MongoDB", "MySQL", "Redis", "Docker", "RabbitMQ", "Socket.IO"],
  ],
  ["Tools & Programming", ["C++", "Git", "GitHub", "Vite", "VS Code"]],
];
const contact = {
  email: "pushpakaithal0@gmail.com",
  subtext:
    "I'm open to full-time Backend / Full-Stack roles and freelance projects. Open to relocation anywhere in India.",
  location: "Nagpur, Maharashtra, India · Open to relocation",
  github: "https://github.com/pushpa-1pk/",
  linkedin: "https://www.linkedin.com/in/pushpa-kaithal/",
};
function ProjectVisual({ type, image, name }) {
  if (image)
    return (
      <div className="project-visual project-screenshot">
        <img src={image} alt={`${name} project screenshot`} loading="lazy" />
      </div>
    );
  return (
    <div className={`project-visual ${type}`} aria-hidden="true">
      <div className="visual-window">
        <div className="window-bar">
          <i />
          <i />
          <i />
        </div>
        {type === "justtap" ? (
          <>
            <div className="mock-brand">
              just<span>tap</span>
            </div>
            <div className="mock-title">
              Services, <em>made simple.</em>
            </div>
            <div className="mock-pill">
              Find a professional <ArrowUpRight size={12} />
            </div>
            <div className="mock-circles">
              <b>⌂</b>
              <b>✦</b>
              <b>⚡</b>
            </div>
          </>
        ) : null}
        {type === "stayhub" ? (
          <>
            <div className="mock-brand">
              stay<span>hub.</span>
            </div>
            <div className="stay-photo">
              <span>Find your next stay</span>
            </div>
            <div className="mock-lines">
              <i />
              <i />
              <i />
            </div>
          </>
        ) : null}
        {type === "techbazaar" ? (
          <>
            <div className="mock-brand">
              TECH<span>BAZAAR</span>
            </div>
            <div className="product-row">
              <b>⌚</b>
              <b>◉</b>
              <b>▣</b>
            </div>
            <div className="mock-lines">
              <i />
              <i />
            </div>
          </>
        ) : null}
        {type === "restaurant" ? (
          <>
            <div className="mock-brand">JAY MALHAR</div>
            <div className="food-art">✦</div>
            <div className="mock-title">
              Good food.
              <br />
              Good mood.
            </div>
            <div className="mock-pill">Explore menu</div>
          </>
        ) : null}
        {type === "flora" ? (
          <>
            <div className="mock-brand">
              flora<span>vision</span>
            </div>
            <div className="plant-art">♧</div>
            <div className="mock-title">
              Bring nature
              <br />
              closer.
            </div>
          </>
        ) : null}
        {type === "krishi" ? (
          <>
            <div className="mock-brand">
              Krishi<span>Predict</span>
            </div>
            <div className="field-art">〰</div>
            <div className="mock-title">
              Market insights
              <br />
              for every farmer.
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
function CertificateModal({ certificate, onClose }) {
  const dialogRef = React.useRef(null);
  const closeButtonRef = React.useRef(null);

  React.useEffect(() => {
    if (!certificate) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key !== "Tab") return;
      const focusable = [
        ...dialogRef.current.querySelectorAll(
          'button,[href],input,select,textarea,[tabindex]:not([tabindex="-1"])',
        ),
      ];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      }
      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [certificate, onClose]);

  if (!certificate) return null;
  return (
    <div
      className="certificate-modal-backdrop"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="certificate-modal"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={certificate.alt}
      >
        <button
          className="modal-close"
          type="button"
          onClick={onClose}
          ref={closeButtonRef}
          aria-label="Close certificate preview"
        >
          Close ×
        </button>
        <img src={certificate.href} alt={certificate.alt} loading="lazy" />
      </div>
    </div>
  );
}
function CertificateLink({ certificate, onImageOpen }) {
  if (certificate.type === "pdf")
    return (
      <a
        className="certificate-link"
        href={certificate.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        View <ArrowUpRight />
      </a>
    );
  return (
    <button
      className="certificate-link"
      type="button"
      onClick={() => onImageOpen(certificate)}
    >
      View <ArrowUpRight />
    </button>
  );
}
function CertificateThumbnail({ certificate, onImageOpen }) {
  if (certificate.type === "pdf")
    return (
      <a
        className="certificate-thumbnail pdf-thumbnail"
        href={certificate.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${certificate.title} PDF`}
      >
        <FileText />
        <span>PDF</span>
      </a>
    );
  return (
    <button
      className="certificate-thumbnail"
      type="button"
      onClick={() => onImageOpen(certificate)}
      aria-label={`View ${certificate.title} certificate`}
    >
      <img src={certificate.href} alt={certificate.alt} loading="lazy" />
    </button>
  );
}
function App() {
  const [menu, setMenu] = React.useState(false);
  const [selectedCertificate, setSelectedCertificate] = React.useState(null);
  const cgpaValue =
    educationData.education.cgpa.match(/\d+(?:\.\d+)?/)?.[0] ?? "";
  const foundationStats = [
    ["2026", "Graduated"],
    ["1", "Internship"],
    [cgpaValue, "CGPA"],
  ];
  return (
    <>
      <header className="site-header wrap">
        <a className="brand" href="#home">
          <img className="brand-logo" src="/images/logon.png" alt="TPK logo" />{" "}
          Pushpa Kaithal
        </a>
        <button
          className="menu-toggle"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle navigation"
        >
          <Menu />
        </button>
        <nav className={menu ? "nav open" : "nav"}>
          {["About", "Projects", "Skills", "Contact"].map((x) => (
            <a
              key={x}
              href={`#${x.toLowerCase()}`}
              onClick={() => setMenu(false)}
            >
              {x}
            </a>
          ))}
          <a className="nav-cta" href="#contact" onClick={() => setMenu(false)}>
            Let’s talk <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>
      <main id="home">
        <section className="hero wrap">
          <div className="hero-stage">
            <h1 className="hero-intro">
              Hi there,
              <br />
              i'm <em>Pushpa Kaithal</em>
            </h1>
            <p className="hero-role">
              A full stack
              <br />
              <em>web developer</em>
            </p>
            <div className="portrait-wrap">
              <img
                src="/images/pushpa.png"
                alt="Pushpa Kaithal portrait from the supplied portfolio reference"
              />
              <span className="portrait-note"></span>
            </div>
            {/* <span className="hero-sticker">OPEN<br/>FOR<br/>OPPORTUNITIES ↗</span> */}
          </div>
          <div className="hero-bottom">
            <span>OPEN TO FULL-TIME ROLES & FREELANCE PROJECTS</span>
            <a href="#projects">
              EXPLORE MY WORK <ArrowUpRight size={14} />
            </a>
          </div>
        </section>
        <section className="about section wrap" id="about">
          <div className="section-kicker">01 / A LITTLE INTRODUCTION</div>
          <div className="about-grid">
            <h2>
              Curious mind.
              <br />
              <em>Builder’s mindset.</em>
            </h2>
            <div className="about-text">
              <p className="lead">
                I’m a Computer Science graduate and Full-Stack Developer who
                enjoys turning ideas into useful digital products.
              </p>
              <p>
                My work spans responsive frontend experiences, backend APIs,
                database-driven applications and mobile product features. I like
                understanding the problem first, then building a solution that
                feels clear, reliable and easy to use.
              </p>
              <div className="facts">
                <div>
                  <b>B.Tech</b>
                  <span>Computer Science</span>
                </div>
                <div>
                  <b>7.8</b>
                  <span>CGPA</span>
                </div>
                <div>
                  <b>2026</b>
                  <span>Graduate</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="projects-section section" id="projects">
          <div className="wrap">
            <div className="section-kicker">02 / SELECTED WORK</div>
            <div className="section-heading">
              <h2>
                Things I’ve
                <br />
                <em>been building.</em>
              </h2>
              <p>
                A selection of academic, personal and product-development work.
                Each project is a chance to learn, solve and make something
                real.
              </p>
            </div>
            <div className="project-grid">
              {projects.map((p) => (
                <article
                  className={`project-card ${p.color} ${p.featured ? "featured" : ""}`}
                  key={p.name}
                >
                  <div className="project-meta">
                    <span>{p.n} / 04</span>
                    <span>{p.type}</span>
                  </div>
                  <ProjectVisual
                    type={p.visual}
                    image={p.image}
                    name={p.name}
                  />
                  <div className="project-info">
                    <div>
                      <h3>{p.name}</h3>
                      <p>{p.desc}</p>
                    </div>
                  </div>
                  <div className="tags">
                    {p.stack.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <div className="project-role">
                    {p.role}
                    {p.status ? ` · ${p.status}` : ""}
                  </div>
                  <div className="project-links">
                    <a
                      className="project-link-primary"
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live site`}
                    >
                      <ExternalLink size={14} /> Live site
                    </a>
                    <a
                      className="project-link-secondary"
                      href={p.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} GitHub repository`}
                    >
                      <Github size={14} /> GitHub
                    </a>
                  </div>
                  {p.coldStartNote && (
                    <p className="cold-start-note">First load may take ~30s</p>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="skills-section section wrap" id="toolkit">
          <div className="section-kicker">03 / MY TOOLKIT</div>
          <div className="section-heading">
            <h2>
              Tools of
              <br />
              <em>the trade.</em>
            </h2>
            <p>
              Technologies I’ve used across projects, prototypes and hands-on
              development.
            </p>
          </div>
          <div className="skill-grid">
            {skills.map(([name, items], i) => (
              <div className="skill-card" key={name}>
                <span>0{i + 1}</span>
                <h3>{name}</h3>
                <div className="tags">
                  {items.map((t) => (
                    <b key={t}>{t}</b>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="services-section section" id="skills">
          <div className="wrap">
            <div className="section-kicker">04 / SKILLS</div>
            <div className="section-heading">
              <h2>
                From API
                <br />
                <em>to interface.</em>
              </h2>
              <p>
                I build Node.js backends and the React interfaces on top of
                them, from authentication and real-time features to async
                workflows.
              </p>
            </div>
            <ul className="service-list">
              {skillSummary.map((skill, index) => (
                <li className="service-row" key={skill.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{skill.title}</h3>
                  <div className="service-details">
                    <p>{skill.description}</p>
                    <div className="service-tech">
                      {skill.tech.map((item) => (
                        <span key={item}>{item}</span>
                      ))}
                    </div>
                  </div>
                  <a
                    href="#projects"
                    aria-label={`View ${skill.title} projects`}
                  >
                    <ArrowUpRight />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="education section wrap">
          <div className="section-kicker">05 / THE FOUNDATION</div>
          <div className="education-grid">
            <div className="foundation-intro">
              <h2>
                Learning is
                <br />
                <em>always in progress.</em>
              </h2>
              <p>
                B.Tech graduate with hands-on internship and project experience.
              </p>
              <div className="foundation-stats">
                {foundationStats.map(([value, label]) => (
                  <div key={label}>
                    <strong>{value}</strong>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="education-details">
              <section className="foundation-block education-card">
                <p className="foundation-label">Education</p>
                <h3>{educationData.education.degree}</h3>
                <p className="education-field">
                  {educationData.education.field}
                </p>
                <p>{educationData.education.institution}</p>
                <div className="education-bottom">
                  <span>{educationData.education.graduated}</span>
                  <span>{educationData.education.cgpa}</span>
                </div>
              </section>
              {educationData.experience.length > 0 && (
                <section className="foundation-block experience-card">
                  <p className="foundation-label">Experience</p>
                  {educationData.experience.map((item) => (
                    <article
                      key={`${item.title}-${item.company}`}
                      className="experience-item"
                    >
                      <div className="experience-heading">
                        <h3>{item.title}</h3>
                        <span>Verified certificate</span>
                      </div>
                      <p className="experience-meta">
                        {item.company} · {item.period}
                      </p>
                      {item.summary && !item.summary.startsWith("[TODO:") && (
                        <p>{item.summary}</p>
                      )}
                      <CertificateLink
                        certificate={item.certificate}
                        onImageOpen={setSelectedCertificate}
                      />
                    </article>
                  ))}
                </section>
              )}
              {educationData.certifications.length > 0 && (
                <section className="certifications-card">
                  <p className="foundation-label">Certifications</p>
                  <div className="certification-grid">
                    {educationData.certifications.map((item) => (
                      <article className="certification-card" key={item.title}>
                        <CertificateThumbnail
                          certificate={item}
                          onImageOpen={setSelectedCertificate}
                        />
                        <h3>{item.title}</h3>
                        <p>
                          {item.provider}
                          {item.year && ` · ${item.year}`}
                        </p>
                        <CertificateLink
                          certificate={item}
                          onImageOpen={setSelectedCertificate}
                        />
                      </article>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>
        <section className="contact-section" id="contact">
          <div className="wrap contact-inner">
            <div className="section-kicker">06 / YOUR TURN</div>
            <div className="contact-grid">
              <h2>
                Have a good
                <br />
                <em>idea?</em>
                <br />
                Let’s build it.
              </h2>
              <div className="contact-copy">
                <p>{contact.subtext}</p>
                <a
                  className="email-link"
                  href={`mailto:${contact.email}`}
                  aria-label="Email Pushpa"
                >
                  {contact.email} <ArrowUpRight />
                </a>
                {/* TODO: Add public/resume.pdf, then enable the Download resume link below. */}
                <a className="resume-link" href="/resume.pdf" download>
                  <Download /> Download resume
                </a>
                <div className="socials">
                  <a
                    href={contact.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pushpa's GitHub profile"
                  >
                    <Github /> GitHub
                  </a>
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pushpa's LinkedIn profile"
                  >
                    <Linkedin /> LinkedIn
                  </a>
                </div>
                <p className="location">
                  <MapPin /> {contact.location}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CertificateModal
        certificate={selectedCertificate}
        onClose={() => setSelectedCertificate(null)}
      />
      <footer className="footer wrap">
        <a className="brand" href="#home">
          <img className="brand-logo" src="/images/Logo.png" alt="TPK logo" />{" "}
          Pushpa Kaithal
        </a>
        <span>DESIGNED & DEVELOPED WITH CARE · © 2026</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

import { useEffect, useState } from "react";

const profile = {
  name: "Takahiro Sanchez Largo",
  role: "Mobile App & Web Developer",
  location: "Philippines",
  email: "largotakahiro@gmail.com",
  github: "https://github.com/Kiyoshi6969",
  linkedin: "https://www.linkedin.com/in/takahiro-largo-2700b9308/?skipRedirect=true",
  bio:
    "I create calm, practical digital experiences for people who need technology to feel simple and supportive. My work blends mobile app development, virtual assistance, and customer-focused problem solving with a detail-oriented approach.",
};

const roles = ["Mobile App Developer", "Web Developer", "Problem Solver"];
const navItems = ["about", "skills", "projects", "certificates", "contact"];
const values = ["Clean Code", "User-First", "Detail Oriented", "Reliable Support"];

const stats = [
  ["6", "Projects Completed"],
  ["2", "Mobile Apps"],
  ["8", "Core Skills"],
];

const skillGroups = [
  { title: "Frontend", skills: ["React", "CSS", "Responsive UI", "Accessibility"] },
  { title: "Mobile", skills: ["Flutter", "Dart", "Kotlin", "App Maintenance"] },
  { title: "Backend", skills: ["Firebase", "REST APIs", "SQL", "Python"] },
  { title: "Tools", skills: ["Git", "Figma", "Debugging", "Customer Support"] },
];

const twoCitiesScreenshots = [
  { image: "/mobile-app/two-cities-home.jpeg", title: "Home" },
  { image: "/mobile-app/two-cities-resources.jpeg", title: "Resources" },
  { image: "/mobile-app/two-cities-events.jpeg", title: "Events" },
  { image: "/mobile-app/two-cities-playlist.jpeg", title: "Media" },
];

const sentimentScreenshots = [
  { image: "/sentiment-app/sentiment-welcome.svg", title: "Welcome" },
  { image: "/sentiment-app/sentiment-analysis.svg", title: "Analysis" },
];

const projects = [
  {
    icon: "CH",
    title: "2 Cities Church App",
    description:
      "A mobile church application designed to connect the 2 Cities Church community. Features include sermon streaming, event schedules, announcements, and giving integration.",
    tags: ["Flutter", "Dart", "Mobile App"],
    featured: true,
  },
  {
    icon: "SA",
    title: "Sentiment Analysis App",
    description:
      "A web application that analyzes the emotional tone of text using Natural Language Processing. Users can input any text and receive a real-time sentiment score with visual feedback.",
    tags: ["Python", "NLP", "Machine Learning", "Flask/React"],
    sentiment: true,
  },
  {
    icon: "DS",
    title: "DSWD Procurement UI/UX",
    description:
      "A Figma design concept for a DSWD procurement experience, focused on clear workflows, organized request tracking, and approachable interface patterns for public service operations.",
    tags: ["Figma", "UI/UX", "Procurement"],
    link: "https://www.figma.com/design/zLOLy6KWwJlFvq3HddIsje/DSWD?node-id=0-1&t=c9s6cqUzpuf1Y0hh-1",
  },
];

const certificates = [
  {
    title: "Python for Beginners",
    issued: "May 28, 2026",
    code: "10278670",
    file: "/certificates/certificate-1.pdf",
  },
  {
    title: "Getting Started with Full Stack Java Development",
    issued: "May 23, 2026",
    code: "10254914",
    file: "/certificates/certificate.pdf",
  },
  {
    title: "Introduction to SQL",
    issued: "October 13, 2024",
    code: "7453153",
    file: "/certificates/certificate-2.pdf",
  },
  {
    title: "Introduction to Front End Development",
    issued: "June 2, 2026",
    code: "10295610",
    file: "/certificates/certificate-3.pdf",
  },
];

function SoftCursor() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reducedMotion || coarsePointer) return;

    const dot = document.querySelector(".cursorDot");
    const ring = document.querySelector(".cursorRing");
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let frame;

    const move = (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate(${ringX}px, ${ringY}px)`;
      frame = requestAnimationFrame(animate);
    };

    const hover = (event) => {
      document.body.classList.toggle("cursorActive", Boolean(event.target.closest("a, button, input, textarea")));
    };

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", hover);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", hover);
      cancelAnimationFrame(frame);
      document.body.classList.remove("cursorActive");
    };
  }, []);

  return (
    <>
      <span className="cursorDot" aria-hidden="true" />
      <span className="cursorRing" aria-hidden="true" />
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [typedRole, setTypedRole] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let index = 0;
    const interval = window.setInterval(() => {
      index += 1;
      if (index <= currentRole.length) {
        setTypedRole(currentRole.slice(0, index));
      } else if (index > currentRole.length + 18) {
        setRoleIndex((current) => (current + 1) % roles.length);
        setTypedRole("");
        index = 0;
      }
    }, 88);

    return () => window.clearInterval(interval);
  }, [roleIndex]);

  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("isVisible");
        });
      },
      { threshold: 0.1 },
    );

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.01 },
    );

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));
    document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));

    let lastY = window.scrollY;
    const onScroll = () => {
      const currentY = window.scrollY;
      setShowTop(currentY > 600);
      if (Math.abs(currentY - lastY) > 8) {
        setScrollDirection(currentY > lastY ? "down" : "up");
        lastY = currentY;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll(".projectCard:not(.featuredAppCard):not(.sentimentAppCard)");

    const move = (event) => {
      const card = event.currentTarget;
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `perspective(900px) rotateX(${y * -5}deg) rotateY(${x * 5}deg) translateY(-6px)`;
    };

    const reset = (event) => {
      event.currentTarget.style.transform = "";
    };

    cards.forEach((card) => {
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", reset);
    });

    return () => {
      cards.forEach((card) => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", reset);
      });
    };
  }, []);

  const ripple = (event) => {
    const target = event.currentTarget;
    const circle = document.createElement("span");
    const size = Math.max(target.clientWidth, target.clientHeight);
    const rect = target.getBoundingClientRect();
    circle.className = "ripple";
    circle.style.width = circle.style.height = `${size}px`;
    circle.style.left = `${event.clientX - rect.left - size / 2}px`;
    circle.style.top = `${event.clientY - rect.top - size / 2}px`;
    target.appendChild(circle);
    window.setTimeout(() => circle.remove(), 650);
  };

  return (
    <div className={`studioPage scroll-${scrollDirection}`}>
      <SoftCursor />
      <div className="ambientOrbs" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>

      <header className="siteHeader">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" onClick={() => setMenuOpen(false)}>
            Takahiro
          </a>
          <button
            className={`menuButton ${menuOpen ? "open" : ""}`}
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
          <div className={`mobileOverlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />
          <div className={`navLinks ${menuOpen ? "open" : ""}`}>
            {navItems.map((item) => (
              <a
                className={activeSection === item ? "active" : ""}
                href={`#${item}`}
                key={item}
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <p className="hello reveal">Hello, I'm</p>
          <h1 className="heroName reveal" id="hero-title">
            {profile.name}
            <svg viewBox="0 0 520 34" aria-hidden="true">
              <path d="M8 20 C 98 2, 182 32, 260 18 S 420 4, 512 18" />
            </svg>
          </h1>
          <p className="typewriter reveal">{typedRole}</p>
          <p className="heroText reveal">{profile.role} based in {profile.location}, building thoughtful apps and support systems.</p>
          <div className="heroActions reveal">
            <a className="button filled" href="#projects" onClick={ripple}>
              View Work
            </a>
            <a className="button ghost" href="#contact">
              Let's Talk
            </a>
          </div>
          <a className="scrollLeaf" href="#about" aria-label="Scroll to about">
            <span>~</span>
          </a>
        </section>

        <div className="waveDivider" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none">
            <path d="M0,46 C190,105 326,5 520,38 C742,76 858,88 1052,36 C1200,-4 1328,22 1440,58 L1440,90 L0,90 Z" />
          </svg>
        </div>

        <section className="section aboutSection" id="about">
          <div className="aboutGrid">
            <figure className="photoCard reveal">
              <img src="/profile-photo.jpg" alt={profile.name} />
            </figure>
            <div className="aboutCopy reveal">
              <p className="sectionLabel">About</p>
              <h2>A gentle approach to useful digital work.</h2>
              <p>{profile.bio}</p>
              <div className="valuePills">
                {values.map((value) => (
                  <span key={value}>{value}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="statsGrid">
            {stats.map(([number, label], index) => (
              <article className="statCard reveal" style={{ "--delay": `${index * 120}ms` }} key={label}>
                <strong>{number}+</strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section skillsSection" id="skills">
          <div className="sectionIntro reveal">
            <p className="sectionLabel">Skills</p>
            <h2>Tools I use to bring ideas into shape.</h2>
          </div>
          <div className="skillGroups">
            {skillGroups.map((group, groupIndex) => (
              <article className="skillGroup reveal" style={{ "--delay": `${groupIndex * 120}ms` }} key={group.title}>
                <h3>{group.title}</h3>
                <div>
                  {group.skills.map((skill) => (
                    <span className="skillPill" key={skill}>
                      <i aria-hidden="true">*</i>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section projectsSection" id="projects">
          <div className="sectionIntro reveal">
            <p className="sectionLabel">Featured Projects</p>
            <h2>Things I've Built</h2>
          </div>
          <div className="projectList">
            {projects.map((project, index) => (
              <article
                className={`projectCard reveal ${project.featured ? "featuredAppCard" : ""} ${project.sentiment ? "sentimentAppCard" : ""}`}
                style={{ "--delay": `${index * 120}ms` }}
                key={project.title}
              >
                {project.featured ? (
                  <div className="appWheelStage" aria-label="2 Cities Church app screenshots">
                    <div className="appWheel">
                      {twoCitiesScreenshots.map((screen, screenIndex) => (
                        <figure className="appWheelItem" style={{ "--i": screenIndex }} key={screen.title}>
                          <img src={screen.image} alt={`2 Cities Church app ${screen.title} screen`} loading="lazy" />
                          <figcaption>{screen.title}</figcaption>
                        </figure>
                      ))}
                    </div>
                    <div className="wheelShadow" aria-hidden="true" />
                  </div>
                ) : (
                  <>
                    {project.sentiment ? (
                      <div className="sentimentScrollStage" aria-label="Text Sentiment Analysis app screenshots">
                        {sentimentScreenshots.map((screen, screenIndex) => (
                          <figure className="sentimentPhone" style={{ "--i": screenIndex }} key={screen.title}>
                            <img src={screen.image} alt={`Text Sentiment Analysis app ${screen.title} screen`} loading="lazy" />
                            <figcaption>{screen.title}</figcaption>
                          </figure>
                        ))}
                      </div>
                    ) : (
                      <div className="projectIcon" aria-hidden="true">
                        {project.icon}
                      </div>
                    )}
                  </>
                )}
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tagRow">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <div className="projectActions">
                    <a href={project.link || "#contact"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined}>
                      View Project
                    </a>
                    {!project.link && (
                      <a href={profile.github} target="_blank" rel="noreferrer">
                        GitHub
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="moreProjects reveal">
            <a className="button ghost dark" href={profile.github} target="_blank" rel="noreferrer">
              More Projects
            </a>
          </div>
        </section>

        <section className="section certificateSection" id="certificates">
          <div className="certificateHero reveal">
            <div>
              <p className="sectionLabel">Certificates</p>
              <h2>Learning Milestones</h2>
              <p>
                A small gallery of completed courses that support my growth in programming, databases, and full-stack development.
              </p>
            </div>
            <div className="certificateRibbon" aria-hidden="true">
              <span>Verified</span>
              <span>SkillUp</span>
              <span>Completed</span>
              <span>Certified</span>
            </div>
          </div>

          <div className="certificateMarquee reveal" aria-hidden="true">
            <span>Python for Beginners / Full Stack Java / SQL / Front End Development / </span>
            <span>Python for Beginners / Full Stack Java / SQL / Front End Development / </span>
          </div>

          <div className="certificateGrid">
            {certificates.map((certificate, index) => (
              <article className="certificateCard reveal" style={{ "--delay": `${index * 120}ms` }} key={certificate.title}>
                <a className="certificatePreview" href={certificate.file} target="_blank" rel="noreferrer" aria-label={`Open ${certificate.title} certificate`}>
                  <object data={`${certificate.file}#toolbar=0&navpanes=0&scrollbar=0`} type="application/pdf" aria-hidden="true">
                    <span>{certificate.title}</span>
                  </object>
                </a>
                <div className="certificateInfo">
                  <span>Certificate of Completion</span>
                  <h3>{certificate.title}</h3>
                  <p>{certificate.issued}</p>
                  <small>Code: {certificate.code}</small>
                  <a href={certificate.file} target="_blank" rel="noreferrer">
                    View Certificate
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section contactSection" id="contact">
          <div className="contactShell reveal">
            <div className="contactIntro">
              <p className="sectionLabel">Contact</p>
              <h2>Let's Work Together</h2>
              <p>Have a project in mind or just want to say hi? My inbox is always open.</p>
              <div className="socialLinks">
                <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
                  GH
                </a>
                <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  IN
                </a>
                <a href={`mailto:${profile.email}`} aria-label="Email">
                  @
                </a>
              </div>
            </div>
            <form className="contactForm" onSubmit={(event) => event.preventDefault()}>
              <label>
                <input type="text" required />
                <span>Name</span>
              </label>
              <label>
                <input type="email" required />
                <span>Email</span>
              </label>
              <label>
                <textarea rows="5" required />
                <span>Message</span>
              </label>
              <button className="button filled submitButton" type="submit" onClick={ripple}>
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>{profile.name} - Crafted with care - 2026</p>
      </footer>

      <a className={`backToTop ${showTop ? "visible" : ""}`} href="#top" aria-label="Back to top">
        ^
      </a>
    </div>
  );
}

export default App;

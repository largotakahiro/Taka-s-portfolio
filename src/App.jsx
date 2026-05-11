const profile = {
  name: "Takahiro Sanchez Largo",
  title: "Virtual Assistant | Mobile App Developer",
  email: "largotakahiro@gmail.com",
  linkedin: "https://www.linkedin.com/in/takahiro-largo-2700b9308/?skipRedirect=true",
  github: "https://github.com/Kiyoshi6969",
};

const skills = [
  "Flutter",
  "Dart",
  "Kotlin",
  "Mobile App Maintenance",
  "Bug Fixing",
  "Performance Optimization",
  "Customer Support",
  "Virtual Assistance",
];

const appScreenshots = [
  { image: "/mobile-app/two-cities-home.jpeg", title: "Home experience" },
  { image: "/mobile-app/two-cities-resources.jpeg", title: "Resources hub" },
  { image: "/mobile-app/two-cities-playlist.jpeg", title: "Playlist library" },
  { image: "/mobile-app/two-cities-events.jpeg", title: "Events calendar" },
];

const sentimentScreenshots = [
  { image: "/sentiment-app/sentiment-welcome.svg", title: "Welcome screen" },
  { image: "/sentiment-app/sentiment-analysis.svg", title: "Analysis screen" },
];

export default function App() {
  return (
    <div className="page">
      <header className="siteHeader">
        <nav className="nav" aria-label="Main navigation">
          <a className="brand" href="#top" aria-label="Go to top">
            TL
          </a>
          <div className="navLinks">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Job Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>
      </header>

      <main id="top" className="main">
        <section className="hero">
          <div className="heroText">
            <p className="eyebrow">Portfolio</p>
            <h1>{profile.name}</h1>
            <p className="heroTitle">{profile.title}</p>
          </div>
          <div className="photoFrame">
            <img src="/profile-photo.jpg" alt={profile.name} />
          </div>
        </section>

        <section id="about" className="section">
          <p className="sectionLabel">About</p>
          <div className="contentCard">
            <h2>About Me</h2>
           <p>
  I am Takahiro Sanchez Largo, a former call center agent currently working as a Virtual Assistant and Mobile App Developer. I specialize in building and maintaining mobile applications using Flutter and Dart, with a passion for creating efficient, user-friendly, and professional digital solutions.
</p>
          </div>
        </section>

        <section id="skills" className="section">
          <p className="sectionLabel">Skills</p>
          <div className="skillsMarquee" aria-label="Skills">
            <div className="skillsTrack">
              {[...skills, ...skills].map((skill, index) => (
                <div className="skillCard" key={`${skill}-${index}`}>
                  <span aria-hidden="true" />
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <p className="sectionLabel">Job Experience</p>
          <div className="experienceStack">
          <div className="experienceCard">
            <div>
              <p className="role">Call Center Agent</p>
              <h2>Alorica</h2>
            </div>
            <p className="dateRange">November 11, 2025 - March 11, 2026</p>
            <p>
              Worked at Alorica as a call center employee for four months, handling customer-focused work and developing communication, patience,
              and problem-solving skills.
            </p>
          </div>

          <div className="experienceCard">
            <div>
              <p className="role">Virtual Assistant / Mobile App Developer</p>
              <h2>2 Cities Church App</h2>
            </div>
            <p className="dateRange">March 14, 2026 - Current</p>
            <p>
              Supporting the 2 Cities Church mobile app using Flutter and Dart. I help maintain the app, fix issues, improve performance, and support
              updates across Android and iOS. The app is available on the Apple App Store and Google Play Store.
            </p>
          </div>
          </div>
        </section>

        <section id="projects" className="section">
          <p className="sectionLabel">Projects</p>
          <article className="projectShowcase">
            <div className="projectShowcaseCopy">
              <span>Mobile App</span>
              <h2>2 Cities Church App</h2>
              <p>
                Mobile application maintenance using Flutter and Dart. I maintained the app, fixed bugs, improved performance, supported feature
                updates, and helped keep the user experience smooth across Android and iOS.
              </p>
            </div>

            <div className="appOrbitShowcase" aria-label="2 Cities Church app screenshots">
              <div className="orbitRings" aria-hidden="true" />
              <div className="mainDevice">
                <div className="mainDeviceShell">
                  {appScreenshots.map((screen, index) => (
                    <img
                      className="mainDeviceScreen"
                      style={{ "--i": index }}
                      src={screen.image}
                      alt={index === 0 ? "2 Cities Church app rotating showcase" : ""}
                      loading={index === 0 ? "eager" : "lazy"}
                      key={screen.title}
                    />
                  ))}
                </div>
              </div>

              <div className="orbitPreviewTrack" aria-hidden="true">
                {appScreenshots.map((screen, index) => (
                  <figure className="orbitPreview" style={{ "--i": index }} key={screen.title}>
                    <img src={screen.image} alt="" loading="lazy" />
                    <figcaption>{screen.title}</figcaption>
                  </figure>
                ))}
              </div>

              <div className="screenTimeline" aria-hidden="true">
                {appScreenshots.map((screen, index) => (
                  <span style={{ "--i": index }} key={screen.title} />
                ))}
              </div>
            </div>
          </article>

          <article className="sentimentShowcase">
            <div className="sentimentCopy">
              <span>School Project</span>
              <h2>Text Sentiment Analysis App</h2>
              <p>
                The sentiment app lets users put a sentiment or message into a text box, then the app analyzes what they may be feeling right now.
                I used Kotlin for developing the mobile application.
              </p>
              <div className="sentimentTags">
                <span>Kotlin</span>
                <span>Mobile app</span>
                <span>Sentiment analysis</span>
                <span>School work</span>
              </div>
            </div>

            <div className="sentimentStage" aria-label="Text Sentiment Analysis app screenshots">
              <div className="sentimentScanner" aria-hidden="true" />
              <div className="sentimentParticles" aria-hidden="true">
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className="sentimentGallery">
                {sentimentScreenshots.map((screen, index) => (
                  <figure className="sentimentPreview" style={{ "--i": index }} key={screen.title}>
                    <div className="sentimentPhoneShell">
                      <img src={screen.image} alt={`Text Sentiment Analysis app ${screen.title}`} loading="lazy" />
                    </div>
                    <figcaption>{screen.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </article>
        </section>

        <section id="contact" className="section contactSection">
          <p className="sectionLabel">Contact</p>
          <div className="contactGrid">
            <a className="contactCard" href={`mailto:${profile.email}`}>
              <span>Email</span>
              <strong>{profile.email}</strong>
            </a>
            <a className="contactCard" href={profile.linkedin} target="_blank" rel="noreferrer">
              <span>LinkedIn</span>
              <strong>Connect with me</strong>
            </a>
            <a className="contactCard" href={profile.github} target="_blank" rel="noreferrer">
              <span>GitHub</span>
              <strong>View profile</strong>
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

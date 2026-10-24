import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Arrow, AssetImage, BrowserWindow, PhoneMockup, WorkflowVisual } from './components/Visuals.jsx';
import { profile, projects, experience, additional, certificates } from './data/content.js';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

function Header() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (event) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', close);
    return () => { document.body.style.overflow = old; window.removeEventListener('keydown', close); };
  }, [open]);

  return (
    <header className="site-header" id="site-header">
      <a className="wordmark" href="#top" onClick={() => setOpen(false)} aria-label="Takahiro — back to top">TAKAHIRO<span>.</span></a>
      <nav aria-label="Main navigation" className={`main-nav ${open ? 'is-open' : ''}`} id="main-nav">
        {links.map(({ label, href }) => <a href={href} onClick={() => setOpen(false)} key={href}>{label}</a>)}
        <a className="nav-resume-mobile" href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé ↗</a>
      </nav>
      <a className="nav-resume" href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé <Arrow size={17} /></a>
      <button type="button" className={`menu-toggle ${open ? 'is-open' : ''}`} aria-label={open ? 'Close menu' : 'Open menu'} aria-controls="main-nav" aria-expanded={open} onClick={() => setOpen((value) => !value)}><span /><span /></button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-inner container">
        <div className="hero-text-wrap">
          <p className="kicker hero-kicker">CREATIVE DEVELOPMENT</p>
          <h1 id="hero-title" className="hero-title"><span className="hero-title-line">BUILDING</span><span className="hero-title-line hero-title-outline">DIGITAL</span><span className="hero-title-line">EXPERIENCES<span className="period"></span></span></h1>
          <div className="hero-foot">
            <p className="hero-sub">Websites, mobile apps, and automation — built with purpose.</p>
            <div className="hero-actions"><a className="link-pill link-pill-dark" href="#work">Explore work <Arrow size={18} /></a><a className="link-inline" href={profile.resume} target="_blank" rel="noopener noreferrer">View résumé <Arrow size={17} /></a></div>
          </div>
        </div>
        <div className="hero-objects" aria-hidden="true">
          <div className="hero-browser hero-browser-a"><BrowserWindow src={projects[0].image} alt="" label="2citieschurch.com" /></div>
          <div className="hero-browser hero-browser-b"><BrowserWindow src={projects[1].image} alt="" label="jeffstrueckerministries.com" /></div>
          <div className="hero-phone"><PhoneMockup /></div>
          <div className="hero-flow"><WorkflowVisual /></div>
        </div>
        <div className="hero-bottom"><span>WEB / MOBILE / AUTOMATION</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
    </section>
  );
}

function MovingShowcase() {
  return (
    <section className="kinetic-gallery" aria-label="Animated presentation of websites, mobile app, and automation work">
      <div className="gallery-inner container">
        <div className="gallery-title"><span className="kicker">WEB / MOBILE / SYSTEMS</span><h2>WORK IN<br /><em>MOTION</em></h2></div>
        <div className="gallery-objects">
          <div className="gallery-object gallery-one"><BrowserWindow src={projects[0].image} label="2 Cities Church" alt="2 Cities Church website" /></div>
          <div className="gallery-object gallery-two"><BrowserWindow src={projects[1].image} label="Jeff Struecker Ministries" alt="Jeff Struecker Ministries website" /></div>
          <div className="gallery-object gallery-three"><PhoneMockup /></div>
          <div className="gallery-object gallery-four"><WorkflowVisual /></div>
        </div>
        <p className="gallery-caption">REAL WORK. THOUGHTFUL MOVEMENT.</p>
      </div>
    </section>
  );
}

function ProjectMedia({ project }) {
  if (!project.image) return <WorkflowVisual className="project-workflow" />;
  return <BrowserWindow src={project.image} alt={project.alt} label={project.href.replace(/^https?:\/\//, '').replace(/\/$/, '')} className="project-browser" />;
}

function SelectedWork() {
  return (
    <section className="selected-work section-block" id="work" aria-labelledby="work-heading">
      <div className="container">
        <div className="section-intro"><span className="kicker">SELECTED WORK</span><h2 className="section-display" id="work-heading">MADE TO <em>MATTER</em></h2></div>
        <div className="featured-projects">
          {projects.map((project) => (
            <article className="featured-item" key={project.id}>
              <div className={`featured-visual visual-${project.id}`}>
                <div className="feature-art"><ProjectMedia project={project} /></div>
              </div>
              <div className="featured-copy">
                <div className="project-topline"><span>{project.type}</span><span>{project.tech}</span></div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <details className="project-details"><summary>My contribution <span>+</span></summary><p>{project.detail}</p></details>
                {project.href ? <a className="project-link" href={project.href} target="_blank" rel="noopener noreferrer">Visit live website <Arrow size={18} /></a> : <span className="project-projectnote">Illustrative n8n workflow / project practice</span>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesPanels() {
  const captions = [
    { text: 'WEB', label: 'Platforms & front-end' },
    { text: 'MOBILE', label: 'Flutter applications' },
    { text: 'SYSTEMS', label: 'Workflow automation' },
  ];
  return (
    <section className="services-panels" aria-labelledby="panels-heading">
      <div className="panels-intro"><span className="kicker">WHAT I WORK ON</span><h2 id="panels-heading">THREE FIELDS<br />ONE FOCUS</h2></div>
      <div className="panel-stage">
        {captions.map((item, index) => <div className={`rise-panel rise-panel-${index + 1}`} key={item.text}><div><h3>{item.text}</h3><p>{item.label}</p></div></div>)}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section className="experience-section section-block" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-intro intro-light"><span className="kicker">EXPERIENCE</span><h2 className="section-display" id="experience-heading">BEHIND <em>THE BUILD</em></h2></div>
        <div className="experience-layout">
          <div className="experience-entries">
            {experience.map((item) => <article className="experience-entry" key={item.name}><div><h3>{item.name}</h3><p>{item.role}</p><small>{item.tags}</small></div><span className="exp-arrow" aria-hidden="true">↗</span></article>)}
            <a className="experience-resume" href={profile.resume} target="_blank" rel="noopener noreferrer">Full résumé <Arrow size={18} /></a>
          </div>
          <div className="experience-preview-stack" aria-hidden="true">
            <div className="experience-preview preview-one"><BrowserWindow src={projects[0].image} label="2 Cities Church" alt="" /></div>
            <div className="experience-preview preview-two"><BrowserWindow src={projects[1].image} label="Jeff Struecker Ministries" alt="" /></div>
            <div className="experience-preview preview-three"><WorkflowVisual /></div>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-heading">
      <div className="about-bloom" aria-hidden="true" />
      <div className="container about-inner">
        <div className="about-visual">
          <div className="portrait-frame"><span className="portrait-fallback" aria-hidden="true">TL.</span><AssetImage src="/profile-photo.jpg" alt={profile.fullName} className="portrait-img" fallback="TAKAHIRO LARGO" loading="lazy" /></div>
          <div className="about-phone"><PhoneMockup /></div>
        </div>
        <div className="about-copy"><span className="kicker">ABOUT ME</span><h2 className="section-display" id="about-heading">A LITTLE<br /><em>ABOUT ME</em></h2><p>I'm Takahiro, a developer from the Philippines working across websites, mobile applications, and workflow automation. I enjoy building thoughtful experiences and reliable systems.</p><a href={profile.resume} target="_blank" rel="noopener noreferrer" className="link-inline">Read my résumé <Arrow size={18} /></a></div>
      </div>
    </section>
  );
}

function MoreWork() {
  return (
    <section className="more-section section-block" aria-labelledby="more-heading"><div className="container">
      <div className="more-head"><h2 id="more-heading">MORE WORK<span></span></h2></div>
      <div className="more-list">{additional.map((item) => <article className={`more-item ${item.href ? 'has-link' : ''}`} key={item.name}>
        {item.href ? (
          <a className="more-row-link" href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${item.name} (opens in a new tab)`}>
            <div className="more-thumbnail"><AssetImage src={item.image} alt={`${item.name} preview`} fallback={item.fallback} loading="lazy" /></div>
            <span className="more-name"><span className="more-title">{item.name}</span><span className="more-kind">{item.kind}</span></span>
            <span className="more-arrow" aria-hidden="true"><Arrow size={21} /></span>
          </a>
        ) : (
          <div className="more-row-static">
            <div className="more-thumbnail"><AssetImage src={item.image} alt={`${item.name} preview`} fallback={item.fallback} loading="lazy" /></div>
            <span className="more-name"><span className="more-title">{item.name}</span><span className="more-kind">{item.kind}</span></span>
            <span className="more-nolink" aria-label="Portfolio project; no public link available">↗</span>
          </div>
        )}
      </article>)}</div>
      <details className="cert-details"><summary>Courses & certificates <span>VIEW ALL +</span></summary><div className="cert-list">{certificates.map((item) => <a href={item.file} key={item.file} target="_blank" rel="noopener noreferrer">{item.name}<Arrow size={16} /></a>)}</div></details>
    </div></section>
  );
}

function Contact() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-heading">
      <div className="container contact-inner"><span className="kicker">GET IN TOUCH</span><h2 id="contact-heading">LET'S BUILD<br /><em>SOMETHING.</em></h2><div className="contact-cta"><a href={`mailto:${profile.email}`}>{profile.email}<Arrow size={32} /></a><div className="contact-arrow" aria-hidden="true">↗</div></div><div className="contact-social"><a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href={profile.resume} target="_blank" rel="noopener noreferrer">Résumé ↗</a></div></div>
      <footer className="footer"><span>© {new Date().getFullYear()} TAKAHIRO LARGO</span><span>MADE WITH INTENTION</span><a href="#top">BACK TO TOP ↑</a></footer>
    </section>
  );
}

function useScrollChoreography(rootRef) {
  useGSAP(() => {
    const scope = rootRef.current;
    if (!scope) return;
    const mm = gsap.matchMedia();
    const reduce = '(prefers-reduced-motion: reduce)';

    // Desktop-only pinning and scroll-scrubbed, reversible object movement.
    mm.add({ desktop: '(min-width: 900px)', motion: '(prefers-reduced-motion: no-preference)' }, (context) => {
      if (!context.conditions.desktop || !context.conditions.motion) return;
      document.documentElement.classList.add('motion-ready');
      const hero = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.hero', start: 'top top', end: () => `+=${Math.round(window.innerHeight * 1.55)}`, pin: true, scrub: 1.1, anticipatePin: 1, invalidateOnRefresh: true } });
      hero.to('.hero-objects', { opacity: 1, duration: .55 }, .30)
        .to('.hero-title', { yPercent: -18, scale: .88, opacity: .3, transformOrigin: 'left center', duration: 1.0 }, 0)
        .to('.hero-sub', { opacity: 0, y: -60, duration: .6 }, 0)
        .to('.hero-actions', { opacity: 0, y: -30, duration: .6 }, 0)
        .fromTo('.hero-browser-a', { x: '28vw', y: '18vh', rotation: 10, scale: .65 }, { x: '-19vw', y: '-6vh', rotation: -7, scale: 1.02, duration: 1.7 }, 0)
        .fromTo('.hero-browser-b', { x: '19vw', y: '26vh', rotation: -11, scale: .55 }, { x: '7vw', y: '-17vh', rotation: 7, scale: 1.08, duration: 1.7 }, 0)
        .fromTo('.hero-phone', { x: '12vw', y: '55vh', rotation: 15, scale: .6 }, { x: '-7vw', y: '-7vh', rotation: -9, scale: 1.12, duration: 1.7 }, 0)
        .fromTo('.hero-flow', { x: '22vw', y: '75vh', rotation: -9, scale: .7 }, { x: '16vw', y: '10vh', rotation: 4, scale: 1, duration: 1.7 }, 0);

      const gallery = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.kinetic-gallery', start: 'top top', end: () => `+=${Math.round(window.innerHeight * 1.5)}`, pin: true, scrub: 1.0, anticipatePin: 1, invalidateOnRefresh: true } });
      gallery.fromTo('.gallery-one', { xPercent: -65, yPercent: 30, rotation: -13, scale: .75 }, { xPercent: 8, yPercent: -13, rotation: 4, scale: 1.04, duration: 1.2 }, 0)
        .fromTo('.gallery-two', { xPercent: 67, yPercent: -60, rotation: 10, scale: .75 }, { xPercent: -8, yPercent: 17, rotation: -5, scale: 1.08, duration: 1.2 }, 0)
        .fromTo('.gallery-three', { xPercent: 20, yPercent: 110, rotation: 20, scale: .55 }, { xPercent: -27, yPercent: -30, rotation: -7, scale: 1.05, duration: 1.3 }, 0.05)
        .fromTo('.gallery-four', { xPercent: 60, yPercent: 130, rotation: -9, scale: .75 }, { xPercent: -17, yPercent: 0, rotation: 4, scale: 1.15, duration: 1.2 }, 0.08)
        .to('.gallery-title', { scale: .84, y: -65, opacity: .45, transformOrigin: 'left top', duration: 1.2 }, 0);

      const panels = gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: '.services-panels', start: 'top top', end: () => `+=${Math.round(window.innerHeight * 1.05)}`, pin: true, scrub: .85, anticipatePin: 1, invalidateOnRefresh: true } });
      panels.fromTo('.rise-panel-1', { yPercent: 101, scaleY: .4 }, { yPercent: 0, scaleY: 1, transformOrigin: 'bottom center', duration: 1 }, 0)
        .fromTo('.rise-panel-2', { yPercent: 115, scaleY: .45 }, { yPercent: 0, scaleY: 1, transformOrigin: 'bottom center', duration: 1 }, .16)
        .fromTo('.rise-panel-3', { yPercent: 130, scaleY: .5 }, { yPercent: 0, scaleY: 1, transformOrigin: 'bottom center', duration: 1 }, .32)
        .to('.panels-intro', { opacity: 0, y: -80, duration: .7 }, .22);

      // Each experience preview is controlled by its matching entry's actual position.
      gsap.set('.experience-preview:not(.preview-one)', { autoAlpha: 0, y: 42, scale: .91 });
      gsap.utils.toArray('.experience-entry').forEach((row, i) => {
        if (i === 0) return;
        gsap.timeline({ scrollTrigger: { trigger: row, start: 'top 70%', end: 'top 32%', scrub: .65 } })
          .to(`.experience-preview:nth-child(${i})`, { autoAlpha: 0, y: -35, scale: .9, ease: 'none' }, 0)
          .to(`.experience-preview:nth-child(${i + 1})`, { autoAlpha: 1, y: 0, scale: 1, ease: 'none' }, 0);
      });
      // A color shape expands behind the content, introducing the About section.
      gsap.fromTo('.about-bloom', { scale: .05 }, { scale: 25, ease: 'none', scrollTrigger: { trigger: '.about-section', start: 'top 90%', end: 'top 15%', scrub: 1, invalidateOnRefresh: true } });
      gsap.fromTo('.about-visual', { x: -100, rotation: -5 }, { x: 0, rotation: 0, scrollTrigger: { trigger: '.about-section', start: 'top 80%', end: 'top 30%', scrub: .7 }, ease: 'none' });
      gsap.fromTo('.about-phone', { x: 80, y: 110, rotation: 16 }, { x: 0, y: 0, rotation: -8, ease: 'none', scrollTrigger: { trigger: '.about-section', start: 'top 80%', end: 'top 22%', scrub: .7 } });
      gsap.fromTo('.contact-arrow', { rotation: -22, y: 95 }, { rotation: 0, y: 0, ease: 'none', scrollTrigger: { trigger: '.contact-section', start: 'top 80%', end: 'top 15%', scrub: .9 } });
    });

    // Desktop and mobile: GSAP image masking and typographic motion, no autoplay.
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.fromTo('.hero-kicker', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: .65, ease: 'power3.out' });
      gsap.fromTo('.hero-title-line', { yPercent: 105 }, { yPercent: 0, duration: 1.05, ease: 'power3.out', stagger: .12 });
      gsap.fromTo('.hero-foot', { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .8, ease: 'power3.out', delay: .5 });
      gsap.utils.toArray('.featured-item').forEach((item) => {
        const art = item.querySelector('.feature-art');
        const copy = item.querySelector('.featured-copy');
        gsap.fromTo(art, { clipPath: 'inset(0 0 24% 0)', y: 50, scale: 1.04 }, { clipPath: 'inset(0 0 0% 0)', y: 0, scale: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top 85%', end: 'top 30%', scrub: .75 } });
        gsap.fromTo(copy, { y: 50, opacity: .55 }, { y: 0, opacity: 1, ease: 'none', scrollTrigger: { trigger: item, start: 'top 84%', end: 'top 40%', scrub: .75 } });
      });
      gsap.utils.toArray('.section-display, .more-head h2, .contact-inner h2').forEach((el) => {
        gsap.fromTo(el, { y: 55, opacity: .5 }, { y: 0, opacity: 1, scrollTrigger: { trigger: el, start: 'top 91%', end: 'top 58%', scrub: .55 }, ease: 'none' });
      });
    });

    // Mobile: gentle independent object motion, never pins or scroll hijacking.
    mm.add({ mobile: '(max-width: 899px)', motion: '(prefers-reduced-motion: no-preference)' }, (context) => {
      if (!context.conditions.mobile || !context.conditions.motion) return;
      gsap.fromTo('.hero-browser-a', { y: 60, rotation: -7 }, { y: -12, rotation: -3, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .8 } });
      gsap.fromTo('.hero-phone', { y: 100, rotation: 9 }, { y: -18, rotation: -6, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: .8 } });
      gsap.fromTo('.gallery-object', { y: 28, opacity: .85 }, { y: -24, opacity: 1, ease: 'none', stagger: .06, scrollTrigger: { trigger: '.kinetic-gallery', start: 'top 90%', end: 'bottom 20%', scrub: .7 } });
    });

    return () => { mm.revert(); document.documentElement.classList.remove('motion-ready'); };
  }, { scope: rootRef });
}

export default function App() {
  const rootRef = useRef(null);
  useScrollChoreography(rootRef);
  return (
    <div className="site" ref={rootRef}>
      <a className="skip-link" href="#work">Skip to work</a>
      <Header />
      <main><Hero /><MovingShowcase /><SelectedWork /><ServicesPanels /><Experience /><About /><MoreWork /><Contact /></main>
    </div>
  );
}

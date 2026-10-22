export default function HeroAbout() {
  return (
    <>
      {/* HERO */}
      <section id="home" className="hero-section section-anchor">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              <span>WELCOME TO MY PORTFOLIO</span>
            </div>
            <p className="hero-intro">Hello, I&apos;m Jhelyn Medina.</p>
            <h1>I build digital<br />experiences with<br /><span>purpose &amp; creativity.</span></h1>
            <p className="hero-description">
              I&apos;m an Information Technology graduate interested in web development, application development, and thoughtful user interface design. I enjoy turning ideas into useful digital experiences while learning something new with every project.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
              <a
                href="/Jhelyn-P-Medina-Resume.pdf"
                download="Jhelyn-P-Medina-Resume.pdf"
                className="button button-secondary"
                aria-label="Download my resume as a PDF"
              >
                Download Resume
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12" />
                  <path d="M6 11l6 6 6-6" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            </div>
            <div className="hero-meta">
              <div>
                <span className="hero-meta-label">FOCUS</span>
                <span className="hero-meta-value">Development &amp; Design</span>
              </div>
              <div>
                <span className="hero-meta-label">APPROACH</span>
                <span className="hero-meta-value">Curious by nature</span>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="profile-frame">
              <div className="profile-backdrop" />
              <img src="/profile.JPG" alt="Portrait of Jhelyn Medina" className="profile-image" />
            </div>
          </div>
        </div>
        <div className="hero-bottom-line container">
          <span>SCROLL TO EXPLORE</span>
          <span className="scroll-line" />
          <span>DESIGNING MY NEXT CHAPTER</span>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section section-light section-anchor">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">01 / ABOUT ME</span>
            <h2>A little about me,<br /><span>and what drives me.</span></h2>
          </div>
          <div className="about-grid">
            <div className="about-lead">
              <span className="about-quote-mark">“</span>
              <p>I believe good digital work starts with curiosity, thoughtful planning, and a willingness to keep learning.</p>
            </div>
            <div className="about-copy">
              <p>I&apos;m Jhelyn P. Medina, an Information Technology graduate who enjoys exploring the connection between technology, design, and everyday problems. I like working on projects that challenge me to think carefully about how something looks and how it works.</p>
              <p>My experience includes customer service and remote video annotation, alongside my academic and personal projects. These experiences have helped me develop communication, attention to detail, adaptability, and problem-solving skills.</p>
              <a href="#contact" className="text-link">
                Let&apos;s connect
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17L17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            </div>
          </div>
          <div className="about-facts">
            <div className="about-fact">
              <span className="fact-number">01</span>
              <h3>Curiosity</h3>
              <p>Exploring new tools, ideas, and ways to solve problems.</p>
            </div>
            <div className="about-fact">
              <span className="fact-number">02</span>
              <h3>Creativity</h3>
              <p>Bringing clarity and consistency to visual experiences.</p>
            </div>
            <div className="about-fact">
              <span className="fact-number">03</span>
              <h3>Growth</h3>
              <p>Learning from feedback and improving with every project.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
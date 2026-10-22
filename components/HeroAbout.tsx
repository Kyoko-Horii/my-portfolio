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
              <a href="#projects" className="button button-primary">Explore my work <span>↗</span></a>
              <a href="#about" className="button button-secondary">More about me <span>↓</span></a>
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
            <div className="hero-visual-top"><span>-</span><span>-</span></div>
            <div className="profile-frame">
              <div className="profile-backdrop" />
              <img src="/profile.JPG" alt="Portrait of Jhelyn Medina" className="profile-image" />
              <div className="profile-label">
                <span className="profile-label-small"></span>
                <span className="profile-label-name"></span>
              </div>
            </div>
            <div className="hero-sticker">
              <span className="sticker-star">!💤</span><span></span><span></span><span></span>
            </div>
            <div className="hero-visual-bottom">
              <span>CREATIVE MINDSET</span>
              <span>CONTINUOUS GROWTH ↗</span>
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
              <a href="#contact" className="text-link">Let&apos;s connect <span>↗</span></a>
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
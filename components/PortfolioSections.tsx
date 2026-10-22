type PortfolioSectionsProps = {
  projects: any[];
  services: any[];
  education: any[];
  experiences: any[];
  skills: string[];
  technologies: any[];
};

export default function PortfolioSections({ projects, services, education, experiences, skills, technologies }: PortfolioSectionsProps) {
  return (
    <>
      {/* PROJECTS */}
      <section id="projects" className="section section-cream section-anchor">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <span className="eyebrow">02 / SELECTED WORK</span>
              <h2>Projects with<br /><span>purpose behind them.</span></h2>
            </div>
            <p className="heading-side-copy">A selection of development and design work that reflects my interests, learning, and ongoing growth.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-preview preview-${project.visual}`}>
                  <div className="preview-topbar">
                    <div className="preview-dots"><span /><span /><span /></div>
                    <span className="preview-address">my-project.local</span>
                    <span className="preview-menu">•••</span>
                  </div>
                  {project.visual === "gym" && (
                    <div className="gym-mockup">
                      <aside className="mock-sidebar">
                        <span className="mock-logo">MB GYM.</span>
                        <span className="mock-active">Overview</span>
                        <span>Members</span><span>Bookings</span><span>Updates</span>
                      </aside>
                      <div className="mock-main">
                        <span className="mock-kicker">MB GYM DASHBOARD</span>
                        <div className="mock-heading">Good morning!</div>
                        <div className="mock-stat-row"><span /><span /><span /></div>
                        <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                      </div>
                    </div>
                  )}
                  {project.visual === "website" && (
                    <div className="website-mockup">
                      <div className="website-nav"><span>STUDIO.</span><span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span></div>
                      <div className="website-hero">
                        <span>DESIGN WITH INTENTION</span>
                        <div>Ideas into<br />experiences.</div>
                        <span className="website-button">DISCOVER MORE ↗</span>
                      </div>
                      <div className="website-blocks"><span /><span /><span /></div>
                    </div>
                  )}
                  {project.visual === "portfolio" && (
                    <div className="portfolio-mockup">
                      <div className="portfolio-mini-nav"><span>JM.</span><span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span></div>
                      <div className="portfolio-mini-content">
                        <span>HELLO, I&apos;M A DEVELOPER</span>
                        <div>Making ideas<br />feel possible.</div>
                        <span className="portfolio-mini-link">EXPLORE MY WORK ↗</span>
                      </div>
                      <div className="portfolio-mini-footer"><span>DESIGN</span><span>DEVELOPMENT</span></div>
                    </div>
                  )}
                  <span className="project-preview-index">{project.number}</span>
                </div>
                <div className="project-info">
                  <div className="project-category">{project.category}</div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tags">
                    {project.technologies.map((tech: string) => <span key={tech}>{tech}</span>)}
                  </div>
                  <div className="project-footer">
                    <span>{project.note}</span>
                    <span className="project-arrow" aria-hidden="true">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="projects-note">Project previews are illustrative. Replace them with actual screenshots and add working demo or source-code links when available.</p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-light section-anchor">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">03 / WHAT I DO</span>
            <h2>Different skills,<br /><span>one thoughtful approach.</span></h2>
            <p className="section-description">I enjoy bringing design and development together to make digital experiences that are useful, clear, and approachable.</p>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">{service.number}</span>
                  <span className="service-icon">{service.icon}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <div className="service-tags">
                  {service.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="section section-cream section-anchor">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">04 / EDUCATION</span>
            <h2>Building my foundation<br /><span>one lesson at a time.</span></h2>
            <p className="section-description">My academic journey from elementary education to my Bachelor of Science in Information Technology.</p>
          </div>
          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.number}>
                <div className="timeline-marker"><span /></div>
                <div className="timeline-content">
                  <div className="timeline-meta"><span>{item.level}</span><span>{item.years}</span></div>
                  <h3>{item.school}</h3>
                  <p className="timeline-place">{item.program}</p>
                  <p>{item.description}</p>
                  {item.detail && <span className="education-detail">{item.detail}</span>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section section-light section-anchor">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">05 / EXPERIENCE</span>
            <h2>Learning through<br /><span>work and practice.</span></h2>
            <p className="section-description">My professional experiences have helped me strengthen communication, accuracy, and problem-solving skills.</p>
          </div>
          <div className="experience-list">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.number}>
                <div className="experience-index">{experience.number}</div>
                <div className="experience-main">
                  <span className="experience-type">{experience.type}</span>
                  <h3>{experience.role}</h3>
                  <p className="experience-company">{experience.company}</p>
                  <p className="experience-location">{experience.location}</p>
                  <p>{experience.description}</p>
                  <div className="project-tags">
                    {experience.tags.map((tag: string) => <span key={tag}>{tag}</span>)}
                  </div>
                </div>
                <div className="experience-aside">
                  <span>{experience.period}</span>
                  <span className="experience-aside-icon">↗</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section section-plum section-anchor">
        <div className="container">
          <div className="skills-heading">
            <span className="eyebrow eyebrow-light">06 / SKILLS &amp; STRENGTHS</span>
            <h2>A growing toolkit<br /><span>for meaningful work.</span></h2>
            <p>My skills continue to develop as I explore new tools, work on projects, and strengthen my technical foundations.</p>
          </div>
          <div className="skills-layout">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill}>
                  <span className="skill-row-number">{String(index + 1).padStart(2, "0")}</span>
                  <span>{skill}</span>
                  <span className="skill-row-arrow">↗</span>
                </div>
              ))}
            </div>
            <div className="skills-side">
              <div className="skills-orbit">
                <span className="orbit-ring orbit-ring-one" />
                <span className="orbit-ring orbit-ring-two" />
                <span className="orbit-center">J.</span>
                <span className="orbit-label orbit-label-one">DESIGN</span>
                <span className="orbit-label orbit-label-two">BUILD</span>
                <span className="orbit-label orbit-label-three">LEARN</span>
              </div>
              <p>Good work is a process: explore, build, review, and keep improving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY STACK */}
      <section id="tech-stack" className="section section-cream section-anchor">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <span className="eyebrow">07 / MY TOOLKIT</span>
              <h2>Technologies I&apos;m<br /><span>working with.</span></h2>
            </div>
            <p className="heading-side-copy">A selection of tools related to my development and design interests. My level of experience varies by technology.</p>
          </div>
          <div className="tech-grid">
            {technologies.map((technology) => (
              <div className="tech-item" key={technology.name}>
                <span className="tech-symbol">{technology.initials}</span>
                <div>
                  <h3>{technology.name}</h3>
                  <p>{technology.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="edit-note">Remove tools you have not used, or mark them as technologies you are currently learning.</p>
        </div>
      </section>

      {/* LEARNING */}
      <section id="learning" className="section section-light section-anchor">
        <div className="container learning-content">
          <div className="learning-copy">
            <span className="eyebrow">08 / WHAT&apos;S NEXT</span>
            <h2>Always learning.<br /><span>Always building.</span></h2>
            <p>I want to keep improving my development fundamentals, build more complete projects, and become more confident in designing digital experiences that solve real problems.</p>
            <a href="#projects" className="text-link">Revisit my projects <span>↗</span></a>
          </div>
          <div className="learning-list">
            <article className="learning-item">
              <span className="learning-dot" />
              <div><h3>Responsive Development</h3><p>Building interfaces for mobile, tablet, and desktop.</p></div>
              <span className="learning-arrow">↗</span>
            </article>
            <article className="learning-item">
              <span className="learning-dot" />
              <div><h3>Modern Web Technologies</h3><p>Strengthening my skills with contemporary web tools.</p></div>
              <span className="learning-arrow">↗</span>
            </article>
            <article className="learning-item">
              <span className="learning-dot" />
              <div><h3>User-Centered Design</h3><p>Making interfaces more intuitive and accessible.</p></div>
              <span className="learning-arrow">↗</span>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <div>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>
          <h2>Let&apos;s create something<br /><span>meaningful.</span></h2>
          <p>I&apos;m open to connecting, sharing ideas, and exploring opportunities to learn and grow through real projects.</p>
        </div>
        <a href="#contact" className="button button-primary">Get in touch <span>↗</span></a>
      </section>
    </>
  );
}
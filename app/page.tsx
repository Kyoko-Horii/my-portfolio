
"use client";

import { FormEvent, useState } from "react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const projects = [
  {
    number: "01",
    category: "ANDROID APPLICATION",
    title: "Gym Management System",
    description:
      "A gym management application focused on organizing member information, instructor details, bookings, and announcements.",
    technologies: ["Kotlin", "PHP", "MySQL", "XML"],
    visual: "gym",
    note: "Application Development",
  },
  {
    number: "02",
    category: "WEB DESIGN",
    title: "Responsive Website Design",
    description:
      "A website design project focused on clear content hierarchy, organized layouts, responsive sections, and a consistent visual identity.",
    technologies: ["Figma", "UI Design", "Wireframes", "CSS"],
    visual: "website",
    note: "UI / UX Design",
  },
  {
    number: "03",
    category: "PERSONAL WEBSITE",
    title: "Personal Portfolio",
    description:
      "A personal portfolio designed to introduce my background, showcase selected projects, and make it easy to get in touch.",
    technologies: ["Next.js", "React", "TypeScript", "CSS"],
    visual: "portfolio",
    note: "Web Development",
  },
];

const services = [
  {
    number: "01",
    icon: "</>",
    title: "Web Development",
    description:
      "Creating organized and responsive web pages with attention to structure, usability, and maintainable code.",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    number: "02",
    icon: "✳",
    title: "UI & Web Design",
    description:
      "Planning website layouts and wireframes that help content feel clear, consistent, and easy to navigate.",
    tags: ["Figma", "Wireframes", "UI Design"],
  },
  {
    number: "03",
    icon: "⌘",
    title: "Application Development",
    description:
      "Working on application interfaces, backend connections, and database-driven features for practical projects.",
    tags: ["Kotlin", "PHP", "MySQL"],
  },

];

const technologies = [
  { initials: "HT", name: "HTML", detail: "Web structure" },
  { initials: "CS", name: "CSS", detail: "Styling and layouts" },
  { initials: "JS", name: "JavaScript", detail: "Web interactions" },
  { initials: "TS", name: "TypeScript", detail: "Typed JavaScript" },
  { initials: "RE", name: "React", detail: "UI development" },
  { initials: "NX", name: "Next.js", detail: "React framework" },
  { initials: "KT", name: "Kotlin", detail: "Android development" },
  { initials: "PH", name: "PHP", detail: "Backend development" },
  { initials: "DB", name: "MySQL", detail: "Database management" },
  { initials: "FG", name: "Figma", detail: "Design and wireframes" },
];

const skills = [
  "Responsive Web Design",
  "UI Layout Planning",
  "Wireframing",
  "Frontend Development",
  "Android UI Development",
  "Database Fundamentals",
  "Problem Solving",
  "Team Collaboration",
];

const education = [
  {
    number: "01",
    level: "COLLEGE",
    years: "2022 – 2026",
    school: "Carlos Hilado Memorial State University",
    program: "Bachelor of Science in Information Technology",
    description:
      "Completed a degree in Information Technology, developing knowledge of programming, application development, databases, and web design.",
    detail: "Graduated June 11, 2026",
  },
  {
    number: "02",
    level: "SENIOR HIGH SCHOOL",
    years: "2020 – 2022",
    school: "Himamaylan National High School",
    program: "Senior High School",
    description:
      "Completed senior high school education and continued building the academic foundation for further studies.",
    detail: "",
  },
  {
    number: "03",
    level: "JUNIOR HIGH SCHOOL",
    years: "2016 – 2020",
    school: "Stella Maris Academy",
    program: "Junior High School",
    description:
      "Completed junior high school and developed foundational academic and personal skills.",
    detail: "",
  },
  {
    number: "04",
    level: "ELEMENTARY",
    years: "2010 – 2016",
    school: "Don Remigio M. Limsiaco Elementary School",
    program: "Elementary Education",
    description:
      "Completed elementary education and established the foundation for my academic journey.",
    detail: "DRMLES",
  },
];

const experiences = [
  {
    number: "01",
    type: "CUSTOMER SERVICE",
    role: "Customer Service",
    company: "Algorithm Computer Services",
    location: "Kabankalan Branch",
    description:
      "Gained customer service experience by assisting customers, communicating clearly, responding to inquiries, and helping provide a positive customer experience.",
    tags: ["Customer Assistance", "Communication", "Problem Solving"],
    period: "WORK EXPERIENCE",
  },
  {
    number: "02",
    type: "REMOTE · PART-TIME",
    role: "Video Data Annotation",
    company: "Remotasks",
    location: "Remote",
    description:
      "Worked on video annotation tasks involving robots performing hand-related actions. The work involved observing video footage and identifying or labeling actions accurately.",
    tags: ["Video Annotation", "Attention to Detail", "Action Recognition"],
    period: "REMOTE WORK",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "");
    const email = String(formData.get("email") || "");
    const subject = String(
      formData.get("subject") || "Portfolio inquiry"
    );
    const message = String(formData.get("message") || "");

    const body = `Hi Jhelyn,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
    const mailto = `mailto:jhelynmedinaa@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  }

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText("jhelynmedinaa@gmail.com");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = "mailto:jhelynmedinaa@gmail.com";
    }
  }

  return (
    <main>
      {/* NAVIGATION */}
      <header className="site-header">
        <nav className="navbar container" aria-label="Main navigation">
          <a
            href="#home"
            className="brand"
            onClick={() => setMenuOpen(false)}
            aria-label="Jhelyn Medina home"
          >
            <span className="brand-mark">JM</span>
            <span className="brand-name">
              Jhelyn Medina<span>.</span>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>

          <div className={`nav-links ${menuOpen ? "nav-links-open" : ""}`}>
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}

            <a
              href="#contact"
              className="nav-cta"
              onClick={() => setMenuOpen(false)}
            >
              Let&apos;s talk <span>↗</span>
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section id="home" className="hero-section section-anchor">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="availability">
              <span className="availability-dot" />
              <span>WELCOME TO MY PORTFOLIO</span>
            </div>

            <p className="hero-intro">Hello, I&apos;m Jhelyn Medina.</p>

            <h1>
              I build digital
              <br />
              experiences with
              <br />
              <span>purpose &amp; creativity.</span>
            </h1>

            <p className="hero-description">
              I&apos;m an Information Technology graduate interested in
              web development, application development, and thoughtful
              user interface design. I enjoy turning ideas into useful
              digital experiences while learning something new with
              every project.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="button button-primary">
                Explore my work <span>↗</span>
              </a>

              <a href="#about" className="button button-secondary">
                More about me <span>↓</span>
              </a>
            </div>

            <div className="hero-meta">
              <div>
                <span className="hero-meta-label">FOCUS</span>
                <span className="hero-meta-value">
                  Development &amp; Design
                </span>
              </div>

              <div>
                <span className="hero-meta-label">APPROACH</span>
                <span className="hero-meta-value">
                  Curious by nature
                </span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-top">
              <span>PORTFOLIO / 2026</span>
              <span>01 — 11</span>
            </div>

            <div className="profile-frame">
              <div className="profile-backdrop" />

              <img
                src="/profile.jpg"
                alt="Portrait of Jhelyn Medina"
                className="profile-image"
              />

              <div className="profile-label">
                <span className="profile-label-small">
                  
                </span>
                <span className="profile-label-name">
                  
                </span>
              </div>
            </div>

            <div className="hero-sticker">
              <span className="sticker-star">!💤</span>
              <span></span>
              <span></span>
              <span></span>
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
            <h2>
              A little about me,
              <br />
              <span>and what drives me.</span>
            </h2>
          </div>

          <div className="about-grid">
            <div className="about-lead">
              <span className="about-quote-mark">“</span>
              <p>
                I believe good digital work starts with curiosity,
                thoughtful planning, and a willingness to keep learning.
              </p>
            </div>

            <div className="about-copy">
              <p>
                I&apos;m Jhelyn P. Medina, an Information Technology
                graduate who enjoys exploring the connection between
                technology, design, and everyday problems. I like
                working on projects that challenge me to think carefully
                about how something looks and how it works.
              </p>

              <p>
                My experience includes customer service and remote video
                annotation, alongside my academic and personal projects.
                These experiences have helped me develop communication,
                attention to detail, adaptability, and problem-solving
                skills.
              </p>

              <a href="#contact" className="text-link">
                Let&apos;s connect <span>↗</span>
              </a>
            </div>
          </div>

          <div className="about-facts">
            <div className="about-fact">
              <span className="fact-number">01</span>
              <h3>Curiosity</h3>
              <p>
                Exploring new tools, ideas, and ways to solve problems.
              </p>
            </div>

            <div className="about-fact">
              <span className="fact-number">02</span>
              <h3>Creativity</h3>
              <p>
                Bringing clarity and consistency to visual experiences.
              </p>
            </div>

            <div className="about-fact">
              <span className="fact-number">03</span>
              <h3>Growth</h3>
              <p>
                Learning from feedback and improving with every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section section-cream section-anchor">
        <div className="container">
          <div className="section-heading heading-row">
            <div>
              <span className="eyebrow">02 / SELECTED WORK</span>
              <h2>
                Projects with
                <br />
                <span>purpose behind them.</span>
              </h2>
            </div>

            <p className="heading-side-copy">
              A selection of development and design work that reflects
              my interests, learning, and ongoing growth.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-preview preview-${project.visual}`}>
                  <div className="preview-topbar">
                    <div className="preview-dots">
                      <span />
                      <span />
                      <span />
                    </div>

                    <span className="preview-address">
                      my-project.local
                    </span>

                    <span className="preview-menu">•••</span>
                  </div>

                  {project.visual === "gym" && (
                    <div className="gym-mockup">
                      <aside className="mock-sidebar">
                        <span className="mock-logo">FIT.</span>
                        <span className="mock-active">Overview</span>
                        <span>Members</span>
                        <span>Bookings</span>
                        <span>Updates</span>
                      </aside>

                      <div className="mock-main">
                        <span className="mock-kicker">
                          GYM DASHBOARD
                        </span>

                        <div className="mock-heading">
                          Good morning!
                        </div>

                        <div className="mock-stat-row">
                          <span />
                          <span />
                          <span />
                        </div>

                        <div className="mock-chart">
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                          <i />
                        </div>
                      </div>
                    </div>
                  )}

                  {project.visual === "website" && (
                    <div className="website-mockup">
                      <div className="website-nav">
                        <span>STUDIO.</span>
                        <span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span>
                      </div>

                      <div className="website-hero">
                        <span>DESIGN WITH INTENTION</span>
                        <div>
                          Ideas into
                          <br />
                          experiences.
                        </div>
                        <span className="website-button">
                          DISCOVER MORE ↗
                        </span>
                      </div>

                      <div className="website-blocks">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}

                  {project.visual === "portfolio" && (
                    <div className="portfolio-mockup">
                      <div className="portfolio-mini-nav">
                        <span>J.</span>
                        <span>ABOUT&nbsp;&nbsp; WORK&nbsp;&nbsp; CONTACT</span>
                      </div>

                      <div className="portfolio-mini-content">
                        <span>HELLO, I&apos;M A DEVELOPER</span>
                        <div>
                          Making ideas
                          <br />
                          feel possible.
                        </div>
                        <span className="portfolio-mini-link">
                          EXPLORE MY WORK ↗
                        </span>
                      </div>

                      <div className="portfolio-mini-footer">
                        <span>DESIGN</span>
                        <span>DEVELOPMENT</span>
                      </div>
                    </div>
                  )}

                  <span className="project-preview-index">
                    {project.number}
                  </span>
                </div>

                <div className="project-info">
                  <div className="project-category">
                    {project.category}
                  </div>

                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-footer">
                    <span>{project.note}</span>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="projects-note">
            Project previews are illustrative. Replace them with actual
            screenshots and add working demo or source-code links when
            available.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section section-light section-anchor">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">03 / WHAT I DO</span>
            <h2>
              Different skills,
              <br />
              <span>one thoughtful approach.</span>
            </h2>

            <p className="section-description">
              I enjoy bringing design and development together to make
              digital experiences that are useful, clear, and approachable.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-top">
                  <span className="service-number">
                    {service.number}
                  </span>
                  <span className="service-icon">{service.icon}</span>
                </div>

                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <div className="service-tags">
                  {service.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
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
            <h2>
              Building my foundation
              <br />
              <span>one lesson at a time.</span>
            </h2>

            <p className="section-description">
              My academic journey from elementary education to my
              Bachelor of Science in Information Technology.
            </p>
          </div>

          <div className="timeline">
            {education.map((item) => (
              <article className="timeline-item" key={item.number}>
                <div className="timeline-marker">
                  <span />
                </div>

                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span>{item.level}</span>
                    <span>{item.years}</span>
                  </div>

                  <h3>{item.school}</h3>
                  <p className="timeline-place">{item.program}</p>
                  <p>{item.description}</p>

                  {item.detail && (
                    <span className="education-detail">
                      {item.detail}
                    </span>
                  )}
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
            <h2>
              Learning through
              <br />
              <span>work and practice.</span>
            </h2>

            <p className="section-description">
              My professional experiences have helped me strengthen
              communication, accuracy, and problem-solving skills.
            </p>
          </div>

          <div className="experience-list">
            {experiences.map((experience) => (
              <article
                className="experience-card"
                key={experience.number}
              >
                <div className="experience-index">
                  {experience.number}
                </div>

                <div className="experience-main">
                  <span className="experience-type">
                    {experience.type}
                  </span>

                  <h3>{experience.role}</h3>
                  <p className="experience-company">
                    {experience.company}
                  </p>

                  <p className="experience-location">
                    {experience.location}
                  </p>

                  <p>{experience.description}</p>

                  <div className="project-tags">
                    {experience.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
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
            <span className="eyebrow eyebrow-light">
              06 / SKILLS &amp; STRENGTHS
            </span>

            <h2>
              A growing toolkit
              <br />
              <span>for meaningful work.</span>
            </h2>

            <p>
              My skills continue to develop as I explore new tools,
              work on projects, and strengthen my technical foundations.
            </p>
          </div>

          <div className="skills-layout">
            <div className="skills-list">
              {skills.map((skill, index) => (
                <div className="skill-row" key={skill}>
                  <span className="skill-row-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

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
                <span className="orbit-label orbit-label-one">
                  DESIGN
                </span>
                <span className="orbit-label orbit-label-two">
                  BUILD
                </span>
                <span className="orbit-label orbit-label-three">
                  LEARN
                </span>
              </div>

              <p>
                Good work is a process: explore, build, review, and keep
                improving.
              </p>
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
              <h2>
                Technologies I&apos;m
                <br />
                <span>working with.</span>
              </h2>
            </div>

            <p className="heading-side-copy">
              A selection of tools related to my development and design
              interests. My level of experience varies by technology.
            </p>
          </div>

          <div className="tech-grid">
            {technologies.map((technology) => (
              <div className="tech-item" key={technology.name}>
                <span className="tech-symbol">
                  {technology.initials}
                </span>

                <div>
                  <h3>{technology.name}</h3>
                  <p>{technology.detail}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="edit-note">
            Remove tools you have not used, or mark them as technologies
            you are currently learning.
          </p>
        </div>
      </section>

      {/* LEARNING */}
      <section id="learning" className="section section-light section-anchor">
        <div className="container learning-content">
          <div className="learning-copy">
            <span className="eyebrow">08 / WHAT&apos;S NEXT</span>

            <h2>
              Always learning.
              <br />
              <span>Always building.</span>
            </h2>

            <p>
              I want to keep improving my development fundamentals,
              build more complete projects, and become more confident
              in designing digital experiences that solve real problems.
            </p>

            <a href="#projects" className="text-link">
              Revisit my projects <span>↗</span>
            </a>
          </div>

          <div className="learning-list">
            <article className="learning-item">
              <span className="learning-dot" />
              <div>
                <h3>Responsive Development</h3>
                <p>
                  Building interfaces for mobile, tablet, and desktop.
                </p>
              </div>
              <span className="learning-arrow">↗</span>
            </article>

            <article className="learning-item">
              <span className="learning-dot" />
              <div>
                <h3>Modern Web Technologies</h3>
                <p>
                  Strengthening my skills with contemporary web tools.
                </p>
              </div>
              <span className="learning-arrow">↗</span>
            </article>

            <article className="learning-item">
              <span className="learning-dot" />
              <div>
                <h3>User-Centered Design</h3>
                <p>
                  Making interfaces more intuitive and accessible.
                </p>
              </div>
              <span className="learning-arrow">↗</span>
            </article>
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="contact-cta">
        <div>
          <span className="eyebrow">HAVE A PROJECT IN MIND?</span>

          <h2>
            Let&apos;s create something
            <br />
            <span>meaningful.</span>
          </h2>

          <p>
            I&apos;m open to connecting, sharing ideas, and exploring
            opportunities to learn and grow through real projects.
          </p>
        </div>

        <a href="#contact" className="button button-primary">
          Get in touch <span>↗</span>
        </a>
      </section>

      {/* CONTACT */}
      <section id="contact" className="section section-cream section-anchor">
        <div className="container contact-grid">
          <div className="contact-copy">
            <span className="eyebrow">09 / CONTACT</span>

            <h2>
              Have a good idea?
              <br />
              <span>Let&apos;s talk.</span>
            </h2>

            <p>
              Whether you want to discuss a project, share an opportunity,
              or simply connect, feel free to send me a message.
            </p>

            <div className="contact-email">
              <span className="contact-email-label">EMAIL ME AT</span>

              <button
                type="button"
                onClick={copyEmail}
                className="email-copy"
              >
                jhelynmedinaa@gmail.com
                <span>{copied ? "Copied!" : "Copy ↗"}</span>
              </button>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/Kyoko-Horii"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <span>↗</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <span>↗</span>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleContactSubmit}>
            <div className="form-heading">
              <h3>Send a message</h3>
              <p>Fill in the details below to start an email.</p>
            </div>

            <label htmlFor="name">Your name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              autoComplete="name"
              required
            />

            <label htmlFor="email">Your email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              required
            />

            <label htmlFor="subject">Subject</label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="What would you like to discuss?"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Write your message here..."
              required
            />

            <button
              type="submit"
              className="button button-primary form-submit"
            >
              Open email app <span>↗</span>
            </button>

            <p className="form-note">
              This form opens your default email application. It does
              not send messages directly from the website.
            </p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container footer-top">
          <a href="#home" className="brand footer-brand">
            <span className="brand-mark">JM</span>
            <span className="brand-name">
              Jhelyn Medina<span></span>
            </span>
          </a>

          <p>Designed with intention. Built while learning.</p>

          <a href="#home" className="back-to-top">
            Back to top ↑
          </a>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Jhelyn P. Medina. All rights
            reserved.
          </span>
          <span>MADE WITH CURIOSITY &amp; CARE</span>
        </div>
      </footer>
    </main>
  );
}

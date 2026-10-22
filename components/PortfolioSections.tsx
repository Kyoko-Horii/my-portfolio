type PortfolioSectionsProps = {
  projects: any[];
  services: any[];
  education: any[];
  experiences: any[];
  skills: { name: string; icon: string }[];
  technologies: any[];
  learning: any[];
};

/* ---------- ICON LIBRARY ---------- */

type IconProps = { size?: number };

const ArrowUpRight = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M7 17L17 7" />
    <path d="M8 7h9v9" />
  </svg>
);

/* Services */
const IconCode = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconPalette = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
    <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
    <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
    <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

const IconDevice = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <path d="M12 18h.01" />
  </svg>
);

/* Education */
const IconGraduation = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 10L12 5 2 10l10 5 10-5z" />
    <path d="M6 12v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5" />
    <path d="M22 10v6" />
  </svg>
);

const IconBook = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const IconNotebook = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 3v18" />
  </svg>
);

const IconSchool = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 21h18" />
    <path d="M5 21V7l7-4 7 4v14" />
    <path d="M9 21v-6h6v6" />
    <path d="M9 9h.01M15 9h.01M9 13h.01M15 13h.01" />
  </svg>
);

/* Experience */
const IconHeadset = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
  </svg>
);

const IconVideo = ({ size = 20 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="6" width="14" height="12" rx="2" />
    <path d="M22 8l-6 4 6 4V8z" />
  </svg>
);

/* Skills */
const IconLayout = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M3 9h18M9 21V9" />
  </svg>
);

const IconGrid = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const IconFrame = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 6H2M22 18H2M6 2v20M18 2v20" />
  </svg>
);

const IconDatabase = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
    <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
  </svg>
);

const IconPuzzle = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M19.4 10a2 2 0 0 0 0-4h-1.5V4a2 2 0 0 0-2-2h-2v1.5a2 2 0 0 1-4 0V2h-2a2 2 0 0 0-2 2v1.5H4a2 2 0 0 0-2 2v2h1.5a2 2 0 0 1 0 4H2v2a2 2 0 0 0 2 2h1.5V19a2 2 0 0 0 2 2h2v-1.5a2 2 0 0 1 4 0V21h2a2 2 0 0 0 2-2v-1.5h1.5a2 2 0 0 0 2-2v-2h-1.5a2 2 0 0 1 0-4H20v-1.5z" />
  </svg>
);

const IconUsers = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

/* Technologies */
const IconHtml = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const IconCss = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 2l10 5-1.5 13.5L12 22 3.5 20.5 2 7z" />
    <path d="M8 9h8M9 13h6M10 17h4" />
  </svg>
);

const IconJs = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M10 17c0 1.5-1 2-2 2s-2-.5-2-2M15 15c0 2 1 2.5 2.5 2.5S20 17 20 15.5c0-2.5-5-2.5-5-5 0-1.5 1-2.5 2.5-2.5S20 9 20 10.5" />
  </svg>
);

const IconTs = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M7 10h6M10 10v7M15 15c0 2 1 2.5 2.5 2.5S20 17 20 15.5c0-2.5-5-2.5-5-5 0-1.5 1-2.5 2.5-2.5S20 9 20 10.5" />
  </svg>
);

const IconReact = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="2" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(120 12 12)" />
  </svg>
);

const IconNext = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 8v8M15 8l-4 8M15 8v8" />
  </svg>
);

const IconKotlin = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 3h18L12 12l9 9H3V3z" />
  </svg>
);

const IconPhp = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="12" rx="10" ry="6" />
    <path d="M8 10v6M8 10h2a2 2 0 0 1 0 4H8M14 10v6M14 10h2M14 13h2" />
  </svg>
);

const IconMysql = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5" />
    <path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
  </svg>
);

const IconFigma = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M8 2h4v6H8a3 3 0 0 1 0-6z" />
    <path d="M12 2h4a3 3 0 0 1 0 6h-4V2z" />
    <path d="M8 8h4v6H8a3 3 0 0 1 0-6z" />
    <path d="M12 8h4a3 3 0 0 1 0 6h-4V8z" />
    <path d="M8 14h4v6H8a3 3 0 0 1 0-6z" />
  </svg>
);

/* Learning */
const IconResponsive = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <rect x="8" y="19" width="8" height="2" rx="1" />
  </svg>
);

const IconSparkles = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
    <path d="M19 17l.9 2.1L22 20l-2.1.9L19 23l-.9-2.1L16 20l2.1-.9L19 17z" />
  </svg>
);

const IconUser = ({ size = 18 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2" />
  </svg>
);

/* Icon dispatcher */
function renderIcon(name: string, size = 20) {
  const map: Record<string, (p: IconProps) => JSX.Element> = {
    code: IconCode,
    palette: IconPalette,
    device: IconDevice,
    graduation: IconGraduation,
    book: IconBook,
    notebook: IconNotebook,
    school: IconSchool,
    headset: IconHeadset,
    video: IconVideo,
    layout: IconLayout,
    grid: IconGrid,
    frame: IconFrame,
    database: IconDatabase,
    puzzle: IconPuzzle,
    users: IconUsers,
    html: IconHtml,
    css: IconCss,
    js: IconJs,
    ts: IconTs,
    react: IconReact,
    next: IconNext,
    kotlin: IconKotlin,
    php: IconPhp,
    mysql: IconMysql,
    figma: IconFigma,
    responsive: IconResponsive,
    sparkles: IconSparkles,
    user: IconUser,
  };
  const Cmp = map[name] || IconCode;
  return <Cmp size={size} />;
}

export default function PortfolioSections({ projects, services, education, experiences, skills, technologies, learning }: PortfolioSectionsProps) {
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
                    <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={16} /></span>
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
                  <span className="service-icon">{renderIcon(service.icon, 20)}</span>
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
                <div className="timeline-marker">
                  <span className="timeline-marker-icon">{renderIcon(item.icon, 16)}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-meta">
                    <span className="timeline-level">
                      {renderIcon(item.icon, 13)}
                      {item.level}
                    </span>
                    <span>{item.years}</span>
                  </div>
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
                <div className="experience-icon-wrap">
                  <span className="experience-icon">{renderIcon(experience.icon, 22)}</span>
                  <span className="experience-index">{experience.number}</span>
                </div>
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
                  <span className="experience-aside-icon"><ArrowUpRight size={22} /></span>
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
                <div className="skill-row" key={skill.name}>
                  <span className="skill-row-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="skill-row-name">
                    <span className="skill-row-icon">{renderIcon(skill.icon, 16)}</span>
                    {skill.name}
                  </span>
                  <span className="skill-row-arrow"><ArrowUpRight size={15} /></span>
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
                <span className="tech-symbol">{renderIcon(technology.icon, 20)}</span>
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
            <a href="#projects" className="text-link">
              Revisit my projects
              <ArrowUpRight size={14} />
            </a>
          </div>
          <div className="learning-list">
            {learning.map((item) => (
              <article className="learning-item" key={item.title}>
                <span className="learning-icon">{renderIcon(item.icon, 16)}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <span className="learning-arrow"><ArrowUpRight size={16} /></span>
              </article>
            ))}
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
        <a href="#contact" className="button button-primary">
          Get in touch
          <ArrowUpRight size={15} />
        </a>
      </section>
    </>
  );
}
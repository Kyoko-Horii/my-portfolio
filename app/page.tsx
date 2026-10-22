import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import PortfolioSections from "@/components/PortfolioSections";
import Contact from "@/components/Contact";

// --- ALL YOUR DATA LIVES HERE ---
export const projects = [
  { number: "01", category: "ANDROID APPLICATION", title: "Gym Management System", description: "A gym management application focused on organizing member information, instructor details, bookings, and announcements.", technologies: ["Kotlin", "PHP", "MySQL", "XML"], visual: "gym", note: "Application Development" },
  { number: "02", category: "WEB DESIGN", title: "Responsive Website Design", description: "A website design project focused on clear content hierarchy, organized layouts, responsive sections, and a consistent visual identity.", technologies: ["Figma", "UI Design", "Wireframes", "CSS"], visual: "website", note: "UI / UX Design" },
  { number: "03", category: "PERSONAL WEBSITE", title: "Personal Portfolio", description: "A personal portfolio designed to introduce my background, showcase selected projects, and make it easy to get in touch.", technologies: ["Next.js", "React", "TypeScript", "CSS"], visual: "portfolio", note: "Web Development" },
];

export const services = [
  { number: "01", icon: "</>", title: "Web Development", description: "Creating organized and responsive web pages with attention to structure, usability, and maintainable code.", tags: ["HTML", "CSS", "JavaScript"] },
  { number: "02", icon: "✳", title: "UI & Web Design", description: "Planning website layouts and wireframes that help content feel clear, consistent, and easy to navigate.", tags: ["Figma", "Wireframes", "UI Design"] },
  { number: "03", icon: "⌘", title: "Application Development", description: "Working on application interfaces, backend connections, and database-driven features for practical projects.", tags: ["Kotlin", "PHP", "MySQL"] },
];

export const education = [
  { number: "01", level: "COLLEGE", years: "2022 – 2026", school: "Carlos Hilado Memorial State University", program: "Bachelor of Science in Information Technology", description: "Completed a degree in Information Technology, developing knowledge of programming, application development, databases, and web design.", detail: "Graduated June 11, 2026" },
  { number: "02", level: "SENIOR HIGH SCHOOL", years: "2020 – 2022", school: "Himamaylan National High School", program: "Senior High School", description: "Completed senior high school education and continued building the academic foundation for further studies.", detail: "" },
  { number: "03", level: "JUNIOR HIGH SCHOOL", years: "2016 – 2020", school: "Stella Maris Academy", program: "Junior High School", description: "Completed junior high school and developed foundational academic and personal skills.", detail: "" },
  { number: "04", level: "ELEMENTARY", years: "2010 – 2016", school: "Don Remigio M. Limsiaco Elementary School", program: "Elementary Education", description: "Completed elementary education and established the foundation for my academic journey.", detail: "DRMLES" },
];

export const experiences = [
  { number: "01", type: "CUSTOMER SERVICE", role: "Customer Service", company: "Algorithm Computer Services", location: "Kabankalan Branch", description: "Gained customer service experience by assisting customers, communicating clearly, responding to inquiries, and helping provide a positive customer experience.", tags: ["Customer Assistance", "Communication", "Problem Solving"], period: "WORK EXPERIENCE" },
  { number: "02", type: "REMOTE · PART-TIME", role: "Video Data Annotation", company: "Remotasks", location: "Remote", description: "Worked on video annotation tasks involving robots performing hand-related actions. The work involved observing video footage and identifying or labeling actions accurately.", tags: ["Video Annotation", "Attention to Detail", "Action Recognition"], period: "REMOTE WORK" },
];

export const skills = ["Responsive Web Design", "UI Layout Planning", "Wireframing", "Frontend Development", "Android UI Development", "Database Fundamentals", "Problem Solving", "Team Collaboration"];

export const technologies = [
  { initials: "HT", name: "HTML", detail: "Web structure" }, { initials: "CS", name: "CSS", detail: "Styling and layouts" }, { initials: "JS", name: "JavaScript", detail: "Web interactions" }, { initials: "TS", name: "TypeScript", detail: "Typed JavaScript" }, { initials: "RE", name: "React", detail: "UI development" }, { initials: "NX", name: "Next.js", detail: "React framework" }, { initials: "KT", name: "Kotlin", detail: "Android development" }, { initials: "PH", name: "PHP", detail: "Backend development" }, { initials: "DB", name: "MySQL", detail: "Database management" }, { initials: "FG", name: "Figma", detail: "Design and wireframes" }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroAbout />
      <PortfolioSections 
        projects={projects} 
        services={services} 
        education={education} 
        experiences={experiences} 
        skills={skills} 
        technologies={technologies} 
      />
      <Contact />
      <Footer />
    </main>
  );
}
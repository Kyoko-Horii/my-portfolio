import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import PortfolioSections from "@/components/PortfolioSections";
import Contact from "@/components/Contact";

export const projects = [
  { number: "01", category: "ANDROID APPLICATION", title: "Gym Management System", description: "A gym management application focused on organizing member information, instructor details, bookings, and announcements.", technologies: ["Kotlin", "PHP", "MySQL", "XML"], visual: "gym", note: "Application Development" },
  { number: "02", category: "WEB DESIGN", title: "Responsive Website Design", description: "A website design project focused on clear content hierarchy, organized layouts, responsive sections, and a consistent visual identity.", technologies: ["Figma", "UI Design", "Wireframes", "CSS"], visual: "website", note: "UI / UX Design" },
  { number: "03", category: "PERSONAL WEBSITE", title: "Personal Portfolio", description: "A personal portfolio designed to introduce my background, showcase selected projects, and make it easy to get in touch.", technologies: ["Next.js", "React", "TypeScript", "CSS"], visual: "portfolio", note: "Web Development" },
];

export const services = [
  { number: "01", icon: "code", title: "Web Development", description: "Creating organized and responsive web pages with attention to structure, usability, and maintainable code.", tags: ["HTML", "CSS", "JavaScript"] },
  { number: "02", icon: "palette", title: "UI & Web Design", description: "Planning website layouts and wireframes that help content feel clear, consistent, and easy to navigate.", tags: ["Figma", "Wireframes", "UI Design"] },
  { number: "03", icon: "device", title: "Application Development", description: "Working on application interfaces, backend connections, and database-driven features for practical projects.", tags: ["Kotlin", "PHP", "MySQL"] },
];

export const education = [
  { number: "01", level: "COLLEGE", years: "2022 – 2026", school: "Carlos Hilado Memorial State University", program: "Bachelor of Science in Information Technology", description: "Completed a degree in Information Technology, developing knowledge of programming, application development, databases, and web design.", detail: "Graduated June 11, 2026", icon: "graduation" },
  { number: "02", level: "SENIOR HIGH SCHOOL", years: "2020 – 2022", school: "Himamaylan National High School", program: "Senior High School", description: "Completed senior high school education and continued building the academic foundation for further studies.", detail: "", icon: "book" },
  { number: "03", level: "JUNIOR HIGH SCHOOL", years: "2016 – 2020", school: "Stella Maris Academy", program: "Junior High School", description: "Completed junior high school and developed foundational academic and personal skills.", detail: "", icon: "notebook" },
  { number: "04", level: "ELEMENTARY", years: "2010 – 2016", school: "Don Remigio M. Limsiaco Elementary School", program: "Elementary Education", description: "Completed elementary education and established the foundation for my academic journey.", detail: "DRMLES", icon: "school" },
];

export const experiences = [
  { number: "01", type: "CUSTOMER SERVICE", role: "Customer Service", company: "Algorithm Computer Services", location: "Kabankalan Branch", description: "Gained customer service experience by assisting customers, communicating clearly, responding to inquiries, and helping provide a positive customer experience.", tags: ["Customer Assistance", "Communication", "Problem Solving"], period: "WORK EXPERIENCE", icon: "headset" },
  { number: "02", type: "REMOTE · PART-TIME", role: "Video Data Annotation", company: "Remotasks", location: "Remote", description: "Worked on video annotation tasks involving robots performing hand-related actions. The work involved observing video footage and identifying or labeling actions accurately.", tags: ["Video Annotation", "Attention to Detail", "Action Recognition"], period: "REMOTE WORK", icon: "video" },
];

export const skills = [
  { name: "Responsive Web Design", icon: "layout" },
  { name: "UI Layout Planning", icon: "grid" },
  { name: "Wireframing", icon: "frame" },
  { name: "Frontend Development", icon: "code" },
  { name: "Android UI Development", icon: "device" },
  { name: "Database Fundamentals", icon: "database" },
  { name: "Problem Solving", icon: "puzzle" },
  { name: "Team Collaboration", icon: "users" },
];

export const technologies = [
  { initials: "HT", name: "HTML", detail: "Web structure", icon: "html" },
  { initials: "CS", name: "CSS", detail: "Styling and layouts", icon: "css" },
  { initials: "JS", name: "JavaScript", detail: "Web interactions", icon: "js" },
  { initials: "TS", name: "TypeScript", detail: "Typed JavaScript", icon: "ts" },
  { initials: "RE", name: "React", detail: "UI development", icon: "react" },
  { initials: "NX", name: "Next.js", detail: "React framework", icon: "next" },
  { initials: "KT", name: "Kotlin", detail: "Android development", icon: "kotlin" },
  { initials: "PH", name: "PHP", detail: "Backend development", icon: "php" },
  { initials: "DB", name: "MySQL", detail: "Database management", icon: "mysql" },
  { initials: "FG", name: "Figma", detail: "Design and wireframes", icon: "figma" },
];

export const learning = [
  { title: "Responsive Development", description: "Building interfaces for mobile, tablet, and desktop.", icon: "responsive" },
  { title: "Modern Web Technologies", description: "Strengthening my skills with contemporary web tools.", icon: "sparkles" },
  { title: "User-Centered Design", description: "Making interfaces more intuitive and accessible.", icon: "user" },
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
        learning={learning}
      />
      <Contact />
      <Footer />
    </main>
  );
}
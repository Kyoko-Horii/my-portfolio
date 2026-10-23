import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroAbout from "@/components/HeroAbout";
import PortfolioSections from "@/components/PortfolioSections";
import Contact from "@/components/Contact";

export const projects = [
  { number: "01", category: "ANDROID APPLICATION", title: "Gym Management System", description: "A lightweight gym management system for MB Gym in Himamaylan City, Negros Occidental, designed to organize member profiles and membership tracking, instructor details and schedules, class and trainer bookings, and gym announcements—built simple and mobile-friendly for a small local gym.", technologies: ["Kotlin", "PHP", "MySQL", "XML"], visual: "gym", note: "Application Development" },
  { number: "02", category: "WEB DESIGN", title: "Responsive Website Design", description: "A website design project focused on clear content hierarchy, organized layouts, responsive sections, and a consistent visual identity.", technologies: ["Figma", "UI Design", "Wireframes", "CSS"], visual: "website", note: "UI / UX Design" },
  { number: "03", category: "PERSONAL WEBSITE", title: "Personal Portfolio", description: "A personal portfolio designed to introduce my background, showcase selected projects, and make it easy to get in touch.", technologies: ["Next.js", "React", "TypeScript", "CSS"], visual: "portfolio", note: "Web Development" },
  { number: "04", category: "WEB SYSTEM", title: "Memorial Park Lawn Reservation System", description: "A management system for Angels Memorial Park in Kabankalan City, Negros Occidental, replacing their paper-based process with online lawn reservations, Google Map lawn locating, PayMaya API payments, and separate user and admin interfaces.", technologies: ["Google Maps API", "PayMaya API", "Database", "Admin Dashboard", "Responsive UI"], visual: "memorial", note: "Client System · Digital Transformation" },
{ number: "05", category: "WEB APP", title: "Sari-Sari Store Online Grocery", description: "A personal mock online grocery web app inspired by our family sari-sari store, letting users browse items, add products to a cart, and simulate a checkout flow to practice e-commerce UI and cart logic.", technologies: ["HTML", "CSS", "JavaScript", "Cart Logic", "UI Design"], visual: "grocery", note: "Personal Project · E-Commerce UI" },
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
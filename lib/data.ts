// All content below is sourced directly from Ayan Banerjee's CV.
// Only verified links extracted from the CV are used — no placeholder URLs.

export const personal = {
  name: "Ayan Banerjee",
  title: "Software Engineer",
  subtitle: "MERN Stack · Java · Full-Stack Development",
  location: "Kolkata, West Bengal, India",
  email: "banerjeeayan444@gmail.com",
  phone: "+91 62913 72585",
  linkedin: "https://linkedin.com/in/ayan-banerjee444",
  github: "https://github.com/ayaanbanerjee",
  resumeUrl: "/Ayan_Banerjee_Resume.pdf",
  summary:
    "Computer Science undergraduate and full-stack developer with hands-on internship experience across the full software development lifecycle — requirements, design, coding, debugging, testing, and deployment. Comfortable working with cross-functional teams in Agile/Scrum sprint cycles, with a strong analytical foundation from coursework in algorithms and database systems, paired with production experience in JavaScript (ES6+), React.js, and Node.js/Express.",
};

export const skills = {
  Languages: ["JavaScript (ES6+)", "Java"],
  Fundamentals: ["OOP", "Data Structures & Algorithms", "SDLC"],
  Frontend: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "Responsive Design"],
  "Backend & APIs": ["Node.js", "Express.js", "RESTful API Design", "JWT Auth"],
  Databases: ["MongoDB", "SQL", "MySQL"],
  "Tools & Practice": ["Git", "GitHub", "GitLab", "Agile / Sprint Workflows", "Code Review", "VS Code", "Render"],
};

export const experience = [
  {
    role: "Web Development Intern",
    company: "Vylex.ai",
    meta: "Technology Startup · Remote",
    period: "Dec 2025 — May 2026",
    current: true,
    points: [
      "Collaborated with product and engineering teams to establish requirements and deliver UI components across weekly Agile sprint cycles.",
      "Completed full engineering cycles on frontend features — coding, debugging, testing, and deployment — within a live production codebase.",
      "Reviewed and evaluated proposed changes through peer code review, applying Git best practices (feature branching, pull requests) to maintain quality and consistency.",
      "Analyzed and resolved frontend defects surfaced during sprint testing, improving software stability and performance ahead of releases.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech — Computer Science and Engineering",
    school: "College of Engineering and Management, Kolaghat · MAKAUT University",
    period: "Sep 2023 — Present",
  },
  {
    degree: "Diploma — Computer Science and Technology",
    school: "Santiniketan Institute of Polytechnic · WBSCTE",
    period: "Mar 2020 — Jul 2023",
    note: "CGPA: 8.32",
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;
  features: string[];
  stack: string[];
  status: "Ongoing" | "Completed";
  period: string;
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "packverse",
    name: "PackVerse",
    description:
      "A full-stack e-commerce platform built end-to-end — from requirements through coding, testing, and deployment — featuring a responsive landing page, product catalogue, and cart experience.",
    features: [
      "JWT-based authentication with secure password hashing for signup, login, and protected routes",
      "RESTful services and MongoDB data models designed for product catalogue and order management",
      "Reusable, tested components with client-side validation",
      "Integrated state management for cart and session handling",
    ],
    stack: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "JWT"],
    status: "Ongoing",
    period: "Ongoing",
    // No live demo or repository link is published in the CV for this project yet.
  },
  {
    slug: "employee-management-system",
    name: "Employee Management System",
    description:
      "A full-stack CRUD application for employee records, designed, tested, and deployed with a responsive dashboard for listing, adding, and editing entries.",
    features: [
      "RESTful backend APIs with persistent MongoDB storage, with documented system design and data flow",
      "Client-side validation to improve data integrity and reduce invalid submissions",
      "Deployed on Render for public, real-world live-demo access",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "HTML5", "CSS3", "JavaScript"],
    status: "Completed",
    period: "Mar 2025",
    liveUrl: "https://employee-management-systemvp.onrender.com/",
  },
];

export const services = [
  {
    title: "Full-Stack Web Applications",
    description:
      "End-to-end builds on the MERN stack — from data modelling and REST APIs to responsive, production-ready interfaces.",
  },
  {
    title: "Frontend Engineering",
    description:
      "React.js and Next.js interfaces built with Tailwind CSS — responsive, accessible, and performance-tested.",
  },
  {
    title: "API & Backend Development",
    description:
      "Node.js / Express backends with RESTful API design, JWT authentication, and MongoDB or SQL data layers.",
  },
  {
    title: "Code Review & Collaboration",
    description:
      "Agile sprint workflows, Git feature-branching, pull requests, and peer review to keep shared codebases healthy.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

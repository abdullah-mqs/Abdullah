import {
  LuPlane,
  LuMonitor,
  LuDatabase,
  LuWrench,
  LuNetwork,
  LuTicket,
  LuGlobe,
  LuTarget,
  LuTrendingUp,
  LuRocket,
} from "react-icons/lu";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export const personalInfo = {
  name: "Abdullah Riaz",
  tagline: "IT · Operations · Systems",
  heroGreeting: "Hello",
  heroSubtext: "— I'm Abdullah, an IT & Systems Operator",
  email: "ariaz7556@gmail.com",
  phone: "+92 329 8625 816",
  location: "Islamabad, Pakistan",
};

export const stats = [
  { value: "2 Yrs", label: "Practical Work Experience" },
  { value: "IT", label: "Operations & Technical Support" },
];

export const aboutText =
  "I have practical experience in IT operations, travel ticketing, inventory management, and data handling. My work has involved using POS and inventory systems, Sabre Interact, airline B2B portals, and providing basic technical support. I enjoy working with technology, solving day-to-day system problems, and learning how software and systems work. Currently, I am focused on improving my programming skills and exploring systems and backend development.";

export const skills = [
  { name: "IT & Systems Operations", icon: LuMonitor },
  { name: "Sabre Interact & GDS", icon: LuPlane },
  { name: "Flight Reservations & Ticketing", icon: LuTicket },
  { name: "Airline B2B Portals", icon: LuGlobe },
  { name: "Inventory & POS Systems", icon: LuDatabase },
  { name: "Data Entry & Microsoft Excel", icon: LuDatabase },
  { name: "IT Hardware Troubleshooting", icon: LuWrench },
  { name: "Basic Network Troubleshooting", icon: LuNetwork },
];

export const experience = [
  {
    company: "Brilliant Travel",
    role: "Ticketing & GDS Operator",
    period: "July 2026 - Present",
    points: [
      "Worked with Sabre Interact for PNR creation, fare pricing, ticket voiding, and re-issuance.",
      "Used airline B2B portals, including Ethiopian Airlines, Air Fast Congo, CAA, and Air Congo.",
      "Handled international flight bookings, mainly for African routes.",
      "Maintained booking records and daily ticketing data.",
    ],
  },
  {
    company: "One Stop",
    role: "IT & Inventory Operations",
    period: "2025 - 2026",
    points: [
      "Handled daily inventory updates and stock records through POS systems.",
      "Checked stock information and helped maintain accurate product data.",
      "Assisted with basic hardware, network, and system troubleshooting.",
      "Supported daily IT and retail operations.",
    ],
  },
  {
    company: "Ezitech Software House",
    role: "Software Development Intern",
    period: "2 Months",
    points: [
      "Worked on basic web development tasks.",
      "Got exposure to frontend and backend technologies.",
    ],
  },
];

export const education = [
  {
    degree: "Matriculation in Computer Science",
    institute: "BISE Gujranwala",
    period: "Completed",
  },
];

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Urdu", level: "Native" },
];

export const contactInfo = [
  {
    icon: FiPhone,
    label: "Phone",
    value: "+92 329 8625 816",
    href: "tel:+923298625816",
  },
  {
    icon: FiMail,
    label: "Email",
    value: "ariaz7556@gmail.com",
    href: "mailto:ariaz7556@gmail.com",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: "Islamabad, Pakistan",
    href: null,
  },
];

export const navLinks = [
  { name: "About Me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Goals", href: "#goals" },
  { name: "Contact", href: "#contact" },
];

export const goalsVision =
  "My goal is to grow as a software engineer, with a focus on backend development, systems programming, and building reliable software. I am currently exploring Rust, backend technologies, and native desktop application development.";

export const careerGoal = {
  title: "My Technical Direction",
  icon: LuTarget,
  description:
    "I want to move from IT operations into software engineering. My current interests include Rust, backend development, databases, system design, and native desktop applications.",
};

export const goals = [
  {
    icon: LuTarget,
    phase: "Now",
    period: "Current Focus",
    title: "Learning Systems Programming",
    points: [
      "Learning Rust and understanding memory management, ownership, and core programming concepts.",
      "Practicing Data Structures and Algorithms to improve problem-solving skills.",
      "Exploring Slint for building native desktop applications.",
      "Working on small projects to apply what I learn.",
    ],
  },
  {
    icon: LuTrendingUp,
    phase: "Next",
    period: "Mid Term",
    title: "Backend Development & System Design",
    points: [
      "Building backend applications and working with databases.",
      "Learning API design, authentication, caching, and application architecture.",
      "Understanding how systems handle data, concurrent tasks, and increasing workloads.",
      "Improving code quality through practical projects and open-source work.",
    ],
  },
  {
    icon: LuRocket,
    phase: "Future",
    period: "Long Term",
    title: "Software & Systems Engineering",
    points: [
      "Working as a professional backend or systems engineer.",
      "Building reliable software and useful developer tools.",
      "Contributing to open-source projects and developing my own tools.",
      "Working towards opportunities with established global technology companies.",
    ],
  },
];

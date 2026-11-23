import portfolio from "../assets/images/projects/portfolio.jpg";
import dashboard from "../assets/images/projects/dashboard.jpg";
import ecommerce from "../assets/images/projects/ecommerce.jpg";
import taskmanager from "../assets/images/projects/taskmanager.jpg";
import chatbot from "../assets/images/projects/chatbot.jpg";
import blog from "../assets/images/projects/blog.jpg";

const projects = [
  {
    title: "Personal Portfolio",
    category: "Frontend",
    year: "2026",
    featured: true,
    description:
      "A modern, high-performance portfolio with smooth animations, an accessible design system and a fully responsive layout.",
    image: portfolio,
    technologies: ["React", "Tailwind", "Framer Motion"],
    github: "https://github.com/Ashir786787",
    live: "#home",
  },
  {
    title: "Dashboard UI",
    category: "Full Stack",
    year: "2025",
    description:
      "A full-stack admin dashboard with authentication, charts and complete data management workflows.",
    image: dashboard,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Store",
    category: "Full Stack",
    year: "2025",
    description:
      "An online storefront with product listings, cart state, checkout flows and payment integration.",
    image: ecommerce,
    technologies: ["React", "Express", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    category: "Frontend",
    year: "2024",
    description:
      "A productivity app for organising tasks with drag-and-drop, filters and real-time updates.",
    image: taskmanager,
    technologies: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chatbot",
    category: "AI",
    year: "2025",
    description:
      "An intelligent chat interface powered by natural language processing and a clean conversational UI.",
    image: chatbot,
    technologies: ["React", "Python", "OpenAI"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    category: "Full Stack",
    year: "2024",
    description:
      "A feature-rich publishing platform with markdown support, user accounts and content management.",
    image: blog,
    technologies: ["Next.js", "MDX", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default projects;

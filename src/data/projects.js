import portfolio from "../assets/images/projects/portfolio.jpg";
import dashboard from "../assets/images/projects/dashboard.jpg";
import ecommerce from "../assets/images/projects/ecommerce.jpg";
import taskmanager from "../assets/images/projects/taskmanager.jpg";
import chatbot from "../assets/images/projects/chatbot.jpg";
import blog from "../assets/images/projects/blog.jpg";

const projects = [
  {
    title: "Personal Portfolio",
    description: "A modern and responsive portfolio website built using React, Tailwind CSS and Framer Motion.",
    image: portfolio,
    technologies: ["React", "Tailwind", "Framer Motion"],
    github: "#",
    live: "#",
  },
  {
    title: "Dashboard UI",
    description: "A full-stack admin dashboard with authentication, charts, and data management.",
    image: dashboard,
    technologies: ["React", "Node.js", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    title: "E-Commerce Store",
    description: "An online store with product listings, cart functionality, and payment integration.",
    image: ecommerce,
    technologies: ["React", "Express", "Stripe"],
    github: "#",
    live: "#",
  },
  {
    title: "Task Manager",
    description: "A productivity app for managing tasks with drag-and-drop and real-time updates.",
    image: taskmanager,
    technologies: ["React", "Firebase", "Tailwind"],
    github: "#",
    live: "#",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot interface powered by natural language processing.",
    image: chatbot,
    technologies: ["React", "Python", "OpenAI"],
    github: "#",
    live: "#",
  },
  {
    title: "Blog Platform",
    description: "A feature-rich blogging platform with markdown support and user authentication.",
    image: blog,
    technologies: ["Next.js", "MDX", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default projects;

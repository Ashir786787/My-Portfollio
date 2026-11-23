import uiUx from "../assets/images/services/ui-ux.svg";
import frontend from "../assets/images/services/frontend.svg";
import backend from "../assets/images/services/backend.svg";
import mern from "../assets/images/services/mern.svg";
import responsive from "../assets/images/services/responsive.svg";
import api from "../assets/images/services/api.svg";

export const services = [
  {
    title: "UI/UX Design",
    description:
      "Interfaces designed around real users — clear, accessible and beautiful from wireframe to handoff.",
    image: uiUx,
    points: ["Wireframes & prototypes", "Design systems", "Usability reviews"],
  },
  {
    title: "Frontend Development",
    description:
      "Responsive, component-driven frontends built with React and Tailwind for speed and consistency.",
    image: frontend,
    points: ["React & Tailwind", "Responsive layouts", "Smooth animations"],
  },
  {
    title: "Backend Development",
    description:
      "Reliable server-side logic, clean data models and secure authentication for production workloads.",
    image: backend,
    points: ["Node.js & Express", "Authentication", "Business logic"],
  },
  {
    title: "MERN Stack",
    description:
      "End-to-end product development with MongoDB, Express, React and Node — one coherent stack.",
    image: mern,
    points: ["Full-stack apps", "Database design", "Deployment"],
  },
  {
    title: "Responsive Design",
    description:
      "Layouts that adapt gracefully to every screen — from small phones to ultra-wide desktops.",
    image: responsive,
    points: ["Mobile-first builds", "Cross-browser QA", "Fluid typography"],
  },
  {
    title: "API Integration",
    description:
      "Third-party services and custom APIs wired into your product with reliable error handling.",
    image: api,
    points: ["REST APIs", "Payments & auth", "Data pipelines"],
  },
];

export default services;

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaHtml5,
  FaCode,
  FaServer,
  FaDatabase,
  FaPalette,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiFigma,
  SiMysql,
  SiPostman,
  SiVite,
  SiNodedotjs,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    icon: FaCode,
    blurb: "Interfaces that feel fast, fluid and intentional.",
    items: [
      { name: "React", icon: FaReact, level: "Advanced", value: 92 },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced", value: 90 },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced", value: 92 },
      { name: "HTML & CSS", icon: FaHtml5, level: "Advanced", value: 94 },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    blurb: "APIs and services built to scale reliably.",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: "Advanced", value: 88 },
      { name: "Express.js", icon: SiExpress, level: "Advanced", value: 88 },
      { name: "REST APIs", icon: SiNodedotjs, level: "Advanced", value: 86 },
      { name: "Python", icon: FaPython, level: "Intermediate", value: 72 },
    ],
  },
  {
    category: "Database",
    icon: FaDatabase,
    blurb: "Structured data models with clean queries.",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced", value: 88 },
      { name: "MySQL", icon: SiMysql, level: "Intermediate", value: 74 },
    ],
  },
  {
    category: "Tools & Design",
    icon: FaPalette,
    blurb: "A workflow tuned for quality and speed.",
    items: [
      { name: "Git & GitHub", icon: FaGitAlt, level: "Advanced", value: 90 },
      { name: "Figma", icon: SiFigma, level: "Advanced", value: 82 },
      { name: "Vite", icon: SiVite, level: "Advanced", value: 85 },
      { name: "Postman", icon: SiPostman, level: "Intermediate", value: 78 },
    ],
  },
];

export default skills;

import { FaReact, FaNodeJs, FaPython, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiMongodb, SiExpress, SiTailwindcss, SiFigma, SiMysql } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: FaReact, level: "Advanced" },
      { name: "JavaScript", icon: SiJavascript, level: "Advanced" },
      { name: "Tailwind CSS", icon: SiTailwindcss, level: "Advanced" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: FaNodeJs, level: "Advanced" },
      { name: "Express.js", icon: SiExpress, level: "Advanced" },
      { name: "Python", icon: FaPython, level: "Intermediate" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", icon: SiMongodb, level: "Advanced" },
      { name: "MySQL", icon: SiMysql, level: "Intermediate" },
      { name: "Git", icon: FaGitAlt, level: "Advanced" },
    ],
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: SiFigma, level: "Advanced" },
    ],
  },
];

export default skills;

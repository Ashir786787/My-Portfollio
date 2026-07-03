import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

function ProjectCard({ title, description, image, technologies, github, live }) {
  return (
    <motion.div
      whileHover={{ y: -12, scale: 1.02 }}
      className="group overflow-hidden rounded-3xl bg-[#18181f] border border-white/5 hover:border-violet-500 transition-all duration-500"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-56 object-cover transition duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>
      <div className="p-6 md:p-8">
        <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
        <p className="mt-4 text-gray-400 leading-7">{description}</p>
        <div className="flex flex-wrap gap-2 mt-6">
          {technologies.map((tech) => (
            <span key={tech} className="px-4 py-2 rounded-full bg-violet-600/20 text-violet-300 text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <a href={live} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 rounded-xl bg-violet-600 hover:bg-violet-700 transition">
            <FiExternalLink className="inline mr-2" />
            Live Demo
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="flex-1 text-center py-3 rounded-xl border border-white/10 hover:border-violet-500 transition">
            <FiGithub className="inline mr-2" />
            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;

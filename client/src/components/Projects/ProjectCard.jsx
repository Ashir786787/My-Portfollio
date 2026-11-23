import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaStar } from "react-icons/fa";

function ProjectCard({
  title,
  description,
  image,
  technologies = [],
  github,
  live,
  category,
  year,
  featured = false,
  index = 0,
}) {
  const hasGithub = github && github !== "#";
  const hasLive = live && live !== "#";

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="card card-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={`${title} preview`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a12] via-[#0a0a12]/20 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <span className="rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-[0.6rem] font-medium uppercase tracking-[0.12em] text-white/80 backdrop-blur-md">
            {category}
          </span>
          {featured && (
            <span className="flex items-center gap-1 rounded-full border border-amber-300/25 bg-amber-400/15 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-amber-200 backdrop-blur-md">
              <FaStar className="text-[0.5rem]" />
              Featured
            </span>
          )}
        </div>

        <span className="absolute right-4 top-4 rounded-full border border-white/10 bg-black/35 px-2 py-1 text-[0.6rem] font-medium text-white/60 backdrop-blur-md">
          {year}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug text-white transition group-hover:text-violet-100 sm:text-xl">
            {title}
          </h3>
        </div>

        <p className="mt-2.5 line-clamp-3 text-sm leading-7 text-white/70">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-6">
          <div className="hairline mb-4" />
          <div className="flex items-center gap-3">
            {hasLive && (
              <a
                href={live}
                target={live.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/75 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white sm:px-3.5"
              >
                <FiExternalLink className="text-[0.7rem]" />
                Live demo
              </a>
            )}
            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-white/75 transition hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white sm:px-3.5"
              >
                <FiGithub className="text-[0.75rem]" />
                Code
              </a>
            )}
            {!hasLive && !hasGithub && (
              <span className="text-xs italic text-white/40">
                Private build — available on request
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default ProjectCard;

import { motion } from "framer-motion";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";

function ExperienceCard({ item, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative pl-8 sm:pl-10"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-6 flex h-[15px] w-[15px] items-center justify-center rounded-full border-2 border-violet-400 bg-base shadow-[0_0_16px_2px_rgba(124,92,255,0.5)] sm:h-[19px] sm:w-[19px]"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-violet-300 sm:h-2 sm:w-2" />
      </span>

      <div className="card card-hover group p-5 sm:p-6">
        <div className="card-spotlight" aria-hidden="true" />

        <div className="relative flex flex-wrap items-center gap-2">
          <span className="chip">
            <FaCalendarAlt className="text-[0.55rem]" />
            {item.year}
          </span>
          <span className="flex items-center gap-1.5 text-[0.7rem] font-medium text-cyan-300/80">
            <FaBuilding className="text-[0.6rem]" />
            {item.company}
          </span>
        </div>

        <h3 className="relative mt-3 font-display text-lg font-semibold text-white sm:text-xl">
          {item.role}
        </h3>
        <p className="relative mt-2 text-sm leading-7 text-white/55">
          {item.description}
        </p>

        {item.technologies?.length > 0 && (
          <div className="relative mt-4 flex flex-wrap gap-1.5">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/[0.06] bg-white/[0.03] px-2.5 py-1 text-[0.62rem] font-medium text-white/50"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ExperienceCard;

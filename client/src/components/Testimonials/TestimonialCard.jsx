import { motion } from "framer-motion";
import { FaStar, FaQuoteRight } from "react-icons/fa";

function initials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("");
}

function TestimonialCard({ name, role, feedback, rating, index = 0 }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card card-hover group relative flex h-full flex-col overflow-hidden p-6 sm:p-7"
    >
      <div className="card-spotlight" aria-hidden="true" />
      <FaQuoteRight
        aria-hidden="true"
        className="absolute right-6 top-6 text-2xl text-white/[0.06] transition duration-500 group-hover:text-violet-400/20"
      />

      <div className="flex items-center gap-1" aria-label={`${rating} out of 5 stars`}>
        {[...Array(rating)].map((_, starIndex) => (
          <FaStar key={starIndex} className="text-[0.7rem] text-amber-300" />
        ))}
      </div>

      <blockquote className="relative mt-5 flex-1 text-sm leading-7 text-white/60">
        &ldquo;{feedback}&rdquo;
      </blockquote>

      <figcaption className="relative mt-6 flex items-center gap-3 border-t border-white/[0.06] pt-5">
        <span className="flex h-10 w-10 items-center justify-center rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/30 to-cyan-400/15 text-xs font-semibold text-violet-100">
          {initials(name)}
        </span>
        <span>
          <span className="block text-sm font-semibold text-white">{name}</span>
          <span className="block text-xs text-white/50">{role}</span>
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default TestimonialCard;

import { motion } from "framer-motion";
import Link from "../Common/ScrollLink/ScrollLink";
import { FaArrowRight, FaCheck } from "react-icons/fa";

function ServiceCard({ image, title, description, points = [], index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08 }}
      className="card card-hover group flex h-full flex-col overflow-hidden p-6"
    >
      <div className="card-spotlight" aria-hidden="true" />

      <div className="relative flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/[0.08] bg-gradient-to-br from-violet-500/20 to-cyan-400/[0.06] p-3">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain transition duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
        <span className="font-display text-xs font-semibold tracking-wider text-white/15">
          0{index + 1}
        </span>
      </div>

      <h3 className="relative mt-6 font-display text-lg font-semibold text-white sm:text-xl">
        {title}
      </h3>
      <p className="relative mt-2.5 text-sm leading-7 text-white/55">{description}</p>

      {points.length > 0 && (
        <ul className="relative mt-5 space-y-2">
          {points.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-xs text-white/55"
            >
              <FaCheck className="text-[0.55rem] text-cyan-300/80" />
              {point}
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-auto pt-6">
        <div className="hairline mb-4" />
        <Link
          to="contact"
          smooth
          duration={650}
          offset={-96}
          className="group/link inline-flex cursor-pointer items-center gap-2 text-xs font-semibold text-violet-300 transition hover:text-violet-200"
        >
          Discuss this service
          <FaArrowRight className="text-[0.6rem] transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}

export default ServiceCard;

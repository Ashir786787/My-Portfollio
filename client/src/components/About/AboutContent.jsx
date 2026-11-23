import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaBriefcase,
  FaMapMarkerAlt,
  FaCircle,
  FaArrowRight,
} from "react-icons/fa";
import Link from "../Common/ScrollLink/ScrollLink";
import about from "../../data/about";
import AboutStats from "./AboutStats";

const details = [
  { icon: FaGraduationCap, label: "Education", value: about.education },
  { icon: FaBriefcase, label: "Experience", value: about.experience },
  { icon: FaMapMarkerAlt, label: "Location", value: about.location },
  { icon: FaCircle, label: "Availability", value: about.availability },
];

function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <p className="mt-6 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
        {about.description}
      </p>
      <p className="mt-4 text-sm leading-7 text-white/70 sm:text-base sm:leading-8">
        {about.descriptionTwo}
      </p>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {details.map(({ icon: Icon, label, value }) => (
          <li
            key={label}
            className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3.5"
          >
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
              <Icon className={label === "Availability" ? "text-[0.45rem]" : "text-xs"} />
            </span>
            <span className="min-w-0">
              <span className="block text-[0.62rem] font-medium uppercase tracking-[0.16em] text-white/45">
                {label}
              </span>
              <span className="mt-0.5 block text-[0.82rem] font-medium leading-snug text-white/80">
                {value}
              </span>
            </span>
          </li>
        ))}
      </ul>

      <AboutStats />

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          to="contact"
          smooth
          duration={650}
          offset={-96}
          className="btn btn-primary btn-sm cursor-pointer"
        >
          Let&apos;s work together
          <FaArrowRight className="text-[0.65rem]" />
        </Link>
        <Link
          to="projects"
          smooth
          duration={650}
          offset={-96}
          className="btn btn-ghost btn-sm cursor-pointer"
        >
          Explore my work
        </Link>
      </div>
    </motion.div>
  );
}

export default AboutContent;

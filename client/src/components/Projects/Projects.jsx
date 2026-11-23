import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "../Common/ScrollLink/ScrollLink";
import { FaArrowRight } from "react-icons/fa";
import projects from "../../data/projects";
import SectionWrapper from "../Common/SectionWrapper/SectionWrapper";
import SectionTitle from "../Common/SectionTitle/SectionTitle";
import ProjectCard from "./ProjectCard";

const categories = ["All", ...new Set(projects.map((project) => project.category))];

function Projects() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <SectionWrapper
      id="projects"
      className="relative overflow-hidden border-y border-white/[0.05] bg-base-2/50"
    >
      <div
        aria-hidden="true"
        className="orb -left-28 top-24 h-[380px] w-[380px] bg-violet-700/15"
      />

      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <SectionTitle
          align="left"
          subtitle="Selected work"
          title="Projects that solve real problems"
          description="A mix of full-stack products and polished frontends. Each project was built with performance, accessibility and maintainability in mind."
        />

        <div
          role="group"
          aria-label="Filter projects by category"
          className="flex flex-wrap gap-2"
        >
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={active === category}
              onClick={() => setActive(category)}
              className={`min-h-[2.75rem] rounded-full border px-4 py-2 text-xs font-medium transition duration-300 sm:min-h-0 sm:px-3.5 ${
                active === category
                  ? "border-violet-400/50 bg-violet-500/15 text-white shadow-[0_0_20px_-8px_rgba(124,92,255,0.9)]"
                  : "border-white/[0.08] bg-white/[0.02] text-white/55 hover:border-white/20 hover:text-white/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        layout
        className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="card mt-8 flex flex-col items-start justify-between gap-5 p-6 sm:flex-row sm:items-center sm:p-8">
        <div>
          <h3 className="font-display text-lg font-semibold text-white">
            Have a project in mind?
          </h3>
          <p className="mt-1 text-sm text-white/55">
            I&apos;m currently taking on new freelance and full-time work.
          </p>
        </div>
        <Link
          to="contact"
          smooth
          duration={650}
          offset={-96}
          className="btn btn-primary btn-sm cursor-pointer"
        >
          Start a conversation
          <FaArrowRight className="text-[0.6rem]" />
        </Link>
      </div>
    </SectionWrapper>
  );
}

export default Projects;

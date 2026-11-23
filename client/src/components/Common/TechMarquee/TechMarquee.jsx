import { useReducedMotion } from "framer-motion";

const technologies = [
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "JavaScript",
  "Tailwind CSS",
  "Python",
  "REST APIs",
  "Git",
  "Figma",
];

function TechMarquee() {
  const reduceMotion = useReducedMotion();
  const items = [...technologies, ...technologies];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] bg-white/[0.015] py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-base to-transparent sm:w-28" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-base to-transparent sm:w-28" />
      <div className="marquee-group flex" aria-label="Technologies I work with">
        <div
          className={`flex w-max shrink-0 items-center gap-10 pr-10 sm:gap-14 sm:pr-14 ${
            reduceMotion ? "" : "animate-marquee"
          }`}
        >
          {items.map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="flex items-center gap-3 whitespace-nowrap text-sm font-medium tracking-wide text-white/55"
            >
              <span className="h-1 w-1 rounded-full bg-violet-400/70" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechMarquee;

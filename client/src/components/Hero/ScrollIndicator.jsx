import { motion } from "framer-motion";

function ScrollIndicator() {
  return (
    <div className="relative z-10 mt-auto hidden justify-center pb-6 pt-10 md:flex">
      <a
        href="#about"
        className="group flex flex-col items-center gap-2.5"
        aria-label="Scroll to about section"
      >
        <span className="text-[0.6rem] font-medium uppercase tracking-[0.3em] text-white/40 transition group-hover:text-white/60">
          Scroll
        </span>
        <span className="flex h-9 w-[22px] items-start justify-center rounded-full border border-white/15 pt-1.5 transition group-hover:border-violet-400/50">
          <motion.span
            animate={{ y: [0, 10, 0], opacity: [1, 0.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="h-1.5 w-1 rounded-full bg-violet-300"
          />
        </span>
      </a>
    </div>
  );
}

export default ScrollIndicator;

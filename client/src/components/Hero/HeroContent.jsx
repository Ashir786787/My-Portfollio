import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroSocials from "./HeroSocials";
import HeroStats from "./HeroStats";
import { hero } from "../../data/hero";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

function HeroContent() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="max-w-2xl"
    >
      <motion.div variants={item}>
        <HeroBadge />
      </motion.div>

      <motion.p
        variants={item}
        className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-violet-300/85 sm:text-sm"
      >
        {hero.greeting}
      </motion.p>

      <motion.h1
        variants={item}
        className="mt-4 text-[2.65rem] font-extrabold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl xl:text-[5rem]"
      >
        {hero.firstName}
        <br />
        <span className="text-gradient-primary">{hero.lastName}</span>
      </motion.h1>

      <motion.div
        variants={item}
        className="mt-5 flex min-h-9 items-center gap-2 text-lg font-semibold text-cyan-300/90 sm:min-h-10 sm:text-2xl"
      >
        <span className="text-white/40">—</span>
        <TypeAnimation sequence={hero.roles} speed={45} repeat={Infinity} />
      </motion.div>

      <motion.p
        variants={item}
        className="mt-6 max-w-xl text-sm leading-7 text-white/55 sm:text-base sm:leading-8"
      >
        {hero.description}
      </motion.p>

      <motion.ul
        variants={item}
        className="mt-6 flex flex-wrap gap-x-6 gap-y-3"
      >
        {hero.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex items-center gap-2 text-xs font-medium text-white/65 sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-violet-400 to-cyan-300" />
            {highlight}
          </li>
        ))}
      </motion.ul>

      <motion.div variants={item}>
        <HeroButtons />
        <HeroSocials />
        <HeroStats />
      </motion.div>
    </motion.div>
  );
}

export default HeroContent;

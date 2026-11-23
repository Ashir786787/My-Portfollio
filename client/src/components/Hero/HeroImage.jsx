import { motion } from "framer-motion";
import { FaCode, FaBriefcase } from "react-icons/fa";
import profile from "../../assets/images/profile/ashir-portrait.png";

const floatTransition = {
  duration: 7,
  repeat: Infinity,
  ease: "easeInOut",
};

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[560px]"
    >
      <div className="relative flex items-center justify-center py-6 sm:py-10">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[76%] w-[76%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/25 blur-[90px]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.08]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-violet-400/20"
        />

        <motion.img
          animate={{ y: [0, -12, 0] }}
          transition={floatTransition}
          src={profile}
          alt="Muhammad Ashir, MERN Stack Developer"
          width="1000"
          height="667"
          fetchPriority="high"
          className="relative z-10 w-full max-w-[520px] object-contain drop-shadow-[0_40px_70px_rgba(76,29,149,0.5)]"
        />

        <motion.div
          animate={{ y: [0, -9, 0] }}
          transition={{ ...floatTransition, duration: 8, delay: 0.6 }}
          className="absolute left-0 top-8 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0c0c16]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-300">
            <FaBriefcase className="text-sm" />
          </span>
          <span>
            <span className="block text-sm font-semibold leading-tight text-white">
              3+ Years
            </span>
            <span className="text-[0.68rem] text-white/55">Experience</span>
          </span>
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ ...floatTransition, duration: 9, delay: 1.1 }}
          className="absolute bottom-8 right-0 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0c0c16]/80 px-4 py-3 shadow-2xl backdrop-blur-xl sm:flex"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
            <FaCode className="text-sm" />
          </span>
          <span>
            <span className="block text-sm font-semibold leading-tight text-white">
              MERN Stack
            </span>
            <span className="text-[0.68rem] text-white/55">Specialist</span>
          </span>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroImage;

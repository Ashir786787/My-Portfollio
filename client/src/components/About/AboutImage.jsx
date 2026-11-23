import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa";
import profile from "../../assets/images/profile/ashir-portrait.webp";

function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative mx-auto w-full max-w-[480px] lg:max-w-none"
    >
      <div
        aria-hidden="true"
        className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-tl-3xl border-l border-t border-violet-400/30 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-4 -right-4 hidden h-24 w-24 rounded-br-3xl border-b border-r border-cyan-400/25 sm:block"
      />
      <div
        aria-hidden="true"
        className="absolute inset-6 rounded-[2rem] bg-violet-600/20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.015] p-2 shadow-[0_30px_80px_-40px_rgba(76,29,149,0.8)] backdrop-blur-sm">
        <div className="relative overflow-hidden rounded-[1.35rem]">
          <img
            src={profile}
            alt="Muhammad Ashir"
            className="aspect-[4/3] w-full object-cover object-center"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#06060b]/85 via-transparent to-transparent" />

          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-[#08080f]/75 px-3.5 py-2.5 backdrop-blur-xl">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/20 text-violet-200">
                <FaCode className="text-xs" />
              </span>
              <div>
                <p className="text-[0.78rem] font-semibold leading-tight text-white">
                  MERN Stack Developer
                </p>
                <p className="text-[0.62rem] text-white/55">
                  React · Node · MongoDB
                </p>
              </div>
            </div>
            <span className="hidden rounded-full border border-emerald-400/25 bg-emerald-400/10 px-2 py-1 text-[0.55rem] font-semibold uppercase tracking-wide text-emerald-300 sm:block">
              Open
            </span>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 left-6 rounded-2xl border border-white/10 bg-[#0c0c16]/90 px-4 py-3 shadow-2xl backdrop-blur-xl sm:left-8">
        <p className="font-display text-xl font-bold text-white">3+</p>
        <p className="text-[0.62rem] uppercase tracking-[0.16em] text-white/50">
          Years building
        </p>
      </div>
    </motion.div>
  );
}

export default AboutImage;

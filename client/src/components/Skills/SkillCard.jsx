import { motion } from "framer-motion";

function SkillCard({ icon: Icon, name, level, value }) {
  return (
    <div className="group/skill rounded-xl border border-white/[0.05] bg-white/[0.025] p-3 transition duration-300 hover:border-violet-400/25 hover:bg-white/[0.045]">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/[0.06] bg-white/[0.04] text-violet-300 transition duration-300 group-hover/skill:scale-105 group-hover/skill:text-violet-200">
          <Icon className="text-sm" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[0.8rem] font-medium text-white/85">
            {name}
          </span>
          <span className="block text-[0.6rem] text-white/45">{level}</span>
        </span>
      </div>

      <div
        className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/[0.06]"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${name} proficiency`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

export default SkillCard;

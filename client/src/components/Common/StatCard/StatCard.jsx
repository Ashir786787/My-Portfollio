import { motion } from "framer-motion";

function StatCard({ number, label, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="card card-hover group relative overflow-hidden p-4 text-center sm:p-6"
    >
      <div className="pointer-events-none absolute inset-x-6 -top-8 h-16 rounded-full bg-violet-500/20 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:opacity-60" />
      <h3 className="relative bg-gradient-to-br from-white via-violet-200 to-violet-400 bg-clip-text text-2xl font-bold text-transparent sm:text-4xl">
        {number}
      </h3>
      <p className="relative mt-1.5 text-[0.7rem] text-white/50 sm:mt-2 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

export default StatCard;

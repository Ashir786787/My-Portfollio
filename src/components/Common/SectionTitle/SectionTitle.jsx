import { motion } from "framer-motion";

function SectionTitle({ title, subtitle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-20"
    >
      <p className="uppercase tracking-[6px] text-violet-400 text-sm">{subtitle}</p>
      <h2 className="mt-4 text-4xl md:text-5xl font-bold">{title}</h2>
    </motion.div>
  );
}

export default SectionTitle;

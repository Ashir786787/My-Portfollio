import { motion } from "framer-motion";

function StatCard({ number, label }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 text-center shadow-lg"
    >
      <h3 className="text-4xl font-bold text-violet-400">{number}</h3>
      <p className="mt-2 text-gray-400">{label}</p>
    </motion.div>
  );
}

export default StatCard;

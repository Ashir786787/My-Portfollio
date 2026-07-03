import { motion } from "framer-motion";

function TechCard({ icon: Icon, name, level }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl p-6 text-center"
    >
      <Icon className="mx-auto text-5xl text-violet-400" />
      <h3 className="mt-4 text-xl font-semibold">{name}</h3>
      <p className="mt-2 text-gray-400">{level}</p>
    </motion.div>
  );
}

export default TechCard;

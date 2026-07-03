import { motion } from "framer-motion";

function ExperienceCard({ item }) {
  return (
    <motion.div whileHover={{ x: 8 }} className="relative pl-16 lg:pl-20">
      <div className="absolute left-[13px] lg:left-[17px] top-3 w-5 h-5 rounded-full bg-violet-500 border-4 border-[#111116]"></div>
      <div className="bg-[#18181f] rounded-2xl p-6 lg:p-8 border border-white/5 hover:border-violet-500 transition">
        <span className="text-violet-400 text-sm">{item.year}</span>
        <h3 className="text-xl lg:text-2xl font-bold mt-2">{item.role}</h3>
        <p className="text-cyan-400 mt-1">{item.company}</p>
        <p className="text-gray-400 mt-5 leading-8">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default ExperienceCard;

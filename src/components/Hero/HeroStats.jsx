import { motion } from "framer-motion";
import { FaCode, FaLaptopCode, FaBriefcase } from "react-icons/fa";

const stats = [
  {
    icon: <FaBriefcase />,
    title: "3+ Years",
    subtitle: "Experience",
    position: "top-6 -left-8",
  },
  {
    icon: <FaLaptopCode />,
    title: "MERN",
    subtitle: "Stack",
    position: "bottom-20 -left-10",
  },
  {
    icon: <FaCode />,
    title: "Available",
    subtitle: "For Work",
    position: "bottom-8 right-0",
  },
];

function HeroStats() {
  return (
    <>
      {stats.map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + index * 0.2 }}
          className={`absolute ${item.position} hidden lg:flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl px-4 py-3 shadow-xl`}
        >
          <div className="text-violet-400 text-xl">{item.icon}</div>

          <div>
            <h4 className="font-semibold">{item.title}</h4>
            <p className="text-sm text-gray-400">{item.subtitle}</p>
          </div>
        </motion.div>
      ))}
    </>
  );
}

export default HeroStats;
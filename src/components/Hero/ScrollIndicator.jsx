import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa";

function ScrollIndicator() {
  return (
    <motion.div
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1.8 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center text-gray-400"
    >
      <span className="text-sm mb-2">Scroll</span>
      <FaArrowDown />
    </motion.div>
  );
}

export default ScrollIndicator;
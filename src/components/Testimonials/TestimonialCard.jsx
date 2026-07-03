import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

function TestimonialCard({ name, role, feedback, rating }) {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-xl"
    >
      <div className="flex mb-6">
        {[...Array(rating)].map((_, index) => (
          <FaStar key={index} className="text-yellow-400 mr-1" />
        ))}
      </div>
      <p className="text-gray-300 leading-8 italic">"{feedback}"</p>
      <div className="mt-8">
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="text-gray-400">{role}</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;

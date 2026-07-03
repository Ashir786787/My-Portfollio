import { motion } from "framer-motion";

function ServiceCard({ image, title, description }) {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 backdrop-blur-lg hover:border-violet-500/40 transition-all duration-300"
    >
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <img src={image} alt={title} className="w-full h-full object-contain" />
      </div>
      <h3 className="mt-6 text-xl md:text-2xl font-semibold">{title}</h3>
      <p className="mt-4 text-gray-400 leading-7">{description}</p>
    </motion.div>
  );
}

export default ServiceCard;

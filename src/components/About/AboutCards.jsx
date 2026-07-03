import { motion } from "framer-motion";
import about from "../../data/about";
import { zoomIn } from "../../utils/animations";

function AboutCards() {
  return (
    <div className="flex flex-wrap gap-3">
      {about.interests.map((interest, i) => (
        <motion.span
          key={i}
          variants={zoomIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="px-4 py-2 rounded-full border border-violet-500/30 bg-violet-500/10 text-violet-300 text-sm font-medium"
        >
          {interest}
        </motion.span>
      ))}
    </div>
  );
}

export default AboutCards;

import profile from "../../assets/images/profile/ashir.png";
import { motion } from "framer-motion";

function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="flex justify-center"
    >
      <div className="relative">
        <div className="absolute inset-0 rounded-3xl bg-violet-600/20 blur-3xl"></div>
        <img
          src={profile}
          alt="Muhammad Ashir"
          className="relative z-10 w-full max-w-[320px] sm:max-w-[380px] rounded-3xl border border-white/10 shadow-2xl"
        />
      </div>
    </motion.div>
  );
}

export default AboutImage;

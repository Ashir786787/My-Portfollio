import profile from "../../assets/images/profile/ashir.png";
import HeroStats from "./HeroStats";
import { motion } from "framer-motion";

function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9 }}
      className="relative flex justify-center items-center"
    >
      <div className="relative w-full max-w-[760px] h-[720px] flex items-end justify-center">
        <div className="absolute bottom-16 w-[420px] h-[420px] rounded-full bg-violet-600/25 blur-[140px]" />
        <HeroStats />
        <motion.img
          animate={{
            y: [0, -10, 0],
            rotate: [0, 1, 0, -1, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src={profile}
          alt="Muhammad Ashir"
          className="relative z-20 max-h-[720px] w-auto object-contain drop-shadow-[0_40px_80px_rgba(124,58,237,.45)]"
        />
      </div>
    </motion.div>
  );
}

export default HeroImage;

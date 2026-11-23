import { motion } from "framer-motion";

function SectionTitle({
  title,
  subtitle,
  description,
  align = "center",
  className = "",
}) {
  const centered = align === "center";

  return (
    <motion.div
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-80px" }}
      className={`${centered ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {subtitle && (
        <p className={`eyebrow ${centered ? "eyebrow-center" : ""}`}>
          {subtitle}
        </p>
      )}
      <h2 className="mt-4 text-3xl font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>
      <div
        aria-hidden="true"
        className={`mt-5 h-px w-16 bg-gradient-to-r from-violet-500 to-cyan-400 ${
          centered ? "mx-auto" : ""
        }`}
      />
      {description && (
        <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
          {description}
        </p>
      )}
    </motion.div>
  );
}

export default SectionTitle;

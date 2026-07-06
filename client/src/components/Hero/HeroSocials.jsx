import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

function HeroSocials() {
  return (
    <div className="flex gap-4 mt-10">

      <a
        href={portfolio.github}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600 group-hover:-translate-y-1">
          <FaGithub />
        </div>
      </a>

      <a
        href={portfolio.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group"
      >
        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600 group-hover:-translate-y-1">
          <FaLinkedin />
        </div>
      </a>

      <a
        href={`mailto:${portfolio.email}`}
        className="group"
      >
        <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:bg-violet-600 group-hover:-translate-y-1">
          <FaEnvelope />
        </div>
      </a>

    </div>
  );
}

export default HeroSocials;
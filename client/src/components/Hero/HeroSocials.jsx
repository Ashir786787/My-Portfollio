import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const socials = [
  { label: "GitHub", href: portfolio.github, icon: FaGithub },
  { label: "LinkedIn", href: portfolio.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${portfolio.email}`, icon: FaEnvelope },
];

function HeroSocials() {
  return (
    <div className="mt-8 flex items-center gap-4">
      <div className="flex items-center gap-2.5">
        {socials.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
          >
            <Icon className="text-[0.95rem] transition duration-300 group-hover:scale-110" />
          </a>
        ))}
      </div>
      <span aria-hidden="true" className="h-px w-10 bg-white/10 sm:w-14" />
      <a
        href={`mailto:${portfolio.email}`}
        className="hidden text-xs text-white/45 transition hover:text-white/70 sm:block"
      >
        {portfolio.email}
      </a>
    </div>
  );
}

export default HeroSocials;

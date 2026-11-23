import ScrollLink from "../Common/ScrollLink/ScrollLink";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";
import { navigation } from "../../data/navigation";
import { portfolio } from "../../data/portfolio";
import Logo from "../Navbar/Logo";

const socials = [
  { label: "GitHub", href: portfolio.github, icon: FaGithub },
  { label: "LinkedIn", href: portfolio.linkedin, icon: FaLinkedin },
  { label: "Email", href: `mailto:${portfolio.email}`, icon: FaEnvelope },
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] bg-[#050509]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"
      />
      <div
        aria-hidden="true"
        className="orb left-1/4 top-0 h-[240px] w-[320px] bg-violet-700/10"
      />

      <div className="container-shell relative py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
              Full Stack Developer crafting fast, scalable and user-friendly
              products with the MERN stack.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.03] text-white/50 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white"
                >
                  <Icon className="text-xs" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navigation.map((item) => (
                <li key={item.title}>
                  <ScrollLink
                    to={item.link}
                    smooth
                    spy
                    duration={600}
                    offset={-96}
                    className="cursor-pointer text-xs text-white/55 transition hover:text-white"
                  >
                    {item.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-white/45">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-xs text-white/55">
              <li>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="transition hover:text-white"
                >
                  {portfolio.email}
                </a>
              </li>
              <li>{portfolio.location} · Working worldwide</li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open to new opportunities
              </li>
            </ul>
            <ScrollLink
              to="contact"
              smooth
              duration={650}
              offset={-96}
              className="btn btn-ghost btn-sm mt-5 cursor-pointer"
            >
              Start a project
            </ScrollLink>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/[0.06] pt-6 sm:flex-row">
          <p className="text-center text-[0.68rem] text-white/40 sm:text-left">
            © {year} Muhammad Ashir. All rights reserved.
          </p>
          <p className="text-[0.68rem] text-white/40">
            Designed &amp; built with React, Tailwind CSS and Framer Motion.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[0.68rem] font-medium text-white/50 transition hover:text-white"
          >
            Back to top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:-translate-y-0.5 group-hover:border-violet-400/40">
              <FaArrowUp className="text-[0.55rem]" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

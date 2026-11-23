import { contactInfo } from "../../data/contact";
import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { portfolio } from "../../data/portfolio";

const socials = [
  { label: "GitHub", href: portfolio.github, icon: FaGithub },
  { label: "LinkedIn", href: portfolio.linkedin, icon: FaLinkedin },
];

function ContactInfo() {
  return (
    <div className="mt-8">
      <ul className="grid gap-3 sm:grid-cols-2">
        {contactInfo.map((item) => {
          const Icon = item.icon;
          return (
            <li
              key={item.label}
              className="card flex items-start gap-3 p-4 transition duration-300 hover:border-violet-400/25"
            >
              <span className="icon-tile h-10 w-10 shrink-0">
                <Icon className="text-sm" />
              </span>
              <span className="min-w-0">
                <span className="block text-[0.6rem] font-medium uppercase tracking-[0.16em] text-white/45">
                  {item.label}
                </span>
                {item.href ? (
                  <a
                    href={item.href}
                    className="mt-1 inline-flex min-h-[2.5rem] items-center break-words text-[0.82rem] font-medium text-white/85 transition hover:text-violet-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <span className="mt-1 block text-[0.82rem] font-medium leading-snug text-white/85">
                    {item.value}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ul>

      <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="flex items-center gap-2 text-sm font-semibold text-emerald-200">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for new work
          </p>
          <p className="mt-1 text-xs text-white/50">
            Freelance projects and full-time roles.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-white sm:h-9 sm:w-9"
            >
              <Icon className="text-sm" />
            </a>
          ))}
        </div>
      </div>

      <a
        href={`mailto:${portfolio.email}`}
        className="group mt-6 inline-flex min-h-[2.75rem] items-center gap-2 text-sm font-medium text-violet-300 transition hover:text-violet-200"
      >
        Prefer email? Write to me directly
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
}

export default ContactInfo;

import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaArrowRight, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import ScrollLink from "../Common/ScrollLink/ScrollLink";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { portfolio } from "../../data/portfolio";

function MobileMenu({ isOpen, setIsOpen }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = [
        ...dialogRef.current.querySelectorAll(
          'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])',
        ),
      ].filter((element) => element.offsetParent !== null);

      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus();
    };
  }, [isOpen, setIsOpen]);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[80] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={close}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col overflow-y-auto border-l border-white/10 bg-[#08080f] px-6 pb-8 pt-5 sm:px-8"
          >
            <div className="flex items-center justify-between">
              <Logo onClick={close} />
              <button
                ref={closeButtonRef}
                type="button"
                onClick={close}
                aria-label="Close navigation menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:border-white/25 hover:text-white"
              >
                <span aria-hidden="true" className="relative block h-4 w-4">
                  <span className="absolute left-0 top-1/2 h-px w-4 rotate-45 bg-current" />
                  <span className="absolute left-0 top-1/2 h-px w-4 -rotate-45 bg-current" />
                </span>
              </button>
            </div>

            <div className="mt-10 flex-1">
              <NavLinks mobile closeMenu={close} />
            </div>

            <div className="mt-8 space-y-6">
              <ScrollLink
                to="contact"
                smooth
                duration={600}
                offset={-88}
                onClick={close}
                className="btn btn-primary w-full cursor-pointer"
              >
                Start a project
                <FaArrowRight className="text-xs" />
              </ScrollLink>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-2">
                  {[
                    { href: portfolio.github, icon: FaGithub, label: "GitHub" },
                    { href: portfolio.linkedin, icon: FaLinkedin, label: "LinkedIn" },
                    { href: `mailto:${portfolio.email}`, icon: FaEnvelope, label: "Email" },
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      aria-label={label}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 transition hover:border-violet-400/50 hover:text-white"
                    >
                      <Icon size={14} />
                    </a>
                  ))}
                </div>
                <a
                  href={`mailto:${portfolio.email}`}
                  className="text-xs text-white/50 transition hover:text-white/70"
                >
                  {portfolio.email}
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;

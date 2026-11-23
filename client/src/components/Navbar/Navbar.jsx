import { useEffect, useState } from "react";
import ScrollLink from "../Common/ScrollLink/ScrollLink";
import { FaArrowRight } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-shell">
          <div
            className={`mt-3 flex items-center justify-between rounded-2xl border px-4 transition-all duration-300 sm:mt-4 sm:px-5 lg:px-6 ${
              scrolled
                ? "h-14 border-white/[0.09] bg-[#08080f]/85 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.95)] backdrop-blur-xl sm:h-16"
                : "h-16 border-white/[0.05] bg-[#08080f]/45 backdrop-blur-md sm:h-[68px]"
            }`}
          >
            <Logo />

            <nav aria-label="Primary" className="hidden lg:block">
              <div className="flex items-center gap-4 xl:gap-7">
                <NavLinks />
              </div>
            </nav>

            <div className="hidden shrink-0 items-center gap-4 lg:flex">
              <a
                href="https://github.com/Ashir786787"
                target="_blank"
                rel="noreferrer"
                className="hidden text-sm font-medium text-white/55 transition hover:text-white xl:block"
              >
                GitHub
              </a>
              <ScrollLink
                to="contact"
                smooth
                duration={600}
                offset={-96}
                className="btn btn-primary btn-sm cursor-pointer"
              >
                Let&apos;s talk
                <FaArrowRight className="text-[0.65rem]" />
              </ScrollLink>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition hover:border-violet-400/50 hover:text-white lg:hidden"
            >
              <span aria-hidden="true" className="flex w-[18px] flex-col gap-[5px]">
                <span className="h-px w-full bg-current" />
                <span className="h-px w-full bg-current" />
                <span className="h-px w-2/3 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;

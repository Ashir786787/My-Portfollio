import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "backdrop-blur-xl bg-black/70 border-b border-white/10" : "bg-transparent"}
        `}
      >
        <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
          <Logo />
          <nav className="hidden lg:flex items-center gap-10">
            <NavLinks />
            <button className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition">
              Resume
            </button>
          </nav>
          <button onClick={() => setIsOpen(true)} className="lg:hidden">
            <FaBars size={22} />
          </button>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Navbar;

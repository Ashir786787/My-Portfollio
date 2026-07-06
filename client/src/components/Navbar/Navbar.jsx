import { useEffect, useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import MobileMenu from "./MobileMenu";
import { useAuth } from "../../context/AuthContext.jsx";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

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
          <nav className="hidden lg:flex items-center gap-6">
            <NavLinks />
            {user ? (
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-300">{user.fullName}</span>
                <button onClick={logout} className="text-sm text-gray-400 hover:text-red-400 transition cursor-pointer">
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-3">
                <Link to="/login" className="text-sm text-gray-300 hover:text-violet-400 transition">
                  Login
                </Link>
                <Link to="/signup" className="text-sm px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-700 transition text-white">
                  Sign Up
                </Link>
              </div>
            )}
            <ScrollLink to="contact" smooth duration={600} offset={-90} className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-700 transition cursor-pointer">
              Let's Talk
            </ScrollLink>
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

import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "../../../data/navigation";

const menuVariants = {
  open: { x: 0 },
  closed: { x: "100%" },
};

function MobileMenu({ isOpen, onClose }) {
  const handleNav = (e, href) => {
    e.preventDefault();
    onClose();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={onClose}
        className="lg:hidden fixed top-5 right-5 z-50 flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-1" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-1" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          >
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              transition={{ type: "tween", duration: 0.3 }}
              className="absolute right-0 top-0 h-full w-72 bg-[#0d0d12] border-l border-white/10 p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-12">
                <h2 className="text-2xl font-bold">Ashir<span className="text-purple-500">.</span></h2>
                <button onClick={onClose} className="text-white text-xl bg-transparent border-none cursor-pointer">&#10005;</button>
              </div>

              <nav>
                <ul className="space-y-6">
                  {navigation.map((item, index) => (
                    <li key={index}>
                      <a
                        href={`#${item.link}`}
                        onClick={(e) => handleNav(e, `#${item.link}`)}
                        className="text-gray-300 hover:text-purple-500 duration-300 text-lg"
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MobileMenu;

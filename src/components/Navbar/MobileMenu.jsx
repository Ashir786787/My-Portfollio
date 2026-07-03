import { AnimatePresence, motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";
import NavLinks from "./NavLinks";

function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 bg-[#07070B] p-8 lg:hidden"
        >
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)}>
              <FaTimes size={24} />
            </button>
          </div>

          <div className="mt-12 flex flex-col gap-2">
            <NavLinks
              mobile
              closeMenu={() => setIsOpen(false)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
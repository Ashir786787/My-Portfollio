import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { navigation } from "../../../data/navigation";
import { socialLinks } from "../../../data/socialLinks";

function Sidebar() {
  return (
    <aside className="hidden lg:flex fixed left-0 top-0 w-[280px] h-screen bg-[#0d0d12] border-r border-white/10 flex-col justify-between p-8">
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold"
        >
          Ashir<span className="text-purple-500">.</span>
        </motion.h1>
        <p className="text-gray-400 mt-3">MERN Stack Developer</p>
      </div>

      <nav>
        <ul className="space-y-6">
          {navigation.map((item, index) => (
            <li key={index}>
              <Link
                to={item.link}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                activeClass="text-purple-500"
                className="cursor-pointer text-gray-300 hover:text-purple-500 duration-300"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>
        <div className="flex gap-5 text-xl">
          <a href={socialLinks[0].url} target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href={socialLinks[1].url} target="_blank" rel="noreferrer"><FaLinkedin /></a>
          <a href={socialLinks[2].url}><FaEnvelope /></a>
        </div>
        <p className="text-gray-500 text-sm mt-8">© 2026 Muhammad Ashir</p>
      </div>
    </aside>
  );
}

export default Sidebar;

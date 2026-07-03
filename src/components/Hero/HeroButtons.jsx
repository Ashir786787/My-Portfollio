import { Link } from "react-scroll";

function HeroButtons() {
  return (
    <div className="flex flex-wrap gap-5 mt-10">
      <Link
        to="contact"
        smooth
        duration={600}
        offset={-90}
        className="px-7 py-3 rounded-xl font-semibold transition-all duration-300 bg-violet-600 hover:bg-violet-700 text-white cursor-pointer"
      >
        Hire Me
      </Link>

      <Link
        to="projects"
        smooth
        duration={600}
        offset={-90}
        className="px-7 py-3 rounded-xl font-semibold transition-all duration-300 border border-violet-500 hover:bg-violet-600 text-white cursor-pointer"
      >
        View Projects
      </Link>
    </div>
  );
}

export default HeroButtons;

import Link from "../Common/ScrollLink/ScrollLink";
import { FaArrowRight, FaFolderOpen } from "react-icons/fa";

const scrollProps = {
  smooth: true,
  duration: 650,
  offset: -96,
};

function HeroButtons() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
      <Link
        to="contact"
        {...scrollProps}
        className="btn btn-primary cursor-pointer"
      >
        Hire Me
        <FaArrowRight className="text-[0.7rem]" />
      </Link>

      <Link
        to="projects"
        {...scrollProps}
        className="btn btn-ghost cursor-pointer"
      >
        <FaFolderOpen className="text-[0.8rem] text-violet-300" />
        View Projects
      </Link>
    </div>
  );
}

export default HeroButtons;

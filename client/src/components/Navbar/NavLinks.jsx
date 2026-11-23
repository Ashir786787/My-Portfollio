import Link from "../Common/ScrollLink/ScrollLink";
import { navigation } from "../../data/navigation";

function NavLinks({ mobile = false, closeMenu }) {
  if (mobile) {
    return (
      <nav aria-label="Mobile" className="flex flex-col">
        {navigation.map((item, index) => (
          <Link
            key={item.title}
            to={item.link}
            smooth
            spy
            duration={600}
            offset={-88}
            onClick={closeMenu}
            activeClass="text-white"
            className="group flex cursor-pointer items-center justify-between border-b border-white/[0.06] py-4 text-2xl font-semibold text-white/60 transition hover:text-white"
          >
            <span className="flex items-baseline gap-4">
              <span className="text-[0.65rem] font-medium tracking-[0.2em] text-violet-400/70">
                0{index + 1}
              </span>
              {item.title}
            </span>
            <span
              aria-hidden="true"
              className="text-sm text-white/20 transition group-hover:translate-x-1 group-hover:text-violet-300"
            >
              →
            </span>
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          smooth
          spy
          duration={600}
          offset={-96}
          activeClass="is-active"
          className="nav-link cursor-pointer"
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;

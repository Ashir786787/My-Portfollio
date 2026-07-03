import { Link } from "react-scroll";
import { navigation } from "../../data/navigation";

function NavLinks({ mobile = false, closeMenu }) {
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.title}
          to={item.link}
          smooth
          spy
          duration={600}
          offset={-90}
          onClick={closeMenu}
          activeClass="text-violet-500"
          className={`
            cursor-pointer
            transition-all
            duration-300
            hover:text-violet-500
            ${
              mobile
                ? "block py-4 text-lg"
                : "text-sm font-medium"
            }
          `}
        >
          {item.title}
        </Link>
      ))}
    </>
  );
}

export default NavLinks;

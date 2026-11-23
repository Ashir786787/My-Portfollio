import { Link } from "react-scroll";

/**
 * Thin wrapper around react-scroll's Link that also renders a real href.
 * This keeps smooth scrolling while making the element keyboard accessible.
 */
function ScrollLink({
  to,
  offset = -96,
  duration = 650,
  smooth = true,
  spy = false,
  children,
  ...props
}) {
  return (
    <Link
      to={to}
      href={`#${to}`}
      offset={offset}
      duration={duration}
      smooth={smooth}
      spy={spy}
      {...props}
    >
      {children}
    </Link>
  );
}

export default ScrollLink;

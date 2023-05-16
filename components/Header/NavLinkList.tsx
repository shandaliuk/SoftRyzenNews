import { Link } from 'react-scroll';

const NavLinkList = () => {
  return (
    <ul className="flex gap-10">
      <li>
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-xs text-amber-200 uppercase font-bold md:text-sm lg:text-lg cursor-pointer"
        >
          1st <span className="hidden sm:inline-block">Section</span>
        </Link>
      </li>
      <li>
        <Link
          to="news"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="text-xs text-amber-200 uppercase font-bold md:text-sm lg:text-lg cursor-pointer"
        >
          2nd <span className="hidden sm:inline-block">Section</span>
        </Link>
      </li>
    </ul>
  );
};

export default NavLinkList;

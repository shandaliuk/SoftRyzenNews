import { Link } from 'react-scroll';

const NavLinkList = () => {
  return (
    <ul className="flex">
      <li className="w-3/6">
        <Link
          to="hero"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="block py-3 text-sm text-center md:text-sm lg:text-lg cursor-pointer border-r border-black"
        >
          1st Section
        </Link>
      </li>
      <li className="w-3/6">
        <Link
          to="news"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="block py-3 text-sm text-center md:text-sm lg:text-lg cursor-pointer"
        >
          2nd Section
        </Link>
      </li>
    </ul>
  );
};

export default NavLinkList;

import { Link } from 'react-scroll';

const NavLinkList = () => {
  return (
    <ul className="flex">
      <li className="w-3/6">
        <Link
          to="main"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="block py-3 uppercase text-[16px] text-center md:text-[20px] xl:text-[30px] cursor-pointer border-r border-black"
        >
          TRENDING
        </Link>
      </li>
      <li className="w-3/6">
        <Link
          to="news"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="block py-3 text-[16px] text-center md:text-[20px] xl:text-[30px] cursor-pointer"
        >
          NEWS
        </Link>
      </li>
    </ul>
  );
};

export default NavLinkList;

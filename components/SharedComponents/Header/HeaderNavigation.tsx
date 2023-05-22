import { useRouter } from 'next/router';
import { Link } from 'react-scroll';

const HeaderNavigation = () => {
  const router = useRouter();

  return router.pathname === '/' ? (
    <nav className="border-b border-black">
      <ul className="flex">
        <li className="w-3/6">
          <Link
            to="main"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            className="block py-3 uppercase text-[16px] text-center md:text-[20px] xl:text-[30px] cursor-pointer border-r border-black focus:bg-accent hover:bg-accent transition-color duration-300"
          >
            TRENDING
          </Link>
        </li>
        <li className="w-3/6">
          <Link
            to="news"
            spy={true}
            smooth={true}
            offset={-110}
            duration={500}
            className="block py-3 text-[16px] text-center md:text-[20px] xl:text-[30px] cursor-pointer focus:bg-accent hover:bg-accent transition-color duration-300"
          >
            NEWS
          </Link>
        </li>
      </ul>
    </nav>
  ) : null;
};

export default HeaderNavigation;

const NavLinkList = () => {
  return (
    <ul className="flex gap-10">
      <li>
        <a
          href=""
          className="text-xs text-amber-200 uppercase font-bold md:text-sm lg:text-lg"
        >
          1st <span className="hidden sm:inline-block">Section</span>
        </a>
      </li>
      <li>
        <a
          href=""
          className="text-xs text-amber-200 uppercase font-bold md:text-sm lg:text-lg"
        >
          2nd <span className="hidden sm:inline-block">Section</span>
        </a>
      </li>
    </ul>
  );
};

export default NavLinkList;

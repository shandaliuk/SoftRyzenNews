import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="block py-2 text-lg font-thin md:text-xl lg:text-3xl"
    >
      <span>SoftRyzenNews</span>
    </Link>
  );
};

export default Logo;

import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="text-lg font-bold text-amber-200 md:text-xl lg:text-3xl"
    >
      <span className="block md:hidden">SRN</span>
      <span className="hidden md:block">SoftRyzenNews</span>
    </Link>
  );
};

export default Logo;

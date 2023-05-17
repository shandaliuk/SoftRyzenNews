import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="block py-2 text-[20px] md:text-[24px] xl:text-[40px] lg:text-3xl"
    >
      <span>SRN</span>
    </Link>
  );
};

export default Logo;

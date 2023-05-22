import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="inline-block py-2 text-[20px] md:text-[24px] xl:text-[40px] lg:text-3xl group"
    >
      <span className="block w-full group-focus:translate-x-[10%] group-hover:translate-x-[10%] transition duration-300">
        SRN
      </span>
    </Link>
  );
};

export default Logo;

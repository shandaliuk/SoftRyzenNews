import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" className="block py-2 text-lg md:text-xl lg:text-3xl">
      <span>SRN</span>
    </Link>
  );
};

export default Logo;

import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 p-8 md:flex-row md:items-center border-b border-black">
      <h4 className="text-3xl font-black uppercase lg:text-5xl">
        Sign Up for Our Newsletters
      </h4>
      <Link
        href="/contacts"
        className="relative p-3 bg-zinc-200 text-center sm:w-3/6 sm:mx-auto lg:w-2/5 md:text-lg xl:text-2xl border border-black focus:bg-accent hover:bg-accent transition-color duration-300"
      >
        Leave application
        <span className="absolute top-[-5px] right-[-5px] flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 bg-black"></span>
        </span>
        <span className="absolute bottom-[-5px] left-[-5px] flex h-5 w-5">
          <span className="animate-ping absolute inline-flex h-full w-full bg-black opacity-75"></span>
          <span className="relative inline-flex h-5 w-5 bg-black"></span>
        </span>
      </Link>
    </div>
  );
};

export default SignUp;

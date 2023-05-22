import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 p-8 pb-0 mb-8 border-t border-black md:flex-row md:items-center">
      <h4 className="text-3xl font-black uppercase lg:text-5xl">
        Sign Up for Our Newsletters
      </h4>
      <Link
        href="/contacts"
        className="relative p-3 text-center duration-300 border border-black bg-zinc-200 sm:w-3/6 sm:mx-auto lg:w-2/5 md:text-lg xl:text-2xl focus:bg-accent hover:bg-accent transition-color"
      >
        Leave application
        <span className="absolute top-[-5px] right-[-5px] flex h-5 w-5">
          <span className="absolute inline-flex w-full h-full bg-black opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-5 h-5 bg-black"></span>
        </span>
        <span className="absolute bottom-[-5px] left-[-5px] flex h-5 w-5">
          <span className="absolute inline-flex w-full h-full bg-black opacity-75 animate-ping"></span>
          <span className="relative inline-flex w-5 h-5 bg-black"></span>
        </span>
      </Link>
    </div>
  );
};

export default SignUp;

import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex flex-col gap-2 mt-4 p-8 bg-orange-950 md:flex-row md:items-center">
      <h4 className="text-xl font-extrabold text-zinc-200 uppercase">
        Sign Up for Our Newsletters
      </h4>
      <Link
        href="/contacts"
        className="p-3 bg-zinc-200 text-lg text-center font-bold text-orange-950 sm:w-3/6 sm:mx-auto lg:w-2/5"
      >
        Leave application
      </Link>
    </div>
  );
};

export default SignUp;

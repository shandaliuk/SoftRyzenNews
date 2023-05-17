import Link from 'next/link';

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 p-8 md:flex-row md:items-center border-b border-black">
      <h4 className="text-3xl font-black uppercase">
        Sign Up for Our Newsletters
      </h4>
      <Link
        href="/contacts"
        className="p-3 bg-zinc-200 text-center sm:w-3/6 sm:mx-auto lg:w-2/5  border border-black"
      >
        Leave application
      </Link>
    </div>
  );
};

export default SignUp;

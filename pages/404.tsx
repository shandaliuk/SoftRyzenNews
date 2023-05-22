import Link from 'next/link';

import Container from '@/components/SharedComponents/Container';

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <section className="pt-[46px] md:pt-[52px] xl:pt-[51px] mb-8 grow">
        <div className="mb-8 border-t border-b border-black bg-zinc-200">
          <Container>
            <h2 className="py-2 text-5xl font-black text-center uppercase sm:text-6xl md:text-8xl xl:text-9xl">
              404, page not found!
            </h2>
          </Container>
        </div>
        <Link
          href="/"
          className="block w-3/6 px-5 py-3 mx-auto text-center uppercase duration-300 border border-black bg-zinc-200 sm:text-xl lg:text-3xl shadow-strict focus:bg-accent hover:bg-accent transition-color"
        >
          Back to homepage
        </Link>
      </section>
    </div>
  );
};

export default PageNotFound;

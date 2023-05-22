import Image from 'next/image';

import image from '@/assets/images/news.jpg';
import Container from '@/components/SharedComponents/Container';

const Hero = () => {
  return (
    <section className="pt-[96px] md:pt-[108px] lg:pt-[108px] xl:pt-[123px] mb-6">
      <div className="mb-2 border-b border-black bg-zinc-200">
        <Container>
          <h1
            className={
              'py-2 text-[45px] sm:text-[60px] md:text-[90px] lg:text-[100px] xl:text-[180px] uppercase font-black text-center'
            }
          >
            SoftRyzenNews
          </h1>
        </Container>
      </div>
      <div className="mb-4 border-b border-black">
        <Container>
          <h2 className="pb-2 text-sm text-center md:text-md lg:text-xl">
            Best News Resource Ever Existed
          </h2>
        </Container>
      </div>
      <div className="relative">
        <Container>
          <Image
            src={image}
            alt="Newspapers"
            width={1280}
            height={920}
            priority
            sizes="(min-width: 320px) 80vw, (min-width: 480px) 80vw, (min-width: 768px) 80vw, 33vw"
            className="mx-auto border border-black object"
          />
        </Container>
        <Container>
          <p className="absolute w-3/6 p-1 text-xs text-center border border-black bottom-[-10px] bg-zinc-200 right-2/4 translate-x-2/4 md:text-sm lg:text-xl">
            SoftRyzenNews is a prominent and innovative news resource agency
            that delivers reliable and cutting-edge information to its readers.
          </p>
        </Container>
      </div>
      <div></div>
    </section>
  );
};

export default Hero;

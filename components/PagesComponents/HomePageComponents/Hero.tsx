import Image from 'next/image';
import Container from '@/components/SharedComponents/Container';
import image from '@/assets/images/news.jpg';

const Hero = () => {
  return (
    <section className="pt-[90px] lg:pt-[100px]">
      <div className="border-b border-black bg-zinc-200">
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
      <div className="border-b border-black">
        <Container>
          <h2 className="py-2 text-sm text-center md:text-md lg:text-xl">
            Best News Resource Ever Existed
          </h2>
        </Container>
      </div>
      <div className="relative pt-4 pb-6 border-b border-black">
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
          <p className="absolute w-3/6 p-1 text-xs text-center border border-black bg-zinc-200 bottom-2 right-2/4 translate-x-2/4 md:text-sm lg:text-xl">
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

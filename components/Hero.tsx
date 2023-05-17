import Image from 'next/image';
import Container from './Container';
import image from '../public/images/news.jpg';

const Hero = () => {
  return (
    <section className="pt-[90px]">
      <div className="border-b border-black bg-zinc-200">
        <Container>
          <h1
            className={
              'py-2 text-[45px] uppercase font-black text-center sm:text-4xl md:text-5xl lg:text-6xl'
            }
          >
            SoftRyzenNews
          </h1>
        </Container>
      </div>
      <div className="border-b border-black">
        <Container>
          <h2 className="py-2 text-sm text-center md:text-md lg:text-lg">
            Best News Resource Ever Existed
          </h2>
        </Container>
      </div>
      <div className="relative border-b border-black pt-4 pb-6">
        <Container>
          <Image
            id="hero"
            src={image}
            alt="Newspapers"
            width={1280}
            height={920}
            sizes="(min-width: 320px) 80vw, (min-width: 480px) 80vw, (min-width: 768px) 80vw, 33vw"
            className="mx-auto object border border-black"
          />
        </Container>
        <Container>
          <p className="bg-zinc-200 absolute bg-main bottom-2 right-2/4 translate-x-2/4 text-xs text-center md:text-sm lg:text-lg border border-black w-3/6">
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

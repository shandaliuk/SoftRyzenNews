import Image from 'next/image';
import Container from './Container';
import image from '../public/images/news.jpg';

const Hero = () => {
  return (
    <section id="hero" className="pt-[100px] pb-[40px]">
      <Container>
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-3xl font-extrabold text-center text-orange-950">
              SoftRyzenNews
            </h1>
            <h2 className="text-sm font-bold text-center text-orange-950">
              Best News Resource Ever Existed
            </h2>
          </div>
          <Image
            src={image}
            alt="Newspapers"
            width={640}
            height={427}
            sizes="(min-width: 320px) 80vw, (min-width: 480px) 80vw, (min-width: 768px) 80vw, 33vw"
            className="mx-auto"
          />
          <p className="text-xs text-center font-bold text-orange-950">
            SoftRyzenNews is a prominent and innovative news resource agency
            that delivers reliable and cutting-edge information to its readers.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Hero;

import Image from 'next/image';

import { normalizeDate } from '@/helpers/normalizeDate';
import { MainArticleInterface } from './MainArticleInterface';

import Container from '@/components/SharedComponents/Container';

const MainArticle = ({ article }: MainArticleInterface) => {
  return (
    <section className="mb-6" id="main">
      <div className="mb-4 border-t border-b border-black bg-zinc-200">
        <Container>
          <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-black uppercase text-center">
            Trending
          </h2>
        </Container>
      </div>
      <div className="mb-4">
        <Container>
          <Image
            src={
              article.urlToImage
                ? article.urlToImage
                : '../public/images/news.jpg'
            }
            alt={article.title}
            width={1280}
            height={960}
            className="border border-black"
          />
        </Container>
      </div>
      <Container>
        <div className="flex flex-col items-center p-2 border border-black bg-zinc-200">
          <h3 className="mb-2 text-4xl font-black text-center uppercase">
            {article.title}
          </h3>
          <div className="flex gap-2 mb-2">
            <p className="text-xs">{article.author}</p>
            <p className="text-xs">
              {normalizeDate(new Date(article.publishedAt))}
            </p>
          </div>
          <p className="text-center">{article.content.slice(0, -20) + '...'}</p>
        </div>
      </Container>
    </section>
  );
};

export default MainArticle;

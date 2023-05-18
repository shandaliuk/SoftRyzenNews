import Image from 'next/image';
import { normalizeDate } from '@/helpers/normalizeDate';
import { NewsArticle } from '@/interfaces/NewsArticles';
import Container from '@/components/SharedComponents/Container';

interface MainArticleProps {
  article: NewsArticle;
}

const MainArticle = ({ article }: MainArticleProps) => {
  return (
    <section className="border-b border-black pb-4" id="main">
      <div className="border-b border-black bg-zinc-200">
        <Container>
          <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-black uppercase text-center">
            Trending
          </h2>
        </Container>
      </div>
      <div className="py-4">
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
        <div className="border border-black bg-zinc-200 flex flex-col items-center py-2">
          <h3 className="uppercase font-black text-4xl text-center">
            {article.title}
          </h3>
          <div className="flex gap-2 mb-2 mt-2">
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

import Image from 'next/image';
import { normalizeDate } from '@/helpers/normalizeDate';
import { NewsArticle } from '@/models/NewsArticles';
import Container from './Container';

interface MainArticleProps {
  article: NewsArticle;
}

const MainArticle = ({ article }: MainArticleProps) => {
  return (
    <section>
      <div>
        <Container>
          <h2 className="text-[30px] font-black uppercase">Trending</h2>
        </Container>
      </div>
      <Image
        src={
          article.urlToImage ? article.urlToImage : '../public/images/news.jpg'
        }
        alt={article.title}
        width={1280}
        height={960}
      />
      <div className="px-8 pt-2">
        <h3 className="text-2xl font-extrabold">{article.title}</h3>
        <div className="flex gap-2 mb-2 mt-2">
          <p className="text-xs">{article.author}</p>
          <p className="text-xs">
            {normalizeDate(new Date(article.publishedAt))}
          </p>
        </div>
        <p>{article.description}</p>
      </div>
    </section>
  );
};

export default MainArticle;

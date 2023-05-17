import Image from 'next/image';
import { NewsArticle } from '@/models/NewsArticles';
import { normalizeDate } from '@/helpers/normalizeDate';

interface BigArticleComponentProps {
  article: NewsArticle;
}

const Article = ({ article }: BigArticleComponentProps) => {
  return (
    <article className="bg-zinc-200 py-8 md:w-[340px] md:h-[470px] xl:w-[390px] border border-black">
      <div className="border-b border-black px-8 pb-4">
        <Image
          src={
            article.urlToImage
              ? article.urlToImage
              : '../../public/images/news.jpg'
          }
          alt={article.title}
          width={300}
          height={150}
          className="border border-black mx-auto"
        />
      </div>
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
    </article>
  );
};

export default Article;

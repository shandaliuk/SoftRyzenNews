import { useEffect, useState } from 'react';
import Image from 'next/image';

import { normalizeDate } from '@/helpers/normalizeDate';
import { ArticleInterface } from './ArticleInterface';

const Article = ({ article }: ArticleInterface) => {
  const [formattedDate, setFormattedDate] = useState<string | null>(null);

  useEffect(() => {
    setFormattedDate(normalizeDate(new Date(article.publishedAt)));
  }, [article.publishedAt]);

  return (
    <article className="bg-zinc-200 py-8 md:w-[340px] md:h-[510px] xl:w-[390px] border border-black">
      <div className="px-8 mb-4">
        <Image
          src={
            article.urlToImage
              ? article.urlToImage
              : '../../public/images/news.jpg'
          }
          alt={article.title}
          width={300}
          height={150}
          className="mx-auto border border-black"
        />
      </div>
      <div className="px-8 pt-2 border-t border-black">
        <h3 className="mb-2 text-2xl font-extrabold">{article.title}</h3>
        <div className="flex gap-2 mb-2">
          <p className="text-xs">{article.author}</p>
          <p className="text-xs">{formattedDate}</p>
        </div>
        <p>{article.description}</p>
      </div>
    </article>
  );
};

export default Article;

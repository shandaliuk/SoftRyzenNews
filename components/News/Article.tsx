import { NewsArticle } from '@/models/NewsArticles';
import { normalizeDate } from '@/helpers/normalizeDate';

interface BigArticleComponentProps {
  article: NewsArticle;
}

const Article = ({ article }: BigArticleComponentProps) => {
  console.log(article);
  return (
    <article className="p-8 bg-zinc-200 md:w-[340px] md:h-[296px] xl:w-[390px]">
      <h3 className="text-2xl font-extrabold text-orange-950">
        {article.title}
      </h3>
      <div className="flex gap-2 mb-2 mt-2">
        <p className="text-xs text-orange-950">{article.author}</p>
        <p className="text-xs text-orange-950">
          {normalizeDate(new Date(article.publishedAt))}
        </p>
      </div>
      <p className="text-orange-950">{article.description}</p>
    </article>
  );
};

export default Article;

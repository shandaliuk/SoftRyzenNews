import { NewsArticle } from '@/models/NewsArticles';
import Article from './Article';

interface NewsArticleListProps {
  articles: NewsArticle[];
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <ul className="flex flex-col gap-4 md:flex-row flex-wrap justify-between">
      {...articles.slice(0, 8).map(article => (
        <li key={article.url}>
          <Article article={article} />
        </li>
      ))}
      <li className="md:hidden xl:block">
        <Article article={articles[8]} />
      </li>
    </ul>
  );
};

export default NewsArticleList;

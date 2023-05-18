import { NewsArticle } from '@/interfaces/NewsArticles';
import Article from './Article';

interface NewsArticleListProps {
  articles: NewsArticle[];
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <ul className="flex flex-col flex-wrap justify-between gap-4 pt-2 pb-4 md:flex-row">
      {...articles.slice(1, 9).map(article => (
        <li key={article.url}>
          <Article article={article} />
        </li>
      ))}
      <li className="md:hidden xl:block">
        <Article article={articles[9]} />
      </li>
    </ul>
  );
};

export default NewsArticleList;

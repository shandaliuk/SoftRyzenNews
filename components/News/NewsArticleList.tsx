import { NewsArticle } from '@/models/NewsArticles';
import Article from './Article';

interface NewsArticleListProps {
  articles: NewsArticle[];
}

const NewsArticleList = ({ articles }: NewsArticleListProps) => {
  return (
    <ul className="flex pt-2 flex-col gap-4 md:flex-row flex-wrap justify-between pb-4">
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

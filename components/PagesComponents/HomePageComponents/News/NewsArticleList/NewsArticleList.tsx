import { NewsArticleListInterface } from './NewsArticleListInterface';

import Article from '../Article/Article';

const NewsArticleList = ({ articles }: NewsArticleListInterface) => {
  return (
    <ul className="flex flex-col flex-wrap justify-between gap-4 md:flex-row">
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

import { NewsArticle } from '@/models/NewsArticles';
import Container from '../Container';
import NewsArticleList from './NewsArticleList';

interface NewsComponentProps {
  articles: NewsArticle[];
}

const News = ({ articles }: NewsComponentProps) => {
  return (
    <section id="news">
      <Container>
        <h2 className="text-3xl font-extrabold mb-4 text-orange-950 after:content-[''] after:block after:w-full after:h-px after:bg-orange-950">
          Latest News
        </h2>
        <NewsArticleList articles={articles} />
      </Container>
    </section>
  );
};

export default News;

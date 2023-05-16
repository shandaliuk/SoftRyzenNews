import { NewsArticle } from '@/models/NewsArticles';
import Container from '../Container';
import NewsArticleList from './NewsArticleList';
import SignUp from '../SignUp';

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
        <SignUp />
      </Container>
    </section>
  );
};

export default News;

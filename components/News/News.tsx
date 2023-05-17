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
      <div className="border-b border-black bg-zinc-200">
        <Container>
          <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-black uppercase text-center">
            Latest News
          </h2>
        </Container>
      </div>
      <div className="border-b border-black pb-4">
        <Container>
          <NewsArticleList articles={articles} />
        </Container>
      </div>
      <SignUp />
    </section>
  );
};

export default News;

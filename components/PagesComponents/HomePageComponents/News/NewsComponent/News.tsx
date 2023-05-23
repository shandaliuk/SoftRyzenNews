import { NewsComponentInterface } from './NewsComponentInterface';

import NewsArticleList from '../NewsArticleList/NewsArticleList';
import SignUp from '../SignUp/SignUp';

import Container from '@/components/SharedComponents/Container';

const News = ({ articles }: NewsComponentInterface) => {
  return (
    <section id="news">
      <div className="mb-4 border-t border-b border-black bg-zinc-200">
        <Container>
          <h2 className="text-[30px] md:text-[40px] lg:text-[60px] font-black uppercase text-center">
            Latest News
          </h2>
        </Container>
      </div>
      <div className="mb-4">
        <Container>
          <NewsArticleList articles={articles} />
        </Container>
      </div>
      <SignUp />
    </section>
  );
};

export default News;

import { GetServerSideProps } from 'next';
import { NewsArticle, NewsResponse } from '@/models/NewsArticles';
import Hero from '@/components/Hero';
import News from '@/components/News/News';
import MainArticle from '@/components/MainArticle';

interface HomePageProps {
  articles: NewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data: NewsResponse = await response.json();
  return {
    props: { articles: data.articles },
  };
};

export default function Home({ articles }: HomePageProps) {
  return (
    <main>
      <Hero />
      <MainArticle article={articles[0]} />
      <News articles={articles} />
    </main>
  );
}

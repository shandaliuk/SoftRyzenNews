import { GetServerSideProps } from 'next';

import { NewsArticle } from '@/interfaces/NewsInterfaces';
import { getArticles } from '@/services/getArticles';

import Hero from '@/components/PagesComponents/HomePageComponents/Hero';
import News from '@/components/PagesComponents/HomePageComponents/News/NewsComponent/News';
import MainArticle from '@/components/PagesComponents/HomePageComponents/MainArticle/MainArticle';

interface HomePageProps {
  articles: NewsArticle[];
}

export const getServerSideProps: GetServerSideProps<
  HomePageProps
> = async () => {
  const articles = await getArticles();
  return {
    props: { articles },
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

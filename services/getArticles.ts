import { NewsResponse } from '@/interfaces/NewsInterfaces';

export const getArticles = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${process.env.NEWS_API_KEY}`
  );
  const data: NewsResponse = await response.json();
  return data.articles;
};

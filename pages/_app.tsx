import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { Mulish } from 'next/font/google';
import Header from '@/components/Header/Header';
import Head from 'next/head';

const mulish = Mulish({ subsets: ['latin'] });

// Need HEAD

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={mulish.className}>
      <Head>
        <title key="title">NextJS News App</title>
        <meta
          name="description"
          key="description"
          content="NextJS crash course by Coding in Flow"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <footer>Footer</footer>
    </div>
  );
}

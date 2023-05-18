import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Oswald } from 'next/font/google';
import Header from '@/components/SharedComponents/Header/Header';
import Footer from '@/components/SharedComponents/Footer';

const oswald = Oswald({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={oswald.className + ' bg-main text-black'}>
      <Head>
        <title key="title">SOFTRYZENNEWS</title>
        <meta
          name="description"
          key="description"
          content="SoftRyzenNews homepage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

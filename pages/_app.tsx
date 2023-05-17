import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Playfair_Display } from 'next/font/google';
import Header from '@/components/Header/Header';

const payfair = Playfair_Display({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={payfair.className + ' bg-main text-black'}>
      <Head>
        <title key="title">SoftRyzenNews</title>
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
      <footer>Footer</footer>
    </div>
  );
}

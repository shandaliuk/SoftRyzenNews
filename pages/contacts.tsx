import Head from 'next/head';
import SignUp from '@/components/PagesComponents/ContactsPageComponents/SignUp';

const Contacts = () => {
  return (
    <>
      <Head>
        <title key="title">SUBSCRIBE TO SRN</title>
        <meta
          name="description"
          key="description"
          content="SoftRyzenNews subscribe page"
        />
      </Head>
      <main>
        <SignUp />
      </main>
    </>
  );
};

export default Contacts;

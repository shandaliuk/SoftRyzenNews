import Head from 'next/head';
import Container from '@/components/SharedComponents/Container';
import ContactsForm from '@/components/PagesComponents/ContactsPageComponents/ContactsForm';

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
        <section className="pt-[110px] md:pt-[120px] xl:pt-[140px]">
          <div className="pb-4 border-b border-black">
            <Container>
              <h2 className="text-5xl font-black text-center uppercase sm:text-6xl md:text-8xl xl:text-9xl">
                Sing up to our newsletters!
              </h2>
            </Container>
          </div>
          <ContactsForm />
        </section>
      </main>
    </>
  );
};

export default Contacts;

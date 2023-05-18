import Head from 'next/head';
import Container from '@/components/Container';
import ContactsForm from '@/components/ContactsForm';

const Contacts = () => {
  return (
    <>
      <Head>
        <title key="title">SUBSCRIBE TO SRN</title>
        <meta
          name="description"
          key="description"
          content="SoftRyzenNews homepage"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="pt-[110px] md:pt-[120px] xl:pt-[140px]">
          <div className="border-b border-black pb-4">
            <Container>
              <h2 className="font-black uppercase text-5xl sm:text-6xl md:text-8xl xl:text-9xl text-center">
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

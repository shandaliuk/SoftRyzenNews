import Container from '@/components/Container';
import ContactsForm from '@/components/ContactsForm';

const Contacts = () => {
  return (
    <main>
      <Container>
        <section className="pt-20">
          <h2 className="font-extrabold text-2xl text-center text-orange-950">
            Sing up to our newsletters!
          </h2>
          <ContactsForm />
        </section>
      </Container>
    </main>
  );
};

export default Contacts;
